'use client'

import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import { JurisdictionCard } from '@/components/JurisdictionCard'
import { useJurisdicciones } from '@/lib/useJurisdicciones'

export default function JurisdiccionesPage() {
  const { jurisdicciones, loading } = useJurisdicciones()
  const [searchQuery, setSearchQuery] = useState('')
  const [estadoFilter, setEstadoFilter] = useState('')
  const [centrosFilter, setCentrosFilter] = useState('')

  const filteredJurisdicciones = useMemo(() => {
    let filtered = jurisdicciones

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(j => 
        j.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Estado filter
    if (estadoFilter) {
      filtered = filtered.filter(j => j.estadoGrabado === estadoFilter)
    }

    // Centros filter
    if (centrosFilter === 'con_centros') {
      filtered = filtered.filter(j => j.centros.length > 0)
    } else if (centrosFilter === 'sin_centros') {
      filtered = filtered.filter(j => j.centros.length === 0)
    }

    return filtered
  }, [jurisdicciones, searchQuery, estadoFilter, centrosFilter])

  if (loading) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">
              Todas las Jurisdicciones
            </h1>
            <p className="text-lg text-neutral-600">
              Cargando información...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="card animate-pulse">
                <div className="h-6 bg-neutral-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
                  <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
                  <div className="h-4 bg-neutral-200 rounded w-1/3"></div>
                </div>
              </div>
            ))}
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
            Todas las Jurisdicciones
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encontrá información detallada sobre grabado de autopartes, RPA/RPM y cédulas 
            digitales para cada jurisdicción de Argentina.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-soft mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-2">
                Buscar jurisdicción
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  id="search"
                  type="text"
                  placeholder="Nombre de la jurisdicción..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Estado Filter */}
            <div>
              <label htmlFor="estado-filter" className="block text-sm font-medium text-neutral-700 mb-2">
                Estado del grabado
              </label>
              <select
                id="estado-filter"
                value={estadoFilter}
                onChange={(e) => setEstadoFilter(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Todos los estados</option>
                <option value="obligatorio">Obligatorio</option>
                <option value="opcional">Opcional</option>
                <option value="no_aplica">No aplica</option>
              </select>
            </div>

            {/* Centros Filter */}
            <div>
              <label htmlFor="centros-filter" className="block text-sm font-medium text-neutral-700 mb-2">
                Centros disponibles
              </label>
              <select
                id="centros-filter"
                value={centrosFilter}
                onChange={(e) => setCentrosFilter(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Todos</option>
                <option value="con_centros">Con centros</option>
                <option value="sin_centros">Sin centros</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Resultados ({filteredJurisdicciones.length})
            </h2>
            <div className="flex items-center space-x-2 text-sm text-neutral-600">
              <Filter size={16} />
              <span>Filtros aplicados</span>
            </div>
          </div>

          {filteredJurisdicciones.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <p className="text-lg font-medium">No se encontraron jurisdicciones</p>
              <p className="text-sm">Intenta ajustar los filtros de búsqueda</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJurisdicciones.map((jurisdiccion) => (
                <JurisdictionCard key={jurisdiccion.slug} jurisdiccion={jurisdiccion} />
              ))}
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="bg-neutral-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-6">Estadísticas</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600">{jurisdicciones.length}</div>
              <div className="text-sm text-neutral-600">Jurisdicciones</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {jurisdicciones.filter(j => j.estadoGrabado === 'obligatorio').length}
              </div>
              <div className="text-sm text-neutral-600">Grabado obligatorio</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {jurisdicciones.filter(j => j.estadoGrabado === 'opcional').length}
              </div>
              <div className="text-sm text-neutral-600">Grabado opcional</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {jurisdicciones.reduce((total, j) => total + j.centros.length, 0)}
              </div>
              <div className="text-sm text-neutral-600">Centros totales</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
