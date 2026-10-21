import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company, contactPerson, emails, mapsUrl, openingHoursText } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met MG Plastics, Noorsestraat 9 in Zutphen. Bel 06-11754994 of mail Mike, verkoop, administratie of facturen.",
};

export default function ContactPage() {
  return (
    <>
      <header className="border-b border-line bg-muted">
        <div className="wrap py-12 md:py-16">
          <h1 className="text-4xl font-semibold md:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg">
            Bel of mail. Voor bestellingen gebruikt u het formulier op de bestelpagina, of mailt u verkoop.
          </p>
        </div>
      </header>
      <section className="wrap py-12 md:py-16" aria-labelledby="postbussen">
        <h2 id="postbussen" className="text-2xl font-semibold">
          Vier adressen, elk met een taak
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Administratie", emails.administratie, "Algemene post. Het formulier op deze pagina opent een mail hiernaartoe."],
            ["Algemeen", emails.algemeen, `${contactPerson}, voor algemene vragen.`],
            ["Verkoop", emails.verkoop, "Maatlijsten en bestellingen. Ook via de bestelpagina."],
            ["Facturen", emails.facturen, "Facturen stuurt u naar dit adres."],
          ].map(([title, address, text]) => (
            <li key={title} className="flex h-full flex-col border border-line p-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-lg">{text}</p>
              <a className="mt-auto inline-flex min-h-11 items-center pt-3 text-lg font-semibold text-brand underline" href={`mailto:${address}`}>
                {address}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="wrap grid gap-12 border-t border-line py-12 md:py-16 lg:grid-cols-2">
        <div className="text-lg">
          <h2 className="text-2xl font-semibold">MG Plastics B.V.</h2>
          <p className="mt-3 leading-relaxed">
            {company.street}
            <br />
            {company.postal}
            <br />
            {company.area}
          </p>
          <p className="mt-4">
            <a className="font-semibold text-brand underline" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
            <span className="mt-1 block text-base">{company.phonePrinted}</span>
          </p>
          <p className="mt-4">{openingHoursText}</p>
          <p className="mt-6">
            <a className="font-semibold text-brand underline" href={mapsUrl} target="_blank" rel="noopener noreferrer">
              Route naar Noorsestraat 9, Zutphen
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Stuur een bericht</h2>
          <p className="mt-2 mb-4 text-base">Velden met * zijn verplicht. Het bericht gaat naar administratie.</p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
