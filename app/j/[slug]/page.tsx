'use client'

import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'

export default function JurisdictionPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  useEffect(() => {
    // Redirect to grabado tab by default
    router.replace(`/j/${slug}/grabado`)
  }, [slug, router])

  return null
}
