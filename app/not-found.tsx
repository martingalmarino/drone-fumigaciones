import Link from 'next/link'
import { Search, Home, MapPin, HelpCircle } from 'lucide-react'
import { CommandK } from '@/components/CommandK'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Header */}
        <div className="mb-12">
          <h1 className="text-8xl font-bold text-neutral-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            La página que estás buscando no existe o ha sido movida. 
            Usá la búsqueda global para encontrar lo que necesitás.
          </p>
        </div>

        {/* Global Search */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            Buscar en el sitio
          </h3>
          <CommandK />
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">
            Navegación Rápida
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/" className="card hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Página Principal</h4>
              <p className="text-sm text-neutral-600">
                Volvé al inicio y explorá todas las funcionalidades
              </p>
            </Link>

            <Link href="/jurisdicciones" className="card hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Jurisdicciones</h4>
              <p className="text-sm text-neutral-600">
                Encontrá información específica por provincia
              </p>
            </Link>

            <Link href="/faq" className="card hover:shadow-medium transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-neutral-900 mb-2">Preguntas Frecuentes</h4>
              <p className="text-sm text-neutral-600">
                Resolvé dudas comunes sobre grabado y trámites
              </p>
            </Link>
          </div>
        </div>

        {/* Popular Jurisdicciones */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">
            Jurisdicciones Populares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: 'caba', nombre: 'Ciudad Autónoma de Buenos Aires' },
              { slug: 'buenos-aires', nombre: 'Provincia de Buenos Aires' },
              { slug: 'cordoba', nombre: 'Provincia de Córdoba' },
              { slug: 'santa-fe', nombre: 'Provincia de Santa Fe' },
              { slug: 'mendoza', nombre: 'Provincia de Mendoza' }
            ].map((jurisdiccion) => (
              <Link
                key={jurisdiccion.slug}
                href={`/j/${jurisdiccion.slug}`}
                className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-soft transition-all"
              >
                <h4 className="font-medium text-neutral-900 mb-1">
                  {jurisdiccion.nombre}
                </h4>
                <p className="text-sm text-primary-600">
                  Ver información →
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="card bg-neutral-50">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            ¿Necesitás ayuda?
          </h3>
          <p className="text-neutral-600 mb-6">
            Si no encontraste lo que buscabas o tenés alguna sugerencia, 
            no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Contactanos
            </Link>
            <Link href="/acerca" className="btn-secondary">
              Acerca de nosotros
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
