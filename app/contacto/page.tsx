import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contacto | Fumigación Drones Argentina',
  description: 'Ponte en contacto con nuestro equipo. Estamos aquí para ayudarte con tus consultas sobre fumigación con drones.',
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    description: 'info@fumigaciondrones.com',
    href: 'mailto:info@fumigaciondrones.com'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    description: '+54 11 1234-5678',
    href: 'tel:+541112345678'
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    description: 'Buenos Aires, Argentina',
    href: '#'
  },
  {
    icon: Clock,
    title: 'Horarios',
    description: 'Lun - Vie: 9:00 - 18:00',
    href: '#'
  }
]

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contacto
            </h1>
            <p className="text-xl text-gray-600">
              Estamos aquí para ayudarte con tus consultas
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre *
                      </label>
                      <Input
                        type="text"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      placeholder="+54 9 11 1234-5678"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <Input
                      type="text"
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      rows={6}
                      placeholder="Describe tu consulta o necesidad..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Información de Contacto
              </h2>
              <p className="text-gray-600 mb-6">
                Estamos disponibles para responder tus consultas sobre fumigación con drones, 
                empresas certificadas, normativas y cualquier otra información que necesites.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                        <a
                          href={info.href}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {info.description}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Link */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-2">
                  ¿Tienes preguntas frecuentes?
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Revisa nuestra sección de preguntas frecuentes donde respondemos 
                  las consultas más comunes sobre fumigación con drones.
                </p>
                <Button asChild variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  <a href="/faq">Ver FAQ</a>
                </Button>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-900 mb-2">
                  Tiempo de Respuesta
                </h3>
                <p className="text-green-700 text-sm">
                  Nos comprometemos a responder todas las consultas en un plazo máximo 
                  de 24 horas durante días hábiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  ¿Eres una empresa de fumigación con drones?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Si ofreces servicios de fumigación con drones y quieres formar parte 
                  de nuestro directorio, contáctanos para conocer los requisitos y 
                  beneficios de ser una empresa certificada.
                </p>
                <Button asChild size="lg">
                  <a href="mailto:empresas@fumigaciondrones.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Registrar Mi Empresa
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}