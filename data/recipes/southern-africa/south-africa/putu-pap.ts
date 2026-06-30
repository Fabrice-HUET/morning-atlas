import type { Recipe } from '@/types/recipe'

export const putuPapRecipe = {
  slug: 'putu-pap',
  title: 'Putu pap',
  localName: 'Putu pap, phuthu, uphuthu, krummelpap',
  countrySlugs: ['south-africa-putu-pap'],
  originLabel: 'Afrique du Sud',
  shortDescription:
    'Une bouillie de mais sud-africaine a texture seche et granuleuse, servie avec lait et sucre ou en accompagnement sale.',
  longDescription:
    'Le putu pap, aussi appele phuthu ou krummelpap, est une preparation sud-africaine a base de maize meal ou mielie meal. Contrairement a une bouillie fluide, cette version est plus seche, granuleuse et emiettee, obtenue avec peu d eau et une cuisson aerée.',
  ingredients: [
    '2 tasses de maize meal ou polenta blanche fine',
    '2,5 tasses d eau',
    '1/2 cuillere a cafe de sel',
    '1 cuillere a soupe de beurre optionnel',
    'Pour servir : lait et sucre, ou sauce tomate-oignon, ou legumes',
  ],
  ingredientSlugs: ['maize-meal', 'water', 'salt', 'butter', 'milk', 'sugar', 'tomato-onion-relish'],
  steps: [
    'Faire bouillir l eau avec le sel dans une casserole epaisse.',
    'Verser une partie de la farine de mais au centre de la casserole.',
    'Couvrir et laisser cuire quelques minutes sans trop remuer.',
    'Baisser le feu.',
    'Melanger vigoureusement avec une cuillere en bois ou une fourchette.',
    'Ajouter le reste de farine si besoin pour obtenir une texture granuleuse.',
    'Couvrir et cuire a feu doux environ 25 a 30 minutes.',
    'Remuer ou aerer plusieurs fois a la fourchette.',
    'Ajouter un peu de beurre si souhaite.',
    'Servir chaud avec lait et sucre, ou en version salee.',
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
    'Decouvre le putu pap, une version granuleuse du pap sud-africain, parfois servie au petit-dejeuner avec lait et sucre ou en accompagnement sale.',
  reviewNotes: [
    'Garder Putu Pap comme entree de depart tout en mentionnant phuthu, uphuthu et krummelpap.',
    'Ne pas presenter putu pap comme uniquement un petit-dejeuner.',
    'Rappeler que les textures du pap varient beaucoup.',
  ],
  sources: [
    {
      title: 'Traditional South African Phuthu/Uphuthu/Krummel Pap',
      url: 'https://marriamsayed.com/2020/09/08/traditional-south-african-phuthu-uphuthu-krummel-pap/',
      publisher: 'Foodeva Marsay',
      note: 'Noms locaux, texture crumbly et usages avec lait, sucre, amasi, braai ou legumes.',
    },
    {
      title: 'Traditional African food in South Africa',
      url: 'https://www.southafrica.net/cd/en/travel/article/traditional-african-food-in-south-africa',
      publisher: 'South African Tourism',
      note: 'Pap comme aliment de base, textures et usages au petit-dejeuner ou avec viande et legumes.',
    },
    {
      title: 'Recipe for an African Dish: Putu Pap',
      url: 'https://www.theinternationalkitchen.com/recipes/putu-pap-dish/',
      publisher: 'The International Kitchen',
      note: 'Description du putu pap comme preparation de mais seche et crumbly.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol de putu pap sud-africain a texture granuleuse, petite cruche de lait, cuillere de sucre, bol d amasi, en arriere-plan discret une sauce tomate-oignon et une touche de chakalaka, ambiance matin familial, palette moka mousse, creme mais, beige, brun doux, rouge tomate, composition editoriale claire, sans photorealisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
