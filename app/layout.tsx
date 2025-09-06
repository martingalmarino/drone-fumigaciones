import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'AgryFly: Drones Agrícolas, Fumigación y Precisión en Argentina',
    template: '%s | AgryFly'
  },
  description: 'El hub más completo de drones agrícolas en Argentina. En AgryFly comparás proveedores, accedés a guías especializadas y encontrás empresas certificadas.',
  keywords: ['drones agrícolas', 'fumigación con drones', 'Argentina', 'agricultura de precisión', 'pulverización', 'drones fumigadores'],
  authors: [{ name: 'AgryFly' }],
  openGraph: {
    title: 'AgryFly: Drones Agrícolas, Fumigación y Precisión en Argentina',
    description: 'El hub más completo de drones agrícolas en Argentina. En AgryFly comparás proveedores, accedés a guías especializadas y encontrás empresas certificadas.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'AgryFly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgryFly: Drones Agrícolas, Fumigación y Precisión en Argentina',
    description: 'El hub más completo de drones agrícolas en Argentina.',
  },
  robots: 'index, follow',
  verification: {
    google: '7mZkv-l_7QPWIIIUujNILkgkw93NGPm-_2wiEXYgpig',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}