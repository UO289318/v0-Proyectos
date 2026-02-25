"use client"

import { Tag, ShieldCheck, Clock, ChevronRight } from "lucide-react"

const criteria = [
  {
    icon: Tag,
    title: "Precio original",
    subtitle: "Valor de la prenda",
    description:
      "Cuanto mayor sea el valor original de la prenda, mas litros ahorrados sumas. Prendas de mayor calidad representan mayor ahorro de recursos.",
    example: "Abrigo de $2,000",
    result: "180 litros",
    color: "#1B3B6F",
    step: "01",
  },
  {
    icon: ShieldCheck,
    title: "Estado",
    subtitle: "Condicion actual",
    description:
      "Evaluamos el estado: como nuevo, bueno, aceptable. Las prendas mejor conservadas generan mayor puntaje porque extienden su vida util.",
    example: "Como nuevo",
    result: "x1.5 multiplicador",
    color: "#4A7C59",
    step: "02",
  },
  {
    icon: Clock,
    title: "Antiguedad",
    subtitle: "Tiempo de uso",
    description:
      "La edad de la prenda importa. Ropa que ha durado mas tiempo demuestra calidad y sostenibilidad, sumando puntos adicionales.",
    example: "+2 anos de vida",
    result: "+50 litros bonus",
    color: "#8D6E63",
    step: "03",
  },
]

export function EvaluationSection() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A7C59]">
          Sistema de evaluacion
        </p>
        <h2 className="font-serif text-2xl font-bold italic text-foreground md:text-3xl text-balance">
          Como evaluamos tu ropa
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Cada prenda que intercambias se convierte en litros de agua ahorrados.
          Utilizamos tres factores clave para calcular tu impacto ambiental.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {criteria.map((item, idx) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {/* Step number */}
            <span
              className="absolute right-4 top-4 font-serif text-4xl font-bold italic opacity-[0.06]"
              style={{ color: item.color }}
            >
              {item.step}
            </span>

            {/* Icon */}
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${item.color}10` }}
            >
              <item.icon className="h-5 w-5" style={{ color: item.color }} />
            </div>

            {/* Content */}
            <h3 className="text-base font-bold text-card-foreground">{item.title}</h3>
            <p className="mb-1 text-[11px] font-medium" style={{ color: item.color }}>
              {item.subtitle}
            </p>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>

            {/* Example result */}
            <div
              className="flex items-center justify-between rounded-lg px-3 py-2.5"
              style={{ backgroundColor: `${item.color}08` }}
            >
              <span className="text-xs text-muted-foreground">{item.example}</span>
              <span className="text-xs font-bold" style={{ color: item.color }}>
                {item.result}
              </span>
            </div>

            {/* Arrow connector (hidden on last card and mobile) */}
            {idx < criteria.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Formula result */}
      <div className="mt-6 flex items-center justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
          <span className="text-xs text-muted-foreground">Precio</span>
          <span className="text-muted-foreground/40">+</span>
          <span className="text-xs text-muted-foreground">Estado</span>
          <span className="text-muted-foreground/40">+</span>
          <span className="text-xs text-muted-foreground">Antiguedad</span>
          <span className="text-muted-foreground/40">=</span>
          <span className="text-xs font-bold text-[#4A7C59]">Litros Ahorrados</span>
        </div>
      </div>
    </section>
  )
}
