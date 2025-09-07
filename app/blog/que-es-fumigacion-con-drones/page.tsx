import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '¿Qué es la fumigación con drones y cómo funciona? | AgriFly',
  description: 'Guía completa sobre fumigación con drones: qué es, cómo operan los drones pulverizadores, componentes, flujo de trabajo, ventajas y diferencias con la fumigación tradicional. Enfoque Argentina.',
  keywords: [
    'fumigación con drones',
    'drones agrícolas',
    'pulverización con drones',
    'agricultura de precisión',
    'aplicaciones aéreas',
    'VANT',
    'aplicación de fitosanitarios'
  ],
  openGraph: {
    title: '¿Qué es la fumigación con drones y cómo funciona?',
    description: 'Guía completa sobre fumigación con drones: qué es, cómo operan los drones pulverizadores, componentes, flujo de trabajo, ventajas y diferencias con la fumigación tradicional.',
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
                7 min de lectura
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                AgriFly
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              ¿Qué es la fumigación con drones y cómo funciona?
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
              Guía completa sobre fumigación con drones: qué es, cómo operan los drones pulverizadores, componentes, flujo de trabajo, ventajas y diferencias con la fumigación tradicional. Enfoque Argentina.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Conceptos</Badge>
              <Badge variant="outline">Tecnología</Badge>
              <Badge variant="outline">Guías</Badge>
            </div>
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introducción</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La agricultura está viviendo una transformación tecnológica sin precedentes. Sensores, imágenes satelitales, analítica y robótica desembarcaron en el campo para hacer más eficiente cada decisión. En ese contexto, la fumigación con drones —la aplicación aérea de fitosanitarios, fertilizantes o bioinsumos mediante vehículos aéreos no tripulados— pasó de ser una curiosidad a una herramienta concreta.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Su propuesta de valor combina precisión en la dosis, rapidez de despliegue, acceso a zonas donde la maquinaria terrestre no llega y una logística más liviana que los aviones. Este artículo explica, con lenguaje claro y enfoque práctico, qué es la fumigación con drones, cómo funciona un dron pulverizador en campo, sus componentes críticos y en qué se diferencia de los métodos tradicionales. Si recién estás investigando esta tecnología, aquí encontrarás una guía básica pero completa para entender su potencial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es la fumigación con drones?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La fumigación con drones es un método de aplicación aérea de productos sobre cultivos (fitosanitarios, fertilizantes líquidos o biológicos) utilizando drones especialmente diseñados para pulverizar. A diferencia de un dron recreativo o de fotografía, un dron agrícola está pensado para trabajar: integra un tanque de líquidos, un sistema de bombeo, boquillas para atomizar el caldo, sensores para mantener altura constante y navegación por GPS/RTK para seguir rutas de vuelo con precisión.
              </p>
              <p className="text-gray-700 leading-relaxed">
                El valor diferencial está en la microaplicación: un dron puede tratar con alta precisión un área puntual (por ejemplo, un manchón de malezas resistentes o un foco de plaga) sin cubrir todo el lote. Eso reduce el uso de producto, minimiza la deriva y evita la compactación de suelos que genera el paso de la maquinaria terrestre.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Componentes de un dron pulverizador (y por qué importan)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Un dron pulverizador moderno es el resultado de integrar subsistemas independientes que deben trabajar en armonía. Conocerlos ayuda a entender las posibilidades y límites de la tecnología:
              </p>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Estructura y propulsión</h3>
                    <p className="text-gray-700">La mayoría son multirrotores (4, 6 u 8 hélices). Cuantas más hélices, mayor estabilidad y capacidad de carga. El chasis debe ser rígido y liviano (fibras compuestas) para soportar tanque, bombas y electrónica.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Tanque y circuito hidráulico</h3>
                    <p className="text-gray-700">El depósito de líquido suele variar entre 10 y 50 litros según el modelo. El circuito incluye filtros, bomba(s), válvulas y retorno. Algunos equipos incorporan sensores de nivel y agitación para mantener homogénea la mezcla.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Boquillas y control de gota</h3>
                    <p className="text-gray-700">Las boquillas determinan tamaño de gota y patrón de aspersión. Con regulaciones correctas se logra el equilibrio entre cobertura y baja deriva. Hay configuraciones para líquidos y kits granulares para sólidos (siembra o fertilización).</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Sensores de vuelo y evita-obstáculos</h3>
                    <p className="text-gray-700">Incluyen radar o visión binocular para seguir el relieve, sensores barométricos para altura, y eventualmente LIDAR en equipos de gama alta. Estas ayudas mantienen la altura respecto al dosel y mejoran la seguridad.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Navegación y posicionamiento (GPS/RTK)</h3>
                    <p className="text-gray-700">El GPS de doble frecuencia con RTK brinda precisión centimétrica. Es clave para que el dron repita pasadas, respete solapes y siga prescripciones de dosis variable.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Energía y baterías</h3>
                    <p className="text-gray-700">Los motores eléctricos dependen de baterías de alta descarga. Cada ciclo típico de vuelo dura 10–25 minutos según carga y condiciones. La operación continua requiere varias baterías y un esquema de recarga en campo.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Software de planificación y telemetría</h3>
                    <p className="text-gray-700">Permite dibujar límites del lote, cargar mapas, definir altura/velocidad/caudal, generar misiones y registrar datos. La telemetría muestra en tiempo real estado del equipo, ubicación y parámetros de aplicación.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cómo funciona la fumigación con drones (paso a paso)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Aunque cada equipo y proveedor tiene su método, el flujo operativo típico en campo sigue estas etapas:
              </p>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">1) Diagnóstico y mapeo</h3>
                    <p className="text-gray-700">Se releva el lote: imágenes satelitales, mapas NDVI o vuelos previos con dron de monitoreo. El objetivo es delimitar áreas problema (plagas, malezas, enfermedades) y definir objetivos de aplicación.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">2) Planificación de misión</h3>
                    <p className="text-gray-700">En el software se cargan los límites, se elige patrón de pasadas, altura (2–4 m sobre el dosel), velocidad de avance, tamaño de gota y caudal. Si hay prescripciones, se asignan dosis variables por zona.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">3) Preparación en campo</h3>
                    <p className="text-gray-700">Se monta la base: generador o fuente de energía para cargar baterías, tanques de agua limpia y de mezcla, repuestos y EPP (elementos de protección personal). Se prepara el caldo siguiendo etiqueta y BPA.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">4) Aplicación aérea</h3>
                    <p className="text-gray-700">El dron despega y ejecuta la misión de forma autónoma. Mantiene altura y solapes, regula caudal y corta/abre boquillas en cabeceras. Operadores supervisan, controlan meteorología y seguridad del entorno.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">5) Recargas y rotación de baterías</h3>
                    <p className="text-gray-700">Luego de 10–15 minutos típicos, el dron regresa, se recarga tanque y se cambia la batería. Con logística aceitada (múltiples baterías y cargadores), la operación se vuelve prácticamente continua.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">6) Cierre e informe</h3>
                    <p className="text-gray-700">Al finalizar, se genera un reporte con hectáreas tratadas, dosis, condiciones y tiempos. Este registro facilita la trazabilidad y el cumplimiento de Buenas Prácticas Agrícolas.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-blue-800">
                  <strong>Nota:</strong> El rendimiento por día depende del modelo, dosis, densidad de obstáculos, viento y eficiencia logística. En superficies grandes se coordinan varios drones para escalar.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Diferencias con la fumigación tradicional</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Drones, equipos terrestres y aviones no se excluyen: se complementan. Esta tabla resume diferencias típicas para orientar la decisión técnica:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aspecto</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fumigación con drones</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Pulverización terrestre</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Fumigación con avión</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Capacidad por tanque</td>
                      <td className="border border-gray-300 px-4 py-2">10–50 L</td>
                      <td className="border border-gray-300 px-4 py-2">2.000–3.000 L</td>
                      <td className="border border-gray-300 px-4 py-2">600–1.000 L</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Autonomía por ciclo</td>
                      <td className="border border-gray-300 px-4 py-2">10–25 min</td>
                      <td className="border border-gray-300 px-4 py-2">Varias horas</td>
                      <td className="border border-gray-300 px-4 py-2">Vuelos de 2–3 h</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Precisión de patrón</td>
                      <td className="border border-gray-300 px-4 py-2">Muy alta (GPS/RTK, prescripciones)</td>
                      <td className="border border-gray-300 px-4 py-2">Media (depende del operario)</td>
                      <td className="border border-gray-300 px-4 py-2">Media (mayor altura)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Acceso a terrenos difíciles</td>
                      <td className="border border-gray-300 px-4 py-2">Excelente (sin pisar el lote)</td>
                      <td className="border border-gray-300 px-4 py-2">Limitado por anegamiento/altura del cultivo</td>
                      <td className="border border-gray-300 px-4 py-2">Bueno en lotes grandes y despejados</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Deriva potencial</td>
                      <td className="border border-gray-300 px-4 py-2">Baja con gota controlada y clima adecuado</td>
                      <td className="border border-gray-300 px-4 py-2">Media</td>
                      <td className="border border-gray-300 px-4 py-2">Alta si hay viento/altura</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Compactación del suelo</td>
                      <td className="border border-gray-300 px-4 py-2">Nula</td>
                      <td className="border border-gray-300 px-4 py-2">Presente (huellas/pisoteo)</td>
                      <td className="border border-gray-300 px-4 py-2">Nula</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Costo de capital</td>
                      <td className="border border-gray-300 px-4 py-2">Medio (vs. avión)</td>
                      <td className="border border-gray-300 px-4 py-2">Alto (autopropulsadas)</td>
                      <td className="border border-gray-300 px-4 py-2">Muy alto (aeronave + operación)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Seguridad del operario</td>
                      <td className="border border-gray-300 px-4 py-2">Alta (operación a distancia)</td>
                      <td className="border border-gray-300 px-4 py-2">Exposición cercana al caldo</td>
                      <td className="border border-gray-300 px-4 py-2">Riesgo para el piloto</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-4">
                <p className="text-green-800">
                  <strong>Conclusión:</strong> En focos localizados, ventanas climáticas acotadas, lotes con accesibilidad compleja o cultivos sensibles, el dron suele ser la opción eficiente. Para grandes superficies homogéneas, el avión conserva ventaja de escala. La pulverización terrestre sigue siendo la columna vertebral para aplicaciones de alto volumen.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Beneficios clave (cuándo aporta más valor)</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Aplicación precisa y dirigida</h3>
                    <p className="text-gray-700">La capacidad de tratar únicamente manchones o sectores específicos reduce el uso de producto y evita coberturas innecesarias.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Cero compactación y menor daño al cultivo</h3>
                    <p className="text-gray-700">Al no ingresar maquinaria, no se generan huellas ni pisoteo, preservando estructura y humedad del suelo y evitando pérdidas por trilla.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Acceso donde otros no llegan</h3>
                    <p className="text-gray-700">Zonas anegadas, rastrojos altos, frutales o laderas pueden tratarse sin riesgos de encaje o vuelco y con mínima perturbación.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Seguridad y salud ocupacional</h3>
                    <p className="text-gray-700">La distancia entre operario y caldo reduce exposición a fitosanitarios. Menos ruido y menor estrés operativo que aeronaves tripuladas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Ahorro de insumos y huella ambiental menor</h3>
                    <p className="text-gray-700">La dosificación fina y el control de gota limitan la deriva y el desperdicio, con impacto positivo económico y ambiental.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Respuesta rápida</h3>
                    <p className="text-gray-700">Ante un brote localizado, es posible desplegar uno o varios drones casi de inmediato, aprovechando ventanas climáticas cortas.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitaciones y desafíos actuales</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Capacidad y autonomía</h3>
                    <p className="text-gray-700">El tanque y las baterías limitan la escala por equipo. Se compensa con logística de recargas y flotas coordinadas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Sensibilidad climática</h3>
                    <p className="text-gray-700">Viento, temperatura y humedad afectan deriva y evaporación. Se requieren protocolos estrictos y criterios de corte.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Compatibilidad de formulaciones</h3>
                    <p className="text-gray-700">No todo producto pensado para alto volumen rinde igual en ultra-bajo volumen. Se debe respetar etiqueta y ensayar cuando corresponde.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Curva de aprendizaje y soporte</h3>
                    <p className="text-gray-700">El manejo competente exige capacitación, mantenimiento preventivo y disponibilidad de repuestos y baterías.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Marco regulatorio en evolución</h3>
                    <p className="text-gray-700">Las exigencias aeronáuticas y fitosanitarias existen y deben cumplirse; las etiquetas y habilitaciones se están actualizando gradualmente.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-yellow-800">
                  <strong>Nota:</strong> La correcta selección de casos de uso y la profesionalización del servicio son claves para capturar beneficios y minimizar riesgos.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Casos de uso frecuentes (ejemplos prácticos)</h2>
              
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Manchones de malezas resistentes</h3>
                    <p className="text-gray-700">Aplicaciones dirigidas de herbicidas en sectores puntuales evitan tratar todo el lote, ahorran producto y mejoran el control.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Focos de plaga o enfermedades</h3>
                    <p className="text-gray-700">Fungicidas/insecticidas precisos en ventanas estrechas, incluso cuando el campo está intransitable para equipos terrestres.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Periurbano y zonas sensibles</h3>
                    <p className="text-gray-700">Tratamientos con menor deriva potencial y mayor precisión cerca de bordes urbanos o cursos de agua, siempre respetando distancias y normativas.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">Cultivos especiales</h3>
                    <p className="text-gray-700">Frutales, hortalizas de alto valor o viñedos se benefician del vuelo rasante y la capacidad de ajustar altura y patrón.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Seguridad y Buenas Prácticas Agrícolas (BPA)</h2>
              <p className="text-gray-700 leading-relaxed">
                La profesionalización es indelegable. Toda operación debe ejecutarse con EPP, respetando etiqueta (dosis, mezcla, compatibilidades), condiciones meteorológicas y distancias de resguardo. Es clave documentar cada tratamiento: lote, producto, dosis, caudal, clima y operarios. A nivel aeronáutico, el operador debe cumplir las exigencias de registro, licencias y mantenimiento del equipo. Estas pautas protegen la salud del personal, a terceros y garantizan calidad de aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Costos, retorno y escalabilidad</h2>
              <p className="text-gray-700 leading-relaxed">
                El costo por hectárea depende de dosis, rendimiento operativo, complejidad del lote y si se trata de manchones o cobertura completa. En muchos escenarios, el ahorro en insumos por aplicación dirigida compensa —e incluso supera— el costo del servicio. Para escalar en superficies grandes, se coordinan múltiples drones con logística de recarga paralela (baterías, generadores, tanques) y roles distribuidos en el equipo de trabajo. La clave económica reside en seleccionar bien los casos de uso (alto impacto por precisión) y en la eficiencia operativa (mínimos tiempos muertos).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Situación en Argentina (mirada 2025)</h2>
              <p className="text-gray-700 leading-relaxed">
                En Argentina la adopción se acelera por demanda de precisión, ventanas climáticas más erráticas y necesidad de reducir costos/deriva. Los equipos más difundidos pertenecen a líneas especializadas (por ejemplo, familias Agras o XAG) y aparecen emprendimientos de servicio en provincias agrícolas como Córdoba, Santa Fe y Buenos Aires. El marco regulatorio aeronáutico reconoce la actividad y se simplifican procesos de registro; en materia fitosanitaria, la actualización de etiquetas y lineamientos específicos para drones avanza para brindar mayor seguridad jurídica. A medida que maduren normas, capacitación y oferta de servicio, es esperable un salto en la profesionalización y en la cantidad de hectáreas tratadas con esta tecnología.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusión</h2>
              <p className="text-gray-700 leading-relaxed">
                La fumigación con drones ya ganó su lugar como complemento de los métodos tradicionales. Brilla especialmente en aplicaciones precisas, de respuesta rápida y en condiciones de acceso difícil. Con equipos y operadores calificados, puede reducir insumos, mejorar la oportunidad de control y minimizar el impacto en suelo y ambiente. Si estás considerando incorporarla a tu estrategia, comenzá por entender bien el caso de uso, seleccioná un proveedor habilitado, revisá etiquetas y protocolos, y medí resultados. La curva de aprendizaje es real, pero los beneficios —cuando se aplica donde corresponde— son tangibles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">FAQ resumido</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">¿Qué es exactamente la fumigación con drones?</h3>
                    <p className="text-gray-700">Es la aplicación aérea de productos sobre cultivos mediante drones con tanque, bombas y boquillas que atomizan la mezcla. Siguen rutas programadas por GPS para aplicar con precisión.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">¿Un dron reemplaza a un avión o a una pulverizadora?</h3>
                    <p className="text-gray-700">No en todos los casos. Es un complemento muy eficiente para focos/localizados, ventanas cortas y zonas de difícil acceso. En grandes superficies homogéneas, el avión conserva escala; la pulverización terrestre sigue siendo clave para alto volumen.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">¿Qué limita la operación de un dron?</h3>
                    <p className="text-gray-700">Capacidad de tanque y autonomía de baterías, sensibilidad al viento y compatibilidad de formulaciones. La logística de recarga y el uso de varias unidades en paralelo mitigan estos límites.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">¿Qué necesito para operar legalmente?</h3>
                    <p className="text-gray-700">Cumplir requisitos aeronáuticos (registro, licencias) y fitosanitarios (respeto de etiquetas y BPA). Verificar normativas locales y distancias de resguardo.</p>
                  </CardContent>
                </Card>
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
