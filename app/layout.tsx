import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Tessia - L\'ingenierie Data & IA au service de la Supply Chain',
  description: 'Tessia developpe des solutions IA sur mesure pour optimiser vos operations, anticiper les risques et renforcer la resilience de votre supply chain.',
  icons: {
    icon: '/logo-tessia.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e27',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
