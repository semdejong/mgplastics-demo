import Link from "next/link";
import Image from "next/image";
import Crumbs from "@/components/Crumbs";
import ProfileChooser from "@/components/ProfileChooser";
import ProfileIcon from "@/components/ProfileIcon";
import RelatedProducts from "@/components/RelatedProducts";
import SheetStamp from "@/components/SheetStamp";
import SpecList from "@/components/SpecList";
import { productSheets, slabKenmerken } from "@/lib/sheets";
import { orderHref, type Product } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export default function ProductView({ product }: { product: Product }) {
  const sheet = productSheets[product.slug];
  const crumbs = [
    { href: "/", label: "Home" },
    { href: "/producten", label: "Producten" },
    { label: product.h1 },
  ];

  return (
    <article>
      <header className="border-b border-line bg-muted">
        <div className="wrap grid gap-8 py-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:py-14">
          <div>
            <Crumbs items={crumbs} />
            <p className="mt-6 text-base font-semibold text-brand">{product.eyebrow}</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">{product.h1}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{product.lead}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={orderHref(product.orderProfile)} className={btnPrimary}>
                Bestelling aanvragen
              </Link>
              <a href="tel:+31611754994" className={btnSecondary}>
                Bel 06-11754994
              </a>
            </div>
          </div>
          {sheet && (
            <SheetStamp
              rows={[
                { label: "Plaats", value: sheet.seat },
                { label: "Werkplaats", value: "Zutphen, De Mars" },
                product.group === "lateislabbe"
                  ? { label: "Levering", value: "Gezaagd, gelast en ingepakt, binnen 7 werkdagen" }
                  : { label: "Aanvraag", value: "Via de maatlijst of per mail aan verkoop" },
              ]}
            />
          )}
        </div>
      </header>

      <div className="wrap grid items-start gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:py-16">
        <div className="space-y-4">
          {product.figures.map((figure) => (
            <figure key={figure.src} className="border border-line bg-white">
              <Image
                src={figure.src}
                alt={figure.alt}
                width={figure.width}
                height={figure.height}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {figure.caption && (
                <figcaption className="border-t border-line px-4 py-3 text-base">{figure.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>

        <div>
          {!product.showChooser && (
            <div className="mb-6 flex items-center gap-4 text-brand">
              <span className="flex h-20 w-20 items-center justify-center border border-line bg-muted">
                <ProfileIcon kind={product.profile} />
              </span>
              <p className="text-base font-semibold text-ink">Doorsnede, schematisch</p>
            </div>
          )}

          {product.bullets && (
            <ul className="mb-8 list-disc space-y-2 pl-5 text-lg leading-relaxed">
              {product.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}

          {product.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}

          <h2 className="mt-8 text-2xl font-semibold">Specificaties</h2>
          <div className="mt-3">
            <SpecList rows={product.specs} caption={`Specificaties ${product.h1}`} />
          </div>

          {product.widths && (
            <>
              <h2 className="mt-10 text-2xl font-semibold">Standaardbreedtes</h2>
              <ul className="nums mt-3 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                {product.widths.map((width) => (
                  <li key={width} className="bg-white px-4 py-3 text-lg">
                    {width}
                  </li>
                ))}
              </ul>
            </>
          )}

          {product.downloads && (
            <ul className="mt-8 space-y-3">
              {product.downloads.map((file) => (
                <li key={file.href}>
                  <a href={file.href} className={btnSecondary} target="_blank" rel="noopener noreferrer">
                    {file.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {product.group === "lateislabbe" && product.slug !== "dubbelneus-profiel" && (
        <section data-section="kenmerken" className="border-t border-line bg-muted" aria-labelledby="kenmerken">
          <div className="wrap py-12 md:py-16">
            <h2 id="kenmerken" className="text-2xl font-semibold">
              Dezelfde basis
            </h2>
            <p className="mt-3 max-w-3xl text-lg">
              De lateislabben delen deze kenmerken. De maten hierboven zijn die van dit profiel.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {slabKenmerken.map((item) => (
                <li key={item.label} className="border border-line bg-white p-4">
                  <p className="text-base font-semibold text-ink">{item.label}</p>
                  <p className="mt-2 text-base leading-snug">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {sheet && (
        <section data-section="meesturen" className="border-t border-line" aria-labelledby="meesturen">
          <div className="wrap grid gap-8 py-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:py-16">
            <div>
              <h2 id="meesturen" className="text-2xl font-semibold">
                Dit zet u op de regel
              </h2>
              <p className="mt-3 text-lg">Een volledige regel is genoeg om de maatlijst te starten.</p>
              <Link href={orderHref(product.orderProfile)} className={`${btnPrimary} mt-6`}>
                Naar de maatlijst
              </Link>
            </div>
            <ol className="space-y-3">
              {sheet.send.map((line, index) => (
                <li key={line} className="flex gap-3 border border-line p-4">
                  <span className="nums text-base font-semibold text-brand">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {product.sections?.map((section) => (
        <section data-section={section.id} key={section.id} id={section.id} className="border-t border-line">
          <div className="wrap grid items-start gap-6 py-12 md:grid-cols-[auto_minmax(0,1fr)]">
            {section.id === "ademend" && (
              <span className="flex h-24 w-24 items-center justify-center border border-line bg-muted text-brand">
                <ProfileIcon kind="ademend" className="h-16 w-16" />
              </span>
            )}
            <div>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 max-w-3xl text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {sheet && sheet.related.length > 0 && !product.showChooser && (
        <section data-section="verder" className="border-t border-line bg-muted" aria-labelledby="verder">
          <div className="wrap py-12 md:py-16">
            <h2 id="verder" className="text-2xl font-semibold">
              Verder in het assortiment
            </h2>
            <div className="mt-6">
              <RelatedProducts slugs={sheet.related} />
            </div>
          </div>
        </section>
      )}

      {product.showChooser && (
        <section data-section="kies-profiel" className="border-t border-line bg-muted" aria-labelledby="kies-profiel">
          <div className="wrap py-12 md:py-16">
            <h2 id="kies-profiel" className="text-2xl font-semibold">
              Kies een profiel
            </h2>
            <div className="mt-6">
              <ProfileChooser />
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
