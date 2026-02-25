"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InteractivePlant } from "@/components/interactive-plant"
import { PointsDisplay } from "@/components/points-display"
import { RankingBadge } from "@/components/ranking-badge"
import { EvaluationSection } from "@/components/evaluation-section"
import { LitrosExplanation } from "@/components/litros-explanation"
import { RecentActivity } from "@/components/recent-activity"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  const [points] = useState(2500)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Hero: Dashboard Card */}
        <section className="mb-14">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid gap-0 md:grid-cols-5">
              {/* Left: Interactive Plant */}
              <div className="relative flex flex-col items-center justify-center bg-secondary/40 px-6 py-10 md:col-span-2">
                {/* Soft radial bg */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: "radial-gradient(circle at 50% 60%, rgba(74,124,89,0.06) 0%, transparent 60%)",
                  }}
                />
                <InteractivePlant points={points} />
              </div>

              {/* Right: Points + Ranking */}
              <div className="flex flex-col justify-center gap-6 p-6 md:col-span-3 md:p-8 lg:p-10">
                {/* Greeting */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                    Bienvenido de vuelta
                  </p>
                  <h1 className="font-serif text-3xl font-bold italic text-foreground md:text-4xl text-balance">
                    Tu impacto importa
                  </h1>
                </div>

                {/* Points Counter */}
                <PointsDisplay points={points} />

                {/* Separator */}
                <div className="h-px w-full bg-border" />

                {/* Ranking */}
                <RankingBadge points={points} />
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation System */}
        <section id="como-funciona" className="mb-14 scroll-mt-20">
          <EvaluationSection />
        </section>

        {/* Litros Explanation */}
        <section id="litros" className="mb-14 scroll-mt-20">
          <LitrosExplanation />
        </section>

        {/* Recent Activity */}
        <section className="mb-14">
          <RecentActivity />
        </section>

        {/* CTA */}
        <section id="intercambiar" className="mb-14 scroll-mt-20">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
