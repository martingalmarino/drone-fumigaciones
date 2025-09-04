import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guías - Grabado de Autopartes Argentina',
  description: 'Guías completas y artículos informativos sobre grabado de autopartes, RPA/RPM, cédulas digitales y trámites registrales en Argentina.',
  keywords: [
    'guías grabado autopartes',
    'artículos informativos',
    'tutoriales grabado',
    'guías RPA RPM',
    'cédula digital guía',
    'trámites registrales'
  ],
  openGraph: {
    title: 'Guías - Grabado de Autopartes Argentina',
    description: 'Guías completas sobre grabado de autopartes y trámites registrales en Argentina.',
    url: 'https://www.grabadoautopartes.com.ar/guias',
  },
  alternates: {
    canonical: 'https://www.grabadoautopartes.com.ar/guias',
  },
}

export default function GuiasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
