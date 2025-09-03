export interface Jurisdiccion {
  slug: string
  nombre: string
  estadoGrabado: 'obligatorio' | 'opcional' | 'no_aplica'
  fuentes: Fuente[]
  grabado: GrabadoInfo
  rpa_rpm?: RpaRpmInfo
  cedulas: CedulasInfo
  centros: Centro[]
}

export interface Fuente {
  nombre: string
  url: string
  fecha: string
}

export interface GrabadoInfo {
  turneroUrl?: string
  requisitos: string[]
  costo?: string
  exenciones?: string[]
  faqs: Array<{
    pregunta: string
    respuesta: string
  }>
}

export interface RpaRpmInfo {
  cuandoAplica: string
  pasos: string[]
  documentacion: string[]
}

export interface CedulasInfo {
  tipos: Array<{
    nombre: string
    descripcion: string
    pasos: string[]
  }>
  faqs: Array<{
    pregunta: string
    respuesta: string
  }>
}

export interface Centro {
  id: string
  nombre: string
  lat: number
  lng: number
  servicios: string[]
  horarios: string
  telefono?: string
  direccion?: string
}

export interface FiltrosMapa {
  busqueda: string
  provincia: string
  ciudad: string
  servicio: string
}

export interface FormularioContacto {
  nombre: string
  email: string
  telefono: string
  jurisdiccion: string
  consulta: string
  consentimiento: boolean
}
