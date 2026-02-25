"use client"

import { Droplets, Shirt, Recycle, TrendingUp } from "lucide-react"

export function LitrosExplanation() {
  return (
    <section className="w-full overflow-hidden rounded-2xl border border-border bg-card">
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
            <Droplets className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold italic text-card-foreground md:text-2xl">
              Que son los Litros Ahorrados?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Los Litros Ahorrados representan la cantidad de agua que se conserva al dar
              una segunda vida a la ropa en lugar de comprar nueva. La industria de la moda
              consume miles de millones de litros de agua anualmente. Cada prenda que intercambias
              contribuye directamente a reducir este consumo.
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            {
              icon: Shirt,
              value: "2,700 L",
              label: "por camiseta",
              desc: "litros para fabricar",
            },
            {
              icon: Droplets,
              value: "7,000 L",
              label: "por jeans",
              desc: "litros para fabricar",
            },
            {
              icon: Recycle,
              value: "70%",
              label: "menos impacto",
              desc: "con ropa reutilizada",
            },
            {
              icon: TrendingUp,
              value: "2x",
              label: "vida util",
              desc: "extiende su ciclo",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl bg-secondary p-4 text-center"
            >
              <stat.icon className="mb-2 h-5 w-5 text-accent" />
              <span className="font-serif text-xl font-bold italic text-foreground">
                {stat.value}
              </span>
              <span className="text-xs font-medium text-foreground">
                {stat.label}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="flex h-1.5 w-full">
        <div className="flex-1 bg-[#1B3B6F]" />
        <div className="flex-1 bg-[#4A7C59]" />
        <div className="flex-1 bg-[#8D6E63]" />
        <div className="flex-1 bg-[#D4C5A9]" />
      </div>
    </section>
  )
}
