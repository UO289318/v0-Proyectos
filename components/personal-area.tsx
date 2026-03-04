"use client"

import { Shield, Leaf, Trophy, Lightbulb, Sparkles, Tag } from "lucide-react"

interface PersonalAreaProps {
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

const allBenefits = [
  {
    id: "local-rankings",
    name: "Rankings Locales",
    description: "Participa en las clasificaciones de tu zona y compite con otros usuarios.",
    icon: Trophy,
    tiers: ["bronce", "plata", "oro", "platino"],
  },
  {
    id: "bronce-offers",
    name: "Ofertas Bronce",
    description: "Acceso a descuentos y promociones exclusivas para miembros Bronce.",
    icon: Tag,
    tiers: ["bronce", "plata", "oro", "platino"],
  },
  {
    id: "plata-offers",
    name: "Ofertas Plata",
    description: "Descuentos mejorados y acceso anticipado a ventas especiales.",
    icon: Tag,
    tiers: ["plata", "oro", "platino"],
  },
  {
    id: "priority-support",
    name: "Soporte Prioritario",
    description: "Atencion al cliente prioritaria con tiempos de respuesta reducidos.",
    icon: Sparkles,
    tiers: ["oro", "platino"],
  },
  {
    id: "exclusive-events",
    name: "Eventos Exclusivos",
    description: "Invitaciones a eventos privados y lanzamientos de colecciones.",
    icon: Sparkles,
    tiers: ["platino"],
  },
]

const ecoTips = [
  {
    id: "tip-1",
    title: "Lava en frio",
    description: "Lavar la ropa a 30C o menos reduce el consumo de energia hasta un 40%.",
  },
  {
    id: "tip-2",
    title: "Seca al aire",
    description: "Evita la secadora siempre que puedas. El sol es gratis y cuida tus prendas.",
  },
  {
    id: "tip-3",
    title: "Repara antes de tirar",
    description: "Un boton suelto o un pequeno roto no son motivo para desechar una prenda.",
  },
  {
    id: "tip-4",
    title: "Compra menos, mejor",
    description: "Invierte en prendas de calidad que duren mas tiempo en tu armario.",
  },
]

function getUserTier(points: number): string {
  if (points >= 150001) return "platino"
  if (points >= 25001) return "oro"
  if (points >= 10001) return "plata"
  return "bronce"
}

export function PersonalArea({ points }: PersonalAreaProps) {
  const userTier = getUserTier(points)
  const currentRank = ranks.find((r) => points >= r.min && points <= r.max) ?? ranks[0]
  const currentIdx = ranks.indexOf(currentRank)
  const nextRank = currentIdx < ranks.length - 1 ? ranks[currentIdx + 1] : null

  const progressPct = nextRank
    ? Math.min(100, Math.round(((points - currentRank.min) / (nextRank.min - currentRank.min)) * 100))
    : 100

  const activeBenefits = allBenefits.filter((b) => b.tiers.includes(userTier))
  const lockedBenefits = allBenefits.filter((b) => !b.tiers.includes(userTier))

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#1B3B6F]">
          Area Personal
        </p>
        <h2 className="font-serif text-2xl font-bold italic text-foreground">
          Tu perfil y beneficios
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Rank Card */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Tu Rango
            </span>
          </div>

          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-xl"
              style={{ background: currentRank.gradient }}
            >
              <Shield className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: currentRank.color }}>
                {currentRank.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {points.toLocaleString("es-ES")} litros ahorrados
              </p>
            </div>
          </div>

          {nextRank && (
            <div className="rounded-lg bg-secondary/50 p-3">
              <div className="mb-2 flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Progreso hacia {nextRank.name}</span>
                <span className="font-bold" style={{ color: currentRank.color }}>
                  {progressPct}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPct}%`, background: currentRank.gradient }}
                />
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">
                Faltan{" "}
                <span className="font-bold text-foreground">
                  {(nextRank.min - points).toLocaleString("es-ES")}
                </span>{" "}
                litros
              </p>
            </div>
          )}

          {/* Tier overview mini */}
          <div className="mt-4 flex gap-1">
            {ranks.map((rank, idx) => {
              const isActive = idx === currentIdx
              const isPast = idx < currentIdx
              return (
                <div
                  key={rank.name}
                  className="flex flex-1 flex-col items-center gap-1 rounded-lg py-2"
                  style={{
                    backgroundColor: isActive ? rank.bg : "transparent",
                    opacity: isPast || isActive ? 1 : 0.35,
                  }}
                >
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ background: isPast || isActive ? rank.gradient : "#E2DDD4" }}
                  >
                    <Shield className="h-3 w-3" style={{ color: isPast || isActive ? "white" : "#BDBDBD" }} />
                  </div>
                  <span
                    className="text-[8px] font-bold uppercase"
                    style={{ color: isPast || isActive ? rank.color : "#BDBDBD" }}
                  >
                    {rank.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits Card */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Tus Beneficios
            </span>
          </div>

          <div className="space-y-3">
            {activeBenefits.map((benefit) => (
              <div
                key={benefit.id}
                className="flex items-start gap-3 rounded-lg bg-[#4A7C59]/5 p-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4A7C59]/10">
                  <benefit.icon className="h-4 w-4 text-[#4A7C59]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{benefit.name}</h4>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            {lockedBenefits.length > 0 && (
              <div className="border-t border-border pt-3">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Beneficios bloqueados
                </p>
                {lockedBenefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="flex items-center gap-2 rounded-lg bg-secondary/30 p-2 opacity-50"
                  >
                    <benefit.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-[11px] text-muted-foreground">{benefit.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Eco Tips Card */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Leaf className="h-4 w-4 text-[#4A7C59]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A7C59]">
              Consejos Ecologicos
            </span>
          </div>

          <div className="space-y-3">
            {ecoTips.map((tip, idx) => (
              <div
                key={tip.id}
                className="group flex items-start gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-border hover:bg-secondary/30"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4A7C59]/10 text-[10px] font-bold text-[#4A7C59]">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{tip.title}</h4>
                  <p className="text-[11px] leading-relaxed text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#4A7C59]/8 px-3 py-2">
            <Lightbulb className="h-3.5 w-3.5 text-[#4A7C59]" />
            <p className="text-[10px] text-[#4A7C59]">
              Pequenos gestos hacen grandes cambios
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
