'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, MapPin, Clock, Phone, FileText } from 'lucide-react'
import { Centro } from '@/types'

interface CenterListProps {
  centers: Centro[]
  onCenterSelect?: (center: Centro) => void
}

export function CenterList({ centers, onCenterSelect }: CenterListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedCenter, setSelectedCenter] = useState<Centro | null>(null)

  const services = useMemo(() => {
    const allServices = centers.flatMap(center => center.servicios)
    return Array.from(new Set(allServices))
  }, [centers])

  const filteredCenters = useMemo(() => {
    return centers.filter(center => {
      const matchesSearch = center.nombre.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesService = !selectedService || center.servicios.includes(selectedService)
      return matchesSearch && matchesService
    })
  }, [centers, searchQuery, selectedService])

  const handleCenterSelect = (center: Centro) => {
    setSelectedCenter(center)
    if (onCenterSelect) {
      onCenterSelect(center)
    }
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-soft">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-2">
              Buscar centro
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              <input
                id="search"
                type="text"
                placeholder="Nombre del centro..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Service Filter */}
          <div>
            <label htmlFor="service-filter" className="block text-sm font-medium text-neutral-700 mb-2">
              Filtrar por servicio
            </label>
            <select
              id="service-filter"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Todos los servicios</option>
              {services.map(service => (
                <option key={service} value={service}>
                  {service === 'grabado' ? 'Grabado' : 
                   service === 'rpa_rpm' ? 'RPA/RPM' : 
                   service === 'cedulas' ? 'Cédulas' : service}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">
            Centros encontrados ({filteredCenters.length})
          </h3>
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <Filter size={16} />
            <span>Filtros aplicados</span>
          </div>
        </div>

        {filteredCenters.length === 0 ? (
          <div className="text-center py-8 text-neutral-500">
            <MapPin size={48} className="mx-auto mb-4 text-neutral-300" />
            <p className="text-lg font-medium">No se encontraron centros</p>
            <p className="text-sm">Intenta ajustar los filtros de búsqueda</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredCenters.map((center) => (
              <div
                key={center.id}
                className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-soft ${
                  selectedCenter?.id === center.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 hover:border-primary-300'
                }`}
                onClick={() => handleCenterSelect(center)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-900 mb-2">{center.nombre}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
                      {/* Services */}
                      <div className="flex items-center space-x-2">
                        <FileText size={16} />
                        <span>
                          {center.servicios.map(service => 
                            service === 'grabado' ? 'Grabado' : 
                            service === 'rpa_rpm' ? 'RPA/RPM' : 
                            service === 'cedulas' ? 'Cédulas' : service
                          ).join(', ')}
                        </span>
                      </div>

                      {/* Hours */}
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span>{center.horarios}</span>
                      </div>

                      {/* Phone */}
                      {center.telefono && (
                        <div className="flex items-center space-x-2">
                          <Phone size={16} />
                          <span>{center.telefono}</span>
                        </div>
                      )}

                      {/* Address */}
                      {center.direccion && (
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{center.direccion}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="ml-4">
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Selected Center Details */}
      {selectedCenter && (
        <div className="bg-primary-50 rounded-lg border border-primary-200 p-4">
          <h4 className="font-semibold text-primary-900 mb-3">
            Centro seleccionado: {selectedCenter.nombre}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Servicios:</strong> {selectedCenter.servicios.join(', ')}
            </div>
            <div>
              <strong>Horarios:</strong> {selectedCenter.horarios}
            </div>
            {selectedCenter.telefono && (
              <div>
                <strong>Teléfono:</strong> {selectedCenter.telefono}
              </div>
            )}
            {selectedCenter.direccion && (
              <div>
                <strong>Dirección:</strong> {selectedCenter.direccion}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
