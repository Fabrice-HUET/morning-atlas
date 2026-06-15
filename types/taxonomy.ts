export type BreakfastStyle =
  | 'sweet'
  | 'savory'
  | 'hearty'
  | 'quick'
  | 'healthy'
  | 'family'
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

export type Category = {
  slug: string
  name: string
  description: string
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
