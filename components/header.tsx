"use client"

import Image from "next/image"
import { User, Bell } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Image
          src="/logos/Indigo_Logo_Horizontal.svg"
          alt="Indigo - Circular Fashion"
          width={140}
          height={48}
          className="h-10 w-auto"
          priority
        />
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            Inicio
          </a>
          <a
            href="#como-funciona"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            Como funciona
          </a>
          <a
            href="#litros"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            Litros Ahorrados
          </a>
          <a
            href="#intercambiar"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            Intercambiar
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Notificaciones"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-accent" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:opacity-90"
            aria-label="Perfil de usuario"
          >
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}
