import type { Metadata } from "next";
import { SiteShell } from "../SiteShell";
import { PrivacyLinks } from "../PrivacyLinks";

export const metadata: Metadata = {
  title: "Privacy — S07",
  description: "Come S07 tratta i dati personali raccolti tramite il sito.",
  openGraph: { title: "Privacy — S07", description: "Come trattiamo i dati personali.", images: [] },
  twitter: { title: "Privacy — S07", description: "Come trattiamo i dati personali.", images: [] },
};

export default function Privacy() {
  return (
    <SiteShell>
      <section className="page-hero" style={{ minHeight: 420 }}>
        <span className="page-kicker">Privacy</span>
        <h1>COME TRATTIAMO<br /><em>I TUOI DATI.</em></h1>
      </section>

      <section className="page-intro" style={{ display: "block", padding: "6vw 8vw" }}>
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 28 }}>
          <div>
            <h3 style={{ fontSize: "1.3rem", letterSpacing: "-.02em", margin: "0 0 10px" }}>Informativa completa</h3>
            <p style={{ color: "#6d6861", lineHeight: 1.6, marginBottom: 18 }}>Il documento ufficiale su come S07 tratta i tuoi dati — titolare, finalità, diritti GDPR — è qui sotto.</p>
            <PrivacyLinks />
          </div>
          <div>
            <h3 style={{ fontSize: "1.3rem", letterSpacing: "-.02em", margin: "0 0 10px" }}>In breve</h3>
            <p style={{ color: "#6d6861", lineHeight: 1.6 }}>Raccogliamo solo i dati che inserisci volontariamente nei form del sito, per risponderti o valutare la tua richiesta. Nessun cookie di profilazione, nessuna vendita o condivisione dei dati per marketing di terzi. I dati transitano solo attraverso i fornitori tecnici usati per far funzionare il sito.</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.3rem", letterSpacing: "-.02em", margin: "0 0 10px" }}>Immagini generate con AI</h3>
            <p style={{ color: "#6d6861", lineHeight: 1.6 }}>Alcune immagini presenti su questo sito sono generate con intelligenza artificiale. Non raffigurano persone reali.</p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.3rem", letterSpacing: "-.02em", margin: "0 0 10px" }}>Contatti</h3>
            <p style={{ color: "#6d6861", lineHeight: 1.6 }}>Per qualsiasi richiesta sui tuoi dati, scrivi a <a href="mailto:s07@s07italiana.it" style={{ color: "var(--orange)", fontWeight: 800 }}>s07@s07italiana.it</a>.</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
