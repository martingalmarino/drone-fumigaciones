import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getJurisdicciones } from '@/lib/jurisdicciones'

interface CedulasLayoutProps {
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
    title: `Cédulas Digitales en ${jurisdiccion.nombre} - Documentación Digital`,
    description: `Información sobre cédulas digitales en ${jurisdiccion.nombre}. Tipos de cédulas, requisitos y procedimientos para la documentación digital de autopartes.`,
    keywords: [
      'cédulas digitales',
      'documentación digital',
      'autopartes digitales',
      jurisdiccion.nombre,
      'cédula electrónica'
    ],
    openGraph: {
      title: `Cédulas Digitales en ${jurisdiccion.nombre}`,
      description: `Información sobre cédulas digitales en ${jurisdiccion.nombre}. Tipos de cédulas y procedimientos para documentación digital.`,
      type: 'website',
      url: `https://www.grabadoautopartes.com.ar/j/${params.slug}/cedulas`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Cédulas Digitales en ${jurisdiccion.nombre}`,
      description: `Información sobre cédulas digitales en ${jurisdiccion.nombre}.`,
    },
  }
}

export default function CedulasLayout({ children, params }: CedulasLayoutProps) {
  return <>{children}</>
}
