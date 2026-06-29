import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de Cookies — VÉLORIA',
  description: 'Información sobre las cookies utilizadas en el sitio web de VÉLORIA DIGITAL SOLUTIONS, S.L.',
}

export default function PoliticaCookies() {
  return (
    <LegalLayout
      eyebrow="Cookies y Rastreo"
      title="Política de Cookies"
      lastUpdated="28 de junio de 2026"
    >
      <div className="legal-section">
        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web instalan en el dispositivo del usuario —ordenador, teléfono móvil o tableta— cuando este los visita. Permiten que el sitio web recuerde información sobre la visita, como el idioma de preferencia, opciones de configuración y, en general, ayudan a que la próxima visita sea más sencilla y el sitio resulte más útil para el usuario.
        </p>
        <p>
          La presente Política de Cookies se rige por el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), en relación con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Tipos de cookies que utilizamos</h2>
        <h3>2.1 Según su finalidad</h3>
        <ul>
          <li>
            <strong>Cookies técnicas o estrictamente necesarias:</strong> imprescindibles para que el sitio web funcione correctamente. Permiten al usuario navegar y utilizar las funcionalidades básicas (p. ej., mantener la sesión activa, recordar preferencias de privacidad). No requieren consentimiento previo.
          </li>
          <li>
            <strong>Cookies de preferencias o personalización:</strong> permiten recordar información que cambia el comportamiento o aspecto del sitio web (p. ej., idioma seleccionado o región). Requieren consentimiento del usuario.
          </li>
          <li>
            <strong>Cookies analíticas o de medición:</strong> recogen información de forma agregada y anónima sobre el uso del sitio web para ayudarnos a mejorar su rendimiento y contenidos. Requieren consentimiento.
          </li>
          <li>
            <strong>Cookies de marketing o publicidad comportamental:</strong> permiten mostrar publicidad personalizada en función de los intereses del usuario. Requieren consentimiento. En la actualidad, <strong>VÉLORIA no utiliza este tipo de cookies</strong>.
          </li>
        </ul>
        <h3>2.2 Según su duración</h3>
        <ul>
          <li><strong>Cookies de sesión:</strong> se eliminan automáticamente cuando el usuario cierra el navegador.</li>
          <li><strong>Cookies persistentes:</strong> permanecen almacenadas en el dispositivo durante un período determinado.</li>
        </ul>
        <h3>2.3 Según su origen</h3>
        <ul>
          <li><strong>Cookies propias:</strong> instaladas directamente por VÉLORIA.</li>
          <li><strong>Cookies de terceros:</strong> instaladas por proveedores de servicios externos (p. ej., Google Analytics).</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>3. Tabla de cookies utilizadas</h2>
        <div className="legal-cookie-table">
          <div className="lct-header">
            <span>Nombre</span>
            <span>Proveedor</span>
            <span>Finalidad</span>
            <span>Tipo</span>
            <span>Duración</span>
          </div>
          <div className="lct-row">
            <span><code>_veloria_consent</code></span>
            <span>VÉLORIA</span>
            <span>Almacena las preferencias de cookies del usuario</span>
            <span>Técnica</span>
            <span>12 meses</span>
          </div>
          <div className="lct-row">
            <span><code>_ga</code></span>
            <span>Google Analytics</span>
            <span>Distingue usuarios únicos para estadísticas de visitas</span>
            <span>Analítica</span>
            <span>2 años</span>
          </div>
          <div className="lct-row">
            <span><code>_ga_*</code></span>
            <span>Google Analytics</span>
            <span>Mantiene el estado de sesión para medición de analítica</span>
            <span>Analítica</span>
            <span>2 años</span>
          </div>
          <div className="lct-row">
            <span><code>_gid</code></span>
            <span>Google Analytics</span>
            <span>Distingue usuarios para estadísticas de 24 horas</span>
            <span>Analítica</span>
            <span>24 horas</span>
          </div>
          <div className="lct-row">
            <span><code>_gat</code></span>
            <span>Google Analytics</span>
            <span>Limita el número de solicitudes al servidor (throttling)</span>
            <span>Técnica</span>
            <span>1 minuto</span>
          </div>
        </div>
        <p style={{ marginTop: '18px' }}>
          Google Analytics se utiliza con anonimización de IP activada. Los datos recopilados son transferidos y almacenados por Google en servidores ubicados en los Estados Unidos bajo las garantías de las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. ¿Cómo gestionar o desactivar las cookies?</h2>
        <p>
          Puede gestionar sus preferencias de cookies en cualquier momento a través del <strong>panel de configuración de cookies</strong> que aparece al pie de este sitio web, accesible haciendo clic en «Gestionar cookies».
        </p>
        <p>
          También puede configurar su navegador para bloquear o eliminar las cookies. A continuación le indicamos cómo hacerlo en los principales navegadores:
        </p>
        <ul>
          <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
          <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y Seguridad → Cookies y datos del sitio.</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web.</li>
          <li><strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies.</li>
        </ul>
        <p>
          Tenga en cuenta que la desactivación de determinadas cookies puede afectar a la funcionalidad del sitio web y limitar su experiencia de navegación.
        </p>
        <p>
          Para deshabilitar específicamente las cookies de Google Analytics puede instalar el complemento de inhabilitación disponible en <strong>tools.google.com/dlpage/gaoptout</strong>.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Consentimiento y revocación</h2>
        <p>
          Al acceder por primera vez a nuestro sitio web, le mostramos un banner informativo sobre el uso de cookies. Mediante dicho banner usted puede aceptar, rechazar o personalizar las cookies no esenciales.
        </p>
        <p>
          El consentimiento otorgado es revocable en cualquier momento y sin efecto retroactivo, mediante la herramienta de gestión de cookies disponible en el pie de página o bien configurando su navegador conforme a lo indicado en la sección anterior.
        </p>
        <p>
          La retirada del consentimiento no afectará a la licitud del tratamiento basado en el consentimiento previo a su retirada.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Actualizaciones de la política de cookies</h2>
        <p>
          VÉLORIA puede actualizar la presente Política de Cookies cuando lo estime necesario, ya sea por cambios en el sitio web, por la incorporación de nuevas cookies, por requerimientos legales o por modificaciones en las cookies de terceros. Le recomendamos que revise periódicamente este documento. La fecha de la última actualización figura en el encabezado.
        </p>
        <p>
          Para cualquier consulta relativa al uso de cookies, puede contactarnos en <strong>hola@veloriaonline.es</strong>.
        </p>
      </div>
    </LegalLayout>
  )
}
