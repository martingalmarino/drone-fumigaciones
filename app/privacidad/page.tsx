import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Fumigación Drones Argentina',
  description: 'Política de privacidad y protección de datos personales de Fumigación Drones Argentina.',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Política de Privacidad
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
              <h2>1. Información que Recopilamos</h2>
              <p>Recopilamos información que usted nos proporciona directamente, incluyendo:</p>
              <ul>
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Información de solicitudes de cotización</li>
                <li>Comentarios y consultas</li>
                <li>Información de navegación y uso del sitio web</li>
              </ul>

              <h2>2. Cómo Utilizamos su Información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Conectarle con empresas relevantes</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Enviar actualizaciones sobre nuestros servicios</li>
                <li>Analizar el uso del sitio web para mejorarlo</li>
              </ul>

              <h2>3. Compartir Información</h2>
              <p>
                No vendemos, alquilamos ni compartimos su información personal con 
                terceros, excepto en las siguientes circunstancias:
              </p>
              <ul>
                <li>Con empresas listadas en nuestro directorio cuando solicite cotizaciones</li>
                <li>Con proveedores de servicios que nos ayudan a operar nuestro sitio web</li>
                <li>Cuando sea requerido por ley</li>
                <li>Con su consentimiento explícito</li>
              </ul>

              <h2>4. Cookies y Tecnologías Similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia 
                en nuestro sitio web, analizar el tráfico y personalizar el contenido. 
                Puede controlar el uso de cookies a través de la configuración de su navegador.
              </p>

              <h2>5. Seguridad de la Información</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas 
                para proteger su información personal contra acceso no autorizado, 
                alteración, divulgación o destrucción.
              </p>

              <h2>6. Retención de Datos</h2>
              <p>
                Conservamos su información personal solo durante el tiempo necesario 
                para cumplir con los propósitos descritos en esta política, a menos 
                que la ley requiera un período de retención más largo.
              </p>

              <h2>7. Sus Derechos</h2>
              <p>Usted tiene derecho a:</p>
              <ul>
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>

              <h2>8. Menores de Edad</h2>
              <p>
                Nuestros servicios no están dirigidos a menores de 18 años. 
                No recopilamos conscientemente información personal de menores 
                sin el consentimiento de sus padres o tutores.
              </p>

              <h2>9. Cambios a esta Política</h2>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente. 
                Le notificaremos sobre cambios significativos publicando la nueva 
                política en nuestro sitio web.
              </p>

              <h2>10. Contacto</h2>
              <p>
                Si tiene preguntas sobre esta política de privacidad o desea 
                ejercer sus derechos, puede contactarnos en: 
                privacidad@agrifly.com.ar
              </p>

              <h2>11. Cumplimiento Legal</h2>
              <p>
                Esta política cumple con la Ley de Protección de Datos Personales 
                de Argentina (Ley 25.326) y el Reglamento General de Protección 
                de Datos (RGPD) de la Unión Europea.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}