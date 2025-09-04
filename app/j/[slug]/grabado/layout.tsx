import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getJurisdicciones } from '@/lib/jurisdicciones'

interface GrabadoLayoutProps {
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
    title: `Grabado de Autopartes en ${jurisdiccion.nombre} - Requisitos y Costos`,
    description: `Información completa sobre grabado de autopartes en ${jurisdiccion.nombre}. Requisitos, costos, turnero oficial y todo lo que necesitás saber.`,
    keywords: [
      'grabado autopartes',
      jurisdiccion.nombre,
      'requisitos grabado',
      'costo grabado',
      'turnero grabado',
      'autopartes grabadas'
    ],
    openGraph: {
      title: `Grabado de Autopartes en ${jurisdiccion.nombre}`,
      description: `Información completa sobre grabado de autopartes en ${jurisdiccion.nombre}. Requisitos, costos y turnero oficial.`,
      type: 'website',
      url: `https://www.grabadoautopartes.com.ar/j/${params.slug}/grabado`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Grabado de Autopartes en ${jurisdiccion.nombre}`,
      description: `Información completa sobre grabado de autopartes en ${jurisdiccion.nombre}.`,
    },
    alternates: {
      canonical: `https://www.grabadoautopartes.com.ar/j/${params.slug}/grabado`,
    },
  }
}

export default function GrabadoLayout({ children, params }: GrabadoLayoutProps) {
  return <>{children}</>
}
