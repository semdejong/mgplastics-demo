export default function SheetStamp({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="border border-line bg-white">
      {rows.map((row) => (
        <div key={row.label} className="border-b border-line px-4 py-3 last:border-b-0">
          <dt className="text-base font-semibold text-brand">{row.label}</dt>
          <dd className="nums mt-1 text-lg text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
