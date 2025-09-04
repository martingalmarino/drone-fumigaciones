import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.grabadoautopartes.com.ar'
  const currentDate = new Date().toISOString()

  // Páginas estáticas
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/jurisdicciones`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mapa`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guias`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/acerca`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Jurisdicciones disponibles
  const jurisdicciones = [
    'caba',
    'buenos-aires',
    'cordoba',
    'santa-fe',
    'mendoza',
    'rio-negro',
    'san-juan',
    'tucuman',
    'chaco',
    'misiones',
    'catamarca',
    'chubut',
    'corrientes',
    'entre-rios',
    'formosa',
    'jujuy',
    'la-pampa',
    'la-rioja',
    'neuquen',
    'salta',
    'san-luis',
    'santa-cruz',
    'santiago-del-estero',
    'tierra-del-fuego',
  ]

  // Secciones por jurisdicción
  const secciones = ['grabado', 'rpa-rpm', 'cedulas', 'centros']

  // Generar páginas de jurisdicciones
  const jurisdictionPages = jurisdicciones.flatMap((jurisdiccion) =>
    secciones.map((seccion) => ({
      url: `${baseUrl}/j/${jurisdiccion}/${seccion}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  )

  return [...staticPages, ...jurisdictionPages]
}