'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Building2, 
  MapPin, 
  Star, 
  BookOpen, 
  HelpCircle, 
  Users,
  FileText,
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Empresas', href: '/admin/empresas', icon: Building2 },
  { name: 'Provincias', href: '/admin/provincias', icon: MapPin },
  { name: 'Drones', href: '/admin/drones', icon: Star },
  { name: 'Reviews', href: '/admin/reviews', icon: Star },
  { name: 'Artículos', href: '/admin/articulos', icon: BookOpen },
  { name: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
  { name: 'Leads', href: '/admin/leads', icon: Users },
  { name: 'Configuración', href: '/admin/configuracion', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center px-6 py-4 border-b">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FD</span>
          </div>
          <span className="ml-2 text-lg font-semibold text-gray-900">
            Admin Panel
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t">
          <div className="text-xs text-gray-500">
            <p>Fumigación Drones</p>
            <p>Panel de Administración</p>
          </div>
        </div>
      </div>
    </div>
  )
}
