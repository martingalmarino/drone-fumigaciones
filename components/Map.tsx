'use client'

import { useEffect, useRef, useState } from 'react'
import { Centro } from '@/types'

interface MapProps {
  centers: Centro[]
  onCenterSelect?: (center: Centro) => void
  className?: string
}

export function Map({ centers, onCenterSelect, className = '' }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const loadLeaflet = async () => {
      try {
        // Import Leaflet CSS
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
        link.crossOrigin = ''
        document.head.appendChild(link)

        // Import Leaflet JS
        const L = await import('leaflet')
        
        // Fix default markers
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        })

        if (mapRef.current && !mapInstanceRef.current) {
          // Default center (Buenos Aires)
          const defaultCenter: [number, number] = [-34.6037, -58.3816]
          
          // Calculate center based on markers if available
          let center: [number, number] = defaultCenter
          if (centers.length > 0) {
            const avgLat = centers.reduce((sum, c) => sum + c.lat, 0) / centers.length
            const avgLng = centers.reduce((sum, c) => sum + c.lng, 0) / centers.length
            center = [avgLat, avgLng]
          }

          // Create map
          const map = L.map(mapRef.current, {
            center,
            zoom: centers.length > 1 ? 6 : 10,
            scrollWheelZoom: true,
            zoomControl: true
          })

          // Add tile layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map)

          // Add markers
          centers.forEach((center) => {
            const marker = L.marker([center.lat, center.lng])
            
            // Create popup content
            const popupContent = `
              <div class="p-2">
                <h3 class="font-semibold text-sm mb-1">${center.nombre}</h3>
                <p class="text-xs text-gray-600 mb-2">${center.jurisdiccion}</p>
                ${center.servicios && center.servicios.length > 0 ? `
                  <div class="mb-2">
                    <p class="text-xs font-medium text-gray-700 mb-1">Servicios:</p>
                    <div class="flex flex-wrap gap-1">
                      ${center.servicios.map((servicio: string) => `
                        <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          ${servicio === 'grabado' ? 'Grabado' : 
                            servicio === 'rpa_rpm' ? 'RPA/RPM' : 
                            servicio === 'cedulas' ? 'Cédulas' : servicio}
                        </span>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                ${center.direccion ? `<p class="text-xs text-gray-600 mb-1">📍 ${center.direccion}</p>` : ''}
                ${center.telefono ? `<p class="text-xs text-gray-600 mb-1">📞 ${center.telefono}</p>` : ''}
                ${center.horarios ? `<p class="text-xs text-gray-600">🕒 ${center.horarios}</p>` : ''}
              </div>
            `
            
            marker.bindPopup(popupContent)
            marker.addTo(map)
            
            // Add click handler
            marker.on('click', () => {
              onCenterSelect?.(center)
            })
          })

          mapInstanceRef.current = map
          setMapLoaded(true)
        }
      } catch (error) {
        console.error('Error loading Leaflet:', error)
        setMapLoaded(true) // Still show the container even if map fails
      }
    }

    loadLeaflet()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [centers, onCenterSelect])

  return (
    <div className={`relative map-container ${className}`}>
      <div 
        ref={mapRef}
        className="w-full h-96 rounded-lg overflow-hidden border border-neutral-200"
      >
        {!mapLoaded && (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
              <p className="text-neutral-600">Cargando mapa...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
