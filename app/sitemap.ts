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
  { path: '/creator', priority: 0.5 },
] as const

// Exclusions temporaires basées sur l’audit `docs/TAXONOMY_SEO_AUDIT.md`.
// Ces pages restent accessibles et maillées, mais ne sont plus signalées dans le sitemap.
const INGREDIENT_SLUGS_EXCLUDED_FROM_SITEMAP = [
  'fish',
  'meat',
  'pastry',
  'porridge',
  'protein',
  'soup',
  'spices',
  'vegetable',
  'akara',
  'amasi',
  'baladi-bread',
  'byenda',
  'cereal-porridge',
  'chakalaka',
  'cocoyam',
  'cocoyam-leaves',
  'egusi',
  'fermented-fish',
  'g-nut-sauce',
  'grains-of-selim',
  'green-bell-pepper',
  'ground-meat',
  'guinea-pepper',
  'herbs',
  'kachumbari',
  'maas',
  'mielie-meal',
  'mint-tea',
  'moi-moi',
  'offal',
  'shaobing',
  'sweet-potatoes',
  'xylopia-aethiopica',
] as const

const ingredientSlugsExcludedFromSitemap = new Set<string>(
  INGREDIENT_SLUGS_EXCLUDED_FROM_SITEMAP,
)

function getIngredientsIncludedInSitemap() {
  const ingredientSlugsIncludedInSitemap = new Set<string>()

  return ingredients.filter((ingredient) => {
    if (ingredientSlugsExcludedFromSitemap.has(ingredient.slug)) {
      return false
    }

    if (ingredientSlugsIncludedInSitemap.has(ingredient.slug)) {
      return false
    }

    ingredientSlugsIncludedInSitemap.add(ingredient.slug)

    return true
  })
}

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
    ...getIngredientsIncludedInSitemap().map((ingredient) => ({
      url: absoluteUrl(`/ingredients/${ingredient.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
