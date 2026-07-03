import type { Metadata } from "next";
import Link from "next/link";
import { pricing } from "@/lib/data";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Welding pricing quoted per job: emergency service, travel charges, fabrication, and structural projects. Free estimates — contact us for an exact quote.",
};

export default function PricingPage() {
  return (
    <>
      <section className="hero-backdrop border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            <span className="text-gold">Pricing</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Straightforward rates with free estimates. Final pricing depends on
            the job, materials, and location — contact us for an exact quote.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-gold/60"
            >
              <h2 className="text-lg font-semibold text-gold">{item.title}</h2>
              {item.price && (
                <p className="mt-2 text-2xl font-bold text-foreground">
                  {item.price}
                </p>
              )}
              {item.details && (
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gold">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-gold/30 bg-surface p-6 text-sm text-muted sm:p-8">
          <h3 className="text-base font-semibold text-foreground">
            A note on pricing
          </h3>
          <p className="mt-2">
            Every job is different, so we quote each project individually.
            Specialty work (aluminum, stainless, TIG) and equipment usage may
            carry additional charges. Materials and consumables are billed
            separately.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-gold px-5 py-2.5 font-semibold text-black transition hover:bg-gold-light"
          >
            Get an Exact Quote
          </Link>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
