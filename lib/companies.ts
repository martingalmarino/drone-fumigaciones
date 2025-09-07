// Datos centralizados de empresas - fuente única de verdad
export const allCompanies = [
  {
    id: '1',
    slug: 'fitosanitarios-martin-paez',
    name: 'Fitosanitarios Martín Páez',
    province: 'Córdoba',
    services: '["Fumigación con drones", "Agricultura drones"]',
    isFeatured: true,
    phone: '957 202 591',
    whatsapp: '957 202 591',
    email: null,
    websiteUrl: 'https://fitosanitariosmartinpaez.com/servicios/fumigacion-con-dron/'
  },
  {
    id: '2',
    slug: 'drones-agricolas-de-cordoba',
    name: 'Drones Agrícolas de Córdoba',
    province: 'Córdoba',
    services: '["Fumigación agricultura", "NDVI y drones"]',
    isFeatured: true,
    phone: null,
    whatsapp: null,
    email: null,
    websiteUrl: 'https://www.instagram.com/drones_agricolas_de_cordoba/'
  },
  {
    id: '3',
    slug: 'mb-logistica',
    name: 'MB Logística',
    province: 'Córdoba',
    services: '["Siembra y fumigación con drones", "DJI Agras T30"]',
    isFeatured: false,
    phone: null,
    whatsapp: null,
    email: null,
    websiteUrl: null
  },
  {
    id: '4',
    slug: 'agro-mision-servicios',
    name: 'Agro Misión Servicios',
    province: 'Buenos Aires',
    services: '["Pulverización agrícola con drones", "DJI Agras T40"]',
    isFeatured: true,
    phone: null,
    whatsapp: null,
    email: null,
    websiteUrl: null
  },
  {
    id: '5',
    slug: 'estudio-gyd',
    name: 'Estudio G&D',
    province: 'Buenos Aires',
    services: '["Pulverización con drones", "Drones multirotor"]',
    isFeatured: true,
    phone: '+54 9 249 469-7996',
    whatsapp: '+54 9 249 469-7996',
    email: null,
    websiteUrl: 'https://estudiogyd.com.ar/servicioDrones'
  },
  {
    id: '6',
    slug: 'uss-alarmas',
    name: 'USS Alarmas',
    province: 'Buenos Aires',
    services: '["Drones fumigadores", "Varios modelos"]',
    isFeatured: true,
    phone: '+54 11 4011 3000',
    whatsapp: '+54 11 4011 3000',
    email: null,
    websiteUrl: 'https://uss.com.ar/corporativo/drones-e-industria-4-0/drone-fumigador/'
  },
  {
    id: '7',
    slug: 'biodrone',
    name: 'BioDrone',
    province: 'Santa Fe',
    services: '["Control de plagas con drones", "Combustión interna"]',
    isFeatured: true,
    phone: null,
    whatsapp: null,
    email: null,
    websiteUrl: null
  },
  {
    id: '8',
    slug: 'gd-pulverizacion',
    name: 'G&D Pulverización',
    province: 'Santa Fe',
    services: '["Servicios agro con drones", "Drones multirotor"]',
    isFeatured: true,
    phone: '+54 9 249 469-7996',
    whatsapp: '+54 9 249 469-7996',
    email: null,
    websiteUrl: 'https://www.agroads.com.ar/detalle.asp?clasi=714687'
  },
  {
    id: '9',
    slug: 'todo-drones-agricultura',
    name: 'Todo Drones Agricultura',
    province: 'Buenos Aires',
    services: '["Monitoreo de campos y cultivos", "Siembra al voleo", "Fertilización de precisión", "Pulverización automatizada", "Procesamiento NDVI", "Capacitación y asesoría", "Servicio técnico", "Planes de financiamiento"]',
    isFeatured: true,
    phone: '+54 9 11 5263 0498',
    whatsapp: '+54 9 11 3005 1766',
    email: null,
    websiteUrl: 'https://agro.tododrones.com.ar/',
    address: 'Dardo Rocha 2934, 1640 Martínez, Buenos Aires',
    description: 'Integración de tecnología avanzada de drones en el sector agropecuario para optimizar la producción, reducir costos y minimizar el impacto ambiental. Capacitación, asesoría, demostraciones, servicio técnico y financiamiento.',
    industries: '["Cultivos extensivos", "Viñedos", "Frutales", "Cultivos especializados"]',
    socialMedia: '{"instagram": "https://www.instagram.com/tododronesagro/", "linkedin": "https://ar.linkedin.com/company/tododrones-agricultura"}',
    contactPage: 'https://tododrones.com.ar/contactanos/'
  },
  {
    id: '10',
    slug: 'mapagro-medicion-fumigacion-aerea',
    name: 'Mapagro Medición y Fumigación Aérea',
    province: 'Córdoba',
    services: '["Fumigación agrícola aérea con drones", "Medición NDVI y toma de datos", "Asesoría agrícola"]',
    isFeatured: true,
    phone: null,
    whatsapp: null,
    email: null,
    websiteUrl: null,
    address: 'Córdoba, actividad a nivel provincial',
    description: 'Servicio integral de medición y fumigación aérea con drones agrícolas, con foco en aumento de productividad y aplicaciones precisas en cultivos extensivos.',
    socialMedia: '{"instagram": "https://www.instagram.com/reel/CrcKn0sLyEd/"}',
    summary: 'Especialistas en aplicaciones aéreas y análisis agrícola de precisión.'
  }
]

// Función para contar empresas por provincia
export function getCompanyCountByProvince(provinceName: string): number {
  return allCompanies.filter(company => company.province === provinceName).length
}

// Función para obtener todas las empresas
export function getAllCompanies() {
  return allCompanies
}

// Función para obtener empresas por provincia
export function getCompaniesByProvince(provinceName: string) {
  return allCompanies.filter(company => company.province === provinceName)
}

// Función para obtener empresa por slug
export function getCompanyBySlug(slug: string) {
  return allCompanies.find(company => company.slug === slug)
}

// Función para obtener estadísticas generales
export function getCompanyStats() {
  const totalCompanies = allCompanies.length
  const featuredCompanies = allCompanies.filter(company => company.isFeatured).length
  const provinces = Array.from(new Set(allCompanies.map(company => company.province)))
  
  return {
    totalCompanies,
    featuredCompanies,
    totalProvinces: provinces.length,
    companiesByProvince: provinces.map(province => ({
      province,
      count: getCompanyCountByProvince(province)
    }))
  }
}
