"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Filter, Heart, ShoppingBag, Leaf, Star, ChevronDown } from "lucide-react"

const categories = [
  "Todos",
  "Camisetas",
  "Pantalones",
  "Vestidos",
  "Chaquetas",
  "Accesorios",
]

const conditions = [
  { value: "all", label: "Todas las condiciones" },
  { value: "nuevo", label: "Como nuevo" },
  { value: "excelente", label: "Excelente" },
  { value: "bueno", label: "Bueno" },
  { value: "aceptable", label: "Aceptable" },
]

const products = [
  {
    id: 1,
    name: "Camiseta Algodon Organico",
    brand: "Zara",
    price: 12,
    originalPrice: 29,
    points: 2000,
    condition: "Excelente",
    litrosAhorrados: 2700,
    category: "Camisetas",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
    isFavorite: false,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Jeans Vintage High Waist",
    brand: "Levis",
    price: 25,
    originalPrice: 89,
    points: 4000,
    condition: "Como nuevo",
    litrosAhorrados: 7000,
    category: "Pantalones",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    isFavorite: true,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Vestido Floral Midi",
    brand: "Mango",
    price: 18,
    originalPrice: 49,
    points: 3000,
    condition: "Bueno",
    litrosAhorrados: 4500,
    category: "Vestidos",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    isFavorite: false,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Chaqueta Denim Oversized",
    brand: "Pull&Bear",
    price: 22,
    originalPrice: 59,
    points: 3000,
    condition: "Excelente",
    litrosAhorrados: 5200,
    category: "Chaquetas",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
    isFavorite: false,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Blusa Seda Natural",
    brand: "Massimo Dutti",
    price: 28,
    originalPrice: 79,
    points: 4000,
    condition: "Como nuevo",
    litrosAhorrados: 3800,
    category: "Camisetas",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=400&h=500&fit=crop",
    isFavorite: true,
    rating: 4.9,
  },
  {
    id: 6,
    name: "Pantalon Lino Natural",
    brand: "H&M",
    price: 15,
    originalPrice: 39,
    points: 2000,
    condition: "Bueno",
    litrosAhorrados: 4100,
    category: "Pantalones",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
    isFavorite: false,
    rating: 4.3,
  },
  {
    id: 7,
    name: "Bolso Cuero Vintage",
    brand: "Coach",
    price: 45,
    originalPrice: 150,
    points: 5000,
    condition: "Excelente",
    litrosAhorrados: 2100,
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop",
    isFavorite: false,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Sudadera Oversize",
    brand: "Nike",
    price: 20,
    originalPrice: 65,
    points: 3000,
    condition: "Como nuevo",
    litrosAhorrados: 3200,
    category: "Camisetas",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    isFavorite: false,
    rating: 4.6,
  },
]

function ProductCard({ product }: { product: typeof products[0] }) {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite)
  
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Discount badge */}
        <div className="absolute left-3 top-3 rounded-full bg-[#4A7C59] px-2.5 py-1 text-xs font-bold text-white">
          -{discount}%
        </div>
        
        {/* Favorite button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-transform hover:scale-110"
          aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-muted-foreground"
            }`}
          />
        </button>
        
        {/* Condition badge */}
        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
          {product.condition}
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        {/* Brand */}
        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
          {product.brand}
        </span>
        
        {/* Name */}
        <h3 className="text-sm font-semibold leading-tight text-foreground">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-foreground">{product.rating}</span>
        </div>
        
        {/* Litros ahorrados */}
        <div className="flex items-center gap-1.5 rounded-full bg-[#4A7C59]/10 px-2.5 py-1 w-fit">
          <Leaf className="h-3.5 w-3.5 text-[#4A7C59]" />
          <span className="text-xs font-semibold text-[#4A7C59]">
            {product.litrosAhorrados.toLocaleString("es-ES")} L ahorrados
          </span>
        </div>
        
        {/* Price and buy */}
        <div className="mt-auto flex items-end justify-between pt-3">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground line-through">
              {product.originalPrice} EUR
            </span>
            <span className="text-xl font-bold text-foreground">
              {product.price} EUR
            </span>
            <span className="text-[10px] font-medium text-[#4A7C59]">
              o {product.points.toLocaleString("es-ES")} pts
            </span>
          </div>
          
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1B3B6F] text-white transition-colors hover:bg-[#162D52]">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            Moda Circular
          </p>
          <h1 className="font-serif text-3xl font-bold italic text-foreground md:text-4xl">
            Marketplace
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Descubre prendas unicas de segunda mano y contribuye a un futuro mas sostenible. 
            Cada compra ahorra miles de litros de agua.
          </p>
        </div>
        
        {/* Search and filters */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search bar */}
          <div className="relative flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar prendas, marcas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#4A7C59] focus:outline-none focus:ring-2 focus:ring-[#4A7C59]/20"
            />
          </div>
          
          {/* Filter button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Filter className="h-4 w-4" />
            Filtros
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>
        </div>
        
        {/* Category pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#1B3B6F] text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Expanded filters */}
        {showFilters && (
          <div className="animate-in slide-in-from-top-2 mb-6 rounded-xl border border-border bg-card p-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Condicion
                </label>
                <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground">
                  {conditions.map((condition) => (
                    <option key={condition.value} value={condition.value}>
                      {condition.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Precio minimo
                </label>
                <input
                  type="number"
                  placeholder="0 EUR"
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Precio maximo
                </label>
                <input
                  type="number"
                  placeholder="100 EUR"
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ordenar por
                </label>
                <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground">
                  <option value="relevance">Relevancia</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="litros">Litros ahorrados</option>
                </select>
              </div>
            </div>
          </div>
        )}
        
        {/* Results count */}
        <p className="mb-4 text-sm text-muted-foreground">
          {filteredProducts.length} productos encontrados
        </p>
        
        {/* Products grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">No se encontraron productos</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Intenta con otros filtros o terminos de busqueda
            </p>
          </div>
        )}
        
        {/* Impact banner */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#1B3B6F] to-[#2A4A7A] p-6 text-white md:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold italic md:text-3xl">
                Tu impacto importa
              </h2>
              <p className="mt-2 max-w-md text-sm text-white/80">
                Cada prenda de segunda mano que compras evita la produccion de ropa nueva, 
                ahorrando agua, energia y reduciendo emisiones de CO2.
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">2,700L</div>
                <div className="text-xs text-white/70">por camiseta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">7,000L</div>
                <div className="text-xs text-white/70">por jeans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">70%</div>
                <div className="text-xs text-white/70">menos impacto</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
