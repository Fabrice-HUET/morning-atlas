import type { DifficultyToRecreate } from './taxonomy'

export type Recipe = {
  slug: string
  title: string
  countrySlugs: string[]
  originLabel: string
  shortDescription: string
  ingredients: string[]
  steps: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  difficulty: DifficultyToRecreate
  servings: number
  type: string
  tags: string[]
  featured: boolean
  recreateAtHomeLevel: DifficultyToRecreate
  notes: string
  needsReview: boolean
}
