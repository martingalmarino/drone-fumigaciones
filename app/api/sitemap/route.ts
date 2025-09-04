import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
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
  ]

  // Dynamic pages
  const provinces = await prisma.province.findMany({
    select: { slug: true }
  })

  const companies = await prisma.company.findMany({
    select: { slug: true, province: { select: { slug: true } } }
  })

  const articles = await prisma.article.findMany({
    where: { published: true },
    select: { slug: true }
  })

  const reviews = await prisma.review.findMany({
    select: { slug: true }
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  
  ${provinces.map(province => `
  <url>
    <loc>${baseUrl}/directorio/${province.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
  
  ${companies.map(company => `
  <url>
    <loc>${baseUrl}/directorio/empresa/${company.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  
  ${articles.map(article => `
  <url>
    <loc>${baseUrl}/blog/${article.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  
  ${reviews.map(review => `
  <url>
    <loc>${baseUrl}/reviews/${review.slug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
