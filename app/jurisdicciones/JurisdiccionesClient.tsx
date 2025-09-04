'use client'

import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import { JurisdictionCard } from '@/components/JurisdictionCard'
import { useJurisdicciones } from '@/lib/useJurisdicciones'

export function JurisdiccionesClient() {
  const { jurisdicciones, loading } = useJurisdicciones()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEstado, setSelectedEstado] = useState<string>('')

  const estados = [
    { value: 'obligatorio', label: 'Obligatorio', count: 0 },
    { value: 'opcional', label: 'Opcional', count: 0 },
    { value: 'no_aplica', label: 'No aplica', count: 0 },
    { value: 'indeterminado', label: 'Indeterminado', count: 0 },
  ]

  // Contar jurisdicciones por estado
  const estadosConCount = estados.map(estado => ({
    ...estado,
    count: jurisdicciones.filter(j => j.estadoGrabado === estado.value).length
  }))

  const filteredJurisdicciones = useMemo(() => {
    let filtered = jurisdicciones

    // Filtrar por búsqueda
    if (searchQuery) {
      filtered = filtered.filter(jurisdiccion =>
        jurisdiccion.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filtrar por estado
    if (selectedEstado) {
      filtered = filtered.filter(jurisdiccion =>
        jurisdiccion.estadoGrabado === selectedEstado
      )
    }

    return filtered
  }, [jurisdicciones, searchQuery, selectedEstado])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-lg text-neutral-600">Cargando jurisdicciones...</p>
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
            Encontrá información detallada sobre grabado de autopartes, RPA/RPM y cédulas digitales 
            para cada jurisdicción de Argentina.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-soft border border-neutral-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    placeholder="Ej: Buenos Aires, CABA, Córdoba..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>
              </div>

              {/* Estado Filter */}
              <div>
                <label htmlFor="estado" className="block text-sm font-medium text-neutral-700 mb-2">
                  Filtrar por estado
                </label>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                  <select
                    id="estado"
                    value={selectedEstado}
                    onChange={(e) => setSelectedEstado(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white"
                  >
                    <option value="">Todos los estados</option>
                    {estadosConCount.map(estado => (
                      <option key={estado.value} value={estado.value}>
                        {estado.label} ({estado.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(searchQuery || selectedEstado) && (
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                      Búsqueda: "{searchQuery}"
                      <button
                        onClick={() => setSearchQuery('')}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedEstado && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800">
                      Estado: {estadosConCount.find(e => e.value === selectedEstado)?.label}
                      <button
                        onClick={() => setSelectedEstado('')}
                        className="ml-2 text-primary-600 hover:text-primary-800"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-neutral-900">
              {filteredJurisdicciones.length} jurisdicción{filteredJurisdicciones.length !== 1 ? 'es' : ''} encontrada{filteredJurisdicciones.length !== 1 ? 's' : ''}
            </h2>
            {(searchQuery || selectedEstado) && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedEstado('')
                }}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        </div>

        {/* Jurisdictions Grid */}
        {filteredJurisdicciones.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJurisdicciones.map((jurisdiccion) => (
              <JurisdictionCard
                key={jurisdiccion.slug}
                jurisdiccion={jurisdiccion}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No se encontraron jurisdicciones
            </h3>
            <p className="text-neutral-600 mb-4">
              No hay jurisdicciones que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setSelectedEstado('')
              }}
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Ver todas las jurisdicciones
            </button>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 bg-neutral-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Estadísticas por Estado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {estadosConCount.map(estado => (
              <div key={estado.value} className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {estado.count}
                </div>
                <div className="text-sm text-neutral-600">
                  {estado.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
