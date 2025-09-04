import { getJurisdiccionBySlug } from '@/lib/jurisdicciones'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { JurisdictionTabs } from '@/components/JurisdictionTabs'

interface JurisdictionLayoutProps {
  children: React.ReactNode
  params: { slug: string }
}

export default async function JurisdictionLayout({ children, params }: JurisdictionLayoutProps) {
  const jurisdiccion = await getJurisdiccionBySlug(params.slug)

  if (!jurisdiccion) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/jurisdicciones" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-4 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Volver a jurisdicciones
          </Link>
        </div>

        {/* Interactive Tabs Component */}
        <JurisdictionTabs jurisdiccion={jurisdiccion} slug={params.slug} />

        {/* Content */}
        {children}
      </div>
    </div>
  )
}
