import { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog | Guías y Artículos sobre Fumigación con Drones',
  description: 'Aprende todo sobre fumigación con drones: guías, tutoriales, normativas y casos de éxito en Argentina.',
}

const categories = [
  { slug: 'análisis', name: 'Análisis', description: 'Comparativas y análisis técnicos' },
  { slug: 'conceptos', name: 'Conceptos', description: 'Fundamentos y conceptos básicos' },
  { slug: 'tecnologia', name: 'Tecnología', description: 'Drones, equipos y avances tecnológicos' },
  { slug: 'normativa', name: 'Normativa', description: 'Regulaciones y requisitos legales' },
  { slug: 'casos', name: 'Casos de Éxito', description: 'Experiencias reales y testimonios' },
]

export default async function BlogPage() {
  // Artículos reales del blog
  const articles = [
    {
      id: '1',
      slug: 'malezas-dificiles-drones',
      title: 'Casos de manejo: malezas difíciles en maíz y soja y el rol del dron',
      category: 'casos',
      excerpt: 'Análisis del control de malezas resistentes en cultivos extensivos con drones: estrategias MIM, timings de aplicación y experiencias del Programa REM de Aapresid.',
      createdAt: new Date(),
      readingTime: 10,
    },
    {
      id: '2',
      slug: 'comparativa-dji-t50-vs-xag-p100-pro',
      title: 'Comparativa técnica para extensivos: DJI Agras T50 vs XAG P100 Pro',
      category: 'análisis',
      excerpt: 'Análisis técnico detallado entre DJI Agras T50 y XAG P100 Pro: capacidad, caudal, autonomía, sensores y casos de uso para cultivos extensivos en Argentina.',
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      readingTime: 8,
    },
    {
      id: '3',
      slug: 'capacidad-cobertura-dron-agricola-hectareas-hora',
      title: 'Capacidad real: ¿cuántas hectáreas por hora puede cubrir mi dron agrícola?',
      category: 'tecnologia',
      excerpt: 'Análisis completo sobre la capacidad de cobertura de drones agrícolas: factores técnicos, cálculos prácticos y comparativa de modelos para maximizar eficiencia.',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      readingTime: 6,
    },
    {
      id: '4',
      slug: 'productos-fitosanitarios-drones-marbetes-buenas-practicas',
      title: '¿Qué productos se pueden aplicar con drones? Marbetes, buenas prácticas y manejo de deriva',
      category: 'normativa',
      excerpt: 'Guía completa sobre productos fitosanitarios autorizados para drones, marbetes SENASA, buenas prácticas CASAFE y manejo de deriva en aplicaciones aéreas.',
      createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 días atrás
      readingTime: 8,
    },
    {
      id: '5',
      slug: 'es-legal-fumigar-con-drones-argentina-2025',
      title: '¿Es legal fumigar con drones en Argentina? – Regulaciones y requisitos (2025)',
      category: 'normativa',
      excerpt: 'Análisis actualizado 2025 sobre la legalidad de la fumigación con drones en Argentina: regulaciones ANAC, requisitos SENASA, vacíos provinciales y recomendaciones para operadores.',
      createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 días atrás
      readingTime: 8,
    },
    {
      id: '6',
      slug: 'drones-vs-aviones-vs-pulverizadoras',
      title: 'Drones vs. aviones vs. pulverizadoras terrestres: comparativa de costos y efectividad',
      category: 'análisis',
      excerpt: 'Análisis comparativo de drones, aviones y pulverizadoras terrestres en la agricultura: costos por hectárea, eficiencia, limitaciones y mejores casos de uso.',
      createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 días atrás
      readingTime: 6,
    },
    {
      id: '7',
      slug: 'que-es-fumigacion-con-drones',
      title: '¿Qué es la fumigación con drones y cómo funciona?',
      category: 'conceptos',
      excerpt: 'Guía completa sobre fumigación con drones: qué es, cómo operan los drones pulverizadores, componentes, flujo de trabajo, ventajas y diferencias con la fumigación tradicional.',
      createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 días atrás
      readingTime: 7,
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog y Guías
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprende todo sobre fumigación con drones: desde conceptos básicos 
              hasta casos de éxito reales en Argentina.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        <BlogClient articles={articles} categories={categories} />
      </div>
    </div>
  )
}
