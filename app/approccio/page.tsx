import type { Metadata } from "next";
import { SiteShell } from "../SiteShell";

export const metadata: Metadata = {
  title: "Approccio — S07",
  description: "Il metodo S07: ascolto, analisi, soluzione e continuità.",
};

export default function Approccio() {
  return (
    <SiteShell>
      <section className="page-hero visual-hero">
        <img src="/s07-impresa.svg" alt="Metodo di consulenza assicurativa" />
        <div className="visual-shade" />
        <span className="page-kicker">Approccio / Come lavoriamo</span>
        <h1>CONSULENZA PRIMA.<br /><em>POLIZZA POI.</em></h1>
        <p>Il nostro compito non è vendere una copertura qualsiasi, ma aiutarti a scegliere la protezione più coerente con la tua situazione.</p>
      </section>

      <section className="problem-solution">
        <div className="ps-card reveal"><small>Ascolto</small><h2>Partiamo da te.</h2><p>Prima di proporre una soluzione, capiamo persone, beni, attività, priorità e obiettivi.</p></div>
        <div className="ps-card accent reveal"><small>Metodo</small><h2>Trasformiamo il rischio in una scelta chiara.</h2><p>Analizziamo bisogni e alternative, poi costruiamo una proposta leggibile e sostenibile nel tempo.</p></div>
      </section>

      <section className="method-page">
        <div className="page-section-head reveal"><span className="label">Il metodo S07</span><h2>Quattro passaggi.<br /><em>Nessun salto nel buio.</em></h2></div>
        <div className="method-timeline">
          {[
            ["01", "Ascolto", "Raccogliamo informazioni e priorità reali, senza partire da un prodotto predefinito."],
            ["02", "Analisi", "Valutiamo esposizione al rischio, coperture già esistenti e obiettivi futuri."],
            ["03", "Proposta", "Presentiamo soluzioni assicurative chiare, confrontabili e motivate."],
            ["04", "Continuità", "Restiamo presenti nel tempo per aggiornare coperture, gestire dubbi e seguire l’evoluzione delle esigenze."],
          ].map((step) => <article className="reveal" key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-image reveal"><img src="/s07-investimenti.svg" alt="Consulenza chiara S07" /></div>
        <div className="quality-copy reveal"><span className="label">Cosa cambia</span><h2>Più chiarezza.<br /><em>Più controllo.</em></h2><p>Una buona consulenza deve rendere comprensibili rischi, costi, coperture e limiti. Per questo ogni proposta viene spiegata in modo diretto.</p><ul><li>Bisogni reali <b>01</b></li><li>Soluzioni confrontabili <b>02</b></li><li>Linguaggio chiaro <b>03</b></li><li>Supporto continuativo <b>04</b></li></ul></div>
      </section>
    </SiteShell>
  );
}
