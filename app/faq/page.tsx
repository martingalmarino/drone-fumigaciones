import { Metadata } from 'next'
import Link from 'next/link'
import { HelpCircle, ArrowRight, Calculator, Users, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Fumigación con Drones Argentina',
  description: 'Respuestas a las preguntas más comunes sobre fumigación con drones: legalidad, costos, requisitos y más.',
}

const quickLinks = [
  {
    title: 'Solicitar Cotización',
    description: 'Obtén propuestas de empresas certificadas',
    href: '/cotizar',
    icon: Calculator,
  },
  {
    title: 'Ver Directorio',
    description: 'Encuentra empresas en tu provincia',
    href: '/directorio',
    icon: Users,
  },
  {
    title: 'Leer Guías',
    description: 'Aprende sobre fumigación con drones',
    href: '/blog',
    icon: BookOpen,
  },
]

export default async function FAQPage() {
  // Hardcoded FAQs data for now
  const faqs = [
    {
      id: '1',
      question: '¿Es legal fumigar con drones en Argentina?',
      answerMdx: 'Sí, es legal fumigar con drones en Argentina. Sin embargo, requiere certificaciones específicas de ANAC (Administración Nacional de Aviación Civil) y CEVANT (Centro de Validación de Tecnologías Nucleares). Las empresas deben estar registradas y cumplir con todas las normativas vigentes.',
      createdAt: new Date()
    },
    {
      id: '2',
      question: '¿Cuánto cuesta fumigar con drones por hectárea?',
      answerMdx: 'El costo varía entre $15,000 y $35,000 pesos argentinos por hectárea, dependiendo del tipo de cultivo, tamaño del lote, tipo de producto a aplicar y ubicación geográfica. Los lotes más grandes suelen tener mejores precios por hectárea.',
      createdAt: new Date()
    },
    {
      id: '3',
      question: '¿Qué ventajas tiene la fumigación con drones?',
      answerMdx: 'Las principales ventajas incluyen: mayor precisión en la aplicación, reducción del uso de productos químicos, menor compactación del suelo, acceso a terrenos difíciles, menor tiempo de aplicación y mejor cobertura del cultivo.',
      createdAt: new Date()
    },
    {
      id: '4',
      question: '¿Qué tipos de productos se pueden aplicar con drones?',
      answerMdx: 'Los drones pueden aplicar herbicidas, insecticidas, fungicidas, fertilizantes líquidos y algunos productos biológicos. Es importante verificar la compatibilidad del producto con la tecnología de aplicación aérea.',
      createdAt: new Date()
    },
    {
      id: '5',
      question: '¿Cuántas hectáreas puede fumigar un drone por día?',
      answerMdx: 'Un drone agrícola puede fumigar entre 50 y 150 hectáreas por día, dependiendo del modelo, tipo de cultivo, condiciones climáticas y logística. Los drones más grandes y eficientes pueden cubrir más superficie.',
      createdAt: new Date()
    }
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answerMdx.replace(/<[^>]*>/g, '')
      }
    }))
  }

  return (
    <>
      <SeoHead
        title="Preguntas Frecuentes"
        description="Respuestas a las preguntas más comunes sobre fumigación con drones: legalidad, costos, requisitos y más."
        canonical="/faq"
        jsonLd={jsonLd}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
              <p className="text-xl text-gray-600">
                Encuentra respuestas a las dudas más comunes sobre fumigación con drones
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickLinks.map((link) => (
              <Card key={link.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={link.href}>
                      Acceder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Preguntas Más Frecuentes
              </h2>
              <p className="text-gray-600">
                Hemos recopilado las consultas más comunes de nuestros usuarios
              </p>
            </div>

            {faqs.map((faq, index) => (
              <Card key={faq.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-start">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: faq.answerMdx.replace(/\n/g, '<br>') }} />
                      </div>
                </CardContent>
              </Card>
            ))}
        </div>

          {/* Ad Slot */}
          <AdSlot variant="leaderboard" className="my-12" />

          {/* Contact Section */}
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-lg mb-6 text-green-100">
                Nuestro equipo de expertos está aquí para ayudarte
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/contacto">
                    Contactar Soporte
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/cotizar">
                    Solicitar Consulta
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Topics */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Temas Relacionados
          </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Normativas y Legalidad</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Todo sobre certificaciones ANAC, CEVANT y requisitos legales
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blog/es-legal-fumigar-con-drones-argentina">
                      Leer más
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Costos y Precios</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Información sobre precios por hectárea y factores que influyen
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blog/beneficios-fumigacion-con-drones">
                      Leer más
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Tecnología y Equipos</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Guías sobre drones, características y especificaciones
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/reviews">
                      Ver reviews
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Casos de Éxito</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Experiencias reales de productores en Argentina
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/blog/casos-exito-argentina">
                      Leer casos
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}