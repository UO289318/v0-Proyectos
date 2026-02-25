import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-[#1B3B6F]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Image
            src="/logos/Indigo_Logo_Negativo.svg"
            alt="Indigo"
            width={120}
            height={40}
            className="h-9 w-auto"
          />
          <p className="max-w-[200px] text-center text-xs leading-relaxed text-white/50 md:text-left">
            Moda circular para un futuro sostenible.
          </p>
        </div>

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
              Blog verde
            </a>
          </div>
        </div>

        <div className="text-center text-[10px] leading-relaxed text-white/30 md:text-right">
          <p>2026 Indigo. Todos los derechos reservados.</p>
          <p className="mt-1">Hecho con amor por el planeta.</p>
        </div>
      </div>
    </footer>
  )
}
