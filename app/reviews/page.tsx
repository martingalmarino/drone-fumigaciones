import { Metadata } from 'next'
import ReviewsClient from './ReviewsClient'

export const metadata: Metadata = {
  title: 'Reviews de Drones Agrícolas | Análisis y Comparativas 2025',
  description: 'Análisis detallado de los mejores drones agrícolas: DJI Agras, XAG y más. Especificaciones, pros, contras y comparativas.',
}

export default async function ReviewsPage() {
  // Hardcoded drones and reviews data for now
  const drones = [
    {
      id: '1',
      slug: 'dji-agras-t10',
      brand: 'DJI',
      model: 'Agras T10',
      capacityL: 8,
      payloadKg: 8,
      year: 2025,
      features: '["Tanque desmontable", "Diseño plegable 70%", "Modo Swarm", "Carga rápida 7 min"]',
      pros: '["Diseño compacto", "Fácil transporte", "Modo Swarm 3 drones", "Ideal parcelas pequeñas"]',
      cons: '["Caudal limitado 3 L/min", "Autonomía reducida con carga"]',
      reviews: [
        {
          id: '1',
          slug: 'dji-agras-t10-review',
          title: 'DJI Agras T10 - Análisis Completo',
          rating: 4,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '2',
      slug: 'dji-agras-t20p',
      brand: 'DJI',
      model: 'Agras T20P',
      capacityL: 20,
      payloadKg: 25,
      year: 2025,
      features: '["Sistema dual atomizado", "Radar omnidireccional", "Visión binocular", "Carga rápida"]',
      pros: '["Diseño compacto", "Sensores avanzados", "Carga rápida 9-12 min", "Versatilidad"]',
      cons: '["Precio elevado", "Curva de aprendizaje"]',
      reviews: [
        {
          id: '2',
          slug: 'dji-agras-t20p-review',
          title: 'DJI Agras T20P - Análisis Completo',
          rating: 4,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '3',
      slug: 'dji-agras-t30',
      brand: 'DJI',
      model: 'Agras T30',
      capacityL: 30,
      payloadKg: 40,
      year: 2025,
      features: '["GPS RTK", "Radar omnidireccional", "Estructura plegable", "IP67"]',
      pros: '["Alta eficiencia", "Precisión GPS", "Resistencia IP67", "Autonomía superior"]',
      cons: '["Tamaño grande", "Mantenimiento complejo"]',
      reviews: [
        {
          id: '3',
          slug: 'dji-agras-t30-review',
          title: 'DJI Agras T30 - Análisis Completo',
          rating: 4,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '4',
      slug: 'dji-agras-t50',
      brand: 'DJI',
      model: 'Agras T50',
      capacityL: 50,
      payloadKg: 50,
      year: 2025,
      features: '["GPS RTK", "Radar 360°", "Pulverización + Esparcido", "8 motores coaxiales"]',
      pros: '["Alta capacidad", "Doble función", "Detección avanzada", "Máxima eficiencia"]',
      cons: '["Costo muy alto", "Requiere experiencia"]',
      reviews: [
        {
          id: '4',
          slug: 'dji-agras-t50-review',
          title: 'DJI Agras T50 - Análisis Completo',
          rating: 5,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '5',
      slug: 'xag-p100-pro',
      brand: 'XAG',
      model: 'P100 Pro',
      capacityL: 50,
      payloadKg: 50,
      year: 2025,
      features: '["Radar 4D", "RevoSpray 3", "RevoCast 3", "Carga rápida 11 min"]',
      pros: '["Alto rendimiento", "Radar 4D avanzado", "150 kg/min esparcido", "Tecnología probada"]',
      cons: '["Precio competitivo", "Menos opciones personalización"]',
      reviews: [
        {
          id: '5',
          slug: 'xag-p100-pro-review',
          title: 'XAG P100 Pro - Análisis Completo',
          rating: 4,
          createdAt: new Date(),
        }
      ]
    },
    {
      id: '6',
      slug: 'xag-v40',
      brand: 'XAG',
      model: 'V40',
      capacityL: 16,
      payloadKg: 40,
      year: 2025,
      features: '["Doble rotor inclinable", "RTK centimétrico", "SuperX4 IA", "3 modos operación"]',
      pros: '["Diseño compacto", "Versatilidad", "Carga rápida 11 min", "Innovación"]',
      cons: '["Capacidad limitada", "Nuevo en mercado"]',
      reviews: [
        {
          id: '6',
          slug: 'xag-v40-review',
          title: 'XAG V40 - Análisis Completo',
          rating: 4,
          createdAt: new Date(),
        }
      ]
    }
  ]

  const reviews = [
    {
      id: '1',
      slug: 'dji-agras-t10-review',
      title: 'DJI Agras T10 - Análisis Completo',
      summary: 'El DJI Agras T10 es ideal para parcelas pequeñas con su diseño compacto, tanque desmontable y modo Swarm.',
      rating: 4,
      createdAt: new Date(),
      drone: {
        id: '1',
        brand: 'DJI',
        model: 'Agras T10',
        capacityL: 8,
        year: 2025
      }
    },
    {
      id: '2',
      slug: 'dji-agras-t20p-review',
      title: 'DJI Agras T20P - Análisis Completo',
      summary: 'El DJI Agras T20P combina diseño compacto, sensores avanzados y 20L de pulverización en un drone agrícola versátil.',
      rating: 4,
      createdAt: new Date(),
      drone: {
        id: '2',
        brand: 'DJI',
        model: 'Agras T20P',
        capacityL: 20,
        year: 2025
      }
    },
    {
      id: '3',
      slug: 'dji-agras-t30-review',
      title: 'DJI Agras T30 - Análisis Completo',
      summary: 'El DJI Agras T30 ofrece 30L de capacidad con tecnología RTK y resistencia IP67 para operaciones exigentes.',
      rating: 4,
      createdAt: new Date(),
      drone: {
        id: '3',
        brand: 'DJI',
        model: 'Agras T30',
        capacityL: 30,
        year: 2025
      }
    },
    {
      id: '4',
      slug: 'dji-agras-t50-review',
      title: 'DJI Agras T50 - Análisis Completo',
      summary: 'El DJI Agras T50 es el drone agrícola más avanzado con 50L de capacidad y tecnología de doble función.',
      rating: 5,
      createdAt: new Date(),
      drone: {
        id: '4',
        brand: 'DJI',
        model: 'Agras T50',
        capacityL: 50,
        year: 2025
      }
    },
    {
      id: '5',
      slug: 'xag-p100-pro-review',
      title: 'XAG P100 Pro - Análisis Completo',
      summary: 'El XAG P100 Pro destaca por su radar 4D y capacidad de esparcido de 150 kg/min para operaciones de gran escala.',
      rating: 4,
      createdAt: new Date(),
      drone: {
        id: '5',
        brand: 'XAG',
        model: 'P100 Pro',
        capacityL: 50,
        year: 2025
      }
    },
    {
      id: '6',
      slug: 'xag-v40-review',
      title: 'XAG V40 - Análisis Completo',
      summary: 'El XAG V40 innova con doble rotor inclinable y SuperX4 IA para máxima versatilidad en aplicaciones agrícolas.',
      rating: 4,
      createdAt: new Date(),
      drone: {
        id: '6',
        brand: 'XAG',
        model: 'V40',
        capacityL: 16,
        year: 2025
      }
    }
  ]

  return <ReviewsClient drones={drones} reviews={reviews} />
}