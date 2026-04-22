"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#1B3B6F] @container">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-12 @md:flex-row @md:items-start @md:justify-between">
        
        {/* Logo and tagline */}
        <div className="flex flex-col items-center gap-4 @md:items-start">
          <Image
            src="/logos/Indigo_Logo_Negativo.svg"
            alt="Indigo"
            width={120}
            height={40}
            className="h-9 w-auto"
          />
          <p className="max-w-[220px] text-center text-xs leading-relaxed text-white/60 @md:text-left">
            Moda circular para un futuro sostenible.
          </p>
        </div>

        {/* Links */}
        <div className="grid w-full grid-cols-2 gap-8 text-xs @md:flex @md:w-auto @md:gap-16">
          <div className="flex flex-col gap-3 text-center @md:text-left">
            <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
              Plataforma
            </span>
            <a href="#como-funciona" className="text-white/70 transition-colors hover:text-white">
              Como funciona
            </a>
            <Link href="/marketplace" className="text-white/70 transition-colors hover:text-white">
              Marketplace
            </Link>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Rankings
            </a>
            <a href="#insignias" className="text-white/70 transition-colors hover:text-white">
              Insignias
            </a>
          </div>
          <div className="flex flex-col gap-3 text-center @md:text-left">
            <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
              Impacto
            </span>
            <a href="#litros" className="text-white/70 transition-colors hover:text-white">
              Litros Ahorrados
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Nuestro compromiso
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Blog verde
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-2 flex w-full flex-col items-center gap-1.5 border-t border-white/10 pt-8 text-center text-[10px] leading-relaxed text-white/40 @md:mt-0 @md:w-auto @md:items-end @md:border-none @md:pt-0 @md:text-right">
          <p>2026 Indigo. Todos los derechos reservados.</p>
          <p>Hecho con amor por el planeta.</p>
        </div>
        
      </div>
    </footer>
  )
}
