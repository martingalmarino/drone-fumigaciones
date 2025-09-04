import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa de Centros - Grabado de Autopartes Argentina',
  description: 'Mapa interactivo con todos los centros de grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Encuentra el centro más cercano a tu ubicación.',
  keywords: [
    'mapa centros grabado',
    'centros grabado autopartes',
    'ubicación centros',
    'mapa interactivo',
    'centros RPA RPM',
    'centros cédulas digitales'
  ],
  openGraph: {
    title: 'Mapa de Centros - Grabado de Autopartes Argentina',
    description: 'Mapa interactivo con todos los centros de grabado de autopartes en Argentina.',
    url: 'https://www.grabadoautopartes.com.ar/mapa',
  },
}

export default function MapaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
