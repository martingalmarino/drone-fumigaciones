import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, Star, Award, Users, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPhone, getWhatsAppUrl } from '@/lib/utils'
import { getCompanyBySlug, getCompaniesByProvince } from '@/lib/companies'
import AdSlot from '@/components/AdSlot'
import Breadcrumbs from '@/components/Breadcrumbs'

interface CompanyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  // Get company data from centralized source
  const companyData = getCompanyBySlug(params.slug)
  
  if (!companyData) {
    return {
      title: 'Empresa no encontrada | Fumigación Drones Argentina',
      description: 'La empresa solicitada no se encuentra disponible.',
    }
  }

  // Parse services for description
  const services = companyData.services ? JSON.parse(companyData.services) : []
  const primaryService = services[0] || 'fumigación con drones'
  const description = `Especialistas en ${primaryService} en ${companyData.province}. ${companyData.name} ofrece servicios profesionales de pulverización agrícola con tecnología de drones.`

  return {
    title: `${companyData.name} | Fumigación con Drones en ${companyData.province}`,
    description: description,
    openGraph: {
      title: `${companyData.name} - Fumigación con Drones`,
      description: description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${companyData.name} - Fumigación con Drones`,
      description: description,
    },
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  // Get company from centralized data source
  const companyData = getCompanyBySlug(params.slug)
  
  if (!companyData) {
    notFound()
  }

  // Transform data to match component expectations
  const company = {
    ...companyData,
    description: `Especialistas en ${companyData.services ? JSON.parse(companyData.services)[0] : 'fumigación con drones'}.`,
    city: companyData.province,
    province: {
      name: companyData.province,
      slug: companyData.province.toLowerCase().replace(' ', '-')
    },
    certifications: '["ANAC", "SENASA"]' // Default certifications
  }

  // Parse JSON fields
  const services = company.services ? JSON.parse(company.services) : []
  const certifications = company.certifications ? JSON.parse(company.certifications) : []

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Directorio', href: '/directorio' },
            { label: company.province.name, href: `/directorio/${company.province.slug}` },
            { label: company.name }
          ]} 
        />

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                {company.isFeatured && (
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    <Star className="w-3 h-3 mr-1" />
                    Destacada
                  </Badge>
                )}
              </div>
              
              <p className="text-lg text-gray-600 mb-4">{company.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {services.map((service: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {service}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {company.phone && (
                  <Button asChild className="flex items-center gap-2">
                    <a href={`tel:${company.phone}`}>
                      <Phone className="w-4 h-4" />
                      {formatPhone(company.phone)}
                    </a>
                  </Button>
                )}
                
                {company.whatsapp && (
                  <Button asChild variant="outline" className="flex items-center gap-2">
                    <a href={getWhatsAppUrl(company.whatsapp)} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </Button>
                )}
                
                {company.websiteUrl && (
                  <Button asChild variant="outline" className="flex items-center gap-2">
                    <a href={company.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Sitio Web
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Servicios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((service: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certificaciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{company.province.name}</p>
                    <p className="text-sm text-gray-600">Argentina</p>
                  </div>
                </div>
                
                {company.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <a href={`tel:${company.phone}`} className="text-blue-600 hover:underline">
                      {formatPhone(company.phone)}
                    </a>
                  </div>
                )}
                
                {company.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <a href={`mailto:${company.email}`} className="text-blue-600 hover:underline">
                      {company.email}
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ad Slot */}
            <AdSlot variant="sidebar" />

            {/* Related Companies */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Otras empresas en {company.province.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {getCompaniesByProvince(company.province.name)
                    .filter(c => c.slug !== company.slug)
                    .slice(0, 3)
                    .map((relatedCompany) => (
                      <Link 
                        key={relatedCompany.id} 
                        href={`/directorio/empresa/${relatedCompany.slug}`}
                        className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-sm mb-1">{relatedCompany.name}</h4>
                        <p className="text-xs text-gray-600">
                          {relatedCompany.services ? JSON.parse(relatedCompany.services)[0] : 'Fumigación con drones'}
                        </p>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Ad Slot */}
        <div className="mb-8">
          <AdSlot variant="leaderboard" />
        </div>

        {/* Related Articles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Artículos Relacionados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '¿Qué es la fumigación con drones?',
                  description: 'Descubre cómo funciona la tecnología de fumigación con drones y sus beneficios.',
                  href: '/blog/que-es-fumigacion-con-drones'
                },
                {
                  title: '¿Es legal fumigar con drones en Argentina 2025?',
                  description: 'Conoce la normativa actual sobre fumigación con drones en Argentina.',
                  href: '/blog/es-legal-fumigar-con-drones-argentina-2025'
                },
                {
                  title: 'Drones vs Aviones vs Pulverizadoras',
                  description: 'Comparación completa entre diferentes métodos de fumigación agrícola.',
                  href: '/blog/drones-vs-aviones-vs-pulverizadoras'
                }
              ].map((article, index) => (
                <Link 
                  key={index}
                  href={article.href}
                  className="block p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                >
                  <h4 className="font-medium mb-2">{article.title}</h4>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}