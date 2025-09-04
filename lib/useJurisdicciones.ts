import { useState, useEffect } from 'react'
import { Jurisdiccion } from '@/types'

export function useJurisdicciones() {
  const [jurisdicciones, setJurisdicciones] = useState<Jurisdiccion[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchJurisdicciones = async () => {
      try {
        setLoading(true)
        // TODO: FETCH_JURISDICCIONES - Conectar con API oficial
        const response = await fetch('/data/jurisdicciones.json')
        if (!response.ok) {
          throw new Error('Error al cargar jurisdicciones')
        }
        const data = await response.json()
        // Filtrar solo las jurisdicciones válidas (excluir metadata)
        const jurisdiccionesValidas = data.filter((item: any) => item.slug && item.nombre)
        setJurisdicciones(jurisdiccionesValidas)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchJurisdicciones()
  }, [])

  const getJurisdiccionBySlug = (slug: string) => {
    return jurisdicciones.find(j => j.slug === slug)
  }

  const getJurisdiccionesByEstado = (estado: Jurisdiccion['estadoGrabado']) => {
    return jurisdicciones.filter(j => j.estadoGrabado === estado)
  }

  const searchJurisdicciones = (query: string) => {
    if (!query.trim()) return jurisdicciones
    return jurisdicciones.filter(j => 
      j.nombre.toLowerCase().includes(query.toLowerCase())
    )
  }

  return {
    jurisdicciones,
    loading,
    error,
    getJurisdiccionBySlug,
    getJurisdiccionesByEstado,
    searchJurisdicciones
  }
}
