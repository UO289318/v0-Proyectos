"use client"

import { Droplets, Shirt, Recycle, TrendingUp, Factory } from "lucide-react"

const stats = [
  {
    icon: Shirt,
    value: "2,700",
    unit: "L",
    label: "Por camiseta",
    desc: "de agua para fabricar una camiseta de algodon",
  },
  {
    icon: Droplets,
    value: "7,000",
    unit: "L",
    label: "Por jeans",
    desc: "de agua para producir un par de jeans",
  },
  {
    icon: Recycle,
    value: "70",
    unit: "%",
    label: "Menos impacto",
    desc: "reduccion al reutilizar prendas existentes",
  },
  {
    icon: TrendingUp,
    value: "2x",
    unit: "",
    label: "Vida util",
    desc: "multiplica el ciclo de vida de cada prenda",
  },
]

export function LitrosExplanation() {
  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4A7C59]/10">
              <Droplets className="h-6 w-6 text-[#4A7C59]" />
            </div>
            <div>
              <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A7C59]">
                Tu metrica de impacto
              </p>
              {/* CAMBIO: md:text-2xl -> @md:text-2xl */}
              <h2 className="font-serif text-xl font-bold italic text-card-foreground @md:text-2xl text-balance">
                Que son los Litros Ahorrados?
              </h2>
            </div>
          </div>

          {/* Explanation */}
          {/* CAMBIO: md:grid-cols-2 -> @md:grid-cols-2 */}
          <div className="mt-5 grid gap-4 @md:grid-cols-2">
            <div className="rounded-xl bg-secondary/50 p-4">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                <Factory className="h-4 w-4 text-[#1B3B6F]" />
                El problema
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                La industria de la moda consume <span className="font-bold text-foreground">79 mil millones</span> de
                litros de agua al año. Fabricar una sola camiseta requiere suficiente agua para que
                una persona beba durante 2.5 años.
              </p>
            </div>
            <div className="rounded-xl bg-[#4A7C59]/5 p-4">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                <Recycle className="h-4 w-4 text-[#4A7C59]" />
                La solucion
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                Los <span className="font-bold text-[#4A7C59]">Litros Ahorrados</span> representan
                el agua que conservas al dar segunda vida a la ropa. Cada prenda intercambiada
                evita la produccion de una nueva, ahorrando miles de litros.
              </p>
            </div>
          </div>

          {/* Stats */}
          {/* CAMBIO: md:grid-cols-4 -> @md:grid-cols-4 */}
          <div className="mt-5 grid grid-cols-2 gap-2.5 @md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col rounded-xl border border-transparent bg-secondary/50 p-3.5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-sm"
              >
                <stat.icon className="mb-2 h-4 w-4 text-[#4A7C59]" />
                <div className="flex items-baseline gap-0.5">
                  <span className="font-serif text-2xl font-bold italic text-foreground">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-sm font-medium text-muted-foreground">{stat.unit}</span>
                  )}
                </div>
                <span className="mt-0.5 text-xs font-bold text-foreground">{stat.label}</span>
                <span className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accent bar */}
        <div className="flex h-1 w-full">
          <div className="flex-1 bg-[#1B3B6F]" />
          <div className="flex-1 bg-[#4A7C59]" />
          <div className="flex-1 bg-[#8D6E63]" />
          <div className="flex-1 bg-[#D4C5A9]" />
        </div>
      </div>
    </section>
  )
}