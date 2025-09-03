import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Grabado de Autopartes, RPA/RPM y Cédulas - Argentina',
  description: 'Información oficial sobre grabado de autopartes, RPA/RPM y cédulas digitales por jurisdicción en Argentina. Encontrá requisitos, costos y turnos.',
  keywords: 'grabado autopartes, RPA RPM, cédulas digitales, Argentina, turnos, requisitos',
  authors: [{ name: 'Grabado Autopartes Argentina' }],
  openGraph: {
    title: 'Grabado de Autopartes, RPA/RPM y Cédulas - Argentina',
    description: 'Información oficial sobre grabado de autopartes, RPA/RPM y cédulas digitales por jurisdicción en Argentina.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Grabado Autopartes Argentina',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grabado de Autopartes, RPA/RPM y Cédulas - Argentina',
    description: 'Información oficial sobre grabado de autopartes, RPA/RPM y cédulas digitales por jurisdicción en Argentina.',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
