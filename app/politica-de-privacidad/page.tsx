import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Política de Privacidad — VÉLORIA',
  description: 'Información sobre el tratamiento de datos personales en VÉLORIA DIGITAL SOLUTIONS, S.L. conforme al RGPD y la LOPDGDD.',
}

export default function PoliticaPrivacidad() {
  return (
    <LegalLayout
      eyebrow="Protección de Datos"
      title="Política de Privacidad"
      lastUpdated="28 de junio de 2026"
    >
      <div className="legal-info-box">
        <span className="legal-info-label">Responsable del tratamiento</span>
        <p><strong>Identidad:</strong> VÉLORIA DIGITAL SOLUTIONS, S.L.</p>
        <p><strong>CIF:</strong> B-95847261</p>
        <p><strong>Dirección:</strong> Calle Ercilla, 22, 3.º Izquierda, 48011 Bilbao, Bizkaia, España</p>
        <p><strong>Contacto:</strong> hola@veloriaonline.es</p>
        <p><strong>Teléfono:</strong> 688 712 110</p>
      </div>

      <div className="legal-section">
        <h2>1. Información general</h2>
        <p>
          VÉLORIA DIGITAL SOLUTIONS, S.L. (en adelante, «VÉLORIA») trata los datos personales de sus usuarios y clientes de conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales (RGPD), y con la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
        <p>
          La presente Política de Privacidad describe cómo recopilamos, usamos, conservamos y protegemos la información personal que nos facilita a través de nuestro sitio web o con motivo de la contratación de nuestros servicios.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Datos personales que recopilamos</h2>
        <p>VÉLORIA puede recopilar las siguientes categorías de datos personales:</p>
        <ul>
          <li><strong>Datos de contacto:</strong> nombre y apellidos, dirección de correo electrónico, número de teléfono.</li>
          <li><strong>Datos de la empresa:</strong> nombre de la empresa, sector de actividad, cargo.</li>
          <li><strong>Datos de comunicaciones:</strong> contenido de los mensajes enviados a través del formulario de contacto.</li>
          <li><strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, recogidos mediante cookies (véase nuestra Política de Cookies).</li>
          <li><strong>Datos de facturación:</strong> NIF/CIF, dirección fiscal, datos necesarios para la emisión de facturas, cuando se formaliza un contrato de servicios.</li>
        </ul>
        <p>
          No tratamos categorías especiales de datos en los términos del artículo 9 del RGPD (datos de salud, ideología, origen racial, etc.). En caso de que por alguna razón fuese necesario, solicitaríamos su consentimiento explícito previo.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Finalidades y bases jurídicas del tratamiento</h2>
        <h3>3.1 Atención de consultas y solicitudes</h3>
        <p>
          Tratamos los datos facilitados a través del formulario de contacto o por correo electrónico con la finalidad de gestionar, responder y dar seguimiento a su consulta o solicitud de información.
          <br /><strong>Base jurídica:</strong> interés legítimo del responsable (art. 6.1.f RGPD) o, en su caso, consentimiento del interesado (art. 6.1.a RGPD).
        </p>
        <h3>3.2 Prestación de servicios contratados</h3>
        <p>
          Cuando se formaliza un contrato de servicios, tratamos los datos necesarios para la ejecución del mismo, incluyendo la gestión de proyectos, comunicaciones, facturación y soporte técnico.
          <br /><strong>Base jurídica:</strong> ejecución de un contrato (art. 6.1.b RGPD).
        </p>
        <h3>3.3 Obligaciones legales</h3>
        <p>
          Tratamos determinados datos para cumplir con obligaciones fiscales, contables y mercantiles exigidas por la legislación española.
          <br /><strong>Base jurídica:</strong> cumplimiento de una obligación legal (art. 6.1.c RGPD).
        </p>
        <h3>3.4 Comunicaciones comerciales</h3>
        <p>
          Con su consentimiento previo, podemos enviarle información sobre nuestros servicios, novedades y contenidos de interés.
          <br /><strong>Base jurídica:</strong> consentimiento (art. 6.1.a RGPD). Puede revocar su consentimiento en cualquier momento sin que ello afecte a la licitud del tratamiento previo.
        </p>
        <h3>3.5 Mejora del sitio web (analítica)</h3>
        <p>
          Analizamos de forma agregada el uso del sitio web para mejorar su rendimiento, contenidos y experiencia de usuario.
          <br /><strong>Base jurídica:</strong> interés legítimo (art. 6.1.f RGPD), siempre que se use la configuración de cookies analíticas sin identificación individual.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Plazo de conservación de los datos</h2>
        <p>
          Los datos personales serán conservados durante el tiempo estrictamente necesario para la finalidad para la que fueron recogidos, y en todo caso:
        </p>
        <ul>
          <li><strong>Consultas y contacto:</strong> hasta que se resuelva la solicitud y, posteriormente, durante el plazo de prescripción de las posibles acciones legales derivadas (3 años con carácter general).</li>
          <li><strong>Datos contractuales y de facturación:</strong> durante la vigencia de la relación contractual y, una vez finalizada, durante los plazos legales aplicables (4 años en materia fiscal, 6 años en materia mercantil).</li>
          <li><strong>Comunicaciones comerciales:</strong> hasta la revocación del consentimiento.</li>
          <li><strong>Datos de navegación (cookies):</strong> según los plazos indicados en la Política de Cookies.</li>
        </ul>
      </div>

      <div className="legal-section">
        <h2>5. Destinatarios y transferencias internacionales</h2>
        <p>
          VÉLORIA no cede ni vende sus datos personales a terceros con fines propios. No obstante, sus datos podrán ser comunicados a:
        </p>
        <ul>
          <li><strong>Proveedores de servicios tecnológicos</strong> que actúan como encargados del tratamiento (hosting, correo electrónico, herramientas de gestión), con los que hemos suscrito los correspondientes contratos de encargo del tratamiento.</li>
          <li><strong>Administraciones públicas y órganos judiciales</strong>, en los casos previstos legalmente.</li>
          <li><strong>Asesores externos</strong> (asesoría fiscal, jurídica) bajo estricta obligación de confidencialidad.</li>
        </ul>
        <p>
          Algunos de nuestros proveedores tecnológicos pueden estar ubicados fuera del Espacio Económico Europeo. En tal caso, garantizamos que el tratamiento se realiza bajo mecanismos adecuados de transferencia internacional, como las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea o la existencia de una decisión de adecuación.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Derechos del interesado</h2>
        <p>
          De conformidad con la normativa aplicable, puede ejercer en cualquier momento los siguientes derechos:
        </p>
        <ul>
          <li><strong>Acceso:</strong> obtener confirmación sobre si tratamos sus datos y, en su caso, acceder a los mismos.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Supresión («derecho al olvido»):</strong> solicitar la eliminación de sus datos cuando, entre otros supuestos, ya no sean necesarios para el fin que motivó su recogida.</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos, en particular cuando se basa en interés legítimo.</li>
          <li><strong>Limitación del tratamiento:</strong> solicitar que suspendamos el tratamiento mientras se resuelve una controversia.</li>
          <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado, de uso común y lectura mecánica.</li>
          <li><strong>No ser objeto de decisiones automatizadas</strong> con efectos jurídicos significativos.</li>
        </ul>
        <p>
          Para ejercer sus derechos, diríjase por escrito a <strong>hola@veloriaonline.es</strong> o a nuestra dirección postal, adjuntando una copia de su DNI u otro documento identificativo válido. Responderemos a su solicitud en el plazo máximo de un mes, prorrogable por otros dos meses en casos de especial complejidad.
        </p>
        <p>
          Si considera que el tratamiento de sus datos vulnera la normativa aplicable, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, con sede en C/ Jorge Juan, 6, 28001 Madrid (<a href="https://www.aepd.es" style={{ color: 'var(--gold)', textDecoration: 'none' }}>www.aepd.es</a>), sin perjuicio de los recursos judiciales que pudieran corresponderle.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Seguridad de los datos</h2>
        <p>
          VÉLORIA ha implementado las medidas técnicas y organizativas adecuadas para garantizar un nivel de seguridad apropiado al riesgo de los tratamientos realizados, con arreglo al artículo 32 del RGPD. Estas medidas incluyen, entre otras, el cifrado de las comunicaciones (HTTPS/TLS), controles de acceso basados en roles, políticas de contraseñas seguras y copias de seguridad periódicas.
        </p>
        <p>
          En caso de producirse una violación de la seguridad de los datos que pueda suponer un riesgo para los derechos y libertades de los interesados, procederemos a su notificación a la AEPD en el plazo de 72 horas y, cuando sea necesario, a los propios interesados.
        </p>
      </div>

      <div className="legal-section">
        <h2>8. Modificaciones de la política de privacidad</h2>
        <p>
          VÉLORIA se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a cambios legislativos, jurisprudenciales o de práctica empresarial. Los cambios relevantes serán notificados mediante aviso en el sitio web o, cuando proceda, por correo electrónico. La fecha de la última actualización figura en el encabezado de este documento.
        </p>
      </div>
    </LegalLayout>
  )
}
