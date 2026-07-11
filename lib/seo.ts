import type { Metadata } from 'next'

export const SITE_URL = 'https://morning-atlas.fr'
export const SITE_NAME = 'Morning Atlas'
export const DEFAULT_DESCRIPTION = 'Découvrir le monde à travers les petits-déjeuners.'

// Image sociale par défaut de la marque (servie à URL stable par app/og-default/route.tsx).
export const DEFAULT_OG_IMAGE = '/og-default'

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  // Titre déjà complet (ex. la home) : ignore le template global « %s — Morning Atlas ».
  titleAbsolute?: boolean
  // Pour les segments qui fournissent leur propre image (ex. /creator via opengraph-image) :
  // ne pas injecter l'image de marque par défaut, pour ne pas l'écraser.
  skipDefaultImage?: boolean
}

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

export function breakfastImageUrl(slug: string) {
  return absoluteUrl(`/images/breakfasts/${slug}.webp`)
}

export function buildPageMetadata({
  title,
  description,
  path,
  type = 'website',
  image,
  titleAbsolute = false,
  skipDefaultImage = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  // Le <title> du document s'appuie sur le template global (sauf titre absolu).
  // Les titres sociaux (OG/Twitter) portent la marque en toutes lettres.
  const brandedTitle = titleAbsolute ? title : `${title} — ${SITE_NAME}`
  const usesDefaultImage = !image && !skipDefaultImage
  const resolvedImage = image ?? (skipDefaultImage ? undefined : DEFAULT_OG_IMAGE)
  const images = resolvedImage
    ? [
        {
          url: absoluteUrl(resolvedImage),
          // Image de marque : 1200×630 PNG. Image spécifique de recette/pays : visuel WebP local.
          ...(usesDefaultImage ? { width: 1200, height: 630, type: 'image/png' } : { width: 1200, height: 900 }),
          alt: brandedTitle,
        },
      ]
    : undefined

  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      // Une image OG de marque existe par défaut, donc grande carte partout.
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      ...(resolvedImage ? { images: [absoluteUrl(resolvedImage)] } : {}),
    },
  }
}
