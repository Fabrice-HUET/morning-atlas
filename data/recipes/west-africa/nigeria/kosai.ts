import type { Recipe } from '@/types/recipe'

export const kosaiRecipe = {
  slug: 'kosai',
  title: 'Kosai',
  localName: 'Kosai, proche de akara, koose ou koose selon les régions',
  countrySlugs: ['nigeria-hausa-kosai'],
  originLabel: 'Nigeria, contexte haoussa',
  shortDescription:
    "Des beignets sales de haricots cornille, mixes avec oignon et piment, puis frits jusqu'à devenir dorés.",
  longDescription:
    "Le kosai est un beignet de haricots frits, prépare à partir de haricots cornille décortiqués, mixes avec oignon, piment et sel. Dans le contexte haoussa et nord-nigerian, il est souvent associé à un petit-déjeuner populaire de rue, parfois servi avec une bouillie chaude comme le koko. La préparation circule plus largement au Nigeria et en Afrique de l'ouest sous des noms et formes proches.",
  ingredients: [
    '250 g de haricots cornille secs',
    '1 petit oignon',
    '1 petit piment',
    '1/2 poivron rouge optionnel',
    'Sel',
    'Huile de friture',
    "Un peu d'eau pour mixer",
  ],
  ingredientSlugs: ['black-eyed-peas', 'onion', 'pepper', 'bell-pepper', 'salt', 'vegetable-oil', 'water'],
  steps: [
    'Faire tremper les haricots 2 à 4 heures, ou plus longtemps pour faciliter le decorticage.',
    "Frotter les haricots dans l'eau pour retirer une partie des peaux.",
    'Rincer plusieurs fois pour enlever les peaux qui flottent.',
    "Mixer les haricots avec l'oignon, le piment, le sel et très peu d'eau.",
    "Fouetter ou mélanger la pâte quelques minutes pour l'aérer.",
    "Faire chauffer l'huile dans une casserole.",
    "Deposer de petites cuillerees de pâte dans l'huile chaude.",
    "Frire jusqu'à ce que les beignets soient dorés.",
    'Égoutter sur papier absorbant et servir chaud.',
  ],
  prepTimeMinutes: 35,
  cookTimeMinutes: 10,
  estimatedTimeMinutes: 45,
  difficulty: 'medium',
  servings: 4,
  type: 'Beignet de légumineuses',
  tags: ['savory-morning', 'protein-rich', 'street-food', 'comfort-food'],
  categorySlugs: [
    'breakfasts-of-africa',
    'west-african-breakfasts',
    'savory',
    'street-breakfast',
    'hearty',
    'legume-breakfasts',
    'protein-rich-breakfasts',
    'fried-breakfasts',
  ],
  featured: false,
  recreateAtHomeLevel: 'medium',
  notes:
    "La recette est simple dans l'idée, mais le trempage, le decorticage et la friture demandent un peu de pratique.",
  seoTitle: 'Kosai : les beignets de haricots du petit-déjeuner haoussa',
  seoDescription:
    "Découvre le kosai, un beignet sale de haricots souvent associé au petit-déjeuner de rue dans le nord du Nigeria, proche de l'akara.",
  reviewNotes: [
    'Le lien exact entre kosai, akara et koose doit rester nuance.',
    'Les sources directes sur kosai en contexte haoussa sont moins nombreuses que celles sur akara.',
    'Ne pas présenter le kosai comme le petit-déjeuner des Haoussa au singulier absolu.',
  ],
  sources: [
    {
      title: 'Akara (Nigerian Black-Eyed Pea Fritters) Recipe',
      url: 'https://www.seriouseats.com/akara-5537111',
      publisher: 'Serious Eats',
      note: 'Base technique : haricots cornille, pâte assaisonnée, petit-déjeuner, vente de rue, pain ou bouillie.',
    },
    {
      title: 'Nigerian Kosai To Start the New Year Right',
      url: 'https://africanchop.com/kosai/',
      publisher: 'African Chop',
      note: 'Entree spécifique kosai, nourriture de marche ou de rue, haricots décortiqués, oignon et piment.',
    },
    {
      title: 'Akara (Beans Cake)',
      url: 'https://allnigerianfoods.com/akara-beans-cake/',
      publisher: 'All Nigerian Foods',
      note: 'Usage nigerian large, accompagnements pap, custard, pain et variations.',
    },
    {
      title: 'Koko Da Kosai: Traditional Hausa Breakfast',
      url: 'https://www.oneindia.com/lifestyle/koko-da-kosai-traditional-hausa-breakfast-of-fermented-corn-porridge-and-bean-fritters-011-7966182.html',
      publisher: 'OneIndia',
      note: "Source secondaire à utiliser avec prudence pour l'association koko da kosai.",
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, petits beignets kosai dorés dans une assiette emaillee, texture croustillante suggérée, bol de bouillie chaude à cote, quelques haricots cornille, oignon rouge et piment en décor, ambiance marche du matin au nord du Nigeria, palette moka mousse, doré, crème, rouge piment et brun chaud, composition éditoriale propre, sans photoréalisme, sans texte, sans logo.',
  needsReview: false,
} satisfies Recipe
