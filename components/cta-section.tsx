"use client"

import Image from "next/image"
import { ArrowRight, Leaf } from "lucide-react"

export function CTASection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern
            id="cta-dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="12" cy="12" r="1" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1 text-xs font-medium text-primary-foreground">
            <Leaf className="h-3 w-3" />
            Moda circular
          </div>
          <h2 className="font-serif text-3xl font-bold italic text-primary-foreground md:text-4xl">
            Empieza a intercambiar hoy
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Dale una segunda vida a tu ropa y acumula litros ahorrados. Cada prenda que intercambias ayuda al planeta y te acerca al siguiente nivel.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start">
            <button className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-all hover:opacity-90 hover:shadow-lg">
              Evaluar mi ropa
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-foreground/10">
              Explorar intercambios
            </button>
          </div>
        </div>

        {/* Sello logo as decoration */}
        <div className="hidden shrink-0 md:block">
          <Image
            src="/logos/Indigo_Logo_Sello.svg"
            alt=""
            width={120}
            height={120}
            className="opacity-20"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
