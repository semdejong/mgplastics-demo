import type { Metadata } from "next";
import OrderForm from "@/components/OrderForm";
import FaqList from "@/components/FaqList";
import OrderSteps from "@/components/OrderSteps";
import { packNotes } from "@/lib/sheets";
import { company, emails, orderFaq, termsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lateislabben bestellen",
  description:
    "Lateislabben bestellen op maat. Stuur uw maatlijst. MG Plastics zaagt, last en verpakt. Binnen 7 werkdagen in huis.",
};

export default function BestellenPage() {
  return (
    <>
      <header className="border-b border-line bg-muted">
        <div className="wrap py-12 md:py-16">
          <p className="text-base font-semibold text-brand">Maatlijst</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-semibold md:text-5xl">Lateislabben bestellen op maat</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            Stuur uw maatlijst. Wij zagen, lassen en verpakken. Binnen 7 werkdagen in huis.
          </p>
        </div>
      </header>

      <section className="wrap py-12 md:py-16" aria-labelledby="stappen">
        <h2 id="stappen" className="text-2xl font-semibold">
          In drie stappen
        </h2>
        <div className="mt-6">
          <OrderSteps />
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {packNotes.map((note, index) => (
            <li key={note.title} className={`border border-line p-4 ${index > 2 ? "xl:col-span-3" : "xl:col-span-2"}`}>
              <p className="text-lg font-semibold text-ink">{note.title}</p>
              <p className="mt-1 text-lg">{note.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-muted" aria-labelledby="formulier">
        <div className="wrap py-12 md:py-16">
          <h2 id="formulier" className="text-2xl font-semibold">
            Uw maatlijst
          </h2>
          <p className="mt-2 mb-6 text-base">Velden met * zijn verplicht.</p>
          <OrderForm />
        </div>
      </section>

      <section className="wrap py-12 md:py-16" aria-labelledby="bellen">
        <h2 id="bellen" className="text-2xl font-semibold">
          Liever bellen of mailen?
        </h2>
        <p className="mt-3 text-lg">
          Verkoop:{" "}
          <a className="text-brand underline" href={`mailto:${emails.verkoop}`}>
            {emails.verkoop}
          </a>
        </p>
        <p className="mt-2 text-lg">
          Telefoon:{" "}
          <a className="text-brand underline" href={`tel:${company.phoneTel}`}>
            {company.phoneDisplay}
          </a>
        </p>
        <p className="mt-4 text-lg">
          <a className="text-brand underline" href={termsUrl} target="_blank" rel="noopener noreferrer">
            Algemene verkoopvoorwaarden (PDF)
          </a>
        </p>
      </section>

      <section className="border-t border-line" aria-labelledby="faq-bestellen">
        <div className="wrap py-12 md:py-16">
          <h2 id="faq-bestellen" className="text-2xl font-semibold">
            Vragen over bestellen
          </h2>
          <div className="mt-4">
            <FaqList items={orderFaq} />
          </div>
        </div>
      </section>
    </>
  );
}
