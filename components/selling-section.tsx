"use client"

import { useState, useRef } from "react"
import { Camera, Upload, X, Check, Shirt, Tag, Info, Ruler, Sparkles, ArrowRight } from "lucide-react"

interface FormData {
  title: string
  brand: string
  category: string
  size: string
  condition: string
  color: string
  description: string
  price: string
}

const categories = [
  { value: "", label: "Selecciona categoria" },
  { value: "camisetas", label: "Camisetas" },
  { value: "pantalones", label: "Pantalones" },
  { value: "sudaderas", label: "Sudaderas" },
  { value: "vestidos", label: "Vestidos" },
  { value: "chaquetas", label: "Chaquetas" },
  { value: "faldas", label: "Faldas" },
  { value: "accesorios", label: "Accesorios" },
]

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

const conditions = [
  { value: "nuevo", label: "Nuevo con etiqueta" },
  { value: "como-nuevo", label: "Como nuevo" },
  { value: "buen-estado", label: "Buen estado" },
  { value: "usado", label: "Usado" },
]

const colors = [
  { value: "negro", label: "Negro", hex: "#1a1a1a" },
  { value: "blanco", label: "Blanco", hex: "#ffffff" },
  { value: "azul", label: "Azul", hex: "#1B3B6F" },
  { value: "verde", label: "Verde", hex: "#4A7C59" },
  { value: "rojo", label: "Rojo", hex: "#C75050" },
  { value: "beige", label: "Beige", hex: "#D4C5A9" },
  { value: "gris", label: "Gris", hex: "#6B7D8D" },
  { value: "marron", label: "Marron", hex: "#8D6E63" },
]

export function SellingSection() {
  const [images, setImages] = useState<string[]>([])
  const [formData, setFormData] = useState<FormData>({
    title: "",
    brand: "",
    category: "",
    size: "",
    condition: "",
    color: "",
    description: "",
    price: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageCapture = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result && images.length < 4) {
          setImages((prev) => [...prev, event.target!.result as string])
        }
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid =
    images.length > 0 &&
    formData.title &&
    formData.brand &&
    formData.category &&
    formData.size &&
    formData.condition &&
    formData.price

  const handleSubmit = () => {
    if (!isFormValid) return
    setSubmitted(true)
  }

  const resetForm = () => {
    setImages([])
    setFormData({
      title: "",
      brand: "",
      category: "",
      size: "",
      condition: "",
      color: "",
      description: "",
      price: "",
    })
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <section className="w-full">
        <div className="flex flex-col items-center justify-center rounded-xl border border-[#4A7C59]/30 bg-[#4A7C59]/5 py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4A7C59]/10">
            <Check className="h-8 w-8 text-[#4A7C59]" />
          </div>
          <h3 className="mb-2 font-serif text-xl font-bold italic text-foreground">
            Prenda enviada correctamente
          </h3>
          <p className="mb-6 max-w-sm text-sm text-muted-foreground">
            Tu articulo esta siendo revisado. Te notificaremos cuando este publicado en el
            marketplace.
          </p>
          <button
            onClick={resetForm}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
          >
            Vender otra prenda
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full">
      {/* Header */}
      <div className="mb-6">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#A0522D]">
          Vender
        </p>
        <h2 className="font-serif text-2xl font-bold italic text-foreground">
          Vende tu ropa
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Sube fotos y completa la informacion de la prenda que quieres vender.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Photos section */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Camera className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Fotos de la prenda
            </span>
            <span className="ml-auto text-[10px] text-muted-foreground">{images.length}/4</span>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="grid grid-cols-2 gap-3">
            {/* Image slots */}
            {[0, 1, 2, 3].map((index) => {
              const hasImage = images[index]
              return (
                <div
                  key={index}
                  className={`relative flex aspect-square items-center justify-center rounded-xl border-2 border-dashed transition-all ${
                    hasImage
                      ? "border-transparent bg-secondary"
                      : "border-border bg-secondary/30 hover:border-muted-foreground/30 hover:bg-secondary/50"
                  }`}
                >
                  {hasImage ? (
                    <>
                      <img
                        src={images[index]}
                        alt={`Foto ${index + 1}`}
                        className="h-full w-full rounded-lg object-cover"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-white shadow-sm transition-transform hover:scale-110"
                      >
                        <X className="h-3 w-3" />
                      </button>
                      {index === 0 && (
                        <span className="absolute bottom-2 left-2 rounded-full bg-primary/90 px-2 py-0.5 text-[8px] font-bold text-primary-foreground">
                          Principal
                        </span>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={handleImageCapture}
                      className="flex flex-col items-center gap-2 p-4 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {index === 0 ? (
                        <Camera className="h-8 w-8" />
                      ) : (
                        <Upload className="h-6 w-6" />
                      )}
                      <span className="text-[10px] font-medium">
                        {index === 0 ? "Tomar foto" : "Anadir"}
                      </span>
                    </button>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-4 flex items-start gap-2 rounded-lg bg-secondary/50 p-3">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <p className="text-[10px] leading-relaxed text-muted-foreground">
              Sube al menos 1 foto. Recomendamos fotos con buena iluminacion mostrando la prenda
              completa, detalles y posibles defectos.
            </p>
          </div>
        </div>

        {/* Form section */}
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center gap-2">
            <Tag className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Datos de la prenda
            </span>
          </div>

          <div className="space-y-4">
            {/* Title */}
            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-foreground">
                Titulo del articulo *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Ej: Camiseta de algodon azul marino"
                className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Brand + Category */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[11px] font-bold text-foreground">
                  Marca *
                </label>
                <input
                  type="text"
                  value={formData.brand}
                  onChange={(e) => handleInputChange("brand", e.target.value)}
                  placeholder="Ej: Zara"
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[11px] font-bold text-foreground">
                  Categoria *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                <Ruler className="h-3 w-3" />
                Talla *
              </label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleInputChange("size", size)}
                    className={`rounded-lg border px-4 py-2 text-xs font-medium transition-all ${
                      formData.size === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div>
              <label className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-foreground">
                <Sparkles className="h-3 w-3" />
                Estado *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {conditions.map((cond) => (
                  <button
                    key={cond.value}
                    onClick={() => handleInputChange("condition", cond.value)}
                    className={`rounded-lg border px-3 py-2 text-[11px] font-medium transition-all ${
                      formData.condition === cond.value
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {cond.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-foreground">Color</label>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleInputChange("color", color.value)}
                    className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] font-medium transition-all ${
                      formData.color === color.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-muted-foreground"
                    }`}
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-foreground">
                Descripcion
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                placeholder="Describe la prenda, materiales, defectos si los hay..."
                rows={3}
                className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-1.5 block text-[11px] font-bold text-foreground">
                Precio (EUR) *
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  placeholder="0.00"
                  className="w-full rounded-lg border border-input bg-background py-2.5 pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  EUR
                </span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`mt-6 w-full rounded-full py-3 text-sm font-bold transition-all ${
              isFormValid
                ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98]"
                : "cursor-not-allowed bg-secondary text-muted-foreground"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <Shirt className="h-4 w-4" />
              Publicar prenda
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
