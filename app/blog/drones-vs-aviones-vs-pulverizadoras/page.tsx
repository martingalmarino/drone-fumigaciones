import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, Tag, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Drones vs. aviones vs. pulverizadoras terrestres: comparativa de costos y efectividad | AgryFly',
  description: 'Análisis comparativo de drones, aviones y pulverizadoras terrestres en la agricultura: costos por hectárea, eficiencia, limitaciones y mejores casos de uso.',
  keywords: [
    'fumigación con drones',
    'pulverización aérea',
    'pulverización terrestre',
    'costos por hectárea',
    'drones agrícolas',
    'aviones agrícolas',
    'efectividad de pulverización'
  ],
  openGraph: {
    title: 'Drones vs. aviones vs. pulverizadoras terrestres: comparativa de costos y efectividad',
    description: 'Análisis comparativo de drones, aviones y pulverizadoras terrestres en la agricultura: costos por hectárea, eficiencia, limitaciones y mejores casos de uso.',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['AgryFly'],
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
                6 min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                AgryFly
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Drones vs. aviones vs. pulverizadoras terrestres: comparativa de costos y efectividad
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
              Análisis comparativo de drones, aviones y pulverizadoras terrestres en la agricultura: costos por hectárea, eficiencia, limitaciones y mejores casos de uso.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Análisis</Badge>
              <Badge variant="outline">Costos</Badge>
              <Badge variant="outline">Comparativa</Badge>
            </div>
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                La elección del método de aplicación de fitosanitarios y fertilizantes en la agricultura es estratégica. En Argentina conviven tres tecnologías principales: drones, aviones y pulverizadoras terrestres autopropulsadas. Cada una tiene ventajas, costos asociados, limitaciones operativas y regulaciones particulares. Este artículo busca comparar, con datos objetivos y referencias, la efectividad y los costos de estas alternativas. El análisis está orientado a productores, asesores y contratistas que ya conocen la temática y necesitan información clara y fundamentada para tomar decisiones.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pulverización con drones: precisión en baja escala</h2>
              <p className="text-gray-700 leading-relaxed">
                Los drones agrícolas, en particular modelos como DJI Agras T40/T50 o XAG P150, han ganado protagonismo en Argentina y el mundo. Según datos de FAO (2023), en Asia ya representan más del 30% de las aplicaciones aéreas. En Argentina, la adopción pasó de 90 drones registrados en 2023 a más de 600 en 2024 (Agrofy News, 2024).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Características operativas de drones</h2>
              
              <div className="grid gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Capacidad de carga</h3>
                    <p className="text-gray-700">10–50 litros según el modelo, lo que permite aplicaciones de ultra bajo volumen (UBV).</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Autonomía</h3>
                    <p className="text-gray-700">10–20 minutos por batería; requiere recambio frecuente y logística de cargadores/generadores.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Superficie diaria</h3>
                    <p className="text-gray-700">Entre 20 y 200 hectáreas, dependiendo del número de drones y la organización logística.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Precisión</h3>
                    <p className="text-gray-700">Muy alta gracias al GPS RTK, sensores de altura y posibilidad de aplicaciones selectivas.</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 leading-relaxed">
                La gran ventaja de los drones es su capacidad de operar en terrenos anegados, periurbanos y de difícil acceso, con mínima deriva. También permiten aplicaciones localizadas, reduciendo costos en insumos y minimizando el impacto ambiental.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costos de aplicación con drones</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El costo promedio por hectárea con drones en Argentina se ubica entre USD 25 y USD 40, según INTA y contratistas relevados en Córdoba y Santa Fe (2024). Estos valores dependen de la dosis, número de recargas, superficie total y si la aplicación es puntual o en cobertura completa.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-blue-800">
                  <strong>Fuente:</strong> INTA Manfredi, jornadas 2024; entrevistas Agroverdad 2024.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitaciones de los drones</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Escala</h3>
                    <p className="text-gray-700">No son la mejor opción para superficies mayores a 500–1000 ha continuas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Condiciones climáticas</h3>
                    <p className="text-gray-700">Viento y alta temperatura reducen eficiencia de aplicación.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Compatibilidad de formulaciones</h3>
                    <p className="text-gray-700">Algunos productos no están aún validados para UBV en drones.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fumigación con aviones: escala y velocidad</h2>
              <p className="text-gray-700 leading-relaxed">
                Los aviones agrícolas han sido durante décadas la solución dominante para grandes superficies en Argentina. Modelos como Air Tractor o PZL M18 Dromader pueden cargar entre 1.000 y 3.000 litros y cubrir cientos de hectáreas en una jornada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Características operativas de aviones</h2>
              
              <div className="grid gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Capacidad de carga</h3>
                    <p className="text-gray-700">600–3000 litros, dependiendo del modelo.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Superficie diaria</h3>
                    <p className="text-gray-700">Entre 400 y 1500 hectáreas en condiciones ideales.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Velocidad de aplicación</h3>
                    <p className="text-gray-700">70–120 metros/segundo, lo que permite cubrir grandes áreas en poco tiempo.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Precisión</h3>
                    <p className="text-gray-700">Media; la altura de vuelo y el viento generan mayor deriva.</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 leading-relaxed">
                El avión agrícola es imbatible en velocidad y capacidad, pero presenta limitaciones en precisión, deriva y seguridad (riesgo para pilotos). También tiene restricciones legales más estrictas en zonas periurbanas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costos de aplicación con aviones</h2>
              <p className="text-gray-700 leading-relaxed">
                El costo promedio de la aplicación aérea con avión en Argentina se ubica entre USD 10 y USD 15 por hectárea (fuente: Federación Argentina de Cámaras Agroaéreas, 2023). Esto lo convierte en el método más barato por unidad de superficie, aunque la eficiencia del producto aplicado puede verse afectada por la deriva.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pulverizadoras terrestres: la columna vertebral</h2>
              <p className="text-gray-700 leading-relaxed">
                Las pulverizadoras autopropulsadas (como Pla, Metalfor, John Deere) son las más utilizadas en Argentina. Representan más del 80% de las aplicaciones. Su versatilidad, autonomía y precisión relativa las consolidan como estándar del mercado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Características operativas de pulverizadoras terrestres</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Capacidad de tanque</h3>
                    <p className="text-gray-700">2000–4000 litros.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Ancho de labor</h3>
                    <p className="text-gray-700">20–40 metros según barra.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Superficie diaria</h3>
                    <p className="text-gray-700">Entre 150 y 500 hectáreas, dependiendo de condiciones y logística de recarga.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Precisión</h3>
                    <p className="text-gray-700">Media a alta, con guías satelitales y control de secciones.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costos de aplicación con pulverizadoras terrestres</h2>
              <p className="text-gray-700 leading-relaxed">
                El costo promedio por hectárea se ubica entre USD 15 y USD 25 (INTA, 2023). Es más caro que el avión, pero más barato que el dron, y con mayor flexibilidad operativa en la mayoría de los escenarios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparativa de costos y efectividad</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspecto</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Drones</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aviones</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Pulverizadoras terrestres</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Costo promedio/ha</td>
                      <td className="border border-gray-300 px-4 py-2">USD 25–40</td>
                      <td className="border border-gray-300 px-4 py-2">USD 10–15</td>
                      <td className="border border-gray-300 px-4 py-2">USD 15–25</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Capacidad de tanque</td>
                      <td className="border border-gray-300 px-4 py-2">10–50 L</td>
                      <td className="border border-gray-300 px-4 py-2">600–3000 L</td>
                      <td className="border border-gray-300 px-4 py-2">2000–4000 L</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Superficie diaria</td>
                      <td className="border border-gray-300 px-4 py-2">20–200 ha</td>
                      <td className="border border-gray-300 px-4 py-2">400–1500 ha</td>
                      <td className="border border-gray-300 px-4 py-2">150–500 ha</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Precisión</td>
                      <td className="border border-gray-300 px-4 py-2">Alta</td>
                      <td className="border border-gray-300 px-4 py-2">Media</td>
                      <td className="border border-gray-300 px-4 py-2">Media–Alta</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Deriva</td>
                      <td className="border border-gray-300 px-4 py-2">Baja</td>
                      <td className="border border-gray-300 px-4 py-2">Alta</td>
                      <td className="border border-gray-300 px-4 py-2">Media</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Acceso a terrenos difíciles</td>
                      <td className="border border-gray-300 px-4 py-2">Excelente</td>
                      <td className="border border-gray-300 px-4 py-2">Bueno en lotes grandes</td>
                      <td className="border border-gray-300 px-4 py-2">Limitado</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Seguridad del operario</td>
                      <td className="border border-gray-300 px-4 py-2">Muy alta</td>
                      <td className="border border-gray-300 px-4 py-2">Riesgo para piloto</td>
                      <td className="border border-gray-300 px-4 py-2">Exposición directa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Casos de uso recomendados</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Drones</h3>
                    <p className="text-gray-700">Aplicaciones localizadas, periurbanas, lotes anegados o con cultivos altos, y situaciones donde la precisión es clave.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Aviones</h3>
                    <p className="text-gray-700">Grandes extensiones homogéneas, urgencia en cubrir superficies en poco tiempo, costos bajos por hectárea.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Pulverizadoras terrestres</h3>
                    <p className="text-gray-700">Uso generalizado, lotes medianos a grandes, cuando hay accesibilidad al campo y se requiere autonomía y volumen.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Factores regulatorios y ambientales</h2>
              <p className="text-gray-700 leading-relaxed">
                En Argentina, la ANAC regula la actividad aérea, mientras que SENASA define lineamientos fitosanitarios. Los drones tienen un marco incipiente; los aviones están fuertemente regulados y las pulverizadoras se rigen por normativas provinciales y municipales. El factor ambiental (deriva, compactación de suelo, consumo de combustible) también condiciona la elección. Los drones se destacan en reducción de deriva; las pulverizadoras impactan con compactación; los aviones consumen más combustible fósil.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h2>
              <p className="text-gray-700 leading-relaxed">
                No existe un método único ideal: la decisión depende de escala, condiciones del lote, urgencia y presupuesto. Los drones ofrecen máxima precisión pero a mayor costo por hectárea, los aviones imbatibles en escala y costo, y las pulverizadoras terrestres equilibrio y flexibilidad. Lo clave es entender que estas tecnologías se complementan: muchas empresas de servicios combinan avión para grandes lotes, pulverizadora para el grueso de la superficie y drones para tratamientos puntuales. En el futuro, la sinergia y la adopción de agricultura de precisión definirán qué herramienta gana más terreno.
              </p>
            </section>

            {/* Fuentes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuentes</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• FAO, 2023. Drones in agriculture report.</li>
                  <li>• INTA Manfredi, Jornadas de Pulverización 2023–2024.</li>
                  <li>• Federación Argentina de Cámaras Agroaéreas (FeArCA), Informe 2023.</li>
                  <li>• Agrofy News, 2024. Crece el uso de drones agrícolas en Argentina.</li>
                  <li>• Agroverdad, 2024. Jornadas de tecnología en Córdoba.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA al final del artículo */}
          <div className="mt-12 p-6 bg-primary text-white rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">¿Necesitas fumigación con drones?</h3>
            <p className="mb-4">Encuentra proveedores certificados en tu zona</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/directorio">
                  Ver Directorio
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/cotizar">
                  Solicitar Cotización
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
