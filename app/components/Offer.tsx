'use client'
import { useState, useEffect } from 'react'

export default function Offer() {
  const [time, setTime] = useState({ d: '04', h: '11', m: '38', s: '00' })

  useEffect(() => {
    const end = Date.now() + (4 * 86400 + 11 * 3600 + 38 * 60) * 1000
    function tick() {
      const diff = end - Date.now()
      if (diff <= 0) return
      setTime({
        d: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="offer">
      <div className="container">
        <div className="offer-inner reveal">
          <div className="offer-flag">✦ Oferta especial de lanzamiento · Plazas muy limitadas</div>
          <h2 className="offer-ttl">
            Páginas web <span>premium</span><br />
            a un precio verdaderamente<br />
            <span>económico</span>
          </h2>
          <p className="offer-sub">
            Creemos que todas las empresas merecen una presencia digital de élite. Por eso ofrecemos desarrollo de primer nivel a precios que te harán dudar de que sea posible. Y lo es.
          </p>
          <div className="offer-checks">
            <div className="offer-check">Diseño exclusivo y personalizado</div>
            <div className="offer-check">Sin costes ocultos</div>
            <div className="offer-check">Entrega en 7 días garantizada</div>
            <div className="offer-check">Soporte incluido el primer mes</div>
            <div className="offer-check">100% profesional, siempre</div>
          </div>
          <div className="offer-urgency">
            <span className="urgency-label">La oferta de lanzamiento caduca en:</span>
            <div className="countdown-boxes">
              <div className="cdbox"><span className="cd-num">{time.d}</span><span className="cd-lbl">días</span></div>
              <div className="cdbox"><span className="cd-num">{time.h}</span><span className="cd-lbl">horas</span></div>
              <div className="cdbox"><span className="cd-num">{time.m}</span><span className="cd-lbl">min</span></div>
              <div className="cdbox"><span className="cd-num">{time.s}</span><span className="cd-lbl">seg</span></div>
            </div>
          </div>
          <a href="#contact" className="btn-gold" style={{ fontSize: '15.5px', padding: '16px 52px' }}>
            Solicitar presupuesto gratuito →
          </a>
        </div>
      </div>
    </section>
  )
}
