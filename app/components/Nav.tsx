'use client'
import { useEffect } from 'react'

export default function Nav() {
  useEffect(() => {
    const nav = document.getElementById('nav')
    const handler = () => nav?.classList.toggle('stuck', window.scrollY > 56)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav">
      <div className="container">
        <div className="nav-row">
          <a href="#" className="nav-logo">
            <svg className="logo-mark" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 6L18 3L24.5 6L28 13H8L11.5 6Z" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.07)" strokeLinejoin="round"/>
              <path d="M8 13L18 33L28 13" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.04)" strokeLinejoin="round"/>
              <line x1="8" y1="13" x2="28" y2="13" stroke="#C9A96E" strokeWidth="0.8"/>
              <line x1="18" y1="3" x2="14.5" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5"/>
              <line x1="18" y1="3" x2="21.5" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.5"/>
              <line x1="18" y1="33" x2="13" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4"/>
              <line x1="18" y1="33" x2="23" y2="13" stroke="#C9A96E" strokeWidth="0.6" opacity="0.4"/>
              <circle cx="18" cy="13" r="1.5" fill="#C9A96E" opacity="0.9"/>
            </svg>
            <span className="logo-name">VÉLORIA</span>
          </a>
          <ul className="nav-links">
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#testimonials">Clientes</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Contactar</a>
        </div>
      </div>
    </nav>
  )
}
