"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const isCta = item.href === "/contact";
            if (isCta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-2 rounded-md bg-gold px-4 py-2 text-sm font-semibold text-black transition hover:bg-gold-light"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition hover:text-gold ${active ? "text-gold" : "text-foreground"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Phone (desktop) */}
        <a
          href={site.phoneHref}
          className="hidden text-sm font-semibold text-gold lg:inline-block"
        >
          {site.phone}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-gold" />
            <span className="block h-0.5 w-5 bg-gold" />
            <span className="block h-0.5 w-5 bg-gold" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-surface hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="mt-2 rounded-md bg-gold px-3 py-2.5 text-center text-base font-semibold text-black"
            >
              Call {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
