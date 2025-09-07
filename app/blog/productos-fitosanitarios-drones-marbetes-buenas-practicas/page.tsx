import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Download, CheckCircle, AlertTriangle, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Breadcrumbs from '@/components/Breadcrumbs'
import AdSlot from '@/components/AdSlot'

export const metadata: Metadata = {
  title: '¿Qué productos se pueden aplicar con drones? Marbetes, buenas prácticas y manejo de deriva | Blog',
  description: 'Guía completa sobre productos fitosanitarios autorizados para drones, marbetes SENASA, buenas prácticas CASAFE y manejo de deriva en aplicaciones aéreas.',
  keywords: [
    'fitosanitarios con drones',
    'marbete SENASA',
    'buenas prácticas CASAFE',
    'aplicación aérea con drones',
    'tamaño de gota',
    'drift',
    'downwash',
    'amortiguadores de deriva'
  ],
  openGraph: {
    title: '¿Qué productos se pueden aplicar con drones? Marbetes, buenas prácticas y manejo de deriva',
    description: 'Guía completa sobre productos fitosanitarios autorizados para drones, marbetes SENASA, buenas prácticas CASAFE y manejo de deriva en aplicaciones aéreas.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Drone Fumigaciones Argentina'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Qué productos se pueden aplicar con drones? Marbetes, buenas prácticas y manejo de deriva',
    description: 'Guía completa sobre productos fitosanitarios autorizados para drones, marbetes SENASA, buenas prácticas CASAFE y manejo de deriva en aplicaciones aéreas.',
  },
}

export default function ProductosFitosanitariosDronesPage() {
  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: 'Productos Fitosanitarios con Drones' }
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
              <Badge variant="secondary">Fitosanitarios</Badge>
              <Badge variant="secondary">SENASA</Badge>
              <Badge variant="secondary">CASAFE</Badge>
              <Badge variant="secondary">Buenas Prácticas</Badge>
              <Badge variant="secondary">Deriva</Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué productos se pueden aplicar con drones? Marbetes, buenas prácticas y manejo de deriva
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                27 de enero, 2025
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                8 min de lectura
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
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  El uso de drones para la aplicación de insumos agrícolas ha ganado terreno en los últimos años en Argentina, especialmente en cultivos extensivos como soja, maíz y trigo. La promesa es clara: mayor precisión, menor compactación del suelo, acceso a áreas difíciles y optimización del recurso químico. No obstante, para que esa promesa se cumpla, es esencial conocer qué productos pueden usarse con drones, qué exige el marbete de SENASA, y cuáles son las buenas prácticas para minimizar la deriva (drift) y maximizar la eficiencia.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  En este artículo, revisamos qué dice la regulación argentina (SENASA, CASAFE), qué especificaciones técnicas considerar (tamaño de gota, L/ha, downwash), y qué prácticas adoptan los mejores operarios de drones para lograr aplicaciones eficaces y seguras en el campo.
                </p>
              </div>

              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Insumos autorizados para drones agrícolas en Argentina
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Qué dice el marbete de SENASA
                    </h3>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700">
                            El marbete emitido por SENASA para cada producto fitosanitario es una clave fundamental: indica si está autorizado su uso con pulverización aérea, en qué condiciones lo está (altura del equipo, velocidad del aire, vegetación, vencimiento del producto, etc.).
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A la fecha de redacción (2025), SENASA ha comenzado a adaptar su normativa para contemplar nuevas tecnologías como los drones, aunque muchas autorizaciones siguen en modo experimental o mediante excepción.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Por ejemplo, algunas resoluciones recientes permiten la aplicación aérea en cultivos extensivos, siempre que los pilotos y la maquinaria cumplan con determinadas normativas de ANAC y protocolos de trazabilidad.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <p className="text-gray-700 font-medium">
                            Es importante destacar que si el marbete no menciona la pulverización aérea, debe interpretarse que su aplicación con drones no está permitida, salvo autorización expresa de SENASA.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Requisitos comunes señalados en los marbetes y manuales técnicos
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      De lo que se analizó en los marbetes de distintos productos y en buenas prácticas agropecuarias (CASAFE, Aapresid, etc.), los requisitos más habituales mencionados para uso con drones incluyen:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Volumen mínimo de agua por hectárea (L/ha).</li>
                        <li>Tamaño de gota recomendado (µm).</li>
                        <li>Altura de vuelo máxima y velocidad del viento.</li>
                        <li>Condiciones de vegetación y humedad.</li>
                        <li>Recomendaciones de mezclas y compatibilidades.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Buenas prácticas de pulverización con drones
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Selección del tamaño de gota y boquillas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Utilizar boquillas ajustables o intercambiables; controlar presión de salida; usar tarjetas hidrosensibles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Configuración del dron: altura, velocidad y solape</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Volar bajo (3‑5 m), aprovechar downwash, ajustar velocidad 5‑8 m/s, planificar solape del 20‑30%.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Manejo de deriva (drift) y amortiguadores de deriva</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Seleccionar productos de baja deriva, usar boquillas específicas, aplicar con viento &lt;10 km/h y HR &gt;40%, evitar horas pico de sol, emplear barreras o buffers en zonas sensibles.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Planificación del vuelo y monitoreo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Planificar rutas con software, vuelos de prueba, documentación y bitácora de aplicación.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Section 3 - Table */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ejemplos de productos fitosanitarios usados con drones en cultivos extensivos
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Producto / Principio Activo</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Cultivo típico</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Volumen L/ha sugerido con dron</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Tamaño de gota sugerido</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Observaciones relevantes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">Glifosato + surfactante</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Soja, malezas generales</td>
                        <td className="px-4 py-3 text-sm text-gray-700">50 L/ha</td>
                        <td className="px-4 py-3 text-sm text-gray-700">200‑300 µm</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Uso común en bandas, posibilidad de volúmenes menores con alta concentración.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">Metribuzin</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Soja posterior a siembra</td>
                        <td className="px-4 py-3 text-sm text-gray-700">50 L/ha</td>
                        <td className="px-4 py-3 text-sm text-gray-700">200‑300 µm</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Sensible al viento, deriva obligatoria a controlar.</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900">Insecticida (neonicotinoides diluidos)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Maíz (antes de R1)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">60 L/ha</td>
                        <td className="px-4 py-3 text-sm text-gray-700">250‑350 µm</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Compatibilidad con volumen mínimo importante.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">Fungicida de contacto</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Trigo (encañazón)</td>
                        <td className="px-4 py-3 text-sm text-gray-700">60‑80 L/ha</td>
                        <td className="px-4 py-3 text-sm text-gray-700">200‑300 µm</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Verificar autorización de pulverización aérea en marbete.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Integración y ejemplo práctico de aplicación
                </h2>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">1. Preparación y chequeo previo</h4>
                        <p className="text-gray-700">Verificar marbete, condiciones climáticas, vuelo de prueba.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">2. Ejecución del vuelo</h4>
                        <p className="text-gray-700">Desplegar plan, altura 4 m, velocidad 6 m/s, monitoreo de variables.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">3. Finalización</h4>
                        <p className="text-gray-700">Control de cobertura con tarjetas, descarga de datos y bitácora, limpieza del equipo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Conclusiones prácticas
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">No todos los productos con registro SENASA están habilitados para drones.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Ajuste técnico (gotas, altura, velocidad, solape, clima) es clave.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Downwash ayuda, pero no reemplaza las buenas prácticas.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Bitácora de aplicaciones mejora eficiencia.</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Herramientas como tarjetas hidrosensibles y software de planificación son imprescindibles.</p>
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
                      ¿Puedo usar cualquier producto fitosanitario con mi dron si lo autoriza el marbete?
                    </h3>
                    <p className="text-gray-700">
                      No. Aunque el marbete autorice pulverización aérea, deben cumplirse volúmenes mínimos, tamaño de gota y condiciones operativas compatibles con el dron.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Cuál es el tamaño de gota ideal para evitar deriva con drones?
                    </h3>
                    <p className="text-gray-700">
                      Generalmente entre 150‑350 µm, ajustado a producto, cultivo y clima.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Cómo mido la deriva en mis vuelos con dron?
                    </h3>
                    <p className="text-gray-700">
                      Mediante tarjetas hidrosensibles colocadas en áreas adyacentes para detectar dispersión fuera de la franja objetivo.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Qué medidas de seguridad debo considerar para no afectar áreas vecinas?
                    </h3>
                    <p className="text-gray-700">
                      Aplicar con viento &lt;10 km/h, HR &gt;40%, evitar horas pico de calor, y dejar buffers en áreas sensibles.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      ¿Se pueden mezclar productos con drones?
                    </h3>
                    <p className="text-gray-700">
                      Sí, siempre que el marbete lo permita y sean compatibles. Se recomienda test previo con agua.
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
                  <Link href="/blog/que-es-fumigacion-con-drones" className="block hover:text-primary transition-colors">
                    <h4 className="font-medium text-sm">¿Qué es fumigación con drones?</h4>
                    <p className="text-xs text-gray-600 mt-1">Conceptos básicos y aplicaciones</p>
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
