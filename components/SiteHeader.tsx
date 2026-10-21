"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setDesktopOpen(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setDesktopOpen(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[90rem] items-center gap-2 px-5 py-2 xl:gap-3">
        <Link href="/" className="mr-auto flex min-h-11 shrink-0 items-center">
          <Image
            src="/img/logo-mgplastics.png"
            alt="MG Plastics, Professionals in Hoogfrequent-lastechniek"
            width={1920}
            height={1263}
            priority
            className="h-14 w-auto xl:h-12"
          />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Hoofdmenu">
          {nav.map((item) => {
            const active =
              isCurrent(pathname, item.href) ||
              item.children?.some((child) => isCurrent(pathname, child.href));
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-11 shrink-0 items-center whitespace-nowrap px-2.5 text-base font-semibold ${active ? "text-brand" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              );
            }
            const shown = desktopOpen === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopOpen(item.label)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <button
                  type="button"
                  className={`inline-flex min-h-11 shrink-0 items-center gap-1 whitespace-nowrap px-2.5 text-base font-semibold ${active ? "text-brand" : "text-ink"}`}
                  aria-expanded={shown}
                  aria-haspopup="true"
                  onClick={() => setDesktopOpen(shown ? null : item.label)}
                >
                  {item.label}
                  <span aria-hidden className="text-sm">
                    ▾
                  </span>
                </button>
                {shown && (
                  <ul className="absolute left-0 top-full z-50 min-w-64 border border-line bg-white py-2 shadow-sm">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex min-h-11 items-center px-4 text-base hover:bg-muted"
                          aria-current={isCurrent(pathname, child.href) ? "page" : undefined}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>

        <a
          href={`tel:${company.phoneTel}`}
          className="hidden min-h-11 shrink-0 items-center whitespace-nowrap px-2 text-base font-semibold text-ink xl:inline-flex"
        >
          Bel {company.phoneDisplay}
        </a>
        <Link
          href="/bestellen"
          className="hidden h-11 shrink-0 items-center justify-center whitespace-nowrap bg-brand px-5 text-base font-semibold text-white hover:bg-brand-dark xl:inline-flex"
        >
          Bestelling aanvragen
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center border border-line xl:hidden"
          aria-expanded={open}
          aria-controls="mobiel-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Menu sluiten" : "Menu openen"}</span>
          {open ? (
            <span aria-hidden className="relative block h-5 w-5">
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 bg-ink" />
              <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 -rotate-45 bg-ink" />
            </span>
          ) : (
            <span aria-hidden className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 bg-ink" />
              <span className="h-0.5 bg-ink" />
              <span className="h-0.5 bg-ink" />
            </span>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobiel-menu"
          aria-label="Mobiel menu"
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white px-5 py-2 xl:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-line">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex min-h-11 w-full items-center justify-between text-left text-lg font-semibold"
                      aria-expanded={mobileSection === item.label}
                      onClick={() =>
                        setMobileSection((current) => (current === item.label ? null : item.label))
                      }
                    >
                      {item.label}
                      <span aria-hidden>{mobileSection === item.label ? "−" : "+"}</span>
                    </button>
                    {mobileSection === item.label && (
                      <ul className="pb-3">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="flex min-h-11 items-center pl-3 text-lg">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="flex min-h-11 items-center text-lg font-semibold">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
