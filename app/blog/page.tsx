import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Blog | Guías y Artículos sobre Fumigación con Drones',
  description: 'Aprende todo sobre fumigación con drones: guías, tutoriales, normativas y casos de éxito en Argentina.',
}

const categories = [
  { slug: 'análisis', name: 'Análisis', description: 'Comparativas y análisis técnicos' },
  { slug: 'conceptos', name: 'Conceptos', description: 'Fundamentos y conceptos básicos' },
  { slug: 'tecnologia', name: 'Tecnología', description: 'Drones, equipos y avances tecnológicos' },
  { slug: 'normativa', name: 'Normativa', description: 'Regulaciones y requisitos legales' },
  { slug: 'casos', name: 'Casos de Éxito', description: 'Experiencias reales y testimonios' },
]

export default async function BlogPage() {
  // Artículos reales del blog
  const articles = [
    {
      id: '1',
      slug: 'drones-vs-aviones-vs-pulverizadoras',
      title: 'Drones vs. aviones vs. pulverizadoras terrestres: comparativa de costos y efectividad',
      category: 'análisis',
      excerpt: 'Análisis comparativo de drones, aviones y pulverizadoras terrestres en la agricultura: costos por hectárea, eficiencia, limitaciones y mejores casos de uso.',
      createdAt: new Date(),
      readingTime: 12,
    },
    {
      id: '2',
      slug: 'que-es-fumigacion-con-drones',
      title: '¿Qué es la fumigación con drones y cómo funciona?',
      category: 'conceptos',
      excerpt: 'Guía completa sobre fumigación con drones: qué es, cómo operan los drones pulverizadores, componentes, flujo de trabajo, ventajas y diferencias con la fumigación tradicional.',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 días atrás
      readingTime: 10,
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog y Guías
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprende todo sobre fumigación con drones: desde conceptos básicos 
              hasta casos de éxito reales en Argentina.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Buscar artículos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input placeholder="Buscar..." />
                    <Button size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categorías</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/blog?categoria=${category.slug}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{category.name}</div>
                      <div className="text-sm text-gray-500">{category.description}</div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Ad Slot */}
              <AdSlot variant="sidebar" />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Artículos Destacados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.slice(0, 2).map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-xl">
                        <Link 
                          href={`/blog/${article.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(article.createdAt)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readingTime || 5} min lectura
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Todos los Artículos
              </h2>
              <div className="space-y-6">
                {articles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{article.category}</Badge>
                            <span className="text-sm text-gray-500">
                              {formatDate(article.createdAt)}
                            </span>
                            <span className="text-sm text-gray-500">
                              • {article.readingTime || 5} min lectura
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            <Link 
                              href={`/blog/${article.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {article.excerpt}
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/blog/${article.slug}`}>
                              Leer más
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
