import type { Recipe } from '@/types/recipe'

export const putuPapRecipe = {
  slug: 'putu-pap',
  title: 'Putu pap',
  localName: 'Putu pap, phuthu, uphuthu, krummelpap',
  countrySlugs: ['south-africa-putu-pap'],
  originLabel: 'Afrique du Sud',
  shortDescription:
    'Une bouillie de mais sud-africaine à texture séché et granuleuse, servie avec lait et sucre ou en accompagnement sale.',
  longDescription:
    "Le putu pap, aussi appele phuthu ou krummelpap, est une préparation sud-africaine à base de maize meal ou mielie meal. Contrairement à une bouillie fluide, cette version est plus séché, granuleuse et émiettée, obtenue avec peu d'eau et une cuisson aerée.",
  ingredients: [
    '2 tasses de maize meal ou polenta blanche fine',
    "2,5 tasses d'eau",
    '1/2 cuillère à café de sel',
    '1 cuillère à soupe de beurre optionnel',
    'Pour servir : lait et sucre, ou sauce tomate-oignon, ou légumes',
  ],
  ingredientSlugs: ['maize-meal', 'water', 'salt', 'butter', 'milk', 'sugar', 'tomato-onion-relish'],
  steps: [
    "Faire bouillir l'eau avec le sel dans une casserole épaisse.",
    'Verser une partie de la farine de mais au centre de la casserole.',
    'Couvrir et laisser cuire quelques minutes sans trop remuer.',
    'Baisser le feu.',
    'Mélanger vigoureusement avec une cuillère en bois ou une fourchette.',
    'Ajouter le reste de farine si besoin pour obtenir une texture granuleuse.',
    'Couvrir et cuire à feu doux environ 25 à 30 minutes.',
    'Remuer ou aerer plusieurs fois à la fourchette.',
    'Ajouter un peu de beurre si souhaite.',
    'Servir chaud avec lait et sucre, ou en version salée.',
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 35,
  estimatedTimeMinutes: 40,
  difficulty: 'easy',
  servings: 2,
  type: 'Bouillie de mais granuleuse',
  tags: ['traditional-breakfast', 'comfort-food', 'family-meal'],
  tagSlugs: ['south-africa', 'putu-pap', 'phuthu', 'uphuthu', 'krummelpap', 'pap', 'maize-meal', 'mielie-meal', 'amasi', 'braai', 'comfort-food'],
  categorySlugs: [
    'breakfasts-of-africa',
    'southern-african-breakfasts',
    'porridge-breakfasts',
    'maize-breakfasts',
    'traditional',
    'family-friendly',
    'budget-friendly',
  ],
  featured: true,
  recreateAtHomeLevel: 'easy',
  notes:
    'La recette est simple, mais obtenir la texture granuleuse demande un peu de pratique.',
  seoTitle: 'Putu Pap : la bouillie de mais sud-africaine',
  seoDescription:
    'Découvre le putu pap, une version granuleuse du pap sud-africain, parfois servie au petit-déjeuner avec lait et sucre ou en accompagnement sale.',
  reviewNotes: [
    'Garder Putu Pap comme entree de départ tout en mentionnant phuthu, uphuthu et krummelpap.',
    'Ne pas présenter putu pap comme uniquement un petit-déjeuner.',
    'Rappeler que les textures du pap varient beaucoup.',
  ],
  sources: [
    {
      title: 'Traditional South African Phuthu/Uphuthu/Krummel Pap',
      url: 'https://marriamsayed.com/2020/09/08/traditional-south-african-phuthu-uphuthu-krummel-pap/',
      publisher: 'Foodeva Marsay',
      note: 'Noms locaux, texture crumbly et usages avec lait, sucre, amasi, braai ou légumes.',
    },
    {
      title: 'Traditional African food in South Africa',
      url: 'https://www.southafrica.net/cd/en/travel/article/traditional-african-food-in-south-africa',
      publisher: 'South African Tourism',
      note: 'Pap comme aliment de base, textures et usages au petit-déjeuner ou avec viande et légumes.',
    },
    {
      title: 'Recipe for an African Dish: Putu Pap',
      url: 'https://www.theinternationalkitchen.com/recipes/putu-pap-dish/',
      publisher: 'The International Kitchen',
      note: 'Description du putu pap comme préparation de mais séché et crumbly.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol de putu pap sud-africain à texture granuleuse, petite cruche de lait, cuillère de sucre, bol d amasi, en arrière-plan discret une sauce tomate-oignon et une touche de chakalaka, ambiance matin familial, palette moka mousse, crème mais, beige, brun doux, rouge tomate, composition éditoriale claire, sans photoréalisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
