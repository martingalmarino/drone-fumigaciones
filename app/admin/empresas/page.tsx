import { Metadata } from 'next'
import Link from 'next/link'
import { Plus, Edit, Trash2, Eye, MapPin, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatPhone } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Gestión de Empresas | Admin',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminEmpresas() {
  const companies = await prisma.company.findMany({
    include: {
      province: true,
    },
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Empresas</h1>
          <p className="text-gray-600 mt-2">
            Gestiona las empresas registradas en el directorio
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/empresas/nueva">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Empresa
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">{companies.length}</div>
            <p className="text-sm text-gray-500">Total Empresas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">
              {companies.filter(c => c.isFeatured).length}
            </div>
            <p className="text-sm text-gray-500">Destacadas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">
              {new Set(companies.map(c => c.province.name)).size}
            </div>
            <p className="text-sm text-gray-500">Provincias</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">
              {companies.filter(c => c.websiteUrl).length}
            </div>
            <p className="text-sm text-gray-500">Con Sitio Web</p>
          </CardContent>
        </Card>
      </div>

      {/* Companies List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Empresas</CardTitle>
          <CardDescription>
            {companies.length} empresas registradas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-lg">{company.name}</h3>
                    {company.isFeatured && (
                      <Badge className="bg-primary">Destacado</Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {company.city}, {company.province.name}
                  </div>
                  
                  {company.description && (
                    <p className="text-gray-600 text-sm mb-2">{company.description}</p>
                  )}
                  
                  {/* Services */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {(() => {
                      try {
                        const services = JSON.parse(company.services || '[]')
                        return services.map((service: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))
                      } catch {
                        return null
                      }
                    })()}
                  </div>
                  
                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    {company.phone && (
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {formatPhone(company.phone)}
                      </div>
                    )}
                    {company.email && (
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        {company.email}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/directorio/empresa/${company.slug}`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/admin/empresas/${company.id}/editar`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
