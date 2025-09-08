import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.agrifly.com.ar'
  
  const robots = `User-agent: *
Allow: /

# Disallow admin area
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /blog/
Allow: /reviews/
Allow: /directorio/
Allow: /cotizar
Allow: /faq

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay
Crawl-delay: 1`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
