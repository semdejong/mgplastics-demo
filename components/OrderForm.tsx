"use client";

import { cloneElement, isValidElement, useEffect, useState, type FormEvent, type ReactElement, type ReactNode } from "react";
import ProfileIcon from "@/components/ProfileIcon";
import {
  company,
  emails,
  orderProfiles,
  termsUrl,
  type OrderProfile,
  type ProfileKind,
} from "@/lib/site";
import { btnPrimary, btnSecondary, fieldClass, labelClass } from "@/lib/ui";

type Line = {
  id: string;
  profiel: string;
  neus: string;
  maat: string;
  kleur: string;
  breedte: string;
  lengte: string;
  aantal: string;
};

const kindFor: Record<string, ProfileKind> = {
  Hoekprofiel: "hoek",
  "HWS-profiel": "hws",
  Platstrip: "platstrip",
  "T-profiel": "t",
  "Dubbelneus-profiel": "dnp",
  "Los profiel zonder folie": "los",
  "PVC-folie": "folie",
  Manchet: "manchet",
  Anders: "hoek",
};

function emptyLine(id: string, profiel = ""): Line {
  return { id, profiel, neus: "", maat: "", kleur: "", breedte: "", lengte: "", aantal: "" };
}

function isProfile(value: string): value is OrderProfile {
  return (orderProfiles as readonly string[]).includes(value);
}

export default function OrderForm() {
  const [bedrijf, setBedrijf] = useState("");
  const [contact, setContact] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [adres, setAdres] = useState("");
  const [project, setProject] = useState("");
  const [datum, setDatum] = useState("");
  const [spoed, setSpoed] = useState<"nee" | "ja">("nee");
  const [opmerkingen, setOpmerkingen] = useState("");
  const [maatlijst, setMaatlijst] = useState(false);
  const [akkoord, setAkkoord] = useState(false);
  const [lines, setLines] = useState<Line[]>([emptyLine("1")]);
  const [seq, setSeq] = useState(2);

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("profiel");
    if (!preset || !isProfile(preset)) return;
    setLines((current) => {
      if (current.length === 1 && !current[0].profiel) return [emptyLine(current[0].id, preset)];
      return current;
    });
  }, []);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function updateLine(id: string, patch: Partial<Line>) {
    setLines((current) => current.map((line) => (line.id === id ? { ...line, ...patch } : line)));
  }

  function compose() {
    const header = [
      "Bestelling lateislabben",
      "",
      `Bedrijfsnaam: ${bedrijf.trim()}`,
      `Contactpersoon: ${contact.trim()}`,
      `Telefoon: ${telefoon.trim()}`,
      `E-mail: ${email.trim()}`,
      `Afleveradres / bouwlocatie: ${adres.trim() || "—"}`,
      `Projectreferentie: ${project.trim() || "—"}`,
      `Gewenste leverdatum: ${datum || "—"}`,
      `Spoed: ${spoed}`,
      `Maatlijst volgt per mail: ${maatlijst ? "ja" : "nee"}`,
      "Akkoord algemene verkoopvoorwaarden: ja",
      "",
      "Regels:",
    ];
    const bodyLines = lines.map((line, index) => {
      const uitvoering =
        line.profiel === "HWS-profiel"
          ? [line.neus, line.maat].filter(Boolean).join(", ") || "—"
          : "";
      return [
        `${index + 1}. Profiel: ${line.profiel || "—"}`,
        uitvoering ? `   Uitvoering: ${uitvoering}` : "",
        `   Kleur: ${line.kleur || "—"}`,
        `   Slabbebreedte: ${line.breedte.trim() ? `${line.breedte.trim()} mm` : "—"}`,
        `   Lengte: ${line.lengte.trim() ? `${line.lengte.trim()} mm` : "—"}`,
        `   Aantal: ${line.aantal.trim() || "—"}`,
      ]
        .filter(Boolean)
        .join("\n");
    });
    return [...header, ...bodyLines, "", "Opmerkingen:", opmerkingen.trim() || "—"].join("\n");
  }

  function validate() {
    const next: Record<string, string> = {};
    if (!bedrijf.trim()) next.bedrijf = "Vul de bedrijfsnaam in.";
    if (!contact.trim()) next.contact = "Vul de contactpersoon in.";
    if (!telefoon.trim()) next.telefoon = "Vul een telefoonnummer in.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Vul een geldig e-mailadres in.";
    }
    if (!akkoord) next.akkoord = "Ga akkoord met de algemene verkoopvoorwaarden.";

    const meaningful = lines.filter((line) => line.profiel || line.kleur || line.aantal || line.breedte || line.lengte);
    if (!maatlijst && meaningful.length === 0) {
      next.regels = "Voeg een regel toe, of vink aan dat de maatlijst per mail volgt.";
    }
    lines.forEach((line, index) => {
      const started = Boolean(line.profiel || line.kleur || line.aantal || line.breedte || line.lengte || line.neus || line.maat);
      if (!started && maatlijst) return;
      if (!started && lines.length > 1) return;
      if (!maatlijst || started) {
        if (!line.profiel) next[`profiel-${line.id}`] = `Kies een profieltype voor regel ${index + 1}.`;
        if (!line.kleur) next[`kleur-${line.id}`] = `Kies een kleur voor regel ${index + 1}.`;
        if (!line.aantal.trim() || Number(line.aantal) < 1) {
          next[`aantal-${line.id}`] = `Vul het aantal in voor regel ${index + 1}.`;
        }
      }
    });
    return next;
  }

  function openMail(text: string) {
    const limit = 1600;
    const mailText =
      text.length > limit
        ? `${text.slice(0, limit)}\n\n[De mail is ingekort. Het volledige bericht staat op het scherm.]`
        : text;
    const href = `mailto:${emails.verkoop}?subject=${encodeURIComponent("Bestelling lateislabben")}&body=${encodeURIComponent(mailText)}`;
    window.location.href = href;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return;
    }
    const text = compose();
    setMessage(text);
    setCopied(false);
    openMail(text);
  }

  function chooseProfile(profile: string) {
    setLines((current) => {
      const blank = current.find((line) => !line.profiel);
      if (blank) {
        return current.map((line) =>
          line.id === blank.id ? { ...line, profiel: profile, neus: "", maat: "" } : line,
        );
      }
      return [...current, emptyLine(`p-${current.length}-${profile}`, profile)];
    });
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="bedrijf" label="Bedrijfsnaam" required error={errors.bedrijf}>
          <input id="bedrijf" name="bedrijf" autoComplete="organization" className={fieldClass} value={bedrijf} onChange={(e) => setBedrijf(e.target.value)} aria-invalid={Boolean(errors.bedrijf)} required />
        </Field>
        <Field id="contact" label="Contactpersoon" required error={errors.contact}>
          <input id="contact" name="contact" autoComplete="name" className={fieldClass} value={contact} onChange={(e) => setContact(e.target.value)} aria-invalid={Boolean(errors.contact)} required />
        </Field>
        <Field id="telefoon" label="Telefoon" required error={errors.telefoon}>
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" className={fieldClass} value={telefoon} onChange={(e) => setTelefoon(e.target.value)} aria-invalid={Boolean(errors.telefoon)} required />
        </Field>
        <Field id="email" label="E-mail" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={Boolean(errors.email)} required />
        </Field>
        <Field id="adres" label="Afleveradres / bouwlocatie" className="sm:col-span-2">
          <input id="adres" name="adres" autoComplete="street-address" className={fieldClass} value={adres} onChange={(e) => setAdres(e.target.value)} />
        </Field>
        <Field id="project" label="Projectreferentie" className="sm:col-span-2">
          <input id="project" name="project" className={fieldClass} value={project} onChange={(e) => setProject(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Maatlijst</h3>
        <div>
          <p id="snel-profiel" className={labelClass}>
            Zet een profiel op de eerste lege regel
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="snel-profiel">
            {orderProfiles.map((profile) => (
              <button
                key={profile}
                type="button"
                className="inline-flex min-h-11 items-center gap-2 border border-line bg-white px-3 text-base font-semibold text-ink hover:border-brand"
                onClick={() => chooseProfile(profile)}
              >
                {profile !== "Anders" && (
                  <ProfileIcon kind={kindFor[profile]} className="h-8 w-8 text-brand" />
                )}
                {profile}
              </button>
            ))}
          </div>
        </div>
        {errors.regels && (
          <p id="regels" tabIndex={-1} className="text-base text-danger" role="alert">
            {errors.regels}
          </p>
        )}
        {lines.map((line, index) => {
          const kind = kindFor[line.profiel] ?? "hoek";
          return (
            <fieldset key={line.id} className="border border-line bg-white p-4">
              <legend className="px-2 text-base font-semibold">Regel {index + 1}</legend>
              <div className="mb-4 flex items-center gap-3 text-brand">
                <ProfileIcon kind={line.profiel ? kind : "hoek"} className="h-12 w-12" />
                <span className="text-base text-ink">{line.profiel || "Kies een profiel"}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id={`profiel-${line.id}`} label="Profieltype" required error={errors[`profiel-${line.id}`]}>
                  <select
                    id={`profiel-${line.id}`}
                    className={fieldClass}
                    value={line.profiel}
                    onChange={(e) =>
                      updateLine(line.id, {
                        profiel: e.target.value,
                        neus: e.target.value === "HWS-profiel" ? line.neus : "",
                        maat: e.target.value === "HWS-profiel" ? line.maat : "",
                      })
                    }
                    aria-invalid={Boolean(errors[`profiel-${line.id}`])}
                  >
                    <option value="">Kies een profiel</option>
                    {orderProfiles.map((profile) => (
                      <option key={profile} value={profile}>
                        {profile}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id={`kleur-${line.id}`} label="Kleur" required error={errors[`kleur-${line.id}`]}>
                  <select
                    id={`kleur-${line.id}`}
                    className={fieldClass}
                    value={line.kleur}
                    onChange={(e) => updateLine(line.id, { kleur: e.target.value })}
                    aria-invalid={Boolean(errors[`kleur-${line.id}`])}
                  >
                    <option value="">Kies een kleur</option>
                    <option value="zwart">Zwart</option>
                    <option value="grijs">Grijs</option>
                    <option value="wit">Wit</option>
                  </select>
                </Field>
                {line.profiel === "HWS-profiel" && (
                  <>
                    <Field id={`neus-${line.id}`} label="Uitvoering neus">
                      <select id={`neus-${line.id}`} className={fieldClass} value={line.neus} onChange={(e) => updateLine(line.id, { neus: e.target.value })}>
                        <option value="">Geen voorkeur</option>
                        <option value="Harde neus">Harde neus</option>
                        <option value="Flexibele neus">Flexibele neus</option>
                      </select>
                    </Field>
                    <Field id={`maat-${line.id}`} label="Uitvoering smal / XL">
                      <select id={`maat-${line.id}`} className={fieldClass} value={line.maat} onChange={(e) => updateLine(line.id, { maat: e.target.value })}>
                        <option value="">Geen voorkeur</option>
                        <option value="Smal">Smal</option>
                        <option value="XL">XL</option>
                      </select>
                    </Field>
                  </>
                )}
                <Field id={`breedte-${line.id}`} label="Slabbebreedte (mm)">
                  <input id={`breedte-${line.id}`} inputMode="decimal" className={`${fieldClass} nums`} value={line.breedte} onChange={(e) => updateLine(line.id, { breedte: e.target.value })} />
                </Field>
                <Field id={`lengte-${line.id}`} label="Lengte (mm)">
                  <input id={`lengte-${line.id}`} inputMode="decimal" className={`${fieldClass} nums`} value={line.lengte} onChange={(e) => updateLine(line.id, { lengte: e.target.value })} />
                </Field>
                <Field id={`aantal-${line.id}`} label="Aantal" required error={errors[`aantal-${line.id}`]}>
                  <input
                    id={`aantal-${line.id}`}
                    inputMode="numeric"
                    className={`${fieldClass} nums`}
                    value={line.aantal}
                    onChange={(e) => updateLine(line.id, { aantal: e.target.value })}
                    aria-invalid={Boolean(errors[`aantal-${line.id}`])}
                  />
                </Field>
              </div>
              {line.profiel === "Manchet" && (
                <p className="mt-3 text-base">Voor een manchet vult u de maten van de sparing in bij lengte en breedte.</p>
              )}
              {line.profiel === "PVC-folie" && (
                <p className="mt-3 text-base">PVC-folie gaat standaard op rollen van 50 of 125 m1. Vermeld de gewenste rol bij de lengte of in de opmerkingen.</p>
              )}
              {lines.length > 1 && (
                <button
                  type="button"
                  className="mt-4 inline-flex min-h-11 items-center text-base font-semibold text-brand underline"
                  onClick={() => setLines((current) => current.filter((item) => item.id !== line.id))}
                >
                  Verwijder regel {index + 1}
                </button>
              )}
            </fieldset>
          );
        })}
        <button
          type="button"
          className={btnSecondary}
          onClick={() => {
            setLines((current) => [...current, emptyLine(String(seq))]);
            setSeq((n) => n + 1);
          }}
        >
          Regel toevoegen
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="datum" label="Gewenste leverdatum">
          <input id="datum" type="date" className={fieldClass} value={datum} onChange={(e) => setDatum(e.target.value)} />
        </Field>
        <fieldset>
          <legend className={labelClass}>Spoed</legend>
          <div className="flex gap-3">
            {(["nee", "ja"] as const).map((value) => (
              <label key={value} className="inline-flex min-h-11 items-center gap-2 text-lg">
                <input type="radio" name="spoed" value={value} checked={spoed === value} onChange={() => setSpoed(value)} />
                {value === "ja" ? "Ja" : "Nee"}
              </label>
            ))}
          </div>
        </fieldset>
        <Field id="opmerkingen" label="Opmerkingen" className="sm:col-span-2">
          <textarea id="opmerkingen" rows={4} className={fieldClass} value={opmerkingen} onChange={(e) => setOpmerkingen(e.target.value)} />
        </Field>
      </div>

      <div className="space-y-3">
        <label className="flex min-h-11 items-start gap-3 text-lg">
          <input type="checkbox" className="mt-1 h-5 w-5" checked={maatlijst} onChange={(e) => setMaatlijst(e.target.checked)} />
          <span>Maatlijst volgt per mail</span>
        </label>
        <div>
          <label className="flex min-h-11 items-start gap-3 text-lg">
            <input
              id="akkoord"
              type="checkbox"
              className="mt-1 h-5 w-5"
              checked={akkoord}
              onChange={(e) => setAkkoord(e.target.checked)}
              aria-invalid={Boolean(errors.akkoord)}
              aria-describedby={errors.akkoord ? "akkoord-fout" : undefined}
            />
            <span>
              Ik ga akkoord met de{" "}
              <a href={termsUrl} className="text-brand underline" target="_blank" rel="noopener noreferrer">
                algemene verkoopvoorwaarden
              </a>
              .
            </span>
          </label>
          {errors.akkoord && (
            <p id="akkoord-fout" className="mt-1 text-base text-danger" role="alert">
              {errors.akkoord}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className={btnPrimary}>
        Verstuur via e-mail
      </button>
      <p className="text-base">
        De knop opent uw mailprogramma met een bericht aan {emails.verkoop}. Dezelfde tekst verschijnt hieronder, zodat u die kunt kopiëren.
      </p>

      {message && (
        <div className="border border-line bg-white p-4" aria-live="polite">
          <h3 className="text-xl font-semibold">Uw bericht</h3>
          <p className="mt-2 text-base">
            Mail dit naar{" "}
            <a className="text-brand underline" href={`mailto:${emails.verkoop}`}>
              {emails.verkoop}
            </a>{" "}
            of bel {company.phoneDisplay}.
          </p>
          <textarea readOnly value={message} aria-label="Samengesteld bestelbericht" className={`${fieldClass} nums mt-3 min-h-64 font-mono text-base`} />
          <div className="mt-3 flex flex-wrap gap-3">
            <button type="button" className={btnSecondary} onClick={copyMessage}>
              {copied ? "Gekopieerd" : "Kopieer bericht"}
            </button>
            <button type="button" className={btnSecondary} onClick={() => openMail(message)}>
              Open opnieuw in mail
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-fout`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<{ "aria-describedby"?: string; "aria-invalid"?: boolean }>, {
        "aria-describedby": error ? errorId : undefined,
        "aria-invalid": Boolean(error),
      })
    : children;
  return (
    <div className={className}>
      <label htmlFor={id} className={labelClass}>
        {label}
        {required ? " *" : ""}
      </label>
      {control}
      {error && (
        <p id={errorId} className="mt-1 text-base text-danger" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
