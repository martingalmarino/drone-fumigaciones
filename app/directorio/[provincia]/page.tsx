import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, ArrowLeft, Star, Users, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPhone, getWhatsAppUrl } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Map } from '@/components/Map'
import { getCompaniesByProvince } from '@/lib/companies'

interface ProvinciaPageProps {
  params: { provincia: string }
}

export async function generateMetadata({ params }: ProvinciaPageProps): Promise<Metadata> {
  // Handle URL decoding for province slugs
  const decodedProvincia = decodeURIComponent(params.provincia)
  
  // Map of common misspellings/encodings to correct slugs
  const provinceSlugMap: Record<string, string> = {
    'córdoba': 'cordoba',
    'c%C3%B3rdoba': 'cordoba',
    'buenos-aires': 'buenos-aires',
    'santa-fe': 'santa-fe'
  }
  
  // Get the correct slug
  const correctSlug = provinceSlugMap[decodedProvincia] || params.provincia

  // Get province name from slug
  const provinceNames = {
    'cordoba': 'Córdoba',
    'buenos-aires': 'Buenos Aires',
    'santa-fe': 'Santa Fe'
  }

  const provinceName = provinceNames[correctSlug as keyof typeof provinceNames] || correctSlug

  // Get companies count for this province
  const allCompanies = [
    {
      id: '1',
      slug: 'fitosanitarios-martin-paez',
      name: 'Fitosanitarios Martín Páez',
      city: 'Córdoba',
      description: 'Fumigación con drones para cultivos extensivos. Equipados con tecnología de última generación.',
      isFeatured: true,
      services: '["Fumigación con drones", "Agricultura drones"]',
      phone: '957 202 591',
      whatsapp: '957 202 591',
      email: null,
      websiteUrl: 'https://fitosanitariosmartinpaez.com/servicios/fumigacion-con-dron/',
      province: 'cordoba'
    },
    {
      id: '2',
      slug: 'drones-agricolas-de-cordoba',
      name: 'Drones Agrícolas de Córdoba',
      city: 'Córdoba',
      description: 'Fumigación agricultura con drones. Servicios de NDVI y análisis de cultivos.',
      isFeatured: true,
      services: '["Fumigación agricultura", "NDVI y drones"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: 'https://www.instagram.com/drones_agricolas_de_cordoba/',
      province: 'cordoba'
    },
    {
      id: '3',
      slug: 'mb-logistica',
      name: 'MB Logística',
      city: 'Córdoba',
      description: 'Siembra y fumigación con drones. Equipados con DJI Agras T30.',
      isFeatured: false,
      services: '["Siembra y fumigación con drones", "DJI Agras T30"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: null,
      province: 'cordoba'
    },
    {
      id: '4',
      slug: 'agro-mision-servicios',
      name: 'Agro Misión Servicios',
      city: 'Buenos Aires',
      description: 'Pulverización agrícola con drones. Equipados con DJI Agras T40 para máxima eficiencia.',
      isFeatured: false,
      services: '["Pulverización agrícola con drones", "DJI Agras T40"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: null,
      province: 'buenos-aires'
    },
    {
      id: '5',
      slug: 'estudio-gd',
      name: 'Estudio G&D',
      city: 'Buenos Aires',
      description: 'Pulverización con drones multirotor. Servicios profesionales para el sector agrícola.',
      isFeatured: true,
      services: '["Pulverización con drones", "Drones multirotor"]',
      phone: '+54 9 249 469-7996',
      whatsapp: '+54 9 249 469-7996',
      email: null,
      websiteUrl: 'https://estudiogyd.com.ar/servicioDrones',
      province: 'buenos-aires'
    },
    {
      id: '6',
      slug: 'uss-alarmas',
      name: 'USS Alarmas',
      city: 'Buenos Aires',
      description: 'Drones fumigadores con varios modelos disponibles. Servicios profesionales de seguridad y agricultura.',
      isFeatured: true,
      services: '["Drones fumigadores", "Varios modelos"]',
      phone: '+54 11 4011 3000',
      whatsapp: '+54 11 4011 3000',
      email: null,
      websiteUrl: 'https://uss.com.ar/corporativo/drones-e-industria-4-0/drone-fumigador/',
      province: 'buenos-aires'
    },
    {
      id: '7',
      slug: 'biodrone',
      name: 'BioDrone',
      city: 'Santa Fe',
      description: 'Control de plagas con drones de combustión interna. Tecnología especializada para protección de cultivos.',
      isFeatured: true,
      services: '["Control de plagas con drones", "Combustión interna"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: null,
      province: 'santa-fe'
    },
    {
      id: '8',
      slug: 'gd-pulverizacion',
      name: 'G&D Pulverización',
      city: 'Santa Fe',
      description: 'Servicios agro con drones multirotor. Soluciones profesionales para el campo.',
      isFeatured: true,
      services: '["Servicios agro con drones", "Drones multirotor"]',
      phone: '+54 9 249 469-7996',
      whatsapp: '+54 9 249 469-7996',
      email: null,
      websiteUrl: 'https://www.agroads.com.ar/detalle.asp?clasi=714687',
      province: 'santa-fe'
    }
  ]

  const provinceCompanies = allCompanies.filter(company => company.province === correctSlug)
  const companiesCount = provinceCompanies.length

  return {
    title: `Fumigación con Drones en ${provinceName} | ${companiesCount} Empresas`,
    description: `Encuentra ${companiesCount} empresas certificadas de fumigación con drones en ${provinceName}. Servicios de pulverización, siembra y fertilización.`,
    openGraph: {
      title: `Fumigación con Drones en ${provinceName}`,
      description: `${companiesCount} empresas certificadas en ${provinceName}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Fumigación con Drones en ${provinceName}`,
      description: `${companiesCount} empresas certificadas en ${provinceName}`,
    },
  }
}

export default async function ProvinciaPage({ params }: ProvinciaPageProps) {
  // Handle URL decoding for province slugs
  const decodedProvincia = decodeURIComponent(params.provincia)
  
  // Map of common misspellings/encodings to correct slugs
  const provinceSlugMap: Record<string, string> = {
    'córdoba': 'cordoba',
    'c%C3%B3rdoba': 'cordoba',
    'buenos-aires': 'buenos-aires',
    'santa-fe': 'santa-fe'
  }
  
  // Get the correct slug
  const correctSlug = provinceSlugMap[decodedProvincia] || params.provincia
  
  // If the slug is incorrect, redirect to the correct one
  if (correctSlug !== params.provincia) {
    redirect(`/directorio/${correctSlug}`)
  }

  // Province data with companies
  const allCompanies = [
    {
      id: '1',
      slug: 'fitosanitarios-martin-paez',
      name: 'Fitosanitarios Martín Páez',
      city: 'Córdoba',
      description: 'Especialistas en fumigación con drones para agricultura. Tecnología avanzada para aplicaciones precisas.',
      isFeatured: true,
      services: '["Fumigación con drones", "Agricultura drones"]',
      phone: '957 202 591',
      whatsapp: '957 202 591',
      email: null,
      websiteUrl: 'https://fitosanitariosmartinpaez.com/servicios/fumigacion-con-dron/',
      province: 'cordoba'
    },
    {
      id: '2',
      slug: 'drones-agricolas-de-cordoba',
      name: 'Drones Agrícolas de Córdoba',
      city: 'Córdoba',
      description: 'Servicios de fumigación agrícola y análisis NDVI con tecnología de drones.',
      isFeatured: false,
      services: '["Fumigación agricultura", "NDVI", "NDVI y drones"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: 'https://www.instagram.com/drones_agricolas_de_cordoba/',
      province: 'cordoba'
    },
    {
      id: '3',
      slug: 'mb-logistica',
      name: 'MB Logística',
      city: 'Córdoba',
      description: 'Servicios de siembra y fumigación con drones. Equipados con DJI Agras T30.',
      isFeatured: false,
      services: '["Siembra", "Fumigación con drones", "DJI Agras T30"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: null,
      province: 'cordoba'
    },
    {
      id: '4',
      slug: 'agro-mision-servicios',
      name: 'Agro Misión Servicios',
      city: 'Buenos Aires',
      description: 'Pulverización agrícola con drones. Equipados con DJI Agras T40 para máxima eficiencia.',
      isFeatured: false,
      services: '["Pulverización agrícola con drones", "DJI Agras T40"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: null,
      province: 'buenos-aires'
    },
    {
      id: '5',
      slug: 'estudio-gd',
      name: 'Estudio G&D',
      city: 'Buenos Aires',
      description: 'Pulverización con drones multirotor. Servicios profesionales para el sector agrícola.',
      isFeatured: true,
      services: '["Pulverización con drones", "Drones multirotor"]',
      phone: '+54 9 249 469-7996',
      whatsapp: '+54 9 249 469-7996',
      email: null,
      websiteUrl: 'https://estudiogyd.com.ar/servicioDrones',
      province: 'buenos-aires'
    },
    {
      id: '6',
      slug: 'uss-alarmas',
      name: 'USS Alarmas',
      city: 'Buenos Aires',
      description: 'Drones fumigadores con varios modelos disponibles. Soluciones integrales para agricultura.',
      isFeatured: false,
      services: '["Drones fumigadores", "Varios modelos"]',
      phone: '+54 11 4011 3000',
      whatsapp: '+54 11 4011 3000',
      email: null,
      websiteUrl: 'https://uss.com.ar/corporativo/drones-e-industria-4-0/drone-fumigador/',
      province: 'buenos-aires'
    },
    {
      id: '7',
      slug: 'biodrone',
      name: 'BioDrone',
      city: 'Santa Fe',
      description: 'Control de plagas con drones de combustión interna. Tecnología especializada para protección de cultivos.',
      isFeatured: false,
      services: '["Control de plagas con drones", "Combustión interna"]',
      phone: null,
      whatsapp: null,
      email: null,
      websiteUrl: null,
      province: 'santa-fe'
    },
    {
      id: '8',
      slug: 'gd-pulverizacion',
      name: 'G&D Pulverización',
      city: 'Santa Fe',
      description: 'Servicios agro con drones multirotor. Soluciones profesionales para el campo.',
      isFeatured: true,
      services: '["Servicios agro con drones", "Drones multirotor"]',
      phone: '+54 9 249 469-7996',
      whatsapp: '+54 9 249 469-7996',
      email: null,
      websiteUrl: 'https://www.agroads.com.ar/detalle.asp?clasi=714687',
      province: 'santa-fe'
    }
  ]

  // Filter companies by province
  console.log('Debug - params.provincia:', params.provincia)
  console.log('Debug - decodedProvincia:', decodedProvincia)
  console.log('Debug - correctSlug:', correctSlug)
  console.log('Debug - allCompanies provinces:', allCompanies.map(c => c.province))
  
  const provinceCompanies = allCompanies.filter(company => company.province === correctSlug)
  console.log('Debug - provinceCompanies count:', provinceCompanies.length)
  
  // Get province name
  const provinceNames = {
    'cordoba': 'Córdoba',
    'buenos-aires': 'Buenos Aires',
    'santa-fe': 'Santa Fe'
  }

  const province = {
    id: '1',
    name: provinceNames[correctSlug as keyof typeof provinceNames] || correctSlug,
    slug: correctSlug,
    companies: provinceCompanies,
    companiesCount: provinceCompanies.length,
  }

  // Transform companies data for map (add coordinates)
  const mapCenters = provinceCompanies.map((company, index) => {
    const defaultCoords = getDefaultCoordinates(correctSlug)
    // Add slight offset for multiple companies in same province
    const offset = index * 0.01
    return {
      id: company.id,
      nombre: company.name,
      lat: defaultCoords.lat + offset,
      lng: defaultCoords.lng + offset,
      servicios: company.services ? JSON.parse(company.services) : [],
      horarios: 'Lunes a Viernes 8:00-18:00',
      telefono: company.phone || undefined,
      direccion: company.city,
      jurisdiccion: province.name
    }
  })

  // Default coordinates for each province
  function getDefaultCoordinates(provinceSlug: string) {
    const coordinates = {
      'cordoba': { lat: -31.4201, lng: -64.1888 },
      'buenos-aires': { lat: -34.6037, lng: -58.3816 },
      'santa-fe': { lat: -31.6333, lng: -60.7000 }
    }
    return coordinates[provinceSlug as keyof typeof coordinates] || { lat: -34.6037, lng: -58.3816 }
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
        description={`Encuentra ${province.companiesCount} empresas certificadas de fumigación con drones en ${province.name}. Servicios de pulverización, siembra y fertilización.`}
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
                {province.companiesCount} empresas certificadas disponibles
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
                <Map 
                  centers={mapCenters}
                  className="h-96"
                />
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
                      
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium">
                          <Link href={`/directorio/empresa/${company.slug}`} className="flex items-center justify-center">
                            <Users className="h-4 w-4 mr-2" />
                            Ver Perfil
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white font-medium">
                          <Link href={`/cotizar?empresa=${company.slug}`} className="flex items-center justify-center">
                            <Calculator className="h-4 w-4 mr-2" />
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
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold">{company.name}</h3>
                        {company.isFeatured && (
                          <Badge className="bg-primary w-fit">Destacado</Badge>
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
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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
                      
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium">
                          <Link href={`/directorio/empresa/${company.slug}`} className="flex items-center justify-center">
                            <Users className="h-4 w-4 mr-2" />
                            Ver Perfil
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white font-medium">
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
