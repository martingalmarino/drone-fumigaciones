'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Star, Filter, Search, Droplets, Zap, Shield, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AdSlot from '@/components/AdSlot'
import Breadcrumbs from '@/components/Breadcrumbs'

const brands = [
  { slug: 'dji', name: 'DJI', count: 4 },
  { slug: 'xag', name: 'XAG', count: 3 },
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

interface Drone {
  id: string
  slug: string
  brand: string
  model: string
  capacityL: number
  payloadKg: number
  year: number
  features: string
  pros: string
  cons: string
  reviews: Array<{
    id: string
    slug: string
    title: string
    rating: number
    createdAt: Date
  }>
}

interface ReviewsClientProps {
  drones: Drone[]
  reviews: Array<{
    id: string
    slug: string
    title: string
    summary: string
    rating: number
    createdAt: Date
    drone: {
      id: string
      brand: string
      model: string
      capacityL: number
      year: number
    }
  }>
}

export default function ReviewsClient({ drones, reviews }: ReviewsClientProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([])
  const [selectedUseTypes, setSelectedUseTypes] = useState<string[]>([])

  // Función para manejar filtros de marca
  const handleBrandChange = (brandSlug: string) => {
    setSelectedBrands(prev => 
      prev.includes(brandSlug) 
        ? prev.filter(b => b !== brandSlug)
        : [...prev, brandSlug]
    )
  }

  // Función para manejar filtros de capacidad
  const handleCapacityChange = (capacityLabel: string) => {
    setSelectedCapacities(prev => 
      prev.includes(capacityLabel) 
        ? prev.filter(c => c !== capacityLabel)
        : [...prev, capacityLabel]
    )
  }

  // Función para manejar filtros de tipo de uso
  const handleUseTypeChange = (useTypeSlug: string) => {
    setSelectedUseTypes(prev => 
      prev.includes(useTypeSlug) 
        ? prev.filter(t => t !== useTypeSlug)
        : [...prev, useTypeSlug]
    )
  }

  // Función para limpiar todos los filtros
  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedBrands([])
    setSelectedCapacities([])
    setSelectedUseTypes([])
  }

  // Lógica de filtrado
  const filteredDrones = useMemo(() => {
    return drones.filter(drone => {
      // Filtro por búsqueda
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase()
        const matchesSearch = 
          drone.brand.toLowerCase().includes(searchLower) ||
          drone.model.toLowerCase().includes(searchLower) ||
          drone.slug.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }

      // Filtro por marca
      if (selectedBrands.length > 0) {
        const brandSlug = drone.brand.toLowerCase()
        if (!selectedBrands.includes(brandSlug)) return false
      }

      // Filtro por capacidad
      if (selectedCapacities.length > 0) {
        const capacityMatches = selectedCapacities.some(capacityLabel => {
          const range = capacityRanges.find(r => r.label === capacityLabel)
          if (!range) return false
          return drone.capacityL >= range.min && drone.capacityL < range.max
        })
        if (!capacityMatches) return false
      }

      // Filtro por tipo de uso (simplificado - todos los drones soportan líquidos y sólidos)
      if (selectedUseTypes.length > 0) {
        // Por ahora, todos los drones soportan ambos tipos
        // En el futuro se podría agregar una propiedad específica
        return true
      }

      return true
    })
  }, [drones, searchTerm, selectedBrands, selectedCapacities, selectedUseTypes])

  const filteredReviews = useMemo(() => {
    return reviews.filter(review => {
      const drone = drones.find(d => d.id === review.drone.id)
      if (!drone) return false

      // Aplicar los mismos filtros que a los drones
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase()
        const matchesSearch = 
          drone.brand.toLowerCase().includes(searchLower) ||
          drone.model.toLowerCase().includes(searchLower) ||
          review.title.toLowerCase().includes(searchLower)
        if (!matchesSearch) return false
      }

      if (selectedBrands.length > 0) {
        const brandSlug = drone.brand.toLowerCase()
        if (!selectedBrands.includes(brandSlug)) return false
      }

      if (selectedCapacities.length > 0) {
        const capacityMatches = selectedCapacities.some(capacityLabel => {
          const range = capacityRanges.find(r => r.label === capacityLabel)
          if (!range) return false
          return drone.capacityL >= range.min && drone.capacityL < range.max
        })
        if (!capacityMatches) return false
      }

      return true
    })
  }, [reviews, drones, searchTerm, selectedBrands, selectedCapacities])

  const hasActiveFilters = searchTerm || selectedBrands.length > 0 || selectedCapacities.length > 0 || selectedUseTypes.length > 0

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
                    <Input 
                      placeholder="Modelo, marca..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button size="sm" disabled>
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
                    <label key={brand.slug} className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          className="rounded" 
                          checked={selectedBrands.includes(brand.slug)}
                          onChange={() => handleBrandChange(brand.slug)}
                        />
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
                    <label key={range.label} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded" 
                        checked={selectedCapacities.includes(range.label)}
                        onChange={() => handleCapacityChange(range.label)}
                      />
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
                    <label key={type.slug} className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded" 
                        checked={selectedUseTypes.includes(type.slug)}
                        onChange={() => handleUseTypeChange(type.slug)}
                      />
                      <type.icon className="h-4 w-4" />
                      <span className="text-sm">{type.name}</span>
                    </label>
                  ))}
                </CardContent>
              </Card>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <Card>
                  <CardContent className="pt-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={clearAllFilters}
                      className="w-full"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Limpiar filtros
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* Ad Slot */}
              <AdSlot variant="sidebar" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {searchTerm && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Búsqueda: "{searchTerm}"
                      <button onClick={() => setSearchTerm('')} title="Eliminar búsqueda">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedBrands.map(brand => (
                    <Badge key={brand} variant="secondary" className="flex items-center gap-1">
                      {brands.find(b => b.slug === brand)?.name}
                      <button onClick={() => handleBrandChange(brand)} title={`Eliminar filtro ${brands.find(b => b.slug === brand)?.name}`}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedCapacities.map(capacity => (
                    <Badge key={capacity} variant="secondary" className="flex items-center gap-1">
                      {capacity}
                      <button onClick={() => handleCapacityChange(capacity)} title={`Eliminar filtro ${capacity}`}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedUseTypes.map(useType => (
                    <Badge key={useType} variant="secondary" className="flex items-center gap-1">
                      {useTypes.find(t => t.slug === useType)?.name}
                      <button onClick={() => handleUseTypeChange(useType)} title={`Eliminar filtro ${useTypes.find(t => t.slug === useType)?.name}`}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredDrones.length} drone{filteredDrones.length !== 1 ? 's' : ''} analizado{filteredDrones.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Featured Reviews */}
            {filteredReviews.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews Destacadas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredReviews.slice(0, 2).map((review) => (
                    <Card key={review.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{review.drone.brand}</Badge>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="ml-1 text-sm text-gray-600">{review.rating}/5</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">
                          <Link href={`/reviews/${review.slug}`} className="hover:text-primary">
                            {review.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {review.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {review.drone.brand} {review.drone.model} • {review.drone.capacityL}L
                          </div>
                          <Button asChild size="sm">
                            <Link href={`/reviews/${review.slug}`}>
                              Leer review completa
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All Drones */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Todos los Drones</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDrones.map((drone) => {
                  const features = JSON.parse(drone.features)
                  const pros = JSON.parse(drone.pros)
                  
                  return (
                    <Card key={drone.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{drone.brand}</Badge>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{drone.year}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl">{drone.model}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{drone.capacityL}L</span>
                          <span>Capacidad líquidos</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{drone.payloadKg}kg</span>
                          <span>Carga sólidos</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{features.length} Características</span>
                            <span className="text-gray-600">{drone.reviews.length} Reviews</span>
                          </div>
                          
                          <div className="space-y-2">
                            {features.slice(0, 4).map((feature: string, index: number) => (
                              <div key={index} className="text-sm text-gray-700">
                                {feature}
                              </div>
                            ))}
                          </div>

                          <div>
                            <h4 className="font-semibold text-sm mb-2">Ventajas:</h4>
                            <ul className="space-y-1">
                              {pros.slice(0, 3).map((pro: string, index: number) => (
                                <li key={index} className="text-sm text-gray-700 flex items-center">
                                  <span className="text-green-500 mr-2">✓</span>
                                  {pro}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex space-x-2 pt-4">
                            <Button asChild size="sm" className="flex-1">
                              <Link href={`/reviews/${drone.reviews[0]?.slug || drone.slug}`}>
                                Ver Review
                              </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm" className="flex-1">
                              <Link href="/directorio">
                                Ver Empresas
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* No Results */}
            {filteredDrones.length === 0 && (
              <div className="text-center py-12">
                <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No se encontraron drones
                </h3>
                <p className="text-gray-600 mb-4">
                  Intenta ajustar los filtros para ver más resultados.
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Limpiar filtros
                </Button>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-12 bg-primary text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir?</h2>
              <p className="text-lg mb-6 text-green-100">
                Nuestros expertos te ayudan a encontrar el drone perfecto para tu operación
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/cotizar">
                  Consulta Gratuita
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
