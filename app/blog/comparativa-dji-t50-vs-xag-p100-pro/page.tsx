import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, Tag, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Comparativa técnica para extensivos: DJI Agras T50 vs XAG P100 Pro | AgriFly',
  description: 'Análisis técnico detallado entre DJI Agras T50 y XAG P100 Pro: capacidad, caudal, autonomía, sensores y casos de uso para cultivos extensivos en Argentina.',
  keywords: [
    'DJI T50 vs XAG P100',
    'dron agrícola 40 L vs 50 L',
    'caudal 24 L/min',
    'drones agrícolas de gran porte',
    'pulverización aérea con drones',
    'comparación DJI XAG'
  ],
  openGraph: {
    title: 'Comparativa técnica para extensivos: DJI Agras T50 vs XAG P100 Pro',
    description: 'Análisis técnico detallado entre DJI Agras T50 y XAG P100 Pro: capacidad, caudal, autonomía, sensores y casos de uso para cultivos extensivos en Argentina.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgriFly'],
  }
}

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header del artículo */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al blog
              </Link>
            </Button>
            
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date().toLocaleDateString('es-AR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                8 min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                AgriFly
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comparativa técnica para extensivos: DJI Agras T50 vs XAG P100 Pro
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Drones Agrícolas</Badge>
              <Badge variant="secondary">Comparativa Técnica</Badge>
              <Badge variant="secondary">DJI Agras T50</Badge>
              <Badge variant="secondary">XAG P100 Pro</Badge>
              <Badge variant="secondary">Cultivos Extensivos</Badge>
            </div>
          </div>

          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              La adopción de drones agrícolas en Argentina se ha acelerado en los últimos años, especialmente en cultivos extensivos como soja, maíz y trigo. Dentro de este segmento, los modelos de mayor capacidad marcan la diferencia cuando el objetivo es cubrir grandes superficies con eficiencia y precisión. Dos de los equipos más representativos son el DJI Agras T50 y el XAG P100 Pro, ambos con tanques de 40–50 L y diseñados para aplicaciones aéreas de gran porte.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En este artículo realizamos una comparativa técnica detallada entre ambos modelos, analizando capacidad de carga, caudal, ancho de pulverización, autonomía, sistemas de radar y flujo de trabajo en campo. El objetivo es ofrecer una guía clara y práctica para productores y contratistas que evalúan cuál de estas dos opciones se adapta mejor a sus necesidades.
            </p>
          </div>

          {/* Sección 1: DJI Agras T50 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              DJI Agras T50 – Potencia y eficiencia para grandes superficies
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Especificaciones técnicas principales
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Capacidad del tanque:</strong> 40 L líquidos / hasta 50 kg sólidos.</li>
                  <li>• <strong>Caudal máximo:</strong> 16–24 L/min con boquillas de atomización dual.</li>
                  <li>• <strong>Ancho de faja:</strong> hasta 11 m.</li>
                  <li>• <strong>Sensores:</strong> radares de matriz en fase delantero y trasero, visión binocular y RTK centimétrico.</li>
                  <li>• <strong>Autonomía:</strong> ~10 minutos por batería de 30 Ah (con carga ultrarrápida de ~9 min).</li>
                  <li>• <strong>Cobertura estimada:</strong> entre 15 y 20 ha/h, según condiciones y volumen de aplicación.</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ventajas operativas
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Flujo de trabajo optimizado:</strong> con generador y múltiples baterías que permiten operación continua.</li>
                  <li>• <strong>Alta precisión de vuelo:</strong> gracias al RTK y al sistema de detección de obstáculos 360°.</li>
                  <li>• <strong>Diseño robusto:</strong> plegable y fácil de transportar.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 2: XAG P100 Pro */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              XAG P100 Pro – Modularidad y robustez en 50 L
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Especificaciones técnicas principales
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Capacidad del tanque:</strong> 50 L líquidos / hasta 50 kg sólidos.</li>
                  <li>• <strong>Caudal máximo:</strong> 22 L/min mediante bombeo peristáltico.</li>
                  <li>• <strong>Ancho de faja:</strong> entre 5 y 10 m, según altura de vuelo.</li>
                  <li>• <strong>Sensores:</strong> radar de imágenes 4D, RTK de alta precisión.</li>
                  <li>• <strong>Autonomía:</strong> ~10 minutos con baterías intercambiables enfriadas en agua.</li>
                  <li>• <strong>Cobertura estimada:</strong> 18 a 22 ha/h bajo condiciones ideales.</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ventajas operativas
              </h3>
              <div className="bg-green-50 p-6 rounded-lg">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Modularidad:</strong> cambio rápido entre kits de pulverización (RevoSpray) y sólidos (RevoCast).</li>
                  <li>• <strong>Grado de protección IPX6K:</strong> permite lavado a presión después de cada jornada.</li>
                  <li>• <strong>Robustez y facilidad de mantenimiento:</strong> con piezas intercambiables.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3: Tabla Comparativa */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Comparativa técnica DJI Agras T50 vs XAG P100 Pro
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Característica</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DJI Agras T50</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">XAG P100 Pro</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Capacidad del tanque</td>
                    <td className="border border-gray-300 px-4 py-3">40 L líquidos / 50 kg sólidos</td>
                    <td className="border border-gray-300 px-4 py-3">50 L líquidos / 50 kg sólidos</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Caudal máx. (L/min)</td>
                    <td className="border border-gray-300 px-4 py-3">16–24</td>
                    <td className="border border-gray-300 px-4 py-3">22</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ancho de faja</td>
                    <td className="border border-gray-300 px-4 py-3">hasta 11 m</td>
                    <td className="border border-gray-300 px-4 py-3">5–10 m</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sensores</td>
                    <td className="border border-gray-300 px-4 py-3">Radar matriz fase + visión binocular + RTK</td>
                    <td className="border border-gray-300 px-4 py-3">Radar 4D + RTK</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Autonomía</td>
                    <td className="border border-gray-300 px-4 py-3">~10 min/batería (carga rápida 9 min)</td>
                    <td className="border border-gray-300 px-4 py-3">~10 min/batería (enfriamiento en agua)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cobertura estimada</td>
                    <td className="border border-gray-300 px-4 py-3">15–20 ha/h</td>
                    <td className="border border-gray-300 px-4 py-3">18–22 ha/h</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Flujo de trabajo</td>
                    <td className="border border-gray-300 px-4 py-3">Baterías + generador portátil</td>
                    <td className="border border-gray-300 px-4 py-3">Baterías intercambiables + cargadores sumergibles</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diseño</td>
                    <td className="border border-gray-300 px-4 py-3">Plegable, compacto</td>
                    <td className="border border-gray-300 px-4 py-3">Modular, IPX6K</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Sección 4: Cuándo conviene cada uno */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              ¿Cuándo conviene cada uno?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-blue-600">
                    DJI Agras T50
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Ideal para productores que priorizan precisión de vuelo y seguridad operacional.</li>
                    <li>• Recomendado cuando se necesita cubrir grandes superficies de manera sostenida con un sistema de baterías y generador portátil.</li>
                    <li>• Ventajoso para contratistas que ofrecen servicios en campos de gran escala.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-green-600">
                    XAG P100 Pro
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Óptimo para quienes buscan robustez y modularidad, con posibilidad de alternar entre aplicaciones líquidas y sólidas en poco tiempo.</li>
                    <li>• Conveniente en lotes con condiciones exigentes donde el grado de protección IPX6K asegura durabilidad.</li>
                    <li>• Especialmente útil para equipos que requieren eficiencia máxima en hectáreas por hora.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sección 5: Conclusiones */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Conclusiones prácticas
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Ambos drones representan el tope de gama en pulverización aérea para cultivos extensivos en Argentina.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>El DJI T50</strong> destaca por su integración tecnológica, seguridad de vuelo y soporte de marca consolidada.</li>
                <li>• <strong>El XAG P100 Pro</strong> se impone en capacidad y modularidad, ofreciendo una ventaja competitiva en hectáreas/hora en condiciones ideales.</li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                La elección dependerá de la estrategia del productor o contratista: precisión y soporte (DJI) vs robustez y modularidad (XAG).
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuál de los dos drones cubre más hectáreas por hora?
                  </h3>
                  <p className="text-gray-700">
                    El XAG P100 Pro puede alcanzar hasta 22 ha/h en condiciones óptimas, mientras que el DJI T50 ronda entre 15–20 ha/h.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuál es más preciso en vuelos autónomos?
                  </h3>
                  <p className="text-gray-700">
                    El DJI T50, gracias a su radar de matriz y visión binocular, ofrece mayor precisión en detección de obstáculos y seguimiento de terreno.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuál es más fácil de mantener?
                  </h3>
                  <p className="text-gray-700">
                    El XAG P100 Pro, con diseño modular e IPX6K, permite mantenimiento rápido y lavado a presión.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuál conviene para un contratista que trabaja en varios campos?
                  </h3>
                  <p className="text-gray-700">
                    Depende de la necesidad: DJI asegura precisión y respaldo de red global; XAG brinda mayor capacidad y robustez operativa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    ¿Cuál es la diferencia en precio en Argentina?
                  </h3>
                  <p className="text-gray-700">
                    El DJI T50 ronda los USD 25.000, mientras que el XAG P100 Pro se ubica alrededor de USD 34.000, dependiendo del distribuidor y accesorios incluidos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Necesitas asesoramiento para elegir tu dron agrícola?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo de expertos puede ayudarte a encontrar la mejor opción para tu operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/cotizar">
                  Solicitar cotización
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contacto">
                  Contactar expertos
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
