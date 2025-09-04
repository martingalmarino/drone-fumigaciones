import Head from 'next/head'

interface SeoHeadProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
  jsonLd?: object
}

export default function SeoHead({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  noindex = false,
  jsonLd,
}: SeoHeadProps) {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://fumigaciondrones.com'
  const fullTitle = title.includes('Fumigación Drones') ? title : `${title} | Fumigación Drones Argentina`
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Canonical */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Fumigación Drones Argentina" />
      <meta property="og:locale" content="es_AR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional meta tags */}
      <meta name="author" content="Fumigación Drones Argentina" />
      <meta name="language" content="es-AR" />
      <meta name="geo.region" content="AR" />
      <meta name="geo.country" content="Argentina" />
      
      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  )
}
