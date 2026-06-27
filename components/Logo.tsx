import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} home`}
    >
      {/* Placeholder mark until the real logo image is supplied */}
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-gold/60 bg-black">
        <span className="text-gold font-bold text-lg leading-none">LW</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-wide text-foreground">
          Luxury <span className="text-gold">Welding</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
          Mobile • Fabrication • Repair
        </span>
      </span>
    </Link>
  );
}
