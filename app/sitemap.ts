import { MetadataRoute } from 'next'
import { prisma } from '@/lib/prisma'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fumigaciondrones.com'
  
  // Static pages
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

  // Dynamic pages
  const [provinces, companies, articles, reviews] = await Promise.all([
    prisma.province.findMany({ select: { slug: true } }),
    prisma.company.findMany({ select: { slug: true } }),
    prisma.article.findMany({ 
      where: { published: true },
      select: { slug: true, updatedAt: true } 
    }),
    prisma.review.findMany({ 
      select: { slug: true, updatedAt: true } 
    }),
  ])

  const dynamicPages = [
    ...provinces.map((province) => ({
      url: `${baseUrl}/directorio/${province.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...companies.map((company) => ({
      url: `${baseUrl}/directorio/empresa/${company.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...reviews.map((review) => ({
      url: `${baseUrl}/reviews/${review.slug}`,
      lastModified: review.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]

  return [...staticPages, ...dynamicPages]
}