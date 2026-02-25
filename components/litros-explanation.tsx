"use client"

import { Droplets, Shirt, Recycle, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Shirt,
    value: "2,700",
    unit: "L",
    label: "Por camiseta",
    desc: "Litros necesarios para fabricar una camiseta de algodon",
  },
  {
    icon: Droplets,
    value: "7,000",
    unit: "L",
    label: "Por jeans",
    desc: "Litros necesarios para producir un par de jeans",
  },
  {
    icon: Recycle,
    value: "70",
    unit: "%",
    label: "Menos impacto",
    desc: "Reduccion de impacto al reutilizar prendas existentes",
  },
  {
    icon: TrendingUp,
    value: "2x",
    unit: "",
    label: "Vida util",
    desc: "Multiplica el ciclo de vida de cada prenda",
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
              <h2 className="font-serif text-xl font-bold italic text-card-foreground md:text-2xl text-balance">
                Que son los Litros Ahorrados?
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 max-w-2xl rounded-xl bg-secondary/50 p-4">
            <p className="text-sm leading-relaxed text-foreground">
              Los <span className="font-bold text-[#4A7C59]">Litros Ahorrados</span> representan
              la cantidad de agua que se conserva al dar una segunda vida a la ropa en lugar de
              comprar nueva. La industria de la moda consume{" "}
              <span className="font-bold">miles de millones</span> de litros de agua anualmente.
              Cada prenda que intercambias contribuye directamente a reducir este consumo.
            </p>
          </div>

          {/* Stats grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col rounded-xl border border-transparent bg-secondary/60 p-4 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-sm"
              >
                <stat.icon className="mb-3 h-4.5 w-4.5 text-[#4A7C59]" />
                <div className="flex items-baseline gap-0.5">
                  <span className="font-serif text-2xl font-bold italic text-foreground">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-sm font-medium text-muted-foreground">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <span className="mt-0.5 text-xs font-bold text-foreground">
                  {stat.label}
                </span>
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
