import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Star, Clock, Calendar, User, Check, X, Droplets, Zap, Shield, MapPin, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Drone agrícola DJI Agras T50: alto rendimiento, 40 kg pulverización y expansión de 75 L | Review 2025',
  description: 'Análisis completo del DJI Agras T50: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas. Review detallado 2025.',
  keywords: [
    'DJI Agras T50',
    'drone agrícola',
    'fumigación con drones',
    'pulverización agrícola',
    'drones DJI',
    'agricultura de precisión',
    'review drone agrícola',
    'análisis DJI Agras T50',
    'esparcido agrícola'
  ],
  openGraph: {
    title: 'Drone agrícola DJI Agras T50: alto rendimiento, 40 kg pulverización y expansión de 75 L',
    description: 'Análisis completo del DJI Agras T50: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgryFly'],
    tags: ['DJI Agras T50', 'drone agrícola', 'fumigación con drones', 'review'],
  },
}

export default function DJIAgrasT50ReviewPage() {
  const reviewData = {
    producto: "DJI Agras T50",
    titulo: "Drone agrícola DJI Agras T50: alto rendimiento, 40 kg pulverización y expansión de 75 L",
    rating: 5,
    fecha: new Date(),
    autor: "AgryFly",
    categoria: "Drones Agrícolas",
    tiempoLectura: 9,
    reseña_completa: {
      introduccion_contexto: "El drone agrícola DJI Agras T50 ofrece capacidades avanzadas en fumigación y esparcido para la agricultura de precisión. Mantiene el tanque de pulverización de 40 L y añade un sistema de esparcido de hasta 75 L con una carga interna de hasta 50 kg, mejorando significativamente la eficiencia operacional en terrenos extensos.",
      experiencia_inicial: "El diseño octocóptero con estructura dividida y motor coaxial de alta potencia garantiza estabilidad incluso con cargas pesadas. El sistema de pulverización atomizada admite ajustes entre 50–500 µm con dos boquillas (modelo LX8060SZ), y puede expandirse a cuatro para aumentar el caudal de 16 L/min a 24 L/min. El sistema de esparcido resistente distribuye hasta 108 kg/min, ideal para aplicar fertilizantes sólidos con eficiencia.",
      rendimiento_campo: "Capacidad de pulverización: 40 L. Capacidad de esparcido: 75 L (con carga interna de 50 kg). Caudal de pulverización: 16 L/min (2 boquillas), hasta 24 L/min (4 boquillas opcionales). Esparcido: hasta 108 kg/min. El drone cuenta con radar de matriz en fase frontal y trasero, detectando obstáculos en 360°, y un sistema de visión binocular que opera desde distancias de 0,5 hasta 29 m, para velocidades de vuelo de hasta 10 m/s. El control remoto modelo RM700B incorpora Wi-Fi 6, Bluetooth 5.1, GNSS (GPS, Galileo, BeiDou), una pantalla táctil de 7,02″ con resolución 1920×1200 y 1200 cd/m² de brillo; alcanza hasta 7 km de transmisión (según normativa) y opera entre –20 °C y 50 °C. La batería de vuelo DB1560 tiene una capacidad de 30 000 mAh, pesa aproximadamente 12,1 kg y puede cargarse completamente en 9–12 minutos con el generador/inversor D12000iE.",
      caracteristicas_tecnicas: [
        "Peso sin batería: 39,9 kg; con batería: 52 kg",
        "Peso máximo de despegue: 92 kg (fumigación), 103 kg (esparcido)",
        "Tanque de pulverización: 40 L",
        "Tanque de esparcido: 75 L, carga interna hasta 50 kg",
        "Caudal de pulverización: 16 L/min (2 boquillas), hasta 24 L/min (4 boquillas)",
        "Caudal de esparcido: hasta 108 kg/min",
        "Motores: 8 rotores coaxiales, 4000 W cada uno",
        "Hélices: fibra de nylon-carbono, 1375 mm",
        "Radar frontal y trasero de matriz en fase con cobertura 360°",
        "Visión binocular: detección de obstáculos 0,5–29 m",
        "Control remoto RM700B: pantalla de 7,02″ (1920×1200, 1200 cd/m²)",
        "Transmisión: hasta 7 km (según normativa)",
        "Protocolos de conectividad: Wi-Fi 6, Bluetooth 5.1, GNSS (GPS, Galileo, BeiDou)",
        "Batería de vuelo DB1560: 30 000 mAh, 12,1 kg",
        "Tiempo de carga: 9–12 minutos con generador D12000iE",
        "Precisión con RTK activado: ±10 cm horizontal y vertical"
      ],
      pros: [
        "Alta capacidad de pulverización (40 L) y esparcido (75 L/50 kg)",
        "Caudal elevado: hasta 24 L/min pulverizando, 108 kg/min esparciendo",
        "Detección de obstáculos en 360° y visión binocular para entornos complejos",
        "Control remoto avanzado con pantalla grande y múltiples protocolos de conexión",
        "Batería de gran capacidad con recarga rápida (9–12 min)"
      ],
      contras: [
        "Peso considerable (52 kg con batería), que implica logística especializada",
        "Complejidad operativa: requiere entrenamiento para aprovechar al máximo sus sistemas avanzados"
      ],
      comparacion: "A diferencia del Agras T30, el T50 conserva su tanque de 40 L pero añade un sistema de esparcido más capacitado (75 L vs opciones limitadas) y mayor caudal. Se mantiene la mejora en radar y visión binocular, junto con una batería de 30 000 mAh.",
      beneficios: "El DJI Agras T50 permite aplicar líquidos y sólidos con rapidez y precisión, cubriendo áreas amplias sin recargas frecuentes. La detección avanzada de obstáculos y la planificación RTK aseguran operaciones seguras incluso en terrenos complejos.",
      recomendacion_final: "El drone agrícola DJI Agras T50 es una opción avanzada para quienes necesitan una solución robusta, eficiente y versátil en fumigación y esparcido. Su combinación de alta capacidad, caudales elevados, sistemas de seguridad y carga rápida lo distingue como una herramienta competitiva para agricultura moderna."
    },
    faqs: [
      {
        pregunta: "¿Qué capacidad de pulverización y esparcido tiene este drone agrícola?",
        respuesta: "Pulverización: 40 L de líquido. Esparcido: tanque de 75 L con carga interna hasta 50 kg."
      },
      {
        pregunta: "¿Cuál es el caudal máximo de pulverización y esparcido?",
        respuesta: "Pulverización: hasta 24 L/min (con 4 boquillas). Esparcido: hasta 108 kg/min."
      },
      {
        pregunta: "¿Cómo gestiona los obstáculos este drone agrícola?",
        respuesta: "Utiliza radares de matriz frontal y trasera con detección multidireccional de 1–50 m, más un sistema de visión binocular (0,5–29 m, hasta 10 m/s)."
      },
      {
        pregunta: "¿Qué autonomía y recarga ofrece la batería de vuelo?",
        respuesta: "Batería DB1560 de 30 000 mAh y aproximadamente 12,1 kg; recarga completa en 9–12 minutos con generador D12000iE."
      },
      {
        pregunta: "¿Qué características tiene el control remoto?",
        respuesta: "Modelo RM700B con Wi-Fi 6, Bluetooth 5.1, GNSS (GPS/Galileo/BeiDou), pantalla táctil de 7,02″ (1920×1200, 1200 cd/m²), transmisión hasta 7 km y operación entre –20 °C y 50 °C."
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
            {/* Hero Image */}
            <Card>
              <CardContent className="p-0">
                <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-green-100 to-green-200">
                  <Image
                    src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="DJI Agras T50 fumigando en campo agrícola"
                    fill
                    className="object-cover rounded-lg"
                    priority
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 rounded-lg">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">DJI Agras T50</h3>
                      <p className="text-sm text-gray-600">Drone agrícola en acción</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                    <div className="text-2xl font-bold text-green-600">40L</div>
                    <div className="text-sm text-gray-600">Pulverización</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">75L</div>
                    <div className="text-sm text-gray-600">Esparcido</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">24 L/min</div>
                    <div className="text-sm text-gray-600">Caudal máx</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Battery className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">9-12 min</div>
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
                    <span className="font-semibold">40L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esparcido:</span>
                    <span className="font-semibold">75L/50kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caudal máx:</span>
                    <span className="font-semibold">24 L/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span className="font-semibold">52 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Motores:</span>
                    <span className="font-semibold">8 coaxiales</span>
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
                    <Link href="/directorio?drone=dji-agras-t50">
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
