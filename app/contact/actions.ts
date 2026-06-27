"use server";

import nodemailer from "nodemailer";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
  values?: Record<string, string>;
};

const validServiceTitles = new Set(services.map((s) => s.title));

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  // Honeypot: bots fill hidden fields. If present, silently "succeed".
  if ((formData.get("company_website") as string)?.trim()) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const service = (formData.get("service") as string)?.trim() ?? "";
  const location = (formData.get("location") as string)?.trim() ?? "";
  const material = (formData.get("material") as string)?.trim() ?? "";
  const measurements = (formData.get("measurements") as string)?.trim() ?? "";
  const completion = (formData.get("completion") as string)?.trim() ?? "";
  const mobile = (formData.get("mobile") as string)?.trim() ?? "";
  const details = (formData.get("details") as string)?.trim() ?? "";

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!email && !phone)
    fieldErrors.email = "Provide an email or phone so we can reach you.";
  if (email && !isValidEmail(email))
    fieldErrors.email = "Please enter a valid email address.";
  if (details.length < 5)
    fieldErrors.details = "Please describe the work you need.";
  if (service && !validServiceTitles.has(service))
    fieldErrors.service = "Please choose a valid service.";

  // Preserve what the user typed so the form can repopulate on error.
  const values: Record<string, string> = {
    name,
    email,
    phone,
    service,
    location,
    material,
    measurements,
    completion,
    mobile,
    details,
  };

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  // Build the quote payload.
  const payload = {
    name,
    email,
    phone,
    service,
    location,
    material,
    measurements,
    completion,
    mobileServiceRequested: mobile === "on" || mobile === "yes",
    details,
    submittedAt: new Date().toISOString(),
  };

  // --- Delivery ---
  // Sends the quote request to the business inbox via Gmail SMTP.
  // Requires two environment variables (set in .env.local, never committed):
  //   GMAIL_USER          your full Gmail address
  //   GMAIL_APP_PASSWORD  a 16-char Google App Password (not your login password)
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  const lines = [
    `Name: ${name}`,
    `Email: ${email || "—"}`,
    `Phone: ${phone || "—"}`,
    `Service: ${service || "—"}`,
    `Material: ${material || "—"}`,
    `Location: ${location || "—"}`,
    `Measurements: ${measurements || "—"}`,
    `Desired completion: ${completion || "—"}`,
    `Mobile service requested: ${payload.mobileServiceRequested ? "Yes" : "No"}`,
    "",
    "Details:",
    details,
    "",
    `Submitted: ${payload.submittedAt}`,
  ].join("\n");

  if (!gmailUser || !gmailPass) {
    // Email isn't configured yet — log so nothing is lost during development.
    console.warn(
      "[Luxury Welding] GMAIL_USER / GMAIL_APP_PASSWORD not set; logging instead of emailing.",
    );
    console.log("[Luxury Welding] New quote request:", payload);
    return {
      status: "success",
      message:
        "Thanks! Your request was received. We'll get back to you with a free estimate as soon as possible.",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    await transporter.sendMail({
      from: `"${site.name} Website" <${gmailUser}>`,
      to: site.email,
      replyTo: email || undefined,
      subject: `New quote request from ${name}`,
      text: lines,
    });
  } catch (err) {
    console.error("[Luxury Welding] Failed to send quote email:", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong sending your request. Please call or email us directly.",
      values,
    };
  }

  return {
    status: "success",
    message:
      "Thanks! Your request was received. We'll get back to you with a free estimate as soon as possible.",
  };
}
