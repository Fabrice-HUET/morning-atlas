import type { MetadataRoute } from 'next'

import { categories } from '@/data/categories'
import { countries } from '@/data/countries'
import { ingredients } from '@/data/ingredients'
import { recipes } from '@/data/recipes'
import { absoluteUrl, breakfastImageUrl } from '@/lib/seo'

const staticRoutes = [
  { path: '/', priority: 1 },
  { path: '/about', priority: 0.7 },
  { path: '/countries', priority: 0.9 },
  { path: '/recipes', priority: 0.9 },
  { path: '/guides', priority: 0.7 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: 'weekly' as const,
      priority: route.priority,
    })),
    ...countries.map((country) => ({
      url: absoluteUrl(`/countries/${country.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...recipes.map((recipe) => ({
      url: absoluteUrl(`/recipes/${recipe.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      images: [breakfastImageUrl(recipe.slug)],
    })),
    ...categories.map((category) => ({
      url: absoluteUrl(`/categories/${category.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...ingredients.map((ingredient) => ({
      url: absoluteUrl(`/ingredients/${ingredient.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
