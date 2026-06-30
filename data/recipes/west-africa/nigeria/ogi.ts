import type { Recipe } from '@/types/recipe'

export const ogiRecipe = {
  slug: 'ogi',
  title: 'Ogi',
  localName: 'Ogi, akamu, pap, koko',
  countrySlugs: ['nigeria-yoruba-ogi'],
  originLabel: 'Nigeria, contexte yoruba',
  shortDescription:
    'Une bouillie de cereales fermentees, douce et legerement acidulee, souvent servie chaude au petit-dejeuner.',
  longDescription:
    'L ogi est une bouillie fermentee tres presente dans les habitudes alimentaires nigerianes. Elle est traditionnellement preparee a partir de mais, de sorgho ou de millet trempes, moulus, filtres puis fermentes. Une fois la base prete, elle est cuite avec de l eau chaude jusqu a devenir lisse, cremeuse et legerement acidulee.',
  ingredients: [
    '1/2 tasse de pate d ogi ou poudre d ogi',
    '1/4 tasse d eau froide',
    '2 a 2,5 tasses d eau bouillante',
    'Option : lait',
    'Option : sucre, miel ou dattes mixees',
  ],
  ingredientSlugs: ['corn', 'sorghum', 'millet', 'water', 'milk', 'sugar', 'honey', 'dates'],
  steps: [
    'Melanger la pate ou poudre d ogi avec un peu d eau froide pour eviter les grumeaux.',
    'Faire bouillir de l eau.',
    'Verser progressivement l eau chaude sur le melange en remuant sans arret.',
    'Remettre quelques minutes a feu doux si besoin, jusqu a obtenir une texture lisse.',
    'Ajuster l epaisseur avec un peu d eau chaude.',
    'Ajouter lait, sucre ou miel si souhaite.',
    'Servir chaud, seul ou avec akara, kosai, moi moi ou pain.',
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 5,
  estimatedTimeMinutes: 10,
  difficulty: 'easy',
  servings: 2,
  type: 'Bouillie fermentee',
  tags: ['traditional-breakfast', 'comfort-food', 'family-meal', 'sweet-morning'],
  tagSlugs: ['nigeria', 'yoruba', 'ogi', 'akamu', 'pap', 'koko', 'maize', 'sorghum', 'millet', 'fermented', 'porridge', 'comfort-food'],
  categorySlugs: [
    'breakfasts-of-africa',
    'west-african-breakfasts',
    'porridge-breakfasts',
    'fermented-breakfasts',
    'family-friendly',
    'quick-at-home',
    'healthy',
    'sweet',
  ],
  featured: true,
  recreateAtHomeLevel: 'easy',
  notes:
    'La preparation est facile avec une pate ou poudre prete. La fermentation maison demande plusieurs jours et davantage de pratique.',
  seoTitle: 'Ogi : la bouillie fermentee du petit-dejeuner nigerian',
  seoDescription:
    'Decouvre l ogi, une bouillie nigeriane a base de mais, sorgho ou millet fermente, souvent servie chaude au petit-dejeuner.',
  reviewNotes: [
    'Les noms ogi, akamu, pap et koko changent selon les regions, langues et familles.',
    'Ne pas presenter l ogi comme uniquement yoruba.',
    'Eviter les promesses medicales ; rester sur un plat leger, fermente et familial.',
  ],
  sources: [
    {
      title: 'Nutritional and sensory properties of co-fermented maize, millet and sorghum/soybean pap-(ogi)',
      url: 'https://medcraveonline.com/MOJFPT/nutritional-and-sensory-properties-of-co-fermented-maize-millet-and-sorghumsoybean-pap-ogi.html',
      publisher: 'MedCrave Online',
      note: 'Definition d ogi comme bouillie fluide de cereales fermentees, populaire au petit-dejeuner au Nigeria.',
    },
    {
      title: 'Nigerian Pap (Ogi / Akamu)',
      url: 'https://cheflolaskitchen.com/nigerian-pap/',
      publisher: "Chef Lola's Kitchen",
      note: 'Preparation domestique, cuisson, accompagnements et contexte familial contemporain.',
    },
    {
      title: 'Quality evaluation of powdered ogi produced from maize-sorghum and soybean flour blends in Nigeria',
      url: 'https://www.researchgate.net/publication/357311664_Quality_evaluation_of_powdered_ogi_produced_from_maize-sorghum_and_soybean_flour_blends_in_Nigeria',
      publisher: 'African Journal of Food, Agriculture, Nutrition and Development',
      note: 'Noms regionaux, cereales utilisees, usage comme cereal de petit-dejeuner et aliment complementaire.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol d ogi nigerian cremeux et fumant, texture lisse couleur creme pale, petite cruche de lait, quelques grains de mais, millet et sorgho en decor, deux petits beignets akara a cote, ambiance cuisine familiale du matin, palette moka mousse, creme, jaune mais, brun doux et rouge discret, composition simple pour fiche editoriale, sans photorealisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
