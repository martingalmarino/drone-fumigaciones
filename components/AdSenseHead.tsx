'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function AdSenseHead() {
  const pathname = usePathname()
  
  // Excluir AdSense de las páginas de términos y privacidad
  const excludePages = ['/terminos', '/privacidad']
  const shouldShowAdSense = !excludePages.includes(pathname)
  
  useEffect(() => {
    if (shouldShowAdSense) {
      // Crear el meta tag dinámicamente
      const metaTag = document.createElement('meta')
      metaTag.name = 'google-adsense-account'
      metaTag.content = 'ca-pub-6771833588582297'
      
      // Agregar al head si no existe
      const existingTag = document.querySelector('meta[name="google-adsense-account"]')
      if (!existingTag) {
        document.head.appendChild(metaTag)
      }
    } else {
      // Remover el meta tag si existe
      const existingTag = document.querySelector('meta[name="google-adsense-account"]')
      if (existingTag) {
        existingTag.remove()
      }
    }
  }, [shouldShowAdSense])
  
  return null
}
