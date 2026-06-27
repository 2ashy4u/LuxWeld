import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="border-y border-gold/30 bg-gradient-to-r from-background via-surface to-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Need a welder <span className="text-gold">fast?</span>
          </h2>
          <p className="mt-2 text-muted">
            Free estimates. Mobile service available. Emergency & after-hours
            welding.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phoneHref}
            className="rounded-md border border-gold px-6 py-3 text-center font-semibold text-gold transition hover:bg-gold hover:text-black"
          >
            Call {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-md bg-gold px-6 py-3 text-center font-semibold text-black transition hover:bg-gold-light"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
