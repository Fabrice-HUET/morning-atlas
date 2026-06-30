import type { Recipe } from '@/types/recipe'

import { DEFAULT_DESCRIPTION, SITE_NAME, absoluteUrl, breakfastImageUrl } from '@/lib/seo'

type JsonLd = Record<string, unknown>

type BreadcrumbItem = {
  name: string
  path: string
}

type ItemListEntry = {
  name: string
  path: string
}

type WebPageJsonLdOptions = {
  name: string
  description: string
  path: string
}

type ItemListJsonLdOptions = {
  name: string
  path: string
  items: ItemListEntry[]
}

export function serializeJsonLd(jsonLd: JsonLd | JsonLd[]) {
  return JSON.stringify(jsonLd).replace(/</g, '\\u003c')
}

export function buildWebSiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: absoluteUrl('/'),
    description: DEFAULT_DESCRIPTION,
  }
}

export function buildOrganizationJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: absoluteUrl('/'),
    description: DEFAULT_DESCRIPTION,
  }
}

export function buildWebPageJsonLd({ name, description, path }: WebPageJsonLdOptions): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: absoluteUrl(path),
  }
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function buildItemListJsonLd({ name, path, items }: ItemListJsonLdOptions): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    url: absoluteUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  }
}

export function buildRecipeJsonLd(recipe: Recipe): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    description: recipe.shortDescription,
    image: breakfastImageUrl(recipe.slug),
    recipeCuisine: recipe.originLabel,
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step) => ({
      '@type': 'HowToStep',
      text: step,
    })),
    url: absoluteUrl(`/recipes/${recipe.slug}`),
    mainEntityOfPage: absoluteUrl(`/recipes/${recipe.slug}`),
  }
}
