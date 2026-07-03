import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${site.name} home`}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={64}
        height={64}
        priority
        className="h-14 w-14 sm:h-16 sm:w-16"
      />
      <span className="flex flex-col gap-1 leading-none">
        <span className="text-lg font-bold tracking-wide text-foreground">
          Luxury <span className="text-gold">Welding</span>
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
          Mobile • Fabrication • Repair
        </span>
      </span>
    </Link>
  );
}
