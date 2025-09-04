'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export function RpaRpmInteractive() {
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleYear, setVehicleYear] = useState('')

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  return (
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
  )
}
