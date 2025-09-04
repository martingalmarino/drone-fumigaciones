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
      return []
    }
    
    const data = JSON.parse(fileContents)
    
    // Filtrar solo las jurisdicciones válidas (excluir metadata)
    const jurisdicciones = data.filter((item: any) => item.slug && item.nombre)
    
    return jurisdicciones
  } catch (error) {
    return []
  }
}

// Función server-side para obtener una jurisdicción por slug
export async function getJurisdiccionBySlug(slug: string): Promise<Jurisdiccion | null> {
  try {
    const jurisdicciones = await getJurisdicciones()
    const jurisdiccion = jurisdicciones.find(j => j.slug === slug)
    
    return jurisdiccion || null
  } catch (error) {
    return null
  }
}
