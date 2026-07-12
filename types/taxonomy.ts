export type BreakfastStyle =
  | 'sweet'
  | 'savory'
  | 'hearty'
  | 'quick'
  | 'healthy'
  | 'family'
  | 'brunch'
  | 'street-food'
  | 'traditional'

export type DifficultyToRecreate = 'easy' | 'medium' | 'hard'

export type IngredientType =
  | 'grain'
  | 'dairy'
  | 'fruit'
  | 'beverage'
  | 'protein'
  | 'spice'
  | 'bread'
  | 'legume'
  | 'condiment'
  | 'pastry'
  | 'vegetable'
  | 'meat'
  | 'fish'
  | 'seed'

export type Category = {
  slug: string
  name: string
  description: string
  // Court texte éditorial (2-4 phrases) pour les catégories les plus liées.
  intro?: string
}

export type Ingredient = {
  slug: string
  name: string
  description: string
  type: IngredientType
}

export type Tag = {
  slug: string
  label: string
  description: string
}
