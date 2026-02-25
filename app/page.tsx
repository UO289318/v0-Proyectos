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

      <main className="mx-auto max-w-5xl px-4 py-8">
        {/* Hero Section - Plant + Points + Ranking */}
        <section className="mb-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid gap-0 md:grid-cols-5">
              {/* Left column - Plant */}
              <div className="relative flex flex-col items-center justify-center bg-secondary/50 px-6 py-10 md:col-span-2">
                {/* Decorative background pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
                  <svg width="100%" height="100%">
                    <pattern
                      id="leaf-pattern"
                      x="0"
                      y="0"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="20" cy="20" r="1" fill="#1B3B6F" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#leaf-pattern)" />
                  </svg>
                </div>
                <InteractivePlant points={points} />
              </div>

              {/* Right column - Points + Ranking */}
              <div className="flex flex-col justify-center gap-6 p-6 md:col-span-3 md:p-8">
                {/* Greeting */}
                <div>
                  <p className="text-sm text-muted-foreground">
                    Bienvenido de vuelta
                  </p>
                  <h1 className="font-serif text-3xl font-bold italic text-foreground md:text-4xl">
                    Tu impacto importa
                  </h1>
                </div>

                {/* Points */}
                <PointsDisplay points={points} />

                {/* Divider */}
                <div className="h-px w-full bg-border" />

                {/* Ranking */}
                <RankingBadge points={points} />
              </div>
            </div>
          </div>
        </section>

        {/* How evaluation works */}
        <section id="como-funciona" className="mb-12 scroll-mt-20">
          <EvaluationSection />
        </section>

        {/* Litros Ahorrados explanation */}
        <section id="litros" className="mb-12 scroll-mt-20">
          <LitrosExplanation />
        </section>

        {/* Recent Activity */}
        <section className="mb-12">
          <RecentActivity />
        </section>

        {/* CTA Section */}
        <section id="intercambiar" className="mb-12 scroll-mt-20">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  )
}
