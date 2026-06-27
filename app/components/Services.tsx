import { Globe, Bot, Sparkles, Zap } from 'lucide-react'

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="services-hd reveal">
          <p className="eyebrow">Nuestros Servicios</p>
          <h2 className="sec-title">Lo que hacemos <span className="gold-italic">mejor que nadie</span></h2>
          <p className="sec-body">Dos servicios diseñados para transformar cómo tu negocio comunica, capta y atiende clientes.</p>
        </div>
        <div className="svc-grid">
          <div className="svc-card reveal">
            <div className="svc-ico"><Globe size={28} strokeWidth={1.5} /></div>
            <h3 className="svc-ttl">Creación de Webs</h3>
            <p className="svc-desc">Páginas web de alto impacto que no solo lucen increíbles, sino que trabajan activamente para convertir cada visita en una oportunidad de negocio real.</p>
            <ul className="svc-list">
              <li>Diseño exclusivo y 100% personalizado</li>
              <li>Optimización SEO desde el primer día</li>
              <li>Ultra rápidas, seguras y responsive</li>
              <li>E-commerce y tiendas online</li>
              <li>Integración nativa con herramientas IA</li>
              <li>Panel de edición sencillo para ti</li>
            </ul>
            <span className="svc-badge"><Sparkles size={11} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />Precios que te sorprenderán</span>
          </div>
          <div className="svc-card reveal">
            <div className="svc-ico"><Bot size={28} strokeWidth={1.5} /></div>
            <h3 className="svc-ttl">Recepcionistas Virtuales 24h</h3>
            <p className="svc-desc">Nunca pierdas una consulta, una venta o una oportunidad por no estar disponible. Nuestros asistentes atienden con naturalidad y con la voz de tu marca.</p>
            <ul className="svc-list">
              <li>Activos 24 horas, 7 días a la semana</li>
              <li>Respuestas naturales y humanizadas</li>
              <li>Integración en web, WhatsApp y más</li>
              <li>Gestión automática de citas y reservas</li>
              <li>Entrenado con la personalidad de tu marca</li>
              <li>Panel de control y métricas en tiempo real</li>
            </ul>
            <span className="svc-badge"><Zap size={11} strokeWidth={2} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />Activo en menos de 48 horas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
