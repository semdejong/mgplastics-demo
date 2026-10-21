import type { Metadata } from "next";
import Link from "next/link";
import ProfileIcon from "@/components/ProfileIcon";
import { productSheets } from "@/lib/sheets";
import { productOrder, products } from "@/lib/site";

export const metadata: Metadata = {
  title: "Producten",
  description:
    "Overzicht van lateislabben, losse profielen, PVC-folie en PVC-manchetten van MG Plastics in Zutphen.",
};

export default function ProductenPage() {
  const latei = productOrder.filter((slug) => products[slug].group === "lateislabbe");
  const overig = productOrder.filter((slug) => products[slug].group === "overig");

  return (
    <>
      <header className="border-b border-line bg-muted">
        <div className="wrap py-12 md:py-16">
          <h1 className="text-4xl font-semibold md:text-5xl">Producten</h1>
          <p className="mt-4 max-w-3xl text-lg">
            Lateislabben voor kozijnen, losse profielen zonder folie, PVC-folie en manchetten. Alles uit de eigen lasproductie in Zutphen.
          </p>
        </div>
      </header>
      <Catalog
        title="Lateislabben"
        id="lateislabben"
        slugs={latei}
        intro="Vochtkering boven kozijnen in de spouw. Zo'n 50 profielen in zwart, wit en grijs uit voorraad. Gezaagd, gelast en ingepakt, binnen 7 werkdagen in huis."
      />
      <Catalog
        title="Profielen, folie en manchetten"
        id="overig"
        slugs={overig}
        muted
        intro="Losse profielen zonder folie, PVC-folie op rol of pallet, en manchetten op maat voor roosters en suskasten."
      />
    </>
  );
}

function Catalog({
  title,
  id,
  slugs,
  intro,
  muted = false,
}: {
  title: string;
  id: string;
  slugs: readonly string[];
  intro: string;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "border-t border-line bg-muted" : ""} aria-labelledby={id}>
      <div className="wrap py-12 md:py-16">
        <h2 id={id} className="text-2xl font-semibold">
          {title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg">{intro}</p>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {slugs.map((slug) => {
            const product = products[slug];
            return (
              <li key={slug}>
                <Link
                  href={`/${slug}`}
                  className="flex h-full min-h-11 gap-4 border border-line bg-white p-4 hover:border-brand"
                >
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center bg-muted text-brand">
                    <ProfileIcon kind={product.profile} className="h-12 w-12" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-ink">{product.h1}</span>
                    <span className="mt-1 block text-base leading-snug">{product.card}</span>
                    <span className="mt-2 block text-base leading-snug">{productSheets[slug].seat}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
