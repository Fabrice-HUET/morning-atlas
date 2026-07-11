import { categories } from '@/data/categories'
import { countries } from '@/data/countries'
import { ingredients } from '@/data/ingredients'
import { recipes } from '@/data/recipes'
import { tags } from '@/data/tags'

type Slugged = {
  slug: string
}

type MissingReference = {
  ownerSlug: string
  field: string
  missingSlugs: string[]
}

export type ContentIntegrityReport = {
  duplicateSlugs: {
    categories: string[]
    countries: string[]
    ingredients: string[]
    recipes: string[]
    tags: string[]
  }
  missingReferences: MissingReference[]
}

function findDuplicateSlugs(items: Slugged[]) {
  const seen = new Set<string>()
  const duplicates = new Set<string>()

  for (const item of items) {
    if (seen.has(item.slug)) {
      duplicates.add(item.slug)
    }

    seen.add(item.slug)
  }

  return Array.from(duplicates).sort()
}

function findMissingSlugs(referenceSlugs: string[], allowedSlugs: Set<string>) {
  return referenceSlugs.filter((slug) => !allowedSlugs.has(slug))
}

function getOptionalSlugArray(item: object, field: string) {
  const value = (item as Record<string, unknown>)[field]

  if (!Array.isArray(value)) {
    return []
  }

  return value.filter((slug): slug is string => typeof slug === 'string')
}

function pushMissingReference(
  missingReferences: MissingReference[],
  ownerSlug: string,
  field: string,
  referenceSlugs: string[],
  allowedSlugs: Set<string>,
) {
  const missingSlugs = findMissingSlugs(referenceSlugs, allowedSlugs)

  if (missingSlugs.length > 0) {
    missingReferences.push({
      ownerSlug,
      field,
      missingSlugs,
    })
  }
}

export function getContentIntegrityReport(): ContentIntegrityReport {
  const categorySlugs = new Set(categories.map((category) => category.slug))
  const countrySlugs = new Set(countries.map((country) => country.slug))
  const ingredientSlugs = new Set(ingredients.map((ingredient) => ingredient.slug))
  const recipeSlugs = new Set(recipes.map((recipe) => recipe.slug))
  const tagSlugs = new Set(tags.map((tag) => tag.slug))
  const missingReferences: MissingReference[] = []

  for (const country of countries) {
    pushMissingReference(
      missingReferences,
      country.slug,
      'ingredientSlugs',
      country.ingredientSlugs,
      ingredientSlugs,
    )
    pushMissingReference(missingReferences, country.slug, 'categorySlugs', country.categorySlugs, categorySlugs)
    pushMissingReference(missingReferences, country.slug, 'tagSlugs', country.tagSlugs, tagSlugs)
    pushMissingReference(missingReferences, country.slug, 'recipeSlugs', country.recipeSlugs, recipeSlugs)
  }

  for (const recipe of recipes) {
    pushMissingReference(missingReferences, recipe.slug, 'countrySlugs', recipe.countrySlugs, countrySlugs)
    pushMissingReference(
      missingReferences,
      recipe.slug,
      'ingredientSlugs',
      getOptionalSlugArray(recipe, 'ingredientSlugs'),
      ingredientSlugs,
    )
    pushMissingReference(
      missingReferences,
      recipe.slug,
      'categorySlugs',
      getOptionalSlugArray(recipe, 'categorySlugs'),
      categorySlugs,
    )
    pushMissingReference(missingReferences, recipe.slug, 'tags', recipe.tags, tagSlugs)
  }

  return {
    duplicateSlugs: {
      categories: findDuplicateSlugs(categories),
      countries: findDuplicateSlugs(countries),
      ingredients: findDuplicateSlugs(ingredients),
      recipes: findDuplicateSlugs(recipes),
      tags: findDuplicateSlugs(tags),
    },
    missingReferences,
  }
}
