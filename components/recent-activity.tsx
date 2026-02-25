"use client"

import { Shirt, ArrowRightLeft, TrendingUp, Award } from "lucide-react"

const activities = [
  {
    icon: Shirt,
    title: "Chaqueta de cuero evaluada",
    points: "+320 litros",
    time: "Hace 2 horas",
    type: "evaluation",
  },
  {
    icon: ArrowRightLeft,
    title: "Intercambio completado",
    points: "+180 litros",
    time: "Ayer",
    type: "trade",
  },
  {
    icon: Award,
    title: "Subiste a nivel Plata",
    points: "",
    time: "Hace 3 dias",
    type: "milestone",
  },
  {
    icon: Shirt,
    title: "Vestido vintage evaluado",
    points: "+450 litros",
    time: "Hace 5 dias",
    type: "evaluation",
  },
]

const typeStyles = {
  evaluation: { bg: "rgba(74,124,89,0.08)", color: "#4A7C59" },
  trade: { bg: "rgba(27,59,111,0.08)", color: "#1B3B6F" },
  milestone: { bg: "rgba(200,169,81,0.10)", color: "#C8A951" },
}

export function RecentActivity() {
  return (
    <section className="w-full">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#4A7C59]">
            Historial
          </p>
          <h2 className="font-serif text-2xl font-bold italic text-foreground">
            Actividad reciente
          </h2>
        </div>
        <a
          href="#"
          className="text-xs font-medium text-[#4A7C59] transition-colors hover:underline"
        >
          Ver todo
        </a>
      </div>

      <div className="grid gap-2">
        {activities.map((activity, index) => {
          const style = typeStyles[activity.type as keyof typeof typeStyles]
          return (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3.5 transition-all duration-200 hover:shadow-sm hover:border-border/80"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: style.bg }}
              >
                <activity.icon className="h-4.5 w-4.5" style={{ color: style.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate text-sm font-medium text-card-foreground">
                  {activity.title}
                </p>
                <p className="text-[11px] text-muted-foreground">{activity.time}</p>
              </div>
              {activity.points && (
                <span className="shrink-0 rounded-full bg-[#4A7C59]/8 px-2.5 py-1 text-xs font-bold text-[#4A7C59]">
                  {activity.points}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
