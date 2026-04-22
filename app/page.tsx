"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InteractivePlant } from "@/components/interactive-plant"
import { PointsDisplay } from "@/components/points-display"
import { RankingBadge } from "@/components/ranking-badge"
import { EvaluationSection } from "@/components/evaluation-section"
import { LitrosExplanation } from "@/components/litros-explanation"
import { BadgesSection } from "@/components/badges-section"
import { RecentActivity } from "@/components/recent-activity"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  const [points] = useState(7200)
  const [vistaMovil, setVistaMovil] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-500 flex justify-center items-center ${vistaMovil ? 'bg-zinc-200 py-8' : 'bg-background'}`}>
      
      <button
        onClick={() => setVistaMovil(!vistaMovil)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground shadow-xl transition-transform hover:scale-105 border border-primary/20"
      >
        {vistaMovil ? 'Ver PC' : 'Ver Móvil'}
      </button>

      <div 
        className={`w-full transition-all duration-500 relative bg-background flex flex-col @container ${
          vistaMovil 
            ? 'max-w-[400px] h-[85vh] overflow-y-auto overflow-x-hidden rounded-[2.5rem] border-[12px] border-zinc-900 shadow-2xl shadow-zinc-800/50 relative scrollbar-hide' 
            : 'min-h-screen'
        }`}
      >
        
        <Header />

        {/* AJUSTE RESPONSIVO: Cambiamos padding según la vista */}
        <main className={`mx-auto w-full max-w-6xl px-4 flex-1 ${vistaMovil ? 'py-6' : 'py-8 md:py-12'}`}>
          
          <section className="mb-16">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              
              {/* LA SOLUCIÓN CLAVE: Si es móvil forzamos 1 columna, si no, usa el layout original de PC */}
              <div className={`grid gap-0 ${vistaMovil ? 'grid-cols-1' : 'md:grid-cols-5'}`}>
                
                {/* Columna Izquierda (Planta) */}
                <div className={`relative flex flex-col items-center justify-center bg-secondary/30 px-6 py-8 ${vistaMovil ? 'col-span-1' : 'md:col-span-2'}`}>
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 60%, rgba(74,124,89,0.05) 0%, transparent 60%)",
                    }}
                  />
                  <InteractivePlant points={points} />
                </div>

                {/* Columna Derecha (Puntos e info) */}
                <div className={`flex flex-col justify-center gap-6 p-6 ${vistaMovil ? 'col-span-1' : 'md:col-span-3 md:p-8 lg:p-10'}`}>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                      Bienvenido de vuelta
                    </p>
                    {/* Ajustamos también el tamaño de la letra para que no se salga en móvil */}
                    <h1 className={`font-serif font-bold italic text-foreground text-balance ${vistaMovil ? 'text-3xl' : 'text-3xl md:text-4xl'}`}>
                      Tu impacto ambiental
                    </h1>
                  </div>

                  <PointsDisplay points={points} />

                  <div className="h-px w-full bg-border" />

                  <RankingBadge points={points} />
                </div>
              </div>
            </div>
          </section>

          {/* El resto de componentes */}
          <section id="como-funciona" className="mb-16 scroll-mt-20">
            <EvaluationSection />
          </section>

          <section id="litros" className="mb-16 scroll-mt-20">
            <LitrosExplanation />
          </section>

          <section id="insignias" className="mb-16 scroll-mt-20">
            <BadgesSection />
          </section>

          <section className="mb-16">
            <RecentActivity />
          </section>

          <section id="intercambiar" className="mb-16 scroll-mt-20">
            <CTASection />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
