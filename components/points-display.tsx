"use client"

import { useEffect, useState, useRef } from "react"
import { Droplets } from "lucide-react"

interface PointsDisplayProps {
  points: number
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  const [animatedPoints, setAnimatedPoints] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const duration = 2200
    const steps = 80
    const increment = points / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= points) {
        setAnimatedPoints(points)
        clearInterval(timer)
      } else {
        setAnimatedPoints(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [points])

  return (
    <div className="flex flex-col gap-4">
      {/* Main counter */}
      <div className="flex items-end gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4A7C59]/10">
          <Droplets className="h-6 w-6 text-[#4A7C59]" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            Litros ahorrados
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-5xl font-bold italic tabular-nums text-foreground leading-none">
              {animatedPoints.toLocaleString("es-ES")}
            </span>
            <span className="text-sm font-medium text-muted-foreground">L</span>
          </div>
        </div>
      </div>

      {/* Impact summary bar */}
      <div className="flex items-center gap-3 rounded-xl bg-secondary/70 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A7C59]/10">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-xs font-medium text-foreground">
            Equivale a{" "}
            <span className="font-bold text-[#4A7C59]">
              {Math.round(points / 2700).toLocaleString("es-ES")} camisetas
            </span>{" "}
            que no se fabricaron
          </p>
          <p className="text-[10px] leading-relaxed text-muted-foreground">
            Cada prenda reutilizada ahorra miles de litros de agua
          </p>
        </div>
      </div>
    </div>
  )
}
