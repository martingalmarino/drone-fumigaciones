import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Mail, Phone, Calendar, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AdSlot from '@/components/AdSlot'
import SeoHead from '@/components/SeoHead'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: '¡Gracias por tu consulta! | Fumigación con Drones Argentina',
  description: 'Tu consulta ha sido enviada exitosamente. Te contactaremos pronto con la mejor propuesta para tus necesidades de fumigación con drones.',
  robots: 'noindex, nofollow', // No indexar esta página
}

export default function ThanksPage() {
  return (
    <>
      <SeoHead
        title="¡Gracias por tu consulta!"
        description="Tu consulta ha sido enviada exitosamente. Te contactaremos pronto con la mejor propuesta para tus necesidades de fumigación con drones."
        canonical="/gracias"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: 'Gracias' }]} />

          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Gracias por tu consulta!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Tu solicitud de cotización ha sido enviada exitosamente. 
              Te contactaremos en las próximas 24 horas con la mejor propuesta 
              para tus necesidades de fumigación con drones.
            </p>
          </div>

          <AdSlot variant="banner" className="my-8" />

          {/* What's Next */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">1. Confirmación</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Recibirás un email de confirmación con los detalles de tu consulta
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4 mx-auto">
                  <Phone className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle className="text-lg">2. Contacto</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Te contactaremos por teléfono o WhatsApp para coordinar una visita
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">3. Propuesta</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Recibirás una propuesta personalizada con precios y cronograma
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  ¿Por qué elegirnos?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Empresas certificadas y con experiencia comprobada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Tecnología de drones de última generación</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Precios competitivos y transparentes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Servicio personalizado según tus necesidades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Soporte técnico durante todo el proceso</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tiempo de respuesta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Respuesta inicial:</span>
                    <span className="text-green-600 font-semibold">24 horas</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Propuesta detallada:</span>
                    <span className="text-blue-600 font-semibold">48-72 horas</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Visita técnica:</span>
                    <span className="text-yellow-600 font-semibold">A coordinar</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <AdSlot variant="leaderboard" className="my-12" />

          {/* Next Steps */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Mientras tanto, puedes explorar más
            </h2>
            <p className="text-gray-600 mb-8">
              Descubre más sobre fumigación con drones y encuentra información útil
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/blog">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Leer Artículos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/reviews">
                  Ver Reviews de Drones
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/directorio">
                  Explorar Empresas
                </Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
              <p className="text-lg mb-6 text-green-100">
                Si tienes alguna pregunta urgente, no dudes en contactarnos directamente
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-white text-primary hover:bg-gray-100">
                  <Link href="/contacto">
                    Contactar Ahora
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link href="/faq">
                    Ver FAQ
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
