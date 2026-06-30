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
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)
  const images = image
    ? [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: title,
        },
      ]
    : undefined

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}
