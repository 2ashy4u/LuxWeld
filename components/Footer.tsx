import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <span className="text-lg font-bold text-foreground">
            Luxury <span className="text-gold">Welding</span>
          </span>
          <p className="mt-3 max-w-xs text-sm text-muted">{site.description}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Popular Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="text-muted transition hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={site.phoneHref} className="transition hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.phone2Href} className="transition hover:text-gold">
                {site.phone2}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="transition hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>{site.serviceArea}</li>
            <li>{site.hours}</li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-block rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-gold-light"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; insured (pending status).</p>
        </div>
      </div>
    </footer>
  );
}
