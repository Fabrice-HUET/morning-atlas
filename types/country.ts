import type { BreakfastStyle, DifficultyToRecreate } from './taxonomy'

export type CountryBreakfast = {
  slug: string
  country: string
  countryCode: string
  flagEmoji: string
  region: string
  continent: string
  heroTitle: string
  shortDescription: string
  breakfastName: string
  breakfastSubtitle: string
  typicalItems: string[]
  commonDrinks: string[]
  breakfastStyles: BreakfastStyle[]
  difficultyToRecreate: DifficultyToRecreate
  culturalNote: string
  funFact: string
  morningContext: string
  recipeSlugs: string[]
  ingredientSlugs: string[]
  categorySlugs: string[]
  tagSlugs: string[]
  isTraditional: boolean
  seoTitle: string
  seoDescription: string
  needsReview: boolean
}
