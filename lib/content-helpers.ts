import { categories } from '@/data/categories'
import { countries } from '@/data/countries'
import { guides } from '@/data/guides'
import { ingredients } from '@/data/ingredients'
import { recipes } from '@/data/recipes'
import { tags } from '@/data/tags'

export function getCountryBySlug(slug: string) {
  return countries.find((country) => country.slug === slug)
}

export function getRecipeBySlug(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug)
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}

export function getIngredientBySlug(slug: string) {
  return ingredients.find((ingredient) => ingredient.slug === slug)
}

export function getTagBySlug(slug: string) {
  return tags.find((tag) => tag.slug === slug)
}

export function getCountriesBySlugs(slugs: string[]) {
  return slugs.map(getCountryBySlug).filter((country) => country !== undefined)
}

export function getRecipesBySlugs(slugs: string[]) {
  return slugs.map(getRecipeBySlug).filter((recipe) => recipe !== undefined)
}

export function getCategoriesBySlugs(slugs: string[]) {
  return slugs.map(getCategoryBySlug).filter((category) => category !== undefined)
}

export function getIngredientsBySlugs(slugs: string[]) {
  return slugs.map(getIngredientBySlug).filter((ingredient) => ingredient !== undefined)
}

export function getTagsBySlugs(slugs: string[]) {
  return slugs.map(getTagBySlug).filter((tag) => tag !== undefined)
}

export function getFeaturedCountries(limit = 6) {
  const featuredSlugs = [
    'morocco-msemen',
    'japan-rice-miso-soup',
    'mexico-huevos-rancheros',
    'turkey-menemen',
    'singapore-kaya-toast',
    'france-tartines',
  ]

  return getCountriesBySlugs(featuredSlugs).slice(0, limit)
}

export function getFeaturedRecipes(limit = 6) {
  return recipes.filter((recipe) => recipe.featured).slice(0, limit)
}

export function getCountriesByCategory(categorySlug: string) {
  return countries.filter((country) => country.categorySlugs.includes(categorySlug))
}

export function getCountriesByIngredient(ingredientSlug: string) {
  return countries.filter((country) => country.ingredientSlugs.includes(ingredientSlug))
}

export function getRecipesByCategory(categorySlug: string) {
  return recipes.filter((recipe) => recipe.categorySlugs?.includes(categorySlug))
}

export function getRecipesByIngredient(ingredientSlug: string) {
  return recipes.filter((recipe) => recipe.ingredientSlugs?.includes(ingredientSlug))
}

// Seuil d'indexation d'une page ingrédient : nombre minimal de contenus liés (pays + recettes).
// En dessous, la page reste accessible et maillée, mais passe en noindex et sort du sitemap.
export const INGREDIENT_INDEXABLE_MIN_CONTENT = 2

export function getIngredientContentScore(ingredientSlug: string) {
  return getCountriesByIngredient(ingredientSlug).length + getRecipesByIngredient(ingredientSlug).length
}

export function isIngredientIndexable(ingredientSlug: string) {
  return getIngredientContentScore(ingredientSlug) >= INGREDIENT_INDEXABLE_MIN_CONTENT
}

// Seuil (plus strict) pour figurer sur la page index /ingredients : uniquement les ingrédients
// réellement structurants. On ne liste pas les 410 pages, seulement les plus reliées.
export const INGREDIENT_INDEX_MIN_CONTENT = 3

export function getIngredientsForIndex() {
  return ingredients
    .filter((ingredient) => getIngredientContentScore(ingredient.slug) >= INGREDIENT_INDEX_MIN_CONTENT)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'))
}

export function getGuidesForCountry(countrySlug: string) {
  return guides.filter((guide) => guide.relatedCountrySlugs.includes(countrySlug))
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug)
}

export function getRecipesForGuide(relatedCountrySlugs: string[]) {
  const recipeSlugs = getCountriesBySlugs(relatedCountrySlugs).flatMap((country) => country.recipeSlugs)
  return getRecipesBySlugs(Array.from(new Set(recipeSlugs)))
}
