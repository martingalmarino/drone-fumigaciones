'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronRight, HelpCircle, FileText, MapPin, Calendar } from 'lucide-react'

interface FAQ {
  id: string
  categoria: string
  pregunta: string
  respuesta: string
}

const faqs: FAQ[] = [
  {
    id: '1',
    categoria: 'grabado',
    pregunta: '¿Qué es el grabado de autopartes?',
    respuesta: 'El grabado de autopartes es un proceso de identificación que consiste en marcar con láser o ácido las piezas principales del vehículo (chasis, motor, etc.) para prevenir el robo y facilitar su identificación en caso de hurto.'
  },
  {
    id: '2',
    categoria: 'grabado',
    pregunta: '¿Es obligatorio el grabado en todas las provincias?',
    respuesta: 'No, el grabado de autopartes no es obligatorio en todas las provincias. Cada jurisdicción tiene su propia normativa. Algunas lo hacen obligatorio, otras opcional, y algunas no lo implementan.'
  },
  {
    id: '3',
    categoria: 'grabado',
    pregunta: '¿Cuánto cuesta el grabado de autopartes?',
    respuesta: 'El costo varía según la jurisdicción y puede oscilar entre $8,000 y $15,000 ARS. Te recomendamos consultar el costo específico en tu jurisdicción.'
  },
  {
    id: '4',
    categoria: 'grabado',
    pregunta: '¿Qué documentos necesito para el grabado?',
    respuesta: 'Generalmente necesitas: DNI del titular, cédula verde o azul del vehículo, certificado de dominio, y el pago de la tasa correspondiente. Los requisitos pueden variar por jurisdicción.'
  },
  {
    id: '5',
    categoria: 'rpa-rpm',
    pregunta: '¿Qué es RPA/RPM?',
    respuesta: 'RPA significa Registro de Propiedad Automotor y RPM significa Registro de Marcas y Modelos. Son sistemas que permiten verificar la propiedad y autenticidad de los vehículos.'
  },
  {
    id: '6',
    categoria: 'rpa-rpm',
    pregunta: '¿Cuándo necesito RPA/RPM?',
    respuesta: 'Generalmente se requiere para vehículos de más de 10-20 años (según la jurisdicción) o cuando hay modificaciones importantes en el vehículo. Consultá la normativa específica de tu jurisdicción.'
  },
  {
    id: '7',
    categoria: 'cedulas',
    pregunta: '¿Qué es la cédula digital?',
    respuesta: 'La cédula digital es la versión electrónica de tu cédula de identidad, disponible a través de la aplicación Mi Argentina. Tiene la misma validez que la cédula física.'
  },
  {
    id: '8',
    categoria: 'cedulas',
    pregunta: '¿Cómo obtengo mi cédula digital?',
    respuesta: 'Descargá la app Mi Argentina, verificá tu identidad, y solicitá la cédula digital. El proceso es gratuito y se recibe en tu celular.'
  },
  {
    id: '9',
    categoria: 'cedulas',
    pregunta: '¿La cédula digital es válida para conducir?',
    respuesta: 'Sí, la cédula digital tiene la misma validez que la cédula física para conducir y realizar trámites oficiales.'
  },
  {
    id: '10',
    categoria: 'general',
    pregunta: '¿Este sitio web es oficial?',
    respuesta: 'No, este sitio web no es oficial y no está afiliado a ningún organismo gubernamental. La información es solo para fines informativos y debe verificarse con las fuentes oficiales.'
  },
  {
    id: '11',
    categoria: 'general',
    pregunta: '¿Con qué frecuencia se actualiza la información?',
    respuesta: 'La información se actualiza regularmente, pero recomendamos siempre verificar con las fuentes oficiales de tu jurisdicción antes de realizar cualquier trámite.'
  },
  {
    id: '12',
    categoria: 'general',
    pregunta: '¿Puedo hacer trámites desde este sitio?',
    respuesta: 'No, este sitio solo proporciona información. Para realizar trámites debes dirigirte a los centros oficiales o usar los sistemas oficiales de tu jurisdicción.'
  }
]

const categorias = [
  { id: 'grabado', nombre: 'Grabado de Autopartes', icon: FileText, color: 'text-green-600' },
  { id: 'rpa-rpm', nombre: 'RPA/RPM', icon: Calendar, color: 'text-blue-600' },
  { id: 'cedulas', nombre: 'Cédulas', icon: HelpCircle, color: 'text-purple-600' },
  { id: 'general', nombre: 'General', icon: HelpCircle, color: 'text-neutral-600' }
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set())

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.pregunta.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.respuesta.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || faq.categoria === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleQuestion = (id: string) => {
    const newExpanded = new Set(expandedQuestions)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedQuestions(newExpanded)
  }

  const getCategoryIcon = (categoriaId: string) => {
    const categoria = categorias.find(c => c.id === categoriaId)
    if (categoria) {
      const Icon = categoria.icon
      return <Icon className={`h-5 w-5 ${categoria.color}`} />
    }
    return null
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encontrá respuestas a las preguntas más comunes sobre grabado de autopartes, 
            RPA/RPM y cédulas digitales en Argentina.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-neutral-200 p-6 shadow-soft mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-2">
                Buscar preguntas
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
                <input
                  id="search"
                  type="text"
                  placeholder="Escribí tu pregunta..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label htmlFor="category-filter" className="block text-sm font-medium text-neutral-700 mb-2">
                Filtrar por categoría
              </label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Todas las categorías</option>
                {categorias.map(categoria => (
                  <option key={categoria.id} value={categoria.id}>{categoria.nombre}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-neutral-900">
              Resultados ({filteredFAQs.length})
            </h2>
            {(searchQuery || selectedCategory) && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('')
                }}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 text-neutral-500">
              <HelpCircle className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
              <p className="text-lg font-medium">No se encontraron preguntas</p>
              <p className="text-sm">Intenta ajustar los filtros de búsqueda</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="card">
                  <button
                    onClick={() => toggleQuestion(faq.id)}
                    className="w-full text-left flex items-start justify-between space-x-4"
                  >
                    <div className="flex items-start space-x-3 flex-1">
                      {getCategoryIcon(faq.categoria)}
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-1">
                          {faq.pregunta}
                        </h3>
                        {expandedQuestions.has(faq.id) && (
                          <p className="text-neutral-600 text-sm leading-relaxed">
                            {faq.respuesta}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {expandedQuestions.has(faq.id) ? (
                        <ChevronDown className="h-5 w-5 text-neutral-400" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-neutral-400" />
                      )}
                    </div>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categorias.map((categoria) => {
            const Icon = categoria.icon
            const count = faqs.filter(f => f.categoria === categoria.id).length
            
            return (
              <div key={categoria.id} className="card text-center hover:shadow-medium transition-shadow cursor-pointer">
                <div className={`w-12 h-12 bg-${categoria.color.replace('text-', '')}-100 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`h-6 w-6 ${categoria.color}`} />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">{categoria.nombre}</h3>
                <p className="text-sm text-neutral-600">{count} preguntas</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            ¿No encontraste tu respuesta?
          </h3>
          <p className="text-neutral-600 mb-6">
            Si tenés una pregunta específica que no está cubierta aquí, 
            no dudes en contactarnos.
          </p>
          <a href="/contacto" className="btn-primary">
            Contactanos
          </a>
        </div>
      </div>
    </div>
  )
}
