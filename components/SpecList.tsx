import type { Spec } from "@/lib/site";

export default function SpecList({
  rows,
  caption,
}: {
  rows: Spec[];
  caption: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[20rem] border-collapse text-left text-lg">
        <caption className="sr-only">{caption}</caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line">
              <th
                scope="row"
                className="w-[42%] py-3 pr-4 align-top text-base font-semibold text-ink sm:w-56"
              >
                {row.label}
              </th>
              <td className="nums py-3 align-top">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
