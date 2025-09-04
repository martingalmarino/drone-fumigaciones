import { getJurisdiccionBySlug } from '@/lib/jurisdicciones'
import { JurisdictionLayoutClient } from './JurisdictionLayoutClient'

interface JurisdictionLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default async function JurisdictionLayout({ children, params }: JurisdictionLayoutProps) {
  const jurisdiccion = await getJurisdiccionBySlug(params.slug)
  
  console.log('Layout - Slug:', params.slug, 'Jurisdicción encontrada:', !!jurisdiccion)

  if (!jurisdiccion) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Jurisdicción no encontrada</h1>
          <p className="text-lg text-neutral-600 mb-8">La jurisdicción que buscas no existe.</p>
          <a href="/jurisdicciones" className="btn-primary">
            Ver todas las jurisdicciones
          </a>
        </div>
      </div>
    )
  }

  return (
    <JurisdictionLayoutClient jurisdiccion={jurisdiccion}>
      {children}
    </JurisdictionLayoutClient>
  )
}
