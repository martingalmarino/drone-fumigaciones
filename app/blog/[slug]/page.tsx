import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate, generateMetaDescription } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'

interface ArticlePageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  // Hardcoded article for now
  const article = {
    title: 'Fumigación con Drones: Guía Completa 2024',
    excerpt: 'Descubre todo sobre la fumigación con drones en Argentina. Tecnología, regulaciones, costos y beneficios.',
  }

  return {
    title: article.title,
    description: generateMetaDescription(article.excerpt),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // Hardcoded article for now
  const article = {
    id: '1',
    slug: params.slug,
    title: 'Fumigación con Drones: Guía Completa 2024',
    excerpt: 'Descubre todo sobre la fumigación con drones en Argentina. Tecnología, regulaciones, costos y beneficios.',
    category: 'tecnologia',
    bodyMdx: `# Fumigación con Drones: Guía Completa 2024

## Introducción

La fumigación con drones ha revolucionado la agricultura moderna, ofreciendo una alternativa eficiente y precisa a los métodos tradicionales de aplicación de productos fitosanitarios.

## ¿Cómo funciona?

Los drones agrícolas están equipados con:
- Sistemas de pulverización de alta precisión
- GPS y sistemas de navegación autónoma
- Sensores para monitoreo en tiempo real
- Capacidad de carga variable según el modelo

## Ventajas principales

1. **Precisión**: Aplicación exacta en las zonas necesarias
2. **Eficiencia**: Menor tiempo de aplicación
3. **Seguridad**: Reducción del contacto humano con productos químicos
4. **Cobertura**: Acceso a terrenos difíciles
5. **Sostenibilidad**: Menor uso de productos químicos

## Regulaciones en Argentina

En Argentina, la fumigación con drones está regulada por:
- ANAC (Administración Nacional de Aviación Civil)
- SENASA (Servicio Nacional de Sanidad y Calidad Agroalimentaria)
- INTA (Instituto Nacional de Tecnología Agropecuaria)

## Costos y beneficios

Los costos varían según:
- Tamaño del área a fumigar
- Tipo de cultivo
- Productos a aplicar
- Ubicación geográfica

## Conclusión

La fumigación con drones representa el futuro de la agricultura de precisión, ofreciendo soluciones eficientes y sostenibles para los productores argentinos.`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  // Hardcoded related articles
  const relatedArticles = [
    {
      id: '2',
      slug: 'regulaciones-drones-argentina',
      title: 'Regulaciones para Drones Agrícolas en Argentina',
      excerpt: 'Todo lo que necesitas saber sobre las normativas vigentes.',
      category: 'normativa',
      createdAt: new Date(),
    },
    {
      id: '3',
      slug: 'costos-fumigacion-drones',
      title: 'Costos de Fumigación con Drones 2024',
      excerpt: 'Análisis detallado de precios y rentabilidad.',
      category: 'economia',
      createdAt: new Date(),
    },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": article.createdAt.toISOString(),
    "dateModified": article.updatedAt.toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Fumigación Drones Argentina"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fumigación Drones Argentina",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_APP_URL}/logo.png`
      }
    }
  }

  return (
    <>
      <SeoHead
        title={article.title}
        description={article.excerpt}
        canonical={`/blog/${article.slug}`}
        ogType="article"
        jsonLd={jsonLd}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Breadcrumbs 
              items={[
                { label: 'Blog', href: '/blog' },
                { label: article.title }
              ]} 
            />
            
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(article.createdAt)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  5 min lectura
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {article.excerpt}
            </p>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Contenido</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <nav className="toc">
                      <a href="#introduccion" className="active">Introducción</a>
                      <a href="#como-funciona">¿Cómo funciona?</a>
                      <a href="#ventajas">Ventajas principales</a>
                      <a href="#faq">Preguntas frecuentes</a>
                    </nav>
                  </CardContent>
                </Card>
                
                <AdSlot variant="sidebar" className="mt-6" />
              </div>
            </div>

            {/* Article Content */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    {/* This would be rendered from MDX in a real implementation */}
                    <div dangerouslySetInnerHTML={{ __html: article.bodyMdx.replace(/\n/g, '<br>') }} />
                  </div>
                </CardContent>
              </Card>

              {/* Ad Slot */}
              <AdSlot variant="inArticle" className="my-8" />

              {/* CTA Section */}
              <Card className="mt-8 bg-primary text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    ¿Necesitas fumigación con drones?
                  </h3>
                  <p className="text-lg mb-6 text-green-100">
                    Encuentra empresas certificadas en tu provincia
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="secondary" size="lg">
                      <Link href="/directorio">
                        Ver Directorio
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg">
                      <Link href="/cotizar">
                        Solicitar Cotización
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Artículos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Card key={relatedArticle.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit">
                        {relatedArticle.category}
                      </Badge>
                      <CardTitle className="text-lg">
                        <Link 
                          href={`/blog/${relatedArticle.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(relatedArticle.createdAt)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
