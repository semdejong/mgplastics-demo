"use client";

import { useEffect, useState, type FormEvent } from "react";
import { company, emails } from "@/lib/site";
import { btnPrimary, btnSecondary, fieldClass, labelClass } from "@/lib/ui";

export default function ContactForm() {
  const [naam, setNaam] = useState("");
  const [telefoon, setTelefoon] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");

  useEffect(() => {
    const onderwerp = new URLSearchParams(window.location.search).get("onderwerp");
    if (onderwerp !== "hoogfrequent") return;
    setBericht((current) =>
      current
        ? current
        : "Ik wil graag de mogelijkheden bespreken voor hoogfrequent lassen in opdracht.\n\n",
    );
  }, []);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function compose() {
    return [
      "Bericht via de site van MG Plastics",
      "",
      `Naam: ${naam.trim()}`,
      `Telefoon: ${telefoon.trim()}`,
      `E-mail: ${email.trim()}`,
      "",
      "Bericht:",
      bericht.trim(),
    ].join("\n");
  }

  function openMail(text: string) {
    const href = `mailto:${emails.administratie}?subject=${encodeURIComponent("Contact MG Plastics")}&body=${encodeURIComponent(text)}`;
    window.location.href = href;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (!naam.trim()) next.naam = "Vul uw naam in.";
    if (!telefoon.trim()) next.telefoon = "Vul een telefoonnummer in.";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = "Vul een geldig e-mailadres in.";
    if (!bericht.trim()) next.bericht = "Schrijf een bericht.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }
    const text = compose();
    setMessage(text);
    setCopied(false);
    openMail(text);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="naam" className={labelClass}>
          Uw naam *
        </label>
        <input id="naam" name="naam" autoComplete="name" className={fieldClass} value={naam} onChange={(e) => setNaam(e.target.value)} aria-invalid={Boolean(errors.naam)} aria-describedby={errors.naam ? "naam-fout" : undefined} />
        {errors.naam && <p id="naam-fout" className="mt-1 text-base text-danger">{errors.naam}</p>}
      </div>
      <div>
        <label htmlFor="telefoon" className={labelClass}>
          Telefoonnummer *
        </label>
        <input id="telefoon" name="tel" type="tel" autoComplete="tel" className={fieldClass} value={telefoon} onChange={(e) => setTelefoon(e.target.value)} aria-invalid={Boolean(errors.telefoon)} aria-describedby={errors.telefoon ? "telefoon-fout" : undefined} />
        {errors.telefoon && <p id="telefoon-fout" className="mt-1 text-base text-danger">{errors.telefoon}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail *
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-fout" : undefined} />
        {errors.email && <p id="email-fout" className="mt-1 text-base text-danger">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="bericht" className={labelClass}>
          Bericht *
        </label>
        <textarea id="bericht" name="bericht" rows={6} className={fieldClass} value={bericht} onChange={(e) => setBericht(e.target.value)} aria-invalid={Boolean(errors.bericht)} aria-describedby={errors.bericht ? "bericht-fout" : undefined} />
        {errors.bericht && <p id="bericht-fout" className="mt-1 text-base text-danger">{errors.bericht}</p>}
      </div>
      <button type="submit" className={btnPrimary}>
        Verstuur via e-mail
      </button>
      <p className="text-base">
        De knop opent uw mailprogramma met een bericht aan {emails.administratie}. Dezelfde tekst verschijnt hieronder, zodat u die kunt kopiëren.
      </p>
      {message && (
        <div aria-live="polite" className="border border-line bg-muted p-4">
          <h3 className="text-xl font-semibold">Uw bericht</h3>
          <p className="mt-2 text-base">
            Mail dit naar {emails.administratie} of bel {company.phoneDisplay}.
          </p>
          <textarea readOnly aria-label="Samengesteld contactbericht" value={message} className={`${fieldClass} mt-3 min-h-48 font-mono text-base`} />
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              className={btnSecondary}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(message);
                  setCopied(true);
                } catch {
                  setCopied(false);
                }
              }}
            >
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
