import type { Metadata } from 'next'
import { JurisdiccionesClient } from './JurisdiccionesClient'

export const metadata: Metadata = {
  title: 'Todas las Jurisdicciones - Grabado de Autopartes Argentina',
  description: 'Lista completa de todas las jurisdicciones de Argentina con información sobre grabado de autopartes, RPA/RPM y cédulas digitales. Filtra por estado y encuentra tu jurisdicción.',
  keywords: [
    'jurisdicciones Argentina',
    'grabado autopartes por provincia',
    'estado grabado obligatorio',
    'grabado opcional',
    'no aplica grabado',
    'todas las jurisdicciones',
    'filtros grabado autopartes',
    'búsqueda jurisdicciones'
  ],
  openGraph: {
    title: 'Todas las Jurisdicciones - Grabado de Autopartes Argentina',
    description: 'Lista completa de todas las jurisdicciones de Argentina con información sobre grabado de autopartes, RPA/RPM y cédulas digitales.',
    url: 'https://www.grabadoautopartes.com.ar/jurisdicciones',
  },
  alternates: {
    canonical: 'https://www.grabadoautopartes.com.ar/jurisdicciones',
  },
}

export default function JurisdiccionesPage() {
  return <JurisdiccionesClient />
}