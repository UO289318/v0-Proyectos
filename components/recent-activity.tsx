"use client"

import { Shirt, ArrowRightLeft, TrendingUp } from "lucide-react"

const activities = [
  {
    icon: Shirt,
    title: 'Chaqueta de cuero evaluada',
    points: "+320 litros",
    time: "Hace 2 horas",
    status: "completed",
  },
  {
    icon: ArrowRightLeft,
    title: "Intercambio completado",
    points: "+180 litros",
    time: "Ayer",
    status: "completed",
  },
  {
    icon: TrendingUp,
    title: "Subiste a nivel Gold",
    points: "",
    time: "Hace 3 dias",
    status: "milestone",
  },
  {
    icon: Shirt,
    title: "Vestido vintage evaluado",
    points: "+450 litros",
    time: "Hace 5 dias",
    status: "completed",
  },
]

export function RecentActivity() {
  return (
    <section className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-serif text-2xl font-bold italic text-foreground">
          Actividad reciente
        </h2>
        <a
          href="#"
          className="text-xs font-medium text-accent transition-colors hover:underline"
        >
          Ver todo
        </a>
      </div>

      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:shadow-sm"
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor:
                  activity.status === "milestone"
                    ? "rgba(200,169,81,0.12)"
                    : "rgba(74,124,89,0.1)",
              }}
            >
              <activity.icon
                className="h-5 w-5"
                style={{
                  color:
                    activity.status === "milestone" ? "#C8A951" : "#4A7C59",
                }}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground">
                {activity.title}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
            {activity.points && (
              <span className="text-sm font-bold text-accent">
                {activity.points}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
