import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getJurisdicciones } from '@/lib/jurisdicciones'

interface RpaRpmLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const jurisdicciones = await getJurisdicciones()
  const jurisdiccion = jurisdicciones.find(j => j.slug === params.slug)
  
  if (!jurisdiccion) {
    return {
      title: 'Jurisdicción no encontrada',
    }
  }

  return {
    title: `RPA y RPM en ${jurisdiccion.nombre} - Registro de Autopartes`,
    description: `Información sobre RPA (Registro de Partes de Automotores) y RPM (Registro de Partes de Motos) en ${jurisdiccion.nombre}. Requisitos y procedimientos.`,
    keywords: [
      'RPA',
      'RPM',
      'registro autopartes',
      'registro partes motos',
      jurisdiccion.nombre,
      'autopartes registradas'
    ],
    openGraph: {
      title: `RPA y RPM en ${jurisdiccion.nombre}`,
      description: `Información sobre RPA y RPM en ${jurisdiccion.nombre}. Requisitos y procedimientos para el registro de autopartes.`,
      type: 'website',
      url: `https://www.grabadoautopartes.com.ar/j/${params.slug}/rpa-rpm`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `RPA y RPM en ${jurisdiccion.nombre}`,
      description: `Información sobre RPA y RPM en ${jurisdiccion.nombre}.`,
    },
  }
}

export default function RpaRpmLayout({ children, params }: RpaRpmLayoutProps) {
  return <>{children}</>
}
