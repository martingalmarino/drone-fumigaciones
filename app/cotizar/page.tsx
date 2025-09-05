'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { ArrowLeft, ArrowRight, Check, MapPin, Calendar, Crop, Droplets, User, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const steps = [
  { id: 1, title: 'Provincia', icon: MapPin },
  { id: 2, title: 'Cultivo', icon: Crop },
  { id: 3, title: 'Servicio', icon: Droplets },
  { id: 4, title: 'Detalles', icon: Calendar },
  { id: 5, title: 'Contacto', icon: User },
]

const provinces = [
  { slug: 'cordoba', name: 'Córdoba' },
  { slug: 'santa-fe', name: 'Santa Fe' },
  { slug: 'buenos-aires', name: 'Buenos Aires' },
  { slug: 'entre-rios', name: 'Entre Ríos' },
  { slug: 'la-pampa', name: 'La Pampa' },
  { slug: 'santiago-del-estero', name: 'Santiago del Estero' },
]

const crops = [
  'Soja',
  'Maíz',
  'Trigo',
  'Girasol',
  'Arroz',
  'Sorgo',
  'Algodón',
  'Hortalizas',
  'Frutales',
  'Viñedos',
  'Otro',
]

const services = [
  { id: 'pulverizacion', name: 'Pulverización', description: 'Aplicación de herbicidas, insecticidas, fungicidas' },
  { id: 'fertilizacion', name: 'Fertilización', description: 'Aplicación de fertilizantes líquidos y sólidos' },
  { id: 'siembra', name: 'Siembra', description: 'Siembra directa con drones' },
  { id: 'mapeo', name: 'Mapeo', description: 'Análisis y mapeo de cultivos' },
]

const timeWindows = [
  'Inmediata (1-3 días)',
  'Corto plazo (1 semana)',
  'Mediano plazo (2-4 semanas)',
  'Largo plazo (1-3 meses)',
  'Flexible',
]

export default function CotizarPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    province: '',
    crop: '',
    service: '',
    hectares: '',
    timeWindow: '',
    details: '',
    fullName: '',
    email: '',
    phone: '',
    company: '',
  })

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se enviaría el formulario
    console.log('Formulario enviado:', formData)
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
              Solicitar Cotización
            </h1>
            <p className="text-base sm:text-xl text-gray-600">
              Completa el formulario y recibe propuestas de empresas certificadas
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="hidden sm:flex items-center justify-between mb-4">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-primary border-primary text-white' 
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-primary' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {step.id < steps.length && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Progress */}
          <div className="sm:hidden mb-4">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    currentStep >= step.id 
                      ? 'bg-primary border-primary text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    {currentStep > step.id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <step.icon className="h-4 w-4" />
                    )}
                  </div>
                  <span className={`mt-1 text-xs font-medium ${
                    currentStep >= step.id ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>

        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg sm:text-2xl">
                Paso {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                {currentStep === 1 && 'Selecciona la provincia donde necesitas el servicio'}
                {currentStep === 2 && 'Indica el tipo de cultivo'}
                {currentStep === 3 && 'Elige el servicio que necesitas'}
                {currentStep === 4 && 'Proporciona detalles adicionales'}
                {currentStep === 5 && 'Completa tus datos de contacto'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Provincia */}
              {currentStep === 1 && (
                <div className="space-y-3">
                  {provinces.map((province) => (
                    <button
                      key={province.slug}
                      type="button"
                      onClick={() => updateFormData('province', province.slug)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.province === province.slug
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                        <span className="font-medium">{province.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2: Cultivo */}
              {currentStep === 2 && (
                <div className="space-y-3">
                  {crops.map((crop) => (
                    <button
                      key={crop}
                      type="button"
                      onClick={() => updateFormData('crop', crop)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.crop === crop
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center">
                        <Crop className="h-5 w-5 mr-2 text-gray-400" />
                        <span className="font-medium">{crop}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 3: Servicio */}
              {currentStep === 3 && (
                <div className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => updateFormData('service', service.id)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.service === service.id
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start">
                        <Droplets className="h-5 w-5 mr-3 text-gray-400 mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium text-left">{service.name}</div>
                          <div className="text-sm text-gray-500 text-left mt-1">{service.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 4: Detalles */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Superficie (hectáreas)
                    </label>
                    <Input
                      type="number"
                      placeholder="Ej: 100"
                      value={formData.hectares}
                      onChange={(e) => updateFormData('hectares', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ventana de aplicación
                    </label>
                    <div className="space-y-2">
                      {timeWindows.map((window) => (
                        <button
                          key={window}
                          type="button"
                          onClick={() => updateFormData('timeWindow', window)}
                          className={`w-full p-3 rounded-lg border-2 text-left transition-colors ${
                            formData.timeWindow === window
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            <span>{window}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Detalles adicionales (opcional)
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows={4}
                      placeholder="Describe cualquier detalle específico sobre tu cultivo o necesidades..."
                      value={formData.details}
                      onChange={(e) => updateFormData('details', e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Contacto */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        value={formData.fullName}
                        onChange={(e) => updateFormData('fullName', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa (opcional)
                      </label>
                      <Input
                        type="text"
                        placeholder="Nombre de tu empresa"
                        value={formData.company}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+54 9 11 1234-5678"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Privacidad:</strong> Tus datos serán utilizados únicamente para 
                      contactarte con empresas relevantes. No compartimos información con terceros.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                
                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !formData.province) ||
                      (currentStep === 2 && !formData.crop) ||
                      (currentStep === 3 && !formData.service)
                    }
                  >
                    Siguiente
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button type="submit">
                    Enviar Solicitud
                    <Check className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>

        {/* Summary */}
        {currentStep > 1 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">Resumen de tu solicitud</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {formData.province && (
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">
                      <strong>Provincia:</strong> {provinces.find(p => p.slug === formData.province)?.name}
                    </span>
                  </div>
                )}
                {formData.crop && (
                  <div className="flex items-center">
                    <Crop className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">
                      <strong>Cultivo:</strong> {formData.crop}
                    </span>
                  </div>
                )}
                {formData.service && (
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">
                      <strong>Servicio:</strong> {services.find(s => s.id === formData.service)?.name}
                    </span>
                  </div>
                )}
                {formData.hectares && (
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm">
                      <strong>Superficie:</strong> {formData.hectares} hectáreas
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
