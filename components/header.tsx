"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Bell, Menu, X } from "lucide-react"

const navLinks = [
  { href: "#", label: "Inicio", active: true },
  { href: "#como-funciona", label: "Como funciona", active: false },
  { href: "#litros", label: "Litros Ahorrados", active: false },
  { href: "#insignias", label: "Insignias", active: false },
  { href: "#intercambiar", label: "Intercambiar", active: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Image
          src="/logos/Indigo_Logo_Horizontal.svg"
          alt="Indigo - Moda Circular"
          width={140}
          height={48}
          className="h-9 w-auto"
          priority
        />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors hover:text-[#4A7C59] ${
                link.active ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
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

          <button
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="animate-in slide-in-from-top-2 duration-200 border-t border-border bg-card px-4 py-3 lg:hidden"
          aria-label="Menu movil"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary ${
                  link.active ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
