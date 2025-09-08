import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed...')

  // Crear provincias
  const cordoba = await prisma.province.upsert({
    where: { slug: 'cordoba' },
    update: {},
    create: {
      slug: 'cordoba',
      name: 'Córdoba',
    },
  })

  const santaFe = await prisma.province.upsert({
    where: { slug: 'santa-fe' },
    update: {},
    create: {
      slug: 'santa-fe',
      name: 'Santa Fe',
    },
  })

  const buenosAires = await prisma.province.upsert({
    where: { slug: 'buenos-aires' },
    update: {},
    create: {
      slug: 'buenos-aires',
      name: 'Buenos Aires',
    },
  })

  console.log('✅ Provincias creadas')

  // Crear drones
  const djiT25 = await prisma.drone.upsert({
    where: { slug: 'dji-agras-t25' },
    update: {},
    create: {
      slug: 'dji-agras-t25',
      brand: 'DJI',
      model: 'Agras T25',
      capacityL: 25,
      payloadKg: 25,
      year: 2023,
      features: JSON.stringify(['RTK', 'Vision', 'Radar', 'Nocturno']),
      pros: JSON.stringify([
        'Excelente autonomía de vuelo',
        'Sistema de pulverización preciso',
        'Resistente a condiciones adversas',
        'Fácil mantenimiento'
      ]),
      cons: JSON.stringify([
        'Precio elevado',
        'Requiere capacitación especializada',
        'Dependiente de condiciones climáticas'
      ]),
      specs: JSON.stringify({
        peso: '24.5 kg',
        velocidad: '12 m/s',
        autonomia: '18 minutos',
        cobertura: '10-12 ha/hora',
        precision: '±2 cm'
      })
    },
  })

  const djiT40 = await prisma.drone.upsert({
    where: { slug: 'dji-agras-t40' },
    update: {},
    create: {
      slug: 'dji-agras-t40',
      brand: 'DJI',
      model: 'Agras T40',
      capacityL: 40,
      payloadKg: 40,
      year: 2023,
      features: JSON.stringify(['RTK', 'Vision', 'Radar', 'Nocturno', 'Dual Tank']),
      pros: JSON.stringify([
        'Mayor capacidad de carga',
        'Sistema dual de tanques',
        'Tecnología de pulverización avanzada',
        'Excelente para grandes extensiones'
      ]),
      cons: JSON.stringify([
        'Mayor inversión inicial',
        'Requiere más espacio para operación',
        'Consumo de batería elevado'
      ]),
      specs: JSON.stringify({
        peso: '38.2 kg',
        velocidad: '12 m/s',
        autonomia: '20 minutos',
        cobertura: '15-18 ha/hora',
        precision: '±2 cm'
      })
    },
  })

  const djiT50 = await prisma.drone.upsert({
    where: { slug: 'dji-agras-t50' },
    update: {},
    create: {
      slug: 'dji-agras-t50',
      brand: 'DJI',
      model: 'Agras T50',
      capacityL: 50,
      payloadKg: 50,
      year: 2025,
      features: JSON.stringify(['RTK', 'Vision', 'Radar', 'Nocturno', 'Dual Tank', 'AI']),
      pros: JSON.stringify([
        'Máxima capacidad del mercado',
        'Inteligencia artificial integrada',
        'Sistema de navegación avanzado',
        'Ideal para operaciones comerciales'
      ]),
      cons: JSON.stringify([
        'Precio muy elevado',
        'Complejidad de operación',
        'Requiere infraestructura especializada'
      ]),
      specs: JSON.stringify({
        peso: '45.8 kg',
        velocidad: '12 m/s',
        autonomia: '22 minutos',
        cobertura: '20-25 ha/hora',
        precision: '±1 cm'
      })
    },
  })


  console.log('✅ Drones creados')

  // Crear empresas
  const empresa1 = await prisma.company.upsert({
    where: { slug: 'agro-drones-cordoba' },
    update: {},
    create: {
      slug: 'agro-drones-cordoba',
      name: 'Agro Drones Córdoba',
      description: 'Especialistas en fumigación con drones para la región centro de Argentina. Más de 5 años de experiencia.',
      websiteUrl: 'https://agrodronescordoba.com',
      phone: '+54 351 123-4567',
      whatsapp: '+54 351 123-4567',
      email: 'info@agrodronescordoba.com',
      address: 'Ruta 9 Km 123',
      city: 'Córdoba',
      provinceId: cordoba.id,
      services: JSON.stringify(['pulverizacion', 'fertilizacion']),
      certifications: JSON.stringify(['ANAC-CEVANT', 'BPA']),
      lat: -31.4201,
      lng: -64.1888,
      isFeatured: true,
    },
  })

  const empresa2 = await prisma.company.upsert({
    where: { slug: 'precision-aerea-santa-fe' },
    update: {},
    create: {
      slug: 'precision-aerea-santa-fe',
      name: 'Precisión Aérea Santa Fe',
      description: 'Servicios de pulverización y siembra con drones. Cobertura en toda la provincia de Santa Fe.',
      websiteUrl: 'https://precisionaereasf.com',
      phone: '+54 342 987-6543',
      whatsapp: '+54 342 987-6543',
      email: 'contacto@precisionaereasf.com',
      address: 'Ruta 11 Km 45',
      city: 'Santa Fe',
      provinceId: santaFe.id,
      services: JSON.stringify(['pulverizacion', 'siembra', 'fertilizacion']),
      certifications: JSON.stringify(['ANAC-CEVANT', 'BPA', 'ISO-9001']),
      lat: -31.6333,
      lng: -60.7000,
      isFeatured: true,
    },
  })

  const empresa3 = await prisma.company.upsert({
    where: { slug: 'drone-agricola-buenos-aires' },
    update: {},
    create: {
      slug: 'drone-agricola-buenos-aires',
      name: 'Drone Agrícola Buenos Aires',
      description: 'Líderes en tecnología de drones agrícolas en la provincia de Buenos Aires.',
      websiteUrl: 'https://droneagricolaba.com',
      phone: '+54 11 4567-8901',
      whatsapp: '+54 11 4567-8901',
      email: 'ventas@droneagricolaba.com',
      address: 'Ruta 5 Km 78',
      city: 'Luján',
      provinceId: buenosAires.id,
      services: JSON.stringify(['pulverizacion', 'mapeo']),
      certifications: JSON.stringify(['ANAC-CEVANT', 'BPA']),
      lat: -34.5734,
      lng: -59.1033,
      isFeatured: false,
    },
  })

  console.log('✅ Empresas creadas')

  // Crear artículos
  const articulos = [
    {
      slug: 'que-es-fumigacion-con-drones',
      title: '¿Qué es la fumigación con drones y cómo funciona?',
      category: 'conceptos',
      excerpt: 'Descubre todo sobre la fumigación con drones: qué es, cómo funciona y por qué está revolucionando la agricultura moderna.',
      bodyMdx: `# ¿Qué es la fumigación con drones?

La fumigación con drones es una técnica agrícola que utiliza vehículos aéreos no tripulados (UAV) para aplicar productos fitosanitarios, fertilizantes y otros tratamientos a los cultivos de manera precisa y eficiente.

## ¿Cómo funciona?

Los drones agrícolas están equipados con:

- **Sistemas de pulverización**: Tanques de líquido con boquillas especializadas
- **Navegación GPS/RTK**: Para vuelos precisos y repetibles
- **Sensores**: Cámaras, radares y sensores de proximidad
- **Software de planificación**: Para optimizar rutas y dosis

## Ventajas principales

1. **Precisión**: Aplicación milimétrica de productos
2. **Eficiencia**: Mayor velocidad que métodos tradicionales
3. **Seguridad**: Reduce exposición humana a químicos
4. **Flexibilidad**: Acceso a terrenos difíciles

## FAQ

### ¿Es legal fumigar con drones en Argentina?
Sí, pero requiere certificaciones específicas de ANAC y cumplimiento de normativas provinciales.

### ¿Qué cultivos se pueden fumigar?
Prácticamente todos: soja, maíz, trigo, girasol, hortalizas, frutales, etc.

### ¿Cuál es el costo por hectárea?
Varía entre $3.000 y $8.000 por hectárea según el tipo de aplicación y cultivo.`
    },
    {
      slug: 'beneficios-fumigacion-con-drones',
      title: 'Beneficios y ventajas de aplicar agroquímicos con drones',
      category: 'conceptos',
      excerpt: 'Conoce los principales beneficios de la fumigación con drones: mayor precisión, eficiencia y rentabilidad en tus cultivos.',
      bodyMdx: `# Beneficios de la fumigación con drones

La tecnología de drones está transformando la agricultura argentina, ofreciendo ventajas significativas sobre los métodos tradicionales.

## Beneficios económicos

- **Reducción de costos**: Hasta 40% menos que aviones fumigadores
- **Mayor productividad**: 3-5 veces más rápido que equipos terrestres
- **Menor desperdicio**: Aplicación precisa reduce uso de productos
- **ROI positivo**: Retorno de inversión en 2-3 campañas

## Beneficios operativos

- **Acceso a terrenos difíciles**: Humedales, arrozales, cultivos altos
- **Operación nocturna**: Mayor ventana de aplicación
- **Menor compactación**: No daña el suelo como maquinaria pesada
- **Flexibilidad climática**: Operación en condiciones adversas

## Beneficios ambientales

- **Menor deriva**: Aplicación más controlada
- **Reducción de emisiones**: Menor consumo de combustible
- **Protección de cursos de agua**: Vuelos precisos evitan contaminación
- **Biodiversidad**: Menor impacto en fauna y flora

## FAQ

### ¿Cuánto tiempo ahorra la fumigación con drones?
Entre 60-80% del tiempo comparado con métodos tradicionales.

### ¿Es más efectiva que la fumigación terrestre?
Sí, especialmente en cultivos altos y terrenos irregulares.

### ¿Qué productos se pueden aplicar?
Herbicidas, insecticidas, fungicidas, fertilizantes líquidos y sólidos.`
    },
    {
      slug: 'mejores-drones-agricolas-2025',
      title: 'Guía 2025 de drones agrícolas: modelos y características',
      category: 'tecnologia',
      excerpt: 'Análisis completo de los mejores drones agrícolas del mercado: DJI, XAG y otras marcas líderes con especificaciones técnicas.',
      bodyMdx: `# Mejores drones agrícolas 2025

Guía completa de los drones más destacados para fumigación agrícola en Argentina.

## DJI Agras T50

**Especificaciones:**
- Capacidad: 50L líquidos / 50kg sólidos
- Autonomía: 22 minutos
- Cobertura: 20-25 ha/hora
- Precio: $45.000 USD

**Ventajas:**
- Máxima capacidad del mercado
- Inteligencia artificial integrada
- Sistema dual de tanques
- Excelente soporte técnico

## DJI Agras T40

**Especificaciones:**
- Capacidad: 40L líquidos / 40kg sólidos
- Autonomía: 20 minutos
- Cobertura: 15-18 ha/hora
- Precio: $35.000 USD

**Ventajas:**
- Excelente relación precio-calidad
- Tecnología probada
- Amplia disponibilidad de repuestos
- Fácil mantenimiento


## Comparativa de costos

| Modelo | Precio | Costo/ha | ROI estimado |
|--------|--------|----------|--------------|
| T50 | $45.000 | $2.200 | 18 meses |
| T40 | $35.000 | $2.500 | 15 meses |
| P150 | $28.000 | $3.000 | 12 meses |

## FAQ

### ¿Cuál es el mejor drone para empezar?
El DJI Agras T40 ofrece el mejor balance precio-prestaciones.

### ¿Se pueden financiar los drones?
Sí, varias empresas ofrecen planes de financiación y leasing.

### ¿Qué certificaciones necesitan?
Deben cumplir normativas ANAC y tener certificación CEVANT.`
    }
  ]

  for (const articulo of articulos) {
    await prisma.article.upsert({
      where: { slug: articulo.slug },
      update: {},
      create: articulo,
    })
  }

  console.log('✅ Artículos creados')

  // Crear reviews
  const reviews = [
    {
      slug: 'review-dji-agras-t25',
      title: 'Review DJI Agras T25: Análisis completo del drone agrícola',
      droneId: djiT25.id,
      summary: 'Análisis detallado del DJI Agras T25, sus características, pros, contras y rendimiento en campo.',
      bodyMdx: `# Review DJI Agras T25

El DJI Agras T25 representa una excelente opción para operaciones agrícolas medianas, combinando tecnología avanzada con facilidad de uso.

## Especificaciones técnicas

- **Capacidad**: 25L líquidos / 25kg sólidos
- **Peso**: 24.5 kg
- **Autonomía**: 18 minutos
- **Velocidad máxima**: 12 m/s
- **Cobertura**: 10-12 ha/hora

## Pros

✅ **Excelente autonomía** para su categoría
✅ **Sistema de pulverización preciso** con boquillas optimizadas
✅ **Resistente a condiciones adversas** (viento, polvo, humedad)
✅ **Fácil mantenimiento** con repuestos disponibles
✅ **Software intuitivo** para planificación de vuelos

## Contras

❌ **Precio elevado** comparado con competencia
❌ **Requiere capacitación especializada** para operación
❌ **Dependiente de condiciones climáticas** (viento > 10 m/s)
❌ **Baterías costosas** para reemplazo

## Rendimiento en campo

En nuestras pruebas durante 6 meses:

- **Eficiencia**: 95% de precisión en aplicación
- **Confiabilidad**: 98% de vuelos exitosos
- **Mantenimiento**: 2 horas mensuales promedio
- **Costo operativo**: $2.800/ha promedio

## Veredicto

**Puntuación: 4.2/5**

El Agras T25 es ideal para productores medianos que buscan tecnología confiable y eficiente. Su precio se justifica por la calidad de construcción y soporte técnico.

## FAQ

### ¿Vale la pena la inversión?
Sí, especialmente si manejas más de 500 hectáreas por campaña.

### ¿Qué cultivos son ideales?
Soja, maíz, trigo, girasol y hortalizas de hoja.

### ¿Se puede usar para siembra?
Sí, con el kit de siembra opcional.`,
      rating: 4
    }
  ]

  for (const review of reviews) {
    await prisma.review.upsert({
      where: { slug: review.slug },
      update: {},
      create: review,
    })
  }

  console.log('✅ Reviews creadas')

  // Crear FAQs
  const faqs = [
    {
      question: '¿Es legal fumigar con drones en Argentina?',
      answerMdx: 'Sí, es legal pero requiere certificaciones específicas. Los operadores deben tener licencia de ANAC (Administración Nacional de Aviación Civil) y cumplir con normativas provinciales. También es necesario contar con certificación CEVANT para el manejo de productos fitosanitarios.'
    },
    {
      question: '¿Cuánto cuesta fumigar con drones por hectárea?',
      answerMdx: 'El costo varía entre $3.000 y $8.000 por hectárea según el tipo de aplicación, cultivo y región. Factores como la complejidad del terreno, tipo de producto y urgencia del servicio influyen en el precio final.'
    },
    {
      question: '¿Qué cultivos se pueden fumigar con drones?',
      answerMdx: 'Prácticamente todos los cultivos: soja, maíz, trigo, girasol, arroz, hortalizas, frutales, viñedos, etc. Los drones son especialmente efectivos en cultivos altos y terrenos de difícil acceso para maquinaria tradicional.'
    },
    {
      question: '¿Cuántas hectáreas puede fumigar un drone por día?',
      answerMdx: 'Un drone agrícola puede cubrir entre 80-200 hectáreas por día, dependiendo del modelo, condiciones climáticas y tipo de aplicación. Los drones más grandes como el DJI Agras T50 pueden alcanzar hasta 300 hectáreas en condiciones óptimas.'
    },
    {
      question: '¿Qué ventajas tiene la fumigación con drones?',
      answerMdx: 'Las principales ventajas son: mayor precisión en la aplicación, acceso a terrenos difíciles, menor compactación del suelo, operación nocturna, reducción de deriva, menor exposición humana a químicos y mayor eficiencia operativa.'
    }
  ]

  for (const faq of faqs) {
    await prisma.faq.upsert({
      where: { id: `faq-${faq.question.slice(0, 20)}` },
      update: {},
      create: faq,
    })
  }

  console.log('✅ FAQs creadas')
  console.log('🎉 Seed completado exitosamente!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })