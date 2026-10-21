import Link from "next/link";

const marks = [
  { n: "1", title: "Hoekprofiel en platstrip", text: "Bovenkant van het kozijn.", href: "/hoekprofiel" },
  { n: "2", title: "HWS-profiel", text: "Stelkozijn, tot 6.400 mm.", href: "/hws-profiel" },
  { n: "3", title: "T-profiel", text: "Bovendorpel, stijl en onderdorpel. Max. 6000 mm.", href: "/t-profiel" },
  { n: "4", title: "Dubbelneus", text: "Voorkant van het kozijn, op rol van 25 m.", href: "/dubbelneus-profiel" },
  { n: "5", title: "Manchet", text: "Rooster of suskast, waterkerend en dampdicht.", href: "/manchetten" },
];

const courses = [88, 116, 144, 172, 200, 228, 256, 284, 312, 340, 368];

/** Plaat zoals een kozijndoorsnede: nummers verwijzen naar de profielen. */
export default function KozijnMap() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
      <figure>
        <svg viewBox="0 0 720 500" role="img" className="h-auto w-full border border-line bg-white" aria-labelledby="kozijn-titel">
          <title id="kozijn-titel">Schematische plaats van de profielen op een kozijn</title>
          <rect width="720" height="500" fill="#ffffff" />
          <path d="M28 28 H692" fill="none" stroke="#0E3FAA" strokeWidth="2" strokeDasharray="7 5" />

          <rect x="40" y="64" width="150" height="332" fill="#F2F4F7" stroke="#404040" strokeWidth="1.5" />
          {courses.map((y, i) => (
            <g key={y}>
              <path d={`M40 ${y} H190`} stroke="#D5DBE3" strokeWidth="1" />
              <path d={`M${i % 2 === 0 ? 100 : 140} ${y} V${y + 28}`} stroke="#D5DBE3" strokeWidth="1" />
            </g>
          ))}
          <rect x="78" y="210" width="74" height="28" fill="#F2F4F7" />
          <text x="115" y="229" textAnchor="middle" fill="#404040" fontSize="15" fontFamily="inherit">
            spouw
          </text>

          <rect x="228" y="96" width="400" height="292" fill="none" stroke="#8d939c" strokeWidth="3" />
          <text x="248" y="88" fill="#404040" fontSize="14" fontFamily="inherit">
            stelkozijn
          </text>

          <path d="M190 168 C230 168 248 128 286 132" fill="none" stroke="#0E3FAA" strokeWidth="3.5" />

          <rect x="286" y="132" width="320" height="236" fill="#F7F8FA" stroke="#404040" strokeWidth="10" />
          <rect x="322" y="168" width="248" height="164" fill="#E7EDF6" stroke="#404040" strokeWidth="2" />
          <text x="400" y="250" textAnchor="middle" fill="#404040" fontSize="16" fontFamily="inherit">
            kozijn
          </text>

          <path d="M286 132 H372 V112 H404 V144 H300 V132" fill="none" stroke="#0E3FAA" strokeWidth="2.75" />

          <rect x="470" y="248" width="78" height="52" fill="#ffffff" stroke="#404040" strokeWidth="1.5" />
          <path d="M470 264 H548 M470 278 H548 M470 292 H548" stroke="#D5DBE3" strokeWidth="1" />

          {[
            [348, 112],
            [540, 96],
            [286, 292],
            [606, 250],
            [509, 274],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="14" fill="#0E3FAA" />
              <text x={cx} y={cy + 5} textAnchor="middle" fill="#ffffff" fontSize="14" fontFamily="inherit">
                {i + 1}
              </text>
            </g>
          ))}

          <rect x="28" y="448" width="664" height="36" fill="#F2F4F7" />
          <path d="M28 448 H692" stroke="#D5DBE3" />
          <text x="44" y="471" fill="#404040" fontSize="14" fontFamily="inherit">
            Doorsnede
          </text>
          <text x="360" y="471" textAnchor="middle" fill="#404040" fontSize="14" fontFamily="inherit">
            Plaats van de profielen
          </text>
          <text x="676" y="471" textAnchor="end" fill="#404040" fontSize="14" fontFamily="inherit">
            Niet op schaal
          </text>
        </svg>
      </figure>
      <ol className="space-y-3">
        {marks.map((mark) => (
          <li key={mark.n}>
            <Link href={mark.href} className="flex min-h-11 gap-3 border border-line bg-white p-3 hover:border-brand">
              <span className="nums flex h-9 w-9 shrink-0 items-center justify-center bg-brand text-base font-semibold text-white">
                {mark.n}
              </span>
              <span>
                <span className="block text-lg font-semibold text-ink">{mark.title}</span>
                <span className="block text-base">{mark.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
