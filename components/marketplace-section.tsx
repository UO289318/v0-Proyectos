"use client"

import { useState } from "react"
import { ShoppingBag, Shirt, Heart, Filter, ChevronDown, Star, Package } from "lucide-react"

interface Product {
  id: string
  name: string
  brand: string
  price: number
  originalPrice?: number
  category: string
  condition: "nuevo" | "como-nuevo" | "buen-estado"
  rating: number
  reviews: number
  sustainable: boolean
}

const products: Product[] = [
  {
    id: "1",
    name: "Camiseta Basica Organica",
    brand: "Zara",
    price: 15.99,
    originalPrice: 19.99,
    category: "camisetas",
    condition: "nuevo",
    rating: 4.8,
    reviews: 124,
    sustainable: true,
  },
  {
    id: "2",
    name: "Vaqueros Slim Fit",
    brand: "Pull&Bear",
    price: 29.99,
    category: "pantalones",
    condition: "como-nuevo",
    rating: 4.5,
    reviews: 89,
    sustainable: false,
  },
  {
    id: "3",
    name: "Sudadera Oversize",
    brand: "Bershka",
    price: 24.99,
    originalPrice: 35.99,
    category: "sudaderas",
    condition: "nuevo",
    rating: 4.7,
    reviews: 56,
    sustainable: true,
  },
  {
    id: "4",
    name: "Vestido Midi Estampado",
    brand: "Massimo Dutti",
    price: 49.99,
    category: "vestidos",
    condition: "buen-estado",
    rating: 4.3,
    reviews: 34,
    sustainable: false,
  },
  {
    id: "5",
    name: "Chaqueta Denim",
    brand: "Stradivarius",
    price: 39.99,
    originalPrice: 49.99,
    category: "chaquetas",
    condition: "como-nuevo",
    rating: 4.6,
    reviews: 78,
    sustainable: true,
  },
  {
    id: "6",
    name: "Polo Clasico",
    brand: "Zara",
    price: 22.99,
    category: "camisetas",
    condition: "nuevo",
    rating: 4.4,
    reviews: 45,
    sustainable: false,
  },
]

const categories = [
  { value: "all", label: "Todas" },
  { value: "camisetas", label: "Camisetas" },
  { value: "pantalones", label: "Pantalones" },
  { value: "sudaderas", label: "Sudaderas" },
  { value: "vestidos", label: "Vestidos" },
  { value: "chaquetas", label: "Chaquetas" },
]

const conditionLabels: Record<string, { label: string; color: string; bg: string }> = {
  nuevo: { label: "Nuevo", color: "#4A7C59", bg: "rgba(74,124,89,0.10)" },
  "como-nuevo": { label: "Como nuevo", color: "#1B3B6F", bg: "rgba(27,59,111,0.10)" },
  "buen-estado": { label: "Buen estado", color: "#8D6E63", bg: "rgba(141,110,99,0.10)" },
}

export function MarketplaceSection() {
  const [category, setCategory] = useState("all")
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [cart, setCart] = useState<Set<string>>(new Set())

  const filteredProducts =
    category === "all" ? products : products.filter((p) => p.category === category)

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const addToCart = (id: string) => {
    setCart((prev) => new Set(prev).add(id))
  }

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#8D6E63]">
            Marketplace
          </p>
          <h2 className="font-serif text-2xl font-bold italic text-foreground">
            Compra ropa sostenible
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Descubre prendas de segunda mano y colecciones sostenibles.
          </p>
        </div>

        {/* Cart indicator */}
        <div className="flex items-center gap-2 self-start rounded-full border border-border bg-card px-4 py-2 shadow-sm sm:self-auto">
          <div className="relative">
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            {cart.size > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#4A7C59] text-[9px] font-bold text-white">
                {cart.size}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-foreground">Carrito</span>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Filter className="h-3.5 w-3.5" />
          <span>Filtrar:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              category === cat.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => {
          const isFavorite = favorites.has(product.id)
          const inCart = cart.has(product.id)
          const conditionStyle = conditionLabels[product.condition]

          return (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Image placeholder */}
              <div className="relative flex h-48 items-center justify-center bg-secondary/50">
                <Shirt className="h-16 w-16 text-muted-foreground/30" />

                {/* Badges */}
                <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                  {product.sustainable && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#4A7C59]/90 px-2 py-0.5 text-[9px] font-bold text-white">
                      <Package className="h-2.5 w-2.5" />
                      Sostenible
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="rounded-full bg-[#A0522D]/90 px-2 py-0.5 text-[9px] font-bold text-white">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Favorite button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                    isFavorite
                      ? "bg-red-50 text-red-500"
                      : "bg-white/80 text-muted-foreground hover:bg-white hover:text-red-500"
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`} />
                </button>

                {/* Condition badge */}
                <span
                  className="absolute bottom-3 left-3 rounded-full px-2 py-0.5 text-[9px] font-bold"
                  style={{ backgroundColor: conditionStyle.bg, color: conditionStyle.color }}
                >
                  {conditionStyle.label}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-[#C8A951] text-[#C8A951]" />
                    <span className="text-[10px] font-medium text-foreground">{product.rating}</span>
                    <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="mb-2 text-sm font-bold text-foreground">{product.name}</h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-bold text-foreground">
                      {product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-muted-foreground">EUR</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={inCart}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-bold transition-all ${
                      inCart
                        ? "bg-[#4A7C59]/10 text-[#4A7C59]"
                        : "bg-primary text-primary-foreground hover:opacity-90 active:scale-95"
                    }`}
                  >
                    {inCart ? "Anadido" : "Comprar"}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Load more */}
      <div className="mt-6 flex justify-center">
        <button className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:bg-secondary hover:text-foreground">
          Ver mas productos
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </div>
    </section>
  )
}
