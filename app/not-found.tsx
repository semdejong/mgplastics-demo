import type { Metadata } from "next";
import Link from "next/link";

const routes = [
  ["Lateislabben", "/lateislabbe"],
  ["Bestellen", "/bestellen"],
  ["Hoogfrequent lassen", "/hoogfrequent-lassen"],
  ["Contact", "/contact"],
];

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "Deze pagina bestaat niet op de site van MG Plastics.",
};

export default function NotFound() {
  return (
    <div className="wrap py-20">
      <h1 className="text-4xl font-semibold">Pagina niet gevonden</h1>
      <p className="mt-4 text-lg">De pagina die u zoekt staat niet op deze site.</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        <li>
          <Link href="/" className="flex min-h-11 items-center border border-line px-4 text-lg font-semibold text-brand">
            Homepage
          </Link>
        </li>
        {routes.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="flex min-h-11 items-center border border-line px-4 text-lg font-semibold text-brand">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
