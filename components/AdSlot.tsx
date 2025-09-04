'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface AdSlotProps {
  variant?: 'inArticle' | 'sidebar' | 'leaderboard' | 'mobile'
  className?: string
  children?: React.ReactNode
}

export default function AdSlot({ 
  variant = 'inArticle', 
  className,
  children 
}: AdSlotProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // No renderizar en admin ni en desarrollo
    const isAdmin = window.location.pathname.startsWith('/admin')
    const isDev = process.env.NODE_ENV === 'development'
    const hasAdClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
    
    setShouldRender(!isAdmin && !isDev && !!hasAdClient)
  }, [])

  if (!shouldRender) {
    return null
  }

  const getAdContainerClass = () => {
    switch (variant) {
      case 'sidebar':
        return 'ad-container sidebar'
      case 'leaderboard':
        return 'ad-container leaderboard'
      case 'mobile':
        return 'ad-container mobile'
      default:
        return 'ad-container'
    }
  }

  const getAdSenseAttributes = () => {
    const baseAttrs = {
      'data-ad-client': process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
      'data-ad-slot': getAdSlotId(),
      'data-ad-format': 'auto',
      'data-full-width-responsive': 'true',
    }

    return baseAttrs
  }

  const getAdSlotId = () => {
    // En producción, estos serían IDs reales de AdSense
    switch (variant) {
      case 'sidebar':
        return '1234567890'
      case 'leaderboard':
        return '0987654321'
      case 'mobile':
        return '1122334455'
      default:
        return '5566778899'
    }
  }

  return (
    <div className={cn(getAdContainerClass(), className)}>
      {children || (
        <div className="text-center text-gray-500 text-sm">
          <p>Publicidad</p>
          <div className="mt-2 text-xs">
            {/* En producción, aquí se cargaría el script de AdSense */}
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              {...getAdSenseAttributes()}
            />
          </div>
        </div>
      )}
    </div>
  )
}
