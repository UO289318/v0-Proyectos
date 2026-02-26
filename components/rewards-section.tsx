"use client"

import { useState, useMemo } from "react"
import { Gift, Truck, Percent, Wallet, Lock, Check, ShoppingBag } from "lucide-react"

interface Reward {
  id: string
  name: string
  description: string
  cost: number
  icon: typeof Gift
  category: "voucher" | "discount"
  tierRequired: "bronce" | "plata" | "oro" | "platino"
  tag?: string
}

const rewards: Reward[] = [
  // Monetary vouchers
  {
    id: "vale-5",
    name: "Vale de 5 \u20AC",
    description: "Saldo directo que se resta del total de tu carrito de compra.",
    cost: 5000,
    icon: Wallet,
    category: "voucher",
    tierRequired: "bronce",
    tag: "Popular",
  },
  {
    id: "vale-10",
    name: "Vale de 10 \u20AC",
    description: "Saldo directo aplicable al total de tu carrito de compra.",
    cost: 10000,
    icon: Wallet,
    category: "voucher",
    tierRequired: "bronce",
  },
  {
    id: "vale-20",
    name: "Vale de 20 \u20AC",
    description: "Saldo directo con ventaja para ahorradores de puntos.",
    cost: 19000,
    icon: Wallet,
    category: "voucher",
    tierRequired: "plata",
    tag: "Plata+",
  },
  {
    id: "vale-50",
    name: "Vale de 50 \u20AC",
    description: "Gran recompensa para los miembros mas comprometidos.",
    cost: 45000,
    icon: Wallet,
    category: "voucher",
    tierRequired: "oro",
    tag: "Exclusivo",
  },
  // Discount coupons
  {
    id: "envio-gratis",
    name: "Envio Gratuito",
    description: "Envio gratis en tu proximo pedido, sin importe minimo.",
    cost: 3500,
    icon: Truck,
    category: "discount",
    tierRequired: "bronce",
  },
  {
    id: "descuento-10",
    name: "10% Descuento",
    description: "Cupon aplicable sobre el total de tu proxima compra.",
    cost: 8000,
    icon: Percent,
    category: "discount",
    tierRequired: "bronce",
  },
  {
    id: "descuento-15",
    name: "15% Descuento",
    description: "Cupon de descuento intermedio para miembros Plata y superior.",
    cost: 15000,
    icon: Percent,
    category: "discount",
    tierRequired: "plata",
    tag: "Plata+",
  },
  {
    id: "descuento-25",
    name: "25% Descuento",
    description: "El maximo descuento, exclusivo para miembros Oro y Platino.",
    cost: 30000,
    icon: Percent,
    category: "discount",
    tierRequired: "oro",
    tag: "Exclusivo",
  },
]

const tierOrder = ["bronce", "plata", "oro", "platino"] as const
const tierColors: Record<string, { color: string; bg: string; border: string }> = {
  bronce: { color: "#A0522D", bg: "rgba(160,82,45,0.08)", border: "rgba(160,82,45,0.20)" },
  plata: { color: "#6B7D8D", bg: "rgba(107,125,141,0.08)", border: "rgba(107,125,141,0.20)" },
  oro: { color: "#B8941F", bg: "rgba(184,148,31,0.08)", border: "rgba(184,148,31,0.20)" },
  platino: { color: "#4A6670", bg: "rgba(74,102,112,0.08)", border: "rgba(74,102,112,0.20)" },
}

const tierLabels: Record<string, string> = {
  bronce: "Bronce",
  plata: "Plata",
  oro: "Oro",
  platino: "Platino",
}

type FilterCategory = "all" | "voucher" | "discount"

interface RewardsSectionProps {
  points: number
}

function getUserTier(points: number): string {
  if (points >= 150001) return "platino"
  if (points >= 25001) return "oro"
  if (points >= 10001) return "plata"
  return "bronce"
}

export function RewardsSection({ points }: RewardsSectionProps) {
  const [filter, setFilter] = useState<FilterCategory>("all")
  const [redeemedIds, setRedeemedIds] = useState<Set<string>>(new Set())

  const userTier = getUserTier(points)
  const userTierIdx = tierOrder.indexOf(userTier as (typeof tierOrder)[number])

  const filteredRewards = useMemo(() => {
    if (filter === "all") return rewards
    return rewards.filter((r) => r.category === filter)
  }, [filter])

  const canAfford = (cost: number) => points >= cost
  const meetsRequiredTier = (tier: string) => {
    const requiredIdx = tierOrder.indexOf(tier as (typeof tierOrder)[number])
    return userTierIdx >= requiredIdx
  }

  const handleRedeem = (reward: Reward) => {
    if (!canAfford(reward.cost) || !meetsRequiredTier(reward.tierRequired)) return
    setRedeemedIds((prev) => new Set(prev).add(reward.id))
  }

  const filters: { value: FilterCategory; label: string; icon: typeof Gift }[] = [
    { value: "all", label: "Todas", icon: Gift },
    { value: "voucher", label: "Vales", icon: Wallet },
    { value: "discount", label: "Descuentos", icon: Percent },
  ]

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A7C59]">
            Recompensas
          </p>
          <h2 className="font-serif text-2xl font-bold italic text-foreground">
            Canjea tus puntos
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Usa los puntos que has acumulado para obtener descuentos y vales.
          </p>
        </div>

        {/* Points balance pill */}
        <div className="flex items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 shadow-sm sm:self-auto">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4A7C59]/10">
            <ShoppingBag className="h-3.5 w-3.5 text-[#4A7C59]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
              Tu saldo
            </span>
            <span className="text-sm font-bold tabular-nums text-foreground">
              {points.toLocaleString("es-ES")} pts
            </span>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="mb-6 flex gap-1.5">
        {filters.map((f) => {
          const isActive = filter === f.value
          return (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              <f.icon className="h-3 w-3" />
              {f.label}
            </button>
          )
        })}
      </div>

      {/* Rewards grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {filteredRewards.map((reward) => {
          const affordable = canAfford(reward.cost)
          const tierMet = meetsRequiredTier(reward.tierRequired)
          const unlocked = affordable && tierMet
          const isRedeemed = redeemedIds.has(reward.id)
          const tierStyle = tierColors[reward.tierRequired]

          return (
            <div
              key={reward.id}
              className={`group relative flex flex-col rounded-xl border p-5 transition-all duration-300 ${
                isRedeemed
                  ? "border-[#4A7C59]/30 bg-[#4A7C59]/5"
                  : unlocked
                    ? "border-border bg-card hover:shadow-md hover:-translate-y-0.5"
                    : "border-dashed border-border/60 bg-secondary/20"
              }`}
            >
              {/* Tag */}
              {reward.tag && !isRedeemed && (
                <span
                  className="absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: tierStyle.bg,
                    color: tierStyle.color,
                    border: `1px solid ${tierStyle.border}`,
                  }}
                >
                  {reward.tag}
                </span>
              )}

              {/* Icon + category */}
              <div className="mb-3 flex items-start justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 ${
                    unlocked && !isRedeemed ? "group-hover:scale-110" : ""
                  }`}
                  style={{
                    backgroundColor: isRedeemed
                      ? "rgba(74,124,89,0.12)"
                      : unlocked
                        ? reward.category === "voucher"
                          ? "rgba(27,59,111,0.08)"
                          : "rgba(74,124,89,0.08)"
                        : "rgba(200,200,200,0.12)",
                  }}
                >
                  {isRedeemed ? (
                    <Check className="h-5 w-5 text-[#4A7C59]" />
                  ) : !tierMet ? (
                    <Lock className="h-4 w-4 text-muted-foreground/50" />
                  ) : (
                    <reward.icon
                      className="h-5 w-5"
                      style={{
                        color: unlocked
                          ? reward.category === "voucher"
                            ? "#1B3B6F"
                            : "#4A7C59"
                          : "var(--muted-foreground)",
                        opacity: unlocked ? 1 : 0.4,
                      }}
                    />
                  )}
                </div>

                {/* Tier badge - only show if tier > bronce */}
                {reward.tierRequired !== "bronce" && !isRedeemed && (
                  <span
                    className="rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: tierStyle.bg,
                      color: tierStyle.color,
                    }}
                  >
                    {tierLabels[reward.tierRequired]}+
                  </span>
                )}
              </div>

              {/* Content */}
              <h3
                className={`text-sm font-bold leading-tight ${
                  isRedeemed
                    ? "text-[#4A7C59]"
                    : unlocked
                      ? "text-foreground"
                      : "text-muted-foreground"
                }`}
              >
                {reward.name}
              </h3>
              <p className="mt-1 flex-1 text-[11px] leading-relaxed text-muted-foreground">
                {reward.description}
              </p>

              {/* Cost + action */}
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`text-xs font-bold tabular-nums ${
                    isRedeemed ? "text-[#4A7C59]/60" : affordable ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {reward.cost.toLocaleString("es-ES")} pts
                </span>

                {isRedeemed ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#4A7C59]/10 px-3 py-1.5 text-[10px] font-bold text-[#4A7C59]">
                    <Check className="h-3 w-3" />
                    Canjeado
                  </span>
                ) : (
                  <button
                    onClick={() => handleRedeem(reward)}
                    disabled={!unlocked}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition-all ${
                      unlocked
                        ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-95"
                        : "cursor-not-allowed bg-secondary text-muted-foreground/50"
                    }`}
                  >
                    {!tierMet ? "Tier requerido" : !affordable ? "Puntos insuficientes" : "Canjear"}
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Info footer */}
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-border bg-secondary/30 px-4 py-3">
        <Gift className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
        <div>
          <p className="text-xs font-bold text-foreground">
            Los vales se aplican como saldo monedero
          </p>
          <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
            Se restan directamente del total de tu carrito de compra. Los cupones de descuento se
            aplican sobre el importe total del pedido. Algunas recompensas requieren un tier minimo.
          </p>
        </div>
      </div>
    </section>
  )
}
