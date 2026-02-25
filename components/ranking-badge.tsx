"use client"

import { useMemo } from "react"
import { Shield, ChevronUp } from "lucide-react"

interface RankingBadgeProps {
  points: number
}

const ranks = [
  {
    name: "Bronce",
    min: 1,
    max: 10000,
    color: "#A0522D",
    bg: "rgba(160,82,45,0.08)",
    border: "rgba(160,82,45,0.20)",
    gradient: "linear-gradient(135deg, #A0522D 0%, #CD853F 100%)",
  },
  {
    name: "Plata",
    min: 10001,
    max: 25000,
    color: "#6B7D8D",
    bg: "rgba(107,125,141,0.08)",
    border: "rgba(107,125,141,0.20)",
    gradient: "linear-gradient(135deg, #6B7D8D 0%, #A8B8C8 100%)",
  },
  {
    name: "Oro",
    min: 25001,
    max: 150000,
    color: "#B8941F",
    bg: "rgba(184,148,31,0.08)",
    border: "rgba(184,148,31,0.20)",
    gradient: "linear-gradient(135deg, #B8941F 0%, #D4B846 100%)",
  },
  {
    name: "Platino",
    min: 150001,
    max: Infinity,
    color: "#4A6670",
    bg: "rgba(74,102,112,0.08)",
    border: "rgba(74,102,112,0.20)",
    gradient: "linear-gradient(135deg, #4A6670 0%, #7BA0AD 100%)",
  },
]

export function RankingBadge({ points }: RankingBadgeProps) {
  const currentRank = useMemo(
    () => ranks.find((r) => points >= r.min && points <= r.max) ?? ranks[0],
    [points]
  )

  const currentIdx = ranks.indexOf(currentRank)

  const nextRank = useMemo(
    () => (currentIdx < ranks.length - 1 ? ranks[currentIdx + 1] : null),
    [currentIdx]
  )

  const progressPct = useMemo(() => {
    if (!nextRank) return 100
    const rangeSize = nextRank.min - currentRank.min
    const progress = points - currentRank.min
    return Math.min(100, Math.round((progress / rangeSize) * 100))
  }, [points, currentRank, nextRank])

  return (
    <div className="w-full">
      {/* Active rank + progress */}
      <div className="flex items-center gap-3">
        {/* Badge */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2"
          style={{
            background: currentRank.bg,
            border: `1.5px solid ${currentRank.border}`,
          }}
        >
          <Shield className="h-4 w-4" style={{ color: currentRank.color }} />
          <span className="text-sm font-bold" style={{ color: currentRank.color }}>
            {currentRank.name}
          </span>
        </div>

        {/* Progress to next */}
        {nextRank && (
          <div className="flex-1 min-w-0">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">
                Siguiente:{" "}
                <span className="font-bold" style={{ color: nextRank.color }}>
                  {nextRank.name}
                </span>
              </span>
              <span className="text-[11px] font-bold" style={{ color: currentRank.color }}>
                {progressPct}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPct}%`, background: currentRank.gradient }}
              />
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Faltan{" "}
              <span className="font-bold text-foreground">
                {(nextRank.min - points).toLocaleString("es-ES")}
              </span>{" "}
              litros para {nextRank.name}
            </p>
          </div>
        )}

        {!nextRank && (
          <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: currentRank.color }}>
            <ChevronUp className="h-3.5 w-3.5" />
            Rango maximo alcanzado
          </div>
        )}
      </div>

      {/* Tier overview */}
      <div className="mt-4 flex gap-0.5">
        {ranks.map((rank, idx) => {
          const isActive = idx === currentIdx
          const isPast = idx < currentIdx
          return (
            <div
              key={rank.name}
              className="relative flex flex-1 flex-col items-center gap-1 rounded-lg py-2.5 transition-all duration-300"
              style={{
                backgroundColor: isActive ? rank.bg : "transparent",
                opacity: isPast || isActive ? 1 : 0.3,
              }}
            >
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{
                  background: isPast || isActive ? rank.gradient : "#E2DDD4",
                }}
              >
                <Shield
                  className="h-3.5 w-3.5"
                  style={{ color: isPast || isActive ? "white" : "#BDBDBD" }}
                />
              </div>
              <span
                className="text-[9px] font-bold uppercase tracking-wider"
                style={{ color: isPast || isActive ? rank.color : "#BDBDBD" }}
              >
                {rank.name}
              </span>
              <span className="text-[8px] text-muted-foreground">
                {rank.max === Infinity
                  ? `${(rank.min - 1).toLocaleString("es-ES")}+`
                  : `${rank.min.toLocaleString("es-ES")}`}
              </span>
              {isActive && (
                <div
                  className="absolute -top-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full"
                  style={{ background: rank.gradient }}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
