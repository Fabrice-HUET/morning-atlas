import type { Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://morning-atlas.fr'),
  title: 'Morning Atlas — Petits-déjeuners du monde',
  description: 'Découvrir le monde à travers les petits-déjeuners.',
  openGraph: {
    title: 'Morning Atlas',
    description: 'Découvrir le monde à travers les petits-déjeuners.',
    url: 'https://morning-atlas.fr',
    siteName: 'Morning Atlas',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
