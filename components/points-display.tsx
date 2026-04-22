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

    const duration = 2400
    const steps = 90
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

  const savedShirts = Math.round(points / 2700)
  const savedJeans = Math.round(points / 7000)

  return (
    <div className="flex flex-col gap-5">
      {/* Main counter */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#4A7C59]/10">
          <Droplets className="h-7 w-7 text-[#4A7C59]" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            Litros ahorrados
          </p>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-5xl font-bold italic tabular-nums leading-none text-foreground md:text-6xl">
              {animatedPoints.toLocaleString("es-ES")}
            </span>
            <span className="text-base font-medium text-[#4A7C59]">L</span>
          </div>
        </div>
      </div>

      {/* Impact equivalences */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[#4A7C59]/6 px-3 py-2.5">
          <p className="text-lg font-bold text-[#4A7C59]">{savedShirts}</p>
          <p className="text-[10px] leading-snug text-muted-foreground">
            camisetas no fabricadas
          </p>
        </div>
        <div className="rounded-xl bg-[#1B3B6F]/6 px-3 py-2.5">
          <p className="text-lg font-bold text-[#1B3B6F]">{savedJeans}</p>
          <p className="text-[10px] leading-snug text-muted-foreground">
            jeans no producidos
          </p>
        </div>
      </div>
    </div>
  )
}
