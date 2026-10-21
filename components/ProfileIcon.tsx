import type { ProfileKind } from "@/lib/site";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinejoin: "miter" as const,
  strokeLinecap: "square" as const,
};

/** Diagrammatische doorsneden, in de trant van een technische profieltekening. */
export default function ProfileIcon({
  kind,
  className = "h-16 w-16",
}: {
  kind: ProfileKind;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden>
      {kind === "hoek" && (
        <>
          <path d="M14 18 H46 V30 H28 V54 H14 Z" {...stroke} />
          <path d="M28 30 H64" {...stroke} strokeDasharray="3 2.2" />
        </>
      )}
      {kind === "hws" && (
        <>
          <path d="M8 26 H62 V36 H50 V54 H38 V36 H8 Z" {...stroke} />
          <path d="M38 44 H50" {...stroke} strokeDasharray="2.5 2" />
        </>
      )}
      {kind === "platstrip" && (
        <>
          <path d="M10 30 H62 V44 H10 Z" {...stroke} />
          <path d="M10 30 H62" {...stroke} strokeDasharray="3 2.2" />
        </>
      )}
      {kind === "t" && <path d="M12 44 H60 V54 H42 V18 H30 V54 H12 Z" {...stroke} />}
      {kind === "dnp" && (
        <path d="M10 28 H62 V38 H52 V52 H40 V38 H32 V52 H20 V38 H10 Z" {...stroke} />
      )}
      {kind === "ademend" && (
        <>
          <rect x="14" y="20" width="44" height="32" {...stroke} />
          <path d="M14 52 H28" {...stroke} />
          <path d="M28 52 V62 H18 V52" {...stroke} />
          {[28, 40, 52].map((cx) => (
            <circle key={cx} cx={cx} cy="32" r="1.7" fill="currentColor" stroke="none" />
          ))}
          {[34, 46].map((cx) => (
            <circle key={cx} cx={cx} cy="42" r="1.7" fill="currentColor" stroke="none" />
          ))}
        </>
      )}
      {kind === "los" && <path d="M16 18 H48 V30 H30 V54 H16 Z" {...stroke} />}
      {kind === "folie" && (
        <>
          <circle cx="32" cy="36" r="16" {...stroke} />
          <circle cx="32" cy="36" r="7" {...stroke} />
          <path d="M48 36 H66 M48 30 H62 M48 42 H62" {...stroke} />
        </>
      )}
      {kind === "manchet" && (
        <>
          <path d="M18 26 L12 16 H60 L54 26" {...stroke} />
          <path d="M18 26 H54 V52 H18 Z" {...stroke} />
          <path d="M26 32 H46 V46 H26 Z" {...stroke} />
        </>
      )}
    </svg>
  );
}
