import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { hfSteps } from "@/lib/sheets";
import { company, emails, hfApplications } from "@/lib/site";
import { btnPrimary, btnSecondary } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Hoogfrequent lassen",
  description:
    "Hoogfrequent lassen in opdracht bij MG Plastics in Zutphen. Machines van 3 tot 10 kW voor zeilen, tenten, zonneschermen en speciale vormen.",
};

export default function HoogfrequentPage() {
  return (
    <>
      <header className="border-b border-line bg-muted">
        <div className="wrap py-12 md:py-16">
          <p className="text-base font-semibold text-brand">{company.tagline}</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">Hoogfrequent lassen in opdracht</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Wij lassen PVC in eigen huis. Grote laslijnen voor zeilen en tenten, kleinere machines voor korte elektrodes en speciale vormen.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact?onderwerp=hoogfrequent" className={btnPrimary}>
              Vraag naar de mogelijkheden
            </Link>
            <a href={`tel:${company.phoneTel}`} className={btnSecondary}>
              Bel {company.phoneDisplay}
            </a>
          </div>
        </div>
      </header>

      <section className="wrap grid gap-10 py-12 md:py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Wat is hoogfrequent lassen?</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed">
            <p>
              Hoogfrequent lassen is alleen geschikt voor kunststoffen met moleculen die een uitgesproken dipoolkarakter hebben, zoals PVC, PET en EVA.
            </p>
            <p>
              Het lassen ontstaat doordat elektrische energie als radiofrequent veld naar de twee vlakken gaat die verbonden moeten worden. Het wisselende veld beweegt de moleculen 27 miljoen keer per seconde. Door de wrijving ontstaat de warmte die de materialen aan elkaar last. De lasnaad heeft dezelfde sterkte als het materiaal zelf. Het veld wordt in het materiaal opgewekt met een elektrode.
            </p>
            <p>Met deze machines maken wij ook de lateislabben.</p>
          </div>
        </div>
        <figure className="border border-line">
          <Image
            src="/img/werkplaats-hf-lasmachine-2.jpg"
            alt="Medewerker stelt een hoogfrequent-lasmachine in, met koperen elektroden"
            width={886}
            height={549}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </figure>
      </section>

      <section className="border-t border-line" aria-labelledby="las-stappen">
        <div className="wrap py-12 md:py-16">
          <h2 id="las-stappen" className="text-2xl font-semibold">
            Zo ontstaat de las
          </h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {hfSteps.map((step) => (
              <li key={step.n} className="border-t-2 border-dashed border-brand pt-4">
                <p className="nums text-base font-semibold text-brand">{step.n}</p>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-lg leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-muted" aria-labelledby="machines">
        <div className="wrap py-12 md:py-16">
          <h2 id="machines" className="text-2xl font-semibold">
            Machines van 3 t/m 10 kW
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            In de productie staan verschillende hoogfrequent-lasmachines. Groot formaat, met grotere laslijnen, voor zeildoeken, tenten, zonneschermen, vrachtwagenzeilen, mobiele hangars, billboards en zijgordijnen. Kleinere lasmachines voor kortere laselektrodes en andere vormen.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {hfApplications.map((item) => (
              <li key={item} className="border border-line bg-white px-4 py-3 text-lg">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            De machines kunnen speciale elektroden krijgen, bijvoorbeeld voor lange stroken PVC of ronde ramen van doorzichtig PVC. Iedere andere vorm is mogelijk als het om nauwkeurige sluitingen gaat. Ook beschikken we over snijlijnen waardoor afritsen mogelijk is.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Door de machines van 3 t/m 10 kW zijn dikkere soorten PVC te lassen.
          </p>
          <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
            <figure className="border border-line bg-white">
              <Image
                src="/img/werkplaats-hf-lasmachine-1.jpg"
                alt="Medewerker bedient een blauwe hoogfrequent-lasmachine met een lange elektrode"
                width={886}
                height={563}
                className="aspect-[3/2] h-auto w-full object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </figure>
            <figure className="border border-line bg-white">
              <Image
                src="/img/werkplaats-lassen.png"
                alt="Werktafel met rollen PVC-folie en gelaste stroken, met een lasmachine op de achtergrond"
                width={520}
                height={350}
                className="aspect-[3/2] h-auto w-full object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
            </figure>
          </div>
          <p className="mt-8 text-lg">
            Mail{" "}
            <a className="text-brand underline" href={`mailto:${emails.algemeen}`}>
              {emails.algemeen}
            </a>{" "}
            of bel {company.phoneDisplay}.
          </p>
        </div>
      </section>
    </>
  );
}
