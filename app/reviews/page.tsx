import { Metadata } from 'next'
import Link from 'next/link'
import { Star, Filter, Search, Droplets, Zap, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AdSlot from '@/components/AdSlot'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Reviews de Drones Agrícolas | Análisis y Comparativas 2025',
  description: 'Análisis detallado de los mejores drones agrícolas: DJI Agras, XAG y más. Especificaciones, pros, contras y comparativas.',
}

const brands = [
  { slug: 'dji', name: 'DJI', count: 2 },
  { slug: 'xag', name: 'XAG', count: 1 },
  { slug: 'agco', name: 'AGCO', count: 0 },
]

const capacityRanges = [
  { min: 0, max: 25, label: 'Hasta 25L' },
  { min: 25, max: 40, label: '25-40L' },
  { min: 40, max: 100, label: '40L+' },
]

const useTypes = [
  { slug: 'liquidos', name: 'Líquidos', icon: Droplets },
  { slug: 'solidos', name: 'Sólidos', icon: Zap },
  { slug: 'mixto', name: 'Mixto', icon: Shield },
]

export default async function ReviewsPage() {
  // Hardcoded drones and reviews data for now
  const drones = [
    {
      id: '1',
      slug: 'dji-agras-t30',
      brand: 'DJI',
      model: 'Agras T30',
      capacityL: 30,
      payloadKg: 40,
      year: 2024,
      features: '["GPS RTK", "Radar omnidireccional", "Estructura plegable", "IP67"]',
      pros: '["Alta eficiencia", "Precisión GPS", "Resistencia IP67", "Transporte fácil"]',
      cons: '["Peso elevado", "Requiere capacitación"]',
      reviews: [
        {
          id: '1',
          slug: 'dji-agras-t30-review',
          title: 'DJI Agras T30 - Análisis Completo',
          rating: 5,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '2',
      slug: 'dji-agras-t50',
      brand: 'DJI',
      model: 'Agras T50',
      capacityL: 40,
      payloadKg: 50,
      year: 2024,
      features: '["GPS RTK", "Radar 360°", "Pulverización + Esparcido", "8 motores coaxiales"]',
      pros: '["Alta capacidad", "Doble función", "Detección avanzada", "Recarga rápida"]',
      cons: '["Peso elevado", "Complejidad operativa"]',
      reviews: [
        {
          id: '2',
          slug: 'dji-agras-t50-review',
          title: 'DJI Agras T50 - Análisis Completo',
          rating: 5,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '3',
      slug: 'xag-p150',
      brand: 'XAG',
      model: 'P150',
      capacityL: 50,
      payloadKg: 50,
      year: 2023,
      features: '["Sistema de pulverización", "Vuelo autónomo", "Monitoreo en tiempo real"]',
      pros: '["Buena relación precio-calidad", "Fácil mantenimiento", "Soporte técnico"]',
      cons: '["Menor autonomía", "Limitaciones climáticas", "Curva de aprendizaje"]',
      reviews: [
        {
          id: '3',
          slug: 'xag-p150-review',
          title: 'XAG P150 - Review Detallado',
          rating: 4,
          createdAt: new Date(),
        }
      ]
    }
  ]

  const reviews = [
    {
      id: '1',
      slug: 'dji-agras-t30-review',
      title: 'DJI Agras T30 - Análisis Completo',
      summary: 'El DJI Agras T30 combina eficiencia, precisión y 30L de capacidad en un drone agrícola de referencia.',
      rating: 5,
      createdAt: new Date(),
      drone: {
        id: '1',
        brand: 'DJI',
        model: 'Agras T30',
        capacityL: 30,
        year: 2024
      }
    },
    {
      id: '2',
      slug: 'dji-agras-t50-review',
      title: 'DJI Agras T50 - Análisis Completo',
      summary: 'El DJI Agras T50 combina pulverización de 40L y esparcido de 75L en un drone agrícola de alto rendimiento.',
      rating: 5,
      createdAt: new Date(),
      drone: {
        id: '2',
        brand: 'DJI',
        model: 'Agras T50',
        capacityL: 40,
        year: 2024
      }
    },
    {
      id: '3',
      slug: 'xag-p150-review',
      title: 'XAG P150 - Review Detallado',
      summary: 'Análisis completo del XAG P150, un drone agrícola con excelente relación precio-calidad.',
      rating: 4,
      createdAt: new Date(),
      drone: {
        id: '3',
        brand: 'XAG',
        model: 'P150',
        capacityL: 50,
        year: 2023
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Reviews de Drones Agrícolas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Análisis detallado de los mejores drones agrícolas del mercado. 
              Especificaciones, pros, contras y comparativas para ayudarte a elegir.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Reviews' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Buscar drones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input placeholder="Modelo, marca..." />
                    <Button size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Brands Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Marcas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand.slug} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{brand.name}</span>
                      </div>
                      <Badge variant="secondary">{brand.count}</Badge>
                    </label>
                  ))}
                </CardContent>
              </Card>

              {/* Capacity Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Capacidad</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {capacityRanges.map((range) => (
                    <label key={range.label} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </CardContent>
              </Card>

              {/* Use Type Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tipo de uso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {useTypes.map((type) => (
                    <label key={type.slug} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <type.icon className="h-4 w-4" />
                      <span className="text-sm">{type.name}</span>
                    </label>
                  ))}
                </CardContent>
              </Card>

              {/* Ad Slot */}
              <AdSlot variant="sidebar" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {drones.length} drones analizados
              </h2>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </div>

            {/* Featured Reviews */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reviews Destacadas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.slice(0, 2).map((review) => (
                  <Card key={review.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{review.drone?.brand}</Badge>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">
                            {review.rating}/5
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-lg">
                        <Link 
                          href={`/reviews/${review.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {review.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        {review.summary}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>{review.drone?.brand} {review.drone?.model}</span>
                        {review.drone?.capacityL && (
                          <span className="ml-2">• {review.drone.capacityL}L</span>
                        )}
                      </div>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/reviews/${review.slug}`}>
                          Leer review completa
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Drones */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Todos los Drones
              </h3>
              <div className="space-y-6">
                {drones.map((drone) => (
                  <Card key={drone.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold">
                              {drone.brand} {drone.model}
                            </h3>
                            <Badge variant="outline">{drone.year}</Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            {drone.capacityL && (
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                  {drone.capacityL}L
                                </div>
                                <div className="text-sm text-gray-500">Capacidad líquidos</div>
                              </div>
                            )}
                            {drone.payloadKg && (
                              <div className="text-center">
                                <div className="text-2xl font-bold text-primary">
                                  {drone.payloadKg}kg
                                </div>
                                <div className="text-sm text-gray-500">Carga sólidos</div>
                              </div>
                            )}
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">
                                {drone.features.length}
                              </div>
                              <div className="text-sm text-gray-500">Características</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-primary">
                                {drone.reviews.length}
                              </div>
                              <div className="text-sm text-gray-500">Reviews</div>
                            </div>
                          </div>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {drone.features && JSON.parse(drone.features).map((feature: string) => (
                              <Badge key={feature} variant="secondary">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Pros */}
                          {drone.pros && JSON.parse(drone.pros).length > 0 && (
                            <div className="mb-4">
                              <p className="text-sm font-medium text-gray-700 mb-2">Ventajas:</p>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {JSON.parse(drone.pros).slice(0, 3).map((pro: string, index: number) => (
                                  <li key={index} className="flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                        
                        <div className="ml-6 flex flex-col space-y-2">
                          <Button asChild size="sm">
                            <Link href={`/reviews/${drone.slug}-review`}>
                              Ver Review
                            </Link>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/directorio?drone=${drone.slug}`}>
                              Ver Empresas
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Ad Slot */}
            <AdSlot variant="leaderboard" className="my-12" />

            {/* CTA Section */}
            <Card className="bg-primary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  ¿Necesitas ayuda para elegir?
                </h3>
                <p className="text-lg mb-6 text-green-100">
                  Nuestros expertos te ayudan a encontrar el drone perfecto para tu operación
                </p>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/cotizar">
                    Consulta Gratuita
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
