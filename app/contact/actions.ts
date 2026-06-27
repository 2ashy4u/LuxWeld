"use server";

import { services } from "@/lib/data";

export type QuoteState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Record<string, string>;
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

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
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
  // To actually receive these, wire up an email/CRM provider here.
  // Example with Resend (npm i resend), using a RESEND_API_KEY env var:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Quotes <quotes@yourdomain.com>",
  //     to: "info@luxurywelding.com",
  //     subject: `New quote request from ${name}`,
  //     text: JSON.stringify(payload, null, 2),
  //   });
  //
  // Until then, log on the server so nothing is lost during development.
  console.log("[Luxury Welding] New quote request:", payload);

  return {
    status: "success",
    message:
      "Thanks! Your request was received. We'll get back to you with a free estimate as soon as possible.",
  };
}
