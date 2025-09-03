'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface ToCProps {
  sections: Array<{
    id: string
    title: string
    level: number
  }>
}

export function ToC({ sections }: ToCProps) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id)
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="lg:sticky lg:top-24">
      {/* Desktop TOC */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-lg border border-neutral-200 p-4 shadow-soft">
          <h3 className="font-semibold text-neutral-900 mb-4">Contenido</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                }`}
                style={{ paddingLeft: `${(section.level - 1) * 16 + 12}px` }}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile TOC */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-white rounded-lg border border-neutral-200 p-4 shadow-soft flex items-center justify-between"
        >
          <span className="font-semibold text-neutral-900">Contenido</span>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        
        {isExpanded && (
          <div className="mt-2 bg-white rounded-lg border border-neutral-200 p-4 shadow-soft">
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    scrollToSection(section.id)
                    setIsExpanded(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                  style={{ paddingLeft: `${(section.level - 1) * 16 + 12}px` }}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
