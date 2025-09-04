import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto - Grabado de Autopartes Argentina',
  description: 'Formulario de contacto para consultas sobre grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Enlaces útiles y recursos adicionales.',
  keywords: [
    'contacto grabado',
    'formulario contacto',
    'consultas grabado',
    'ayuda grabado autopartes',
    'soporte grabado',
    'información contacto'
  ],
  openGraph: {
    title: 'Contacto - Grabado de Autopartes Argentina',
    description: 'Formulario de contacto y enlaces útiles para consultas sobre grabado de autopartes.',
    url: 'https://www.grabadoautopartes.com.ar/contacto',
  },
  alternates: {
    canonical: 'https://www.grabadoautopartes.com.ar/contacto',
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
