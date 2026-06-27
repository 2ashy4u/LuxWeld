import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { whyChooseUs, weldingProcesses, materials } from "@/lib/data";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn why customers choose Luxury Welding: mobile service, fast response, licensed and insured, free estimates, and quality workmanship.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-backdrop border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            About <span className="text-gold">Luxury Welding</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Quality welding and fabrication backed by fast response and honest
            work — for residential, commercial, industrial, and agricultural
            customers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Skilled welding, wherever you need it
          </h2>
          <p className="mt-4 text-muted">
            Whether it&apos;s an emergency repair on a job site, a custom
            fabrication project, or routine maintenance, {site.name} brings the
            tools, equipment, and experience to get it done right. With mobile
            service available, we come to your home, business, farm, or work
            site — and we stand behind every weld.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Why Choose Us
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-lg border border-border bg-black p-5"
              >
                <span className="mt-0.5 text-gold">✓</span>
                <span className="text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
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
          <div>
            <h2 className="text-2xl font-bold">Materials</h2>
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
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-gold px-6 py-3 font-semibold text-black transition hover:bg-gold-light"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
