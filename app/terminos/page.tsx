import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Fumigación Drones Argentina',
  description: 'Términos y condiciones de uso de la plataforma Fumigación Drones Argentina.',
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-gray-600">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <h2>1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web Fumigación Drones Argentina, 
                usted acepta estar sujeto a estos términos y condiciones de uso. 
                Si no está de acuerdo con alguna parte de estos términos, 
                no debe utilizar nuestro sitio web.
              </p>

              <h2>2. Descripción del Servicio</h2>
              <p>
                Fumigación Drones Argentina es una plataforma informativa que 
                proporciona un directorio de empresas de fumigación con drones, 
                contenido educativo y herramientas para conectar productores 
                agrícolas con proveedores de servicios.
              </p>

              <h2>3. Uso del Sitio Web</h2>
              <p>Usted se compromete a:</p>
              <ul>
                <li>Utilizar el sitio web únicamente para fines legales y legítimos</li>
                <li>No interferir con el funcionamiento del sitio web</li>
                <li>No intentar acceder a áreas restringidas del sitio</li>
                <li>Proporcionar información veraz y actualizada cuando sea requerida</li>
              </ul>

              <h2>4. Contenido y Propiedad Intelectual</h2>
              <p>
                Todo el contenido del sitio web, incluyendo textos, imágenes, 
                logotipos, y software, es propiedad de Fumigación Drones Argentina 
                o de sus licenciantes y está protegido por las leyes de propiedad 
                intelectual.
              </p>

              <h2>5. Información de Empresas</h2>
              <p>
                La información sobre empresas y servicios es proporcionada por 
                terceros. Aunque nos esforzamos por mantener información precisa 
                y actualizada, no garantizamos la exactitud, completitud o 
                actualidad de dicha información.
              </p>

              <h2>6. Limitación de Responsabilidad</h2>
              <p>
                Fumigación Drones Argentina no será responsable por daños directos, 
                indirectos, incidentales o consecuenciales que puedan resultar del 
                uso o la imposibilidad de usar nuestro sitio web o los servicios 
                ofrecidos por empresas listadas.
              </p>

              <h2>7. Enlaces a Terceros</h2>
              <p>
                Nuestro sitio web puede contener enlaces a sitios web de terceros. 
                No tenemos control sobre el contenido de estos sitios y no somos 
                responsables por su contenido o políticas de privacidad.
              </p>

              <h2>8. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos y condiciones 
                en cualquier momento. Las modificaciones entrarán en vigor 
                inmediatamente después de su publicación en el sitio web.
              </p>

              <h2>9. Ley Aplicable</h2>
              <p>
                Estos términos y condiciones se rigen por las leyes de la República 
                Argentina. Cualquier disputa será resuelta en los tribunales 
                competentes de Buenos Aires, Argentina.
              </p>

              <h2>10. Contacto</h2>
              <p>
                Si tiene preguntas sobre estos términos y condiciones, puede 
                contactarnos en: info@fumigaciondrones.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}