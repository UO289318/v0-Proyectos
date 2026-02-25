"use client"

import { useMemo } from "react"

interface RankingBadgeProps {
  points: number
}

const ranks = [
  {
    name: "Silver",
    min: 0,
    max: 1999,
    color: "#A8B2BD",
    bgColor: "rgba(168,178,189,0.12)",
    borderColor: "rgba(168,178,189,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A8B2BD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "Gold",
    min: 2000,
    max: 4999,
    color: "#C8A951",
    bgColor: "rgba(200,169,81,0.12)",
    borderColor: "rgba(200,169,81,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A951" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    name: "Platinum",
    min: 5000,
    max: Infinity,
    color: "#5C7C8A",
    bgColor: "rgba(92,124,138,0.12)",
    borderColor: "rgba(92,124,138,0.3)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#5C7C8A" stroke="#5C7C8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export function RankingBadge({ points }: RankingBadgeProps) {
  const currentRank = useMemo(
    () => ranks.find((r) => points >= r.min && points <= r.max) ?? ranks[0],
    [points]
  )

  const nextRank = useMemo(() => {
    const idx = ranks.indexOf(currentRank)
    return idx < ranks.length - 1 ? ranks[idx + 1] : null
  }, [currentRank])

  const progressToNext = useMemo(() => {
    if (!nextRank) return 100
    const rangeSize = nextRank.min - currentRank.min
    const progress = points - currentRank.min
    return Math.min(100, Math.round((progress / rangeSize) * 100))
  }, [points, currentRank, nextRank])

  return (
    <div className="w-full">
      {/* Current rank badge */}
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-bold"
        style={{
          backgroundColor: currentRank.bgColor,
          border: `1px solid ${currentRank.borderColor}`,
          color: currentRank.color,
        }}
      >
        {currentRank.icon}
        <span>{currentRank.name}</span>
      </div>

      {/* Progress to next rank */}
      {nextRank && (
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              Progreso a {nextRank.name}
            </span>
            <span className="font-medium text-foreground">
              {progressToNext}%
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${progressToNext}%`,
                backgroundColor: nextRank.color,
              }}
            />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Te faltan{" "}
            <span className="font-bold text-foreground">
              {(nextRank.min - points).toLocaleString("es-ES")}
            </span>{" "}
            litros para {nextRank.name}
          </p>
        </div>
      )}

      {/* All ranks */}
      <div className="mt-5 flex items-center justify-between gap-2">
        {ranks.map((rank) => {
          const isActive = rank.name === currentRank.name
          return (
            <div
              key={rank.name}
              className="flex flex-1 flex-col items-center gap-1 rounded-lg p-2 transition-all"
              style={{
                backgroundColor: isActive ? rank.bgColor : "transparent",
                opacity: isActive ? 1 : 0.5,
              }}
            >
              {rank.icon}
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: rank.color }}
              >
                {rank.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {rank.min === 0 ? "0" : rank.min.toLocaleString("es-ES")}
                {rank.max === Infinity ? "+" : ` - ${rank.max.toLocaleString("es-ES")}`}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
