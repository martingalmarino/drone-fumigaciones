import { Metadata } from 'next'
import { Download, Eye, Mail, Phone, Calendar, MapPin, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatDate, formatPhone } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Gestión de Leads | Admin',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminLeads() {
  // Hardcoded leads data for now
  const leads = [
    {
      id: '1',
      fullName: 'Juan Pérez',
      email: 'juan.perez@email.com',
      phone: '+54 221 123-4567',
      provinceSlug: 'buenos-aires',
      service: 'fumigacion',
      crop: 'soja',
      hectares: 150,
      timeWindow: '7-15 días',
      details: 'Necesito fumigación para soja en 150 hectáreas',
      utm: '{"source": "google", "medium": "cpc"}',
      createdAt: new Date(),
    },
    {
      id: '2',
      fullName: 'María González',
      email: 'maria.gonzalez@email.com',
      phone: '+54 223 456-7890',
      provinceSlug: 'buenos-aires',
      service: 'pulverizacion',
      crop: 'maíz',
      hectares: 80,
      timeWindow: 'inmediata',
      details: 'Urgente: pulverización para maíz',
      utm: '{"source": "facebook", "medium": "social"}',
      createdAt: new Date(),
    }
  ]

  const stats = {
    total: leads.length,
    thisMonth: leads.filter(lead => {
      const leadDate = new Date(lead.createdAt)
      const now = new Date()
      return leadDate.getMonth() === now.getMonth() && leadDate.getFullYear() === now.getFullYear()
    }).length,
    byService: leads.reduce((acc, lead) => {
      acc[lead.service] = (acc[lead.service] || 0) + 1
      return acc
    }, {} as Record<string, number>),
    byProvince: leads.reduce((acc, lead) => {
      acc[lead.provinceSlug] = (acc[lead.provinceSlug] || 0) + 1
      return acc
    }, {} as Record<string, number>),
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-2">
            Gestiona las solicitudes de cotización recibidas
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar CSV
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
            <p className="text-sm text-gray-500">Total Leads</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">{stats.thisMonth}</div>
            <p className="text-sm text-gray-500">Este Mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">
              {Object.keys(stats.byService).length}
            </div>
            <p className="text-sm text-gray-500">Tipos de Servicio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-900">
              {Object.keys(stats.byProvince).length}
            </div>
            <p className="text-sm text-gray-500">Provincias</p>
          </CardContent>
        </Card>
      </div>

      {/* Service Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Por Tipo de Servicio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(stats.byService).map(([service, count]) => (
                <div key={service} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm capitalize">{service}</span>
                  </div>
                  <Badge variant="secondary">{count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Por Provincia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(stats.byProvince).map(([province, count]) => (
                <div key={province} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm capitalize">{province.replace('-', ' ')}</span>
                  </div>
                  <Badge variant="secondary">{count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Leads List */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Leads</CardTitle>
          <CardDescription>
            {leads.length} solicitudes recibidas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="flex items-start justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-lg">{lead.fullName}</h3>
                    <Badge variant="outline" className="capitalize">
                      {lead.service}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm">{lead.email}</span>
                    </div>
                    {lead.phone && (
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="text-sm">{formatPhone(lead.phone)}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm capitalize">{lead.provinceSlug.replace('-', ' ')}</span>
                    </div>
                    {lead.hectares && (
                      <div className="flex items-center text-gray-600">
                        <Droplets className="h-4 w-4 mr-2" />
                        <span className="text-sm">{lead.hectares} hectáreas</span>
                      </div>
                    )}
                  </div>
                  
                  {lead.crop && (
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Cultivo:</strong> {lead.crop}
                    </p>
                  )}
                  
                  {lead.details && (
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Detalles:</strong> {lead.details}
                    </p>
                  )}
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(lead.createdAt)}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
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
