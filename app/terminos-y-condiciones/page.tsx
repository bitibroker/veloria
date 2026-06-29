import type { Metadata } from 'next'
import LegalLayout from '../components/LegalLayout'

export const metadata: Metadata = {
  title: 'Términos y Condiciones — VÉLORIA',
  description: 'Condiciones generales de contratación de los servicios de VÉLORIA DIGITAL SOLUTIONS, S.L.',
}

export default function TerminosCondiciones() {
  return (
    <LegalLayout
      eyebrow="Contratación de Servicios"
      title="Términos y Condiciones"
      lastUpdated="28 de junio de 2026"
    >
      <div className="legal-info-box">
        <span className="legal-info-label">Prestador del servicio</span>
        <p><strong>Denominación social:</strong> VÉLORIA DIGITAL SOLUTIONS, S.L.</p>
        <p><strong>CIF:</strong> B-95847261</p>
        <p><strong>Dirección:</strong> Calle Ercilla, 22, 3.º Izquierda, 48011 Bilbao, Bizkaia, España</p>
        <p><strong>Contacto:</strong> hola@veloriaonline.es · 688 712 110</p>
      </div>

      <div className="legal-section">
        <h2>1. Objeto y ámbito de aplicación</h2>
        <p>
          Las presentes Condiciones Generales de Contratación (en adelante, «Condiciones») regulan la relación contractual entre VÉLORIA DIGITAL SOLUTIONS, S.L. (en adelante, «VÉLORIA») y cualquier persona física o jurídica (en adelante, «el Cliente») que contrate alguno de los servicios ofrecidos por VÉLORIA, incluyendo, sin carácter limitativo:
        </p>
        <ul>
          <li>Diseño y desarrollo de sitios web y aplicaciones web.</li>
          <li>Implementación de asistentes virtuales y soluciones de inteligencia artificial conversacional.</li>
          <li>Mantenimiento, soporte técnico y actualización de sistemas.</li>
          <li>Consultoría digital y servicios complementarios.</li>
        </ul>
        <p>
          La aceptación de un presupuesto o propuesta comercial emitida por VÉLORIA implica la aceptación plena e incondicional de las presentes Condiciones, que prevalecerán sobre cualquier otra condición del Cliente salvo pacto escrito en contrario.
        </p>
      </div>

      <div className="legal-section">
        <h2>2. Proceso de contratación</h2>
        <h3>2.1 Propuesta y presupuesto</h3>
        <p>
          Todo proyecto se inicia con la presentación de una propuesta o presupuesto detallado por parte de VÉLORIA, en el que se especificarán el alcance de los trabajos, los plazos de entrega estimados, el precio y las condiciones particulares aplicables.
        </p>
        <h3>2.2 Formalización del contrato</h3>
        <p>
          El contrato quedará formalizado mediante la aceptación expresa del presupuesto por el Cliente, bien por correo electrónico, bien mediante la firma del documento contractual correspondiente. A partir de dicho momento serán de aplicación las presentes Condiciones.
        </p>
        <h3>2.3 Información facilitada por el Cliente</h3>
        <p>
          El Cliente se compromete a facilitar a VÉLORIA, en tiempo y forma, toda la información, materiales, accesos y recursos necesarios para el correcto desarrollo del proyecto (textos, imágenes, accesos a plataformas, credenciales, etc.). Los retrasos derivados de la falta de entrega de dicha información no serán imputables a VÉLORIA y podrán dar lugar a una revisión de los plazos acordados.
        </p>
      </div>

      <div className="legal-section">
        <h2>3. Precios, facturación y forma de pago</h2>
        <h3>3.1 Precios</h3>
        <p>
          Los precios indicados en los presupuestos se expresan en euros (€) y se entienden sin IVA salvo indicación expresa en contrario. Al importe neto se añadirá el Impuesto sobre el Valor Añadido (IVA) vigente en el momento de la facturación.
        </p>
        <h3>3.2 Estructura de pagos</h3>
        <p>
          Con carácter general, el pago de los proyectos de desarrollo se estructurará de la siguiente forma, salvo pacto escrito en contrario:
        </p>
        <ul>
          <li><strong>50 %</strong> del importe total a la firma del contrato o aceptación del presupuesto.</li>
          <li><strong>50 %</strong> restante en el momento de la entrega final y aprobación del proyecto por el Cliente.</li>
        </ul>
        <p>
          Para los servicios de mantenimiento, soporte o suscripción recurrente, la facturación se realizará de forma mensual o según la periodicidad acordada.
        </p>
        <h3>3.3 Forma de pago</h3>
        <p>
          El pago se realizará mediante transferencia bancaria a la cuenta indicada en la factura, en el plazo de <strong>15 días naturales</strong> desde la fecha de emisión de la misma. El retraso en el pago devengará automáticamente, sin necesidad de requerimiento previo, intereses de demora al tipo legal establecido en la Ley 3/2004, de 29 de diciembre, por la que se establecen medidas de lucha contra la morosidad en las operaciones comerciales.
        </p>
        <h3>3.4 Costes adicionales</h3>
        <p>
          No se incluyen en el presupuesto los costes de terceros necesarios para el proyecto (dominios, hosting, licencias de software, APIs, imágenes de stock, etc.). Dichos costes serán asumidos directamente por el Cliente o facturados al costo sin margen adicional.
        </p>
      </div>

      <div className="legal-section">
        <h2>4. Plazos de entrega</h2>
        <p>
          Los plazos de entrega indicados en la propuesta comercial son estimaciones elaboradas en función de la información disponible en el momento de su elaboración. VÉLORIA se compromete a hacer sus mejores esfuerzos para cumplir los plazos acordados.
        </p>
        <p>
          Los plazos quedarán suspendidos automáticamente en los siguientes supuestos:
        </p>
        <ul>
          <li>Retraso del Cliente en la entrega de materiales, información o feedback necesario para el avance del proyecto.</li>
          <li>Modificaciones del alcance solicitadas por el Cliente una vez iniciado el proyecto.</li>
          <li>Causas de fuerza mayor o circunstancias ajenas al control razonable de VÉLORIA.</li>
        </ul>
        <p>
          En caso de que VÉLORIA prevea un retraso significativo en los plazos por causas propias, informará al Cliente con la mayor antelación posible y acordarán una nueva fecha de entrega.
        </p>
      </div>

      <div className="legal-section">
        <h2>5. Revisiones y modificaciones del alcance</h2>
        <p>
          El presupuesto incluye hasta <strong>dos rondas de revisiones</strong> sobre el diseño o los desarrollos entregados, salvo que se haya pactado otra cosa por escrito. Las revisiones adicionales o los cambios de alcance que supongan trabajo extra serán presupuestados y facturados por separado, previa comunicación al Cliente y aceptación expresa de los mismos.
        </p>
        <p>
          Se considerará cambio de alcance cualquier modificación que altere los requisitos funcionales, el diseño o la tecnología acordados inicialmente, o que implique un tiempo de desarrollo adicional estimado superior a dos horas.
        </p>
      </div>

      <div className="legal-section">
        <h2>6. Propiedad intelectual</h2>
        <h3>6.1 Cesión de derechos al Cliente</h3>
        <p>
          Una vez abonado íntegramente el precio pactado, VÉLORIA cede al Cliente los derechos de explotación sobre los desarrollos y diseños realizados específicamente para el proyecto, en los términos establecidos en el contrato particular. Esta cesión incluye los derechos de reproducción, distribución, comunicación pública y transformación para el uso al que el proyecto esté destinado.
        </p>
        <h3>6.2 Componentes de terceros y herramientas propias</h3>
        <p>
          Determinados componentes, librerías, plantillas o herramientas utilizadas en el desarrollo pueden estar sujetos a licencias de código abierto o de terceros. Estas licencias se respetarán en todo caso. VÉLORIA se reserva los derechos sobre sus herramientas, metodologías y componentes internos de uso general, que podrán ser utilizados en otros proyectos.
        </p>
        <h3>6.3 Materiales del Cliente</h3>
        <p>
          El Cliente declara ser titular o disponer de los derechos necesarios sobre los materiales, imágenes, textos y demás contenidos que aporte a VÉLORIA para el desarrollo del proyecto, eximiendo a VÉLORIA de cualquier responsabilidad derivada del uso de dichos materiales.
        </p>
        <h3>6.4 Mención en portfolio</h3>
        <p>
          Salvo instrucción expresa en contrario, VÉLORIA podrá incluir el proyecto en su portfolio de trabajos realizados como referencia comercial, indicando únicamente el nombre del Cliente y una descripción general del trabajo.
        </p>
      </div>

      <div className="legal-section">
        <h2>7. Confidencialidad</h2>
        <p>
          Ambas partes se comprometen a mantener la más estricta confidencialidad respecto a la información confidencial que reciban de la otra parte con motivo de la relación contractual, y a no divulgarla a terceros sin consentimiento previo y escrito.
        </p>
        <p>
          A los efectos de las presentes Condiciones, se considera «información confidencial» toda aquella que sea designada como tal, así como cualquier información relativa a estrategias comerciales, datos de negocio, clientes, tecnologías y procesos internos. Esta obligación se mantendrá vigente durante la relación contractual y por un período de <strong>tres años</strong> tras su conclusión.
        </p>
      </div>

      <div className="legal-section">
        <h2>8. Limitación de responsabilidad</h2>
        <p>
          La responsabilidad máxima total de VÉLORIA derivada de o relacionada con el contrato estará limitada al importe neto efectivamente cobrado al Cliente en los seis meses anteriores al hecho que dio origen a la reclamación.
        </p>
        <p>
          En ningún caso VÉLORIA será responsable por daños indirectos, pérdidas de beneficios, pérdidas de datos, pérdida de negocio u oportunidades comerciales, ni por daños derivados de la actuación de terceros o de causas ajenas al control razonable de VÉLORIA.
        </p>
        <p>
          VÉLORIA no garantiza que los proyectos entregados estén completamente libres de errores o que funcionen de manera ininterrumpida en todos los entornos y configuraciones posibles, pero se compromete a solucionar los defectos o errores que le sean notificados conforme al período de garantía establecido en el contrato particular.
        </p>
      </div>

      <div className="legal-section">
        <h2>9. Duración y resolución del contrato</h2>
        <p>
          El contrato estará vigente desde su formalización hasta la entrega y aceptación final del proyecto o, en el caso de servicios recurrentes, durante el período contratado con sus posibles renovaciones.
        </p>
        <p>
          Cualquiera de las partes podrá resolver el contrato mediante notificación escrita a la otra parte en los siguientes supuestos:
        </p>
        <ul>
          <li>Incumplimiento grave o reiterado de las obligaciones por la otra parte, que no sea subsanado en los <strong>15 días hábiles</strong> siguientes a la notificación.</li>
          <li>Situación de insolvencia, concurso de acreedores o liquidación de la otra parte.</li>
          <li>Mutuo acuerdo entre las partes.</li>
        </ul>
        <p>
          En caso de resolución anticipada por parte del Cliente sin causa imputable a VÉLORIA, el Cliente abonará los trabajos realizados hasta la fecha de resolución y una compensación equivalente al <strong>20 %</strong> del importe pendiente de facturar.
        </p>
      </div>

      <div className="legal-section">
        <h2>10. Ley aplicable y jurisdicción</h2>
        <p>
          Las presentes Condiciones Generales, así como los contratos particulares celebrados entre VÉLORIA y el Cliente, se rigen e interpretan de conformidad con la legislación española.
        </p>
        <p>
          Para la resolución de cualquier controversia o reclamación derivada de la relación contractual, las partes, con renuncia expresa a cualquier otro fuero que pudiera corresponderles, se someten a la jurisdicción y competencia de los Juzgados y Tribunales de la ciudad de <strong>Bilbao (Bizkaia)</strong>.
        </p>
        <p>
          Sin perjuicio de lo anterior, cuando el Cliente tenga la condición de consumidor o usuario en los términos del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el Texto Refundido de la Ley General para la Defensa de los Consumidores y Usuarios, serán de aplicación las normas imperativas establecidas en dicha norma.
        </p>
      </div>
    </LegalLayout>
  )
}
