import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR">
      <head>
        <title>Fumigación con Drones Argentina</title>
        <meta name="description" content="El directorio más completo de empresas de fumigación con drones en Argentina" />
        <meta name="google-site-verification" content="7mZkv-l_7QPWIIIUujNILkgkw93NGPm-_2wiEXYgpig" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}