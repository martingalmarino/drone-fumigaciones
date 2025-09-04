import { redirect } from 'next/navigation'

interface JurisdictionPageProps {
  params: { slug: string }
}

export default function JurisdictionPage({ params }: JurisdictionPageProps) {
  // Redirect to grabado tab by default
  redirect(`/j/${params.slug}/grabado`)
}
