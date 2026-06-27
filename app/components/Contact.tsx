'use client'
import { useRef, useState } from 'react'

export default function Contact() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const msgRef = useRef<HTMLTextAreaElement>(null)
  const [btnText, setBtnText] = useState('Solicitar presupuesto gratuito →')
  const [btnStyle, setBtnStyle] = useState<React.CSSProperties>({})
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    const name = nameRef.current?.value.trim() ?? ''
    const email = emailRef.current?.value.trim() ?? ''
    const msg = msgRef.current?.value.trim() ?? ''
    if (!name || !email || !msg) {
      setBtnText('Rellena los campos obligatorios')
      setBtnStyle({ background: '#6B2F2F', color: '#fff' })
      setTimeout(() => {
        setBtnText('Solicitar presupuesto gratuito →')
        setBtnStyle({})
      }, 2200)
      return
    }
    setBtnText('Enviando...')
    setBtnStyle({ opacity: 0.65 })
    setTimeout(() => {
      setBtnText('Mensaje enviado - Te contactamos muy pronto')
      setBtnStyle({})
      setSent(true)
    }, 1400)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="reveal">
            <div className="contact-urgency-pill">
              <span className="contact-urgency-dot"></span>
              Solo 3 plazas disponibles este mes
            </div>
            <p className="eyebrow">Contacto</p>
            <h2 className="sec-title">Hablemos de <span className="gold-italic">tu proyecto</span></h2>
            <p className="sec-body">Cuéntanos qué necesitas y te preparamos una propuesta sin compromiso. Sin presiones, sin letra pequeña.</p>
            <a href="mailto:hola@veloriaonline.es" className="contact-email-link">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <rect x="0.9" y="0.9" width="16.2" height="12.2" rx="1.8" stroke="#C9A96E" strokeWidth="1.4"/>
                <path d="M1 2.5L9 8.5L17 2.5" stroke="#C9A96E" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              hola@veloriaonline.es
            </a>
            <div className="promises">
              <div className="promise"><div className="p-dot"></div>Respuesta en menos de 24 horas</div>
              <div className="promise"><div className="p-dot"></div>Presupuesto sin coste ni compromiso</div>
              <div className="promise"><div className="p-dot"></div>Asesoría personalizada y honesta</div>
              <div className="promise"><div className="p-dot"></div>Sin letra pequeña ni sorpresas</div>
            </div>
          </div>
          <div className="cform reveal">
            <div className="fg">
              <label className="flabel" htmlFor="f-name">Nombre</label>
              <input ref={nameRef} type="text" className="finput" id="f-name" placeholder="Tu nombre completo" />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="f-email">Email</label>
              <input ref={emailRef} type="email" className="finput" id="f-email" placeholder="tu@email.com" />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="f-company">
                Empresa{' '}
                <span style={{ opacity: 0.5, fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>
                  (opcional)
                </span>
              </label>
              <input type="text" className="finput" id="f-company" placeholder="Nombre de tu empresa" />
            </div>
            <div className="fg">
              <label className="flabel" htmlFor="f-msg">Mensaje</label>
              <textarea ref={msgRef} className="ftextarea" id="f-msg" placeholder="Cuéntanos qué necesitas para tu negocio..."></textarea>
            </div>
            <button
              className={`fsubmit${sent ? ' sent' : ''}`}
              onClick={handleSubmit}
              style={btnStyle}
            >
              {btnText}
            </button>
            <p className="form-note">⏳ Solo quedan 3 plazas disponibles a precio de lanzamiento este mes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
