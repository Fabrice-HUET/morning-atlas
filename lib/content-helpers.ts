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

export function getFeaturedRecipes(limit = 4) {
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

export function getGuidesForCountry(countrySlug: string) {
  return guides.filter((guide) => guide.relatedCountrySlugs.includes(countrySlug))
}
