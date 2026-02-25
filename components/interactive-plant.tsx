"use client"

import { useState, useMemo, useCallback } from "react"
import { X, Leaf, ChevronRight, Lock, Sparkles } from "lucide-react"

const climateTips = [
  {
    title: "Huella hidrica textil",
    text: "La industria textil consume 79 mil millones de litros de agua al ano. Reutilizar una sola prenda ahorra entre 2,000 y 7,000 litros de agua limpia.",
  },
  {
    title: "Emisiones de CO2",
    text: "La industria de la moda es responsable del 10% de las emisiones globales de CO2, mas que todos los vuelos internacionales y el transporte maritimo combinados.",
  },
  {
    title: "Residuos textiles",
    text: "Cada segundo, el equivalente a un camion de basura lleno de textiles se quema o se deposita en un vertedero. El 85% de los textiles acaba en basureros.",
  },
  {
    title: "Microfibras plasticas",
    text: "Lavar ropa sintetica libera medio millon de toneladas de microfibras al oceano cada ano, contaminando ecosistemas marinos en todo el planeta.",
  },
  {
    title: "Extiende la vida",
    text: "Extender la vida de una prenda solo 9 meses reduce su huella de carbono, agua y residuos entre un 20 y 30%. Cada dia cuenta.",
  },
  {
    title: "Moda rapida",
    text: "La produccion de ropa se ha duplicado desde el ano 2000 y genera 92 millones de toneladas de residuos al ano. Tu eleccion marca la diferencia.",
  },
  {
    title: "Algodon y agua",
    text: "Un solo par de jeans necesita 7,000 litros de agua para producirse. Al intercambiar ropa, evitas que esos litros se desperdicien.",
  },
  {
    title: "Segunda mano, primer impacto",
    text: "Comprar ropa de segunda mano reduce la demanda de produccion nueva, ahorrando energia, agua y recursos naturales para las futuras generaciones.",
  },
]

interface PlantConfig {
  id: string
  name: string
  requiredRank: string
  locked: boolean
  special?: boolean
}

const availablePlants: PlantConfig[] = [
  { id: "succulent", name: "Suculenta", requiredRank: "Bronce", locked: false },
  { id: "fern", name: "Helecho", requiredRank: "Plata", locked: true },
  { id: "bonsai", name: "Bonsai", requiredRank: "Oro", locked: true },
  { id: "orchid", name: "Orquidea", requiredRank: "Platino", locked: true },
  { id: "sakura", name: "Sakura", requiredRank: "Evento", locked: true, special: true },
]

interface InteractivePlantProps {
  points: number
}

export function InteractivePlant({ points }: InteractivePlantProps) {
  const [showTip, setShowTip] = useState(false)
  const [tipIndex, setTipIndex] = useState(0)
  const [selectedPlantIdx, setSelectedPlantIdx] = useState(0)
  const [showPlantSelector, setShowPlantSelector] = useState(false)

  // Determine which plants are unlocked based on points/rank
  const unlockedPlants = useMemo(() => {
    return availablePlants.map((p) => {
      if (p.special) return { ...p, locked: true }
      if (p.requiredRank === "Bronce") return { ...p, locked: false }
      if (p.requiredRank === "Plata" && points > 10000) return { ...p, locked: false }
      if (p.requiredRank === "Oro" && points > 25000) return { ...p, locked: false }
      if (p.requiredRank === "Platino" && points > 150000) return { ...p, locked: false }
      return p
    })
  }, [points])

  const plantStage = useMemo(() => {
    if (points < 500) return 1
    if (points < 2000) return 2
    if (points < 5000) return 3
    if (points < 10000) return 4
    return 5
  }, [points])

  const handlePlantClick = useCallback(() => {
    if (!showTip) {
      setTipIndex(Math.floor(Math.random() * climateTips.length))
    } else {
      setTipIndex((prev) => (prev + 1) % climateTips.length)
    }
    setShowTip(true)
  }, [showTip])

  const stageLabels = ["Semilla", "Brote", "Creciendo", "Floreciendo", "Maduro"]

  const leafOpacity = 0.4 + plantStage * 0.12
  const stemGreen = plantStage >= 3 ? "#2E7D32" : "#4A7C59"
  const leafGreen = plantStage >= 4 ? "#1B5E20" : plantStage >= 3 ? "#2E7D32" : "#4A7C59"

  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Plant selector toggle */}
      <button
        onClick={() => setShowPlantSelector(!showPlantSelector)}
        className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-foreground transition-all hover:shadow-sm"
      >
        <Leaf className="h-3 w-3 text-[#4A7C59]" />
        {unlockedPlants[selectedPlantIdx].name}
        <ChevronRight className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${showPlantSelector ? "rotate-90" : ""}`} />
      </button>

      {/* Plant selector dropdown */}
      {showPlantSelector && (
        <div className="animate-in fade-in slide-in-from-top-1 duration-200 absolute top-10 z-40 w-56 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Tus plantas
          </div>
          {unlockedPlants.map((plant, idx) => (
            <button
              key={plant.id}
              disabled={plant.locked}
              onClick={() => {
                if (!plant.locked) {
                  setSelectedPlantIdx(idx)
                  setShowPlantSelector(false)
                }
              }}
              className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors ${
                plant.locked
                  ? "cursor-not-allowed opacity-50"
                  : idx === selectedPlantIdx
                    ? "bg-[#4A7C59]/8 font-semibold text-[#4A7C59]"
                    : "text-card-foreground hover:bg-secondary"
              }`}
            >
              {plant.locked ? (
                <Lock className="h-3.5 w-3.5 text-muted-foreground" />
              ) : (
                <Leaf className="h-3.5 w-3.5 text-[#4A7C59]" />
              )}
              <span className="flex-1">{plant.name}</span>
              {plant.special && (
                <span className="flex items-center gap-0.5 rounded-full bg-[#C8A951]/15 px-1.5 py-0.5 text-[9px] font-bold text-[#C8A951]">
                  <Sparkles className="h-2.5 w-2.5" />
                  Evento
                </span>
              )}
              {plant.locked && !plant.special && (
                <span className="text-[9px] text-muted-foreground">{plant.requiredRank}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Plant SVG */}
      <button
        onClick={handlePlantClick}
        className="group relative cursor-pointer rounded-2xl p-2 transition-all duration-500 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7C59] focus-visible:ring-offset-2"
        aria-label="Toca la planta para aprender sobre el cambio climatico"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-700 group-hover:opacity-90"
          style={{
            background: `radial-gradient(circle at 50% 70%, rgba(74,124,89,${0.06 + plantStage * 0.03}) 0%, transparent 65%)`,
            opacity: 0.7,
          }}
        />

        <svg
          width="180"
          height="220"
          viewBox="0 0 200 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 drop-shadow-sm transition-all duration-700"
          role="img"
          aria-label={`Planta en etapa: ${stageLabels[plantStage - 1]}`}
        >
          {/* Pot */}
          <rect x="70" y="172" width="60" height="7" rx="3.5" fill="#8D6E63" />
          <path d="M76 179 L80 212 L120 212 L124 179 Z" fill="#8D6E63" opacity="0.85" />
          <path d="M80 212 L83 220 L117 220 L120 212 Z" fill="#795548" opacity="0.65" />
          <ellipse cx="100" cy="176" rx="23" ry="3" fill="#A1887F" opacity="0.2" />

          {/* Soil */}
          <ellipse cx="100" cy="176" rx="22" ry="4" fill="#4E342E" opacity="0.4" />

          {/* Main stem */}
          <path
            d={`M100 174 Q${99 + plantStage * 0.3} ${174 - plantStage * 8} ${98 + plantStage * 0.4} ${174 - 18 - plantStage * 14}`}
            stroke={stemGreen}
            strokeWidth={1.4 + plantStage * 0.25}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-1000"
          />

          {/* Leaf pair 1 - always */}
          <g opacity={leafOpacity} className="transition-all duration-700">
            <ellipse cx="115" cy="160" rx={6 + plantStage * 2} ry={3 + plantStage * 0.8} fill={leafGreen} transform="rotate(-20 115 160)" />
            <ellipse cx="84" cy="158" rx={5 + plantStage * 1.8} ry={2.5 + plantStage * 0.7} fill={leafGreen} opacity="0.85" transform="rotate(25 84 158)" />
          </g>

          {/* Leaf pair 2 */}
          {plantStage >= 2 && (
            <g opacity={leafOpacity} className="transition-all duration-700">
              <ellipse cx="118" cy="143" rx={7 + plantStage * 1.5} ry={3.5 + plantStage * 0.6} fill="#3D8B37" transform="rotate(-30 118 143)" />
              <ellipse cx="81" cy="140" rx={6 + plantStage * 1.3} ry={3 + plantStage * 0.5} fill="#3D8B37" opacity="0.85" transform="rotate(35 81 140)" />
            </g>
          )}

          {/* Leaf pair 3 */}
          {plantStage >= 3 && (
            <g opacity={leafOpacity + 0.05} className="transition-all duration-700">
              <ellipse cx="116" cy="124" rx={8 + plantStage} ry={4 + plantStage * 0.5} fill="#2E7D32" transform="rotate(-25 116 124)" />
              <ellipse cx="83" cy="121" rx={7 + plantStage * 0.8} ry={3.5 + plantStage * 0.4} fill="#2E7D32" opacity="0.85" transform="rotate(30 83 121)" />
            </g>
          )}

          {/* Top leaves */}
          {plantStage >= 4 && (
            <g opacity={leafOpacity + 0.1} className="transition-all duration-700">
              <ellipse cx="112" cy="106" rx={7 + plantStage * 0.8} ry={3.5 + plantStage * 0.4} fill="#1B5E20" transform="rotate(-35 112 106)" />
              <ellipse cx="87" cy="104" rx={6 + plantStage * 0.6} ry={3 + plantStage * 0.3} fill="#1B5E20" opacity="0.85" transform="rotate(40 87 104)" />
            </g>
          )}

          {/* Crown / flower */}
          {plantStage >= 5 && (
            <g className="animate-in fade-in zoom-in duration-1000">
              <circle cx="98" cy="88" r="6" fill="#4A7C59" opacity="0.12" />
              <circle cx="98" cy="88" r="4" fill="#66BB6A" opacity="0.25" />
              <circle cx="98" cy="88" r="2" fill="#A5D6A7" opacity="0.6" />
              {/* Floating particles */}
              <circle cx="80" cy="95" r="1.2" fill="#4A7C59" opacity="0.3" className="animate-pulse" />
              <circle cx="120" cy="100" r="1" fill="#66BB6A" opacity="0.25" className="animate-pulse" />
              <circle cx="75" cy="115" r="0.8" fill="#4A7C59" opacity="0.2" className="animate-pulse" />
            </g>
          )}
        </svg>

        <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-[#4A7C59]/0 transition-all duration-300 group-hover:border-[#4A7C59]/15" />
      </button>

      {/* Stage progress */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#4A7C59]">
          {stageLabels[plantStage - 1]}
        </span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className="h-1 rounded-full transition-all duration-500"
              style={{
                width: s <= plantStage ? "16px" : "6px",
                backgroundColor: s <= plantStage ? "#4A7C59" : "#E2DDD4",
              }}
            />
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground">
          Toca para un dato sobre el clima
        </p>
      </div>

      {/* Climate tip overlay */}
      {showTip && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 absolute -bottom-3 left-1/2 z-50 w-72 -translate-x-1/2 translate-y-full sm:w-80">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
            <div className="flex items-center justify-between bg-[#4A7C59] px-4 py-2">
              <div className="flex items-center gap-2">
                <Leaf className="h-3.5 w-3.5 text-white" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                  {climateTips[tipIndex].title}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowTip(false)
                }}
                className="rounded-full p-0.5 text-white/60 transition-colors hover:text-white"
                aria-label="Cerrar"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-[13px] leading-relaxed text-card-foreground">
                {climateTips[tipIndex].text}
              </p>
              <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5">
                <span className="text-[10px] text-muted-foreground">
                  {tipIndex + 1} de {climateTips.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setTipIndex((prev) => (prev + 1) % climateTips.length)
                  }}
                  className="flex items-center gap-1 text-xs font-semibold text-[#4A7C59] transition-colors hover:underline"
                >
                  Siguiente
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
