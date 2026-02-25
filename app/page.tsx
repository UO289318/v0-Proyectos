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
  const [points] = useState(2500)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Hero dashboard */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid gap-0 md:grid-cols-5">
              {/* Left: Plant */}
              <div className="relative flex flex-col items-center justify-center bg-secondary/30 px-6 py-8 md:col-span-2">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 60%, rgba(74,124,89,0.05) 0%, transparent 60%)",
                  }}
                />
                <InteractivePlant points={points} />
              </div>

              {/* Right: Points + Ranking */}
              <div className="flex flex-col justify-center gap-6 p-6 md:col-span-3 md:p-8 lg:p-10">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Bienvenido de vuelta
                  </p>
                  <h1 className="font-serif text-3xl font-bold italic text-foreground md:text-4xl text-balance">
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

        {/* Evaluation */}
        <section id="como-funciona" className="mb-16 scroll-mt-20">
          <EvaluationSection />
        </section>

        {/* Litros explanation */}
        <section id="litros" className="mb-16 scroll-mt-20">
          <LitrosExplanation />
        </section>

        {/* Badges */}
        <section id="insignias" className="mb-16 scroll-mt-20">
          <BadgesSection />
        </section>

        {/* Recent activity */}
        <section className="mb-16">
          <RecentActivity />
        </section>

        {/* CTA */}
        <section id="intercambiar" className="mb-16 scroll-mt-20">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
