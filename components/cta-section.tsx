"use client"

import Image from "next/image"
import { ArrowRight, Leaf } from "lucide-react"

export function CTASection() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1B3B6F] p-8 @md:p-12 @container w-full">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="cta-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center @md:flex-row @md:text-left">
        <div className="flex-1 w-full">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80">
            <Leaf className="h-3 w-3" />
            Moda circular
          </div>
          <h2 className="font-serif text-3xl font-bold italic text-white @md:text-4xl text-balance">
            Empieza a intercambiar hoy
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
            Dale una segunda vida a tu ropa y acumula litros ahorrados. Cada prenda
            que intercambias ayuda al planeta y te acerca al siguiente nivel.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row @md:items-start">
            <button className="inline-flex items-center gap-2 rounded-full bg-[#4A7C59] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#3D6B4C] hover:shadow-lg">
              Evaluar mi ropa
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10">
              Explorar intercambios
            </button>
          </div>
        </div>

        {/* Sello decoration */}
        <div className="hidden shrink-0 @md:block">
          <Image
            src="/logos/Indigo_Logo_Sello.svg"
            alt=""
            width={160}
            height={160}
            className="opacity-15"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
