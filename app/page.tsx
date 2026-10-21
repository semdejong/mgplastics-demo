import Image from "next/image";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import KozijnMap from "@/components/KozijnMap";
import OrderSteps from "@/components/OrderSteps";
import ProfileChooser from "@/components/ProfileChooser";
import ProfileIcon from "@/components/ProfileIcon";
import WeldSeam from "@/components/WeldSeam";
import { packNotes } from "@/lib/sheets";
import {
  company,
  emails,
  hfApplications,
  homeFaq,
  mapsUrl,
  markets,
  openingHoursText,
  products,
  usps,
  values,
} from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/ui";

const swatches = [
  { name: "Zwart", hex: "#1a1a1a" },
  { name: "Grijs", hex: "#8d939c" },
  { name: "Wit", hex: "#ffffff" },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="wrap grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <p className="text-base font-semibold text-brand">{company.headerLine}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">
              Lateislabben op maat, binnen 7 werkdagen in huis
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed">
              Gezaagd, gelast en ingepakt. Zo&apos;n 50 profielen in zwart, wit en grijs uit voorraad.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/bestellen" className={btnPrimary}>
                Bestelling aanvragen
              </Link>
              <a href={`tel:${company.phoneTel}`} className={btnSecondary}>
                Bel {company.phoneDisplay}
              </a>
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-t-2 border-brand pt-3">
                <dt className="text-base">Levertijd</dt>
                <dd className="nums text-lg font-semibold text-ink">7 werkdagen</dd>
              </div>
              <div className="border-t-2 border-brand pt-3">
                <dt className="text-base">Uit voorraad</dt>
                <dd className="text-lg font-semibold text-ink">Zwart, wit en grijs</dd>
              </div>
              <div className="border-t-2 border-brand pt-3">
                <dt className="text-base">Eigen machines</dt>
                <dd className="nums text-lg font-semibold text-ink">3 t/m 10 kW</dd>
              </div>
            </dl>
          </div>
          <figure className="border border-line bg-white">
            <Image
              src="/img/hero-lateislabbe-klikprofiel.jpg"
              alt="Grijs hoekprofiel van een lateislabbe op de bovenzijde van een wit kozijn, tegen de spouw"
              width={1920}
              height={1439}
              priority
              className="aspect-[4/3] h-auto w-full object-cover"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
            <figcaption className="grid grid-cols-2 gap-px bg-line text-base sm:grid-cols-4">
              {[
                ["Onderdeel", "Lateislabbe"],
                ["Positie", "Bovenkant kozijn"],
                ["Materiaal", "PVC"],
                ["Las", "Versterkte HD-las"],
              ].map(([label, value]) => (
                <div key={label} className="bg-white px-3 py-3">
                  <span className="block text-brand">{label}</span>
                  <span className="font-semibold text-ink">{value}</span>
                </div>
              ))}
            </figcaption>
          </figure>
        </div>
        <WeldSeam />
      </section>

      <section className="bg-muted" aria-labelledby="twee-routes">
        <div className="wrap py-14 md:py-20">
          <h2 id="twee-routes" className="max-w-3xl text-3xl font-semibold">
            Twee routes, één werkplaats
          </h2>
          <p className="mt-3 max-w-2xl text-lg">
            Lateislabben voor de bouw, of hoogfrequent lassen in opdracht. Beide komen uit dezelfde werkplaats.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <Link href="/lateislabbe" className="flex min-h-11 flex-col border border-line bg-white hover:border-brand">
              <Image
                src="/img/hero-lateislabbe-klikprofiel.jpg"
                alt="Grijs hoekprofiel van een lateislabbe op een wit kozijn"
                width={1920}
                height={1439}
                className="h-48 w-full object-cover"
              />
              <span className="flex flex-1 flex-col p-6">
                <span className="text-base font-semibold text-brand">Voor kozijnen en de bouw</span>
                <span className="mt-2 block text-2xl font-semibold text-ink">Lateislabben en profielen voor de bouw</span>
                <span className="mt-3 block text-lg leading-relaxed">
                  Hoekprofiel, HWS, platstrip, T-profiel en dubbelneus. Op maat gezaagd en gelast, of op rol.
                </span>
                <span className="mt-6 text-base font-semibold text-brand underline">Naar de lateislabben</span>
              </span>
            </Link>
            <Link href="/hoogfrequent-lassen" className="flex min-h-11 flex-col border border-line bg-white hover:border-brand">
              <Image
                src="/img/werkplaats-hf-lasmachine-1.jpg"
                alt="Medewerker bedient een blauwe hoogfrequent-lasmachine"
                width={886}
                height={563}
                className="h-48 w-full object-cover"
              />
              <span className="flex flex-1 flex-col p-6">
                <span className="text-base font-semibold text-brand">Lassen in opdracht</span>
                <span className="mt-2 block text-2xl font-semibold text-ink">Hoogfrequent lassen in opdracht</span>
                <span className="mt-3 block text-lg leading-relaxed">
                  Zeilen, tenten, zonneschermen, vrachtwagenzeilen, billboards en speciale vormen. Wij lassen het zelf.
                </span>
                <span className="mt-6 text-base font-semibold text-brand underline">Naar hoogfrequent lassen</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="op-het-kozijn">
        <div className="wrap py-14 md:py-20">
          <h2 id="op-het-kozijn" className="text-3xl font-semibold">
            Waar het op het kozijn zit
          </h2>
          <p className="mt-3 max-w-2xl text-lg">
            Vijf plaatsen, vijf producten. De nummers op de plaat verwijzen naar het profiel.
          </p>
          <div className="mt-8">
            <KozijnMap />
          </div>
        </div>
      </section>

      <section className="bg-muted" aria-labelledby="profielkiezer">
        <div className="wrap py-14 md:py-20">
          <h2 id="profielkiezer" className="text-3xl font-semibold">
            Profielkiezer
          </h2>
          <p className="mt-3 max-w-2xl text-lg">Zes lateislabben. Kies de doorsnede die bij het kozijn past.</p>
          <div className="mt-8">
            <ProfileChooser />
          </div>
        </div>
      </section>

      <section className="bg-muted" aria-labelledby="kleuren-maten">
        <div className="wrap py-14 md:py-20">
          <h2 id="kleuren-maten" className="text-3xl font-semibold">
            Kleuren en maten
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {swatches.map((swatch) => (
              <li key={swatch.name} className="flex items-center gap-4 border border-line bg-white p-4">
                <span
                  className="h-12 w-12 border border-line"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden
                />
                <span className="text-lg font-semibold">{swatch.name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-lg">
            Uit voorraad in zwart, wit en grijs. Het dubbelneus-profiel is standaard grijs; andere kleuren daarvan vanaf 500 meter in overleg.
          </p>
          <dl className="nums mt-8 grid gap-4 md:grid-cols-3">
            <div className="border border-line bg-white p-4">
              <dt className="text-base font-semibold">HWS-profiel</dt>
              <dd className="mt-1 text-lg">Stelkozijnen tot 6.400 mm</dd>
            </div>
            <div className="border border-line bg-white p-4">
              <dt className="text-base font-semibold">T-profiel</dt>
              <dd className="mt-1 text-lg">Op lengte, max. 6000 mm</dd>
            </div>
            <div className="border border-line bg-white p-4">
              <dt className="text-base font-semibold">Dubbelneus-profiel</dt>
              <dd className="mt-1 text-lg">100 t/m 600 mm, op rol van 25 m</dd>
            </div>
            <div className="border border-line bg-white p-4">
              <dt className="text-base font-semibold">Losse profielen</dt>
              <dd className="mt-1 text-lg">10 mm t/m 6400 mm, zonder folie</dd>
            </div>
            <div className="border border-line bg-white p-4">
              <dt className="text-base font-semibold">PVC-folie</dt>
              <dd className="mt-1 text-lg">0,4 mm, rollen van 50 of 125 m1</dd>
            </div>
            <div className="border border-line bg-white p-4">
              <dt className="text-base font-semibold">HWS-uitvoeringen</dt>
              <dd className="mt-1 text-lg">Harde of flexibele neus, smal of XL</dd>
            </div>
          </dl>
        </div>
      </section>

      <section aria-labelledby="zo-werkt-bestellen">
        <div className="wrap py-14 md:py-20">
          <h2 id="zo-werkt-bestellen" className="text-3xl font-semibold">
            Zo werkt bestellen
          </h2>
          <p className="mt-3 max-w-2xl text-lg">Stuur uw maatlijst. Wij zagen, lassen en pakken in.</p>
          <div className="mt-8">
            <OrderSteps />
          </div>
          <p className="mt-6 text-lg">Spoedleveringen in overleg. We denken oplossingsgericht met u mee.</p>
          <Link href="/bestellen" className={`${btnPrimary} mt-6`}>
            Bestelling aanvragen
          </Link>
          <h3 className="mt-14 text-2xl font-semibold">Wat er in de verpakking zit</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {packNotes.map((note, index) => (
              <li key={note.title} className={`border-t-2 border-brand pt-3 ${index > 2 ? "xl:col-span-3" : "xl:col-span-2"}`}>
                <p className="text-lg font-semibold text-ink">{note.title}</p>
                <p className="mt-1 text-lg">{note.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <WeldSeam />
      </section>

      <section className="bg-muted" aria-labelledby="eigen-productie">
        <div className="wrap py-14 md:py-20">
          <h2 id="eigen-productie" className="text-3xl font-semibold">
            Eigen productie
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed">
            {company.tagline}. Wij hebben lasmachines van 3 t/m 10 kW in de productie staan, waardoor dikkere soorten PVC te lassen zijn. Ook beschikken we over snijlijnen waardoor afritsen mogelijk is.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            <figure className="overflow-hidden border border-line bg-white md:col-span-3">
              <Image
                src="/img/werkplaats-hf-lasmachine-1.jpg"
                alt="Medewerker bedient een blauwe hoogfrequent-lasmachine met een lange elektrode"
                width={886}
                height={563}
                className="aspect-[3/2] h-auto w-full object-cover"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </figure>
            <figure className="relative aspect-[3/2] overflow-hidden border border-line bg-white md:col-span-2 md:aspect-auto md:h-full">
              <Image
                src="/img/werkplaats-hf-lasmachine-2.jpg"
                alt="Medewerker stelt een hoogfrequent-lasmachine in, met koperen elektroden"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 35vw, 100vw"
              />
            </figure>
            <figure className="overflow-hidden border border-line bg-white md:col-span-5">
              <Image
                src="/img/werkplaats-slabben-op-maat.jpg"
                alt="Dozen met lateislabben op houten pallets in de hal"
                width={720}
                height={960}
                className="aspect-[21/9] h-auto w-full object-cover object-[center_18%]"
                sizes="100vw"
              />
              <figcaption className="px-4 py-3 text-base">Lateislabben ingepakt, klaar voor levering.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="hf-opdracht">
        <div className="wrap grid gap-8 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 id="hf-opdracht" className="text-3xl font-semibold">
              Hoogfrequent lassen in opdracht
            </h2>
            <p className="mt-3 text-lg leading-relaxed">
              Grote laslijnen voor zeildoeken en tenten, kleinere machines voor korte elektrodes en speciale vormen. Lange stroken PVC, ronde ramen van doorzichtig PVC, of een andere vorm.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {hfApplications.map((item) => (
                <li key={item} className="border border-line px-4 py-3 text-lg">
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/hoogfrequent-lassen" className={`${btnPrimary} mt-6`}>
              Vraag naar de mogelijkheden
            </Link>
          </div>
          <figure className="self-start overflow-hidden border border-line bg-white">
            <Image
              src="/img/werkplaats-lassen.png"
              alt="Werktafel met rollen PVC-folie en gelaste stroken, met een lasmachine op de achtergrond"
              width={520}
              height={350}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <figcaption className="border-t border-line px-4 py-3 text-base">
              Hoogfrequent lassen in de eigen werkplaats.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-muted" aria-labelledby="ook-leverbaar">
        <div className="wrap py-14 md:py-20">
          <h2 id="ook-leverbaar" className="text-3xl font-semibold">
            Ook leverbaar
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {(
              [
                ["hoekprofielen", "Losse hoekprofielen", "/img/product-hard-pvc-profielen.jpg", "Harde kunststofprofielen in verschillende doorsneden", 800, 711],
                ["pvc-folie", "PVC-folie", "/img/product-pvc-folie.png", "Rol zwarte PVC-folie, deels uitgerold", 600, 480],
                ["manchetten", "PVC-manchetten", "/img/product-manchet.jpg", "Zwarte PVC-manchet met flens en gelaste hoeken", 400, 267],
              ] as const
            ).map(([slug, title, src, alt, w, h]) => {
              const product = products[slug];
              return (
                <li key={slug}>
                  <Link href={`/${slug}`} className="flex h-full min-h-11 flex-col border border-line bg-white hover:border-brand">
                    <Image src={src} alt={alt} width={w} height={h} className="aspect-[4/3] h-auto w-full bg-muted object-contain" />
                    <span className="flex flex-1 flex-col p-5">
                      <span className="flex items-center gap-3">
                        <ProfileIcon kind={product.profile} className="h-10 w-10 text-brand" />
                        <span className="text-xl font-semibold text-ink">{title}</span>
                      </span>
                      <span className="mt-2 block text-lg">{product.card}</span>
                      {slug === "pvc-folie" && (
                        <span className="mt-3 block text-base">Datasheet als PDF op de productpagina.</span>
                      )}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="waar-wij-voor-staan">
        <div className="wrap py-14 md:py-20">
          <h2 id="waar-wij-voor-staan" className="text-3xl font-semibold">
            Waar wij voor staan
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {usps.map((usp) => (
              <li key={usp.title} className="border border-line p-5">
                <h3 className="text-xl font-semibold">{usp.title}</h3>
                <p className="mt-2 text-lg leading-relaxed">{usp.text}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-12 text-2xl font-semibold">Kernwaarden</h3>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <li key={value.title} className="bg-muted p-5">
                <h4 className="text-xl font-semibold">{value.title}</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed">
                  {value.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-white" aria-labelledby="voor-wie">
        <div className="wrap py-14 md:py-20">
          <h2 id="voor-wie" className="text-3xl font-semibold text-white">
            Voor wie
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-relaxed text-white/90">
            MG Plastics richt zich op een snelle, betrouwbare en efficiënte levering voor de Nederlandse bouwindustrie.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {markets.map((market) => (
              <li key={market} className="border border-white/25 px-4 py-4 text-lg">
                {market}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq">
        <div className="wrap py-14 md:py-20">
          <h2 id="faq" className="text-3xl font-semibold">
            Veelgestelde vragen
          </h2>
          <div className="mt-6">
            <FaqList items={homeFaq} />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-muted" aria-labelledby="contact-route">
        <div className="wrap grid gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h2 id="contact-route" className="text-3xl font-semibold">
              Contact en route
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              {company.legalName}
              <br />
              {company.street}
              <br />
              {company.postal}
              <br />
              {company.area}
            </p>
            <p className="mt-4 text-lg">
              <a className="font-semibold text-brand underline" href={`tel:${company.phoneTel}`}>
                {company.phoneDisplay}
              </a>
              <span className="mt-1 block text-base">{company.phonePrinted}</span>
            </p>
            <p className="mt-4 text-lg">{openingHoursText}</p>
            <a href={mapsUrl} className={`${btnSecondary} mt-6`} target="_blank" rel="noopener noreferrer">
              Route in Google Maps
            </a>
          </div>
          <dl className="space-y-4 text-lg">
            <div>
              <dt className="font-semibold">Administratie</dt>
              <dd>
                <a className="text-brand underline" href={`mailto:${emails.administratie}`}>
                  {emails.administratie}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Algemeen, Mike</dt>
              <dd>
                <a className="text-brand underline" href={`mailto:${emails.algemeen}`}>
                  {emails.algemeen}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Verkoop</dt>
              <dd>
                <a className="text-brand underline" href={`mailto:${emails.verkoop}`}>
                  {emails.verkoop}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Facturen</dt>
              <dd>
                <a className="text-brand underline" href={`mailto:${emails.facturen}`}>
                  {emails.facturen}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
