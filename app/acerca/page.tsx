import { Info, Shield, Users, Globe, FileText, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function AcercaPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Acerca de Nosotros
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Conocé más sobre nuestro proyecto y cómo trabajamos para brindarte 
            la mejor información sobre grabado de autopartes en Argentina.
          </p>
        </div>

        {/* Mission */}
        <section className="card mb-8">
          <div className="flex items-start space-x-4">
            <Info className="h-8 w-8 text-primary-600 mt-1" />
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-neutral-700 mb-4">
                Facilitar el acceso a información clara, actualizada y confiable sobre 
                grabado de autopartes, RPA/RPM y cédulas digitales en todas las 
                jurisdicciones de Argentina.
              </p>
              <p className="text-neutral-700">
                Creemos que la información debe ser accesible para todos, sin importar 
                dónde vivas o qué tipo de vehículo tengas.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            ¿Qué Hacemos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Recopilamos Información</h3>
                <p className="text-sm text-neutral-600">
                  Agregamos información oficial de todas las jurisdicciones sobre 
                  requisitos, costos y procedimientos.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Organizamos y Presentamos</h3>
                <p className="text-sm text-neutral-600">
                  Estructuramos la información de manera clara y fácil de navegar 
                  para que encuentres lo que necesitás rápidamente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Conectamos Usuarios</h3>
                <p className="text-sm text-neutral-600">
                  Facilitamos el contacto directo con centros de servicio y 
                  autoridades oficiales de cada jurisdicción.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Mantenemos Actualizado</h3>
                <p className="text-sm text-neutral-600">
                  Revisamos y actualizamos regularmente la información para 
                  asegurar que esté al día con las normativas vigentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information Sources */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Fuentes de Información
          </h2>
          <div className="space-y-4">
            <p className="text-neutral-700">
              La información presentada en este sitio proviene de fuentes oficiales 
              como:
            </p>
            <ul className="list-disc list-inside space-y-2 text-neutral-700 ml-4">
              <li>Sitios web oficiales de gobiernos provinciales</li>
              <li>Registros de propiedad automotor</li>
              <li>Ministerios de transporte provinciales</li>
              <li>Municipalidades y gobiernos locales</li>
              <li>Documentación oficial y normativas vigentes</li>
            </ul>
            <p className="text-neutral-600 text-sm">
              <strong>Última actualización:</strong> {currentYear}
            </p>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section className="card bg-yellow-50 border-yellow-200 mb-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-8 w-8 text-yellow-600 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                Descargo de Responsabilidad Importante
              </h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  <strong>Este sitio web NO es oficial</strong> y no está afiliado 
                  a ningún organismo gubernamental de Argentina.
                </p>
                <p>
                  La información proporcionada es solo para fines informativos y 
                  debe verificarse siempre con las fuentes oficiales correspondientes 
                  antes de realizar cualquier trámite.
                </p>
                <p>
                  No nos hacemos responsables por errores, omisiones o cambios en 
                  la normativa que puedan afectar la información presentada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="card mb-8">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Limitaciones del Servicio
          </h2>
          <div className="space-y-4 text-neutral-700">
            <p>
              Es importante que sepas que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No realizamos trámites en tu nombre</li>
              <li>No emitimos certificados ni documentación oficial</li>
              <li>No podemos garantizar la disponibilidad de turnos</li>
              <li>Los costos pueden variar sin previo aviso</li>
              <li>Los requisitos pueden cambiar según la jurisdicción</li>
            </ul>
          </div>
        </section>

        {/* Useful Links */}
        <section className="card">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
            Enlaces Útiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-neutral-900 mb-3">Gobiernos Provinciales</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.buenosaires.gob.ar/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    Gobierno de la Ciudad de Buenos Aires
                  </a>
                </li>
                <li>
                  <a href="https://www.gba.gob.ar/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    Gobierno de la Provincia de Buenos Aires
                  </a>
                </li>
                <li>
                  <a href="https://www.cba.gov.ar/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    Gobierno de Córdoba
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-neutral-900 mb-3">Recursos Nacionales</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://www.argentina.gob.ar/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    Gobierno de Argentina
                  </a>
                </li>
                <li>
                  <a href="https://www.argentina.gob.ar/interior/cedula-digital" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    Cédula Digital
                  </a>
                </li>
                <li>
                  <a href="https://www.argentina.gob.ar/justicia/derechos-familia/dni" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                    DNI y Documentación
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            ¿Tenés más preguntas?
          </h3>
          <p className="text-neutral-600 mb-6">
            Si necesitás información adicional o tenés sugerencias para mejorar 
            nuestro sitio, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Contactanos
            </Link>
            <Link href="/faq" className="btn-secondary">
              Ver preguntas frecuentes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
