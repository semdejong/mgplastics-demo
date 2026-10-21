import Link from "next/link";
import ProfileIcon from "@/components/ProfileIcon";
import { products } from "@/lib/site";

export default function RelatedProducts({ slugs }: { slugs: string[] }) {
  return (
    <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {slugs.map((slug) => {
        if (slug === "hoogfrequent-lassen") {
          return (
            <li key={slug}>
              <Link href="/hoogfrequent-lassen" className="flex h-full min-h-11 flex-col justify-center border border-line bg-white p-4 hover:border-brand">
                <span className="text-lg font-semibold text-ink">Hoogfrequent lassen</span>
                <span className="mt-1 block text-base leading-snug">Lassen in opdracht, machines van 3 t/m 10 kW.</span>
              </Link>
            </li>
          );
        }
        const product = products[slug];
        if (!product) return null;
        return (
          <li key={slug}>
            <Link href={`/${slug}`} className="flex h-full min-h-11 gap-3 border border-line bg-white p-4 hover:border-brand">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-muted text-brand">
                <ProfileIcon kind={product.profile} className="h-10 w-10" />
              </span>
              <span>
                <span className="block text-lg font-semibold text-ink">{product.h1}</span>
                <span className="mt-1 block text-base leading-snug">{product.card}</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
