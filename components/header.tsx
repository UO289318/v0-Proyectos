"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { User, Bell, Menu, X, ChevronRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio", active: true },
  { href: "#como-funciona", label: "Como funciona", active: false },
  { href: "#litros", label: "Litros Ahorrados", active: false },
  { href: "/marketplace", label: "Marketplace", active: false },
  { href: "#insignias", label: "Insignias", active: false },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur-md @container">
      <div className="mx-auto flex h-14 w-full items-center justify-between px-4 @lg:px-8">
        
        {/* Left block: Menu (Mobile) + Logo */}
        <div className="flex items-center gap-4">
          <button
            className="flex h-10 w-10 items-center justify-center text-foreground transition-colors @lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          <Link href="/">
            <Image
              src="/logos/Indigo_Logo_Horizontal.svg"
              alt="Indigo"
              width={110}
              height={36}
              className="h-7 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center block: Navigation (Desktop only) */}
        <nav className="hidden flex-grow items-center justify-center gap-6 px-8 @lg:flex" aria-label="Navegacion principal">
          {navLinks.map((link) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap text-sm transition-colors hover:text-[#4A7C59] ${
                  link.active ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={`whitespace-nowrap text-sm transition-colors hover:text-[#4A7C59] ${
                  link.active ? "font-semibold text-foreground" : "font-medium text-muted-foreground"
                }`}
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        {/* Right block: Icons */}
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
            aria-label="Perfil de usuario"
          >
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className="animate-in slide-in-from-left-2 absolute left-0 top-14 h-[calc(100vh-3.5rem)] w-full bg-card duration-300 @lg:hidden"
          aria-label="Menu movil"
        >
          <div className="flex flex-col space-y-1 p-4">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Menu de Navegacion
            </p>
            {navLinks.map((link) => (
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base transition-colors active:bg-secondary ${
                    link.active 
                      ? "bg-secondary/50 font-bold text-[#1B3B6F]" 
                      : "font-medium text-foreground hover:bg-secondary/30"
                  }`}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 text-base transition-colors active:bg-secondary ${
                    link.active 
                      ? "bg-secondary/50 font-bold text-[#1B3B6F]" 
                      : "font-medium text-foreground hover:bg-secondary/30"
                  }`}
                >
                  {link.label}
                  <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50" />
                </a>
              )
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
