"use client"

import { Shirt, ArrowRightLeft, Award, TrendingUp } from "lucide-react"

const activities = [
  {
    icon: Shirt,
    title: "Chaqueta de cuero evaluada",
<<<<<<< HEAD
    subtitle: "Valor: 45 EUR, Como nuevo, < 1 ano",
    points: "+4,000",
=======
    subtitle: "Valor: 45 EUR, Como nuevo, < 1 año",
    points: "+4,800",
>>>>>>> master
    time: "Hace 2 horas",
    type: "evaluation" as const,
  },
  {
    icon: ArrowRightLeft,
    title: "Intercambio completado",
    subtitle: "Vestido de verano por blazer",
    points: "+2,000",
    time: "Ayer",
    type: "trade" as const,
  },
  {
    icon: Award,
    title: "Insignia: Eco Guerrero",
    subtitle: "Ahorraste 1,000 litros de agua",
    points: "",
    time: "Hace 3 dias",
    type: "milestone" as const,
  },
  {
    icon: Shirt,
    title: "Jeans vintage evaluados",
    subtitle: "Valor: 25 EUR, Bueno, 2 anos",
<<<<<<< HEAD
    points: "+2,160",
=======
    points: "+2,400",
>>>>>>> master
    time: "Hace 5 dias",
    type: "evaluation" as const,
  },
  {
    icon: TrendingUp,
    title: "Subiste a rango Bronce",
    subtitle: "Has alcanzado los 1,000 litros",
    points: "",
    time: "Hace 1 semana",
    type: "milestone" as const,
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
          className="text-xs font-semibold text-[#4A7C59] transition-colors hover:underline"
        >
          Ver todo
        </a>
      </div>

      <div className="grid gap-2">
        {activities.map((activity, index) => {
          const style = typeStyles[activity.type]
          return (
            <div
              key={index}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all duration-200 hover:shadow-sm"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                style={{ backgroundColor: style.bg }}
              >
                <activity.icon className="h-4 w-4" style={{ color: style.color }} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-card-foreground">
                  {activity.title}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">{activity.subtitle}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-0.5">
                {activity.points && (
                  <span className="rounded-full bg-[#4A7C59]/8 px-2.5 py-0.5 text-xs font-bold text-[#4A7C59]">
                    {activity.points}
                  </span>
                )}
                <span className="text-[10px] text-muted-foreground">{activity.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
