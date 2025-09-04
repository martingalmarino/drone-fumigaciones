'use client'

import { usePathname } from 'next/navigation'
import Head from 'next/head'

export function AdSenseHead() {
  const pathname = usePathname()
  
  // Excluir AdSense de las páginas de términos y privacidad
  const excludePages = ['/terminos', '/privacidad']
  const shouldShowAdSense = !excludePages.includes(pathname)
  
  if (!shouldShowAdSense) {
    return null
  }
  
  return (
    <Head>
      <meta name="google-adsense-account" content="ca-pub-6771833588582297" />
    </Head>
  )
}
