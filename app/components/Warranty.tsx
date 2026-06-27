import { Clock, ShieldCheck, Rocket, Headphones } from 'lucide-react'

const guarantees = [
  {
    icon: Clock,
    stat: '24h',
    title: 'Siempre activo',
    desc: 'Tu negocio atiende clientes a cualquier hora, sin parar ni un día al año.',
    color: '#C9A96E',
  },
  {
    icon: ShieldCheck,
    stat: '100%',
    title: 'Satisfacción garantizada',
    desc: 'Si no quedas satisfecho, trabajamos sin coste adicional hasta que lo estés.',
    color: '#7DD3FC',
  },
  {
    icon: Rocket,
    stat: '7 días',
    title: 'Entrega o no pagas',
    desc: 'Tu web lista y funcionando en 7 días. Si no cumplimos, el proyecto es gratis.',
    color: '#C9A96E',
  },
  {
    icon: Headphones,
    stat: '365',
    title: 'Soporte sin fin',
    desc: 'Acompañamiento real, continuo y cercano todos los días del año.',
    color: '#7DD3FC',
  },
]

export default function Warranty() {
  return (
    <section id="warranty">
      <div className="warranty-bg" />
      <div className="container">
        <div className="warranty-hd reveal">
          <p className="eyebrow">Garantías de servicio</p>
          <h2 className="sec-title">
            Tu inversión,{' '}
            <span className="gold-italic">100% protegida</span>
          </h2>
          <p className="sec-body warranty-sub">
            No hacemos promesas vacías. Cada garantía está firmada con nuestro nombre.
          </p>
        </div>

        <div className="warranty-grid">
          {guarantees.map((g, i) => {
            const Icon = g.icon
            const isBlue = g.color === '#7DD3FC'
            return (
              <div className={`wcard reveal${isBlue ? ' wcard-blue' : ''}`} key={i}>
                <div className="wcard-glow" />
                <div className="wcard-icon-wrap">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="wcard-stat">{g.stat}</div>
                <div className="wcard-title">{g.title}</div>
                <p className="wcard-desc">{g.desc}</p>
                <div className="wcard-badge">Garantizado</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
