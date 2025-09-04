import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, ArrowLeft, Share2, Droplets, Zap, Shield, Clock, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { formatDate } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'

interface ReviewPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const review = await prisma.review.findUnique({
    where: { slug: params.slug },
    include: { drone: true }
  })

  if (!review) {
    return {
      title: 'Review no encontrada',
    }
  }

  const droneName = review.drone ? `${review.drone.brand} ${review.drone.model}` : 'Drone'

  return {
    title: `Review: ${droneName} | Fumigación con Drones Argentina`,
    description: review.summary || `Análisis detallado del drone ${droneName} para fumigación agrícola.`,
    openGraph: {
      title: `Review: ${droneName}`,
      description: review.summary || `Análisis detallado del drone ${droneName}`,
      type: 'article',
    },
  }
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  // Datos hardcodeados para testing
  const review = {
    id: "1",
    slug: params.slug,
    title: "DJI Agras T50 - Análisis Completo",
    summary: "El DJI Agras T50 es uno de los drones agrícolas más avanzados del mercado, diseñado específicamente para aplicaciones de precisión en cultivos extensivos.",
    bodyMdx: `# DJI Agras T50 - Análisis Completo

## Introducción

El DJI Agras T50 representa la evolución más reciente en tecnología de drones agrícolas, combinando potencia, precisión y eficiencia en un solo equipo.

## Características Principales

### Capacidad de Pulverización
- **Tanque de líquidos**: 50L
- **Tanque de sólidos**: 70L
- **Ancho de trabajo**: 11m
- **Velocidad de aplicación**: 0.5-8 m/s

### Sistema de Pulverización
- **Bomba**: Bomba de diafragma de alta presión
- **Boquillas**: 8 boquillas de pulverización
- **Presión**: 0.3-0.8 MPa
- **Tamaño de gota**: 50-500 μm

### Autonomía y Rendimiento
- **Tiempo de vuelo**: 20-25 minutos
- **Área de cobertura**: 20-25 hectáreas por vuelo
- **Velocidad máxima**: 15 m/s
- **Altura de vuelo**: 1-8 metros

## Ventajas

1. **Alta Eficiencia**: Puede cubrir hasta 25 hectáreas en un solo vuelo
2. **Precisión GPS**: Sistema RTK para aplicaciones de centímetro
3. **Resistencia**: Diseño robusto para condiciones agrícolas
4. **Facilidad de Uso**: Interfaz intuitiva y sistema de vuelo automático
5. **Mantenimiento**: Sistema modular para fácil mantenimiento

## Desventajas

1. **Costo**: Inversión inicial significativa
2. **Tamaño**: Requiere espacio para almacenamiento y transporte
3. **Clima**: Limitado por condiciones climáticas adversas
4. **Regulaciones**: Requiere certificaciones y permisos especiales
5. **Mantenimiento**: Necesita técnicos especializados

## Aplicaciones Ideales

- **Cultivos extensivos**: Soja, maíz, trigo
- **Aplicaciones fitosanitarias**: Herbicidas, insecticidas, fungicidas
- **Fertilización foliar**: Aplicación de nutrientes
- **Semillas**: Siembra de precisión
- **Análisis de cultivos**: Monitoreo y mapeo

## Comparación con Competidores

| Característica | DJI Agras T50 | XAG P150 | DJI Agras T40 |
|----------------|---------------|----------|---------------|
| Capacidad líquidos | 50L | 50L | 40L |
| Capacidad sólidos | 70L | 50L | 50L |
| Ancho de trabajo | 11m | 11m | 9m |
| Tiempo de vuelo | 20-25 min | 18-22 min | 18-22 min |

## Conclusión

El DJI Agras T50 es una excelente opción para productores que buscan maximizar la eficiencia en aplicaciones agrícolas. Su capacidad superior y tecnología avanzada justifican la inversión para operaciones de gran escala.

**Puntuación: 4.5/5**`,
    rating: 5,
    createdAt: new Date(),
    drone: {
      id: "1",
      slug: "dji-agras-t50",
      brand: "DJI",
      model: "Agras T50",
      capacityL: 50,
      payloadKg: 70,
      year: 2023
    }
  }

  const droneName = review.drone ? `${review.drone.brand} ${review.drone.model}` : 'Drone'

  return (
    <>
      <SeoHead
        title={`Review: ${droneName}`}
        description={review.summary || `Análisis detallado del drone ${droneName} para fumigación agrícola.`}
        canonical={`/reviews/${review.slug}`}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Reviews', href: '/reviews' },
              { label: droneName }
            ]} 
          />

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">({review.rating}/5)</span>
              </div>
              <Badge variant="secondary">Review</Badge>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {droneName}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">{review.summary}</p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(review.createdAt)}
              </div>
            </div>
          </div>

          <AdSlot variant="banner" className="my-8" />

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Hero Image */}
              <div className="mb-8">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Droplets className="h-16 w-16 mx-auto mb-4" />
                    <p>Imagen del {droneName}</p>
                    <p className="text-sm">(Se cargaría imagen real en producción)</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: review.bodyMdx || '' }} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Rating Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Calificación General
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">{review.rating}</div>
                    <div className="flex items-center justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Basado en análisis técnico</p>
                  </div>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Especificaciones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {review.drone && (
                    <>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Marca:</span>
                        <span className="font-medium">{review.drone.brand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Modelo:</span>
                        <span className="font-medium">{review.drone.model}</span>
                      </div>
                      {review.drone.capacityL && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Capacidad:</span>
                          <span className="font-medium">{review.drone.capacityL}L</span>
                        </div>
                      )}
                      {review.drone.year && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Año:</span>
                          <span className="font-medium">{review.drone.year}</span>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">¿Te interesa este drone?</h3>
                  <p className="text-sm text-green-100 mb-4">
                    Encuentra empresas que lo utilizan
                  </p>
                  <Button asChild className="w-full bg-white text-primary hover:bg-gray-100">
                    <Link href="/directorio">
                      Ver Empresas
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          <AdSlot variant="leaderboard" className="my-12" />

          {/* Related Reviews */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews Relacionadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* This would be populated with related reviews */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">DJI Agras T30</h3>
                  <p className="text-sm text-gray-600 mb-3">Drone profesional para fumigación de gran escala</p>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.5/5</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">XAG P40</h3>
                  <p className="text-sm text-gray-600 mb-3">Solución compacta para cultivos medianos</p>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">4.2/5</span>
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
