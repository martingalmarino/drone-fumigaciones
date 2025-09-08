'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'

interface Article {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  createdAt: Date
  readingTime: number
}

interface BlogClientProps {
  articles: Article[]
  categories: Array<{ slug: string; name: string; description: string }>
}

const ARTICLES_PER_PAGE = 4

export default function BlogClient({ articles, categories }: BlogClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Filtrar artículos
  const filteredArticles = useMemo(() => {
    let filtered = articles

    // Filtro por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filtro por categoría
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    return filtered
  }, [articles, searchTerm, selectedCategory])

  // Calcular paginación
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE)
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE
  const endIndex = startIndex + ARTICLES_PER_PAGE
  const currentArticles = filteredArticles.slice(startIndex, endIndex)

  // Resetear página cuando cambien los filtros
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  // Generar números de página para mostrar
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      const start = Math.max(1, currentPage - 2)
      const end = Math.min(totalPages, start + maxVisiblePages - 1)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
    }
    
    return pages
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          {/* Search */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Buscar artículos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Buscar..." 
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                <Button size="sm" disabled>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categorías</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <button
                onClick={() => handleCategoryChange('')}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedCategory === '' 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="font-medium">Todas las categorías</div>
                <div className="text-sm opacity-75">{articles.length} artículos</div>
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => handleCategoryChange(category.slug)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCategory === category.slug 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm opacity-75">{category.description}</div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Ad Slot */}
          <AdSlot variant="sidebar" />
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Featured Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Artículos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.slice(0, 2).map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl">
                    <Link 
                      href={`/blog/${article.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(article.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readingTime || 5} min lectura
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Todos los Artículos
            </h2>
            <div className="text-sm text-gray-600">
              {filteredArticles.length} artículos encontrados
            </div>
          </div>

          {currentArticles.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500 text-lg">No se encontraron artículos con los filtros seleccionados.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('')
                    setCurrentPage(1)
                  }}
                >
                  Limpiar filtros
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="space-y-6">
                {currentArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{article.category}</Badge>
                            <span className="text-sm text-gray-500">
                              {formatDate(article.createdAt)}
                            </span>
                            <span className="text-sm text-gray-500">
                              • {article.readingTime || 5} min lectura
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            <Link 
                              href={`/blog/${article.slug}`}
                              className="hover:text-primary transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {article.excerpt}
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/blog/${article.slug}`}>
                              Leer más
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={goToPreviousPage}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Anterior
                    </Button>
                    
                    {getPageNumbers().map((pageNumber) => (
                      <Button
                        key={pageNumber}
                        variant={currentPage === pageNumber ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(pageNumber)}
                      >
                        {pageNumber}
                      </Button>
                    ))}
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={goToNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Siguiente
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
