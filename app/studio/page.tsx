import type { Metadata } from "next";
import { SiteShell } from "../SiteShell";

export const metadata: Metadata = {
  title: "Chi siamo — S07",
  description: "S07, agenzia assicurativa plurimandataria con sedi a Torino e San Mauro Torinese.",
};

export default function Studio() {
  return (
    <SiteShell>
      <section className="page-hero studio-hero">
        <span className="page-kicker">S07 / Chi siamo</span>
        <h1>ASSICURAZIONI.<br /><em>PIÙ UMANE.</em></h1>
        <p>S07 è un’agenzia assicurativa plurimandataria che affianca persone, famiglie e imprese nella protezione di ciò che conta.</p>
        <div className="studio-hero-art s07-panel"><img src="/s07-logo.png" alt="Logo S07" /><div className="story-card"><small>Il nostro ruolo</small><strong>Rendere le scelte assicurative più chiare.</strong></div></div>
      </section>

      <section className="origin-story">
        <div className="page-section-head reveal"><span className="label">Identità</span><h2>Giovani nel modo di comunicare.<br /><em>Professionali nel modo di proteggere.</em></h2></div>
        <div className="story-columns reveal"><p>Crediamo in una consulenza assicurativa più comprensibile, vicina e concreta. Per questo partiamo dall’ascolto e traduciamo bisogni complessi in soluzioni chiare.</p><p>Le nostre aree di lavoro coprono persona, investimenti, beni e impresa: quattro dimensioni spesso collegate tra loro, che meritano una visione unica.</p></div>
      </section>

      <section className="beliefs-section"><span className="label">Compagnie partner</span><div className="beliefs-grid">
        {[
          ["01", "Italiana Assicurazioni", "Soluzioni assicurative per persone, famiglie e imprese."],
          ["02", "Prima", "Coperture snelle e digitali per esigenze quotidiane."],
          ["03", "Vittoria Assicurazioni", "Un riferimento storico nel mercato assicurativo italiano."],
          ["04", "Zurich", "Soluzioni internazionali per protezione e continuità."],
        ].map((x) => <article className="reveal" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}
      </div></section>

      <section className="studio-model">
        <div className="model-visual reveal"><div className="model-core">S07<br /><small>Torino · San Mauro</small></div><div className="model-agents"><span>Persona</span><span>Investimenti</span><span>Beni</span><span>Impresa</span></div></div>
        <div className="model-copy reveal"><span className="label">Territorio</span><h2>Due sedi.<br /><em>Un solo riferimento.</em></h2><p>Puoi trovarci in Corso Principe Eugenio 42 a Torino e in Via Roma 42 a San Mauro Torinese.</p><a className="text-link" href="/contatti">Vedi i contatti <span>↗</span></a></div>
      </section>
    </SiteShell>
  );
}
