'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, CheckCircle } from 'lucide-react'
import { Map } from '@/components/Map'
import { CenterList } from '@/components/CenterList'
import { Jurisdiccion } from '@/types'

interface CentrosInteractiveProps {
  jurisdiccion: Jurisdiccion
  centros: any[]
}

export function CentrosInteractive({ jurisdiccion, centros }: CentrosInteractiveProps) {
  const [selectedCenter, setSelectedCenter] = useState<any>(null)

  return (
    <>
      {/* Map and List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            Mapa de Centros
          </h3>
          <Map 
            centers={centros} 
            onCenterSelect={setSelectedCenter}
            className="h-96"
          />
        </div>

        {/* Center List */}
        <div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            Lista de Centros
          </h3>
          <CenterList 
            centers={centros} 
            onCenterSelect={setSelectedCenter}
          />
        </div>
      </div>

      {/* Selected Center Details */}
      {selectedCenter && (
        <section className="card bg-primary-50 border-primary-200">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            Centro Seleccionado: {selectedCenter.nombre}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-neutral-900 mb-3">Información de Contacto</h4>
              <div className="space-y-2 text-sm">
                {selectedCenter.telefono && (
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-neutral-500" />
                    <span>{selectedCenter.telefono}</span>
                  </div>
                )}
                {selectedCenter.direccion && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-neutral-500" />
                    <span>{selectedCenter.direccion}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-neutral-500" />
                  <span>{selectedCenter.horarios}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-neutral-900 mb-3">Servicios Disponibles</h4>
              <div className="space-y-2">
                {selectedCenter.servicios.map((servicio: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-green-600" />
                    <span className="text-sm text-neutral-700">
                      {servicio === 'grabado' ? 'Grabado de Autopartes' : 
                       servicio === 'rpa_rpm' ? 'RPA/RPM' : 
                       servicio === 'cedulas' ? 'Cédulas' : servicio}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
