import type { BreakfastStyle, DifficultyToRecreate } from './taxonomy'
import type { ContentSource, SimplifiedRecipeDraft } from './editorial'

export type CountryBreakfast = {
  slug: string
  country: string
  countryCode: string
  flagEmoji: string
  region: string
  continent: string
  heroTitle: string
  shortDescription: string
  longDescription?: string
  breakfastName: string
  localName?: string
  breakfastSubtitle: string
  typicalItems: string[]
  commonDrinks: string[]
  associatedDrink?: string
  breakfastStyles: BreakfastStyle[]
  difficultyToRecreate: DifficultyToRecreate
  culturalNote: string
  culturalContext?: string
  funFact: string
  morningContext: string
  usualUsage?: string
  variants?: string[]
  simplifiedRecipe?: SimplifiedRecipeDraft
  recipeSlugs: string[]
  ingredientSlugs: string[]
  categorySlugs: string[]
  tagSlugs: string[]
  isTraditional: boolean
  seoTitle: string
  seoDescription: string
  reviewNotes?: string[]
  sources?: ContentSource[]
  illustrationPrompt?: string
  needsReview: boolean
}
