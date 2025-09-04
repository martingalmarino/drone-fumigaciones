# 🚗 Grabado de Autopartes, RPA/RPM y Cédulas - Argentina

**Versión**: 0.1.0  
**Estado**: Desarrollo activo

## 📋 Descripción

Sitio web informativo sobre grabado de autopartes, RPA/RPM y cédulas digitales por jurisdicción en Argentina. Proporciona información oficial, requisitos, costos y enlaces a turneros oficiales.

## ✨ Características Principales

- **🏛️ Información por Jurisdicción**: Datos específicos para cada provincia/ciudad
- **🗺️ Mapa Interactivo**: Centros de servicio con ubicaciones geográficas
- **🔍 Búsqueda Global**: Búsqueda rápida con ⌘K
- **📱 100% Responsive**: Optimizado para todos los dispositivos
- **♿ Accesible**: Cumple estándares de accesibilidad web
- **🔍 SEO Optimizado**: Metadatos y estructura para motores de búsqueda

## 🎯 Audiencia Objetivo

- Usuarios buscando "turno grabado [provincia/ciudad]"
- Personas que necesitan requisitos y costos de grabado
- Conductores que requieren información sobre RPA/RPM
- Usuarios interesados en cédulas digitales
- Gestores y profesionales del sector automotriz

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS
- **Componentes**: shadcn/ui
- **Iconos**: Lucide React
- **Mapas**: MapLibre GL
- **Estado**: Zustand
- **Validación**: Zod
- **SEO**: next-seo
- **Testing**: Playwright + Vitest

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos
1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/martingalmarino/grabado-autopartes-argentina.git
   cd grabado-autopartes-argentina
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus valores
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
grabado-autopartes-argentina/
├── app/                          # Next.js App Router
│   ├── (site)/                  # Grupo de rutas del sitio
│   ├── j/[slug]/                # Páginas de jurisdicción
│   ├── jurisdicciones/          # Lista de jurisdicciones
│   ├── mapa/                    # Mapa global
│   ├── faq/                     # Preguntas frecuentes
│   ├── contacto/                # Formulario de contacto
│   ├── acerca/                  # Acerca de nosotros
│   └── not-found.tsx           # Página 404
├── components/                   # Componentes reutilizables
│   ├── Header.tsx              # Header con navegación
│   ├── Footer.tsx              # Footer del sitio
│   ├── CommandK.tsx            # Búsqueda global
│   ├── JurisdictionCard.tsx    # Tarjeta de jurisdicción
│   ├── Map.tsx                 # Componente de mapa
│   ├── CenterList.tsx          # Lista de centros
│   └── ToC.tsx                 # Tabla de contenidos
├── lib/                         # Hooks y utilidades
│   └── useJurisdicciones.ts    # Hook para datos
├── data/                        # Datos mock
│   └── jurisdicciones.json     # Datos de jurisdicciones
├── types/                       # Tipos TypeScript
│   └── index.ts                # Interfaces del proyecto
└── public/                      # Archivos estáticos
```

## 📊 Modelo de Datos

### Jurisdicción
```typescript
interface Jurisdiccion {
  slug: string                    // Identificador único
  nombre: string                  // Nombre de la jurisdicción
  estadoGrabado: 'obligatorio' | 'opcional' | 'no_aplica'
  fuentes: Fuente[]               // Fuentes de información
  grabado: GrabadoInfo            // Información de grabado
  rpa_rpm?: RpaRpmInfo           // Información RPA/RPM
  cedulas: CedulasInfo           // Información de cédulas
  centros: Centro[]               // Centros de servicio
}
```

### Centro
```typescript
interface Centro {
  id: string                      // Identificador único
  nombre: string                  // Nombre del centro
  lat: number                     // Latitud
  lng: number                     // Longitud
  servicios: string[]             // Servicios disponibles
  horarios: string                // Horarios de atención
  telefono?: string               // Teléfono de contacto
  direccion?: string              // Dirección física
}
```

## ⚙️ Configuración

### Variables de Entorno
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_MAPLIBRE_TOKEN=tu_token_aqui
```

### MapLibre
Para usar mapas interactivos, obtén un token gratuito en:
- [MapLibre](https://maplibre.org/)
- [MapTiler](https://www.maptiler.com/)

## 🧪 Testing

### Tests Unitarios
```bash
npm run test
```

### Tests E2E
```bash
npm run test:e2e
```

## 🚀 Build y Deploy

### Build de Producción
```bash
npm run build
npm start
```

### Deploy en Vercel (Recomendado)
1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente Next.js
3. Configura las variables de entorno
4. ¡Listo! Deploy automático en cada push

## 📱 Responsividad

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes Adaptativos**: Header, navegación y formularios responsive
- **Touch Friendly**: Interacciones optimizadas para dispositivos táctiles

## ♿ Accesibilidad

- **Semantic HTML**: Estructura semántica correcta
- **ARIA Labels**: Atributos de accesibilidad
- **Keyboard Navigation**: Navegación completa por teclado
- **Screen Reader**: Compatible con lectores de pantalla
- **Color Contrast**: Contraste adecuado para texto

## 🔍 SEO

- **Meta Tags**: Títulos, descripciones y Open Graph
- **Structured Data**: JSON-LD para motores de búsqueda
- **Sitemap**: Generación automática de sitemap
- **Performance**: Optimización de Core Web Vitals
- **Mobile Friendly**: Certificado por Google

## 📝 Personalización de Datos

### Agregar Nueva Jurisdicción
1. Edita `data/jurisdicciones.json`
2. Agrega el objeto de jurisdicción siguiendo el modelo
3. Incluye centros de servicio con coordenadas
4. Actualiza fuentes y fechas

### Modificar Información Existente
- Actualiza campos en el JSON
- Modifica requisitos, costos o exenciones
- Agrega o quita centros de servicio
- Actualiza enlaces a turneros

## 🚧 TODOs y Mejoras Futuras

### Prioridad Alta
- [ ] Conectar con APIs oficiales de jurisdicciones
- [ ] Implementar sistema de notificaciones
- [ ] Agregar más jurisdicciones
- [ ] Implementar cache de datos

### Prioridad Media
- [ ] Sistema de usuarios y favoritos
- [ ] Comparador de costos entre jurisdicciones
- [ ] Calculadora de requisitos
- [ ] Integración con redes sociales

### Prioridad Baja
- [ ] App móvil nativa
- [ ] Sistema de reviews de centros
- [ ] Chat en vivo
- [ ] API pública para desarrolladores

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## ⚠️ Descargo de Responsabilidad

**IMPORTANTE**: Este sitio web NO es oficial y no está afiliado a ningún organismo gubernamental de Argentina.

- La información es solo para fines informativos
- Siempre verifica con fuentes oficiales antes de realizar trámites
- Los costos y requisitos pueden cambiar sin previo aviso
- No nos hacemos responsables por errores u omisiones

## 📞 Contacto

- **Email**: info@grabadoautopartes.com.ar
- **Sitio Web**: [grabadoautopartes.com.ar](https://grabadoautopartes.com.ar)
- **GitHub**: [martingalmarino/grabado-autopartes-argentina](https://github.com/martingalmarino/grabado-autopartes-argentina)

## 🙏 Agradecimientos

- Comunidad de Next.js por el excelente framework
- Equipo de TailwindCSS por las herramientas de diseño
- Contribuidores de MapLibre por la librería de mapas
- Usuarios que reportan bugs y sugieren mejoras

---

**Desarrollado con ❤️ para la comunidad automotriz argentina**
# Wed Sep  3 21:09:48 -03 2025
