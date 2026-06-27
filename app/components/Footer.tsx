export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-top">
          <a href="#" className="nav-logo" style={{ textDecoration: 'none' }}>
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
              <path d="M11.5 6L18 3L24.5 6L28 13H8L11.5 6Z" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.07)" strokeLinejoin="round"/>
              <path d="M8 13L18 33L28 13" stroke="#C9A96E" strokeWidth="1.2" fill="rgba(201,169,110,0.04)" strokeLinejoin="round"/>
              <line x1="8" y1="13" x2="28" y2="13" stroke="#C9A96E" strokeWidth="0.8"/>
              <circle cx="18" cy="13" r="1.5" fill="#C9A96E" opacity="0.9"/>
            </svg>
            <span className="logo-name" style={{ fontSize: '16px', letterSpacing: '3px' }}>VÉLORIA</span>
          </a>
          <ul className="foot-links">
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#portfolio">Proyectos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#testimonials">Clientes</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="foot-bottom">
          <span className="foot-copy">© 2025 VÉLORIA · Todos los derechos reservados</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic', fontFamily: 'var(--ff-d)' }}>
            Tú te centras en crecer. Nosotros hacemos el resto.
          </span>
          <span className="foot-made">Hecho con IA en España 🇪🇸</span>
        </div>
      </div>
    </footer>
  )
}
