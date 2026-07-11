import type { Metadata } from 'next'

import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo'
import { buildOrganizationJsonLd, buildWebSiteJsonLd, serializeJsonLd } from '@/lib/structured-data'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Morning Atlas — Petits-déjeuners du monde',
    template: '%s — Morning Atlas',
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = [buildWebSiteJsonLd(), buildOrganizationJsonLd()]

  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  )
}
