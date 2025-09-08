import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, Tag, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Casos de manejo: malezas difíciles en maíz y soja y el rol del dron | AgriFly',
  description: 'Análisis del control de malezas resistentes en cultivos extensivos con drones: estrategias MIM, timings de aplicación y experiencias del Programa REM de Aapresid.',
  keywords: [
    'control de malezas con drones',
    'REM Aapresid',
    'manejo integrado de plagas',
    'malezas resistentes soja maíz',
    'aplicaciones aéreas con drones'
  ],
  openGraph: {
    title: 'Casos de manejo: malezas difíciles en maíz y soja y el rol del dron',
    description: 'Análisis del control de malezas resistentes en cultivos extensivos con drones: estrategias MIM, timings de aplicación y experiencias del Programa REM de Aapresid.',
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
                10 min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                AgriFly
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Casos de manejo: malezas difíciles en maíz y soja y el rol del dron
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">Manejo de Malezas</Badge>
              <Badge variant="secondary">Cultivos Extensivos</Badge>
              <Badge variant="secondary">REM Aapresid</Badge>
              <Badge variant="secondary">Manejo Integrado</Badge>
              <Badge variant="secondary">Drones Agrícolas</Badge>
            </div>
          </div>

          {/* Introducción */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              El control de malezas en cultivos extensivos como soja y maíz es uno de los mayores desafíos que enfrentan los productores argentinos. La expansión de biotipos resistentes y tolerantes a herbicidas convencionales ha generado la necesidad de integrar nuevas herramientas dentro del Manejo Integrado de Plagas (MIP). En este contexto, los drones agrícolas aparecen como una alternativa de precisión para aplicaciones localizadas y rápidas.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En este artículo analizamos los principales casos de malezas difíciles en la región pampeana, cómo integrarlos a esquemas de MIP y cuál es el aporte específico de los drones en la estrategia de control. Además, presentamos recomendaciones basadas en experiencias del Programa REM de Aapresid y resultados discutidos en congresos técnicos recientes.
            </p>
          </div>

          {/* Sección 1: Panorama actual */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Malezas difíciles en maíz y soja: panorama actual
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Biotipos resistentes más relevantes
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Según relevamientos del Programa REM de Aapresid, las especies más problemáticas en cultivos extensivos de Argentina incluyen:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Amaranthus hybridus</strong> (yuyo colorado) resistente a glifosato y ALS.</li>
                  <li>• <strong>Echinochloa colona</strong> (capín) con resistencia múltiple a glifosato y ACCasa.</li>
                  <li>• <strong>Sorghum halepense</strong> (sorgo de Alepo) resistente a glifosato.</li>
                  <li>• <strong>Conyza bonariensis</strong> (rama negra) con resistencia a glifosato.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Estos biotipos comprometen la rentabilidad del sistema y exigen estrategias de control más diversificadas.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Impacto en la producción extensiva
              </h3>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  La presencia de malezas resistentes en maíz y soja genera pérdidas de rendimiento que pueden superar el <strong>30%</strong> cuando no se realizan controles oportunos. Además, incrementa los costos de producción al requerir mezclas de herbicidas y múltiples intervenciones.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 2: MIM y rol del dron */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Manejo integrado de malezas (MIM) y rol del dron
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Principios del MIM
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  El Manejo Integrado de Malezas (MIM) busca combinar prácticas culturales, mecánicas, químicas y biotecnológicas para reducir la presión de selección y prolongar la vida útil de los herbicidas. Incluye:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rotación de cultivos y fechas de siembra.</li>
                  <li>• Uso de coberturas y cultivos de servicio.</li>
                  <li>• Rotación y mezcla de principios activos.</li>
                  <li>• Monitoreo constante de lotes.</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cómo potencian los drones estas estrategias
              </h3>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Los drones permiten realizar aplicaciones <strong>localizadas y oportunas</strong>, lo que resulta clave en el manejo de manchones de malezas resistentes. Algunas ventajas son:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Acceso rápido a sectores anegados o de difícil acceso.</li>
                  <li>• Posibilidad de trabajar con volúmenes bajos (10–20 L/ha) y gota controlada, reduciendo deriva.</li>
                  <li>• Mayor precisión al aplicar herbicidas de contacto en estados tempranos de las malezas.</li>
                  <li>• Generación de mapas para monitorear la evolución de manchones.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sección 3: Timings de aplicación */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Timings de aplicación y uso del dron
            </h2>

            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El momento de aplicación es crítico en el control de malezas difíciles. Los drones ofrecen la flexibilidad de ingresar rápidamente al lote y aplicar en la ventana ideal.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li>• En <strong>rama negra y capín</strong>, la efectividad del control aumenta cuando las aplicaciones se realizan en estados vegetativos tempranos (2–4 hojas).</li>
                <li>• En <strong>sorgo de Alepo rebrotado</strong>, el control es más eficaz cuando se combina aplicación temprana localizada con herbicidas sistémicos.</li>
                <li>• En <strong>yuyo colorado</strong>, la clave está en aplicar antes de que supere los 10 cm de altura, combinando principios activos recomendados por REM.</li>
              </ul>
            </div>
          </section>

          {/* Sección 4: Mezclas y protocolos */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Mezclas y protocolos recomendados (según marbete)
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Es indispensable respetar lo indicado en el marbete del producto y las recomendaciones de SENASA y CASAFE. Algunas prácticas comunes incluyen:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Uso de <strong>glifosato + PPO</strong> en mezcla para manchones de Amaranthus spp.</li>
                <li>• <strong>Glifosato + graminicida</strong> en capín y sorgo de Alepo.</li>
                <li>• Inclusión de <strong>coadyuvantes</strong> para mejorar mojado y adherencia de las gotas.</li>
                <li>• Ajuste del volumen de aplicación con drones a <strong>15–20 L/ha</strong> para asegurar cobertura.</li>
              </ul>
            </div>
          </section>

          {/* Sección 5: Ensayos REM */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Ensayos y experiencias del Programa REM
            </h2>
            <div className="bg-purple-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El Programa REM de Aapresid ha presentado en congresos y jornadas resultados de ensayos con drones aplicando herbicidas en malezas resistentes. Los principales hallazgos fueron:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Reducción del uso total de herbicidas al aplicar solo en manchones.</li>
                <li>• Mejoras en la eficiencia de control en estados tempranos respecto a aplicaciones terrestres.</li>
                <li>• Aceptación creciente por parte de productores como herramienta complementaria, especialmente en lotes con problemas recurrentes de malezas.</li>
              </ul>
            </div>
          </section>

          {/* Sección 6: Conclusiones */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Conclusiones prácticas
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El uso de drones en el manejo de malezas difíciles en soja y maíz no reemplaza al MIM, sino que lo potencia. Su mayor valor está en:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• La <strong>localización precisa</strong> de aplicaciones en manchones.</li>
                <li>• La <strong>rapidez</strong> para intervenir en la ventana ideal de control.</li>
                <li>• La posibilidad de <strong>optimizar insumos</strong> y reducir impacto ambiental.</li>
              </ul>
              <div className="bg-primary text-white p-4 rounded-lg">
                <p className="font-semibold">
                  💡 Descargá la ficha con "protocolos por maleza difícil" para planificar tus aplicaciones con drones en lotes de soja y maíz.
                </p>
              </div>
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
              ¿Necesitas asesoramiento para el manejo de malezas con drones?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo de expertos puede ayudarte a diseñar estrategias de control integrado para tu lote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/cotizar">
                  Solicitar cotización
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary bg-transparent">
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
