"use client"

import { Award, Leaf, Shirt, Users, Sparkles, Lock, Recycle } from "lucide-react"

interface Badge {
  id: string
  name: string
  description: string
  icon: typeof Award
  color: string
  bg: string
  earned: boolean
  date?: string
  type: "feat" | "event"
}

const userBadges: Badge[] = [
  {
    id: "first-trade",
    name: "Primer Intercambio",
    description: "Completa tu primer intercambio de ropa",
    icon: Shirt,
    color: "#4A7C59",
    bg: "rgba(74,124,89,0.10)",
    earned: true,
    date: "12 Ene 2026",
    type: "feat",
  },
  {
    id: "eco-warrior",
    name: "Eco Guerrero",
    description: "Ahorra 1,000 litros de agua",
    icon: Leaf,
    color: "#2E7D32",
    bg: "rgba(46,125,50,0.10)",
    earned: true,
    date: "28 Ene 2026",
    type: "feat",
  },
  {
    id: "community",
    name: "Comunidad",
    description: "Intercambia con 5 usuarios diferentes",
    icon: Users,
    color: "#1B3B6F",
    bg: "rgba(27,59,111,0.10)",
    earned: true,
    date: "15 Feb 2026",
    type: "feat",
  },
  {
    id: "circular",
    name: "Moda Circular",
    description: "Intercambia 10 prendas en total",
    icon: Recycle,
    color: "#8D6E63",
    bg: "rgba(141,110,99,0.10)",
    earned: false,
    type: "feat",
  },
  {
    id: "earth-day",
    name: "Dia de la Tierra",
    description: "Participaste en el evento del Dia de la Tierra 2026",
    icon: Sparkles,
    color: "#C8A951",
    bg: "rgba(200,169,81,0.12)",
    earned: true,
    date: "22 Abr 2026",
    type: "event",
  },
  {
    id: "summer-swap",
    name: "Summer Swap",
    description: "Evento de intercambio de verano (proximamente)",
    icon: Sparkles,
    color: "#C8A951",
    bg: "rgba(200,169,81,0.12)",
    earned: false,
    type: "event",
  },
]

export function BadgesSection() {
  const earnedCount = userBadges.filter((b) => b.earned).length

  return (
    <section className="w-full">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C8A951]">
            Logros
          </p>
          <h2 className="font-serif text-2xl font-bold italic text-foreground">
            Tus insignias
          </h2>
        </div>
        <span className="text-xs text-muted-foreground">
          <span className="font-bold text-foreground">{earnedCount}</span> de {userBadges.length} obtenidas
        </span>
      </div>

      {/* AQUÍ ESTÁ EL CAMBIO: sm: y md: cambian a @sm: y @md: */}
      <div className="grid grid-cols-2 gap-3 @sm:grid-cols-3 @md:grid-cols-6">
        {userBadges.map((badge) => (
          <div
            key={badge.id}
            className={`group relative flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all duration-300 ${
              badge.earned
                ? "border-border bg-card hover:shadow-md hover:-translate-y-0.5"
                : "border-dashed border-border/60 bg-secondary/30 opacity-60"
            }`}
          >
            {badge.type === "event" && (
              <span className="absolute -top-1.5 right-2 rounded-full bg-[#C8A951]/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#C8A951]">
                Evento
              </span>
            )}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundColor: badge.earned ? badge.bg : "rgba(200,200,200,0.15)",
              }}
            >
              {badge.earned ? (
                <badge.icon className="h-5 w-5" style={{ color: badge.color }} />
              ) : (
                <Lock className="h-4 w-4 text-muted-foreground/50" />
              )}
            </div>
            <span
              className="text-[11px] font-bold leading-tight"
              style={{ color: badge.earned ? badge.color : "var(--muted-foreground)" }}
            >
              {badge.name}
            </span>
            <p className="text-[9px] leading-snug text-muted-foreground">
              {badge.description}
            </p>
            {badge.earned && badge.date && (
              <span className="text-[8px] text-muted-foreground/70">{badge.date}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}