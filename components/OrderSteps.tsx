import { orderSteps } from "@/lib/site";

export default function OrderSteps() {
  return (
    <ol className="grid gap-6 md:grid-cols-3">
      {orderSteps.map((step) => (
        <li key={step.n} className="border-t-2 border-brand pt-4">
          <p className="nums text-sm font-semibold tracking-wide text-brand">{step.n}</p>
          <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
          <p className="mt-2 text-lg leading-relaxed">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
