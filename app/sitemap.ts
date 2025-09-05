import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fumigaciondrones.com'
  
  // Static pages only for now
  const staticPages = [
    '',
    '/blog',
    '/reviews',
    '/directorio',
    '/cotizar',
    '/faq',
    '/acerca',
    '/contacto',
    '/terminos',
    '/privacidad',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return staticPages
}