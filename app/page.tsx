import Link from 'next/link'
import { ArrowRight, MapPin, Star, Users, BookOpen, Calculator, CheckCircle, Zap, Shield, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AdSlot from '@/components/AdSlot'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Datos de empresas reales
const allCompanies = [
  {
    id: '1',
    slug: 'fitosanitarios-martin-paez',
    name: 'Fitosanitarios Martín Páez',
    province: 'Córdoba',
    services: '["Fumigación con drones", "Agricultura drones"]',
    isFeatured: true
  },
  {
    id: '2',
    slug: 'drones-agricolas-de-cordoba',
    name: 'Drones Agrícolas de Córdoba',
    province: 'Córdoba',
    services: '["Fumigación agricultura", "NDVI y drones"]',
    isFeatured: true
  },
  {
    id: '3',
    slug: 'mb-logistica',
    name: 'MB Logística',
    province: 'Córdoba',
    services: '["Siembra y fumigación con drones", "DJI Agras T30"]',
    isFeatured: false
  },
  {
    id: '4',
    slug: 'agro-mision-servicios',
    name: 'Agro Misión Servicios',
    province: 'Buenos Aires',
    services: '["Pulverización agrícola con drones", "DJI Agras T40"]',
    isFeatured: true
  },
  {
    id: '5',
    slug: 'estudio-gyd',
    name: 'Estudio G&D',
    province: 'Buenos Aires',
    services: '["Pulverización con drones", "Drones multirotor"]',
    isFeatured: true
  },
  {
    id: '6',
    slug: 'uss-alarmas',
    name: 'USS Alarmas',
    province: 'Buenos Aires',
    services: '["Drones fumigadores", "Varios modelos"]',
    isFeatured: true
  },
  {
    id: '7',
    slug: 'biodrone',
    name: 'BioDrone',
    province: 'Santa Fe',
    services: '["Control de plagas con drones", "Combustión interna"]',
    isFeatured: true
  },
  {
    id: '8',
    slug: 'gd-pulverizacion',
    name: 'G&D Pulverización',
    province: 'Santa Fe',
    services: '["Servicios agro con drones", "Drones multirotor"]',
    isFeatured: true
  }
]

// Función para contar empresas por provincia
function getCompanyCountByProvince(provinceName: string) {
  return allCompanies.filter(company => company.province === provinceName).length
}

const features = [
  {
    icon: Zap,
    title: 'Mayor Eficiencia',
    description: 'Hasta 5 veces más rápido que métodos tradicionales'
  },
  {
    icon: Shield,
    title: 'Mayor Precisión',
    description: 'Aplicación milimétrica con tecnología GPS/RTK'
  },
  {
    icon: Globe,
    title: 'Acceso Universal',
    description: 'Llega a terrenos difíciles y cultivos altos'
  }
]

const provinces = [
  { name: 'Córdoba', slug: 'cordoba', companies: getCompanyCountByProvince('Córdoba'), featured: true },
  { name: 'Santa Fe', slug: 'santa-fe', companies: getCompanyCountByProvince('Santa Fe'), featured: true },
  { name: 'Buenos Aires', slug: 'buenos-aires', companies: getCompanyCountByProvince('Buenos Aires'), featured: true },
]

const recentArticles = [
  {
    title: '¿Qué es la fumigación con drones?',
    excerpt: 'Descubre cómo funciona esta tecnología revolucionaria',
    slug: 'que-es-fumigacion-con-drones',
    category: 'Conceptos'
  },
  {
    title: 'Mejores drones agrícolas 2025',
    excerpt: 'Análisis completo de los modelos más destacados',
    slug: 'mejores-drones-agricolas-2025',
    category: 'Tecnología'
  },
  {
    title: '¿Es legal fumigar con drones?',
    excerpt: 'Normativas y requisitos en Argentina',
    slug: 'es-legal-fumigar-con-drones-argentina',
    category: 'Normativa'
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Fumigación con Drones
              <span className="block text-green-200">Argentina</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-green-100 max-w-3xl mx-auto leading-relaxed">
              El directorio más completo de empresas certificadas. 
              Encuentra proveedores, compara drones y accede a guías especializadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 min-h-[48px] w-full sm:w-auto">
                <Link href="/directorio">
                  <Users className="mr-2 h-5 w-5" />
                  Buscar Proveedores
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary min-h-[48px] w-full sm:w-auto">
                <Link href="/blog">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Aprender sobre Drones
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              ¿Por qué elegir fumigación con drones?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              La tecnología de drones está revolucionando la agricultura argentina
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center h-full">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Provinces Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Provincias con mayor cobertura
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Encuentra empresas certificadas en las principales regiones agrícolas
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {provinces.map((province) => (
              <Card key={province.slug} className="relative overflow-hidden h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg sm:text-xl">{province.name}</CardTitle>
                    <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </div>
                  <CardDescription className="text-sm sm:text-base">
                    {province.companies} {province.companies === 1 ? 'empresa' : 'empresas'} certificada{province.companies === 1 ? '' : 's'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild className="w-full min-h-[44px]">
                    <Link href={`/directorio/${province.slug}`}>
                      Ver Empresas
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSlot variant="leaderboard" />
      </div>

      {/* Recent Articles */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Últimas guías y artículos
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Mantente actualizado con las últimas tendencias en fumigación con drones
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {recentArticles.map((article) => (
              <Card key={article.slug} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                  <Badge variant="secondary" className="w-fit text-xs">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-base sm:text-lg">
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="hover:text-primary transition-colors line-clamp-2"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild variant="outline" size="sm" className="w-full min-h-[40px]">
                    <Link href={`/blog/${article.slug}`}>
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <Button asChild variant="outline" size="lg" className="min-h-[48px]">
              <Link href="/blog">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            ¿Necesitas fumigación con drones?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-green-100 max-w-3xl mx-auto">
            Solicita una cotización gratuita y encuentra el mejor proveedor para tu cultivo
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button asChild size="lg" variant="secondary" className="min-h-[48px] w-full sm:w-auto">
              <Link href="/cotizar">
                <Calculator className="mr-2 h-5 w-5" />
                Solicitar Cotización
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="min-h-[48px] w-full sm:w-auto">
              <Link href="/directorio">
                <Users className="mr-2 h-5 w-5" />
                Ver Directorio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beneficios de la fumigación con drones
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Reducción de costos hasta 40%',
              'Mayor precisión en la aplicación',
              'Acceso a terrenos difíciles',
              'Menor impacto ambiental',
              'Operación nocturna posible',
              'Menor compactación del suelo',
              'Reducción de deriva',
              'Mayor eficiencia operativa'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}