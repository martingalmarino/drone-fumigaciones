'use client'

import { useEffect, useRef, useState } from 'react'
import { Centro } from '@/types'

interface MapProps {
  centers: Centro[]
  onCenterSelect?: (center: Centro) => void
  className?: string
}

export function Map({ centers, onCenterSelect, className = '' }: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const markers = useRef<any[]>([])
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (!mapContainer.current) return

    const initMap = async () => {
      try {
        // Dynamic import of MapLibre
        const maplibregl = await import('maplibre-gl')
        
        // TODO: FETCH_MAPLIBRE_TOKEN - Obtener token real para producción
        const token = process.env.NEXT_PUBLIC_MAPLIBRE_TOKEN || ''

        map.current = new maplibregl.Map({
          container: mapContainer.current!,
          style: {
            version: 8,
            sources: {
              'osm': {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '© OpenStreetMap contributors'
              }
            },
            layers: [
              {
                id: 'osm',
                type: 'raster',
                source: 'osm',
                minzoom: 0,
                maxzoom: 22
              }
            ]
          },
          center: [-58.3816, -34.6037], // Buenos Aires
          zoom: 10
        })

        // Add navigation controls
        map.current.addControl(new maplibregl.NavigationControl())

        map.current.on('load', () => {
          setMapLoaded(true)
        })

      } catch (error) {
        console.error('Error loading MapLibre:', error)
      }
    }

    initMap()

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  useEffect(() => {
    if (!mapLoaded || !map.current) return

    // Clear existing markers
    markers.current.forEach(marker => marker.remove())
    markers.current = []

    // Add new markers
    centers.forEach((center) => {
      if (!map.current) return

      // Create custom marker element
      const el = document.createElement('div')
      el.className = 'custom-marker'
      el.innerHTML = `
        <div class="w-8 h-8 bg-primary-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
          <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
      `

      // Add click event
      el.addEventListener('click', () => {
        if (onCenterSelect) {
          onCenterSelect(center)
        }
      })

      // Create and add marker
      const maplibregl = require('maplibre-gl')
      const marker = new maplibregl.Marker(el)
        .setLngLat([center.lng, center.lat])
        .addTo(map.current)

      markers.current.push(marker)
    })

    // Fit map to markers if there are any
    if (centers.length > 0) {
      const bounds = new (require('maplibre-gl')).LngLatBounds()
      centers.forEach(center => {
        bounds.extend([center.lng, center.lat])
      })
      map.current.fitBounds(bounds, { padding: 50 })
    }
  }, [centers, mapLoaded, onCenterSelect])

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapContainer} 
        className="w-full h-96 rounded-lg overflow-hidden border border-neutral-200"
      />
      {!mapLoaded && (
        <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
            <p className="text-neutral-600">Cargando mapa...</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Add custom styles for markers
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = `
    .custom-marker {
      cursor: pointer;
    }
    .custom-marker:hover {
      z-index: 1000;
    }
  `
  document.head.appendChild(style)
}
