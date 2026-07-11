import type { Metadata } from 'next'

export const SITE_URL = 'https://morning-atlas.fr'
export const SITE_NAME = 'Morning Atlas'
export const DEFAULT_DESCRIPTION = 'Découvrir le monde à travers les petits-déjeuners.'

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  // Titre déjà complet (ex. la home) : ignore le template global « %s — Morning Atlas ».
  titleAbsolute?: boolean
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
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  // Le <title> du document s'appuie sur le template global (sauf titre absolu).
  // Les titres sociaux (OG/Twitter) portent la marque en toutes lettres.
  const brandedTitle = titleAbsolute ? title : `${title} — ${SITE_NAME}`
  const images = image
    ? [
        {
          url: image,
          width: 1200,
          height: 900,
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
      card: image ? 'summary_large_image' : 'summary',
      title: brandedTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}
