import type { BreakfastStyle, DifficultyToRecreate, IngredientType } from '@/types/taxonomy'

// Libellés français des enums techniques, pour ne jamais afficher les valeurs brutes (easy, grain…).
// Les valeurs stockées dans data/ restent inchangées.

export const difficultyLabels: Record<DifficultyToRecreate, string> = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Difficile',
}

export const ingredientTypeLabels: Record<IngredientType, string> = {
  grain: 'Céréale',
  dairy: 'Produit laitier',
  fruit: 'Fruit',
  beverage: 'Boisson',
  protein: 'Protéine',
  spice: 'Épice',
  bread: 'Pain',
  legume: 'Légumineuse',
  condiment: 'Condiment',
  pastry: 'Viennoiserie',
  vegetable: 'Légume',
  meat: 'Viande',
  fish: 'Poisson',
  seed: 'Graine',
}

export const breakfastStyleLabels: Record<BreakfastStyle, string> = {
  sweet: 'Sucré',
  savory: 'Salé',
  hearty: 'Copieux',
  quick: 'Rapide',
  healthy: 'Sain',
  family: 'Familial',
  brunch: 'Brunch',
  'street-food': 'Street food',
  traditional: 'Traditionnel',
}

// Accès sûrs : repli sur la valeur brute si une clé manquait (ne casse jamais l'affichage).
export function difficultyLabel(value: DifficultyToRecreate): string {
  return difficultyLabels[value] ?? value
}

export function ingredientTypeLabel(value: IngredientType): string {
  return ingredientTypeLabels[value] ?? value
}

export function breakfastStyleLabel(value: BreakfastStyle): string {
  return breakfastStyleLabels[value] ?? value
}
