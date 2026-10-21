import Image from "next/image";
import Link from "next/link";
import { company, emails, productOrder, products, termsUrl } from "@/lib/site";

const quick = [
  { label: "Bestellen", href: "/bestellen" },
  { label: "Hoogfrequent lassen", href: "/hoogfrequent-lassen" },
  { label: "Over ons", href: "/over-mg-plastics" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="wrap grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <Image
            src="/img/logo-mgplastics.png"
            alt="MG Plastics, Professionals in Hoogfrequent-lastechniek"
            width={1920}
            height={1263}
            className="h-16 w-auto bg-white p-2"
          />
          <p className="mt-4 text-lg font-semibold">{company.legalName}</p>
          <p className="mt-2 text-base leading-relaxed text-white/90">
            {company.street}
            <br />
            {company.postal}
            <br />
            {company.area}
          </p>
          <p className="nums mt-3 text-base">KvK {company.kvk}</p>
          <p className="mt-3 text-base">
            <a className="underline underline-offset-2" href={`tel:${company.phoneTel}`}>
              {company.phoneDisplay}
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Lateislabben</h2>
          <ul className="mt-3">
            {productOrder
              .filter((slug) => products[slug].group === "lateislabbe")
              .map((slug) => (
                <li key={slug}>
                  <Link href={`/${slug}`} className="inline-flex min-h-11 items-center underline-offset-2 hover:underline">
                    {slug === "lateislabbe" ? "Overzicht" : products[slug].h1}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Profielen en folie</h2>
          <ul className="mt-3">
            {productOrder
              .filter((slug) => products[slug].group === "overig")
              .map((slug) => (
                <li key={slug}>
                  <Link href={`/${slug}`} className="inline-flex min-h-11 items-center underline-offset-2 hover:underline">
                    {products[slug].h1}
                  </Link>
                </li>
              ))}
            {quick.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-11 items-center underline-offset-2 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">E-mail</h2>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <span className="block text-white/70">Administratie</span>
              <a className="underline" href={`mailto:${emails.administratie}`}>
                {emails.administratie}
              </a>
            </li>
            <li>
              <span className="block text-white/70">Algemeen, Mike</span>
              <a className="underline" href={`mailto:${emails.algemeen}`}>
                {emails.algemeen}
              </a>
            </li>
            <li>
              <span className="block text-white/70">Verkoop</span>
              <a className="underline" href={`mailto:${emails.verkoop}`}>
                {emails.verkoop}
              </a>
            </li>
            <li>
              <span className="block text-white/70">Facturen</span>
              <a className="underline" href={`mailto:${emails.facturen}`}>
                {emails.facturen}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="wrap flex flex-col gap-3 py-5 pb-32 text-base text-white/90 md:flex-row md:items-center md:justify-between md:pb-16">
          <p>© {company.legalName}</p>
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <a href={termsUrl} className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              Algemene verkoopvoorwaarden (PDF)
            </a>
            <a href="https://sleads.nl" className="underline underline-offset-2" target="_blank" rel="noopener noreferrer">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
