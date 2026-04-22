"use client"

import { useState } from "react"
import { Wallet, Percent, Truck, Check, Lock, Gift, ChevronRight } from "lucide-react"

type RewardCategory = "vales" | "descuentos"

interface Reward {
  id: string
  name: string
  description: string
  cost: number
  icon: typeof Wallet
  category: RewardCategory
  tier: "bronce" | "plata" | "oro" | "platino"
  available: boolean
}

const rewards: Reward[] = [
  // Vales Monetarios
  {
    id: "vale-5",
    name: "Vale de 5 EUR",
    description: "Saldo directo para tu carrito de compra",
    cost: 5000,
    icon: Wallet,
    category: "vales",
    tier: "bronce",
    available: false,
  },
  {
    id: "vale-10",
    name: "Vale de 10 EUR",
    description: "Saldo directo para tu carrito de compra",
    cost: 10000,
    icon: Wallet,
    category: "vales",
    tier: "bronce",
    available: false,
  },
  {
    id: "vale-20",
    name: "Vale de 20 EUR",
    description: "Saldo directo con descuento exclusivo",
    cost: 19000,
    icon: Wallet,
    category: "vales",
    tier: "plata",
    available: false,
  },
  {
    id: "vale-50",
    name: "Vale de 50 EUR",
    description: "Gran vale para grandes ahorradores",
    cost: 45000,
    icon: Wallet,
    category: "vales",
    tier: "oro",
    available: false,
  },
  // Cupones de Descuento
  {
    id: "envio-gratis",
    name: "Envio Gratuito",
    description: "Envio gratis en tu proxima compra",
    cost: 3500,
    icon: Truck,
    category: "descuentos",
    tier: "bronce",
    available: true,
  },
  {
    id: "descuento-10",
    name: "Cupon 10% Descuento",
    description: "10% de descuento en tu proxima compra",
    cost: 8000,
    icon: Percent,
    category: "descuentos",
    tier: "bronce",
    available: false,
  },
  {
    id: "descuento-15",
    name: "Cupon 15% Descuento",
    description: "15% de descuento exclusivo para Plata+",
    cost: 15000,
    icon: Percent,
    category: "descuentos",
    tier: "plata",
    available: false,
  },
  {
    id: "descuento-25",
    name: "Cupon 25% Descuento",
    description: "25% de descuento exclusivo Oro y Platino",
    cost: 30000,
    icon: Percent,
    category: "descuentos",
    tier: "oro",
    available: false,
  },
]

const tierColors: Record<string, { bg: string; text: string; border: string }> = {
  bronce: { bg: "rgba(205,127,50,0.08)", text: "#CD7F32", border: "rgba(205,127,50,0.25)" },
  plata: { bg: "rgba(192,192,192,0.08)", text: "#808080", border: "rgba(192,192,192,0.25)" },
  oro: { bg: "rgba(255,215,0,0.08)", text: "#C8A951", border: "rgba(255,215,0,0.25)" },
  platino: { bg: "rgba(100,149,237,0.08)", text: "#6495ED", border: "rgba(100,149,237,0.25)" },
}

const tierLabels: Record<string, string> = {
  bronce: "Bronce+",
  plata: "Plata+",
  oro: "Oro+",
  platino: "Platino",
}

interface RewardsSectionProps {
  userPoints?: number
  userTier?: "bronce" | "plata" | "oro" | "platino"
}

export function RewardsSection({ userPoints = 2500, userTier = "bronce" }: RewardsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<RewardCategory>("vales")
  const [redeemedIds, setRedeemedIds] = useState<string[]>([])

  const tierOrder = ["bronce", "plata", "oro", "platino"]
  const userTierIndex = tierOrder.indexOf(userTier)

  const canRedeem = (reward: Reward) => {
    const rewardTierIndex = tierOrder.indexOf(reward.tier)
    return userPoints >= reward.cost && rewardTierIndex <= userTierIndex
  }

  const handleRedeem = (rewardId: string) => {
    if (!redeemedIds.includes(rewardId)) {
      setRedeemedIds([...redeemedIds, rewardId])
    }
  }

  const filteredRewards = rewards.filter((r) => r.category === activeCategory)

  return (
    <section className="w-full">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A7C59]">
            Canjea tus puntos
          </p>
          <h2 className="font-serif text-2xl font-bold italic text-foreground">
            Catalogo de Recompensas
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveCategory("vales")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === "vales"
                ? "bg-[#1B3B6F] text-white"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Wallet className="h-3.5 w-3.5" />
            Vales Monetarios
          </button>
          <button
            onClick={() => setActiveCategory("descuentos")}
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              activeCategory === "descuentos"
                ? "bg-[#1B3B6F] text-white"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            <Percent className="h-3.5 w-3.5" />
            Cupones Descuento
          </button>
        </div>
      </div>

      {/* Category description */}
      <div className="mb-6 rounded-xl border border-border bg-secondary/30 p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4A7C59]/10">
            <Gift className="h-4 w-4 text-[#4A7C59]" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">
              {activeCategory === "vales" ? "Vales Monetarios" : "Cupones de Descuento"}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {activeCategory === "vales"
                ? "Los vales actuan como saldo monedero. Se restan directamente del total de tu carrito de compra."
                : "Los cupones de descuento aplican un porcentaje de ahorro sobre el total de tu compra."}
            </p>
          </div>
        </div>
      </div>

      {/* Rewards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredRewards.map((reward) => {
          const isRedeemed = redeemedIds.includes(reward.id)
          const canUserRedeem = canRedeem(reward)
          const tierStyle = tierColors[reward.tier]

          return (
            <div
              key={reward.id}
              className={`group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 ${
                isRedeemed
                  ? "border-[#4A7C59]/40 bg-[#4A7C59]/5"
                  : canUserRedeem
                    ? "border-border bg-card hover:shadow-md hover:-translate-y-0.5"
                    : "border-dashed border-border/60 bg-secondary/20 opacity-70"
              }`}
            >
              {/* Tier badge */}
              <div
                className="absolute right-2 top-2 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: tierStyle.bg,
                  color: tierStyle.text,
                  border: `1px solid ${tierStyle.border}`,
                }}
              >
                {tierLabels[reward.tier]}
              </div>

              <div className="flex flex-1 flex-col p-4">
                {/* Icon */}
                <div
                  className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
                    isRedeemed ? "bg-[#4A7C59]/15" : "bg-[#1B3B6F]/8"
                  }`}
                >
                  {isRedeemed ? (
                    <Check className="h-5 w-5 text-[#4A7C59]" />
                  ) : canUserRedeem ? (
                    <reward.icon className="h-5 w-5 text-[#1B3B6F]" />
                  ) : (
                    <Lock className="h-4 w-4 text-muted-foreground/50" />
                  )}
                </div>

                {/* Content */}
                <h3 className="mb-1 text-sm font-bold text-foreground">{reward.name}</h3>
                <p className="mb-4 flex-1 text-[11px] leading-relaxed text-muted-foreground">
                  {reward.description}
                </p>

                {/* Cost and action */}
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs">
                    <span className="font-bold text-foreground">
                      {reward.cost.toLocaleString("es-ES")}
                    </span>
                    <span className="ml-1 text-muted-foreground">pts</span>
                  </div>

                  {isRedeemed ? (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[#4A7C59]">
                      <Check className="h-3 w-3" />
                      Canjeado
                    </span>
                  ) : canUserRedeem ? (
                    <button
                      onClick={() => handleRedeem(reward.id)}
                      className="flex items-center gap-1 rounded-full bg-[#4A7C59] px-3 py-1.5 text-[10px] font-bold text-white transition-colors hover:bg-[#3d6a4a]"
                    >
                      Canjear
                      <ChevronRight className="h-3 w-3" />
                    </button>
                  ) : (
                    <span className="text-[10px] font-medium text-muted-foreground/70">
                      No disponible
                    </span>
                  )}
                </div>
              </div>

              {/* Progress indicator for locked rewards */}
              {!canUserRedeem && !isRedeemed && (
                <div className="border-t border-dashed border-border/50 bg-secondary/30 px-4 py-2">
                  <p className="text-[9px] text-muted-foreground">
                    {userPoints < reward.cost
                      ? `Te faltan ${(reward.cost - userPoints).toLocaleString("es-ES")} pts`
                      : `Requiere nivel ${tierLabels[reward.tier]}`}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* User points reminder */}
      <div className="mt-6 flex items-center justify-between rounded-xl border border-[#4A7C59]/20 bg-[#4A7C59]/5 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A7C59]/15">
            <Wallet className="h-4 w-4 text-[#4A7C59]" />
          </div>
          <div>
            <p className="text-[10px] text-muted-foreground">Tu saldo actual</p>
            <p className="text-sm font-bold text-foreground">
              {userPoints.toLocaleString("es-ES")} puntos
            </p>
          </div>
        </div>
        <div
          className="rounded-full px-3 py-1 text-[10px] font-bold uppercase"
          style={{
            backgroundColor: tierColors[userTier].bg,
            color: tierColors[userTier].text,
            border: `1px solid ${tierColors[userTier].border}`,
          }}
        >
          Nivel {userTier.charAt(0).toUpperCase() + userTier.slice(1)}
        </div>
      </div>
    </section>
  )
}
