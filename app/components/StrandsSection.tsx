'use client'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const Strands = dynamic(() => import('./Strands'), { ssr: false })

export default function StrandsSection() {
  useEffect(() => {
    const sf = document.getElementById('strands-starfield')
    if (!sf) return
    for (let i = 0; i < 90; i++) {
      const s = document.createElement('div')
      s.className = 'star'
      const size = Math.random() > 0.75 ? 3 : 2
      s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;--d:${2 + Math.random() * 5}s;--delay:${Math.random() * 5}s;opacity:${0.1 + Math.random() * 0.5};`
      sf.appendChild(s)
    }
  }, [])

  return (
    <section id="strands-intro" style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      overflow: 'hidden',
    }}>
      <div id="strands-starfield" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', inset: 0 }}>
        <Strands
          colors={['#C9A96E', '#7DD3FC']}
          count={6}
          speed={0.65}
          amplitude={1.8}
          waviness={1.2}
          thickness={0.65}
          glow={2.2}
          taper={2.8}
          spread={1.3}
          intensity={0.55}
          saturation={1.6}
          opacity={0.9}
          scale={1.5}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '220px', pointerEvents: 'none', zIndex: 6,
        background: 'linear-gradient(to bottom, transparent, #06060E)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <span style={{
          fontFamily: 'var(--ff-d)',
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          color: '#FFFFFF',
          lineHeight: 1,
          display: 'block',
        }}>
          VÉLORIA
        </span>
      </div>
    </section>
  )
}
