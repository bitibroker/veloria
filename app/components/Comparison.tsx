'use client'

const rows = [
  { feature: 'Entrega de web garantizada en 7 días',         us: true,  usNote: '7 días',         them: false, themNote: '4–12 semanas' },
  { feature: 'Precio fijo sin costes ocultos',               us: true,  usNote: 'Siempre',        them: false, themNote: 'Presupuesto variable' },
  { feature: 'Recepcionista virtual con IA disponible 24h',  us: true,  usNote: '365 días/año',   them: false, themNote: 'No disponible' },
  { feature: 'Gestor dedicado desde el día 1',               us: true,  usNote: 'Personal propio', them: false, themNote: 'Rotación constante' },
  { feature: 'Diseño premium a medida',                      us: true,  usNote: 'Siempre',        them: false, themNote: 'Plantillas genéricas' },
  { feature: 'Soporte postventa incluido',                   us: true,  usNote: 'Continuo',       them: false, themNote: 'De pago o inexistente' },
  { feature: 'Revisiones ilimitadas',                        us: true,  usNote: 'Incluidas',      them: false, themNote: 'Coste adicional' },
  { feature: 'Resultados medibles con métricas reales',      us: true,  usNote: 'Siempre',        them: false, themNote: 'Sin garantías' },
  { feature: 'Tecnología de última generación',              us: true,  usNote: 'Stack moderno',  them: false, themNote: 'Soluciones obsoletas' },
]

export default function Comparison() {
  return (
    <section id="comparison">
      <div className="container">
        <div className="cmp-hd reveal">
          <p className="eyebrow">Por qué elegirnos</p>
          <h2 className="sec-title">
            Véloria vs <span className="gold-italic">el resto</span>
          </h2>
          <p className="sec-body cmp-sub">
            No todas las agencias son iguales. Comprueba tú mismo la diferencia.
          </p>
        </div>

        <div className="cmp-wrap reveal">
          <div className="cmp-table">

            {/* Header */}
            <div className="cmp-row cmp-header">
              <div className="cmp-col-feat"></div>
              <div className="cmp-col-us">
                <span className="cmp-logo-mark">V</span>
                <span className="cmp-brand">VÉLORIA</span>
              </div>
              <div className="cmp-col-them">Otras agencias</div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div key={i} className={`cmp-row${i % 2 === 0 ? ' cmp-row-alt' : ''}`}>
                <div className="cmp-col-feat">{row.feature}</div>
                <div className="cmp-col-us">
                  <span className="cmp-check">✓</span>
                  <span className="cmp-note">{row.usNote}</span>
                </div>
                <div className="cmp-col-them">
                  <span className="cmp-cross">✗</span>
                  <span className="cmp-note cmp-note-dim">{row.themNote}</span>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="cmp-cta reveal">
          <a href="#contact" className="btn-gold">Empieza con Véloria hoy</a>
          <p className="cmp-cta-note">Sin compromiso · Respuesta en menos de 24h</p>
        </div>
      </div>
    </section>
  )
}
