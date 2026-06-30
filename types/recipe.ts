import type { DifficultyToRecreate } from './taxonomy'
import type { ContentSource } from './editorial'

export type Recipe = {
  slug: string
  title: string
  localName?: string
  countrySlugs: string[]
  originLabel: string
  shortDescription: string
  longDescription?: string
  ingredients: string[]
  ingredientSlugs?: string[]
  steps: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  estimatedTimeMinutes?: number
  difficulty: DifficultyToRecreate
  servings: number
  type: string
  tags: string[]
  tagSlugs?: string[]
  categorySlugs?: string[]
  featured: boolean
  recreateAtHomeLevel: DifficultyToRecreate
  notes: string
  seoTitle?: string
  seoDescription?: string
  reviewNotes?: string[]
  sources?: ContentSource[]
  illustrationPrompt?: string
  needsReview: boolean
}
