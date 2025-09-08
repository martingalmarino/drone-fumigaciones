# Fumigación con Drones Argentina

El directorio más completo de empresas certificadas de fumigación con drones en Argentina. Conecta productores agrícolas con proveedores de servicios especializados.

## 🚀 Características

- **Directorio de Empresas**: Base de datos completa con filtros por provincia, servicios y equipos
- **Reviews de Drones**: Análisis detallado de equipos agrícolas con especificaciones técnicas
- **Blog Educativo**: Guías, tutoriales y artículos especializados
- **Sistema de Cotizaciones**: Formulario multi-step para solicitar presupuestos
- **Panel de Administración**: CRUD completo para gestionar contenido
- **SEO Optimizado**: Schema markup, sitemaps dinámicos y meta tags
- **Responsive Design**: Optimizado para móviles y desktop

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Base de Datos**: PostgreSQL con Prisma ORM
- **Styling**: Tailwind CSS + shadcn/ui
- **Autenticación**: NextAuth.js
- **Email**: Resend
- **Maps**: Leaflet
- **Analytics**: Google Tag Manager
- **Ads**: Google AdSense
- **Deploy**: Vercel

## 📋 Requisitos Previos

- Node.js 18+ 
- PostgreSQL 14+
- npm o yarn

## 🚀 Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd fumigacion-drones-argentina
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp env.example .env.local
```

Editar `.env.local` con tus valores:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/fumigacion_drones"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Admin
ADMIN_EMAIL="admin@agrifly.com.ar"

# Email (Resend)
RESEND_API_KEY="re_xxxxxxxxxx"

# hCaptcha
HCAPTCHA_SECRET_KEY="0x0000000000000000000000000000000000000000"
HCAPTCHA_SITE_KEY="10000000-ffff-ffff-ffff-000000000001"

# Analytics
GTM_ID="GTM-XXXXXXX"

# AdSense
ADSENSE_CLIENT="ca-pub-xxxxxxxxxx"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Configurar base de datos**
```bash
# Generar cliente Prisma
npm run db:generate

# Ejecutar migraciones
npm run db:migrate

# Poblar con datos iniciales
npm run db:seed
```

5. **Ejecutar en desarrollo**
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── admin/             # Panel de administración
│   ├── blog/              # Blog y artículos
│   ├── directorio/        # Directorio de empresas
│   ├── reviews/           # Reviews de drones
│   ├── cotizar/           # Formulario de cotizaciones
│   ├── faq/               # Preguntas frecuentes
│   ├── api/               # API routes
│   └── globals.css        # Estilos globales
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de shadcn/ui
│   ├── Header.tsx        # Header principal
│   ├── Footer.tsx        # Footer
│   ├── AdSlot.tsx        # Componente para anuncios
│   └── SeoHead.tsx       # SEO y meta tags
├── lib/                  # Utilidades y configuración
│   ├── prisma.ts         # Cliente de Prisma
│   └── utils.ts          # Funciones utilitarias
├── prisma/               # Schema y migraciones
│   ├── schema.prisma     # Schema de la base de datos
│   └── seed.ts           # Datos iniciales
└── public/               # Archivos estáticos
```

## 🗄️ Base de Datos

### Modelos Principales

- **Province**: Provincias argentinas
- **Company**: Empresas de fumigación
- **Drone**: Modelos de drones agrícolas
- **Review**: Reviews de equipos
- **Article**: Artículos del blog
- **Lead**: Solicitudes de cotización
- **FAQ**: Preguntas frecuentes

### Comandos de Base de Datos

```bash
# Ver base de datos en Prisma Studio
npm run db:studio

# Resetear base de datos
npx prisma migrate reset

# Generar nueva migración
npx prisma migrate dev --name nombre-migracion
```

## 🎨 Personalización

### Colores y Tema

Los colores se definen en `tailwind.config.js` y `app/globals.css`:

```css
:root {
  --primary: 142 76% 36%;  /* Verde principal */
  --secondary: 210 40% 98%; /* Gris claro */
  /* ... más variables */
}
```

### Componentes UI

El proyecto usa shadcn/ui. Para agregar nuevos componentes:

```bash
npx shadcn-ui@latest add [component-name]
```

## 📊 Panel de Administración

Accede al panel en `/admin` (requiere `ADMIN_EMAIL` configurado).

### Funcionalidades:
- Dashboard con estadísticas
- CRUD de empresas, drones, artículos
- Gestión de leads y cotizaciones
- Import/export de datos

## 🔍 SEO y Performance

### Optimizaciones Implementadas:
- Meta tags dinámicos
- Schema markup (JSON-LD)
- Sitemap automático
- Robots.txt
- Imágenes optimizadas con next/image
- Lazy loading de componentes

### Lighthouse Score Objetivo:
- Performance: ≥95
- SEO: ≥98
- Accessibility: AA

## 📧 Formularios y Leads

### Formulario de Cotización
- Multi-step con validación
- Integración con hCaptcha
- Envío de emails con Resend
- Almacenamiento en base de datos

### Configuración de Email
```typescript
// Ejemplo de template de email
const emailTemplate = {
  to: lead.email,
  subject: 'Confirmación de solicitud de cotización',
  html: `Hola ${lead.fullName}, hemos recibido tu solicitud...`
}
```

## 🗺️ Mapas

El proyecto usa Leaflet para mostrar ubicaciones:

```typescript
// Componente de mapa
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), { ssr: false })
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Componentes adaptativos
- Navegación móvil optimizada

## 🚀 Deploy en Vercel

1. **Conectar repositorio a Vercel**
2. **Configurar variables de entorno** en el dashboard de Vercel
3. **Deploy automático** en cada push a main

### Variables de Entorno en Vercel:
```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
RESEND_API_KEY=...
# ... resto de variables
```

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests E2E con Playwright
npm run test:e2e

# Linting
npm run lint

# Type checking
npm run typecheck
```

## 📈 Analytics y Ads

### Google Tag Manager
```typescript
// Configurar en components/GoogleTagManager.tsx
const gtmId = process.env.NEXT_PUBLIC_GTM_ID
```

### Google AdSense
```typescript
// Componente AdSlot con diferentes variantes
<AdSlot variant="sidebar" />
<AdSlot variant="inArticle" />
<AdSlot variant="leaderboard" />
```

## 🔧 Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # ESLint
npm run typecheck    # TypeScript check
npm run db:migrate   # Migraciones de DB
npm run db:seed      # Poblar DB
npm run db:studio    # Prisma Studio
```

## 📝 Contenido Inicial

El proyecto incluye:
- 3 provincias (Córdoba, Santa Fe, Buenos Aires)
- 3 empresas de ejemplo
- 4 drones (DJI Agras T25/T40/T50, XAG P150)
- 3 artículos del blog
- 1 review de drone
- 5 FAQs

## 🤝 Contribución

1. Fork el proyecto
2. Crear branch para feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Soporte

- Email: info@agrifly.com.ar
- Documentación: [Wiki del proyecto]
- Issues: [GitHub Issues]

## 🎯 Roadmap

### Próximas funcionalidades:
- [ ] Sistema de reviews de empresas
- [ ] Chat en tiempo real
- [ ] App móvil
- [ ] Integración con APIs de clima
- [ ] Sistema de notificaciones push
- [ ] Dashboard para empresas
- [ ] Sistema de pagos
- [ ] Integración con redes sociales

---

**Desarrollado con ❤️ para la agricultura argentina**# Deploy trigger
