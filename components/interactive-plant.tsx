"use client"

import { useState, useMemo } from "react"
import { X } from "lucide-react"

const climateTips = [
  "La industria textil es responsable del 10% de las emisiones globales de CO2, mas que todos los vuelos internacionales y el transporte maritimo combinados.",
  "Se necesitan aproximadamente 2,700 litros de agua para fabricar una sola camiseta de algodon. Al reutilizar ropa, ahorras miles de litros.",
  "Cada segundo, el equivalente a un camion de basura lleno de textiles se quema o se deposita en un vertedero.",
  "Lavar ropa sintetica libera medio millon de toneladas de microfibras al oceano cada ano, equivalente a 50 mil millones de botellas de plastico.",
  "Extender la vida de la ropa solo 9 meses reduce su huella de carbono, agua y residuos entre un 20-30%.",
  "La moda rapida produce un 92 millones de toneladas de residuos textiles al ano. Tu contribucion a la moda circular marca la diferencia.",
  "El poliester, presente en el 60% de la ropa, tarda mas de 200 anos en descomponerse. Reutilizar es clave para reducir este impacto.",
  "Comprar ropa de segunda mano reduce la demanda de produccion nueva, ahorrando energia, agua y recursos naturales.",
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

  const handlePlantClick = () => {
    setTipIndex(Math.floor(Math.random() * climateTips.length))
    setShowTip(true)
  }

  const plantScale = 0.6 + plantStage * 0.1
  const leafOpacity = 0.4 + plantStage * 0.15
  const stemColor = plantStage >= 3 ? "#3D8B37" : "#4A7C59"
  const leafColor = plantStage >= 4 ? "#1B5E20" : "#1B3B6F"

  const stageLabels = [
    "Semilla",
    "Brote",
    "Creciendo",
    "Floreciendo",
    "Maduro",
  ]

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handlePlantClick}
        className="group relative cursor-pointer transition-transform duration-500 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
        aria-label="Toca la planta para aprender sobre el cambio climatico"
      >
        <div className="relative">
          {/* Glow effect behind plant */}
          <div
            className="absolute inset-0 rounded-full blur-2xl transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle, rgba(74,124,89,${0.1 + plantStage * 0.05}) 0%, transparent 70%)`,
            }}
          />

          <svg
            width="220"
            height="280"
            viewBox="0 0 120 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 drop-shadow-lg transition-all duration-700"
            style={{ transform: `scale(${plantScale})` }}
            role="img"
            aria-label={`Planta en etapa: ${stageLabels[plantStage - 1]}`}
          >
            {/* Pot */}
            <path
              d="M30 105 L38 130 L62 130 L70 105 Z"
              fill="#8D6E63"
              opacity="0.9"
            />
            <path
              d="M27 100 L73 100 L73 108 L27 108 Z"
              fill="#8D6E63"
              rx="2"
            />
            <ellipse cx="50" cy="103" rx="23" ry="4" fill="#A1887F" opacity="0.5" />

            {/* Soil */}
            <ellipse cx="50" cy="105" rx="20" ry="3" fill="#5D4037" opacity="0.6" />

            {/* Stem */}
            <path
              d="M50 100C50 100 53 75 48 30"
              stroke={stemColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              className="transition-all duration-700"
            />

            {/* Bottom leaf pair - always visible */}
            <path
              d="M51 88 C55 88 67 85 70 80 C67 80 55 77 52 83"
              fill={leafColor}
              opacity={leafOpacity}
              className="transition-all duration-700"
            />
            <path
              d="M49 85 C45 85 33 82 30 78 C33 78 45 75 48 80"
              fill={leafColor}
              opacity={leafOpacity}
              className="transition-all duration-700"
            />

            {/* Middle leaf pair - visible from stage 2 */}
            {plantStage >= 2 && (
              <>
                <path
                  d="M52 68 C56 68 68 65 71 60 C68 60 56 57 53 63"
                  fill={leafColor}
                  opacity={leafOpacity}
                  className="transition-all duration-700 animate-in fade-in"
                />
                <path
                  d="M48 65 C44 65 32 62 29 58 C32 58 44 55 47 60"
                  fill={leafColor}
                  opacity={leafOpacity}
                  className="transition-all duration-700 animate-in fade-in"
                />
              </>
            )}

            {/* Upper leaf pair - visible from stage 3 */}
            {plantStage >= 3 && (
              <>
                <path
                  d="M51 48 C55 48 67 45 70 40 C67 40 55 37 52 43"
                  fill={leafColor}
                  opacity={leafOpacity + 0.1}
                  className="transition-all duration-700 animate-in fade-in"
                />
                <path
                  d="M47 45 C43 45 31 42 28 38 C31 38 43 35 46 40"
                  fill={leafColor}
                  opacity={leafOpacity + 0.1}
                  className="transition-all duration-700 animate-in fade-in"
                />
              </>
            )}

            {/* Top leaf pair - visible from stage 4 */}
            {plantStage >= 4 && (
              <>
                <path
                  d="M50 32 C54 32 64 29 67 24 C64 24 54 21 51 27"
                  fill={leafColor}
                  opacity={leafOpacity + 0.1}
                  className="transition-all duration-700 animate-in fade-in"
                />
                <path
                  d="M46 29 C42 29 32 26 29 22 C32 22 42 19 45 24"
                  fill={leafColor}
                  opacity={leafOpacity + 0.1}
                  className="transition-all duration-700 animate-in fade-in"
                />
              </>
            )}

            {/* Flower/bud - visible at stage 5 */}
            {plantStage >= 5 && (
              <g className="animate-in fade-in zoom-in duration-700">
                <circle cx="47" cy="22" r="5" fill="#4A7C59" opacity="0.3" />
                <circle cx="47" cy="22" r="3" fill="#4A7C59" opacity="0.6" />
                <circle cx="47" cy="22" r="1.5" fill="#8D6E63" opacity="0.8" />
              </g>
            )}

            {/* Sparkle particles for high stages */}
            {plantStage >= 4 && (
              <g className="animate-pulse">
                <circle cx="72" cy="50" r="1" fill="#4A7C59" opacity="0.5" />
                <circle cx="26" cy="40" r="0.8" fill="#4A7C59" opacity="0.4" />
                <circle cx="68" cy="30" r="0.6" fill="#4A7C59" opacity="0.3" />
              </g>
            )}
          </svg>
        </div>

        {/* Hover hint */}
        <span className="mt-2 block text-center text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Toca para un consejo verde
        </span>
      </button>

      {/* Stage label */}
      <div className="mt-1 flex items-center gap-2">
        <span className="text-sm font-medium text-foreground">
          {stageLabels[plantStage - 1]}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((stage) => (
            <div
              key={stage}
              className="h-1.5 w-4 rounded-full transition-colors duration-500"
              style={{
                backgroundColor:
                  stage <= plantStage ? "#4A7C59" : "#E2DDD4",
              }}
            />
          ))}
        </div>
      </div>

      {/* Tip overlay */}
      {showTip && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 absolute -bottom-4 left-1/2 z-20 w-72 -translate-x-1/2 translate-y-full">
          <div className="rounded-xl border border-border bg-card p-4 shadow-xl">
            <div className="mb-2 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4A7C59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Dato verde
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowTip(false)
                }}
                className="rounded-full p-0.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Cerrar consejo"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-card-foreground">
              {climateTips[tipIndex]}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
