import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Calculator, Battery, Droplets, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: 'Capacidad real: ¿cuántas hectáreas por hora puede cubrir mi dron agrícola? | Blog',
  description: 'Análisis completo sobre la capacidad de cobertura de drones agrícolas: factores técnicos, cálculos prácticos y comparativa de modelos para maximizar eficiencia.',
  keywords: [
    'hectáreas por hora dron agrícola',
    'caudal L/min',
    'L/ha',
    'cobertura drones agrícolas',
    'autonomía drones agrícolas'
  ],
  openGraph: {
    title: 'Capacidad real: ¿cuántas hectáreas por hora puede cubrir mi dron agrícola?',
    description: 'Análisis completo sobre la capacidad de cobertura de drones agrícolas: factores técnicos, cálculos prácticos y comparativa de modelos para maximizar eficiencia.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Drone Fumigaciones Argentina'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capacidad real: ¿cuántas hectáreas por hora puede cubrir mi dron agrícola?',
    description: 'Análisis completo sobre la capacidad de cobertura de drones agrícolas: factores técnicos, cálculos prácticos y comparativa de modelos para maximizar eficiencia.',
  },
}

export default function CapacidadCoberturaDronPage() {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Capacidad de Cobertura de Drones' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="mt-6">
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">Tecnología</Badge>
              <Badge variant="secondary">Cálculos</Badge>
              <Badge variant="secondary">Eficiencia</Badge>
              <Badge variant="secondary">Cobertura</Badge>
              <Badge variant="secondary">Autonomía</Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Capacidad real: ¿cuántas hectáreas por hora puede cubrir mi dron agrícola?
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                27 de enero, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                6 min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Drone Fumigaciones Argentina
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Los drones agrícolas se han consolidado como una herramienta clave en la agricultura de precisión. Sin embargo, una de las preguntas más frecuentes entre productores y asesores es: ¿cuántas hectáreas por hora puede cubrir realmente un dron en campo?
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  La respuesta depende de múltiples variables técnicas: capacidad del tanque, caudal de aplicación (L/min), ancho de la faja de pulverización, volumen de caldo por hectárea (L/ha) y autonomía de las baterías.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Este artículo analiza en detalle estos factores y propone ejemplos prácticos de cálculo para cultivos extensivos como soja, maíz y trigo.
                </p>
              </div>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Factores que determinan la capacidad de cobertura
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Battery className="h-5 w-5 mr-2 text-blue-600" />
                      Capacidad del tanque y autonomía
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La capacidad del tanque define la cantidad de caldo que puede aplicar un dron en un solo vuelo. Modelos como el DJI Agras T10 poseen 8 L, mientras que equipos de alta capacidad como el DJI Agras T50 o el XAG P100 Pro superan los 40–50 L.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      La autonomía de vuelo por batería suele ser de 10 a 15 minutos, lo que condiciona la superficie cubierta por recarga.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Droplets className="h-5 w-5 mr-2 text-green-600" />
                      Caudal de aplicación (L/min)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Los drones modernos permiten regular el caudal de aplicación. Por ejemplo, el DJI Agras T20P trabaja en un rango de 6 a 8 L/min, mientras que el T50 puede alcanzar 16–24 L/min.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      El caudal debe ajustarse al volumen de aplicación deseado (L/ha) y al avance del dron, garantizando cobertura homogénea.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <Calculator className="h-5 w-5 mr-2 text-purple-600" />
                      Volumen de caldo aplicado (L/ha)
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El volumen de aplicación recomendado varía según producto y cultivo. En soja o maíz pueden usarse entre 10 y 20 L/ha con drones, mientras que fungicidas de contacto pueden requerir 40–60 L/ha.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      A menor volumen de aplicación, mayor superficie cubierta por hora, siempre que se respete lo indicado en el marbete del fitosanitario (SENASA).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                      Ancho de faja de pulverización
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El ancho efectivo de trabajo depende del modelo y la configuración de boquillas. Por ejemplo, el DJI Agras T10 cubre hasta 5 m, el T20P ~7 m, el T30/T40 ~9–10 m, y el T50 alcanza 11 m.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Un mayor ancho reduce la cantidad de pasadas necesarias y aumenta la eficiencia.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 - Example */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ejemplo práctico de cálculo de hectáreas por hora
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    DJI Agras T20P - Cálculo de cobertura
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Capacidad:</strong> 20 L</p>
                      <p className="text-sm text-gray-600"><strong>Caudal:</strong> 6 L/min</p>
                      <p className="text-sm text-gray-600"><strong>Ancho de faja:</strong> 7 m</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600"><strong>Volumen de aplicación:</strong> 15 L/ha</p>
                      <p className="text-sm text-gray-600"><strong>Autonomía:</strong> 12 minutos por batería</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">1. Cobertura por tanque</h4>
                      <p className="text-gray-700">20 L ÷ 15 L/ha = <strong>1,33 ha por vuelo</strong></p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">2. Número de vuelos por hora</h4>
                      <p className="text-gray-700">Si cada ciclo de vuelo + recarga insumo + cambio de batería lleva 8 minutos, en una hora pueden realizarse <strong>~7 ciclos</strong></p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">3. Cobertura por hora</h4>
                      <p className="text-gray-700">1,33 ha × 7 ciclos = <strong>9,3 ha/hora</strong></p>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Nota:</strong> Este cálculo puede variar con viento, densidad del cultivo o mayores volúmenes de aplicación. Con equipos de 40–50 L, la cobertura puede superar las 15–20 ha/hora en condiciones ideales.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 - Table */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Comparativa de drones agrícolas según capacidad de cobertura
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Modelo</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Capacidad de tanque</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Caudal máx. (L/min)</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Ancho de faja</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Volumen típico (L/ha)</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cobertura estimada (ha/h)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">DJI Agras T10</td>
                        <td className="px-4 py-3 text-sm text-gray-700">8 L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">2–4</td>
                        <td className="px-4 py-3 text-sm text-gray-700">5 m</td>
                        <td className="px-4 py-3 text-sm text-gray-700">10–15</td>
                        <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-green-600">4–6 ha/h</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">DJI Agras T20P</td>
                        <td className="px-4 py-3 text-sm text-gray-700">20 L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">6–8</td>
                        <td className="px-4 py-3 text-sm text-gray-700">7 m</td>
                        <td className="px-4 py-3 text-sm text-gray-700">12–20</td>
                        <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-green-600">8–10 ha/h</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">DJI Agras T30</td>
                        <td className="px-4 py-3 text-sm text-gray-700">30 L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">8–12</td>
                        <td className="px-4 py-3 text-sm text-gray-700">9 m</td>
                        <td className="px-4 py-3 text-sm text-gray-700">15–25</td>
                        <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-green-600">12–14 ha/h</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">DJI Agras T50</td>
                        <td className="px-4 py-3 text-sm text-gray-700">40 L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">16–24</td>
                        <td className="px-4 py-3 text-sm text-gray-700">11 m</td>
                        <td className="px-4 py-3 text-sm text-gray-700">15–30</td>
                        <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-green-600">15–20 ha/h</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">XAG V40</td>
                        <td className="px-4 py-3 text-sm text-gray-700">16 L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">10</td>
                        <td className="px-4 py-3 text-sm text-gray-700">10 m</td>
                        <td className="px-4 py-3 text-sm text-gray-700">12–20</td>
                        <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-green-600">6–9 ha/h</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900 font-medium">XAG P100 Pro</td>
                        <td className="px-4 py-3 text-sm text-gray-700">50 L</td>
                        <td className="px-4 py-3 text-sm text-gray-700">22</td>
                        <td className="px-4 py-3 text-sm text-gray-700">10 m</td>
                        <td className="px-4 py-3 text-sm text-gray-700">15–30</td>
                        <td className="px-4 py-3 text-sm text-gray-700 font-semibold text-green-600">18–22 ha/h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Planificación operativa y gestión de baterías
                </h2>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    El rendimiento horario depende no solo de las especificaciones técnicas, sino también de la logística. Disponer de varias baterías y un generador permite reducir tiempos muertos.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Se recomienda planificar turnos de trabajo, considerar áreas de recarga cercanas al lote, y usar software de planificación de vuelos para optimizar recorridos y minimizar solapes innecesarios.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Conclusiones prácticas
                </h2>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    La capacidad real de cobertura de un dron agrícola depende de variables técnicas y operativas. En general, un dron mediano como el T20P cubre entre 8 y 10 ha/h, mientras que los equipos más grandes como el T50 o el XAG P100 Pro pueden superar las 20 ha/h en condiciones ideales.
                  </p>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Para maximizar la eficiencia es clave:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Ajustar el caudal y el volumen de aplicación según marbete.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Planificar logística de recarga de insumos y baterías.
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        Monitorear condiciones ambientales (viento, humedad).
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Preguntas Frecuentes
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Qué factores influyen más en la cobertura por hora de un dron agrícola?
                    </h3>
                    <p className="text-gray-700">
                      Principalmente la capacidad del tanque, el volumen de aplicación (L/ha), el caudal de salida, el ancho de faja y la autonomía de las baterías.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Se pueden lograr más de 20 ha/h con drones?
                    </h3>
                    <p className="text-gray-700">
                      Sí, con modelos de alta capacidad como el DJI T50 o el XAG P100 Pro, bajo condiciones óptimas y volúmenes bajos de aplicación.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Qué pasa si aplico menos volumen de agua por hectárea?
                    </h3>
                    <p className="text-gray-700">
                      Se aumenta la cobertura por hora, pero solo debe hacerse si el marbete del producto lo permite. De lo contrario, puede comprometer la eficacia del fitosanitario.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Cómo influye el viento en la capacidad de aplicación?
                    </h3>
                    <p className="text-gray-700">
                      El viento excesivo aumenta deriva y obliga a suspender la aplicación, reduciendo las hectáreas efectivas cubiertas por hora.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Cómo organizar la logística de recarga para no perder tiempo?
                    </h3>
                    <p className="text-gray-700">
                      Contar con múltiples baterías, estaciones de recarga cercanas y un operador de apoyo permite sostener ritmos de 10–20 ha/h sin tiempos muertos significativos.
                    </p>
                  </div>
                </div>
              </section>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <AdSlot variant="sidebar" />
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Artículos Relacionados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/blog/productos-fitosanitarios-drones-marbetes-buenas-practicas" className="block hover:text-primary transition-colors">
                    <h4 className="font-medium text-sm">¿Qué productos se pueden aplicar con drones?</h4>
                    <p className="text-xs text-gray-600 mt-1">Marbetes SENASA y buenas prácticas</p>
                  </Link>
                  <Link href="/blog/es-legal-fumigar-con-drones-argentina-2025" className="block hover:text-primary transition-colors">
                    <h4 className="font-medium text-sm">¿Es legal fumigar con drones en Argentina 2025?</h4>
                    <p className="text-xs text-gray-600 mt-1">Marco legal y regulaciones</p>
                  </Link>
                  <Link href="/blog/drones-vs-aviones-vs-pulverizadoras" className="block hover:text-primary transition-colors">
                    <h4 className="font-medium text-sm">Drones vs Aviones vs Pulverizadoras</h4>
                    <p className="text-xs text-gray-600 mt-1">Comparativa de tecnologías</p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
