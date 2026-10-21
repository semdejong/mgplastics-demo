import Link from "next/link";

export default function Crumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Kruimelpad" className="text-base">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-ink/50">
                /
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="text-brand underline underline-offset-2">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
