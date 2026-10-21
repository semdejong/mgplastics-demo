import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RelatedProducts from "@/components/RelatedProducts";
import { company, contactPerson, emails, markets, productOrder, usps, values } from "@/lib/site";
import { btnPrimary } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Over MG Plastics",
  description:
    "MG Plastics in Zutphen, voorheen Plastic Products & More. Kunststofproducten en het lassen van slabbefolies aan PVC-profielen voor de bouw.",
};

export default function OverPage() {
  return (
    <>
      <header className="border-b border-line bg-muted">
        <div className="wrap py-12 md:py-16">
          <h1 className="max-w-3xl text-4xl font-semibold md:text-5xl">Over MG Plastics</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            MG Plastics (voorheen {company.formerName}) is een vertrouwde partner met langdurige ervaring in de advisering en toelevering van oplossingen voor de Nederlandse bouwindustrie.
          </p>
        </div>
      </header>
      <section data-section="over-mg-plastics-intro" className="wrap py-12 md:py-16">
        <p className="max-w-3xl text-lg leading-relaxed">
          MG Plastics richt zich op een snelle, betrouwbare en efficiënte levering van een totaal productenpakket voor woning- en utiliteitsbouw, de prefab betonindustrie, infrastructurele werken en geluidbeheersing.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {markets.map((market) => (
            <li key={market} className="border border-line px-4 py-3 text-lg">
              {market}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed">
          Wij vervaardigen kunststofproducten voor de bouwsector en lassen slabbefolies aan PVC-profielen. {company.tagline}. Het contact voor algemene vragen is {contactPerson}, via{" "}
          <a className="text-brand underline" href={`mailto:${emails.algemeen}`}>
            {emails.algemeen}
          </a>
          . Het vestigingsadres is {company.street}, {company.postal}.
        </p>
      </section>

      <section data-section="aanpak" className="border-t border-line" aria-labelledby="aanpak">
        <div className="wrap py-12 md:py-16">
          <h2 id="aanpak" className="text-3xl font-semibold">
            Hoe wij werken
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {usps.map((usp) => (
              <li key={usp.title} className="border border-line p-5">
                <h3 className="text-xl font-semibold">{usp.title}</h3>
                <p className="mt-2 text-lg leading-relaxed">{usp.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg">
            Voor lateislabben geldt: gezaagd, gelast en ingepakt, binnen 7 werkdagen in huis. Spoed in overleg. We denken oplossingsgericht met u mee.
          </p>
          <h3 className="mt-12 text-2xl font-semibold">Uit de werkplaats</h3>
          <div className="mt-6">
            <RelatedProducts slugs={[...productOrder]} />
          </div>
        </div>
      </section>

      <section data-section="kernwaarden" className="border-t border-line bg-muted" aria-labelledby="kernwaarden">
        <div className="wrap py-12 md:py-16">
          <h2 id="kernwaarden" className="text-3xl font-semibold">
            Onze kernwaarden
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article key={value.title} className="border border-line bg-white p-5">
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed">
                  {value.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-section="over-mg-plastics-sectie2" className="wrap grid items-start gap-8 py-12 md:py-16 lg:grid-cols-2">
        <figure className="border border-line">
          <Image
            src="/img/werkplaats-hf-lasmachine-1.jpg"
            alt="Medewerker bedient een blauwe hoogfrequent-lasmachine met een lange elektrode"
            width={886}
            height={563}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <figcaption className="px-4 py-3 text-base">Hoogfrequent lassen in de eigen werkplaats.</figcaption>
        </figure>
        <figure className="border border-line">
          <Image
            src="/img/pand-ppm-oud.jpg"
            alt="Bedrijfspand met het bord Plastic Products & More aan de Ambachtsweg. Het huidige adres van MG Plastics is Noorsestraat 9 in Zutphen."
            width={1280}
            height={720}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <figcaption className="px-4 py-3 text-base">
            Eerder onder de naam {company.formerName}. Het huidige adres is {company.street}, {company.postal}.
          </figcaption>
        </figure>
        <div className="lg:col-span-2">
          <Link href="/contact" className={btnPrimary}>
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
