import Link from 'next/link'
import { Search, MapPin, FileText, Calendar, CheckCircle } from 'lucide-react'
import { JurisdictionCard } from '@/components/JurisdictionCard'
import { useJurisdicciones } from '@/lib/useJurisdicciones'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Grabado de Autopartes
            <span className="block text-primary-600">Argentina</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            Información oficial sobre grabado de autopartes, RPA/RPM y cédulas digitales 
            por jurisdicción. Encontrá requisitos, costos y turnos en un solo lugar.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={24} />
              <input
                type="text"
                placeholder="Buscar por jurisdicción..."
                className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl shadow-soft focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/jurisdicciones" className="btn-primary">
              Ver todas las jurisdicciones
            </Link>
            <Link href="/mapa" className="btn-secondary">
              <MapPin size={20} className="mr-2" />
              Mapa de centros
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Jurisdicciones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Jurisdicciones Populares
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Las jurisdicciones más consultadas con información actualizada sobre grabado, 
              RPA/RPM y cédulas digitales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <JurisdictionCard 
              jurisdiccion={{
                slug: 'caba',
                nombre: 'Ciudad Autónoma de Buenos Aires',
                estadoGrabado: 'obligatorio',
                fuentes: [{ nombre: 'Gobierno de la Ciudad', url: '', fecha: '2024-01-15' }],
                grabado: { turneroUrl: 'https://example.com', requisitos: [], costo: '$15,000', exenciones: [], faqs: [] },
                cedulas: { tipos: [], faqs: [] },
                centros: [{ id: '1', nombre: 'Centro Norte', lat: 0, lng: 0, servicios: [], horarios: '', telefono: '', direccion: '' }]
              }}
            />
            <JurisdictionCard 
              jurisdiccion={{
                slug: 'buenos-aires',
                nombre: 'Provincia de Buenos Aires',
                estadoGrabado: 'obligatorio',
                fuentes: [{ nombre: 'Gobierno de la Provincia', url: '', fecha: '2024-01-15' }],
                grabado: { turneroUrl: 'https://example.com', requisitos: [], costo: '$12,000', exenciones: [], faqs: [] },
                cedulas: { tipos: [], faqs: [] },
                centros: [{ id: '1', nombre: 'Centro La Plata', lat: 0, lng: 0, servicios: [], horarios: '', telefono: '', direccion: '' }]
              }}
            />
            <JurisdictionCard 
              jurisdiccion={{
                slug: 'cordoba',
                nombre: 'Provincia de Córdoba',
                estadoGrabado: 'obligatorio',
                fuentes: [{ nombre: 'Gobierno de Córdoba', url: '', fecha: '2024-01-15' }],
                grabado: { turneroUrl: 'https://example.com', requisitos: [], costo: '$10,000', exenciones: [], faqs: [] },
                cedulas: { tipos: [], faqs: [] },
                centros: [{ id: '1', nombre: 'Centro Capital', lat: 0, lng: 0, servicios: [], horarios: '', telefono: '', direccion: '' }]
              }}
            />
          </div>

          <div className="text-center mt-8">
            <Link href="/jurisdicciones" className="btn-secondary">
              Ver todas las jurisdicciones
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Encontrá la información que necesitás en solo 3 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">1. Buscá tu jurisdicción</h3>
              <p className="text-neutral-600">
                Encontrá información específica para tu provincia o ciudad
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">2. Revisá requisitos</h3>
              <p className="text-neutral-600">
                Conocé qué documentos necesitás y cuánto cuesta
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">3. Sacá tu turno</h3>
              <p className="text-neutral-600">
                Accedé directamente al turnero oficial de tu jurisdicción
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            ¿Necesitás ayuda personalizada?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Nuestro equipo está listo para ayudarte con cualquier consulta sobre 
            grabado de autopartes, RPA/RPM o cédulas digitales.
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
      </section>
    </div>
  )
}
