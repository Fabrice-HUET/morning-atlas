import type { MetadataRoute } from 'next'

import { categories } from '@/data/categories'
import { countries } from '@/data/countries'
import { ingredients } from '@/data/ingredients'
import { recipes } from '@/data/recipes'
import { isIngredientIndexable } from '@/lib/content-helpers'
import { absoluteUrl, breakfastImageUrl } from '@/lib/seo'

const staticRoutes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.7 },
  { path: '/countries', priority: 0.9 },
  { path: '/recipes', priority: 0.9 },
  { path: '/guides', priority: 0.7 },
  { path: '/categories', priority: 0.7 },
  { path: '/ingredients', priority: 0.6 },
  { path: '/creator', priority: 0.5 },
] as const

// Le sitemap n'inclut que les pages ingrédients indexables (seuil de contenus liés partagé avec
// `generateMetadata` via `isIngredientIndexable`). Les pages sous le seuil restent accessibles et
// maillées, mais passent en noindex et sortent du sitemap — plus aucune liste en dur à maintenir.
function getIngredientsIncludedInSitemap() {
  const seen = new Set<string>()

  return ingredients.filter((ingredient) => {
    if (seen.has(ingredient.slug) || !isIngredientIndexable(ingredient.slug)) {
      return false
    }

    seen.add(ingredient.slug)

    return true
  })
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Date de build : honnête pour un site SSG redéployé à chaque changement de contenu,
  // en attendant un vrai champ de date par fiche.
  const lastModified = new Date()

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: route.priority,
    })),
    ...countries.map((country) => ({
      url: absoluteUrl(`/countries/${country.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...recipes.map((recipe) => ({
      url: absoluteUrl(`/recipes/${recipe.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [breakfastImageUrl(recipe.slug)],
    })),
    ...categories.map((category) => ({
      url: absoluteUrl(`/categories/${category.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...getIngredientsIncludedInSitemap().map((ingredient) => ({
      url: absoluteUrl(`/ingredients/${ingredient.slug}`),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
