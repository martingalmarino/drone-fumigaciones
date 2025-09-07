'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, ExternalLink, Filter, Search, Users, Calculator, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPhone } from '@/lib/utils'
import AdSlot from '@/components/AdSlot'

interface Company {
  id: string
  slug: string
  name: string
  description: string
  websiteUrl: string | null
  phone: string | null
  email: string | null
  address: string | null
  city: string
  isFeatured: boolean
  services: string
  province: {
    id: string
    name: string
    slug: string
  }
}

interface DirectorioClientProps {
  companies: Company[]
  provinces: Array<{ slug: string; name: string; companies: number }>
  serviceTypes: Array<{ slug: string; name: string }>
}

const COMPANIES_PER_PAGE = 6

export default function DirectorioClient({ companies, provinces, serviceTypes }: DirectorioClientProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProvince, setSelectedProvince] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  // Filtrar empresas
  const filteredCompanies = useMemo(() => {
    let filtered = companies

    // Filtro por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.province.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (company.services && JSON.parse(company.services).some((service: string) =>
          service.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      )
    }

    // Filtro por provincia
    if (selectedProvince) {
      filtered = filtered.filter(company => company.province.slug === selectedProvince)
    }

    // Filtro por servicios
    if (selectedServices.length > 0) {
      filtered = filtered.filter(company => {
        if (!company.services) return false
        const companyServices = JSON.parse(company.services)
        return selectedServices.some(selectedService =>
          companyServices.some((service: string) =>
            service.toLowerCase().includes(selectedService.toLowerCase())
          )
        )
      })
    }

    return filtered
  }, [companies, searchTerm, selectedProvince, selectedServices])

  // Calcular paginación
  const totalPages = Math.ceil(filteredCompanies.length / COMPANIES_PER_PAGE)
  const startIndex = (currentPage - 1) * COMPANIES_PER_PAGE
  const endIndex = startIndex + COMPANIES_PER_PAGE
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex)

  // Resetear página cuando cambien los filtros
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province)
    setCurrentPage(1)
  }

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
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
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-8 space-y-4 sm:space-y-6">
          {/* Search */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Buscar empresas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Nombre, ciudad..." 
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
                <Button size="sm" disabled>
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Provinces Filter */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Provincias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <button
                onClick={() => handleProvinceChange('')}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  selectedProvince === '' 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-medium">Todas las provincias</span>
                </div>
                <Badge variant="secondary">{companies.length}</Badge>
              </button>
              {provinces.map((province) => (
                <button
                  key={province.slug}
                  onClick={() => handleProvinceChange(province.slug)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                    selectedProvince === province.slug 
                      ? 'bg-primary text-white' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{province.name}</span>
                  </div>
                  <Badge variant="secondary">{province.companies}</Badge>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Services Filter */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Servicios</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {serviceTypes.map((service) => (
                <label key={service.slug} className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    className="rounded" 
                    checked={selectedServices.includes(service.slug)}
                    onChange={() => handleServiceToggle(service.slug)}
                  />
                  <span className="text-sm">{service.name}</span>
                </label>
              ))}
            </CardContent>
          </Card>

          {/* Ad Slot */}
          <AdSlot variant="sidebar" />
        </div>
      </div>

      {/* Companies List */}
      <div className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            {filteredCompanies.length} empresas encontradas
          </h2>
          <Button variant="outline" size="sm" className="lg:hidden min-h-[40px]">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
        </div>

        {currentCompanies.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500 text-lg">No se encontraron empresas con los filtros seleccionados.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('')
                  setSelectedProvince('')
                  setSelectedServices([])
                  setCurrentPage(1)
                }}
              >
                Limpiar filtros
              </Button>
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="space-y-4 sm:space-y-6">
              {currentCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                          <h3 className="text-lg sm:text-xl font-semibold">{company.name}</h3>
                          {company.isFeatured && (
                            <Badge className="bg-primary text-xs w-fit relative z-10">Destacado</Badge>
                          )}
                        </div>
                        
                        <div className="flex items-center text-gray-600 mb-2 relative z-0">
                          <MapPin className="h-4 w-4 mr-1" />
                          {company.city}, {company.province.name}
                        </div>
                        
                        {company.description && (
                          <p className="text-gray-600 mb-4">{company.description}</p>
                        )}
                        
                        {/* Services */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {company.services && JSON.parse(company.services).map((service: string, index: number) => (
                            <Badge key={index} variant="outline">
                              {service}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Contact Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          {company.phone && (
                            <a 
                              href={`tel:${company.phone}`}
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              {formatPhone(company.phone)}
                            </a>
                          )}
                          {company.email && (
                            <a 
                              href={`mailto:${company.email}`}
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </a>
                          )}
                          {company.websiteUrl && (
                            <a 
                              href={company.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center hover:text-primary transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Sitio web
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-6 flex flex-col sm:flex-row gap-2">
                        <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium">
                          <Link href={`/directorio/empresa/${company.slug}`} className="flex items-center justify-center">
                            <Users className="h-4 w-4 mr-2" />
                            Ver Perfil
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white font-medium">
                          <Link href={`/cotizar?empresa=${company.slug}`} className="flex items-center justify-center">
                            <Calculator className="h-4 w-4 mr-2" />
                            Cotizar
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
  )
}
