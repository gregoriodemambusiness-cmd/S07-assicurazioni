import type { Metadata } from "next";
import { SiteShell } from "../SiteShell";

export const metadata: Metadata = {
  title: "Soluzioni — S07",
  description: "Assicurazioni per persona, investimenti, beni e impresa.",
};

const details = [
  {
    id: "persona",
    n: "01",
    title: "Persona",
    claim: "Salute e vita meritano protezione, non improvvisazione.",
    image: "/s07-persona.svg",
    intro: "Soluzioni assicurative pensate per tutelare la persona, la famiglia e il futuro, mettendo al centro esigenze reali e valore umano.",
    items: ["Tutela salute", "Coperture vita", "Protezione famiglia", "Consulenza dedicata"],
  },
  {
    id: "investimenti",
    n: "02",
    title: "Investimenti",
    claim: "Pianificare significa dare una direzione al risparmio.",
    image: "/s07-investimenti.svg",
    intro: "Affianchiamo la consulenza finanziaria alle tutele assicurative per costruire percorsi di risparmio più consapevoli.",
    items: ["Analisi obiettivi", "Pianificazione del risparmio", "Soluzioni assicurative-finanziarie", "Monitoraggio nel tempo"],
  },
  {
    id: "beni",
    n: "03",
    title: "Beni",
    claim: "Casa e proprietà sono valore concreto. Vanno protetti bene.",
    image: "/s07-beni.svg",
    intro: "Coperture per abitazioni, immobili e beni personali, pensate per ridurre l’impatto degli imprevisti.",
    items: ["Casa e proprietà", "Responsabilità civile", "Eventi e danni", "Assistenza e continuità"],
  },
  {
    id: "impresa",
    n: "04",
    title: "Impresa",
    claim: "Ogni azienda ha rischi diversi. La copertura deve seguirli.",
    image: "/s07-impresa.svg",
    intro: "Polizze e garanzie per imprese e imprenditori, con una consulenza costruita intorno ad attività, persone e continuità aziendale.",
    items: ["Rischi aziendali", "Garanzie per imprenditori", "Responsabilità professionale", "Tutela della continuità"],
  },
];

export default function Servizi() {
  return (
    <SiteShell>
      <section className="page-hero page-hero-services">
        <span className="page-kicker">Soluzioni / S07</span>
        <h1>PROTEZIONE.<br /><em>DA OGNI ANGOLO.</em></h1>
        <p>Persona, investimenti, beni e impresa: quattro aree di consulenza per costruire coperture più chiare, utili e coerenti.</p>
        <div className="hero-mosaic">
          <img src="/s07-persona.svg" alt="Protezione della persona" />
          <img src="/s07-investimenti.svg" alt="Pianificazione investimenti" />
          <img src="/s07-beni.svg" alt="Protezione dei beni" />
          <img src="/s07-impresa.svg" alt="Assicurazioni per imprese" />
        </div>
      </section>

      <section className="page-intro reveal">
        <span className="label">Il principio</span>
        <h2>Prima capiamo cosa conta. <em>Poi scegliamo come proteggerlo.</em></h2>
        <p>Non partiamo dal prodotto, ma dalla situazione del cliente. Analizziamo bisogni, obiettivi e priorità per proporre soluzioni assicurative su misura.</p>
      </section>

      <section className="service-detail-list">
        {details.map((service, index) => (
          <article className={`service-detail ${index % 2 ? "reverse" : ""}`} id={service.id} key={service.id}>
            <div className="service-detail-image reveal">
              <img src={service.image} alt={service.title} />
              <span>{service.n} / 04</span>
            </div>
            <div className="service-detail-copy reveal">
              <small>{service.n} / Soluzione</small>
              <h2>{service.title}</h2>
              <h3>{service.claim}</h3>
              <p>{service.intro}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}<span>↘</span></li>)}</ul>
              <a className="text-link" href={`/contatti?servizio=${service.id}`}>Richiedi una consulenza <span>↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="closing-band reveal">
        <span>Non sai da dove partire?</span>
        <h2>Partiamo dalla tua situazione,<br />non da una polizza standard.</h2>
        <a href="/contatti">Parla con S07 ↗</a>
      </section>
    </SiteShell>
  );
}
