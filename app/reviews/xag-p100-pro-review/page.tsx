import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star, Clock, Calendar, User, Check, X, Droplets, Zap, Shield, MapPin, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Drone agrícola XAG P100 Pro: 50 L, 150 kg/min y radar 4D | Review 2025',
  description: 'Análisis completo del XAG P100 Pro: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas. Review detallado 2025.',
  keywords: [
    'XAG P100 Pro',
    'drone agrícola',
    'fumigación con drones',
    'pulverización agrícola',
    'drones XAG',
    'agricultura de precisión',
    'review drone agrícola',
    'análisis XAG P100 Pro',
    'esparcido agrícola',
    'radar 4D'
  ],
  openGraph: {
    title: 'Drone agrícola XAG P100 Pro: 50 L, 150 kg/min y radar 4D',
    description: 'Análisis completo del XAG P100 Pro: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgryFly'],
    tags: ['XAG P100 Pro', 'drone agrícola', 'fumigación con drones', 'review'],
  },
}

export default function XAGP100ProReviewPage() {
  const reviewData = {
    producto: "XAG P100 Pro",
    titulo: "Drone agrícola XAG P100 Pro: 50 L, 150 kg/min y radar 4D",
    rating: 5,
    fecha: new Date(),
    autor: "AgryFly",
    categoria: "Drones Agrícolas",
    tiempoLectura: 9,
    reseña_completa: {
      introduccion_contexto: "El drone agrícola XAG P100 Pro es un modelo de alto rendimiento diseñado para aplicaciones de pulverización y esparcido en grandes extensiones. Destaca por su tanque inteligente de 50 L, sistema de boquillas rotativas con flujo de hasta 22 L/min, capacidad de carga de 50 kg y sensores de evitación de obstáculos de última generación.",
      experiencia_inicial: "El P100 Pro presenta un diseño plegable tipo cuadricóptero, con brazos y hélices que permiten una reducción de tamaño significativa para facilitar su transporte (tamaño plegado de 893 × 1095 × 345 mm). Su estructura está construida en fibra de vidrio y carbono, lo que le da ligereza y resistencia.",
      rendimiento_campo: "El tanque inteligente tiene 50 L de capacidad con carga útil de hasta 50 kg. El sistema de pulverización RevoSpray 3 cuenta con flujo máximo de 22 L/min (2 bombas peristálticas) y boquillas rotativas con velocidad de disco de 1000 a 16000 RPM, produciendo gotas de 60-400 µm. El ancho de pulverización es de 5 a 10 m según altura y velocidad. El sistema de esparcido RevoCast 3 incluye tolva de 80 L, doble tornillo inteligente, caudal máximo de 150 kg/min y ancho de 3-7 m. Los sensores incluyen radar 4D (RD24912) con rango de 1,5–80 m, radar de terreno TR24S100 con altura de 0,5–100 m y gradiente de pendiente de 45°. También incorpora cámara livestream PSL (1920×1080, 30 fps) para monitoreo en vuelo. La batería B13960S (20 000 mAh, 962 Wh, 48,1 V) se recarga en ≈11 minutos con estación de enfriamiento por agua. El alcance máximo de vuelo es de ~2000 m y la velocidad máxima de 13,8 m/s. Precisión de hover con RTK: ±10 cm horizontal y vertical.",
      caracteristicas_tecnicas: [
        "Dimensiones desplegado: 2927 × 2868 × 323 mm",
        "Dimensiones plegado: 893 × 1095 × 345 mm",
        "Base motor diagonal: 2094 mm",
        "Peso: ≈46 kg con batería (sin carga)",
        "Protección: IPX6K en estructura y componentes críticos",
        "Motores: Modelo A50, 4100 W nominal cada uno",
        "Tracción máxima: ≈52 kg por motor",
        "Hélices: Modelo 5515, 55 × 15 pulgadas",
        "Sistema RevoSpray 3: flujo máximo 22 L/min",
        "Bombas: 2 peristálticas",
        "Boquillas rotativas: 1000–16000 RPM",
        "Tamaño de gota: 60–400 µm",
        "Ancho de pulverización: 5–10 m",
        "Sistema RevoCast 3: tolva 80 L",
        "Caudal esparcido máximo: 150 kg/min",
        "Ancho esparcido: 3–7 m",
        "Radar 4D RD24912: rango 1,5–80 m",
        "Radar terreno TR24S100: altura 0,5–100 m",
        "Cámara PSL: 1920×1080, 30 fps",
        "Batería B13960S: 20 000 mAh, 962 Wh",
        "Tiempo de carga: ≈11 minutos",
        "Velocidad máxima: 13,8 m/s",
        "Distancia máxima: ≈2000 m",
        "Precisión hover RTK: ±10 cm"
      ],
      pros: [
        "Tanque inteligente de 50 L con carga de hasta 50 kg",
        "Pulverización hasta 22 L/min con sistema RevoSpray 3",
        "Esparcido de sólidos hasta 150 kg/min con tolva de 80 L",
        "Radar 4D y radar de terreno para evitar obstáculos",
        "Diseño plegable compacto (≈46 kg con batería)",
        "Batería de recarga rápida en ≈11 minutos"
      ],
      contras: [
        "La autonomía de vuelo con carga completa no está detallada en ficha pública",
        "El caudal de esparcido máximo varía según tipo de grano y densidad"
      ],
      comparacion: "En comparación con drones como DJI Agras T50 (75 L) o T30 (30 L), el XAG P100 Pro ofrece 50 L de pulverización, sensores avanzados de radar 4D, sistema de esparcido de 150 kg/min y diseño más ligero (≈46 kg con batería). Destaca por su carga rápida y facilidad de transporte.",
      beneficios: "El XAG P100 Pro permite cubrir grandes superficies reduciendo recargas, con alto caudal de pulverización y esparcido. Sus radares avanzados aumentan la seguridad en vuelo y su batería con carga rápida optimiza los ciclos de trabajo.",
      recomendacion_final: "El drone agrícola XAG P100 Pro es una excelente opción para productores que buscan un equipo de alto rendimiento con tecnología avanzada. Su combinación de gran capacidad (50 L), alto caudal de esparcido (150 kg/min), sensores de radar 4D y diseño compacto lo convierten en una herramienta competitiva para agricultura de precisión en grandes extensiones."
    },
    faqs: [
      {
        pregunta: "¿Cuál es la capacidad del tanque del XAG P100 Pro?",
        respuesta: "50 L con carga útil de hasta 50 kg."
      },
      {
        pregunta: "¿Cuál es el caudal máximo de pulverización?",
        respuesta: "Hasta 22 L/min con el sistema RevoSpray 3."
      },
      {
        pregunta: "¿Qué caudal de esparcido ofrece?",
        respuesta: "Hasta 150 kg/min con el sistema RevoCast 3."
      },
      {
        pregunta: "¿Qué sensores de evitación incluye el drone?",
        respuesta: "Radar 4D (RD24912), radar de terreno TR24S100 y cámara PSL dual."
      },
      {
        pregunta: "¿Cuánto tarda en recargar la batería?",
        respuesta: "≈11 minutos usando la estación de recarga GC4000+ con refrigeración por agua."
      },
      {
        pregunta: "¿Cuál es la velocidad máxima del drone?",
        respuesta: "≈13,8 m/s, con alcance de vuelo de ~2000 m."
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs 
            items={[
              { label: 'Reviews', href: '/reviews' },
              { label: reviewData.titulo }
            ]} 
          />
          
          <div className="mt-6">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary">{reviewData.categoria}</Badge>
              <Badge variant="outline">XAG</Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {reviewData.titulo}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {reviewData.fecha.toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {reviewData.tiempoLectura} min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {reviewData.autor}
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < reviewData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-1">{reviewData.rating}/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Introducción
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {reviewData.reseña_completa.introduccion_contexto}
                </p>
              </CardContent>
            </Card>

            {/* Technical Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Especificaciones Técnicas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reviewData.reseña_completa.caracteristicas_tecnicas.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Rendimiento en Campo
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {reviewData.reseña_completa.rendimiento_campo}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Droplets className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">50L</div>
                    <div className="text-sm text-gray-600">Pulverización</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">150 kg/min</div>
                    <div className="text-sm text-gray-600">Esparcido</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">22 L/min</div>
                    <div className="text-sm text-gray-600">Caudal máx</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Battery className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">11 min</div>
                    <div className="text-sm text-gray-600">Recarga</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Ventajas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reviewData.reseña_completa.pros.map((pro, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-red-700">Desventajas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {reviewData.reseña_completa.contras.map((con, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Comparison */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Comparación con Otros Modelos
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {reviewData.reseña_completa.comparacion}
                </p>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Beneficios Clave
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {reviewData.reseña_completa.beneficios}
                </p>
              </CardContent>
            </Card>

            {/* Final Recommendation */}
            <Card className="bg-primary text-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Recomendación Final
                </h2>
                <p className="text-green-100 leading-relaxed">
                  {reviewData.reseña_completa.recomendacion_final}
                </p>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Preguntas Frecuentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {reviewData.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {faq.pregunta}
                      </h3>
                      <p className="text-gray-700">
                        {faq.respuesta}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Specs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Especificaciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pulverización:</span>
                    <span className="font-semibold">50L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esparcido:</span>
                    <span className="font-semibold">150 kg/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caudal máx:</span>
                    <span className="font-semibold">22 L/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span className="font-semibold">46 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Motores:</span>
                    <span className="font-semibold">4 × 4100W</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recarga:</span>
                    <span className="font-semibold">11 min</span>
                  </div>
                </CardContent>
              </Card>

              {/* Rating */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Calificación</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {reviewData.rating}/5
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < reviewData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Drone agrícola de alto rendimiento
                  </p>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="bg-primary text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">
                    ¿Interesado en este drone?
                  </h3>
                  <p className="text-sm text-green-100 mb-4">
                    Encuentra empresas que lo utilizan
                  </p>
                  <Button asChild variant="secondary" size="sm" className="w-full">
                    <Link href="/directorio?drone=xag-p100-pro">
                      Ver Empresas
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Ad Slot */}
              <AdSlot variant="sidebar" />
            </div>
          </div>
        </div>

        {/* Related Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Reviews Relacionadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">DJI</Badge>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href="/reviews/dji-agras-t50-review" className="hover:text-primary">
                    DJI Agras T50 - Análisis Completo
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  El drone agrícola DJI Agras T50 con 40L de pulverización y 75L de esparcido.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="secondary">XAG</Badge>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href="/reviews/xag-p150-review" className="hover:text-primary">
                    XAG P150 - Review Detallado
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Análisis del XAG P150, una alternativa sólida a los drones DJI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ad Slot */}
        <AdSlot variant="leaderboard" className="my-12" />

        {/* Back to Reviews */}
        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/reviews" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a todas las reviews
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
