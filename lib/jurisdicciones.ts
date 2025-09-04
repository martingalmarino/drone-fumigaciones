import { Jurisdiccion } from '@/types'
import fs from 'fs'
import path from 'path'

// Función server-side para obtener jurisdicciones
export async function getJurisdicciones(): Promise<Jurisdiccion[]> {
  try {
    // Intentar diferentes rutas según el entorno
    const possiblePaths = [
      path.join(process.cwd(), 'public', 'data', 'jurisdicciones.json'),
      path.join(process.cwd(), 'data', 'jurisdicciones.json'),
      path.join(process.cwd(), '..', 'public', 'data', 'jurisdicciones.json')
    ]
    
    let fileContents = ''
    let filePath = ''
    
    for (const testPath of possiblePaths) {
      try {
        if (fs.existsSync(testPath)) {
          fileContents = fs.readFileSync(testPath, 'utf8')
          filePath = testPath
          break
        }
      } catch (err) {
        continue
      }
    }
    
    if (!fileContents) {
      console.error('No se pudo encontrar el archivo jurisdicciones.json en ninguna ruta')
      return []
    }
    
    const data = JSON.parse(fileContents)
    
    // Filtrar solo las jurisdicciones válidas (excluir metadata)
    const jurisdicciones = data.filter((item: any) => item.slug && item.nombre)
    
    console.log(`Cargadas ${jurisdicciones.length} jurisdicciones desde: ${filePath}`)
    return jurisdicciones
  } catch (error) {
    console.error('Error loading jurisdicciones:', error)
    return []
  }
}

// Función server-side para obtener una jurisdicción por slug
export async function getJurisdiccionBySlug(slug: string): Promise<Jurisdiccion | null> {
  try {
    console.log(`Buscando jurisdicción con slug: ${slug}`)
    const jurisdicciones = await getJurisdicciones()
    console.log(`Total de jurisdicciones cargadas: ${jurisdicciones.length}`)
    
    const jurisdiccion = jurisdicciones.find(j => j.slug === slug)
    if (jurisdiccion) {
      console.log(`Jurisdicción encontrada: ${jurisdiccion.nombre}`)
    } else {
      console.log(`Jurisdicción no encontrada para slug: ${slug}`)
      console.log('Slugs disponibles:', jurisdicciones.map(j => j.slug))
    }
    
    return jurisdiccion || null
  } catch (error) {
    console.error('Error loading jurisdiccion by slug:', error)
    return null
  }
}
