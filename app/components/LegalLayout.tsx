import Nav from './Nav'
import Footer from './Footer'

interface Props {
  title: string
  eyebrow: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, eyebrow, lastUpdated, children }: Props) {
  return (
    <>
      <Nav />
      <main className="legal-main">
        <div className="legal-hero">
          <div className="container">
            <a href="/" className="legal-back">← Volver al inicio</a>
            <p className="eyebrow" style={{ marginTop: '28px' }}>{eyebrow}</p>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-updated">Última actualización: {lastUpdated}</p>
          </div>
        </div>
        <div className="legal-body">
          <div className="container legal-container">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
