import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, Filter, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatPhone, getWhatsAppUrl } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Directorio de Empresas | Fumigación con Drones Argentina',
  description: 'Encuentra empresas certificadas de fumigación con drones en toda Argentina. Filtra por provincia, servicios y equipos.',
}

const provinces = [
  { slug: 'cordoba', name: 'Córdoba', companies: 12 },
  { slug: 'santa-fe', name: 'Santa Fe', companies: 8 },
  { slug: 'buenos-aires', name: 'Buenos Aires', companies: 15 },
]

const serviceTypes = [
  { slug: 'pulverizacion', name: 'Pulverización' },
  { slug: 'siembra', name: 'Siembra' },
  { slug: 'fertilizacion', name: 'Fertilización' },
  { slug: 'mapeo', name: 'Mapeo' },
]

export default async function DirectorioPage() {
  // Hardcoded companies data for now
  const companies = [
    {
      id: '1',
      slug: 'agro-drones-buenos-aires',
      name: 'Agro Drones Buenos Aires',
      description: 'Especialistas en fumigación con drones para cultivos extensivos.',
      websiteUrl: 'https://agrodronesba.com',
      phone: '+54 221 123-4567',
      email: 'info@agrodronesba.com',
      address: 'Ruta 2, Km 45',
      city: 'La Plata',
      isFeatured: true,
      services: '["fumigacion", "pulverizacion", "siembra"]',
      province: {
        id: '1',
        name: 'Buenos Aires',
        slug: 'buenos-aires'
      }
    },
    {
      id: '2',
      slug: 'drones-agricolas-sa',
      name: 'Drones Agrícolas S.A.',
      description: 'Servicios profesionales de fumigación con drones en la costa atlántica.',
      websiteUrl: null,
      phone: '+54 223 456-7890',
      email: 'contacto@dronesagricolas.com',
      address: 'Av. Constitución 1234',
      city: 'Mar del Plata',
      isFeatured: false,
      services: '["fumigacion", "fertilizacion"]',
      province: {
        id: '2',
        name: 'Buenos Aires',
        slug: 'buenos-aires'
      }
    },
    {
      id: '3',
      slug: 'precision-aerea-ba',
      name: 'Precisión Aérea B.A.',
      description: 'Tecnología de precisión para aplicaciones agrícolas.',
      websiteUrl: 'https://precisionaerea.com',
      phone: '+54 249 789-0123',
      email: 'info@precisionaerea.com',
      address: 'Ruta 226, Km 12',
      city: 'Tandil',
      isFeatured: true,
      services: '["fumigacion", "pulverizacion", "monitoreo"]',
      province: {
        id: '3',
        name: 'Buenos Aires',
        slug: 'buenos-aires'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <Breadcrumbs items={[{ label: 'Directorio' }]} />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Directorio de Empresas
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Encuentra empresas certificadas de fumigación con drones en toda Argentina. 
              Filtra por provincia, servicios y equipos disponibles.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8 space-y-4 sm:space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Buscar empresas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input placeholder="Nombre, ciudad..." />
                    <Button size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Provinces Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Provincias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {provinces.map((province) => (
                    <Link
                      key={province.slug}
                      href={`/directorio/${province.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="font-medium">{province.name}</span>
                      </div>
                      <Badge variant="secondary">{province.companies}</Badge>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Services Filter */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Servicios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {serviceTypes.map((service) => (
                    <label key={service.slug} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">{service.name}</span>
                    </label>
                  ))}
                </CardContent>
              </Card>

              {/* Ad Slot */}
              <AdSlot variant="sidebar" />
            </div>
          </div>

          {/* Companies List */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {companies.length} empresas encontradas
              </h2>
              <Button variant="outline" size="sm" className="lg:hidden min-h-[40px]">
                <Filter className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {companies.map((company) => (
                <Card key={company.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold">{company.name}</h3>
                          {company.isFeatured && (
                            <Badge className="bg-primary text-xs w-fit">Destacado</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {company.city}, {company.province.name}
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
                        
                        {/* Certifications */}
                        {company.certifications && JSON.parse(company.certifications).length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Certificaciones:</p>
                            <div className="flex flex-wrap gap-2">
                              {JSON.parse(company.certifications).map((cert: string, index: number) => (
                                <Badge key={index} variant="secondary">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        
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
                              href={getWhatsAppUrl(company.whatsapp, `Hola, me interesa conocer más sobre sus servicios de fumigación con drones.`)}
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

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>
                  Anterior
                </Button>
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
