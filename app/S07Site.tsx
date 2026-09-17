"use client";

import { useEffect } from "react";
import Link from "next/link";

const services = [
  {
    n: "01",
    id: "persona",
    title: "Persona",
    text: "Assicurazioni per salute e vita, con il valore umano al centro.",
    tag: "Salute · Vita · Protezione",
    image: "/s07-persona.svg",
  },
  {
    n: "02",
    id: "investimenti",
    title: "Investimenti",
    text: "Pianificazione del risparmio con consulenza finanziaria e tutele assicurative.",
    tag: "Risparmio · Futuro · Metodo",
    image: "/s07-investimenti.svg",
  },
  {
    n: "03",
    id: "beni",
    title: "Beni",
    text: "Soluzioni per proteggere casa, proprietà e ciò che ha valore.",
    tag: "Casa · Proprietà · Sicurezza",
    image: "/s07-beni.svg",
  },
  {
    n: "04",
    id: "impresa",
    title: "Impresa",
    text: "Polizze, garanzie e consulenza dedicata a imprenditori e aziende.",
    tag: "Aziende · Rischi · Continuità",
    image: "/s07-impresa.svg",
  },
];

const partners = ["Italiana Assicurazioni", "Prima", "Vittoria Assicurazioni", "Zurich"];

export function S07Site() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        }),
      { threshold: 0.14 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const parallax = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${(event.clientX - rect.left) / rect.width - 0.5}`);
    event.currentTarget.style.setProperty("--my", `${(event.clientY - rect.top) / rect.height - 0.5}`);
  };

  return (
    <main>
      <section className="hero-new s07-hero" id="top" onPointerMove={parallax}>
        <div className="s07-hero-art">
          <div className="s07-glow s07-glow-a" />
          <div className="s07-glow s07-glow-b" />
          <img src="/s07-logo.png" alt="S07 Esse Zero Sette" />
        </div>
        <div className="hero-shade s07-shade" />
        <header className="glass-nav">
          <a className="logo logo-image" href="#top">
            <img src="/s07-logo.png" alt="S07" />
          </a>
          <nav>
            <a href="/servizi">Soluzioni</a>
            <a href="/approccio">Approccio</a>
            <a href="/studio">Chi siamo</a>
            <a href="/contatti">Sedi</a>
          </nav>
          <a className="nav-pill" href="/contatti">
            Consulenza <i>↗</i>
          </a>
        </header>

        <div className="hero-copy">
          <span className="hero-kicker">Agenzia assicurativa plurimandataria / Torino</span>
          <h1>
            <span>PROTEGGI</span>
            <span className="ghost">CIÒ CHE CONTA.</span>
          </h1>
          <p>Soluzioni assicurative e consulenza per persone, patrimoni e imprese.</p>
        </div>

        <div className="float-card card-one">
          <small>Il punto di partenza</small>
          <strong>Capire rischi e obiettivi</strong>
          <span>01</span>
        </div>
        <div className="float-card card-two">
          <small>Il risultato</small>
          <strong>Una protezione su misura</strong>
          <span>02</span>
        </div>
        <a className="hero-cta" href="/contatti">
          <span>Richiedi una</span>
          <strong>Consulenza</strong>
          <i>↘</i>
        </a>
        <div className="hero-foot">
          <span>Persona · Investimenti · Beni · Impresa</span>
          <span>Torino · San Mauro Torinese</span>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>ASSICURAZIONI CON IL VALORE UMANO AL CENTRO</span>
          <i>✦</i>
          <span>ASSICURAZIONI CON IL VALORE UMANO AL CENTRO</span>
          <i>✦</i>
          <span>ASSICURAZIONI CON IL VALORE UMANO AL CENTRO</span>
          <i>✦</i>
        </div>
      </div>

      <section className="problem-solution" id="problema">
        <div className="ps-card reveal">
          <small>Il problema</small>
          <h2>Ogni scelta ha un rischio.<br />Non sempre è chiaro quale.</h2>
          <p>Casa, salute, impresa e risparmio richiedono decisioni importanti. Il nostro lavoro è rendere quelle decisioni più semplici, consapevoli e coerenti con la tua vita.</p>
        </div>
        <div className="ps-card accent reveal">
          <small>La risposta</small>
          <h2>Consulenza prima della polizza.</h2>
          <p>Partiamo dall’ascolto, analizziamo bisogni e priorità, poi costruiamo soluzioni assicurative con compagnie selezionate.</p>
        </div>
      </section>

      <section className="intro-new" id="approccio">
        <div className="intro-head reveal">
          <span className="label">Perché S07</span>
          <h2>Protezione chiara.<br /><em>Scelte più serene.</em></h2>
        </div>
        <div className="editorial-grid">
          <div className="portrait-main reveal s07-panel">
            <img src="/s07-logo.png" alt="Logo S07" />
            <span className="photo-index">01 / TORINO</span>
          </div>
          <div className="editorial-copy reveal">
            <p className="big-copy">Un’agenzia giovane nel linguaggio, solida nel metodo.</p>
            <p>S07 affianca persone, famiglie e imprese nella scelta delle coperture più adatte: dalla protezione personale alla pianificazione patrimoniale, fino alle garanzie per aziende e imprenditori.</p>
            <a href="/approccio">Scopri il nostro approccio <span>↗</span></a>
          </div>
          <div className="portrait-small reveal s07-mini-panel">
            <img src="/s07-logo.png" alt="Identità S07" />
            <div><span>Da rischio</span><b>→</b><span>A strategia</span></div>
          </div>
          <div className="orange-stat reveal">
            <small>Due sedi</small>
            <strong>Torino.<br />San Mauro.</strong>
            <span>Consulenza vicina, soluzioni complete.</span>
          </div>
        </div>
      </section>

      <section className="services-new" id="servizi">
        <div className="services-title reveal">
          <span className="label">Soluzioni</span>
          <h2>Quattro aree.<br /><em>Una sola consulenza.</em></h2>
        </div>
        <div className="service-cards">
          {services.map((service) => (
            <a className="service-card reveal" href={`/servizi#${service.id}`} key={service.n}>
              <img src={service.image} alt="" />
              <div className="service-wash" />
              <div className="service-top"><span>{service.n}</span><span>{service.tag}</span></div>
              <div className="service-body"><h3>{service.title}</h3><p>{service.text}</p><i>↗</i></div>
            </a>
          ))}
        </div>
      </section>

      <section className="ai-panel">
        <div className="ai-visual reveal s07-partners">
          {partners.map((partner) => <span key={partner}>{partner}</span>)}
        </div>
        <div className="ai-text reveal">
          <span className="label">Plurimandatario</span>
          <h2>Più compagnie.<br /><em>Più possibilità.</em></h2>
          <p>Collaboriamo con compagnie partner selezionate per proporre soluzioni assicurative coerenti con esigenze, profilo e obiettivi del cliente.</p>
          <div className="ai-points"><span>Analisi del bisogno</span><span>Confronto soluzioni</span><span>Consulenza continuativa</span></div>
        </div>
      </section>

      <section className="process-new">
        <div className="process-head reveal">
          <span className="label">Metodo</span>
          <h2>Dall’ascolto.<br />Alla copertura <em>giusta.</em></h2>
        </div>
        <div className="process-rail">
          {[
            ["01", "Ascolto", "Comprendiamo situazione, priorità e obiettivi.", "approccio"],
            ["02", "Analisi", "Valutiamo rischi, tutele già presenti e opportunità.", "approccio"],
            ["03", "Soluzione", "Costruiamo una proposta assicurativa su misura.", "servizi"],
            ["04", "Continuità", "Restiamo al fianco del cliente nel tempo.", "contatti"],
          ].map((step) => (
            <Link className="reveal" href={`/${step[3]}`} key={step[0]}>
              <span>{step[0]}</span><div className="step-icon">↘</div><h3>{step[1]}</h3><p>{step[2]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="audience-new" id="sedi">
        <div className="audience-image reveal s07-office-card">
          <div className="image-overlay-card">
            <small>Prima sede</small>
            <strong>Corso Principe Eugenio, 42<br />10122 Torino</strong>
            <a href="/contatti">Vedi contatti ↗</a>
          </div>
        </div>
        <div className="audience-card reveal">
          <small>Seconda sede</small>
          <h2>Via Roma, 42.<br /><em>San Mauro Torinese.</em></h2>
          <p>Due punti di riferimento sul territorio per offrire consulenza assicurativa vicina, chiara e continuativa.</p>
          <a href="/contatti">Richiedi una consulenza <span>↗</span></a>
        </div>
      </section>

      <footer className="footer-new" id="contatti">
        <div className="footer-glow" />
        <span className="label">Il prossimo passo</span>
        <h2 className="reveal">Proteggi meglio<br />ciò che <em>conta.</em></h2>
        <a className="big-mail reveal" href="mailto:s07@s07italiana.it">s07@s07italiana.it <span>↗</span></a>
        <div className="footer-row">
          <a className="logo logo-image footer-logo" href="#top"><img src="/s07-logo.png" alt="S07" /></a>
          <p>Assicurazioni con il valore umano al centro.</p>
          <a href="tel:+390114345220">011 434 5220 ↗</a>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
