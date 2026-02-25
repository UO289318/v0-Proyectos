"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Bell, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Image
          src="/logos/Indigo_Logo_Horizontal.svg"
          alt="Indigo - Circular Fashion"
          width={140}
          height={48}
          className="h-9 w-auto"
          priority
        />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegacion principal">
          <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-[#4A7C59]">
            Inicio
          </a>
          <a href="#como-funciona" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#4A7C59]">
            Como funciona
          </a>
          <a href="#litros" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#4A7C59]">
            Litros Ahorrados
          </a>
          <a href="#intercambiar" className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#4A7C59]">
            Intercambiar
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Notificaciones"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#4A7C59]" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B3B6F] text-[#F9F7F2] transition-colors hover:bg-[#162D52]"
            aria-label="Perfil de usuario"
          >
            <User className="h-4 w-4" />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav className="animate-in slide-in-from-top-2 duration-200 border-t border-border bg-card px-4 py-3 md:hidden" aria-label="Menu movil">
          <div className="flex flex-col gap-1">
            <a href="#" className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
              Inicio
            </a>
            <a href="#como-funciona" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary">
              Como funciona
            </a>
            <a href="#litros" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary">
              Litros Ahorrados
            </a>
            <a href="#intercambiar" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary">
              Intercambiar
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
