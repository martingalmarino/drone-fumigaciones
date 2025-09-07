import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getAllCompanies, getCompanyCountByProvince } from '@/lib/companies'
import DirectorioClient from './DirectorioClient'

export const metadata: Metadata = {
  title: 'Directorio de Empresas | Fumigación con Drones Argentina',
  description: 'Encuentra empresas certificadas de fumigación con drones en toda Argentina. Filtra por provincia, servicios y equipos.',
}

const provinces = [
  { slug: 'cordoba', name: 'Córdoba', companies: getCompanyCountByProvince('Córdoba') },
  { slug: 'santa-fe', name: 'Santa Fe', companies: getCompanyCountByProvince('Santa Fe') },
  { slug: 'buenos-aires', name: 'Buenos Aires', companies: getCompanyCountByProvince('Buenos Aires') },
]

const serviceTypes = [
  { slug: 'pulverizacion', name: 'Pulverización' },
  { slug: 'siembra', name: 'Siembra' },
  { slug: 'fertilizacion', name: 'Fertilización' },
  { slug: 'mapeo', name: 'Mapeo' },
]

export default async function DirectorioPage() {
  // Companies data - ahora importado desde fuente centralizada
  const companies = getAllCompanies().map(company => ({
    id: company.id,
    slug: company.slug,
    name: company.name,
    description: `Especialistas en ${company.services ? JSON.parse(company.services)[0] : 'fumigación con drones'}.`,
    websiteUrl: company.websiteUrl || null,
    phone: company.phone || null,
    email: company.email || null,
    address: null,
    city: company.province,
    isFeatured: company.isFeatured,
    services: company.services,
    province: {
      id: company.id,
      name: company.province,
      slug: company.province.toLowerCase().replace(' ', '-')
    }
  }))

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
        <DirectorioClient 
          companies={companies}
          provinces={provinces}
          serviceTypes={serviceTypes}
        />
      </div>
    </div>
  )
}
