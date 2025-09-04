import { Metadata } from 'next'
import { Target, Users, Award, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Acerca de Nosotros | Fumigación Drones Argentina',
  description: 'Conoce nuestra misión de conectar productores con empresas certificadas de fumigación con drones en Argentina.',
}

const values = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description: 'Conectar productores agrícolas con empresas certificadas de fumigación con drones, facilitando el acceso a tecnología de vanguardia y servicios de calidad.'
  },
  {
    icon: Users,
    title: 'Nuestro Equipo',
    description: 'Somos un equipo de profesionales con amplia experiencia en agricultura, tecnología y marketing digital, comprometidos con el desarrollo del sector.'
  },
  {
    icon: Award,
    title: 'Nuestros Valores',
    description: 'Transparencia, calidad, innovación y compromiso con el desarrollo sostenible de la agricultura argentina.'
  },
  {
    icon: Globe,
    title: 'Nuestro Impacto',
    description: 'Contribuimos al crecimiento del sector agrícola argentino promoviendo tecnologías eficientes y sostenibles.'
  }
]

export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Acerca de Nosotros
            </h1>
            <p className="text-xl text-gray-600">
              Conectando productores con tecnología de vanguardia
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Quiénes somos?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">
              Fumigación Drones Argentina es el directorio más completo y confiable 
              de empresas certificadas de fumigación con drones en el país. Nacimos 
              con la visión de democratizar el acceso a esta tecnología revolucionaria 
              que está transformando la agricultura moderna.
            </p>
            <p className="text-gray-600 mb-4">
              Nuestra plataforma conecta productores agrícolas con empresas especializadas, 
              facilitando la búsqueda de servicios de calidad, información técnica actualizada 
              y herramientas para tomar decisiones informadas sobre la implementación de 
              drones en sus operaciones.
            </p>
            <p className="text-gray-600">
              Creemos en el poder de la tecnología para hacer la agricultura más eficiente, 
              sostenible y rentable. Por eso, trabajamos día a día para mantener actualizada 
              nuestra base de datos, crear contenido educativo de calidad y facilitar el 
              acceso a servicios profesionales certificados.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nuestros Pilares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What we offer */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ¿Qué ofrecemos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Directorio de Empresas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Base de datos completa de empresas certificadas con filtros por provincia, 
                  servicios y equipos disponibles.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Reviews y Análisis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Análisis detallado de drones agrícolas, especificaciones técnicas, 
                  pros, contras y comparativas.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Contenido Educativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Guías, tutoriales y artículos especializados sobre fumigación con drones 
                  y agricultura de precisión.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nuestro Impacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Empresas Certificadas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">Provincias Cubiertas</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <p className="text-gray-600">Usuarios Mensuales</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-600">Soporte Disponible</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-primary text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¿Quieres formar parte de nuestra comunidad?
            </h3>
            <p className="text-lg mb-6 text-green-100">
              Únete a productores y empresas que ya están transformando la agricultura argentina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/directorio"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-100 transition-colors"
              >
                Explorar Directorio
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors"
              >
                Contactar Equipo
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}