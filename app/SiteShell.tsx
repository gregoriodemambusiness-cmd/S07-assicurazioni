"use client";

import { useEffect } from "react";
import Link from "next/link";

export function SiteShell({children}:{children:React.ReactNode}){
  useEffect(()=>{
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add("is-visible");
    }),{threshold:.12});
    document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[]);
  return <main className="inner-site">
    <header className="inner-nav">
      <Link className="logo logo-image" href="/"><img src="/s07-logo.png" alt="S07" /></Link>
      <nav>
        <a href="/servizi">Soluzioni</a><a href="/approccio">Approccio</a><a href="/studio">Chi siamo</a><a href="/contatti">Sedi</a>
      </nav>
      <a className="inner-nav-cta" href="/contatti">Consulenza <i>↗</i></a>
    </header>
    {children}
    <footer className="inner-footer">
      <span className="label">Il prossimo passo</span>
      <h2 className="reveal">Proteggi meglio<br/>ciò che <em>conta.</em></h2>
      <a className="big-mail reveal" href="mailto:s07@s07italiana.it">s07@s07italiana.it <span>↗</span></a>
      <div className="footer-row"><Link className="logo logo-image footer-logo" href="/"><img src="/s07-logo.png" alt="S07" /></Link><p>Assicurazioni con il valore umano al centro.</p><a href="tel:+390114345220">011 434 5220 ↗</a><span>© 2026</span></div>
      <p className="footer-ai-note"><Link href="/privacy">Privacy e note legali</Link></p>
    </footer>
  </main>
}
