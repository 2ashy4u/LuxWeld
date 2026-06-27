import type { Metadata } from "next";
import { site } from "@/lib/site";
import { quoteInfoNeeded } from "@/lib/data";
import { QuoteForm } from "./QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free welding estimate. Tell us about your project and we'll get back to you fast. Mobile service available.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-backdrop border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Request a <span className="text-gold">Free Estimate</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Tell us about your project and we&apos;ll get back to you quickly.
            Need it fast? Same-day and emergency service available.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: contact info + what to provide */}
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="text-lg font-semibold text-gold">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <span className="text-muted">Phone: </span>
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-foreground hover:text-gold"
                  >
                    {site.phone}
                  </a>
                </li>
                <li>
                  <span className="text-muted">Email: </span>
                  <a
                    href={site.emailHref}
                    className="font-semibold text-foreground hover:text-gold"
                  >
                    {site.email}
                  </a>
                </li>
                <li>
                  <span className="text-muted">Service area: </span>
                  <span className="text-foreground">{site.serviceArea}</span>
                </li>
                <li>
                  <span className="text-muted">Hours: </span>
                  <span className="text-foreground">{site.hours}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface p-6">
              <h2 className="text-lg font-semibold text-gold">
                Helpful info for a fast quote
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {quoteInfoNeeded.map((info) => (
                  <li key={info} className="flex items-start gap-2">
                    <span className="mt-0.5 text-gold">✓</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: the form */}
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </>
  );
}
