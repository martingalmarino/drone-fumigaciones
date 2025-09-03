'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search, MapPin, FileText, HelpCircle } from 'lucide-react'
import { CommandK } from './CommandK'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">GA</span>
            </div>
            <span className="text-xl font-bold text-neutral-900">
              Grabado Argentina
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/jurisdicciones" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Jurisdicciones
            </Link>
            <Link href="/mapa" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Mapa
            </Link>
            <Link href="/faq" className="text-neutral-600 hover:text-primary-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contacto" className="text-neutral-600 hover:text-primary-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <CommandK />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/jurisdicciones" 
                className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin size={20} />
                <span>Jurisdicciones</span>
              </Link>
              <Link 
                href="/mapa" 
                className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin size={20} />
                <span>Mapa</span>
              </Link>
              <Link 
                href="/faq" 
                className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HelpCircle size={20} />
                <span>FAQ</span>
              </Link>
              <Link 
                href="/contacto" 
                className="flex items-center space-x-3 text-neutral-600 hover:text-primary-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText size={20} />
                <span>Contacto</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
