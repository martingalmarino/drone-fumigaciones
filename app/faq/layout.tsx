import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Grabado de Autopartes Argentina',
  description: 'Preguntas frecuentes sobre grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Respuestas a las dudas más comunes sobre requisitos, costos y procedimientos.',
  keywords: [
    'preguntas frecuentes grabado',
    'FAQ grabado autopartes',
    'dudas grabado',
    'consultas grabado',
    'ayuda grabado',
    'información grabado'
  ],
  openGraph: {
    title: 'Preguntas Frecuentes - Grabado de Autopartes Argentina',
    description: 'Respuestas a las preguntas más frecuentes sobre grabado de autopartes en Argentina.',
    url: 'https://www.grabadoautopartes.com.ar/faq',
  },
  alternates: {
    canonical: 'https://www.grabadoautopartes.com.ar/faq',
  },
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
