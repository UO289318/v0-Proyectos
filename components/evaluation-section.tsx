"use client"

import { Tag, ShieldCheck, Clock, ChevronRight, AlertTriangle } from "lucide-react"

const priceTable = [
  { range: "0 - 10", points: "1,000" },
  { range: "10 - 20", points: "2,000" },
  { range: "20 - 30", points: "3,000" },
  { range: "30 - 50", points: "4,000" },
  { range: "50+", points: "5,000" },
]

const conditionModifiers = [
  { label: "Como nuevo", modifier: "x1.0", desc: "Sin senales de uso visibles" },
  { label: "Bueno", modifier: "x0.8", desc: "Ligeras senales de uso" },
  { label: "Aceptable", modifier: "x0.6", desc: "Uso evidente pero funcional" },
  { label: "Desgastado", modifier: "x0.4", desc: "Requiere reparaciones menores" },
]

const ageModifiers = [
  { label: "< 1 ano", modifier: "x1.0" },
  { label: "1-3 anos", modifier: "x0.9" },
  { label: "3-5 anos", modifier: "x0.7" },
  { label: "5+ anos", modifier: "x0.5" },
]

export function EvaluationSection() {
  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A7C59]">
          Sistema de puntos
        </p>
        <h2 className="font-serif text-2xl font-bold italic text-foreground md:text-3xl text-balance">
          Como se evalua tu ropa
        </h2>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Cada prenda recibe puntos base segun su precio original, ajustados por su condicion
          y antiguedad. Los puntos se convierten directamente en Litros Ahorrados.
        </p>
      </div>

      {/* Three evaluation factors */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Factor 1: Price */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
          <span className="absolute right-3 top-3 font-serif text-4xl font-bold italic text-[#1B3B6F] opacity-[0.05]">
            01
          </span>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1B3B6F]/8 transition-transform duration-300 group-hover:scale-110">
            <Tag className="h-5 w-5 text-[#1B3B6F]" />
          </div>
          <h3 className="text-base font-bold text-card-foreground">Precio original</h3>
          <p className="mb-1 text-[11px] font-medium text-[#1B3B6F]">Puntos base</p>
          <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
            El valor de compra determina los puntos iniciales de la prenda.
          </p>

          {/* Price table */}
          <div className="space-y-1">
            {priceTable.map((row) => (
              <div
                key={row.range}
                className="flex items-center justify-between rounded-lg bg-secondary/60 px-3 py-2"
              >
                <span className="text-xs text-muted-foreground">{row.range} EUR</span>
                <span className="text-xs font-bold text-[#1B3B6F]">{row.points} pts</span>
              </div>
            ))}
          </div>

          {/* Connector */}
          <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Factor 2: Condition */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
          <span className="absolute right-3 top-3 font-serif text-4xl font-bold italic text-[#4A7C59] opacity-[0.05]">
            02
          </span>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A7C59]/8 transition-transform duration-300 group-hover:scale-110">
            <ShieldCheck className="h-5 w-5 text-[#4A7C59]" />
          </div>
          <h3 className="text-base font-bold text-card-foreground">Estado</h3>
          <p className="mb-1 text-[11px] font-medium text-[#4A7C59]">Multiplicador</p>
          <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
            La condicion actual ajusta los puntos. Prendas mejor conservadas obtienen mas.
          </p>

          <div className="space-y-1">
            {conditionModifiers.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg bg-secondary/60 px-3 py-2"
              >
                <div>
                  <span className="text-xs text-card-foreground">{row.label}</span>
                  <p className="text-[9px] text-muted-foreground">{row.desc}</p>
                </div>
                <span className="text-xs font-bold text-[#4A7C59]">{row.modifier}</span>
              </div>
            ))}
          </div>

          <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Factor 3: Age */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
          <span className="absolute right-3 top-3 font-serif text-4xl font-bold italic text-[#8D6E63] opacity-[0.05]">
            03
          </span>
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#8D6E63]/8 transition-transform duration-300 group-hover:scale-110">
            <Clock className="h-5 w-5 text-[#8D6E63]" />
          </div>
          <h3 className="text-base font-bold text-card-foreground">Antiguedad</h3>
          <p className="mb-1 text-[11px] font-medium text-[#8D6E63]">Ajuste temporal</p>
          <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground">
            La edad reduce los puntos. Prendas mas recientes conservan mas valor.
          </p>

          <div className="space-y-1">
            {ageModifiers.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-lg bg-secondary/60 px-3 py-2"
              >
                <span className="text-xs text-muted-foreground">{row.label}</span>
                <span className="text-xs font-bold text-[#8D6E63]">{row.modifier}</span>
              </div>
            ))}
          </div>

          {/* Example calculation */}
          <div className="mt-3 rounded-lg border border-dashed border-[#8D6E63]/20 bg-[#8D6E63]/4 px-3 py-2">
            <div className="flex items-center gap-1 text-[10px] font-bold text-[#8D6E63]">
              <AlertTriangle className="h-3 w-3" />
              Ejemplo
            </div>
            <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
              Abrigo de 35 EUR, buen estado, 2 anos = 4,000 x 0.8 x 0.9 = <span className="font-bold text-foreground">2,880 pts</span>
            </p>
          </div>
        </div>
      </div>

      {/* Formula */}
      <div className="mt-6 flex items-center justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 shadow-sm">
          <span className="text-xs font-medium text-[#1B3B6F]">Precio base</span>
          <span className="text-xs text-muted-foreground/40">x</span>
          <span className="text-xs font-medium text-[#4A7C59]">Condicion</span>
          <span className="text-xs text-muted-foreground/40">x</span>
          <span className="text-xs font-medium text-[#8D6E63]">Antiguedad</span>
          <span className="text-xs text-muted-foreground/40">=</span>
          <span className="text-xs font-bold text-[#4A7C59]">Litros Ahorrados</span>
        </div>
      </div>
    </section>
  )
}
