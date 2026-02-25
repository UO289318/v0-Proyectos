"use client"

import { useEffect, useState } from "react"
import { Droplets } from "lucide-react"

interface PointsDisplayProps {
  points: number
}

export function PointsDisplay({ points }: PointsDisplayProps) {
  const [animatedPoints, setAnimatedPoints] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
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
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
          <Droplets className="h-5 w-5 text-accent" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Litros ahorrados
          </p>
          <p className="font-serif text-4xl font-bold italic text-foreground tabular-nums">
            {animatedPoints.toLocaleString("es-ES")}
          </p>
        </div>
      </div>
      <p className="max-w-xs text-center text-xs leading-relaxed text-muted-foreground">
        Cada prenda reutilizada ahorra miles de litros de agua. Tu impacto se mide aqui.
      </p>
    </div>
  )
}
