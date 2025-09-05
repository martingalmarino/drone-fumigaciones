import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react'

const footerLinks = {
  empresa: [
    { name: 'Acerca de', href: '/acerca' },
    { name: 'Contacto', href: '/contacto' },
    { name: 'Términos y Condiciones', href: '/terminos' },
    { name: 'Política de Privacidad', href: '/privacidad' },
  ],
  servicios: [
    { name: 'Fumigación con Drones', href: '/blog/que-es-fumigacion-con-drones' },
    { name: 'Directorio de Empresas', href: '/directorio' },
    { name: 'Reviews de Drones', href: '/reviews' },
    { name: 'Guías y Tutoriales', href: '/blog' },
  ],
  provincias: [
    { name: 'Córdoba', href: '/directorio/cordoba' },
    { name: 'Santa Fe', href: '/directorio/santa-fe' },
    { name: 'Buenos Aires', href: '/directorio/buenos-aires' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FD</span>
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold">
                Fumigación Drones
              </span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
              El directorio más completo de empresas de fumigación con drones en Argentina. 
              Encuentra proveedores certificados y tecnología de última generación.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces de empresa */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Empresa
            </h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de servicios */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Provincias */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Provincias
            </h3>
            <ul className="space-y-2">
              {footerLinks.provincias.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Aviso legal */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs sm:text-sm text-gray-400">
              <p>
                © 2025 Fumigación Drones Argentina. Todos los derechos reservados.
              </p>
              <p className="mt-1">
                Información proporcionada con fines informativos. Consulte siempre con profesionales certificados.
              </p>
              <p className="mt-2">
                Desarrollado por{' '}
                <a 
                  href="mailto:m.galmarino@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Martín Galmarino
                </a>{' '}
                🤖
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Argentina
              </span>
              <a
                href="mailto:info@fumigaciondrones.com"
                className="flex items-center hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-1" />
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-900/20 border border-yellow-800/30 rounded-lg">
          <p className="text-xs sm:text-sm text-yellow-200 leading-relaxed">
            <strong>Importante:</strong> El uso de productos fitosanitarios debe realizarse 
            siguiendo las normativas vigentes y con personal certificado. Consulte siempre 
            con profesionales habilitados y respete las buenas prácticas agrícolas.
          </p>
        </div>
      </div>
    </footer>
  )
}