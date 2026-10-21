import Link from "next/link";
import { company } from "@/lib/site";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <a
        href="https://sleads.nl"
        target="_blank"
        rel="noopener"
        className="mb-1 flex items-center justify-center gap-1.5 py-1 text-xs font-medium text-neutral-800"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
        Concept door <span className="font-semibold">Sleads</span>
      </a>
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${company.phoneTel}`}
          className="inline-flex min-h-11 items-center justify-center whitespace-nowrap border border-ink px-2 text-center text-base font-semibold leading-none text-ink"
        >
          Bel {company.phoneDisplay}
        </a>
        <Link
          data-cta="offerte"
          href="/bestellen"
          className="inline-flex min-h-11 items-center justify-center whitespace-nowrap bg-brand px-2 text-center text-base font-semibold leading-none text-white"
        >
          Bestellen
        </Link>
      </div>
    </div>
  );
}
