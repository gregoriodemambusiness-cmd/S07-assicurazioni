"use client";
import { FormEvent, useState } from "react";

const FORM_NAME = "contatti-s07";
const MAIL = "s07@s07italiana.it";

type Status = "idle" | "sending" | "sent" | "error";

/** Costruisce il mailto di riserva: usato solo se l'invio via rete fallisce. */
function mailtoFallback(data: FormData) {
  const subject = encodeURIComponent(`Nuova richiesta S07 — ${data.get("azienda") || data.get("nome")}`);
  const body = encodeURIComponent(
    `Nome: ${data.get("nome")}\nAzienda: ${data.get("azienda")}\nEmail: ${data.get("email")}\nInteresse: ${data.get("interesse")}\n\n${data.get("messaggio")}`
  );
  return `mailto:${MAIL}?subject=${subject}&body=${body}`;
}

export function ContactForm(){
  const [status, setStatus] = useState<Status>("idle");
  const [fallback, setFallback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      // Netlify Forms riceve un POST url-encoded sulla root del sito.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      // Nessun lead va perso: proponiamo l'invio via email come alternativa esplicita.
      setFallback(mailtoFallback(data));
      setStatus("error");
    }
  }

  if (status === "sent") return <div className="form-state form-state-ok" role="status">
    <i aria-hidden="true">✓</i>
    <strong>Richiesta inviata.</strong>
    <p>Ti rispondiamo entro un giorno lavorativo, all’indirizzo che ci hai lasciato.</p>
    <button type="button" onClick={() => setStatus("idle")}>Invia un’altra richiesta</button>
  </div>;

  return <form
    className="contact-form"
    name={FORM_NAME}
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={submit}
  >
    {/* Campi tecnici richiesti da Netlify Forms: identificano il form e filtrano i bot. */}
    <input type="hidden" name="form-name" value={FORM_NAME} />
    <p className="hp-field" aria-hidden="true"><label>Non compilare<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>

    <label><span>Nome e cognome</span><input name="nome" required placeholder="Come ti chiami?"/></label>
    <label><span>Azienda o riferimento</span><input name="azienda" placeholder="Azienda, famiglia o privato"/></label>
    <label><span>Email</span><input name="email" type="email" required placeholder="nome@azienda.it"/></label>
    <label><span>Ambito di interesse</span><select name="interesse" defaultValue=""><option value="" disabled>Seleziona un ambito</option><option>Persona</option><option>Investimenti</option><option>Beni</option><option>Impresa</option><option>Non sono sicuro</option></select></label>
    <label className="full"><span>Raccontaci il punto di partenza</span><textarea name="messaggio" required rows={5} placeholder="Di quale protezione hai bisogno? Persona, casa, attività, risparmio, impresa…"/></label>

    {status === "error" && <p className="form-state form-state-error" role="alert">
      Non siamo riusciti a inviare la richiesta. <a href={fallback}>Scrivici via email →</a>
    </p>}

    <button type="submit" disabled={status === "sending"}>
      {status === "sending" ? "Invio in corso…" : "Invia la richiesta"} <i>↗</i>
    </button>
  </form>;
}
