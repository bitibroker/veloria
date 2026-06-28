'use client'
import { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const cards = [
  {
    id: 'disponibilidad',
    title: 'Disponibilidad 24/7',
    description: 'Tu negocio nunca cierra. Atendemos a tus clientes a cualquier hora, incluso cuando duermes.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1080&q=80&fit=crop',
  },
  {
    id: 'rapidez',
    title: 'Implementación Rápida',
    description: 'De la idea a la realidad en tiempo récord. Webs en 7 días, asistentes activos en 48 horas.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1080&q=80&fit=crop',
  },
  {
    id: 'calidad',
    title: 'Calidad Premium',
    description: 'Cada proyecto nace con los más altos estándares de diseño, tecnología y atención al detalle.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1080&q=80&fit=crop',
  },
  {
    id: 'precio',
    title: 'Precio Accesible',
    description: 'Tecnología de élite a precios que te sorprenderán. Sin sacrificar ni un milímetro de calidad.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80&fit=crop',
  },
  {
    id: 'resultados',
    title: 'Resultados Medibles',
    description: 'Métricas claras para que veas exactamente el impacto en tu negocio.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080&q=80&fit=crop',
  },
  {
    id: 'personalizacion',
    title: 'Personalización Total',
    description: 'Nada de plantillas genéricas. Cada proyecto se adapta perfectamente a tu negocio y tu marca.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80&fit=crop',
  },
  {
    id: 'seguridad',
    title: 'Seguridad y Confianza',
    description: 'Los más altos estándares de seguridad y transparencia en cada paso del proceso.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1080&q=80&fit=crop',
  },
  {
    id: 'soporte',
    title: 'Soporte Continuo',
    description: 'No te dejamos solo tras el lanzamiento. Estamos aquí para acompañarte en el largo plazo.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&q=80&fit=crop',
  },
  {
    id: 'global',
    title: 'Alcance Global',
    description: 'Soluciones preparadas para escalar. Tu negocio puede atender clientes en cualquier lugar del mundo.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1080&q=80&fit=crop',
  },
  {
    id: 'tecnologia',
    title: 'Tecnología de Vanguardia',
    description: 'Utilizamos las herramientas de desarrollo más avanzadas disponibles en el mercado.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1080&q=80&fit=crop',
  },
]

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    loop: false,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [current, setCurrent] = useState(0)

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
    <section id="advantages" style={{ padding: '48px 0' }}>
      {/* Header */}
      <div className="container">
        <div className="adv-hd reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <p className="eyebrow">Por qué VÉLORIA</p>
            <h2 className="sec-title" style={{ marginBottom: '12px' }}>
              Las ventajas de trabajar <span className="gold-italic">con nosotros</span>
            </h2>
            <p className="sec-body" style={{ maxWidth: '480px' }}>Cada detalle de Véloria está pensado para darte más con menos esfuerzo.</p>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="gal-arrow"
              aria-label="Anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="gal-arrow"
              aria-label="Siguiente"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div ref={emblaRef} style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '20px', paddingLeft: 'max(36px, calc(50vw - 590px))', paddingRight: '36px' }}>
          {cards.map((card) => (
            <div
              key={card.id}
              style={{ flex: '0 0 320px', minWidth: 0 }}
            >
              <div className="gal-card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="gal-card-img"
                />
                <div className="gal-card-overlay" />
                <div className="gal-card-body">
                  <h4 className="gal-card-title">{card.title}</h4>
                  <p className="gal-card-desc">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`gal-dot${i === current ? ' gal-dot-active' : ''}`}
            aria-label={`Ir a ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
