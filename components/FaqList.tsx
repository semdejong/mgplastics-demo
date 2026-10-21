export default function FaqList({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span aria-hidden className="text-brand group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-lg leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
