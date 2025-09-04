import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getJurisdicciones } from '@/lib/jurisdicciones'

interface CentrosLayoutProps {
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
    title: `Centros de Grabado en ${jurisdiccion.nombre} - Ubicaciones y Contacto`,
    description: `Lista completa de centros de grabado de autopartes en ${jurisdiccion.nombre}. Direcciones, teléfonos, horarios y toda la información de contacto.`,
    keywords: [
      'centros grabado',
      'ubicaciones grabado',
      'grabado autopartes',
      jurisdiccion.nombre,
      'centros autorizados',
      'direcciones grabado'
    ],
    openGraph: {
      title: `Centros de Grabado en ${jurisdiccion.nombre}`,
      description: `Lista completa de centros de grabado en ${jurisdiccion.nombre}. Direcciones, teléfonos y horarios de atención.`,
      type: 'website',
      url: `https://www.grabadoautopartes.com.ar/j/${params.slug}/centros`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Centros de Grabado en ${jurisdiccion.nombre}`,
      description: `Lista completa de centros de grabado en ${jurisdiccion.nombre}.`,
    },
  }
}

export default function CentrosLayout({ children, params }: CentrosLayoutProps) {
  return <>{children}</>
}
