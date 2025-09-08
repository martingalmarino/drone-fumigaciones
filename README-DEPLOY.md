# Guía de Deploy - Fumigación Drones Argentina

## 🚀 Deploy en Vercel (Recomendado)

### 1. Preparar el Proyecto

```bash
# Asegúrate de que el build funcione localmente
npm run build

# Verificar que no hay errores de TypeScript
npm run typecheck

# Verificar linting
npm run lint
```

### 2. Crear Repositorio en GitHub

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Commit inicial
git commit -m "Initial commit: Fumigación Drones Argentina"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/tu-usuario/fumigacion-drones-argentina.git
git branch -M main
git push -u origin main
```

### 3. Configurar Vercel

1. **Ir a [vercel.com](https://vercel.com)**
2. **Importar proyecto desde GitHub**
3. **Configurar variables de entorno**

### 4. Variables de Entorno en Vercel

Configurar estas variables en el dashboard de Vercel:

```env
# Base de Datos (PostgreSQL)
DATABASE_URL=postgresql://username:password@host:port/database

# NextAuth
NEXTAUTH_URL=https://tu-dominio.vercel.app
NEXTAUTH_SECRET=tu-secret-super-seguro

# Admin
ADMIN_EMAIL=admin@agrifly.com.ar

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxx

# hCaptcha (opcional para desarrollo)
HCAPTCHA_SECRET_KEY=0x0000000000000000000000000000000000000000
HCAPTCHA_SITE_KEY=10000000-ffff-ffff-ffff-000000000001

# Analytics
GTM_ID=GTM-XXXXXXX

# AdSense
ADSENSE_CLIENT=ca-pub-xxxxxxxxxx

# App URL
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

### 5. Configurar Base de Datos

#### Opción A: PostgreSQL en Vercel (Recomendado)
1. En el dashboard de Vercel, ir a Storage
2. Crear nueva base de datos PostgreSQL
3. Copiar la URL de conexión a `DATABASE_URL`

#### Opción B: Base de datos externa
- **Neon**: https://neon.tech
- **Supabase**: https://supabase.com
- **Railway**: https://railway.app

### 6. Ejecutar Migraciones

Después del primer deploy, ejecutar migraciones:

```bash
# Conectar a la base de datos de producción
npx prisma migrate deploy

# Poblar con datos iniciales
npx prisma db seed
```

### 7. Configurar Dominio Personalizado (Opcional)

1. En Vercel, ir a Settings > Domains
2. Agregar tu dominio personalizado
3. Configurar DNS según las instrucciones

## 🗄️ Configuración de Base de Datos

### PostgreSQL en Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Conectar a tu proyecto
vercel link

# Ejecutar migraciones
vercel env pull .env.local
npx prisma migrate deploy
npx prisma db seed
```

### Base de Datos Externa (Neon/Supabase)

```bash
# Configurar URL de conexión
DATABASE_URL="postgresql://user:pass@host:port/db?sslmode=require"

# Ejecutar migraciones
npx prisma migrate deploy
npx prisma db seed
```

## 📧 Configuración de Email (Resend)

1. **Crear cuenta en [resend.com](https://resend.com)**
2. **Verificar dominio** (opcional pero recomendado)
3. **Obtener API key** y configurar en Vercel
4. **Crear templates de email** (opcional)

### Template de Email de Confirmación

```typescript
// En tu código, usar así:
await resend.emails.send({
  from: 'noreply@agrifly.com.ar',
  to: lead.email,
  subject: 'Confirmación de solicitud de cotización',
  html: `
    <h1>¡Gracias por tu solicitud!</h1>
    <p>Hola ${lead.fullName},</p>
    <p>Hemos recibido tu solicitud de cotización para ${lead.service} en ${lead.provinceSlug}.</p>
    <p>Nos pondremos en contacto contigo pronto.</p>
  `
})
```

## 🔍 Configuración de Analytics

### Google Tag Manager

1. **Crear cuenta en [tagmanager.google.com](https://tagmanager.google.com)**
2. **Crear contenedor** para el sitio web
3. **Obtener GTM ID** (formato: GTM-XXXXXXX)
4. **Configurar en variables de entorno**

### Google Analytics 4

1. **Crear propiedad en [analytics.google.com](https://analytics.google.com)**
2. **Configurar en GTM** o directamente en el código
3. **Configurar eventos personalizados** para leads y conversiones

## 💰 Configuración de AdSense

1. **Crear cuenta en [adsense.google.com](https://adsense.google.com)**
2. **Solicitar aprobación** del sitio
3. **Obtener Publisher ID** (formato: ca-pub-xxxxxxxxxx)
4. **Configurar en variables de entorno**

### Componentes de Anuncios

```typescript
// Los componentes AdSlot ya están configurados
<AdSlot variant="sidebar" />      // Sidebar
<AdSlot variant="inArticle" />    // Dentro de artículos
<AdSlot variant="leaderboard" />  // Banner superior
```

## 🛡️ Configuración de Seguridad

### hCaptcha (Opcional)

1. **Crear cuenta en [hcaptcha.com](https://hcaptcha.com)**
2. **Obtener Site Key y Secret Key**
3. **Configurar en variables de entorno**

### Headers de Seguridad

Ya configurados en `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## 📊 Monitoreo y Logs

### Vercel Analytics

- **Habilitar en el dashboard de Vercel**
- **Ver métricas de performance**
- **Monitorear errores**

### Logs de Aplicación

```bash
# Ver logs en tiempo real
vercel logs

# Ver logs de una función específica
vercel logs --function=api/leads
```

## 🔄 CI/CD Automático

El proyecto está configurado para deploy automático:

- **Push a main** → Deploy automático
- **Pull Request** → Preview deployment
- **Build automático** con `npm run build`

### Configuración de Build

```json
// vercel.json ya configurado
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

## 🧪 Testing en Producción

### Verificaciones Post-Deploy

1. **Verificar que el sitio carga correctamente**
2. **Probar formulario de cotización**
3. **Verificar que los emails se envían**
4. **Comprobar que la base de datos funciona**
5. **Verificar SEO y meta tags**

### Comandos de Verificación

```bash
# Verificar build local
npm run build
npm run start

# Verificar tipos
npm run typecheck

# Verificar linting
npm run lint
```

## 🚨 Troubleshooting

### Problemas Comunes

#### Error de Base de Datos
```bash
# Verificar conexión
npx prisma db pull

# Resetear si es necesario
npx prisma migrate reset
```

#### Error de Build
```bash
# Limpiar cache
rm -rf .next
npm run build
```

#### Error de Variables de Entorno
- Verificar que todas las variables estén configuradas en Vercel
- Verificar que no haya espacios en blanco
- Verificar que las URLs tengan el protocolo correcto

### Logs de Error

```bash
# Ver logs detallados
vercel logs --follow

# Ver logs de una función específica
vercel logs api/leads --follow
```

## 📈 Optimizaciones de Performance

### Ya Implementadas:
- ✅ Next.js 14 con App Router
- ✅ Imágenes optimizadas con next/image
- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ Compresión gzip
- ✅ CDN global de Vercel

### Métricas Objetivo:
- **Lighthouse Performance**: ≥95
- **Lighthouse SEO**: ≥98
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s

## 🔐 Backup y Recuperación

### Backup de Base de Datos

```bash
# Backup manual
pg_dump $DATABASE_URL > backup.sql

# Restaurar backup
psql $DATABASE_URL < backup.sql
```

### Backup Automático

- **Vercel**: Backups automáticos diarios
- **Neon/Supabase**: Backups automáticos incluidos

## 📞 Soporte

Si tienes problemas con el deploy:

1. **Revisar logs en Vercel**
2. **Verificar variables de entorno**
3. **Comprobar configuración de base de datos**
4. **Contactar soporte**: info@agrifly.com.ar

---

**¡Tu sitio estará listo para recibir visitantes! 🎉**
