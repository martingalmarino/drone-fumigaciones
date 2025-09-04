'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, MapPin, Globe } from 'lucide-react'
import { useJurisdicciones } from '@/lib/useJurisdicciones'
import dynamic from 'next/dynamic'

// Lazy load del mapa para mejor rendimiento
const Map = dynamic(() => import('@/components/Map').then(mod => ({ default: mod.Map })), {
  loading: () => <div className="h-96 bg-neutral-100 rounded-lg flex items-center justify-center">Cargando mapa...</div>,
  ssr: false
})
import { CenterList } from '@/components/CenterList'

export default function MapaPage() {
  const { jurisdicciones, loading } = useJurisdicciones()
  const [searchQuery, setSearchQuery] = useState('')
  const [provinciaFilter, setProvinciaFilter] = useState('')
  const [servicioFilter, setServicioFilter] = useState('')

  // Get all centers from all jurisdictions
  const allCenters = useMemo(() => {
    return jurisdicciones.flatMap(j => 
      j.centros.map(c => ({
        ...c,
        jurisdiccion: j.nombre,
        jurisdiccionSlug: j.slug
      }))
    )
  }, [jurisdicciones])

  // Get unique provinces and cities
  const provincias = useMemo(() => {
    const unique = Array.from(new Set(jurisdicciones.map(j => j.nombre)))
    return unique.sort()
  }, [jurisdicciones])

  const servicios = useMemo(() => {
    const allServices = allCenters.flatMap(c => c.servicios)
    return Array.from(new Set(allServices))
  }, [allCenters])

  const filteredCenters = useMemo(() => {
    let filtered = allCenters

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(c => 
        c.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.jurisdiccion.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Provincia filter
    if (provinciaFilter) {
      filtered = filtered.filter(c => c.jurisdiccion === provinciaFilter)
    }

    // Servicio filter
    if (servicioFilter) {
      filtered = filtered.filter(c => c.servicios.includes(servicioFilter))
    }

    return filtered
  }, [allCenters, searchQuery, provinciaFilter, servicioFilter])

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Mapa de Centros
            </h1>
            <p className="text-lg text-neutral-600">
              Cargando información...
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Mapa de Centros
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encontrá todos los centros de servicio de grabado, RPA/RPM y cédulas 
            en todo el país. Filtrá por jurisdicción, servicio o ubicación.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-soft mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-2">
                Buscar centro o jurisdicción
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  id="search"
                  type="text"
                  placeholder="Nombre del centro o jurisdicción..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Provincia Filter */}
            <div>
              <label htmlFor="provincia-filter" className="block text-sm font-medium text-neutral-700 mb-2">
                Filtrar por jurisdicción
              </label>
              <select
                id="provincia-filter"
                value={provinciaFilter}
                onChange={(e) => setProvinciaFilter(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Todas las jurisdicciones</option>
                {provincias.map(provincia => (
                  <option key={provincia} value={provincia}>{provincia}</option>
                ))}
              </select>
            </div>

            {/* Servicio Filter */}
            <div>
              <label htmlFor="servicio-filter" className="block text-sm font-medium text-neutral-700 mb-2">
                Filtrar por servicio
              </label>
              <select
                id="servicio-filter"
                value={servicioFilter}
                onChange={(e) => setServicioFilter(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Todos los servicios</option>
                {servicios.map(servicio => (
                  <option key={servicio} value={servicio}>
                    {servicio === 'grabado' ? 'Grabado' : 
                     servicio === 'rpa_rpm' ? 'RPA/RPM' : 
                     servicio === 'cedulas' ? 'Cédulas' : servicio}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Globe className="h-6 w-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-primary-600">{jurisdicciones.length}</div>
            <div className="text-sm text-neutral-600">Jurisdicciones</div>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-6 w-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-green-600">{allCenters.length}</div>
            <div className="text-sm text-neutral-600">Centros totales</div>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-600">{filteredCenters.length}</div>
            <div className="text-sm text-neutral-600">Centros filtrados</div>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {allCenters.filter(c => c.servicios.includes('grabado')).length}
            </div>
            <div className="text-sm text-neutral-600">Con grabado</div>
          </div>
        </div>

        {/* Map and List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Mapa Interactivo
            </h2>
            <Map 
              centers={filteredCenters} 
              className="h-96"
            />
          </div>

          {/* Center List */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">
              Lista de Centros
            </h2>
            <CenterList 
              centers={filteredCenters} 
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 card bg-neutral-50">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Información del Mapa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-600">
            <div>
              <h4 className="font-medium text-neutral-900 mb-2">Cómo usar el mapa:</h4>
              <ul className="space-y-1">
                <li>• Hacé clic en los marcadores para ver detalles</li>
                <li>• Usá los filtros para encontrar centros específicos</li>
                <li>• El mapa se centra automáticamente en los resultados</li>
                <li>• Podés hacer zoom y moverte por el mapa</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 mb-2">Información disponible:</h4>
              <ul className="space-y-1">
                <li>• Ubicación exacta de cada centro</li>
                <li>• Servicios disponibles</li>
                <li>• Horarios de atención</li>
                <li>• Información de contacto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
