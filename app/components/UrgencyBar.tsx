import { Flame } from 'lucide-react'

export default function UrgencyBar() {
  return (
    <div id="urgency-bar">
      <div className="urgency-inner">
        <span className="urgency-fire"><Flame size={15} strokeWidth={2.5} /></span>
        <span className="urgency-text">
          Solo quedan{' '}
          <strong style={{ color: 'var(--gold)' }}>3 plazas disponibles</strong>{' '}
          este mes a precio de lanzamiento
        </span>
        <span className="urgency-pill">OFERTA LIMITADA</span>
        <a
          href="#contact"
          style={{ fontSize: '12px', color: 'var(--gold-lt)', textDecoration: 'underline', fontWeight: 500 }}
        >
          Reserva la tuya →
        </a>
      </div>
    </div>
  )
}
