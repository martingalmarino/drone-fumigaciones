import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star, Clock, Calendar, User, Check, X, Droplets, Zap, Shield, MapPin, Battery, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Drone agrícola DJI Agras T30: eficiencia, precisión y 30 L de capacidad | Review 2025',
  description: 'Análisis completo del DJI Agras T30: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas. Review detallado 2025.',
  keywords: [
    'DJI Agras T30',
    'drone agrícola',
    'fumigación con drones',
    'pulverización agrícola',
    'drones DJI',
    'agricultura de precisión',
    'review drone agrícola',
    'análisis DJI Agras'
  ],
  openGraph: {
    title: 'Drone agrícola DJI Agras T30: eficiencia, precisión y 30 L de capacidad',
    description: 'Análisis completo del DJI Agras T30: características técnicas, rendimiento en campo, pros, contras y comparación con otros drones agrícolas.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgriFly'],
    tags: ['DJI Agras T30', 'drone agrícola', 'fumigación con drones', 'review'],
  },
}

export default function DJIAgrasT30ReviewPage() {
  const reviewData = {
    producto: "DJI Agras T30",
    titulo: "Drone agrícola DJI Agras T30: eficiencia, precisión y 30 L de capacidad",
    rating: 5,
    fecha: new Date(),
    autor: "AgriFly",
    categoria: "Drones Agrícolas",
    tiempoLectura: 8,
    reseña_completa: {
      introduccion_contexto: "El drone agrícola DJI Agras T30 representa una evolución clave en el uso de drones agrícolas para la fumigación y el esparcido de insumos en el campo. Con un tanque de 30 litros, planificación inteligente y un sistema de radar omnidireccional, este modelo se posiciona como una herramienta esencial para productores que buscan aumentar la eficiencia y mejorar la seguridad en superficies medianas y grandes.",
      experiencia_inicial: "El drone destaca por su estructura plegable, que reduce hasta un 80 % su tamaño para facilitar el transporte. Su control remoto con pantalla de 5,5″ FHD (1920×1080) y brillo de 1000 nits garantiza visibilidad clara incluso bajo luz solar directa. Además, los componentes cuentan con certificación IP67, lo que asegura resistencia frente a polvo y productos químicos agrícolas.",
      rendimiento_campo: "En operación, el drone agrícola DJI Agras T30 alcanza una eficiencia de hasta 40 acres por hora (≈16 hectáreas/h), posicionándose como uno de los drones agrícolas más eficientes de su categoría. Su batería de 29 000 mAh proporciona vuelos de hasta 20,5 minutos a carga estándar (36,5 kg) y alrededor de 7,8 minutos con carga máxima (66,5 kg). Con el cargador de 7 200 W, una batería puede recargarse en unos 10 minutos, lo que permite mantener operaciones casi ininterrumpidas. El sistema de pulverización con 16 boquillas y doble bomba de émbolo ofrece un caudal máximo de 8 L/min, mientras que el sistema de esparcido admite hasta 40 kg de sólidos, con caudal de 50 kg/min y ancho de aplicación de hasta 7 m.",
      caracteristicas_tecnicas: [
        "Tanque de pulverización: 30 L",
        "Cobertura: 40 acres/h (≈16 ha/h)",
        "Radar esférico omnidireccional para evitar obstáculos",
        "Cámaras FPV duales (frontal y trasera) + reflector de alto brillo",
        "Control remoto con pantalla de 5,5″ FHD, 1000 nits, alcance de 5 km",
        "Estructura plegable, reducción del 80 % para transporte",
        "Protección IP67 en componentes clave",
        "Pulverización: 16 boquillas, flujo máximo de 8 L/min",
        "Esparcido: hasta 40 kg, caudal de 50 kg/min, ancho de 7 m",
        "Batería de 29 000 mAh, autonomía de hasta 20,5 min",
        "Cargador rápido de 7 200 W, carga en ~10 min",
        "Módulo RTK para posicionamiento centimétrico y planificación 3D"
      ],
      pros: [
        "Alta capacidad de tanque (30 L) que reduce recargas frecuentes",
        "Cobertura de 16 hectáreas por hora, ideal para grandes cultivos",
        "Radar omnidireccional que refuerza la seguridad del drone",
        "Sistema de pulverización potente con 16 boquillas",
        "Resistencia IP67 frente a polvo y químicos",
        "Estructura plegable que facilita transporte y almacenamiento"
      ],
      contras: [
        "Peso elevado en operación, propio de drones agrícolas de gran capacidad",
        "Requiere capacitación técnica para aprovechar sus funciones avanzadas"
      ],
      comparacion: "En relación con el DJI Agras T20, el Agras T30 ofrece un tanque un 50 % mayor (30 L vs 20 L), radar omnidireccional más completo y el doble de boquillas para pulverización (16 vs 8). Estas mejoras lo convierten en un drone agrícola de referencia, con más eficiencia y precisión en cada aplicación.",
      beneficios: "El DJI Agras T30 permite reducir tiempos de trabajo, optimizar el uso de insumos mediante esparcido variable y mejorar la seguridad al minimizar la exposición humana a productos químicos. Frente a métodos tradicionales, este drone agrícola supone un salto en eficiencia, precisión y cuidado del recurso humano.",
      recomendacion_final: "El drone agrícola DJI Agras T30 es una de las opciones más completas para productores que buscan combinar eficiencia, precisión y seguridad en tareas de pulverización y esparcido. Su capacidad de 30 L, su radar omnidireccional y su tecnología RTK lo convierten en uno de los drones agrícolas más avanzados y competitivos disponibles en 2025."
    },
    faqs: [
      {
        pregunta: "¿Qué superficie puede cubrir este drone agrícola en una hora?",
        respuesta: "Hasta 40 acres por hora, aproximadamente 16 hectáreas, dependiendo del cultivo y el terreno."
      },
      {
        pregunta: "¿Cuál es la autonomía de vuelo del DJI Agras T30?",
        respuesta: "Hasta 20,5 minutos con carga estándar (36,5 kg) y unos 7,8 minutos a plena carga (66,5 kg)."
      },
      {
        pregunta: "¿Es un drone resistente al agua y al polvo?",
        respuesta: "Sí, posee certificación IP67 en componentes clave, lo que le otorga resistencia frente a polvo y líquidos."
      },
      {
        pregunta: "¿En qué se diferencia del DJI Agras T20?",
        respuesta: "El T30 ofrece mayor capacidad de tanque (30 L), un radar omnidireccional más avanzado y el doble de boquillas (16)."
      },
      {
        pregunta: "¿Cuánto tarda en recargarse la batería del drone?",
        respuesta: "El cargador de 7 200 W permite una carga completa en aproximadamente 10 minutos."
      },
      {
        pregunta: "¿El DJI Agras T30 puede esparcir sólidos además de líquidos?",
        respuesta: "Sí, admite hasta 40 kg de carga sólida, con un caudal de 50 kg/min y un ancho de aplicación de 7 m."
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Gauge className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">16 ha/h</div>
                    <div className="text-sm text-gray-600">Eficiencia</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Droplets className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">30L</div>
                    <div className="text-sm text-gray-600">Capacidad</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Battery className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">20.5 min</div>
                    <div className="text-sm text-gray-600">Autonomía</div>
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
                    <span className="text-gray-600">Capacidad líquidos:</span>
                    <span className="font-semibold">30L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Carga sólidos:</span>
                    <span className="font-semibold">40kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Eficiencia:</span>
                    <span className="font-semibold">16 ha/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Autonomía:</span>
                    <span className="font-semibold">20.5 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Boquillas:</span>
                    <span className="font-semibold">16</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Protección:</span>
                    <span className="font-semibold">IP67</span>
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
                    Excelente drone agrícola
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
                    <Link href="/directorio?drone=dji-agras-t30">
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
                  <Link href="/reviews/dji-agras-t50-review" className="hover:text-primary">
                    DJI Agras T50 - Análisis Completo
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm">
                  El drone agrícola más avanzado de DJI con 50L de capacidad.
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
