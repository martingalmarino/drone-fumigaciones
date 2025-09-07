import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star, Clock, Calendar, User, Check, X, Droplets, Zap, Shield, MapPin, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Drone agrícola XAG V40: 16 L, 40 kg/min y doble rotor inclinable | Review 2025',
  description: 'Análisis completo del XAG V40: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas. Review detallado 2025.',
  keywords: [
    'XAG V40',
    'drone agrícola',
    'fumigación con drones',
    'pulverización agrícola',
    'drones XAG',
    'agricultura de precisión',
    'review drone agrícola',
    'análisis XAG V40',
    'esparcido agrícola',
    'doble rotor inclinable'
  ],
  openGraph: {
    title: 'Drone agrícola XAG V40: 16 L, 40 kg/min y doble rotor inclinable',
    description: 'Análisis completo del XAG V40: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgriFly'],
    tags: ['XAG V40', 'drone agrícola', 'fumigación con drones', 'review'],
  },
}

export default function XAGV40ReviewPage() {
  const reviewData = {
    producto: "XAG V40",
    titulo: "Drone agrícola XAG V40: 16 L, 40 kg/min y doble rotor inclinable",
    rating: 4,
    fecha: new Date(),
    autor: "AgriFly",
    categoria: "Drones Agrícolas",
    tiempoLectura: 7,
    reseña_completa: {
      introduccion_contexto: "El drone agrícola XAG V40 es un equipo con configuración de doble rotor inclinable (tilting twin-rotor), diseñado para tareas de pulverización, difusión de granulado y mapeo en agricultura de precisión. Se destaca por su estructura plegable, posicionamiento RTK centimétrico, sensores de obstáculo multidireccionales, carga rápida de batería y facilidad de transporte.",
      experiencia_inicial: "El V40 permite reducir su volumen de manipulación a un tercio gracias a su diseño modular de brazos y hélices plegables. Su estructura está construida en polímero reforzado con carbono, lo que le proporciona ligereza y resistencia, además de protección IP67 en su cuerpo principal. Incorpora el sistema de control de vuelo SuperX4, con algoritmos IA para vuelo autónomo, planificación de prescripción de mapas RealTerra y cambio rápido de modo entre pulverización, difusión de semillas y mapeo.",
      rendimiento_campo: "El tanque de pulverización es de 16 L con detección de nivel de líquido. El caudal de pulverización alcanza hasta 10 L/min con boquillas centrífugas y bomba peristáltica. El ancho efectivo de pulverización se sitúa entre 5 y 10 m, según altura y velocidad de vuelo. El sistema de esparcido permite hasta 40 kg/min de distribución de granulado mediante discos giratorios dobles. El peso de despegue nominal es de ~43,6 kg (modo pulverización) y ~48 kg (modo difusión). El tiempo de vuelo es de ~20 min sin carga y ~11 min en misiones de pulverización completas. La velocidad máxima de vuelo es de 8–10 m/s, con alcance de ~2000 m. El sistema de radar multidireccional incluye radar de imagen 4D y radar de terreno, con posicionamiento RTK de precisión ±10 cm.",
      caracteristicas_tecnicas: [
        "Tanque de pulverización: 16 L con sensor de nivel integrado",
        "Caudal de pulverización: Hasta 10 L/min",
        "Ancho de pulverización: 5–10 m",
        "Esparcido: Hasta 40 kg/min con discos giratorios",
        "Peso de despegue: ~43,6 kg (pulverización), ~48 kg (difusión)",
        "Tiempo de vuelo: ~20 min sin carga, ~11 min con pulverización completa",
        "Velocidad máxima: 8–10 m/s",
        "Alcance máximo: ≈2000 m",
        "Estructura: Doble rotor inclinable en V, brazos y hélices plegables",
        "Protección: IP67 en estructura y componentes principales",
        "Posicionamiento: RTK centimétrico ±10 cm",
        "Control de vuelo: SuperX4 con IA, integración con RealTerra",
        "Batería: Modelo B13960S, 962 Wh, recarga ≈11 min con estación enfriada por agua",
        "Sensores: Radar de imagen 4D y radar de terreno",
        "Modos: Pulverización, difusión de semillas y mapeo"
      ],
      pros: [
        "Caudal de pulverización de hasta 10 L/min con tanque de 16 L",
        "Sistema de esparcido de granulado con capacidad de hasta 40 kg/min",
        "Diseño de doble rotor inclinable que mejora penetración en vegetación",
        "Peso de despegue razonable y autonomía de hasta 20 min sin carga",
        "Recarga rápida de batería (~11 min) con estación refrigerada por agua",
        "Sensores de obstáculo multidireccionales y RTK centimétrico"
      ],
      contras: [
        "Autonomía limitada con carga completa de pulverización (~11 min)",
        "No especificada autonomía exacta en modo de esparcido con carga total",
        "Caudal menor que drones de mayor capacidad como el XAG P100 Pro"
      ],
      comparacion: "El XAG V40 ofrece menor capacidad de tanque que el XAG P100 Pro (16 L vs 50 L), pero compensa con un diseño plegable más compacto, buena velocidad y sistemas avanzados de radar. Frente a algunos modelos DJI Agras, el V40 tiene menos capacidad de líquido, pero cuenta con tiempos de recarga rápidos y estructura más ligera.",
      beneficios: "Facilita tareas de pulverización, siembra y mapeo en parcelas medianas con rapidez de despliegue y recarga. El diseño de doble rotor inclinable mejora la penetración de gotas en vegetación, mientras que los sistemas RTK y radares aseguran precisión y seguridad en las operaciones.",
      recomendacion_final: "El drone agrícola XAG V40 es una excelente opción para productores que buscan un equipo versátil y compacto para parcelas medianas. Su diseño de doble rotor inclinable, sistemas avanzados de radar y RTK, junto con su capacidad de realizar múltiples tareas (pulverización, esparcido y mapeo), lo convierten en una herramienta eficiente para agricultura de precisión."
    },
    faqs: [
      {
        pregunta: "¿Cuál es la capacidad de pulverización del XAG V40?",
        respuesta: "16 L con sensor de nivel líquido."
      },
      {
        pregunta: "¿Qué caudal de pulverización alcanza?",
        respuesta: "Hasta 10 L/min con bomba peristáltica y boquillas centrífugas."
      },
      {
        pregunta: "¿Qué ancho de pulverización es posible?",
        respuesta: "Entre 5 y 10 m, según altura y velocidad de vuelo."
      },
      {
        pregunta: "¿Cuál es la capacidad de esparcido de granulado?",
        respuesta: "Hasta 40 kg/min con discos de esparcido dobles."
      },
      {
        pregunta: "¿Cuánto tarda la batería en recargarse?",
        respuesta: "≈11 minutos con estación de recarga refrigerada por agua (modelo GC4000+)."
      },
      {
        pregunta: "¿Cuál es la autonomía en hover?",
        respuesta: "~20 min sin carga y ~11 min en misión de pulverización con tanque lleno."
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
                    <div className="text-2xl font-bold text-green-600">16L</div>
                    <div className="text-sm text-gray-600">Pulverización</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">40 kg/min</div>
                    <div className="text-sm text-gray-600">Esparcido</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">10 L/min</div>
                    <div className="text-sm text-gray-600">Caudal máx</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Battery className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">20 min</div>
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
                    <span className="font-semibold">16L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esparcido:</span>
                    <span className="font-semibold">40 kg/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caudal máx:</span>
                    <span className="font-semibold">10 L/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso:</span>
                    <span className="font-semibold">43.6 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Diseño:</span>
                    <span className="font-semibold">Doble rotor V</span>
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
                    Drone agrícola versátil y compacto
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
                    <Link href="/directorio?drone=xag-v40">
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
                  <Badge variant="secondary">XAG</Badge>
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
                  <Link href="/reviews/xag-p100-pro-review" className="hover:text-primary">
                    XAG P100 Pro - Análisis Completo
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  El drone agrícola XAG P100 Pro con 50L de pulverización y radar 4D.
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
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href="/reviews/dji-agras-t20p-review" className="hover:text-primary">
                    DJI Agras T20P - Review Detallado
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Análisis del DJI Agras T20P, un drone compacto con sensores avanzados.
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
