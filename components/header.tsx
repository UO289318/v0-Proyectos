"use client"

import { useState } from "react"
import Image from "next/image"
<<<<<<< HEAD
import { User, Bell, Menu, X } from "lucide-react"
=======
import { User, Bell, Menu, X, ChevronRight } from "lucide-react"
>>>>>>> master

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
<<<<<<< HEAD
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
=======
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md @container">
      {/* QUITAMOS w-1/3 y dejamos que flex haga su trabajo con justify-between */}
      <div className="mx-auto flex h-14 w-full items-center justify-between px-4 @lg:px-8">
        
        {/* BLOQUE IZQUIERDO: Menú (Móvil) + Logo (Escritorio) */}
        <div className="flex items-center gap-4">
          <button
            className="flex h-10 w-10 items-center justify-center text-foreground transition-colors @lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <Image
            src="/logos/Indigo_Logo_Horizontal.svg"
            alt="Indigo"
            width={110}
            height={36}
            className="h-7 w-auto"
            priority
          />
        </div>

        {/* BLOQUE CENTRAL: Navegación (Solo escritorio) */}
        {/* Usamos flex-grow o flex-1 para que ocupe el hueco central y separe logo de iconos */}
        <nav className="hidden items-center justify-center gap-6 @lg:flex flex-grow px-8" aria-label="Navegacion principal">
>>>>>>> master
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
<<<<<<< HEAD
              className={`text-sm transition-colors hover:text-[#4A7C59] ${
=======
              className={`text-sm whitespace-nowrap transition-colors hover:text-[#4A7C59] ${
>>>>>>> master
                link.active ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

<<<<<<< HEAD
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
=======
        {/* BLOQUE DERECHO: Iconos */}
        <div className="flex items-center gap-3">
          <button
            className="relative flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
            aria-label="Notificaciones"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full border-2 border-card bg-[#4A7C59]" />
          </button>
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B3B6F] text-[#F9F7F2] transition-colors hover:bg-[#162D52]"
>>>>>>> master
            aria-label="Perfil de usuario"
          >
            <User className="h-4 w-4" />
          </button>
<<<<<<< HEAD

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
=======
        </div>
      </div>

      {/* MENÚ MÓVIL (Igual que antes) */}
      {mobileMenuOpen && (
        <nav
          className="absolute left-0 top-14 w-full h-[calc(100vh-3.5rem)] bg-card @lg:hidden animate-in slide-in-from-left-2 duration-300"
          aria-label="Menu movil"
        >
          <div className="flex flex-col p-4 space-y-1">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Menú de Navegación
            </p>
>>>>>>> master
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
<<<<<<< HEAD
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-secondary ${
                  link.active ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
=======
                className={`flex items-center justify-between rounded-xl px-4 py-4 text-base transition-colors active:bg-secondary ${
                  link.active 
                    ? "font-bold bg-secondary/50 text-[#1B3B6F]" 
                    : "font-medium text-foreground hover:bg-secondary/30"
                }`}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50" />
>>>>>>> master
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> master
