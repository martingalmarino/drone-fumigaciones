'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, MapPin, BookOpen, Star, Users, HelpCircle, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Reviews', href: '/reviews', icon: Star },
  { name: 'Directorio', href: '/directorio', icon: Users },
  { name: 'Provincias', href: '/directorio', icon: MapPin },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Agricultural leaf background */}
                  <path d="M12 2C8 4 6 8 6 12C6 16 8 20 12 22C16 20 18 16 18 12C18 8 16 4 12 2Z" fill="currentColor" opacity="0.2"/>
                  
                  {/* Drone body */}
                  <rect x="10" y="10" width="4" height="3" rx="1" fill="currentColor"/>
                  
                  {/* Drone arms */}
                  <rect x="7" y="11" width="3" height="1" rx="0.5" fill="currentColor"/>
                  <rect x="14" y="11" width="3" height="1" rx="0.5" fill="currentColor"/>
                  <rect x="11" y="7" width="2" height="3" rx="1" fill="currentColor"/>
                  <rect x="11" y="14" width="2" height="3" rx="1" fill="currentColor"/>
                  
                  {/* Propellers */}
                  <circle cx="8.5" cy="11.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="15.5" cy="11.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="12" cy="8.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="12" cy="15.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  
                  {/* Spray droplets */}
                  <circle cx="10" y="18" r="1" fill="currentColor" opacity="0.8"/>
                  <circle cx="14" y="19" r="0.8" fill="currentColor" opacity="0.6"/>
                  <circle cx="12" y="20.5" r="0.6" fill="currentColor" opacity="0.4"/>
                  
                  {/* Field lines */}
                  <path d="M2 16L22 16" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <path d="M2 18L22 18" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  <path d="M2 20L22 20" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                </svg>
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold">
                <span className="hidden sm:inline">
                  <span className="text-green-600">Agry</span><span className="text-gray-800">Fly</span>
                </span>
                <span className="sm:hidden text-gray-800">AF</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
              >
                <item.icon className="h-4 w-4 mr-1" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchOpen(!searchOpen)}
              className="min-h-[40px]"
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
            <Button asChild size="sm" className="min-h-[40px]">
              <Link href="/cotizar">
                <Calculator className="h-4 w-4 mr-2" />
                Cotizar
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px]"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 border-t">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                placeholder="Buscar empresas, drones, artículos..."
                className="flex-1 min-h-[44px]"
              />
              <Button className="min-h-[44px]">Buscar</Button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md px-3 py-3 text-base font-medium min-h-[48px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button asChild className="w-full min-h-[48px]">
                <Link href="/cotizar" onClick={() => setMobileMenuOpen(false)}>
                  <Calculator className="h-5 w-5 mr-2" />
                  Solicitar Cotización
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}