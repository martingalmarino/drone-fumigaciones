import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, ArrowLeft, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatPhone, getWhatsAppUrl } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'

interface ProvinciaPageProps {
  params: { provincia: string }
}

export async function generateMetadata({ params }: ProvinciaPageProps): Promise<Metadata> {
  const province = await prisma.province.findUnique({
    where: { slug: params.provincia },
    include: {
      _count: {
        select: { companies: true }
      }
    }
  })

  if (!province) {
    return {
      title: 'Provincia no encontrada',
    }
  }

  return {
    title: `Fumigación con Drones en ${province.name} | ${province._count.companies} Empresas`,
    description: `Encuentra ${province._count.companies} empresas certificadas de fumigación con drones en ${province.name}. Servicios de pulverización, siembra y fertilización.`,
    openGraph: {
      title: `Fumigación con Drones en ${province.name}`,
      description: `${province._count.companies} empresas certificadas en ${province.name}`,
    },
  }
}

export default async function ProvinciaPage({ params }: ProvinciaPageProps) {
  const province = await prisma.province.findUnique({
    where: { slug: params.provincia },
    include: {
      companies: {
        orderBy: [
          { isFeatured: 'desc' },
          { name: 'asc' },
        ],
      },
      _count: {
        select: { companies: true }
      }
    }
  })

  if (!province) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": province.name,
    "description": `Empresas de fumigación con drones en ${province.name}`,
    "containsPlace": province.companies.map(company => ({
      "@type": "LocalBusiness",
      "name": company.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": company.city,
        "addressRegion": province.name,
        "addressCountry": "AR"
      },
      "telephone": company.phone,
      "email": company.email,
      "url": company.websiteUrl
    }))
  }

  return (
    <>
      <SeoHead
        title={`Fumigación con Drones en ${province.name}`}
        description={`Encuentra ${province._count.companies} empresas certificadas de fumigación con drones en ${province.name}. Servicios de pulverización, siembra y fertilización.`}
        canonical={`/directorio/${province.slug}`}
        jsonLd={jsonLd}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs 
              items={[
                { label: 'Directorio', href: '/directorio' },
                { label: province.name }
              ]} 
            />
            
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Fumigación con Drones en {province.name}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {province._count.companies} empresas certificadas disponibles
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href={`/cotizar?provincia=${province.slug}`}>
                    Solicitar Cotización
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/directorio">
                    Ver Todas las Provincias
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Map Section */}
          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Mapa de Empresas en {province.name}</CardTitle>
                <CardDescription>
                  Ubicación de todas las empresas certificadas en la provincia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Mapa interactivo con ubicaciones</p>
                    <p className="text-sm">(Se cargaría con Leaflet en producción)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Companies */}
          {province.companies.filter(c => c.isFeatured).length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Empresas Destacadas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {province.companies.filter(c => c.isFeatured).map((company) => (
                  <Card key={company.id} className="border-primary/20 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="text-xl">{company.name}</CardTitle>
                          <CardDescription className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            {company.city}, {province.name}
                          </CardDescription>
                        </div>
                        <Badge className="bg-primary">
                          <Star className="h-3 w-3 mr-1" />
                          Destacado
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {company.description && (
                        <p className="text-gray-600 mb-4">{company.description}</p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.services && JSON.parse(company.services).map((service: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button asChild size="sm" className="flex-1">
                          <Link href={`/directorio/empresa/${company.slug}`}>
                            Ver Perfil
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1">
                          <Link href={`/cotizar?empresa=${company.slug}`}>
                            Cotizar
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Companies */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Todas las Empresas en {province.name}
            </h2>
            <div className="space-y-6">
              {province.companies.map((company) => (
                <Card key={company.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold">{company.name}</h3>
                          {company.isFeatured && (
                            <Badge className="bg-primary">Destacado</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {company.city}, {province.name}
                        </div>
                        
                        {company.description && (
                          <p className="text-gray-600 mb-4">{company.description}</p>
                        )}
                        
                        {/* Services */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {company.services && JSON.parse(company.services).map((service: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {service}
                            </Badge>
                          ))}
                        </div>
                        
                        
                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          {company.phone && (
                            <a 
                              href={`tel:${company.phone}`}
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              {formatPhone(company.phone)}
                            </a>
                          )}
                          {company.whatsapp && (
                            <a 
                              href={getWhatsAppUrl(company.whatsapp, `Hola, me interesa conocer más sobre sus servicios de fumigación con drones en ${province.name}.`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              WhatsApp
                            </a>
                          )}
                          {company.email && (
                            <a 
                              href={`mailto:${company.email}`}
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </a>
                          )}
                          {company.websiteUrl && (
                            <a 
                              href={company.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Sitio web
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-6 flex flex-col space-y-2">
                        <Button asChild size="sm">
                          <Link href={`/directorio/empresa/${company.slug}`}>
                            Ver Perfil
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/cotizar?empresa=${company.slug}`}>
                            Solicitar Cotización
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Ad Slot */}
          <AdSlot variant="leaderboard" className="my-12" />

          {/* CTA Section */}
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿No encontraste lo que buscabas?
              </h3>
              <p className="text-lg mb-6 text-green-100">
                Solicita una cotización personalizada y te ayudaremos a encontrar el mejor proveedor
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link href="/cotizar">
                  Solicitar Cotización Gratuita
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
