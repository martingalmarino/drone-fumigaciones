'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { ArrowLeft, MapPin, FileText, Calendar, HelpCircle } from 'lucide-react'
import { useJurisdicciones } from '@/lib/useJurisdicciones'
import Link from 'next/link'

interface JurisdictionLayoutProps {
  children: React.ReactNode
}

export default function JurisdictionLayout({ children }: JurisdictionLayoutProps) {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const { getJurisdiccionBySlug } = useJurisdicciones()
  const jurisdiccion = getJurisdiccionBySlug(slug)

  const [activeTab, setActiveTab] = useState('grabado')

  if (!jurisdiccion) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Jurisdicción no encontrada</h1>
          <p className="text-lg text-neutral-600 mb-8">La jurisdicción que buscas no existe.</p>
          <Link href="/jurisdicciones" className="btn-primary">
            Ver todas las jurisdicciones
          </Link>
        </div>
      </div>
    )
  }

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'obligatorio':
        return 'bg-green-100 text-green-800'
      case 'opcional':
        return 'bg-yellow-100 text-yellow-800'
      case 'no_aplica':
        return 'bg-gray-100 text-gray-800'
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
      default:
        return 'Desconocido'
    }
  }

  const tabs = [
    {
      id: 'grabado',
      label: 'Grabado',
      icon: FileText,
      href: `/j/${slug}/grabado`
    },
    {
      id: 'rpa-rpm',
      label: 'RPA/RPM',
      icon: Calendar,
      href: `/j/${slug}/rpa-rpm`
    },
    {
      id: 'cedulas',
      label: 'Cédulas',
      icon: HelpCircle,
      href: `/j/${slug}/cedulas`
    },
    {
      id: 'centros',
      label: 'Centros',
      icon: MapPin,
      href: `/j/${slug}/centros`
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/jurisdicciones" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a jurisdicciones
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">
                {jurisdiccion.nombre}
              </h1>
              <div className="flex items-center space-x-4">
                <span className={`badge ${getEstadoColor(jurisdiccion.estadoGrabado)}`}>
                  Grabado: {getEstadoText(jurisdiccion.estadoGrabado)}
                </span>
                <span className="text-neutral-600">
                  {jurisdiccion.centros.length} centro{jurisdiccion.centros.length !== 1 ? 's' : ''} disponible{jurisdiccion.centros.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200 mb-8">
          <nav className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    router.push(tab.href)
                  }}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  )
}
