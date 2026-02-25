"use client"

import { Tag, ShieldCheck, Clock, ArrowRight } from "lucide-react"

const criteria = [
  {
    icon: Tag,
    title: "Precio original",
    description:
      "Cuanto mayor sea el valor original de la prenda, mas litros ahorrados sumas. Prendas de mayor calidad representan mayor ahorro de recursos.",
    example: "Ej: Abrigo de $2,000 = 180 litros",
    color: "#1B3B6F",
  },
  {
    icon: ShieldCheck,
    title: "Estado de la prenda",
    description:
      "Evaluamos el estado: como nuevo, bueno, aceptable. Las prendas mejor conservadas generan mayor puntaje porque extienden su vida util.",
    example: "Ej: Como nuevo = x1.5 multiplicador",
    color: "#4A7C59",
  },
  {
    icon: Clock,
    title: "Antiguedad",
    description:
      "La edad de la prenda importa. Ropa que ha durado mas tiempo demuestra calidad y sostenibilidad, sumando puntos adicionales.",
    example: "Ej: +2 anos = +50 litros bonus",
    color: "#8D6E63",
  },
]

export function EvaluationSection() {
  return (
    <section className="w-full">
      <div className="mb-6">
        <h2 className="font-serif text-2xl font-bold italic text-foreground">
          Como evaluamos tu ropa
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Cada prenda que intercambias se convierte en litros de agua ahorrados. Utilizamos tres factores clave para calcular tu impacto.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {criteria.map((item) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg"
          >
            <div
              className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${item.color}12` }}
            >
              <item.icon
                className="h-5 w-5"
                style={{ color: item.color }}
              />
            </div>
            <h3 className="mb-2 text-base font-bold text-card-foreground">
              {item.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            <div
              className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium"
              style={{
                backgroundColor: `${item.color}08`,
                color: item.color,
              }}
            >
              {item.example}
            </div>

            {/* Decorative corner accent */}
            <div
              className="absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-5 transition-opacity duration-300 group-hover:opacity-10"
              style={{ backgroundColor: item.color }}
            />
          </div>
        ))}
      </div>

      {/* Flow arrow indicators for md+ */}
      <div className="mt-6 hidden items-center justify-center gap-2 text-xs text-muted-foreground md:flex">
        <span>Precio</span>
        <ArrowRight className="h-3 w-3" />
        <span>Estado</span>
        <ArrowRight className="h-3 w-3" />
        <span>Antiguedad</span>
        <ArrowRight className="h-3 w-3" />
        <span className="font-bold text-accent">= Litros Ahorrados</span>
      </div>
    </section>
  )
}
