import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Image
            src="/logos/Indigo_Logo_Negativo.svg"
            alt="Indigo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <p className="text-xs text-primary-foreground/60">
            Moda circular para un futuro sostenible.
          </p>
        </div>

        <div className="flex gap-8 text-xs">
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider text-primary-foreground/40">
              Plataforma
            </span>
            <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Como funciona
            </a>
            <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Intercambiar
            </a>
            <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Rankings
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase tracking-wider text-primary-foreground/40">
              Impacto
            </span>
            <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Litros Ahorrados
            </a>
            <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Nuestro compromiso
            </a>
            <a href="#" className="text-primary-foreground/70 transition-colors hover:text-primary-foreground">
              Blog verde
            </a>
          </div>
        </div>

        <div className="text-center text-[10px] text-primary-foreground/40 md:text-right">
          <p>2026 Indigo. Todos los derechos reservados.</p>
          <p className="mt-1">Hecho con amor por el planeta.</p>
        </div>
      </div>
    </footer>
  )
}
