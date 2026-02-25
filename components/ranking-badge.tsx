"use client"

import { useMemo } from "react"

interface RankingBadgeProps {
  points: number
}

const ranks = [
  {
    name: "Invitado",
    label: "Usuario Invitado",
    min: 0,
    max: 499,
    color: "#9E9E9E",
    bgColor: "rgba(158,158,158,0.10)",
    borderColor: "rgba(158,158,158,0.25)",
  },
  {
    name: "Bronce",
    label: "Bronce",
    min: 500,
    max: 1499,
    color: "#A0522D",
    bgColor: "rgba(160,82,45,0.10)",
    borderColor: "rgba(160,82,45,0.25)",
  },
  {
    name: "Plata",
    label: "Plata",
    min: 1500,
    max: 2999,
    color: "#8D99A6",
    bgColor: "rgba(141,153,166,0.10)",
    borderColor: "rgba(141,153,166,0.25)",
  },
  {
    name: "Oro",
    label: "Oro",
    min: 3000,
    max: 4999,
    color: "#C8A951",
    bgColor: "rgba(200,169,81,0.12)",
    borderColor: "rgba(200,169,81,0.30)",
  },
  {
    name: "Platinum",
    label: "Platinum",
    min: 5000,
    max: Infinity,
    color: "#5C7C8A",
    bgColor: "rgba(92,124,138,0.10)",
    borderColor: "rgba(92,124,138,0.25)",
  },
]

function ShieldIcon({ color, filled }: { color: string; filled: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? color : "none"}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      {filled && (
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
      )}
    </svg>
  )
}

export function RankingBadge({ points }: RankingBadgeProps) {
  const currentRank = useMemo(
    () => ranks.find((r) => points >= r.min && points <= r.max) ?? ranks[0],
    [points]
  )

  const currentIdx = ranks.indexOf(currentRank)

  const nextRank = useMemo(() => {
    return currentIdx < ranks.length - 1 ? ranks[currentIdx + 1] : null
  }, [currentIdx])

  const progressToNext = useMemo(() => {
    if (!nextRank) return 100
    const rangeSize = nextRank.min - currentRank.min
    const progress = points - currentRank.min
    return Math.min(100, Math.round((progress / rangeSize) * 100))
  }, [points, currentRank, nextRank])

  return (
    <div className="w-full">
      {/* Current rank badge + progress */}
      <div className="flex items-center gap-3">
        <div
          className="flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold"
          style={{
            backgroundColor: currentRank.bgColor,
            border: `1.5px solid ${currentRank.borderColor}`,
            color: currentRank.color,
          }}
        >
          <ShieldIcon color={currentRank.color} filled={currentIdx >= 2} />
          <span>{currentRank.label}</span>
        </div>

        {nextRank && (
          <div className="flex-1">
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">
                Siguiente: <span className="font-bold" style={{ color: nextRank.color }}>{nextRank.name}</span>
              </span>
              <span className="font-bold" style={{ color: currentRank.color }}>
                {progressToNext}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${progressToNext}%`,
                  backgroundColor: nextRank.color,
                }}
              />
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Te faltan{" "}
              <span className="font-bold text-foreground">
                {(nextRank.min - points).toLocaleString("es-ES")}
              </span>{" "}
              litros para {nextRank.name}
            </p>
          </div>
        )}
      </div>

      {/* All ranks overview */}
      <div className="mt-5 flex items-stretch gap-1">
        {ranks.map((rank, idx) => {
          const isActive = rank.name === currentRank.name
          const isPast = idx < currentIdx
          return (
            <div
              key={rank.name}
              className="flex flex-1 flex-col items-center gap-1 rounded-lg px-1 py-2.5 transition-all duration-300"
              style={{
                backgroundColor: isActive ? rank.bgColor : "transparent",
                opacity: isPast || isActive ? 1 : 0.35,
              }}
            >
              <ShieldIcon
                color={isPast || isActive ? rank.color : "#C0C0C0"}
                filled={isPast}
              />
              <span
                className="text-center text-[9px] font-bold uppercase leading-tight tracking-wider"
                style={{ color: isPast || isActive ? rank.color : "#C0C0C0" }}
              >
                {rank.name}
              </span>
              <span className="text-center text-[8px] leading-tight text-muted-foreground">
                {rank.max === Infinity
                  ? `${rank.min.toLocaleString("es-ES")}+`
                  : `${rank.min.toLocaleString("es-ES")}`}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
