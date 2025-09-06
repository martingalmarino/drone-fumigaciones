import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star, Clock, Calendar, User, Check, X, Droplets, Zap, Shield, MapPin, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Drone agrícola DJI Agras T20P: compacto, 20 L de pulverización y sensores avanzados | Review 2025',
  description: 'Análisis completo del DJI Agras T20P: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas. Review detallado 2025.',
  keywords: [
    'DJI Agras T20P',
    'drone agrícola',
    'fumigación con drones',
    'pulverización agrícola',
    'drones DJI',
    'agricultura de precisión',
    'review drone agrícola',
    'análisis DJI Agras T20P',
    'esparcido agrícola'
  ],
  openGraph: {
    title: 'Drone agrícola DJI Agras T20P: compacto, 20 L de pulverización y sensores avanzados',
    description: 'Análisis completo del DJI Agras T20P: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgryFly'],
    tags: ['DJI Agras T20P', 'drone agrícola', 'fumigación con drones', 'review'],
  },
}

export default function DJIAgrasT20PReviewPage() {
  const reviewData = {
    producto: "DJI Agras T20P",
    titulo: "Drone agrícola DJI Agras T20P: compacto, 20 L de pulverización y sensores avanzados",
    rating: 4,
    fecha: new Date(),
    autor: "AgryFly",
    categoria: "Drones Agrícolas",
    tiempoLectura: 8,
    reseña_completa: {
      introduccion_contexto: "El drone agrícola DJI Agras T20P es un equipo de aplicación aérea diseñado para tareas de pulverización y esparcido en agricultura de precisión. Integra un sistema dual atomizado de pulverización de 20 L, tanque de esparcido de 35 L (25 kg de carga interna), radar omnidireccional de matriz en fase y visión binocular, junto con un control remoto de 7,02 pulgadas y un ecosistema de carga rápida.",
      experiencia_inicial: "El T20P presenta una configuración de cuatro rotores con una distancia diagonal de 2190 mm y un diseño plegable que facilita el transporte y el despliegue en campo. El peso total es de 26 kg sin batería y 32 kg con batería. Las dimensiones son 2800 × 3125 × 640 mm (brazos y hélices desplegados), 1565 × 1915 × 640 mm (brazos desplegados y hélices plegadas) y 1077 × 620 × 670 mm (brazos y hélices plegados).",
      rendimiento_campo: "El tiempo de flotación (hover) sin carga es de 14,5 minutos con batería de 13 000 mAh y peso de despegue de 32 kg. Con carga completa de pulverización (peso de despegue 52 kg), el tiempo de flotación es de 7 minutos; con carga completa de esparcido (peso de despegue 58 kg), el tiempo de flotación es de 6 minutos. El radio máximo de vuelo configurable es de 2000 m y la resistencia máxima al viento es de 6 m/s.",
      caracteristicas_tecnicas: [
        "Peso sin batería: 26 kg; con batería: 32 kg",
        "Peso máximo de despegue: 52 kg (pulverización), 58 kg (esparcido)",
        "Distancia diagonal: 2190 mm",
        "Sistema de pulverización dual atomizado: 20 L",
        "Tanque de esparcido: 35 L con 25 kg de carga interna",
        "Caudal de pulverización: 12 L/min (6 L/min × 2 bombas)",
        "Ancho efectivo: 7 m (altitud ~2,5 m, velocidad 6,5 m/s)",
        "Tamaño de gota: 50–500 μm",
        "Radar omnidireccional de matriz en fase (frontal/superior)",
        "Radar posterior e inferior con detección 1,5–50 m",
        "Visión binocular: rango 0,4–25 m, velocidad ≤ 10 m/s",
        "Control remoto RM700: pantalla 7,02\" (1920×1200, 1200 cd/m²)",
        "Conectividad: O3 Pro (hasta 7 km FCC), Wi-Fi 6, Bluetooth 5.1",
        "Batería BAX601: 13 000 mAh, 52,22 V, ~6 kg",
        "Carga rápida: 9–12 min con generador D6000i"
      ],
      pros: [
        "Sistema de pulverización dual atomizado de 20 L con caudal máximo de 12 L/min (6 L/min × 2).",
        "Tanque de esparcido de 35 L con 25 kg de carga interna y ancho de 7 m.",
        "Radar omnidireccional de matriz en fase (frontal/superior) y radar posterior/inferior, más visión binocular (0,4–25 m).",
        "Control remoto RM700 con pantalla de 7,02\" (1920 × 1200; 1200 cd/m²) y conectividad Wi-Fi 6/Bluetooth 5.1.",
        "Ecosistema de carga rápida: generador D6000i y cargador CSX602-4500 (9–12 min por batería)."
      ],
      contras: [
        "Tiempos de flotación con carga completa limitados a minutos (7 min pulverización; 6 min esparcido, condiciones de prueba).",
        "Para carga rápida se requiere el generador/inversor D6000i (equipo adicional)."
      ],
      comparacion: "Frente a drones agrícolas de mayor capacidad (p. ej., series con 30–40 L de pulverización), el T20P prioriza un formato compacto (20 L) manteniendo sensores avanzados (radar omnidireccional y visión binocular) y un sistema de esparcido de 35 L (25 kg de carga interna), con tiempos de carga de batería de 9–12 minutos mediante el D6000i.",
      beneficios: "Permite realizar pulverización y esparcido con control de tamaño de gota (50–500 μm) y monitoreo preciso del material aplicado, apoyado por sistemas de evitación de obstáculos y seguimiento del terreno. El diseño y los accesorios de carga rápida favorecen ciclos operativos continuos.",
      recomendacion_final: "El drone agrícola DJI Agras T20P es una excelente opción para productores que buscan un equipo compacto pero con tecnología avanzada. Su balance entre capacidad (20 L pulverización, 35 L esparcido) y características de seguridad (radar omnidireccional, visión binocular) lo convierte en una herramienta versátil para agricultura de precisión en superficies medianas."
    },
    faqs: [
      {
        pregunta: "¿Cuál es la capacidad de pulverización del DJI Agras T20P?",
        respuesta: "20 L de capacidad en la caja de operación, con carga operativa de 20 kg."
      },
      {
        pregunta: "¿Qué caudal máximo alcanza el sistema de pulverización?",
        respuesta: "Hasta 12 L/min utilizando dos bombas/aspersores (6 L/min × 2)."
      },
      {
        pregunta: "¿Qué capacidad y características tiene el sistema de esparcido?",
        respuesta: "Tanque de 35 L con carga interna máxima de 25 kg; ancho de esparcido de 7 m; materiales de 0,5 a 5 mm."
      },
      {
        pregunta: "¿Qué sensores incluye para evitar obstáculos y seguir el terreno?",
        respuesta: "Radar de matriz en fase omnidireccional (frontal y superior), radar posterior e inferior, y sistema de visión binocular (0,4–25 m; velocidad sensible ≤ 10 m/s)."
      },
      {
        pregunta: "¿Qué especificaciones tiene el control remoto?",
        respuesta: "Modelo RM700 con pantalla de 7,02\" (1920 × 1200; 1200 cd/m²), O3 Pro (hasta 7 km FCC), Wi-Fi 6, Bluetooth 5.1 y posicionamiento GPS/Galileo/BeiDou."
      },
      {
        pregunta: "¿Cómo es el sistema de carga de baterías?",
        respuesta: "Con el generador/inversor D6000i y el cargador CSX602-4500, una batería se carga completamente en 9–12 minutos."
      },
      {
        pregunta: "¿Cuáles son los tiempos de flotación (hover) de referencia?",
        respuesta: "14,5 minutos sin carga (peso 32 kg); 7 minutos con carga completa de pulverización (peso 52 kg); 6 minutos con carga completa de esparcido (peso 58 kg)."
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
              <Badge variant="outline">DJI</Badge>
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
                    <div className="text-2xl font-bold text-green-600">20L</div>
                    <div className="text-sm text-gray-600">Pulverización</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">35L</div>
                    <div className="text-sm text-gray-600">Esparcido</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">12 L/min</div>
                    <div className="text-sm text-gray-600">Caudal máx</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Battery className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">14.5 min</div>
                    <div className="text-sm text-gray-600">Sin carga</div>
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
                    <span className="font-semibold">20L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esparcido:</span>
                    <span className="font-semibold">35L/25kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caudal máx:</span>
                    <span className="font-semibold">12 L/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span className="font-semibold">32 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Motores:</span>
                    <span className="font-semibold">4 rotores</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recarga:</span>
                    <span className="font-semibold">9-12 min</span>
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
                    Drone agrícola compacto y eficiente
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
                    <Link href="/directorio?drone=dji-agras-t20p">
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
                  <Link href="/reviews/dji-agras-t30-review" className="hover:text-primary">
                    DJI Agras T30 - Análisis Completo
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  El drone agrícola DJI Agras T30 con 30L de capacidad y radar omnidireccional.
                </p>
              </CardContent>
            </Card>

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
                    DJI Agras T50 - Review Detallado
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Análisis del DJI Agras T50, el drone agrícola de mayor capacidad de DJI.
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
