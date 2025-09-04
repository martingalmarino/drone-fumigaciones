import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import AdminSidebar from '@/components/AdminSidebar'

async function checkAuth() {
  // En producción, aquí se verificaría la autenticación real
  // Por ahora, solo verificamos si existe la variable de entorno
  const adminEmail = process.env.ADMIN_EMAIL
  
  if (!adminEmail) {
    redirect('/')
  }
  
  return true
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await checkAuth()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 ml-64">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
