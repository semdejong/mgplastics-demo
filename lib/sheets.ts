/** Plaatsing en bestelregel, alleen uit de eigen producttekst. */

export type ProductSheet = {
  seat: string;
  send: string[];
  related: string[];
};

export const productSheets: Record<string, ProductSheet> = {
  lateislabbe: {
    seat: "Boven het kozijn, in de spouw. Vocht gaat via de zijkant van het kozijn naar buiten.",
    send: [
      "Het profieltype: hoek, HWS, platstrip, T of dubbelneus.",
      "Kleur: zwart, wit of grijs.",
      "Slabbebreedte, lengte en aantal.",
      "Hard, zacht of ademend vermeldt u bij de opmerkingen.",
    ],
    related: ["hoekprofiel", "hws-profiel", "platstrip", "t-profiel", "dubbelneus-profiel"],
  },
  hoekprofiel: {
    seat: "Op de bovenkant van het kozijn, als waterkering tussen kozijn en spouwblad.",
    send: [
      "Profieltype: Hoekprofiel.",
      "Kleur, slabbebreedte, lengte en aantal.",
      "De hoekafmeting, als u die al weet. Meerdere hoekafmetingen zijn mogelijk.",
    ],
    related: ["platstrip", "hws-profiel", "t-profiel", "lateislabbe"],
  },
  "hws-profiel": {
    seat: "Op het stelkozijn. Geschikt tot 6.400 mm.",
    send: [
      "Harde neus of flexibele neus.",
      "Smal of XL.",
      "Zwart, grijs of wit.",
      "Met of zonder slabbe, plus lengte en aantal.",
    ],
    related: ["hoekprofiel", "platstrip", "t-profiel", "hoekprofielen"],
  },
  platstrip: {
    seat: "Op de bovenkant van het kozijn. De strip zit strak en recht op de dorpel.",
    send: ["Profieltype: Platstrip.", "Kleur, slabbebreedte, lengte en aantal."],
    related: ["hoekprofiel", "hws-profiel", "t-profiel", "lateislabbe"],
  },
  "t-profiel": {
    seat: "Aan de bovendorpel, de zijstijlen en de onderdorpel van het (stel)kozijn.",
    send: [
      "Lengte, tot maximaal 6000 mm.",
      "De gewenste slabbebreedte.",
      "Kleur en aantal.",
    ],
    related: ["hws-profiel", "hoekprofiel", "dubbelneus-profiel", "hoekprofielen"],
  },
  "dubbelneus-profiel": {
    seat: "Aan de voorkant van het kozijn. U maakt de lengte zelf, de rol is 25 meter.",
    send: [
      "Breedte, van 100 t/m 600 mm.",
      "Aantal rollen. Standaardkleur is grijs.",
      "Een andere kleur vraagt u aan vanaf 500 meter, in de opmerkingen.",
    ],
    related: ["hoekprofiel", "platstrip", "pvc-folie", "lateislabbe"],
  },
  hoekprofielen: {
    seat: "Los profiel, zonder folie. Hoek, HWS, platstrip of T.",
    send: [
      "Welk profiel, zonder folie.",
      "Lengte van 10 mm t/m 6400 mm, of een standaardlengte van 6400 mm of 6000 mm.",
      "Aantal. Standaard verpakt per 10 of 20 stuks.",
    ],
    related: ["hoekprofiel", "hws-profiel", "platstrip", "t-profiel"],
  },
  "pvc-folie": {
    seat: "Op rol of op pallet. Standaarddikte 0,4 mm, op aanvraag dikker.",
    send: [
      "Breedte. Alle breedtes kunnen, de standaardmaten staan op deze pagina.",
      "50 of 125 m1 per rol.",
      "Aantal rollen, of een hele pallet.",
    ],
    related: ["dubbelneus-profiel", "manchetten", "lateislabbe"],
  },
  manchetten: {
    seat: "In de sparing van een rooster of suskast. Vier gelaste hoeken en een flens.",
    send: [
      "De maten van de sparing, bij lengte en breedte.",
      "Het aantal.",
      "Bijzonderheden van de flens in de opmerkingen.",
    ],
    related: ["lateislabbe", "pvc-folie", "hoogfrequent-lassen"],
  },
};

export const slabKenmerken = [
  { label: "Waterkerend", text: "Waterkering bij kozijnen." },
  { label: "UV-gestabiliseerd", text: "Folie en profiel zijn UV-gestabiliseerd." },
  { label: "Versterkte HD-las", text: "De slabbe zit met een versterkte HD-las aan het profiel." },
  { label: "−20 °C tot +80 °C", text: "Temperatuurbestendig in dat bereik." },
  { label: "Sticker in de doos", text: "Verpakt met een sticker in de doos." },
];

export const hfSteps = [
  {
    n: "01",
    title: "Alleen geschikte kunststof",
    text: "Hoogfrequent lassen werkt bij kunststoffen met een uitgesproken dipoolkarakter, zoals PVC, PET en EVA.",
  },
  {
    n: "02",
    title: "Een radiofrequent veld",
    text: "Elektrische energie gaat als radiofrequent veld naar de twee vlakken die aan elkaar moeten.",
  },
  {
    n: "03",
    title: "27 miljoen keer per seconde",
    text: "Het wisselende veld beweegt de moleculen. Door wrijving ontstaat de warmte voor de las.",
  },
  {
    n: "04",
    title: "Lasnaad als het materiaal zelf",
    text: "De naad heeft dezelfde sterkte als het materiaal. Het veld wordt opgewekt met een elektrode.",
  },
];

export const packNotes = [
  { title: "Lateislabben", text: "Gezaagd, gelast en ingepakt, met sticker in de doos." },
  { title: "Dubbelneus", text: "Twee rollen van 25 m in één doos, sticker met de gegevens." },
  { title: "Losse profielen", text: "Standaardlengtes 6400 mm en 6000 mm, per 10 of 20 stuks." },
  { title: "Manchetten", text: "Op maat gemaakt en per stuk verpakt." },
  { title: "PVC-folie", text: "Per rol van 50 of 125 m1, of per pallet." },
];
