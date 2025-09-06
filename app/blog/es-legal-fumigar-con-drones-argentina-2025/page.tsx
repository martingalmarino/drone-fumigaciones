import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '¿Es legal fumigar con drones en Argentina? – Regulaciones y requisitos (2025) | AgryFly',
  description: 'Análisis actualizado 2025 sobre la legalidad de la fumigación con drones en Argentina: regulaciones ANAC, requisitos SENASA, vacíos provinciales y recomendaciones para operadores.',
  keywords: [
    'fumigación con drones Argentina',
    'ANAC drones 2025',
    'SENASA fumigación drones',
    'regulación drones agricultura',
    'RAAC drones'
  ],
  openGraph: {
    title: '¿Es legal fumigar con drones en Argentina? – Regulaciones y requisitos (2025)',
    description: 'Análisis actualizado 2025 sobre la legalidad de la fumigación con drones en Argentina: regulaciones ANAC, requisitos SENASA, vacíos provinciales y recomendaciones para operadores.',
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
                8 min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                AgryFly
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              ¿Es legal fumigar con drones en Argentina? – Regulaciones y requisitos (2025)
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
              Análisis actualizado 2025 sobre la legalidad de la fumigación con drones en Argentina: regulaciones ANAC, requisitos SENASA, vacíos provinciales y recomendaciones para operadores.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Normativa</Badge>
              <Badge variant="outline">ANAC</Badge>
              <Badge variant="outline">SENASA</Badge>
            </div>
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                El uso de drones en agricultura ya no es una novedad: es una realidad que crece año a año en la Argentina y en todo el mundo. Sin embargo, una de las preguntas más frecuentes entre productores, asesores técnicos y contratistas es si <strong>fumigar con drones es legal en Argentina</strong>. La cuestión no es menor: más allá de la capacidad tecnológica, la viabilidad depende del marco legal. En 2025, el escenario está marcado por una actualización normativa de la Administración Nacional de Aviación Civil (ANAC), discusiones en el Servicio Nacional de Sanidad y Calidad Agroalimentaria (SENASA) y ordenanzas provinciales y municipales que generan un mosaico regulatorio complejo. Este artículo analiza en profundidad el estado de situación, los requisitos y las limitaciones para operar drones fumigadores en el país.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">El marco legal aeronáutico: la mirada de ANAC</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En agosto de 2025, la ANAC promulgó la Resolución 550/2025, que moderniza la regulación de aeronaves no tripuladas en Argentina. Esta norma reemplaza la antigua Resolución 880/2019 y adopta un esquema de <strong>categorías de operación basadas en el riesgo</strong>, en línea con las recomendaciones de la OACI (Organización de Aviación Civil Internacional). Según la nueva normativa, los drones agrícolas que realizan aplicaciones fitosanitarias pueden clasificarse en dos grandes grupos: los que pesan menos de 25 kg (categoría abierta) y los que superan ese peso hasta 150 kg (categoría específica). En ambos casos, el operador debe respetar requisitos técnicos, zonas de vuelo habilitadas y normas de seguridad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La categoría abierta permite operar drones de hasta 25 kg en zonas rurales sin necesidad de licencia de piloto ni autorización previa, siempre que se respete el espacio aéreo y no se comprometa la seguridad de terceros. La categoría específica, en cambio, exige registro formal del dron en ANAC, licencias de piloto remoto, un Certificado de Explotador (CETA) y un manual de operaciones aprobado. Esto significa que muchos de los drones más usados en agricultura —como el DJI Agras T40/T50 o el XAG P150— entran en este segundo grupo y requieren trámites más complejos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">La desregulación parcial: más libertad en zonas rurales</h2>
              <p className="text-gray-700 leading-relaxed">
                La nueva regulación introdujo una simplificación para los drones más livianos. Drones de menos de 250 gramos pueden volar libremente incluso en zonas urbanas; drones de hasta 25 kg pueden hacerlo en zonas rurales sin grandes exigencias burocráticas. El propio ministro de Desregulación y Transformación del Estado, Federico Sturzenegger, sostuvo en agosto de 2025 que el objetivo era "dar más libertad a los operadores, eliminando restricciones que no tenían sentido práctico para el agro". Sin embargo, este alivio regulatorio no exime a los productores y contratistas de su responsabilidad civil ni del cumplimiento de otras normativas, como las fitosanitarias.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">El rol de SENASA y el vacío fitosanitario</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El verdadero cuello de botella está en el SENASA. Según la legislación vigente, cualquier aplicación de fitosanitarios debe realizarse siguiendo lo indicado en la etiqueta del producto. El problema es que, hasta 2025, <strong>muy pocos productos cuentan con autorización explícita para ser aplicados con drones</strong>. Esto significa que, aun cuando ANAC permita la operación aérea, si el marbete no contempla la técnica, el productor o contratista incurre en un uso no autorizado.
              </p>
              <p className="text-gray-700 leading-relaxed">
                SENASA inició en 2024 un proceso de revisión de etiquetas para incluir la aplicación con drones en fitosanitarios de uso masivo, pero la velocidad del trámite no acompaña el crecimiento del mercado. Esto genera un área gris: muchas empresas ya ofrecen servicios de fumigación con drones, respaldándose en la seguridad de la técnica y en la aceptación de facto de su uso, aunque formalmente no todas las aplicaciones cuentan con cobertura legal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Las provincias y municipios: un mosaico regulatorio</h2>
              <p className="text-gray-700 leading-relaxed">
                La regulación no termina en ANAC y SENASA. Provincias y municipios tienen competencias en materia de sanidad vegetal y uso de agroquímicos, lo que multiplica las interpretaciones. En Santa Fe, por ejemplo, algunos municipios aprobaron ordenanzas que regulan el uso de drones para aplicaciones periurbanas, mientras que en otras localidades directamente se prohibió ante la falta de normativa nacional clara. El caso de Ramallo (Santa Fe) en julio de 2025 fue paradigmático: una ordenanza local habilitó el uso de drones para fumigación, generando polémica por adelantarse a la definición de SENASA y ANAC.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En Córdoba, el Ministerio de Agricultura provincial reconoció el potencial de la tecnología y permite ensayos bajo supervisión, pero exige que los contratistas estén inscriptos y que los drones tengan documentación aeronáutica válida. En Buenos Aires, la situación es más fragmentada: algunos partidos habilitan pruebas, otros aplican las mismas restricciones que para avionetas y pulverizadoras terrestres.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisitos legales según categoría</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspecto</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Drones &lt;25 kg (Categoría abierta)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Drones 25–150 kg (Categoría específica)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Registro en ANAC</td>
                      <td className="border border-gray-300 px-4 py-2">No obligatorio, solo declaración digital</td>
                      <td className="border border-gray-300 px-4 py-2">Obligatorio con matrícula</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Licencia de piloto remoto</td>
                      <td className="border border-gray-300 px-4 py-2">No exigida</td>
                      <td className="border border-gray-300 px-4 py-2">Obligatoria</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Certificado de explotador (CETA)</td>
                      <td className="border border-gray-300 px-4 py-2">No requerido</td>
                      <td className="border border-gray-300 px-4 py-2">Obligatorio</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Manual de operaciones</td>
                      <td className="border border-gray-300 px-4 py-2">No requerido</td>
                      <td className="border border-gray-300 px-4 py-2">Obligatorio</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Ámbito de operación</td>
                      <td className="border border-gray-300 px-4 py-2">Zonas rurales abiertas</td>
                      <td className="border border-gray-300 px-4 py-2">Zonas rurales y periurbanas con autorización</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Etiqueta SENASA</td>
                      <td className="border border-gray-300 px-4 py-2">Debe contemplar el uso con drones, salvo vacío normativo</td>
                      <td className="border border-gray-300 px-4 py-2">Debe contemplar el uso con drones, salvo vacío normativo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsabilidades y riesgos legales</h2>
              <p className="text-gray-700 leading-relaxed">
                Aunque ANAC haya simplificado requisitos y SENASA avance lentamente, el operador sigue siendo el principal responsable. Si se realiza una aplicación sin respaldo en la etiqueta, el contratista puede enfrentar sanciones administrativas, demandas civiles por daños a terceros e incluso imputaciones penales en caso de incidentes. Además, las aseguradoras aún no ofrecen coberturas amplias para aplicaciones con drones, lo que deja a muchos servicios expuestos. Por eso, los especialistas recomiendan trabajar solo con operadores registrados, con manual de operaciones aprobado, y solicitar informes técnicos de cada aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios de la formalización regulatoria</h2>
              <p className="text-gray-700 leading-relaxed">
                Pese a las dificultades, la existencia de un marco legal más claro trae beneficios para el sector. Primero, otorga seguridad jurídica a los contratistas y productores, que pueden planificar inversiones sin temor a prohibiciones sorpresivas. Segundo, permite que SENASA y ANAC avancen en la profesionalización del sector, con capacitaciones, licencias y protocolos estandarizados. Tercero, favorece la entrada de empresas de seguros y financiamiento, que exigen claridad normativa para cubrir riesgos. En resumen, la formalización no solo protege a terceros y al ambiente, sino que abre la puerta a un crecimiento ordenado del mercado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Desafíos pendientes</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Actualización de etiquetas SENASA</h3>
                    <p className="text-gray-700">La mayoría de los fitosanitarios aún no especifican drones como método válido de aplicación.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Capacitación de pilotos remotos</h3>
                    <p className="text-gray-700">Es necesario escalar programas de formación con foco en seguridad, BPA y conocimiento de normativas locales.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Homologación de equipos</h3>
                    <p className="text-gray-700">Falta un registro nacional de drones agrícolas homologados con especificaciones técnicas validadas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Coordinación interjurisdiccional</h3>
                    <p className="text-gray-700">Urge una armonización entre ANAC, SENASA, provincias y municipios para evitar contradicciones normativas.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                En 2025, la fumigación con drones en Argentina es legal desde el punto de vista aeronáutico: ANAC permite y regula la operación de drones agrícolas bajo un esquema flexible. Sin embargo, desde el punto de vista fitosanitario la situación es más ambigua: SENASA aún no ha actualizado la mayoría de las etiquetas, lo que limita la legalidad formal de muchas aplicaciones. A esto se suma la dispersión regulatoria a nivel provincial y municipal, que genera incertidumbre operativa.
              </p>
              <p className="text-gray-700 leading-relaxed">
                La recomendación para productores y contratistas es clara: trabajar con operadores registrados, verificar cada etiqueta de producto antes de aplicar, y documentar todas las operaciones. El sector avanza, pero su consolidación dependerá de que SENASA y las provincias acompañen el dinamismo que ya mostró ANAC en materia aeronáutica. La tendencia global es clara: los drones llegaron para quedarse en la agricultura, y Argentina deberá ajustar su marco normativo para aprovechar al máximo sus beneficios sin poner en riesgo la seguridad ni la legalidad.
              </p>
            </section>

            {/* Fuentes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuentes</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• ANAC, Resolución 550/2025, RAAC 100, 101 y 102</li>
                  <li>• Aviacionline, 2025. "Argentina modernizes its drone regulations with a new ANAC regulatory framework"</li>
                  <li>• Infobae, 2025. "El Gobierno desreguló el uso de drones y eliminó restricciones para operar equipos inferiores a 250 gramos"</li>
                  <li>• La Voz de Ramallo, 2025. "Polémica por la ordenanza de uso de drones para fumigación"</li>
                  <li>• SENASA, lineamientos sobre uso de fitosanitarios</li>
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
