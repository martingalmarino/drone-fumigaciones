import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star, Clock, Calendar, User, Check, X, Droplets, Zap, Shield, MapPin, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Drone agrícola DJI Agras T10: compacto, versátil y eficiente para tareas ligeras | Review 2025',
  description: 'Análisis completo del DJI Agras T10: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas. Review detallado 2025.',
  keywords: [
    'DJI Agras T10',
    'drone agrícola',
    'fumigación con drones',
    'pulverización agrícola',
    'drones DJI',
    'agricultura de precisión',
    'review drone agrícola',
    'análisis DJI Agras T10',
    'esparcido agrícola'
  ],
  openGraph: {
    title: 'Drone agrícola DJI Agras T10: compacto, versátil y eficiente para tareas ligeras',
    description: 'Análisis completo del DJI Agras T10: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgriFly'],
    tags: ['DJI Agras T10', 'drone agrícola', 'fumigación con drones', 'review'],
  },
}

export default function DJIAgrasT10ReviewPage() {
  const reviewData = {
    producto: "DJI Agras T10",
    titulo: "Drone agrícola DJI Agras T10: compacto, versátil y eficiente para tareas ligeras",
    rating: 4,
    fecha: new Date(),
    autor: "AgriFly",
    categoria: "Drones Agrícolas",
    tiempoLectura: 7,
    reseña_completa: {
      introduccion_contexto: "El drone agrícola DJI Agras T10 es una solución aérea ligera y ágil, pensada para quienes inician con fumigación, pulverización o esparcido de insumos en parcelas más pequeñas. Con tanque desmontable de 8 L (opción 10 L en algunas regiones), radar omnidireccional, cámaras FPV duales y un sistema de carga rápida de baterías, permite una operación eficiente y práctica.",
      experiencia_inicial: "El T10 tiene una estructura plegable tipo truss que permite reducir su tamaño hasta en un 70 %, facilitando su transporte y almacenamiento. El tanque de pulverización es desmontable (8 L estándar) y puede cambiarse rápidamente. La batería inteligente de 9 500 mAh utiliza protección a nivel de placa, con protección contra agua y corrosión (IP54 para batería). El control remoto (modelo RM500-ENT) emplea OcuSync 2.0, con pantalla de 5,5\" / 1920×1080 de alto brillo (1000 cd/m²) y tiene capacidades de batería interna + externa.",
      rendimiento_campo: "El T10 tiene un tanque de 8 L (opcional 10 L) con una velocidad de pulverización de hasta 3 L/min según condiciones de prueba internas. DJI indica que puede cubrir hasta ~15 acres por hora (~6 ha/h) con 5 m de ancho de pulverización. En pruebas independientes (Rantizo) se registró ~9.22 acres/h con ancho de 4,6 m y altitud de 2,1–2,7 m. El T10 puede cambiar al modo de esparcido (Spreading System 3.0) en aproximadamente 3 minutos. Tiene una capacidad de esparcido de 8 kg y un ancho de esparcido de hasta 7 m. El radar activo omnidireccional tiene un rango de percepción de obstáculos de 1,5 a 30 m, con FOV de 360° horizontal y ±15° vertical. El radar superior cubre detección de obstáculos de 1,5 a 10 m con FOV de 80° hacia arriba. El drone cuenta con protección IP67 en la estructura principal. La velocidad máxima con carga está en ~7 m/s, y sin carga puede alcanzar ~10 m/s. La batería de 9 500 mAh tiene un peso aproximado de 3,8 kg. La distancia efectiva de transmisión de señal OcuSync 2.0 es hasta 5 km (SRRC), 4 km (MIC/KCC/CE) o 7 km (FCC).",
      caracteristicas_tecnicas: [
        "Tanque de pulverización: 8 L (opción 10 L en algunas regiones)",
        "Caudal de pulverización: ≈ 3 L/min",
        "Ancho de pulverización: 5 m estándar (hasta 7 m en condiciones específicas)",
        "Sistema de esparcido: Capacidad 8 kg, ancho hasta 7 m",
        "Radar omnidireccional: RD2424R, 1,5–30 m, FOV 360° horizontal, ±15° vertical",
        "Radar superior: RD2414U, 1,5–10 m, FOV 80° hacia arriba",
        "Cámaras FPV duales (frontal y trasera)",
        "Estructura plegable tipo truss, reducción de volumen ≈70%",
        "Protección IP67 en estructura principal",
        "Batería de vuelo: BAX501-9500 mAh, 51,8 V, ≈3,8 kg, IP54",
        "Control remoto RM500-ENT: pantalla 5,5\" (1920×1080, 1000 cd/m²)",
        "Conectividad: OcuSync 2.0, Wi-Fi, Bluetooth, HDMI",
        "Estación de carga: Battery Station 3 600 W, carga en ≈7 min",
        "Modo Swarm: Hasta 3 drones controlados simultáneamente",
        "Velocidad máxima: ~7 m/s con carga, ~10 m/s sin carga"
      ],
      pros: [
        "Tanque desmontable (8 L, opción 10 L) con cambio rápido",
        "Diseño plegable (≈70 %) que facilita transporte y despliegue",
        "Radar omnidireccional y radar superior para detección de obstáculos completos",
        "Estación de carga rápida de baterías (3 600 W, ~7 min)",
        "Coordinación de hasta 3 drones simultáneamente en modo Swarm",
        "Plataforma en la nube para planificación inteligente"
      ],
      contras: [
        "Caudal de pulverización estándar (~3 L/min) limitado frente a drones de mayor capacidad",
        "Autonomía de vuelo reducida con tanque lleno (≈8,7 min en condiciones de prueba)"
      ],
      comparacion: "En comparación con modelos como el Agras T20P o T30, el T10 ofrece menor capacidad de pulverización (8–10 L frente a 20–30 L), pero destaca por su diseño ligero, plegable y de fácil transporte, con sensores modernos y capacidad de trabajo en parcelas más pequeñas.",
      beneficios: "Permite pulverizar y esparcir insumos en huertos, viñedos y parcelas reducidas con eficiencia, gracias a su tanque desmontable, baterías de recarga rápida y portabilidad. Sus sensores de obstáculos y cámaras FPV garantizan seguridad y control durante la operación.",
      recomendacion_final: "El drone agrícola DJI Agras T10 es ideal para productores que buscan una solución compacta y versátil para parcelas pequeñas y medianas. Su diseño plegable, tanque desmontable y capacidad de trabajo en modo Swarm lo convierten en una excelente opción para iniciarse en la agricultura de precisión o para operaciones especializadas en cultivos intensivos."
    },
    faqs: [
      {
        pregunta: "¿Cuál es la capacidad de pulverización del DJI Agras T10?",
        respuesta: "8 L (tanque estándar), con opción de tanque de 10 L."
      },
      {
        pregunta: "¿Qué ancho de pulverización tiene?",
        respuesta: "Hasta 5 m en condiciones estándar, llegando a 7 m según configuración y entorno."
      },
      {
        pregunta: "¿Cuánto tarda en cargarse la batería de vuelo?",
        respuesta: "Aproximadamente 7 minutos con la estación de carga de 3 600 W."
      },
      {
        pregunta: "¿Puede usarse como esparcidor de sólidos?",
        respuesta: "Sí, con el sistema Spreading System 3.0 puede esparcir hasta 8 kg con un ancho de ~7 m."
      },
      {
        pregunta: "¿Cuál es el tiempo de vuelo en hover?",
        respuesta: "≈17 min sin carga y ≈8,7 min con carga completa (~26,8 kg) en pruebas de DJI/Rantizo."
      },
      {
        pregunta: "¿Cuántos drones puede controlar simultáneamente en modo Swarm?",
        respuesta: "Hasta 3 drones con un solo control remoto."
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
                    <div className="text-2xl font-bold text-green-600">8L</div>
                    <div className="text-sm text-gray-600">Pulverización</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Zap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">8kg</div>
                    <div className="text-sm text-gray-600">Esparcido</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">3 L/min</div>
                    <div className="text-sm text-gray-600">Caudal</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Battery className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">17 min</div>
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
                    <span className="font-semibold">8L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Esparcido:</span>
                    <span className="font-semibold">8kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Caudal:</span>
                    <span className="font-semibold">3 L/min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peso batería:</span>
                    <span className="font-semibold">3.8 kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Modo Swarm:</span>
                    <span className="font-semibold">3 drones</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Recarga:</span>
                    <span className="font-semibold">7 min</span>
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
                    Drone agrícola compacto y versátil
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
                    <Link href="/directorio?drone=dji-agras-t10">
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
                          i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href="/reviews/dji-agras-t20p-review" className="hover:text-primary">
                    DJI Agras T20P - Análisis Completo
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  El drone agrícola DJI Agras T20P con 20L de capacidad y sensores avanzados.
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
                  <Link href="/reviews/dji-agras-t30-review" className="hover:text-primary">
                    DJI Agras T30 - Review Detallado
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  Análisis del DJI Agras T30, el drone agrícola de referencia con 30L de capacidad.
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
