import type { Metadata } from "next";
import { SiteShell } from "../SiteShell";
import { ContactForm } from "../ContactForm";
export const metadata:Metadata={title:"Contatti — S07",description:"Sedi, telefono ed email dell’agenzia S07 a Torino e San Mauro Torinese.",openGraph:{title:"Contatti — S07",description:"Richiedi una consulenza assicurativa.",images:[]},twitter:{title:"Contatti — S07",description:"Richiedi una consulenza assicurativa.",images:[]}};

export default function Contatti(){return <SiteShell>
 <section className="contact-page"><div className="contact-intro"><span className="page-kicker">Contatti / Sedi S07</span><h1>PARLIAMO DELLA TUA<br/><em>PROTEZIONE.</em></h1><p>Scrivici o chiamaci per fissare una consulenza. Ti aiuteremo a capire quali tutele sono più adatte alla tua situazione personale, patrimoniale o aziendale.</p><div className="direct-contact"><span>Contatti diretti</span><a href="tel:+390114345220">011 434 5220 ↗</a><a href="mailto:s07@s07italiana.it">s07@s07italiana.it ↗</a><a href="mailto:s07srl@legalmail.it">PEC: s07srl@legalmail.it ↗</a><span>Sedi</span><p>Corso Principe Eugenio, 42 — 10122 Torino</p><p>Via Roma, 42 — San Mauro Torinese, 10099</p></div></div><ContactForm/></section>
 </SiteShell>}
