import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, Filter, Search, Users, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  // Companies data
  const companies = [
    {
      id: '1',
      slug: 'fitosanitarios-martin-paez',
      name: 'Fitosanitarios Martín Páez',
      description: 'Especialistas en fumigación con drones para agricultura. Tecnología avanzada para aplicaciones precisas.',
      websiteUrl: 'https://fitosanitariosmartinpaez.com/servicios/fumigacion-con-dron/',
      phone: '957 202 591',
      email: null,
      address: null,
      city: 'Córdoba',
      isFeatured: true,
      services: '["Fumigación con drones", "Agricultura drones"]',
      province: {
        id: '1',
        name: 'Córdoba',
        slug: 'cordoba'
      }
    },
    {
      id: '2',
      slug: 'drones-agricolas-de-cordoba',
      name: 'Drones Agrícolas de Córdoba',
      description: 'Servicios de fumigación agrícola y análisis NDVI con tecnología de drones.',
      websiteUrl: 'https://www.instagram.com/drones_agricolas_de_cordoba/',
      phone: null,
      email: null,
      address: null,
      city: 'Córdoba',
      isFeatured: false,
      services: '["Fumigación agricultura", "NDVI", "NDVI y drones"]',
      province: {
        id: '2',
        name: 'Córdoba',
        slug: 'cordoba'
      }
    },
    {
      id: '3',
      slug: 'mb-logistica',
      name: 'MB Logística',
      description: 'Servicios de siembra y fumigación con drones. Equipados con DJI Agras T30.',
      websiteUrl: null,
      phone: null,
      email: null,
      address: null,
      city: 'Córdoba',
      isFeatured: false,
      services: '["Siembra", "Fumigación con drones", "DJI Agras T30"]',
      province: {
        id: '3',
        name: 'Córdoba',
        slug: 'cordoba'
      }
    },
    {
      id: '4',
      slug: 'agro-mision-servicios',
      name: 'Agro Misión Servicios',
      description: 'Pulverización agrícola con drones. Equipados con DJI Agras T40 para máxima eficiencia.',
      websiteUrl: null,
      phone: null,
      email: null,
      address: null,
      city: 'Buenos Aires',
      isFeatured: false,
      services: '["Pulverización agrícola con drones", "DJI Agras T40"]',
      province: {
        id: '4',
        name: 'Buenos Aires',
        slug: 'buenos-aires'
      }
    },
    {
      id: '5',
      slug: 'estudio-gd',
      name: 'Estudio G&D',
      description: 'Pulverización con drones multirotor. Servicios profesionales para el sector agrícola.',
      websiteUrl: 'https://estudiogyd.com.ar/servicioDrones',
      phone: '+54 9 249 469-7996',
      email: null,
      address: null,
      city: 'Buenos Aires',
      isFeatured: true,
      services: '["Pulverización con drones", "Drones multirotor"]',
      province: {
        id: '5',
        name: 'Buenos Aires',
        slug: 'buenos-aires'
      }
    },
    {
      id: '6',
      slug: 'uss-alarmas',
      name: 'USS Alarmas',
      description: 'Drones fumigadores con varios modelos disponibles. Soluciones integrales para agricultura.',
      websiteUrl: 'https://uss.com.ar/corporativo/drones-e-industria-4-0/drone-fumigador/',
      phone: '+54 11 4011 3000',
      email: null,
      address: null,
      city: 'Buenos Aires',
      isFeatured: false,
      services: '["Drones fumigadores", "Varios modelos"]',
      province: {
        id: '6',
        name: 'Buenos Aires',
        slug: 'buenos-aires'
      }
    },
    {
      id: '7',
      slug: 'biodrone',
      name: 'BioDrone',
      description: 'Control de plagas con drones de combustión interna. Tecnología especializada para protección de cultivos.',
      websiteUrl: null,
      phone: null,
      email: null,
      address: null,
      city: 'Santa Fe',
      isFeatured: false,
      services: '["Control de plagas con drones", "Combustión interna"]',
      province: {
        id: '7',
        name: 'Santa Fe',
        slug: 'santa-fe'
      }
    },
    {
      id: '8',
      slug: 'gd-pulverizacion',
      name: 'G&D Pulverización',
      description: 'Servicios agro con drones multirotor. Soluciones profesionales para el campo.',
      websiteUrl: 'https://www.agroads.com.ar/detalle.asp?clasi=714687',
      phone: '+54 9 249 469-7996',
      email: null,
      address: null,
      city: 'Santa Fe',
      isFeatured: true,
      services: '["Servicios agro con drones", "Drones multirotor"]',
      province: {
        id: '8',
        name: 'Santa Fe',
        slug: 'santa-fe'
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
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                          <h3 className="text-lg sm:text-xl font-semibold">{company.name}</h3>
                          {company.isFeatured && (
                            <Badge className="bg-primary text-xs w-fit relative z-10">Destacado</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-2 relative z-0">
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
                        
                        {/* Certifications - Temporarily disabled */}
                        {/* {company.certifications && JSON.parse(company.certifications).length > 0 && (
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
                        )} */}
                        
                        
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
                          {/* {company.whatsapp && (
                            <a 
                              href={getWhatsAppUrl(company.whatsapp, `Hola, me interesa conocer más sobre sus servicios de fumigación con drones.`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              WhatsApp
                            </a>
                          )} */}
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
                      
                      <div className="ml-6 flex flex-col sm:flex-row gap-2">
                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium">
                          <Link href={`/directorio/empresa/${company.slug}`} className="flex items-center justify-center">
                            <Users className="h-4 w-4 mr-2" />
                            Ver Perfil
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white font-medium">
                          <Link href={`/cotizar?empresa=${company.slug}`} className="flex items-center justify-center">
                            <Calculator className="h-4 w-4 mr-2" />
                            Cotizar
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
