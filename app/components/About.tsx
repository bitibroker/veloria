import { Globe, Bot, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-orb-wrap reveal">
            <div className="orb-ring-2"></div>
            <div className="orb-ring"><div className="orb-dot"></div></div>
            <div className="orb-core"></div>
            <div
              className="float-pill"
              style={{ top: '55px', right: '10px', '--fd': '5s', '--fdel': '0s' } as React.CSSProperties}
            >
              <div className="pill-label">Disponibilidad</div>
              <div className="pill-val">24/7</div>
            </div>
            <div
              className="float-pill"
              style={{ bottom: '70px', left: '10px', '--fd': '7s', '--fdel': '1.2s' } as React.CSSProperties}
            >
              <div className="pill-label">Entrega web en</div>
              <div className="pill-val">7 días</div>
            </div>
            <div
              className="float-pill"
              style={{ bottom: '55px', right: '30px', '--fd': '6s', '--fdel': '0.6s' } as React.CSSProperties}
            >
              <div className="pill-label">Satisfacción</div>
              <div className="pill-val">100%</div>
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Sobre VÉLORIA</p>
            <h2 className="sec-title">
              El socio digital <span className="gold-italic">que multiplica</span><br />
              tu negocio, sin que<br />
              tengas que preocuparte de nada
            </h2>
            <p className="sec-body" style={{ marginBottom: 0 }}>
              En Véloria no vendemos tecnología. Vendemos resultados. Somos la agencia de desarrollo que combina diseño premium, automatización inteligente y un servicio cercano para que tu negocio crezca sin límites.
            </p>
            <div className="about-features">
              <div className="feat-row">
                <div className="feat-icon"><Globe size={22} strokeWidth={1.5} /></div>
                <div>
                  <div className="feat-ttl">Webs que venden, no solo que existen</div>
                  <div className="feat-desc">Diseñamos cada píxel con un objetivo: convertir visitantes en clientes. Estrategia, diseño y tecnología en una sola web.</div>
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-icon"><Bot size={22} strokeWidth={1.5} /></div>
                <div>
                  <div className="feat-ttl">Tu recepcionista nunca duerme</div>
                  <div className="feat-desc">Asistentes que atienden, informan y gestionan a tus clientes a cualquier hora, con la calidez de tu marca.</div>
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-icon"><Zap size={22} strokeWidth={1.5} /></div>
                <div>
                  <div className="feat-ttl">Resultados desde el primer día</div>
                  <div className="feat-desc">Implementación ágil, soporte continuo y métricas claras. Sin promesas vacías, solo resultados medibles.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
