import { Metadata } from 'next'
import { Container } from '@/components/Container'
import { buildMeta, jsonLdWebSite } from '@/lib/seo'
import React from "react";
import SectionGrid from "@/components/SectionGrid";
import { CardCalculator } from "@/components/CardCalculator";

export const metadata: Metadata = buildMeta({
  title: 'Calculadoras Online Gratuitas',
  description: 'Facilitamos tus cálculos en temas de finanzas, salud, matemática, calendario, geometría y más. Calculadoras online gratuitas, rápidas y amigables.',
  canonical: '/',
  keywords: [
    'calculadoras online',
    'matemáticas',
    'finanzas',
    'salud',
    'calendario',
    'geometría',
    'gratis',
    'educación'
  ]
})

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdWebSite()),
        }}
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Calculadoras Online Gratuitas
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Facilitamos tus cálculos en temas de finanzas, salud, matemática, calendario, geometría y más. 
            Calculadoras online gratuitas, rápidas y amigables.
          </p>
        </div>

        {/* Calculadoras Matemáticas */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold mb-4">Calculadoras Matemáticas</h2>
          <SectionGrid>
            <CardCalculator href="/matematicas/porcentajes/" title="Calculadora de Porcentajes" color="bg-red-500" />
            <CardCalculator href="/matematicas/fracciones/"  title="Calculadora de Fracciones"  color="bg-red-500" />
            <CardCalculator href="/matematicas/potencias-raices/" title="Potencias y Raíces" color="bg-red-500" />
            <CardCalculator href="/matematicas/algebra/" title="Calculadora de Álgebra" color="bg-red-500" />
            <CardCalculator href="/matematicas/trigonometria/" title="Calculadora Trigonométrica" color="bg-red-500" />
            <CardCalculator href="/matematicas/derivadas/" title="Derivadas (aprox.)" color="bg-red-500" />
            <CardCalculator href="/matematicas/integrales/" title="Integrales (Simpson)" color="bg-red-500" />
            <CardCalculator href="/matematicas/matrices/" title="Calculadora de Matrices" color="bg-red-500" />
            <CardCalculator href="/matematicas/combinatoria/" title="Combinatoria" color="bg-red-500" />
            <CardCalculator href="/matematicas/progresiones/" title="Progresiones (PA/PG)" color="bg-red-500" />
            <CardCalculator href="/matematicas/logaritmos/" title="Logaritmos" color="bg-red-500" />
          </SectionGrid>
        </section>

        {/* Calculadoras de Calendario */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold mb-4">Calculadoras de Calendario</h2>
          <SectionGrid>
            <CardCalculator href="/calendario/dias-entre-fechas/" title="Contador de Días entre Fechas" color="bg-blue-600" />
            <CardCalculator href="/calendario/sumar-restar-fecha/" title="Sumar/Restar Días a una Fecha" color="bg-blue-600" />
            <CardCalculator href="/calendario/horas-minutos/" title="Calculadora de Horas y Minutos" color="bg-blue-600" />
            <CardCalculator href="/calendario/vacaciones/" title="Días de Vacaciones (Feriado Legal)" color="bg-blue-600" />
          </SectionGrid>
        </section>

        {/* Calculadoras de Salud */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold mb-4">Calculadoras de Salud</h2>
          <SectionGrid>
            <CardCalculator href="/salud/imc/" title="Índice Masa Corporal (IMC)" color="bg-green-600" />
            <CardCalculator href="/salud/tmb/" title="Tasa Metabólica Basal (TMB)" color="bg-green-600" />
            <CardCalculator href="/salud/grasa-corporal/" title="Porcentaje Grasa Corporal" color="bg-green-600" />
            <CardCalculator href="/salud/pafi/" title="Calculadora PaFi" color="bg-green-600" />
          </SectionGrid>
        </section>

        {/* Otras Calculadoras */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold mb-4">Otras Calculadoras</h2>
          <SectionGrid>
            <CardCalculator href="/otras/escala-notas/" title="Escala de Notas" color="bg-orange-500" />
            <CardCalculator href="/otras/gasto-gasolina/" title="Gasto Gasolina para Viajes" color="bg-orange-500" />
            <CardCalculator href="/otras/contador-palabras/" title="Contador de Palabras y Caracteres" color="bg-orange-500" />
            <CardCalculator href="/otras/numeros-romanos/" title="Conversor de Números Romanos" color="bg-orange-500" />
            <CardCalculator href="/otras/contador-clicks/" title="Contador de Clicks (CPS Test)" color="bg-orange-500" />
          </SectionGrid>
        </section>

        {/* Calculadoras de Geometría */}
        <section className="mb-12">
          <h2 className="text-3xl font-extrabold mb-4">Calculadoras de Geometría</h2>
          <SectionGrid>
            <CardCalculator href="/geometria/circulo/" title="Área y Perímetro del Círculo" color="bg-purple-600" />
            <CardCalculator href="/geometria/rectangulo/" title="Área y Perímetro del Rectángulo" color="bg-purple-600" />
            <CardCalculator href="/geometria/triangulo/" title="Área del Triángulo" color="bg-purple-600" />
            <CardCalculator href="/geometria/cuadrado/" title="Área y Perímetro del Cuadrado" color="bg-purple-600" />
          </SectionGrid>
        </section>
      </main>
    </>
  );
}