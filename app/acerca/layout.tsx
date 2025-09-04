import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acerca de - Grabado de Autopartes Argentina',
  description: 'Información sobre el sitio web de grabado de autopartes Argentina. Nuestra misión es proporcionar información actualizada sobre requisitos, costos y procedimientos.',
  keywords: [
    'acerca de grabado',
    'información sitio',
    'misión grabado autopartes',
    'sobre nosotros',
    'propósito sitio',
    'información oficial'
  ],
  openGraph: {
    title: 'Acerca de - Grabado de Autopartes Argentina',
    description: 'Conoce más sobre nuestro sitio web de información sobre grabado de autopartes.',
    url: 'https://www.grabadoautopartes.com.ar/acerca',
  },
}

export default function AcercaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
