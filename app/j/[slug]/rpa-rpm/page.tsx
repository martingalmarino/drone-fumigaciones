'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import { CheckCircle, FileText, Calendar, AlertTriangle, Info } from 'lucide-react'
import { useJurisdicciones } from '@/lib/useJurisdicciones'

export default function RpaRpmPage() {
  const params = useParams()
  const slug = params.slug as string
  const { getJurisdiccionBySlug } = useJurisdicciones()
  const jurisdiccion = getJurisdiccionBySlug(slug)

  const [vehicleType, setVehicleType] = useState('')
  const [vehicleYear, setVehicleYear] = useState('')

  if (!jurisdiccion || !jurisdiccion.rpa_rpm) {
    return (
      <div className="card text-center py-12">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
          RPA/RPM no disponible
        </h2>
        <p className="text-neutral-600">
          Esta jurisdicción no tiene información sobre RPA/RPM disponible.
        </p>
      </div>
    )
  }

  const { rpa_rpm } = jurisdiccion

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-4">
          <Info className="h-8 w-8 text-blue-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              RPA/RPM - Registro de Propiedad Automotor
            </h2>
            <p className="text-neutral-700 mb-4">
              {rpa_rpm.cuandoAplica}
            </p>
            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
              <strong>¿Qué es RPA/RPM?</strong> El Registro de Propiedad Automotor (RPA) y 
              el Registro de Marcas y Modelos (RPM) son sistemas que permiten verificar la 
              propiedad y autenticidad de los vehículos.
            </div>
          </div>
        </div>
      </div>

      {/* Pasos */}
      <section className="card">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">
          Pasos para obtener RPA/RPM
        </h3>
        <div className="space-y-4">
          {rpa_rpm.pasos.map((paso, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-neutral-700 font-medium">{paso}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentación */}
      <section className="card">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">
          Documentación Requerida
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rpa_rpm.documentacion.map((doc, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
              <FileText className="h-5 w-5 text-primary-600" />
              <span className="text-neutral-700">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist Interactivo */}
      <section className="card">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">
          Checklist de Verificación
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="vehicle-type" className="block text-sm font-medium text-neutral-700 mb-2">
              Tipo de Vehículo
            </label>
            <select
              id="vehicle-type"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Seleccionar tipo</option>
              <option value="auto">Automóvil</option>
              <option value="camioneta">Camioneta</option>
              <option value="camion">Camión</option>
              <option value="moto">Motocicleta</option>
              <option value="utilitario">Utilitario</option>
            </select>
          </div>

          <div>
            <label htmlFor="vehicle-year" className="block text-sm font-medium text-neutral-700 mb-2">
              Año del Vehículo
            </label>
            <select
              id="vehicle-year"
              value={vehicleYear}
              onChange={(e) => setVehicleYear(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="">Seleccionar año</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-lg p-4">
          <h4 className="font-medium text-neutral-900 mb-3">Verificaciones recomendadas:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Verificar que el vehículo esté libre de deudas</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Confirmar que la documentación esté vigente</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Revisar que no haya restricciones de dominio</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Verificar que el titular esté habilitado</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            ¿Necesitás ayuda con el trámite?
          </h3>
          <p className="text-neutral-700 mb-6">
            Nuestros gestores especializados pueden ayudarte con todo el proceso de RPA/RPM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary">
              Solicitar asesoramiento
            </a>
            <a href="/faq" className="btn-secondary">
              Ver preguntas frecuentes
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
