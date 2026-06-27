'use client'
import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    name: 'María García',
    role: 'Directora General',
    company: 'Clínica Dental García · Madrid',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80&fit=crop&crop=face',
    metric: '+40% citas en el primer mes',
    text: 'Contraté a Véloria para mi clínica dental y el resultado superó todas mis expectativas. La web quedó impecable y el recepcionista virtual atiende a mis pacientes a cualquier hora. En 30 días aumenté un 40% las citas nuevas sin invertir en publicidad.',
  },
  {
    name: 'Carlos Martínez',
    role: 'Fundador & CEO',
    company: 'Grupo Gastronómico Rincón · Barcelona',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&q=80&fit=crop&crop=face',
    metric: 'Reservas online ×3 en 6 semanas',
    text: 'Necesitaba una web profesional para mis restaurantes y me preocupaba el coste. Véloria me dio algo premium a un precio que no esperaba. El asistente gestiona reservas 24/7 sin que yo intervenga. El retorno de inversión fue evidente desde la primera semana.',
  },
  {
    name: 'Ana López',
    role: 'Directora Académica',
    company: 'Academia Formativa López · Valencia',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80&fit=crop&crop=face',
    metric: '+65% matrículas en 3 meses',
    text: 'Mi academia tenía una web anticuada que no convertía visitas en alumnos. Véloria la transformó completamente en menos de una semana. Ahora los alumnos se matriculan directamente online y el asistente resuelve sus dudas al instante, sin carga para mi equipo.',
  },
  {
    name: 'Javier Romero',
    role: 'Socio Director',
    company: 'Romero & Asociados Abogados · Sevilla',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fit=crop&crop=face',
    metric: 'Consultas cualificadas ×2',
    text: 'En el sector legal, la imagen lo es todo. Véloria entendió a la perfección el tono y la seriedad que necesitábamos. La web transmite confianza desde el primer segundo y el asistente filtra las consultas, de modo que nuestro equipo solo atiende casos reales.',
  },
  {
    name: 'Laura Sánchez',
    role: 'CEO & Fundadora',
    company: 'LauraSkin Beauty Studio · Bilbao',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&fit=crop&crop=face',
    metric: '0 llamadas perdidas desde el lanzamiento',
    text: 'Antes perdía clientes porque no podía atender el teléfono mientras trabajaba. Con Véloria, el asistente virtual capta a cada cliente interesado, agenda la cita y envía el recordatorio. Desde el lanzamiento no he perdido ni una sola oportunidad de negocio.',
  },
  {
    name: 'Marcos Fernández',
    role: 'Director de Operaciones',
    company: 'Inmobiliaria Fernández Premium · Málaga',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&q=80&fit=crop&crop=face',
    metric: '+55% leads cualificados',
    text: 'El mercado inmobiliario es muy competitivo y necesitábamos diferenciarnos. Véloria nos entregó una web que transmite exclusividad y un asistente que cualifica los leads antes de pasárnoslos. Pasamos de consultas genéricas a cerrar visitas con compradores serios.',
  },
  {
    name: 'Isabel Torres',
    role: 'Propietaria',
    company: 'Fisio & Wellness Torres · Zaragoza',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80&fit=crop&crop=face',
    metric: 'Lista de espera en 45 días',
    text: 'No esperaba que una web pudiera cambiar tanto mi negocio. En 45 días desde el lanzamiento ya tenía lista de espera. El asistente maneja todas las consultas y citas sin que yo tenga que estar pendiente del móvil. Véloria fue la mejor inversión que he hecho.',
  },
  {
    name: 'David Ruiz',
    role: 'Fundador',
    company: 'Ruiz Tech Solutions · Madrid',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fit=crop&crop=face',
    metric: 'Tasa de conversión del 8,4%',
    text: 'Como ingeniero, tengo estándares muy altos para la tecnología. Véloria no solo cumplió, sino que superó mis expectativas técnicas y de diseño. El código es limpio, la velocidad es sobresaliente y la integración del asistente es perfecta. Resultados reales.',
  },
  {
    name: 'Sofía Navarrete',
    role: 'Psicóloga & Directora',
    company: 'Consulta Navarrete · Granada',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&q=80&fit=crop&crop=face',
    metric: '+70% nuevos pacientes en 2 meses',
    text: 'En mi consulta la confidencialidad y la confianza son fundamentales. Véloria creó una web que transmite exactamente eso y el asistente gestiona las citas con la discreción que mis pacientes merecen. En dos meses dupliqué el número de nuevos pacientes.',
  },
  {
    name: 'Roberto Gil',
    role: 'Director Comercial',
    company: 'Distribuidora Gil & Hermanos · Murcia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80&fit=crop&crop=face',
    metric: '€28.000 en pedidos el primer mes',
    text: 'Llevábamos años con una web que nos daba vergüenza enseñar. Véloria nos construyó en 7 días un catálogo online profesional con el asistente integrado. El primer mes cerramos €28.000 en pedidos que llegaron directamente a través de la web. Impresionante.',
  },
]

const slides = [testimonials.slice(0, 5), testimonials.slice(5, 10)]

function TestCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="test-card">
      <div className="test-stars">★★★★★</div>
      <div className="test-metric">{t.metric}</div>
      <div className="test-quote">&ldquo;</div>
      <p className="test-text">{t.text}</p>
      <div className="test-author">
        <img src={t.avatar} alt={t.name} className="avatar" style={{ objectFit: 'cover' }} />
        <div>
          <div className="author-name">{t.name}</div>
          <div className="author-role">{t.role}</div>
          <div className="author-company">{t.company}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [current, setCurrent] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const update = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    update()
    emblaApi.on('select', update)
    emblaApi.on('reInit', update)
    return () => { emblaApi.off('select', update); emblaApi.off('reInit', update) }
  }, [emblaApi, update])

  return (
    <section id="testimonials">
      <div className="container">
        <div className="test-hd reveal">
          <div className="test-hd-left">
            <p className="eyebrow">Testimonios</p>
            <h2 className="sec-title">
              Resultados reales de clientes <span className="gold-italic">reales</span>
            </h2>
            <p className="sec-body" style={{ maxWidth: '480px' }}>
              Más de 50 empresas en España ya confían en Véloria. Estas son sus historias.
            </p>
          </div>
          <div className="test-nav">
            <button className="gal-arrow" onClick={() => emblaApi?.scrollPrev()} disabled={!canScrollPrev} aria-label="Anterior">
              <ArrowLeft size={20} />
            </button>
            <button className="gal-arrow" onClick={() => emblaApi?.scrollNext()} disabled={!canScrollNext} aria-label="Siguiente">
              <ArrowRight size={20} />
            </button>
            <span className="test-counter">{current + 1} / {slides.length}</span>
          </div>
        </div>
      </div>

      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex' }}>
          {slides.map((group, si) => (
            <div key={si} className="test-slide">
              <div className="test-slide-grid">
                {group.map((t, i) => <TestCard key={i} t={t} />)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px' }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`gal-dot${i === current ? ' gal-dot-active' : ''}`}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
