import type { Metadata } from "next";
import Link from "next/link";
import {
  services,
  materials,
  weldingProcesses,
} from "@/lib/data";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full list of welding and fabrication services: mobile welding, repairs, fabrication, trailer, gates, structural, industrial, agricultural, specialty, cutting, and installation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-backdrop border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Comprehensive welding, repair, and fabrication services delivered
            on-site or in the shop. Don&apos;t see your job listed? Just ask.
          </p>
        </div>
      </section>

      {/* Quick category jump links */}
      <nav className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition hover:border-gold hover:text-gold"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {services.map((service) => (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-1 border-b border-border pb-5">
                <h2 className="text-2xl font-bold text-gold">
                  {service.title}
                </h2>
                <p className="text-muted">{service.blurb}</p>
              </div>
              <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 text-gold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gold-light"
                >
                  Request a Quote
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Materials & processes */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Materials We Work With</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {materials.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Welding Processes</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {weldingProcesses.map((p) => (
                <div
                  key={p.code}
                  className="rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <span className="font-semibold">{p.name}</span>{" "}
                  <span className="text-sm text-gold">({p.code})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
