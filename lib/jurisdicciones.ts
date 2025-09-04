import { Jurisdiccion } from '@/types'
import fs from 'fs'
import path from 'path'

// Función server-side para obtener jurisdicciones
export async function getJurisdicciones(): Promise<Jurisdiccion[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'data', 'jurisdicciones.json')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    
    // Filtrar solo las jurisdicciones válidas (excluir metadata)
    return data.filter((item: any) => item.slug && item.nombre)
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
