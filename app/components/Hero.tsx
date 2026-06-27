'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    const sf = document.getElementById('starfield')
    if (!sf) return
    for (let i = 0; i < 90; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const size = Math.random() > 0.75 ? 3 : 2
      s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--d:${2 + Math.random() * 5}s;--delay:${Math.random() * 5}s;opacity:${0.1 + Math.random() * 0.5};`
      sf.appendChild(s)
    }
  }, [])

  return (
    <section id="hero">
      <div id="starfield"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Agencia de Desarrollo · España
        </div>
        <h1 className="hero-h1">Tú te centras <em>en crecer.</em></h1>
        <div className="hero-h2">Nosotros hacemos el resto.</div>
        <p className="hero-sub">
          Véloria lleva el desarrollo digital de élite a tu negocio: webs que convierten y recepcionistas virtuales disponibles 24 horas, los 365 días del año.
        </p>
        <div className="hero-btns">
          <a href="#services" className="btn-gold">Descubrir servicios</a>
          <a href="#contact" className="btn-outline">Hablar con nosotros</a>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
