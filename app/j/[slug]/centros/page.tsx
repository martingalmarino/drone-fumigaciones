'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { MapPin, Clock, Phone, FileText, Users, CheckCircle } from 'lucide-react'
import { useJurisdicciones } from '@/lib/useJurisdicciones'
import { Map } from '@/components/Map'
import { CenterList } from '@/components/CenterList'

export default function CentrosPage() {
  const params = useParams()
  const slug = params.slug as string
  const { getJurisdiccionBySlug } = useJurisdicciones()
  const jurisdiccion = getJurisdiccionBySlug(slug)

  const [selectedCenter, setSelectedCenter] = useState<any>(null)

  if (!jurisdiccion) {
    return <div>Jurisdicción no encontrada</div>
  }

  const { centros } = jurisdiccion

  if (centros.length === 0) {
    return (
      <div className="card text-center py-12">
        <MapPin className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
          No hay centros disponibles
        </h2>
        <p className="text-neutral-600 mb-6">
          Esta jurisdicción no tiene centros de servicio registrados actualmente.
        </p>
        <p className="text-sm text-neutral-500">
          Te recomendamos contactar directamente con la autoridad local para obtener información 
          sobre centros de servicio disponibles.
        </p>
      </div>
    )
  }

  // Calculate statistics
  const totalCenters = centros.length
  const centersWithGrabado = centros.filter(c => c.servicios.includes('grabado')).length
  const centersWithRpaRpm = centros.filter(c => c.servicios.includes('rpa_rpm')).length
  const centersWithCedulas = centros.filter(c => c.servicios.includes('cedulas')).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-4">
          <MapPin className="h-8 w-8 text-blue-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              Centros de Servicio
            </h2>
            <p className="text-neutral-700">
              Encontrá todos los centros autorizados en {jurisdiccion.nombre} para realizar 
              trámites de grabado, RPA/RPM y cédulas.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Users className="h-6 w-6 text-primary-600" />
          </div>
          <div className="text-2xl font-bold text-neutral-900">{totalCenters}</div>
          <div className="text-sm text-neutral-600">Centros totales</div>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">{centersWithGrabado}</div>
          <div className="text-sm text-neutral-600">Con grabado</div>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600">{centersWithRpaRpm}</div>
          <div className="text-sm text-neutral-600">Con RPA/RPM</div>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Phone className="h-6 w-6 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600">{centersWithCedulas}</div>
          <div className="text-sm text-neutral-600">Con cédulas</div>
        </div>
      </div>

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

      {/* Additional Information */}
      <section className="card bg-neutral-50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Información Importante
        </h3>
        <div className="space-y-3 text-sm text-neutral-600">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Los centros están autorizados oficialmente por la jurisdicción</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Recomendamos llamar antes de ir para confirmar horarios</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Llevá toda la documentación requerida</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Los horarios pueden variar en días feriados</span>
          </div>
        </div>
      </section>
    </div>
  )
}
