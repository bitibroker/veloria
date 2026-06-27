'use client'
import { useState } from 'react'

const items = [
  {
    q: '¿Cuánto tiempo tarda en estar lista mi web?',
    a: 'Entre 5 y 7 días laborables desde la recepción del pago y los materiales necesarios. Si no tienes materiales, también te ayudamos a crearlos sin coste adicional.',
  },
  {
    q: '¿Puedo ver el diseño antes de que esté terminado?',
    a: 'Sí. Compartimos avances y borradores durante el proceso para que puedas dar tu aprobación en cada etapa. Incluimos revisiones hasta que estés al 100% satisfecho.',
  },
  {
    q: '¿El recepcionista virtual suena como un robot?',
    a: 'No. Nuestros asistentes se entrenan específicamente con la voz, tono y personalidad de tu marca. Responden de forma completamente natural, como lo haría un miembro de tu equipo.',
  },
  {
    q: '¿Cuánto cuesta una web o el recepcionista virtual?',
    a: 'Los precios se adaptan a cada proyecto y siempre son más asequibles de lo que esperas. Solicita tu presupuesto gratuito sin compromiso y te sorprenderemos con lo que es posible.',
  },
  {
    q: '¿Qué pasa si no quedo satisfecho con el resultado?',
    a: 'No paramos hasta que estés al 100% satisfecho. Incluimos rondas de revisión en todos nuestros proyectos. Nuestro objetivo es que el resultado supere tus expectativas.',
  },
  {
    q: '¿Necesito conocimientos técnicos para gestionar mi web?',
    a: 'No. Te entregamos tu web lista para usar, con un panel de gestión sencillo e intuitivo. Incluimos formación básica para que puedas actualizarla tú mismo cuando lo necesites.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-hd reveal">
          <p className="eyebrow">Preguntas Frecuentes</p>
          <h2 className="sec-title">Todo lo que necesitas <span className="gold-italic">saber</span></h2>
          <p className="sec-body">Resolvemos tus dudas antes de que las tengas. Transparencia total, sin letra pequeña.</p>
        </div>
        <div className="faq-list reveal">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
