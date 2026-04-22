import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'Indigo - Circular Fashion',
  description: 'Plataforma de moda circular para el intercambio de ropa de segunda mano. Ahorra litros de agua y cuida el planeta.',
  icons: {
    icon: '/logos/Indigo_Logo_Isotipo.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#1B3B6F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
