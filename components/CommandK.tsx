'use client'

import { useState, useEffect } from 'react'
import { Search, MapPin, Calendar, FileText, X } from 'lucide-react'
import Link from 'next/link'
import { useJurisdicciones } from '@/lib/useJurisdicciones'

export function CommandK() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { jurisdicciones, searchJurisdicciones } = useJurisdicciones()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(true)
      }
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const filteredJurisdicciones = searchJurisdicciones(query)

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-start justify-center p-4 pt-16">
        <div className="fixed inset-0 bg-black/25 transition-opacity" onClick={() => setIsOpen(false)} />
        
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Search className="h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar jurisdicción..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-lg text-neutral-900 placeholder-neutral-400 outline-none"
                autoFocus
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.trim() === '' ? (
              <div className="p-6 text-center text-neutral-500">
                <Search className="h-12 w-12 text-neutral-300 mx-auto mb-3" />
                <p className="text-lg font-medium">Buscar jurisdicción</p>
                <p className="text-sm">Escribe para buscar o usa ⌘K para abrir</p>
              </div>
            ) : filteredJurisdicciones.length === 0 ? (
              <div className="p-6 text-center text-neutral-500">
                <p className="text-lg font-medium">No se encontraron resultados</p>
                <p className="text-sm">Intenta con otros términos de búsqueda</p>
              </div>
            ) : (
              <div className="divide-y divide-neutral-200">
                {filteredJurisdicciones.map((jurisdiccion) => (
                  <Link
                    key={jurisdiccion.slug}
                    href={`/j/${jurisdiccion.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-neutral-400" />
                      <div>
                        <p className="font-medium text-neutral-900">{jurisdiccion.nombre}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getEstadoColor(jurisdiccion.estadoGrabado)}`}>
                            {getEstadoText(jurisdiccion.estadoGrabado)}
                          </span>
                          {jurisdiccion.centros.length > 0 && (
                            <span className="text-xs text-neutral-500">
                              {jurisdiccion.centros.length} centro{jurisdiccion.centros.length !== 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-neutral-400">
                      {jurisdiccion.grabado.turneroUrl && <Calendar size={16} />}
                      <FileText size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-neutral-200 px-6 py-3">
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>Presiona ⌘K para abrir</span>
              <span>ESC para cerrar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
