import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Aviso Legal — VÉLORIA',
  description: 'Aviso legal e información sobre el titular del sitio web de VÉLORIA DIGITAL SOLUTIONS, S.L.',
}

export default function AvisoLegal() {
  return (
    <LegalLayout
      eyebrow="Información Legal"
      title="Aviso Legal"
      lastUpdated="28 de junio de 2026"
    >
      <div className="legal-info-box">
        <span className="legal-info-label">Datos del titular</span>
        <p><strong>Denominación social:</strong> VÉLORIA DIGITAL SOLUTIONS, S.L.</p>
        <p><strong>CIF:</strong> B-95847261</p>
        <p><strong>Domicilio social:</strong> Calle Ercilla, 22, 3.º Izquierda, 48011 Bilbao, Bizkaia, España</p>
        <p><strong>Registro Mercantil:</strong> Registro Mercantil de Bizkaia, Tomo 4821, Folio 178, Hoja BI-52430</p>
        <p><strong>Correo electrónico:</strong> legal@veloria.es</p>
        <p><strong>Teléfono:</strong> +34 944 782 340</p>
      </div>

      <div className="legal-section">
        <h2>1. Objeto y ámbito de aplicación</h2>
        <p>
          En cumplimiento de lo establecido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), VÉLORIA DIGITAL SOLUTIONS, S.L. (en adelante, «VÉLORIA» o «la Empresa») pone a disposición de los usuarios la presente información sobre el sitio web accesible en el dominio <strong>veloria.es</strong>.
        </p>
        <p>
          El acceso y uso del presente sitio web implica la aceptación plena y sin reservas de las condiciones establecidas en este Aviso Legal. Si el usuario no está de acuerdo con alguna de las condiciones aquí recogidas, deberá abstenerse de acceder y/o utilizar el sitio web.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Condiciones de uso</h2>
        <p>
          El usuario se compromete a hacer un uso adecuado y lícito del sitio web, de conformidad con la legislación aplicable, el presente Aviso Legal y las buenas costumbres y el orden público. Queda expresamente prohibido:
        </p>
        <ul>
          <li>Usar el sitio web con fines ilícitos, ilegales o contrarios a lo establecido en este Aviso Legal.</li>
          <li>Reproducir, distribuir o modificar los contenidos sin autorización expresa de VÉLORIA.</li>
          <li>Introducir o difundir en la red virus informáticos, código malicioso o cualquier otro sistema que pueda causar daños a los sistemas de VÉLORIA o de terceros.</li>
          <li>Realizar acciones que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir su normal uso por parte de los usuarios.</li>
          <li>Intentar acceder sin autorización a áreas restringidas del sitio, sus sistemas informáticos, servidores o redes.</li>
        </ul>
        <p>
          VÉLORIA se reserva el derecho a modificar, suspender o cancelar el acceso al sitio web, total o parcialmente, en cualquier momento y sin previo aviso.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Propiedad intelectual e industrial</h2>
        <p>
          Todos los contenidos del sitio web —incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente, logotipos, marcas y nombres comerciales— son titularidad de VÉLORIA o de sus licenciantes, y están protegidos por las leyes españolas e internacionales de propiedad intelectual e industrial.
        </p>
        <p>
          Queda expresamente prohibida la reproducción, distribución, transformación, comunicación pública, puesta a disposición o cualquier otra forma de explotación, parcial o total, de dichos contenidos sin la autorización previa y escrita de VÉLORIA. El incumplimiento de esta prohibición podrá dar lugar al ejercicio de las acciones legales que correspondan.
        </p>
        <p>
          El usuario podrá visualizar los contenidos y efectuar copias privadas, siempre que los elementos reproducidos no sean cedidos a terceros ni se instalen en servidores conectados a redes de comunicaciones.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Exclusión de responsabilidad</h2>
        <h3>4.1 Disponibilidad del sitio web</h3>
        <p>
          VÉLORIA no garantiza la disponibilidad y continuidad ininterrumpida del funcionamiento del sitio web. Cuando ello sea razonablemente posible, VÉLORIA advertirá previamente de las interrupciones en el funcionamiento del sitio web.
        </p>
        <h3>4.2 Contenidos de terceros</h3>
        <p>
          El sitio web puede incluir enlaces a páginas web de terceros. VÉLORIA no ejerce ningún tipo de control sobre dichas webs ni es responsable de sus contenidos, funcionamiento, política de privacidad o tratamiento de datos personales. La inclusión de un enlace no implica relación alguna entre VÉLORIA y el titular de la web enlazada.
        </p>
        <h3>4.3 Exactitud de la información</h3>
        <p>
          VÉLORIA procura que la información publicada en el sitio web sea veraz y actualizada. No obstante, no se garantiza la exactitud, completitud o actualización de la información, por lo que los contenidos son meramente informativos y no constituyen asesoramiento profesional.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Política de enlaces</h2>
        <p>
          Cualquier persona física o jurídica que desee establecer un hipervínculo hacia este sitio web deberá cumplir las siguientes condiciones:
        </p>
        <ul>
          <li>El enlace únicamente podrá vincularse a la página de inicio del sitio web, salvo autorización expresa.</li>
          <li>No se podrá reproducir el sitio web de ningún modo, incluyendo técnicas de <em>framing</em> o <em>inline linking</em>.</li>
          <li>No se realizarán manifestaciones falsas, inexactas o incorrectas sobre VÉLORIA o sus servicios.</li>
          <li>No se declarará ni se dará a entender que VÉLORIA ha autorizado el enlace o que ha supervisado o asumido los servicios o contenidos del sitio web que lo establece.</li>
        </ul>
        <p>
          VÉLORIA se reserva el derecho a solicitar la retirada de cualquier enlace que incumpla las presentes condiciones, sin necesidad de notificación previa.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Ley aplicable y jurisdicción</h2>
        <p>
          El presente Aviso Legal se rige en su totalidad por la legislación española. Las partes, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a la jurisdicción de los Juzgados y Tribunales de la ciudad de Bilbao (Bizkaia) para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web.
        </p>
        <p>
          No obstante lo anterior, cuando el usuario ostente la condición de consumidor, se aplicarán las normas imperativas previstas en la legislación española de defensa de los consumidores y usuarios.
        </p>
      </div>
    </LegalLayout>
  )
}
