import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { getJurisdicciones } from '@/lib/jurisdicciones'
import { ContactoForm } from './ContactoForm'

export default async function ContactoPage() {
  const jurisdicciones = await getJurisdicciones()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Contacto
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ¿Tenés dudas sobre grabado de autopartes, RPA/RPM o cédulas? 
            Nuestro equipo está listo para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactoForm jurisdicciones={jurisdicciones} />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">

            {/* Quick Links */}
            <div className="card bg-neutral-50">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Enlaces Útiles
              </h3>
              <div className="space-y-3">
                <a href="/faq" className="block text-primary-600 hover:text-primary-700 transition-colors">
                  → Preguntas Frecuentes
                </a>
                <a href="/jurisdicciones" className="block text-primary-600 hover:text-primary-700 transition-colors">
                  → Ver todas las jurisdicciones
                </a>
                <a href="/mapa" className="block text-primary-600 hover:text-primary-700 transition-colors">
                  → Mapa de centros de servicio
                </a>
                <a href="/acerca" className="block text-primary-600 hover:text-primary-700 transition-colors">
                  → Acerca de nosotros
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="card bg-primary-50 border-primary-200">
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Tiempo de Respuesta
              </h3>
              <div className="space-y-2 text-sm text-neutral-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Consultas generales: 24-48 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Consultas técnicas: 48-72 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Emergencias: Respuesta inmediata por teléfono</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
