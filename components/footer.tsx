<<<<<<< HEAD
=======
"use client"

>>>>>>> master
import Image from "next/image"

export function Footer() {
  return (
<<<<<<< HEAD
    <footer className="border-t border-border bg-[#1B3B6F]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
=======
    // Añadimos @container al footer para que sea inteligente y mida su propio ancho
    <footer className="w-full border-t border-border bg-[#1B3B6F] @container">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-12 @md:flex-row @md:items-start @md:justify-between">
        
        {/* LOGO Y LEMA */}
        <div className="flex flex-col items-center gap-4 @md:items-start">
>>>>>>> master
          <Image
            src="/logos/Indigo_Logo_Negativo.svg"
            alt="Indigo"
            width={120}
            height={40}
            className="h-9 w-auto"
          />
<<<<<<< HEAD
          <p className="max-w-[200px] text-center text-xs leading-relaxed text-white/50 md:text-left">
=======
          <p className="max-w-[220px] text-center text-xs leading-relaxed text-white/60 @md:text-left">
>>>>>>> master
            Moda circular para un futuro sostenible.
          </p>
        </div>

<<<<<<< HEAD
        <div className="flex gap-10 text-xs">
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
              Plataforma
            </span>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Como funciona
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Intercambiar
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Rankings
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Insignias
            </a>
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30">
              Impacto
            </span>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Litros Ahorrados
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
              Nuestro compromiso
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-white">
=======
        {/* ENLACES: 2 columnas en móvil, Flex alineado en PC */}
        <div className="grid grid-cols-2 gap-8 text-xs w-full @md:w-auto @md:flex @md:gap-16">
          <div className="flex flex-col gap-3 text-center @md:text-left">
            <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
              Plataforma
            </span>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Como funciona
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Intercambiar
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Rankings
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Insignias
            </a>
          </div>
          <div className="flex flex-col gap-3 text-center @md:text-left">
            <span className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
              Impacto
            </span>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Litros Ahorrados
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
              Nuestro compromiso
            </a>
            <a href="#" className="text-white/70 transition-colors hover:text-white">
>>>>>>> master
              Blog verde
            </a>
          </div>
        </div>

<<<<<<< HEAD
        <div className="text-center text-[10px] leading-relaxed text-white/30 md:text-right">
          <p>2026 Indigo. Todos los derechos reservados.</p>
          <p className="mt-1">Hecho con amor por el planeta.</p>
        </div>
      </div>
    </footer>
  )
}
=======
        {/* COPYRIGHT: Con separador superior en móvil, sin separador en PC */}
        <div className="mt-2 flex w-full flex-col items-center gap-1.5 border-t border-white/10 pt-8 text-center text-[10px] leading-relaxed text-white/40 @md:mt-0 @md:w-auto @md:items-end @md:border-none @md:pt-0 @md:text-right">
          <p>© 2026 Indigo. Todos los derechos reservados.</p>
          <p>Hecho con amor por el planeta 🌍</p>
        </div>
        
      </div>
    </footer>
  )
}
>>>>>>> master
