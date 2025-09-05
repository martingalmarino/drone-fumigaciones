import { Metadata } from 'next'
import { Building2, MapPin, Star, BookOpen, HelpCircle, Users, TrendingUp, Eye } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Fumigación Drones',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminDashboard() {
  // Hardcoded counts for dashboard
  const companiesCount = 5
  const provincesCount = 3
  const dronesCount = 8
  const reviewsCount = 12
  const articlesCount = 4
  const faqsCount = 6
  const leadsCount = 2

  // Hardcoded recent leads
  const recentLeads = [
    {
      id: '1',
      fullName: 'Juan Pérez',
      email: 'juan.perez@email.com',
      service: 'fumigacion',
      createdAt: new Date(),
    },
    {
      id: '2',
      fullName: 'María González',
      email: 'maria.gonzalez@email.com',
      service: 'pulverizacion',
      createdAt: new Date(),
    }
  ]

  const stats = [
    {
      title: 'Empresas',
      value: companiesCount,
      icon: Building2,
      description: 'Empresas registradas',
      href: '/admin/empresas',
    },
    {
      title: 'Provincias',
      value: provincesCount,
      icon: MapPin,
      description: 'Provincias con cobertura',
      href: '/admin/provincias',
    },
    {
      title: 'Drones',
      value: dronesCount,
      icon: Star,
      description: 'Modelos de drones',
      href: '/admin/drones',
    },
    {
      title: 'Reviews',
      value: reviewsCount,
      icon: Star,
      description: 'Reviews publicadas',
      href: '/admin/reviews',
    },
    {
      title: 'Artículos',
      value: articlesCount,
      icon: BookOpen,
      description: 'Artículos del blog',
      href: '/admin/articulos',
    },
    {
      title: 'FAQs',
      value: faqsCount,
      icon: HelpCircle,
      description: 'Preguntas frecuentes',
      href: '/admin/faqs',
    },
    {
      title: 'Leads',
      value: leadsCount,
      icon: Users,
      description: 'Solicitudes recibidas',
      href: '/admin/leads',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Panel de administración de Fumigación Drones Argentina
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Leads Recientes
            </CardTitle>
            <CardDescription>
              Últimas solicitudes de cotización recibidas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.length > 0 ? (
                recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{lead.fullName}</p>
                      <p className="text-xs text-gray-500">{lead.email}</p>
                      <p className="text-xs text-gray-500">
                        {lead.provinceSlug} • {lead.service}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {new Date(lead.createdAt).toLocaleDateString('es-AR')}
                      </p>
                      {lead.hectares && (
                        <p className="text-xs text-gray-500">{lead.hectares} ha</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No hay leads recientes</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="h-5 w-5 mr-2" />
              Acciones Rápidas
            </CardTitle>
            <CardDescription>
              Accesos directos a funciones comunes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <a
                href="/admin/empresas/nueva"
                className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Building2 className="h-5 w-5 mr-3 text-blue-600" />
                <div>
                  <p className="font-medium text-sm">Agregar Empresa</p>
                  <p className="text-xs text-gray-500">Registrar nueva empresa</p>
                </div>
              </a>
              
              <a
                href="/admin/articulos/nuevo"
                className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
              >
                <BookOpen className="h-5 w-5 mr-3 text-green-600" />
                <div>
                  <p className="font-medium text-sm">Nuevo Artículo</p>
                  <p className="text-xs text-gray-500">Crear artículo del blog</p>
                </div>
              </a>
              
              <a
                href="/admin/leads"
                className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <Users className="h-5 w-5 mr-3 text-purple-600" />
                <div>
                  <p className="font-medium text-sm">Ver Leads</p>
                  <p className="text-xs text-gray-500">Gestionar solicitudes</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle>Estado del Sistema</CardTitle>
          <CardDescription>
            Información sobre el estado actual del sitio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-green-800">Base de Datos</span>
              </div>
              <p className="text-xs text-green-600 mt-1">Conectada</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-green-800">Sitio Web</span>
              </div>
              <p className="text-xs text-green-600 mt-1">Operativo</p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm font-medium text-yellow-800">Última Actualización</span>
              </div>
              <p className="text-xs text-yellow-600 mt-1">
                {new Date().toLocaleDateString('es-AR')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
