'use client'

import Link from 'next/link'
import { MapPin, Calendar, FileText, Clock } from 'lucide-react'
import { Jurisdiccion } from '@/types'

interface JurisdictionCardProps {
  jurisdiccion: Jurisdiccion
}

export function JurisdictionCard({ jurisdiccion }: JurisdictionCardProps) {
  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'obligatorio':
        return 'bg-green-100 text-green-800'
      case 'opcional':
        return 'bg-yellow-100 text-yellow-800'
      case 'no_aplica':
        return 'bg-gray-100 text-gray-800'
      case 'indeterminado':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getEstadoText = (estado: string) => {
    switch (estado) {
      case 'obligatorio':
        return 'Obligatorio'
      case 'opcional':
        return 'Opcional'
      case 'no_aplica':
        return 'No aplica'
      case 'indeterminado':
        return 'Consultar'
      default:
        return 'Desconocido'
    }
  }

  const getServiciosDisponibles = () => {
    const servicios = []
    if (jurisdiccion.grabado?.turneroUrl) servicios.push('Grabado')
    if (jurisdiccion.rpa_rpm) servicios.push('RPA/RPM')
    if (jurisdiccion.cedulas?.tipos?.length > 0) servicios.push('Cédulas')
    return servicios
  }

  return (
    <Link href={`/j/${jurisdiccion.slug}`}>
      <div className="card hover:shadow-medium transition-all duration-200 hover:-translate-y-1 cursor-pointer group h-full">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors leading-tight flex-1 min-w-0">
            {jurisdiccion.nombre}
          </h3>
          <span className={`badge ${getEstadoColor(jurisdiccion.estadoGrabado)} whitespace-nowrap flex-shrink-0 text-xs sm:text-sm px-2 py-1`}>
            {getEstadoText(jurisdiccion.estadoGrabado)}
          </span>
        </div>

        <div className="space-y-3 flex-1">
          {/* Servicios disponibles */}
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <FileText size={16} className="flex-shrink-0" />
            <span className="truncate">{getServiciosDisponibles().join(', ')}</span>
          </div>

          {/* Centros disponibles */}
          <div className="flex items-center space-x-2 text-sm text-neutral-600">
            <MapPin size={16} className="flex-shrink-0" />
            <span>{jurisdiccion.centros?.length || 0} centro{(jurisdiccion.centros?.length || 0) !== 1 ? 's' : ''} disponible{(jurisdiccion.centros?.length || 0) !== 1 ? 's' : ''}</span>
          </div>

          {/* Turnero disponible */}
          {jurisdiccion.grabado?.turneroUrl && (
            <div className="flex items-center space-x-2 text-sm text-green-600">
              <Calendar size={16} className="flex-shrink-0" />
              <span>Turnero disponible</span>
            </div>
          )}

          {/* Última actualización */}
          <div className="flex items-center space-x-2 text-xs text-neutral-500">
            <Clock size={14} className="flex-shrink-0" />
            <span>Actualizado: {jurisdiccion.fuentes[0]?.fecha || 'N/A'}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-neutral-200">
          <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
            Ver detalles →
          </span>
        </div>
      </div>
    </Link>
  )
}

// Skeleton loading component
export function JurisdictionCardSkeleton() {
  return (
    <div className="card animate-pulse h-full">
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="h-6 bg-neutral-200 rounded w-3/4"></div>
        <div className="h-6 bg-neutral-200 rounded w-16"></div>
      </div>
      <div className="space-y-3 flex-1">
        <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
        <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/3"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/4"></div>
      </div>
      <div className="mt-4 pt-4 border-t border-neutral-200">
        <div className="h-4 bg-neutral-200 rounded w-20"></div>
      </div>
    </div>
  )
}
