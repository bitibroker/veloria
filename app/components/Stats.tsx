'use client'
import { useEffect } from 'react'

export default function Stats() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target as HTMLElement
          const target = parseInt(el.dataset.count ?? '0')
          const suf = el.dataset.suf ?? ''
          let cur = 0
          const step = Math.max(1, Math.ceil(target / 55))
          const t = setInterval(() => {
            cur = Math.min(cur + step, target)
            el.textContent = cur + suf
            if (cur >= target) clearInterval(t)
          }, 22)
          obs.unobserve(el)
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-count]').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="24" data-suf="h">0</span>
            <span className="stat-lbl">Horas al día activos</span>
          </div>
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="100" data-suf="%">0</span>
            <span className="stat-lbl">Clientes satisfechos</span>
          </div>
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="7" data-suf=" días">0</span>
            <span className="stat-lbl">Entrega garantizada</span>
          </div>
          <div className="stat-cell reveal">
            <span className="stat-num" data-count="365" data-suf="">0</span>
            <span className="stat-lbl">Días al año disponibles</span>
          </div>
        </div>
      </div>
    </div>
  )
}
