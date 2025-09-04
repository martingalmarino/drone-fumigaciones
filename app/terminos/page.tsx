export default function TerminosPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-lg text-neutral-600">
            Última actualización: {new Date().toLocaleDateString('es-AR')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-soft border border-neutral-200 p-8">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-neutral-700 mb-4">
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso. 
                Si no está de acuerdo con alguna parte de estos términos, no debe utilizar este sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Descripción del Servicio</h2>
              <p className="text-neutral-700 mb-4">
                Este sitio web proporciona información general sobre grabado de autopartes, RPA/RPM y cédulas digitales 
                en Argentina. La información presentada es de carácter informativo únicamente y no constituye asesoramiento legal, 
                técnico o profesional.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Uso de la Información</h2>
              <p className="text-neutral-700 mb-4">
                La información proporcionada en este sitio es para uso informativo general. Los usuarios son responsables de:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-2">
                <li>Verificar la información con las autoridades competentes</li>
                <li>Consultar con profesionales calificados cuando sea necesario</li>
                <li>Utilizar la información de manera responsable</li>
                <li>No depender únicamente de la información de este sitio para decisiones importantes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Limitación de Responsabilidad</h2>
              <p className="text-neutral-700 mb-4">
                Este sitio web y su contenido se proporcionan "tal como están" sin garantías de ningún tipo. 
                No nos hacemos responsables por:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-2">
                <li>Errores u omisiones en la información</li>
                <li>Cambios en la normativa que afecten la información publicada</li>
                <li>Daños directos o indirectos derivados del uso de la información</li>
                <li>Decisiones tomadas basándose en la información del sitio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Propiedad Intelectual</h2>
              <p className="text-neutral-700 mb-4">
                Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes y software, 
                es propiedad de los respectivos propietarios y está protegido por las leyes de derechos de autor.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Enlaces a Terceros</h2>
              <p className="text-neutral-700 mb-4">
                Este sitio puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido 
                de estos sitios y no nos responsabilizamos por su contenido o políticas de privacidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Modificaciones</h2>
              <p className="text-neutral-700 mb-4">
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Ley Aplicable</h2>
              <p className="text-neutral-700 mb-4">
                Estos términos y condiciones se rigen por las leyes de la República Argentina. 
                Cualquier disputa será resuelta en los tribunales competentes de la Ciudad Autónoma de Buenos Aires.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Contacto</h2>
              <p className="text-neutral-700 mb-4">
                Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de 
                nuestra sección de preguntas frecuentes.
              </p>
            </section>

            <div className="border-t border-neutral-200 pt-6 mt-8">
              <p className="text-sm text-neutral-500 text-center">
                Al utilizar este sitio web, usted reconoce haber leído, entendido y aceptado estos términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
