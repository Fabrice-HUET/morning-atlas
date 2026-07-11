import type { Recipe } from '@/types/recipe'

export const ogiRecipe = {
  slug: 'ogi',
  title: 'Ogi',
  localName: 'Ogi, akamu, pap, koko',
  countrySlugs: ['nigeria-yoruba-ogi'],
  originLabel: 'Nigeria, contexte yoruba',
  shortDescription:
    'Une bouillie de céréales fermentées, douce et légèrement acidulée, souvent servie chaude au petit-déjeuner.',
  longDescription:
    "L'ogi est une bouillie fermentée très présenté dans les habitudes alimentaires nigerianes. Elle est traditionnellement préparée à partir de mais, de sorgho ou de millet trempes, moulus, filtrés puis fermentés. Une fois la base prete, elle est cuite avec de l'eau chaude jusqu'à devenir lisse, crémeuse et légèrement acidulée.",
  ingredients: [
    "1/2 tasse de pâte d'ogi ou poudre d'ogi",
    "1/4 tasse d'eau froide",
    "2 à 2,5 tasses d'eau bouillante",
    'Option : lait',
    'Option : sucre, miel ou dattes mixees',
  ],
  ingredientSlugs: ['corn', 'sorghum', 'millet', 'water', 'milk', 'sugar', 'honey', 'dates'],
  steps: [
    "Mélanger la pâte ou poudre d'ogi avec un peu d'eau froide pour eviter les grumeaux.",
    "Faire bouillir de l'eau.",
    "Verser progressivement l'eau chaude sur le mélange en remuant sans arret.",
    "Remettre quelques minutes à feu doux si besoin, jusqu'à obtenir une texture lisse.",
    "Ajuster l'epaisseur avec un peu d'eau chaude.",
    'Ajouter lait, sucre ou miel si souhaite.',
    'Servir chaud, seul ou avec akara, kosai, moi moi ou pain.',
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 5,
  estimatedTimeMinutes: 10,
  difficulty: 'easy',
  servings: 2,
  type: 'Bouillie fermentée',
  tags: ['traditional-breakfast', 'comfort-food', 'family-meal', 'sweet-morning'],
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
    'La préparation est facile avec une pâte ou poudre prete. La fermentation maison demande plusieurs jours et davantage de pratique.',
  seoTitle: 'Ogi : la bouillie fermentée du petit-déjeuner nigerian',
  seoDescription:
    "Découvre l'ogi, une bouillie nigeriane à base de mais, sorgho ou millet fermenté, souvent servie chaude au petit-déjeuner.",
  reviewNotes: [
    'Les noms ogi, akamu, pap et koko changent selon les régions, langues et familles.',
    "Ne pas présenter l'ogi comme uniquement yoruba.",
    'Eviter les promesses médicales ; rester sur un plat léger, fermenté et familial.',
  ],
  sources: [
    {
      title: 'Nutritional and sensory properties of co-fermented maize, millet and sorghum/soybean pap-(ogi)',
      url: 'https://medcraveonline.com/MOJFPT/nutritional-and-sensory-properties-of-co-fermented-maize-millet-and-sorghumsoybean-pap-ogi.html',
      publisher: 'MedCrave Online',
      note: "Définition d'ogi comme bouillie fluide de céréales fermentées, populaire au petit-déjeuner au Nigeria.",
    },
    {
      title: 'Nigerian Pap (Ogi / Akamu)',
      url: 'https://cheflolaskitchen.com/nigerian-pap/',
      publisher: "Chef Lola's Kitchen",
      note: 'Préparation domestique, cuisson, accompagnements et contexte familial contemporain.',
    },
    {
      title: 'Quality evaluation of powdered ogi produced from maize-sorghum and soybean flour blends in Nigeria',
      url: 'https://www.researchgate.net/publication/357311664_Quality_evaluation_of_powdered_ogi_produced_from_maize-sorghum_and_soybean_flour_blends_in_Nigeria',
      publisher: 'African Journal of Food, Agriculture, Nutrition and Development',
      note: 'Noms régionaux, céréales utilisées, usage comme cereal de petit-déjeuner et aliment complémentaire.',
    },
  ],
  illustrationPrompt:
    "Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol d'ogi nigerian crémeux et fumant, texture lisse couleur crème pale, petite cruche de lait, quelques grains de mais, millet et sorgho en décor, deux petits beignets akara à cote, ambiance cuisine familiale du matin, palette moka mousse, crème, jaune mais, brun doux et rouge discret, composition simple pour fiche éditoriale, sans photoréalisme, sans texte, sans logo.",
  needsReview: true,
} satisfies Recipe
