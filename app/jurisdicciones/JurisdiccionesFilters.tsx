'use client'

import { useState, useMemo } from 'react'
import { Search, Filter } from 'lucide-react'
import { JurisdictionCard } from '@/components/JurisdictionCard'
import { Jurisdiccion } from '@/types'

// Force Vercel cache refresh

interface JurisdiccionesFiltersProps {
  jurisdicciones: Jurisdiccion[]
  estadosConCount: Array<{
    value: string
    label: string
    count: number
  }>
}

export function JurisdiccionesFilters({ jurisdicciones, estadosConCount }: JurisdiccionesFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedEstado, setSelectedEstado] = useState<string>('')

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

  return (
    <>
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
    </>
  )
}
