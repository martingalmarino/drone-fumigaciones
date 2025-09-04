import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Grabado Autopartes Argentina',
  description: 'Política de privacidad del sitio web de grabado de autopartes Argentina. Información sobre cómo recopilamos, utilizamos y protegemos sus datos.',
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://www.grabadoautopartes.com.ar/privacidad',
  },
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-neutral-600">
            Última actualización: {new Date().toLocaleDateString('es-AR')}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-soft border border-neutral-200 p-8">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">1. Información General</h2>
              <p className="text-neutral-700 mb-4">
                Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información 
                personal cuando utiliza nuestro sitio web. Al utilizar este sitio, usted acepta las prácticas 
                descritas en esta política.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">2. Información que Recopilamos</h2>
              <h3 className="text-xl font-medium text-neutral-900 mb-3">2.1 Información de Navegación</h3>
              <p className="text-neutral-700 mb-4">
                Recopilamos automáticamente cierta información cuando visita nuestro sitio web:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador y versión</li>
                <li>Sistema operativo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Fecha y hora de acceso</li>
                <li>Sitio web de referencia</li>
              </ul>

              <h3 className="text-xl font-medium text-neutral-900 mb-3">2.2 Cookies y Tecnologías Similares</h3>
              <p className="text-neutral-700 mb-4">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación y 
                analizar el uso del sitio web. Las cookies son pequeños archivos de texto que se almacenan 
                en su dispositivo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">3. Cómo Utilizamos su Información</h2>
              <p className="text-neutral-700 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-2">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Analizar el uso del sitio web</li>
                <li>Personalizar el contenido y la experiencia del usuario</li>
                <li>Detectar y prevenir fraudes</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">4. Compartir Información</h2>
              <p className="text-neutral-700 mb-4">
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en 
                las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-2">
                <li>Con su consentimiento explícito</li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Con proveedores de servicios que nos ayudan a operar el sitio</li>
                <li>En caso de fusión, adquisición o venta de activos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">5. Google AdSense</h2>
              <p className="text-neutral-700 mb-4">
                Este sitio utiliza Google AdSense para mostrar anuncios. Google puede utilizar cookies 
                para personalizar los anuncios según sus intereses. Puede optar por no participar en 
                la personalización de anuncios visitando las configuraciones de anuncios de Google.
              </p>
              <p className="text-neutral-700 mb-4">
                Para más información sobre cómo Google utiliza los datos, consulte la 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                   className="text-primary-600 hover:text-primary-700 underline">
                  Política de Privacidad de Google
                </a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">6. Seguridad de los Datos</h2>
              <p className="text-neutral-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">7. Retención de Datos</h2>
              <p className="text-neutral-700 mb-4">
                Conservamos su información personal solo durante el tiempo necesario para cumplir con 
                los propósitos descritos en esta política, a menos que la ley requiera un período de 
                retención más largo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">8. Sus Derechos</h2>
              <p className="text-neutral-700 mb-4">
                Bajo la Ley de Protección de Datos Personales de Argentina, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos o incompletos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">9. Menores de Edad</h2>
              <p className="text-neutral-700 mb-4">
                Nuestro sitio web no está dirigido a menores de 13 años. No recopilamos conscientemente 
                información personal de menores de 13 años. Si descubrimos que hemos recopilado información 
                de un menor, la eliminaremos inmediatamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">10. Cambios a esta Política</h2>
              <p className="text-neutral-700 mb-4">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre 
                cambios significativos publicando la nueva política en esta página con una fecha de 
                actualización revisada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">11. Contacto</h2>
              <p className="text-neutral-700 mb-4">
                Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información 
                personal, puede contactarnos a través de nuestra sección de preguntas frecuentes.
              </p>
            </section>

            <div className="border-t border-neutral-200 pt-6 mt-8">
              <p className="text-sm text-neutral-500 text-center">
                Esta Política de Privacidad es efectiva a partir de la fecha de última actualización 
                y se aplica a toda la información recopilada por este sitio web.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
