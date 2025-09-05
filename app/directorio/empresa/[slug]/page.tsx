import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, Star, Award, Users, Calendar, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPhone, getWhatsAppUrl } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'

interface CompanyPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CompanyPageProps): Promise<Metadata> {
  // Hardcoded company data for now
  const company = {
    name: 'Agro Drones Buenos Aires',
    description: 'Especialistas en fumigación con drones para cultivos extensivos. Servicios profesionales de pulverización agrícola con tecnología de última generación.',
    province: { name: 'Buenos Aires' }
  }

  return {
    title: `${company.name} | Fumigación con Drones en ${company.province.name}`,
    description: company.description || `Empresa especializada en fumigación con drones en ${company.province.name}. Servicios profesionales de pulverización agrícola.`,
    openGraph: {
      title: `${company.name} - Fumigación con Drones`,
      description: company.description || `Empresa especializada en fumigación con drones en ${company.province.name}`,
      type: 'website',
    },
  }
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  // Hardcoded company data for now
  const company = {
    id: '1',
    slug: params.slug,
    name: 'Agro Drones Buenos Aires',
    description: 'Especialistas en fumigación con drones para cultivos extensivos. Servicios profesionales de pulverización agrícola con tecnología de última generación.',
    websiteUrl: 'https://agrodronesba.com',
    phone: '+54 221 123-4567',
    whatsapp: '+54 221 123-4567',
    email: 'info@agrodronesba.com',
    address: 'Ruta 2, Km 45',
    city: 'La Plata',
    isFeatured: true,
    services: '["fumigacion", "pulverizacion", "siembra", "fertilizacion"]',
    certifications: '["ANAC", "SENASA", "INTA"]',
    lat: -34.9214,
    lng: -57.9544,
    province: {
      id: '1',
      name: 'Buenos Aires',
      slug: 'buenos-aires'
    }
  }

  // Parse JSON fields
  const services = company.services ? JSON.parse(company.services) : []
  const certifications = company.certifications ? JSON.parse(company.certifications) : []

  return (
    <>
      <SeoHead
        title={`${company.name} | Fumigación con Drones en ${company.province.name}`}
        description={company.description || `Empresa especializada en fumigación con drones en ${company.province.name}. Servicios profesionales de pulverización agrícola.`}
        canonical={`/directorio/empresa/${company.slug}`}
      />
      
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
                    <Badge className="bg-primary text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Destacado
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{company.city}, {company.province.name}</span>
                </div>
                
                {company.description && (
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {company.description}
                  </p>
                )}

                {/* Services */}
                {services.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Servicios:</h3>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service: string, index: number) => (
                        <Badge key={index} variant="outline">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 text-sm">
                  {company.phone && (
                    <a 
                      href={`tel:${company.phone}`}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {formatPhone(company.phone)}
                    </a>
                  )}
                  
                  {company.phone && (
                    <a 
                      href={getWhatsAppUrl(company.phone, `Hola, me interesa conocer más sobre sus servicios de fumigación con drones en ${company.province.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  )}
                  
                  {company.email && (
                    <a 
                      href={`mailto:${company.email}`}
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  )}
                  
                  {company.websiteUrl && (
                    <a 
                      href={company.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Sitio web
                    </a>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 lg:min-w-[200px]">
                <Button asChild className="w-full">
                  <Link href={`/cotizar?empresa=${company.slug}`}>
                    Solicitar Cotización
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/contacto?empresa=${company.slug}`}>
                    Contactar
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <AdSlot variant="leaderboard" className="my-8" />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Acerca de {company.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      {company.description || `Somos una empresa especializada en fumigación con drones en ${company.province.name}, 
                      ofreciendo servicios profesionales de pulverización agrícola con tecnología de vanguardia. 
                      Nuestro equipo cuenta con amplia experiencia en el sector y certificaciones que garantizan 
                      la calidad y seguridad de nuestros servicios.`}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services Detail */}
              <Card>
                <CardHeader>
                  <CardTitle>Servicios Ofrecidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.length > 0 ? services.map((service: string, index: number) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                        <span className="font-medium">{service}</span>
                      </div>
                    )) : (
                      <div className="col-span-2 text-center text-gray-500 py-8">
                        <p>Información de servicios no disponible</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Equipment */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipos y Tecnología</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-gray-500 py-8">
                    <div className="mb-4">
                      <Award className="h-12 w-12 mx-auto text-gray-400" />
                    </div>
                    <p>Información detallada de equipos disponible bajo consulta</p>
                    <p className="text-sm">Contacta para conocer más sobre nuestros drones y tecnología</p>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Area */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Área de Cobertura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-gray-500 py-8">
                    <div className="mb-4">
                      <MapPin className="h-12 w-12 mx-auto text-gray-400" />
                    </div>
                    <p className="font-medium">{company.city}, {company.province.name}</p>
                    <p className="text-sm">Cobertura en toda la provincia y zonas aledañas</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Información de la Empresa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ubicación:</span>
                    <span className="font-medium">{company.city}, {company.province.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estado:</span>
                    <span className="font-medium">{company.isFeatured ? 'Destacada' : 'Activa'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Destacada:</span>
                    <span className="font-medium">{company.isFeatured ? 'Sí' : 'No'}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              {certifications.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="h-5 w-5 mr-2" />
                      Certificaciones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {certifications.map((cert: string, index: number) => (
                        <div key={index} className="flex items-center p-2 bg-green-50 rounded">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Card */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">¿Necesitas una cotización?</h3>
                  <p className="text-sm text-green-100 mb-4">
                    Contacta directamente con {company.name} para obtener un presupuesto personalizado
                  </p>
                  <div className="space-y-2">
                    <Button asChild className="w-full bg-white text-primary hover:bg-gray-100">
                      <Link href={`/cotizar?empresa=${company.slug}`}>
                        Solicitar Cotización
                      </Link>
                    </Button>
                    {company.phone && (
                      <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                        <a href={getWhatsAppUrl(company.phone, `Hola, me interesa conocer más sobre sus servicios de fumigación con drones.`)}>
                          WhatsApp
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Reseñas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center text-gray-500 py-4">
                    <p className="text-sm">No hay reseñas disponibles aún</p>
                    <p className="text-xs">Sé el primero en dejar una reseña</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <AdSlot variant="leaderboard" className="my-12" />

          {/* Related Companies */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Otras empresas en {company.province.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* This would be populated with related companies from the same province */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Agro Drones {company.province.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">Especialistas en fumigación con drones</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{company.province.name}</span>
                    <Button asChild size="sm">
                      <Link href="/directorio/empresa/agro-drones">Ver Perfil</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
