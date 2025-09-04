import type { Metadata } from 'next'
import { HomePageClient } from './HomePageClient'

export const metadata: Metadata = {
  title: 'Grabado de Autopartes Argentina - Información Oficial por Jurisdicción',
  description: 'Guía completa de grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Encontrá requisitos, costos, turnos y centros por jurisdicción. CABA, Buenos Aires, Córdoba, Mendoza y más.',
  keywords: [
    'grabado autopartes Argentina',
    'información oficial grabado',
    'requisitos grabado autopartes',
    'turnos grabado',
    'costo grabado',
    'centros grabado Argentina',
    'RPA RPM Argentina',
    'cédulas digitales',
    'verificación policial',
    'jurisdicciones Argentina'
  ],
  openGraph: {
    title: 'Grabado de Autopartes Argentina - Información Oficial por Jurisdicción',
    description: 'Guía completa de grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Encontrá requisitos, costos, turnos y centros por jurisdicción.',
    url: 'https://grabado-autopartes-argentina.vercel.app',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Grabado de Autopartes Argentina - Página Principal',
      },
    ],
  },
  alternates: {
    canonical: 'https://grabadoautopartes.com.ar',
  },
}

export default function HomePage() {
  return <HomePageClient />
}