'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Jurisdiccion } from '@/types'

interface FormData {
  nombre: string
  email: string
  telefono: string
  jurisdiccion: string
  consulta: string
  consentimiento: boolean
}

interface ContactoFormProps {
  jurisdicciones: Jurisdiccion[]
}

export function ContactoForm({ jurisdicciones }: ContactoFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    jurisdiccion: '',
    consulta: '',
    consentimiento: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.consentimiento) {
      alert('Debes aceptar el consentimiento para continuar')
      return
    }

    setIsSubmitting(true)
    
    try {
      // TODO: FETCH_CONTACT_API - Implementar envío real del formulario
      // Simular envío
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        jurisdiccion: '',
        consulta: '',
        consentimiento: false
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card">
      <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
        Enviar Consulta
      </h2>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-medium">
              ¡Consulta enviada exitosamente!
            </span>
          </div>
          <p className="text-green-700 text-sm mt-1">
            Te responderemos en las próximas 24-48 horas.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="text-red-800 font-medium">
              Error al enviar la consulta
            </span>
          </div>
          <p className="text-red-700 text-sm mt-1">
            Por favor, intentá nuevamente o contactanos por teléfono.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-2">
              Nombre completo *
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              value={formData.nombre}
              onChange={handleInputChange}
              className="input-field"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="input-field"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-2">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleInputChange}
              className="input-field"
              placeholder="+54 11 1234-5678"
            />
          </div>

          <div>
            <label htmlFor="jurisdiccion" className="block text-sm font-medium text-neutral-700 mb-2">
              Jurisdicción de interés
            </label>
            <select
              id="jurisdiccion"
              name="jurisdiccion"
              value={formData.jurisdiccion}
              onChange={handleInputChange}
              className="input-field"
            >
              <option value="">Seleccionar jurisdicción</option>
              {jurisdicciones.map(jurisdiccion => (
                <option key={jurisdiccion.slug} value={jurisdiccion.slug}>
                  {jurisdiccion.nombre}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="consulta" className="block text-sm font-medium text-neutral-700 mb-2">
            Consulta *
          </label>
          <textarea
            id="consulta"
            name="consulta"
            required
            rows={5}
            value={formData.consulta}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Describí tu consulta en detalle..."
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            id="consentimiento"
            name="consentimiento"
            type="checkbox"
            required
            checked={formData.consentimiento}
            onChange={handleInputChange}
            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
          />
          <label htmlFor="consentimiento" className="text-sm text-neutral-600">
            Acepto que mis datos sean utilizados para responder mi consulta y 
            recibir información relacionada con grabado de autopartes, RPA/RPM y cédulas.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Enviando...</span>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Send size={20} />
              <span>Enviar Consulta</span>
            </div>
          )}
        </button>
      </form>
    </div>
  )
}
