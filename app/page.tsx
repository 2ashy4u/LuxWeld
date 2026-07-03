import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import {
  services,
  materials,
  weldingProcesses,
  whyChooseUs,
} from "@/lib/data";
import { CtaBand } from "@/components/CtaBand";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-backdrop relative overflow-hidden border-b border-border">
        {/* Watermark logo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/logo-mark.svg"
            alt=""
            width={920}
            height={610}
            className="w-[480px] max-w-none opacity-30 sm:w-[640px] lg:w-[720px]"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <span className="inline-block rounded-full border border-gold/40 bg-background/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {site.tagline}
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            <span className="text-gold-gradient block">Luxury Welding</span>
            <span className="mt-3 block text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Precision Welding &amp; Custom Fabrication
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Family operated. Mobile and shop welding for residential,
            commercial, industrial, and agricultural jobs. Fast response,
            quality workmanship, and free estimates — we bring the shop to you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full rounded-md bg-gold px-8 py-3.5 text-center font-semibold text-black transition hover:bg-gold-light sm:w-auto"
            >
              Get a Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="w-full rounded-md border border-gold px-8 py-3.5 text-center font-semibold text-gold transition hover:bg-gold hover:text-black sm:w-auto"
            >
              Call {site.phone}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            {[
              "Mobile Welding",
              "Free Estimates",
              "Licensed & Insured",
              "Emergency Service",
              "Satisfaction Guaranteed",
            ].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <span className="text-gold">◆</span> {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services We Offer</h2>
          <p className="mt-3 text-muted">
            From a quick on-site repair to full custom fabrication — if it&apos;s
            metal, we can build, fix, or modify it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-gold/60 hover:bg-surface-2"
            >
              <h3 className="text-2xl font-semibold text-foreground transition group-hover:text-gold sm:text-3xl">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{service.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold">
                View details
                <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-block rounded-md border border-border px-6 py-3 font-semibold text-foreground transition hover:border-gold hover:text-gold"
          >
            See all services
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
            <p className="mt-3 text-muted">
              Reliable, professional welding you can count on.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-lg border border-border bg-background p-5"
              >
                <span className="mt-0.5 text-gold">✓</span>
                <span className="text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & processes */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Materials We Work With
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {materials.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Welding Processes</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {weldingProcesses.map((p) => (
                <div
                  key={p.code}
                  className="rounded-lg border border-border bg-surface px-4 py-3"
                >
                  <span className="font-semibold text-foreground">
                    {p.name}
                  </span>{" "}
                  <span className="text-sm text-gold">({p.code})</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
