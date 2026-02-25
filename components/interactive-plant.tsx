"use client"

import { useState, useMemo, useCallback } from "react"
import { X, Leaf } from "lucide-react"

const climateTips = [
  {
    title: "Emisiones de CO2",
    text: "La industria textil es responsable del 10% de las emisiones globales de CO2, mas que todos los vuelos internacionales y el transporte maritimo combinados.",
  },
  {
    title: "Consumo de agua",
    text: "Se necesitan aproximadamente 2,700 litros de agua para fabricar una sola camiseta de algodon. Al reutilizar ropa, ahorras miles de litros.",
  },
  {
    title: "Residuos textiles",
    text: "Cada segundo, el equivalente a un camion de basura lleno de textiles se quema o se deposita en un vertedero en todo el mundo.",
  },
  {
    title: "Microfibras en el oceano",
    text: "Lavar ropa sintetica libera medio millon de toneladas de microfibras al oceano cada ano, equivalente a 50 mil millones de botellas de plastico.",
  },
  {
    title: "Extiende la vida",
    text: "Extender la vida de la ropa solo 9 meses reduce su huella de carbono, agua y residuos entre un 20-30%.",
  },
  {
    title: "Moda rapida",
    text: "La moda rapida produce 92 millones de toneladas de residuos textiles al ano. Tu contribucion a la moda circular marca la diferencia.",
  },
  {
    title: "Poliester",
    text: "El poliester, presente en el 60% de la ropa, tarda mas de 200 anos en descomponerse. Reutilizar es clave para reducir este impacto.",
  },
  {
    title: "Segunda mano",
    text: "Comprar ropa de segunda mano reduce la demanda de produccion nueva, ahorrando energia, agua y recursos naturales para las futuras generaciones.",
  },
]

interface InteractivePlantProps {
  points: number
}

export function InteractivePlant({ points }: InteractivePlantProps) {
  const [showTip, setShowTip] = useState(false)
  const [tipIndex, setTipIndex] = useState(0)

  const plantStage = useMemo(() => {
    if (points < 500) return 1
    if (points < 1500) return 2
    if (points < 3000) return 3
    if (points < 5000) return 4
    return 5
  }, [points])

  const handlePlantClick = useCallback(() => {
    setTipIndex((prev) => (prev + 1) % climateTips.length)
    setShowTip(true)
  }, [])

  const stageLabels = ["Semilla", "Brote", "Creciendo", "Floreciendo", "Maduro"]
  const stageColors = ["#8D6E63", "#8D6E63", "#4A7C59", "#4A7C59", "#1B5E20"]

  const stemHeight = 20 + plantStage * 15
  const leafSize = 8 + plantStage * 3

  return (
    <div className="relative flex flex-col items-center gap-3">
      {/* Plant button */}
      <button
        onClick={handlePlantClick}
        className="group relative cursor-pointer rounded-2xl p-4 transition-all duration-500 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label="Toca la planta para aprender sobre el cambio climatico"
      >
        {/* Soft glow */}
        <div
          className="absolute inset-0 rounded-2xl blur-3xl transition-opacity duration-700 group-hover:opacity-80"
          style={{
            background: `radial-gradient(circle, rgba(74,124,89,${0.08 + plantStage * 0.04}) 0%, transparent 70%)`,
            opacity: 0.6,
          }}
        />

        <svg
          width="200"
          height="240"
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-sm transition-all duration-700"
          role="img"
          aria-label={`Planta en etapa: ${stageLabels[plantStage - 1]}`}
        >
          {/* Ground/soil ellipse */}
          <ellipse cx="100" cy="195" rx="50" ry="8" fill="#5D4037" opacity="0.15" />

          {/* Pot */}
          <rect x="70" y="170" width="60" height="8" rx="4" fill="#8D6E63" />
          <path d="M75 178 L80 210 L120 210 L125 178 Z" fill="#8D6E63" opacity="0.85" />
          <path d="M80 210 L84 218 L116 218 L120 210 Z" fill="#795548" opacity="0.7" />
          <ellipse cx="100" cy="180" rx="24" ry="3" fill="#A1887F" opacity="0.3" />

          {/* Soil surface */}
          <ellipse cx="100" cy="175" rx="25" ry="4" fill="#4E342E" opacity="0.5" />

          {/* Main stem */}
          <path
            d={`M100 172 C100 172 ${98 + Math.sin(plantStage) * 2} ${172 - stemHeight * 0.5} ${97 + plantStage * 0.5} ${172 - stemHeight}`}
            stroke={stageColors[plantStage - 1]}
            strokeWidth={1.5 + plantStage * 0.3}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-1000"
          />

          {/* Leaf pairs - growing from bottom to top */}
          {/* Pair 1 - always visible */}
          <g className="transition-all duration-700" opacity={0.6 + plantStage * 0.08}>
            <path
              d={`M99 160 C99 160 ${99 + leafSize * 1.8} ${160 - leafSize * 0.5} ${99 + leafSize * 2.2} ${160 - leafSize * 1.2}
                 C${99 + leafSize * 1.5} ${160 - leafSize * 0.3} ${99 + leafSize * 0.4} 160 99 160 Z`}
              fill="#4A7C59"
            />
            <path
              d={`M99 157 C99 157 ${99 - leafSize * 1.6} ${157 - leafSize * 0.4} ${99 - leafSize * 2} ${157 - leafSize * 1}
                 C${99 - leafSize * 1.3} ${157 - leafSize * 0.2} ${99 - leafSize * 0.3} 157 99 157 Z`}
              fill="#4A7C59"
              opacity="0.85"
            />
          </g>

          {/* Pair 2 - from stage 2 */}
          {plantStage >= 2 && (
            <g className="animate-in fade-in duration-700" opacity={0.5 + plantStage * 0.1}>
              <path
                d={`M98 143 C98 143 ${98 + leafSize * 2} ${143 - leafSize * 0.6} ${98 + leafSize * 2.5} ${143 - leafSize * 1.4}
                   C${98 + leafSize * 1.7} ${143 - leafSize * 0.4} ${98 + leafSize * 0.5} 143 98 143 Z`}
                fill="#3D8B37"
              />
              <path
                d={`M98 140 C98 140 ${98 - leafSize * 1.8} ${140 - leafSize * 0.5} ${98 - leafSize * 2.3} ${140 - leafSize * 1.2}
                   C${98 - leafSize * 1.5} ${140 - leafSize * 0.3} ${98 - leafSize * 0.4} 140 98 140 Z`}
                fill="#3D8B37"
                opacity="0.85"
              />
            </g>
          )}

          {/* Pair 3 - from stage 3 */}
          {plantStage >= 3 && (
            <g className="animate-in fade-in duration-700" opacity={0.5 + plantStage * 0.1}>
              <path
                d={`M97 125 C97 125 ${97 + leafSize * 2.2} ${125 - leafSize * 0.7} ${97 + leafSize * 2.6} ${125 - leafSize * 1.5}
                   C${97 + leafSize * 1.8} ${125 - leafSize * 0.5} ${97 + leafSize * 0.5} 125 97 125 Z`}
                fill="#2E7D32"
              />
              <path
                d={`M97 122 C97 122 ${97 - leafSize * 2} ${122 - leafSize * 0.6} ${97 - leafSize * 2.4} ${122 - leafSize * 1.3}
                   C${97 - leafSize * 1.6} ${122 - leafSize * 0.4} ${97 - leafSize * 0.4} 122 97 122 Z`}
                fill="#2E7D32"
                opacity="0.85"
              />
            </g>
          )}

          {/* Pair 4 - from stage 4 */}
          {plantStage >= 4 && (
            <g className="animate-in fade-in duration-700" opacity={0.6 + plantStage * 0.08}>
              <path
                d={`M97 108 C97 108 ${97 + leafSize * 1.8} ${108 - leafSize * 0.5} ${97 + leafSize * 2.2} ${108 - leafSize * 1.2}
                   C${97 + leafSize * 1.4} ${108 - leafSize * 0.3} ${97 + leafSize * 0.4} 108 97 108 Z`}
                fill="#1B5E20"
              />
              <path
                d={`M97 105 C97 105 ${97 - leafSize * 1.6} ${105 - leafSize * 0.4} ${97 - leafSize * 2} ${105 - leafSize}
                   C${97 - leafSize * 1.2} ${105 - leafSize * 0.2} ${97 - leafSize * 0.3} 105 97 105 Z`}
                fill="#1B5E20"
                opacity="0.85"
              />
            </g>
          )}

          {/* Top crown / flower bud - stage 5 */}
          {plantStage >= 5 && (
            <g className="animate-in fade-in zoom-in duration-1000">
              <circle cx="97" cy="82" r="8" fill="#4A7C59" opacity="0.15" />
              <circle cx="97" cy="82" r="5" fill="#4A7C59" opacity="0.3" />
              <circle cx="97" cy="82" r="3" fill="#66BB6A" opacity="0.6" />
              <circle cx="97" cy="82" r="1.5" fill="#A5D6A7" />
            </g>
          )}

          {/* Ambient particles for mature plants */}
          {plantStage >= 4 && (
            <g className="animate-pulse" opacity="0.4">
              <circle cx="130" cy="120" r="1.5" fill="#4A7C59" />
              <circle cx="65" cy="105" r="1" fill="#4A7C59" />
              <circle cx="140" cy="95" r="1" fill="#66BB6A" />
              <circle cx="55" cy="135" r="0.8" fill="#4A7C59" />
            </g>
          )}
        </svg>

        {/* Pulse ring on hover */}
        <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-[#4A7C59]/0 transition-all duration-500 group-hover:border-[#4A7C59]/20" />
      </button>

      {/* Stage indicator */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: stageColors[plantStage - 1] }}>
          {stageLabels[plantStage - 1]}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((stage) => (
            <div
              key={stage}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: stage <= plantStage ? "20px" : "8px",
                backgroundColor: stage <= plantStage ? "#4A7C59" : "#E2DDD4",
              }}
            />
          ))}
        </div>
        <p className="text-center text-[11px] leading-relaxed text-muted-foreground">
          Toca la planta para un dato verde
        </p>
      </div>

      {/* Climate tip overlay */}
      {showTip && (
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-300 absolute -bottom-2 left-1/2 z-30 w-80 -translate-x-1/2 translate-y-full">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
            {/* Header bar */}
            <div className="flex items-center justify-between bg-[#4A7C59] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <Leaf className="h-3.5 w-3.5 text-white" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {climateTips[tipIndex].title}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowTip(false)
                }}
                className="rounded-full p-0.5 text-white/70 transition-colors hover:text-white"
                aria-label="Cerrar consejo"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            {/* Body */}
            <div className="p-4">
              <p className="text-sm leading-relaxed text-card-foreground">
                {climateTips[tipIndex].text}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">
                  {tipIndex + 1} / {climateTips.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setTipIndex((prev) => (prev + 1) % climateTips.length)
                  }}
                  className="text-xs font-medium text-[#4A7C59] transition-colors hover:underline"
                >
                  Siguiente dato
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
