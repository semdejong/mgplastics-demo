/**
 * Bron: mgplastics.nl (content.md + raw/text-all.md), 21-10-2026.
 *
 * Niet op de site (onbevestigd of verouderd):
 * - Openingstijden: niet gepubliceerd. Veld voor de klant: vul `openingHours` in
 *   zodra Mike ze aanlevert. Tot die tijd alleen de zin hieronder.
 * - Achternaam, functie en aantal medewerkers: niet gepubliceerd.
 *   LinkedIn ("opgericht 2017", "4 medewerkers", "meer dan 25 jaar") niet gebruiken.
 *   Veld voor de klant: `aboutExtra`.
 * - Transfirm noemt rechtsvorm "Vereniging" (niet gecheckt op kvk.nl). Vrijwel
 *   zeker een datafout. Niet tonen. Sem checkt dit.
 * - Sponsoring Sv Helios en subsidies: niet tonen.
 * - Gekopieerd spec-blok "Lengte: tot max. 4m (uit 1 stuk)" op hoekprofiel, HWS,
 *   platstrip, T-profiel en lateislabbe botst met HWS "tot 6.400 mm" en T-profiel
 *   "max. 6000 mm". De generieke 4m-regel niet tonen; klant bevestigt die nog.
 * - Temperatuur op de oude site stond als "-20°C ' +80°C" (typfout). Waarde is
 *   −20 °C tot +80 °C.
 */

export const company = {
  name: "MG Plastics",
  legalName: "MG Plastics B.V.",
  formerName: "Plastic Products & More",
  tagline: "Professionals in Hoogfrequent-lastechniek",
  headerLine: "PVC · EPDM · Lateislabbe · PE",
  street: "Noorsestraat 9",
  postal: "7202 CJ Zutphen",
  area: "bedrijventerrein De Mars",
  kvk: "89592468",
  phoneDisplay: "06-11754994",
  phoneTel: "+31611754994",
  phonePrinted: "+31 (06) 11 75 4994",
};

export const emails = {
  administratie: "info@mgplastics.nl",
  algemeen: "mike@mgplastics.nl",
  verkoop: "bestellingen@mgplastics.nl",
  facturen: "facturen@mgplastics.nl",
} as const;

export const contactPerson = "Mike";

/** Veld voor de klant. Leeg laten tot de tijden bevestigd zijn. */
export const openingHours: string[] | null = null;

export const openingHoursText = "Bel of mail voor een afspraak of afhalen.";

/** Veld voor de klant. Niet vullen met onbevestigde LinkedIn-cijfers. */
export const aboutExtra: {
  founded?: string;
  teamSize?: string;
  contactSurname?: string;
} = {};

export const termsUrl =
  "https://9a575b05eb.clvaw-cdnwnd.com/3a80088272a10d6e41b9f486f16fb324/200000189-8381d83821/ALGEMENE%20VERKOOPVOORWAARDEN%20MG%20PLASTICS%20BV.pdf";

export const datasheetUrl =
  "https://9a575b05eb.clvaw-cdnwnd.com/3a80088272a10d6e41b9f486f16fb324/200000131-38b1338b16/PVC-folie%20MG%20Plastics%20datasheet.pdf";

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Noorsestraat%209%2C%207202%20CJ%20Zutphen";

export const promise =
  "Met zo'n 50 verschillende profielen in zwart, wit en grijs vrij uit voorraad leverbaar. Gezaagd, gelast en ingepakt en binnen 7 werkdagen in huis.";

export type ProfileKind =
  | "hoek"
  | "hws"
  | "platstrip"
  | "t"
  | "dnp"
  | "ademend"
  | "los"
  | "folie"
  | "manchet";

export type Figure = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type Spec = { label: string; value: string };

export type TextSection = { id: string; title: string; paragraphs: string[] };

export type Product = {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lead: string;
  paragraphs: string[];
  sections?: TextSection[];
  profile: ProfileKind;
  specs: Spec[];
  bullets?: string[];
  figures: Figure[];
  downloads?: { href: string; label: string }[];
  widths?: string[];
  orderProfile: string;
  showChooser?: boolean;
  group: "lateislabbe" | "overig";
  card: string;
};

const sharedSlab: Spec[] = [
  { label: "Waterkerend", value: "Ja" },
  { label: "UV-gestabiliseerd", value: "Ja" },
  { label: "Las", value: "Versterkte HD-las" },
  { label: "Temperatuur", value: "−20 °C tot +80 °C" },
  { label: "Verpakking", value: "Voorzien van sticker in doos" },
];

const folieWidths = [
  "100",
  "150",
  "200",
  "250",
  "300",
  "350",
  "400",
  "450",
  "500",
  "550",
  "600",
  "650",
  "1000",
  "1500",
  "2000",
];

export const products: Record<string, Product> = {
  lateislabbe: {
    slug: "lateislabbe",
    h1: "Lateislabben",
    metaTitle: "Lateislabben",
    metaDescription:
      "Lateislabben van MG Plastics als vochtkering boven kozijnen in de spouw. Hard of zacht profiel, ook in ademende uitvoering. Versterkte lasnaad.",
    eyebrow: "Voor de bouw",
    lead: "Lateislabben van MG Plastics fungeren als vochtkering boven kozijnen in de spouw. Vocht uit de spouw wordt via de zijkant van het kozijn afgevoerd. Water en stuifsneeuw krijgen geen kans de constructie binnen te dringen.",
    paragraphs: [
      "De slabben zijn vervaardigd uit een zeer zware kwaliteit PVC en voorzien van een extra versterkte lasnaad. Ze zijn leverbaar in diverse profielkleuren, lengte- en breedtematen en een grote variatie aan neusprofielen.",
      "MG Plastics (voorheen Plastic Products & More) levert zo'n 50 profielen in zwart, wit en grijs uit voorraad. Gezaagd, gelast en ingepakt, binnen 7 werkdagen in huis. Spoedleveringen in overleg.",
    ],
    sections: [
      {
        id: "hard-zacht",
        title: "Hard of zacht profiel",
        paragraphs: [
          "MG Plastics heeft lateislabben met een hard of een zacht profiel in het assortiment. Daardoor vormen de slabben onder nagenoeg alle omstandigheden de water- en vochtkering.",
        ],
      },
      {
        id: "ademend",
        title: "Ademende uitvoering",
        paragraphs: [
          "Nieuw zijn de lateislabben in ademende uitvoering.",
          "Vermeld “ademende uitvoering” bij de opmerkingen als u bestelt. Kies daar het profieltype dat u nodig hebt.",
        ],
      },
    ],
    profile: "hoek",
    specs: [
      { label: "Uit voorraad", value: "Zo'n 50 profielen in zwart, wit en grijs" },
      { label: "Levertijd", value: "Binnen 7 werkdagen, spoed in overleg" },
      { label: "Materiaal", value: "Zeer zware kwaliteit PVC" },
      ...sharedSlab,
      { label: "Toepassing", value: "Vochtkering boven kozijnen in de spouw" },
    ],
    figures: [
      {
        src: "/img/product-slabbe-detail-2018.jpg",
        alt: "PVC-slabbe op de snijtafel, met een profielstrip langs de rand",
        width: 1600,
        height: 1200,
        caption: "Slabbe op de snijtafel, klaar om op maat te worden gezet.",
      },
      {
        src: "/img/hero-lateislabbe-klikprofiel.jpg",
        alt: "Grijs hoekprofiel van een lateislabbe op de bovenzijde van een wit kozijn",
        width: 1920,
        height: 1439,
        caption: "Hoekprofiel op de bovenkant van het kozijn.",
      },
    ],
    orderProfile: "",
    showChooser: true,
    group: "lateislabbe",
    card: "Vochtkering boven kozijnen in de spouw. Hard of zacht profiel, ook ademend.",
  },
  hoekprofiel: {
    slug: "hoekprofiel",
    h1: "Hoekprofiel lateislabbe",
    metaTitle: "Hoekprofiel lateislabbe",
    metaDescription:
      "Hoekprofiel-lateislabbe: PVC-slabbe met een thermisch gelast hard hoekprofiel, voor bevestiging op de bovenkant van het kozijn.",
    eyebrow: "Lateislabbe",
    lead: "Speciaal ontwikkelde oplossing voor een waterkerende werking tussen kozijn en spouwblad. De lateislabbe bestaat uit een PVC-slabbenfolie met een thermisch gelast pvc-hard hoekprofiel, voor bevestiging op de bovenkant van het kozijn.",
    paragraphs: [
      "Meerdere hoekafmetingen zijn mogelijk. De kleuren zwart, wit en grijs zijn uit voorraad leverbaar.",
    ],
    profile: "hoek",
    specs: [
      { label: "Profiel", value: "PVC-hard hoekprofiel, thermisch gelast" },
      { label: "Bevestiging", value: "Bovenkant van het kozijn" },
      { label: "Hoekafmetingen", value: "Meerdere hoekafmetingen mogelijk" },
      { label: "Kleuren", value: "Meerdere kleuren leverbaar, uit voorraad zwart, wit en grijs" },
      ...sharedSlab,
      { label: "Toepassing", value: "Waterkering tussen kozijn en spouwblad" },
    ],
    figures: [
      {
        src: "/img/product-hoekprofiel.jpg",
        alt: "Hoekprofiel-lateislabbe: grijze PVC-slabbe met een hard licht hoekprofiel",
        width: 746,
        height: 264,
      },
      {
        src: "/img/tekening-h-ep.jpg",
        alt: "Technische tekening van een hoekprofiel-lateislabbe op een kozijn, met een detail van de hoek",
        width: 547,
        height: 215,
        caption: "Doorsnede van een hoekprofiel op het kozijn.",
      },
    ],
    orderProfile: "Hoekprofiel",
    group: "lateislabbe",
    card: "Bovenkant kozijn, tussen kozijn en spouwblad.",
  },
  "hws-profiel": {
    slug: "hws-profiel",
    h1: "HWS-profiel",
    metaTitle: "HWS-profiel",
    metaDescription:
      "HWS-profiel voor stelkozijnen tot 6.400 mm. Harde of flexibele neus, smal of XL, zwart, grijs of wit, met of zonder slabbe.",
    eyebrow: "Lateislabbe",
    lead: "Speciaal ontwikkelde oplossing voor plaatsing op stelkozijnen. De lateislabbe bestaat uit een PVC-slabbenfolie met een thermisch gelast pvc-hard waterholprofiel, voor een waterkering in de bouwconstructie. Geschikt voor stelkozijnen tot 6.400 mm.",
    paragraphs: [
      "Snelle montage is mogelijk, waardoor u bespaart op arbeidskosten.",
    ],
    bullets: [
      "Harde neus of flexibele neus",
      "Smal of XL",
      "Zwart, grijs of wit",
      "Met of zonder slabbe",
    ],
    profile: "hws",
    specs: [
      { label: "Lengte", value: "Geschikt voor stelkozijnen tot 6.400 mm" },
      { label: "Profiel", value: "PVC-hard waterholprofiel, thermisch gelast" },
      { label: "Neus", value: "Harde neus of flexibele neus" },
      { label: "Uitvoering", value: "Smal of XL" },
      { label: "Kleuren", value: "Zwart, grijs en wit" },
      { label: "Slabbe", value: "Met of zonder slabbe" },
      ...sharedSlab,
      { label: "Toepassing", value: "Plaatsing op stelkozijnen" },
    ],
    figures: [
      {
        src: "/img/product-hws.jpg",
        alt: "HWS-profiel met waterhol en een aangelaste grijze slabbe",
        width: 700,
        height: 700,
      },
    ],
    orderProfile: "HWS-profiel",
    group: "lateislabbe",
    card: "Stelkozijnen tot 6.400 mm.",
  },
  platstrip: {
    slug: "platstrip",
    h1: "Platstrip",
    metaTitle: "Platstrip lateislabbe",
    metaDescription:
      "Platstrip-lateislabbe met een thermisch gelaste harde strip. Zit strak en recht op de dorpel, voor de bovenkant van het kozijn.",
    eyebrow: "Lateislabbe",
    lead: "Voor bevestiging op de bovenkant van het kozijn. Deze PVC-slabbenfolie is voorzien van een thermisch gelaste harde strip, voor een aansluiting op het kozijn. De platstrip zit altijd strak en recht op de dorpel.",
    paragraphs: [],
    profile: "platstrip",
    specs: [
      { label: "Profiel", value: "Thermisch gelaste harde strip" },
      { label: "Bevestiging", value: "Bovenkant van het kozijn" },
      { label: "Aansluiting", value: "Zit strak en recht op de dorpel" },
      { label: "Kleuren", value: "Meerdere kleuren leverbaar, uit voorraad zwart, wit en grijs" },
      ...sharedSlab,
      { label: "Toepassing", value: "Waterkering bij kozijnen" },
    ],
    figures: [
      {
        src: "/img/product-platstrip.jpg",
        alt: "Platstrip-lateislabbe met een omgezette harde strip aan de rand van de folie",
        width: 746,
        height: 264,
      },
    ],
    orderProfile: "Platstrip",
    group: "lateislabbe",
    card: "Bovenkant kozijn, strak en recht op de dorpel.",
  },
  "t-profiel": {
    slug: "t-profiel",
    h1: "T-profiel",
    metaTitle: "T-profiel lateislabbe",
    metaDescription:
      "T-profiel lateislabbe voor bovendorpel, zijstijlen en onderdorpel. Op lengte tot maximaal 6000 mm, UV-gestabiliseerd.",
    eyebrow: "Lateislabbe",
    lead: "T-profiel lateislabbe is een kunststofprofiel met een aangelaste PVC-slabbefolie. U past de lateislabbe toe aan de bovendorpel, de zijstijlen en de onderdorpels van (stel)kozijnen. Zo ontstaat een water- en vochtkering tussen kozijn en element.",
    paragraphs: [
      "De kunststofprofielen zijn UV-gestabiliseerd en worden naar uw specificaties op lengte (max. 6000 mm) en in de gewenste slabbebreedte aangeleverd.",
    ],
    profile: "t",
    specs: [
      { label: "Lengte", value: "Op lengte, max. 6000 mm" },
      { label: "Slabbebreedte", value: "Naar gewenste breedte" },
      { label: "Profiel", value: "Kunststof T-profiel met aangelaste PVC-slabbefolie" },
      { label: "Kleuren", value: "Meerdere kleuren leverbaar, uit voorraad zwart, wit en grijs" },
      ...sharedSlab,
      {
        label: "Toepassing",
        value: "Bovendorpel, zijstijlen en onderdorpels van (stel)kozijnen",
      },
    ],
    figures: [
      {
        src: "/img/product-t-profiel.jpg",
        alt: "Weergave van een T-profiel zonder slabbe",
        width: 1920,
        height: 1440,
        caption: "Het T-profiel. De slabbe wordt er op lengte aan gelast.",
      },
    ],
    orderProfile: "T-profiel",
    group: "lateislabbe",
    card: "Bovendorpel, zijstijlen en onderdorpel. Max. 6000 mm.",
  },
  "dubbelneus-profiel": {
    slug: "dubbelneus-profiel",
    h1: "Dubbelneus-profiel",
    metaTitle: "Dubbelneus-profiel",
    metaDescription:
      "Dubbelneus-profiel (DNP) op rol van 25 m, 100 tot 600 mm breed. Voor montage aan de voorkant van het kozijn. Standaard grijs.",
    eyebrow: "Lateislabbe",
    lead: "Lateislabbe dubbelneus-profiel (DNP) is op rol verkrijgbaar en dus zelf op maat te maken. Speciaal vervaardigd voor montage aan de voorkant van het kozijn.",
    paragraphs: [],
    bullets: [
      "Geleverd op rollen van 25 meter.",
      "Breedte van 100 t/m 600 mm.",
      "Standaard kleur: grijs. Andere kleuren vanaf 500 meter in overleg.",
      "Verpakt per 2 rollen in één doos.",
      "Voorzien van de gegevens op de stickers.",
    ],
    profile: "dnp",
    specs: [
      { label: "Levering", value: "Op rol van 25 m, zelf op maat te maken" },
      { label: "Breedte", value: "100 t/m 600 mm" },
      { label: "Kleur", value: "Standaard grijs; andere kleuren vanaf 500 m in overleg" },
      { label: "Verpakking", value: "2 rollen per doos, met sticker" },
      { label: "Montage", value: "Voorkant van het kozijn" },
    ],
    figures: [
      {
        src: "/img/product-dubbelneus-rol.jpg",
        alt: "Rol dubbelneus-profiel: zwarte folie met een lichtgrijs profiel",
        width: 550,
        height: 490,
      },
    ],
    orderProfile: "Dubbelneus-profiel",
    group: "lateislabbe",
    card: "Voorkant kozijn. Op rol van 25 m, 100 t/m 600 mm.",
  },
  hoekprofielen: {
    slug: "hoekprofielen",
    h1: "Hoekprofielen zonder folie",
    metaTitle: "Hoekprofielen zonder folie",
    metaDescription:
      "Losse hoek-, HWS-, platstrip- en T-profielen zonder folie, van 10 mm tot 6400 mm. Standaardlengtes 6400 en 6000 mm.",
    eyebrow: "Profielen",
    lead: "Wij leveren ook standaard hoekprofielen zonder folie, op iedere gewenste maat.",
    paragraphs: [],
    bullets: [
      "Afmeting variabel van 10 mm t/m 6400 mm.",
      "Hoekprofielen, HWS-profielen, platstrippen en T-profielen.",
      "Standaardlengtes 6400 mm en 6000 mm, verpakt per 10 of 20 stuks.",
    ],
    profile: "los",
    specs: [
      { label: "Lengte", value: "10 mm t/m 6400 mm" },
      { label: "Standaardlengtes", value: "6400 mm en 6000 mm" },
      { label: "Verpakking", value: "Per 10 of 20 stuks" },
      { label: "Uitvoeringen", value: "Hoekprofiel, HWS-profiel, platstrip, T-profiel" },
      { label: "Folie", value: "Zonder folie" },
    ],
    figures: [
      {
        src: "/img/product-hard-pvc-profielen.jpg",
        alt: "Weergave van harde kunststofprofielen in verschillende doorsneden",
        width: 800,
        height: 711,
        caption: "Losse profielen, zonder folie.",
      },
    ],
    orderProfile: "Los profiel zonder folie",
    group: "overig",
    card: "Zonder folie, van 10 mm t/m 6400 mm.",
  },
  "pvc-folie": {
    slug: "pvc-folie",
    h1: "PVC-folie",
    metaTitle: "PVC-folie",
    metaDescription:
      "PVC-folie van MG Plastics, standaard 0,4 mm en op aanvraag dikker. Rollen van 50 of 125 m1, per rol of per pallet.",
    eyebrow: "Folie",
    lead: "PVC-folie met een standaarddikte van 0,4 mm. Op aanvraag dikker leverbaar.",
    paragraphs: [
      "Verkrijgbaar in alle breedtes. Standaard 50 of 125 m1 per rol. Leverbaar per rol of per pallet.",
    ],
    profile: "folie",
    specs: [
      { label: "Dikte", value: "Standaard 0,4 mm, op aanvraag dikker" },
      { label: "Rollengte", value: "50 of 125 m1" },
      { label: "Breedtes", value: "Alle breedtes; standaardmaten hieronder" },
      { label: "Levering", value: "Per rol of per pallet" },
    ],
    widths: folieWidths.map((mm) => `${mm} mm × 50/125 m1`),
    downloads: [{ href: datasheetUrl, label: "Datasheet PVC-folie (PDF)" }],
    figures: [
      {
        src: "/img/product-pvc-folie.png",
        alt: "Rol zwarte PVC-folie, deels uitgerold",
        width: 600,
        height: 480,
      },
    ],
    orderProfile: "PVC-folie",
    group: "overig",
    card: "Standaard 0,4 mm. Rollen van 50 of 125 m1.",
  },
  manchetten: {
    slug: "manchetten",
    h1: "PVC-manchetten",
    metaTitle: "PVC-manchetten",
    metaDescription:
      "PVC-manchetten op maat, met vier gelaste hoeken en een flens. Voor het waterkerend en dampdicht inbouwen van roosters en suskasten.",
    eyebrow: "Manchetten",
    lead: "PVC-manchetten zijn de oplossing voor het luchtdicht en dampdicht inbouwen van ventilatieroosters. De manchetten worden op maat gemaakt, naar uw specificatie.",
    paragraphs: [
      "Voordeel van de prefab manchetten: vier gelaste hoeken en een flens voor bevestiging in de sparing van het rooster. Condens op het dauwpunt in het element kan zo geen schade aan het element aanrichten.",
      "Toepassing: het waterkerend en dampdicht inbouwen van roosters, suskasten en vergelijkbare onderdelen.",
    ],
    profile: "manchet",
    specs: [
      { label: "Uitvoering", value: "Op maat, 4 gelaste hoeken en een flens" },
      { label: "Gewicht", value: "Ca. 550 g/m²" },
      { label: "Dikte", value: "Ca. 0,45 mm" },
      { label: "Temperatuur", value: "−20 °C tot +80 °C" },
      { label: "Rek bij breuk (DIN 53455)", value: "Lengte 200%, breedte 200%" },
      { label: "Scheurweerstand (DIN 53363)", value: "75 N/50 mm, lengte en breedte" },
      { label: "Kenmerken", value: "Waterkerend, dampremmend, UV-gestabiliseerd" },
      { label: "Verpakking", value: "Per stuk" },
      {
        label: "Toepassing",
        value: "Waterkerend en dampdicht inbouwen van roosters en suskasten",
      },
    ],
    figures: [
      {
        src: "/img/product-manchet.jpg",
        alt: "Zwarte PVC-manchet met opstaande flens en gelaste hoeken",
        width: 400,
        height: 267,
      },
      {
        src: "/img/toepassing-rooster-kozijn.jpg",
        alt: "Kozijn met een ventilatierooster in het bovenlicht",
        width: 800,
        height: 600,
        caption: "Roosters en suskasten bouwt u waterkerend en dampdicht in.",
      },
    ],
    orderProfile: "Manchet",
    group: "overig",
    card: "Op maat, vier gelaste hoeken en een flens.",
  },
};

export const profileCards: {
  kind: ProfileKind;
  title: string;
  href: string;
  use: string;
}[] = [
  {
    kind: "hoek",
    title: "Hoekprofiel",
    href: "/hoekprofiel",
    use: "Bovenkant kozijn, tussen kozijn en spouwblad.",
  },
  {
    kind: "hws",
    title: "HWS-profiel",
    href: "/hws-profiel",
    use: "Stelkozijnen tot 6.400 mm.",
  },
  {
    kind: "platstrip",
    title: "Platstrip",
    href: "/platstrip",
    use: "Bovenkant kozijn, strak op de dorpel.",
  },
  {
    kind: "t",
    title: "T-profiel",
    href: "/t-profiel",
    use: "Bovendorpel, zijstijlen en onderdorpel. Max. 6000 mm.",
  },
  {
    kind: "dnp",
    title: "Dubbelneus",
    href: "/dubbelneus-profiel",
    use: "Voorkant kozijn, op rol van 25 m.",
  },
  {
    kind: "ademend",
    title: "Ademend",
    href: "/lateislabbe#ademend",
    use: "Lateislabbe in ademende uitvoering.",
  },
];

export const orderProfiles = [
  "Hoekprofiel",
  "HWS-profiel",
  "Platstrip",
  "T-profiel",
  "Dubbelneus-profiel",
  "Los profiel zonder folie",
  "PVC-folie",
  "Manchet",
  "Anders",
] as const;

export type OrderProfile = (typeof orderProfiles)[number];

export const orderSteps = [
  {
    n: "01",
    title: "Maatlijst",
    text: "U stuurt profiel, kleur, breedte, lengte en aantal. Per regel, of de lijst volgt per mail.",
  },
  {
    n: "02",
    title: "Zagen, lassen, inpakken",
    text: "Wij zagen, lassen en pakken in. Op de doos zit een sticker met de gegevens.",
  },
  {
    n: "03",
    title: "Binnen 7 werkdagen",
    text: "Gezaagd, gelast en ingepakt, binnen 7 werkdagen in huis. Spoed in overleg.",
  },
];

export const homeFaq = [
  {
    q: "Hoe snel wordt er geleverd?",
    a: "Gezaagd, gelast en ingepakt en binnen 7 werkdagen in huis. Voor spoedleveringen kunt u bij ons terecht. We denken oplossingsgericht met u mee.",
  },
  {
    q: "Welke kleuren zijn er?",
    a: "Zwart, wit en grijs, vrij uit voorraad. Het dubbelneus-profiel is standaard grijs. Andere kleuren daarvan zijn vanaf 500 meter in overleg leverbaar.",
  },
  {
    q: "Kan een bestelling met spoed?",
    a: "Ja. Ook voor spoedleveringen kunt u bij ons terecht. Vermeld spoed in de bestelling of bel 06-11754994.",
  },
  {
    q: "Leveren jullie op rol of op lengte?",
    a: "Het dubbelneus-profiel leveren wij op rollen van 25 meter. PVC-folie gaat op rollen van 50 of 125 m1. Hoekprofiel, HWS, platstrip en T-profiel leveren wij op lengte. Het T-profiel tot max. 6000 mm, het HWS-profiel voor stelkozijnen tot 6.400 mm. Losse profielen zonder folie van 10 mm t/m 6400 mm, standaard op 6400 mm of 6000 mm per 10 of 20 stuks.",
  },
  {
    q: "Wat is het verschil tussen een hard en een zacht profiel?",
    a: "MG Plastics levert lateislabben met een hard of een zacht profiel. Daardoor vormen de slabben onder nagenoeg alle omstandigheden de water- en vochtkering.",
  },
];

export const orderFaq = [
  ...homeFaq,
  {
    q: "Wat kost het?",
    a: "Op deze site staan geen prijzen. Stuur uw maatlijst via het formulier of mail bestellingen@mgplastics.nl. U hoort de prijs van ons.",
  },
];

export const markets = [
  "Woning- en utiliteitsbouw",
  "Prefab betonindustrie",
  "Infrastructurele werken",
  "Geluidbeheersing",
];

export const usps = [
  {
    title: "Service gericht",
    text: "Elke klant is bij ons uniek, u mag er vanuit gaan dat wij u ook zodanig behandelen.",
  },
  {
    title: "Hergebruik van materialen",
    text: "Door hergebruik van onze materialen hebben wij een laag afval percentage.",
  },
  {
    title: "Maatwerk",
    text: "Door kennis en kunde binnen ons bedrijf streven wij naar hoogwaardige kwaliteit.",
  },
];

export const values: { title: string; points: string[] }[] = [
  {
    title: "Kennis",
    points: [
      "Wij streven naar een hoog kennisniveau bij al onze medewerkers. Zo zijn wij in staat mee te denken en te adviseren en de klant te helpen met inkopen.",
      "Wij werken voortdurend aan het vergroten van ons kennisniveau.",
      "Wij vergaren kennis uit de markt en spelen deze informatie aan elkaar door.",
      "Wij hechten veel waarde aan kennisoverdracht, zowel intern als extern.",
    ],
  },
  {
    title: "Behulpzaam",
    points: [
      "Wij adviseren oplossingsgericht.",
      "Wij helpen de klant met inkopen.",
      "Wij werken onderling nauw met elkaar samen en helpen elkaar daar waar nodig.",
    ],
  },
  {
    title: "Integer",
    points: [
      "Wij komen onze afspraken na in kwaliteit en op tijd.",
      "Wij houden van open en eerlijk zaken doen.",
      "Wij zijn duidelijk en houden van open communicatie.",
    ],
  },
  {
    title: "Duurzaam",
    points: [
      "Wij werken voortdurend aan een langdurige relatie met onze klanten en leveranciers.",
      "Wij vinden het essentieel om betrokken medewerkers te behouden voor onze organisatie.",
      "Wij kiezen voor kwaliteitsproducten met een lange levensduur en verlenen onze medewerking aan projecten rond het thema duurzaam bouwen.",
    ],
  },
];

export const hfApplications = [
  "Zeildoeken",
  "Tenten",
  "Zonneschermen",
  "Vrachtwagenzeilen",
  "Mobiele hangars",
  "Billboards",
  "Zijgordijnen",
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  {
    label: "Lateislabben",
    href: "/lateislabbe",
    children: [
      { label: "Overzicht", href: "/lateislabbe" },
      { label: "Hoekprofiel", href: "/hoekprofiel" },
      { label: "HWS-profiel", href: "/hws-profiel" },
      { label: "Platstrip", href: "/platstrip" },
      { label: "T-profiel", href: "/t-profiel" },
      { label: "Dubbelneus-profiel", href: "/dubbelneus-profiel" },
    ],
  },
  {
    label: "Profielen & folie",
    href: "/producten",
    children: [
      { label: "Alle producten", href: "/producten" },
      { label: "Hoekprofielen zonder folie", href: "/hoekprofielen" },
      { label: "PVC-folie", href: "/pvc-folie" },
      { label: "PVC-manchetten", href: "/manchetten" },
    ],
  },
  { label: "Hoogfrequent lassen", href: "/hoogfrequent-lassen" },
  { label: "Over ons", href: "/over-mg-plastics" },
  { label: "Contact", href: "/contact" },
];

export const productOrder = [
  "lateislabbe",
  "hoekprofiel",
  "hws-profiel",
  "platstrip",
  "t-profiel",
  "dubbelneus-profiel",
  "hoekprofielen",
  "pvc-folie",
  "manchetten",
] as const;

export function orderHref(profile: string) {
  if (!profile) return "/bestellen";
  return `/bestellen?profiel=${encodeURIComponent(profile)}`;
}
