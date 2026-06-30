import type { Recipe } from '@/types/recipe'

export const kosaiRecipe = {
  slug: 'kosai',
  title: 'Kosai',
  localName: 'Kosai, proche de akara, koose ou koose selon les regions',
  countrySlugs: ['nigeria-hausa-kosai'],
  originLabel: 'Nigeria, contexte haoussa',
  shortDescription:
    'Des beignets sales de haricots cornille, mixes avec oignon et piment, puis frits jusqu a devenir dores.',
  longDescription:
    'Le kosai est un beignet de haricots frits, prepare a partir de haricots cornille decortiques, mixes avec oignon, piment et sel. Dans le contexte haoussa et nord-nigerian, il est souvent associe a un petit-dejeuner populaire de rue, parfois servi avec une bouillie chaude comme le koko. La preparation circule plus largement au Nigeria et en Afrique de l Ouest sous des noms et formes proches.',
  ingredients: [
    '250 g de haricots cornille secs',
    '1 petit oignon',
    '1 petit piment',
    '1/2 poivron rouge optionnel',
    'Sel',
    'Huile de friture',
    'Un peu d eau pour mixer',
  ],
  ingredientSlugs: ['black-eyed-peas', 'onion', 'pepper', 'bell-pepper', 'salt', 'vegetable-oil', 'water'],
  steps: [
    'Faire tremper les haricots 2 a 4 heures, ou plus longtemps pour faciliter le decorticage.',
    'Frotter les haricots dans l eau pour retirer une partie des peaux.',
    'Rincer plusieurs fois pour enlever les peaux qui flottent.',
    'Mixer les haricots avec l oignon, le piment, le sel et tres peu d eau.',
    'Fouetter ou melanger la pate quelques minutes pour l aerer.',
    'Faire chauffer l huile dans une casserole.',
    'Deposer de petites cuillerees de pate dans l huile chaude.',
    'Frire jusqu a ce que les beignets soient dores.',
    'Egoutter sur papier absorbant et servir chaud.',
  ],
  prepTimeMinutes: 35,
  cookTimeMinutes: 10,
  estimatedTimeMinutes: 45,
  difficulty: 'medium',
  servings: 4,
  type: 'Beignet de legumineuses',
  tags: ['savory-morning', 'protein-rich', 'street-food', 'comfort-food'],
  tagSlugs: ['nigeria', 'hausa', 'kosai', 'akara', 'black-eyed-peas', 'beans', 'street-food', 'fried', 'pepper', 'breakfast-porridge'],
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
  featured: true,
  recreateAtHomeLevel: 'medium',
  notes:
    'La recette est simple dans l idee, mais le trempage, le decorticage et la friture demandent un peu de pratique.',
  seoTitle: 'Kosai : les beignets de haricots du petit-dejeuner haoussa',
  seoDescription:
    'Decouvre le kosai, un beignet sale de haricots souvent associe au petit-dejeuner de rue dans le nord du Nigeria, proche de l akara.',
  reviewNotes: [
    'Le lien exact entre kosai, akara et koose doit rester nuance.',
    'Les sources directes sur kosai en contexte haoussa sont moins nombreuses que celles sur akara.',
    'Ne pas presenter le kosai comme le petit-dejeuner des Haoussa au singulier absolu.',
  ],
  sources: [
    {
      title: 'Akara (Nigerian Black-Eyed Pea Fritters) Recipe',
      url: 'https://www.seriouseats.com/akara-5537111',
      publisher: 'Serious Eats',
      note: 'Base technique : haricots cornille, pate assaisonnee, petit-dejeuner, vente de rue, pain ou bouillie.',
    },
    {
      title: 'Nigerian Kosai To Start the New Year Right',
      url: 'https://africanchop.com/kosai/',
      publisher: 'African Chop',
      note: 'Entree specifique kosai, nourriture de marche ou de rue, haricots decortiques, oignon et piment.',
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
      note: 'Source secondaire a utiliser avec prudence pour l association koko da kosai.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, petits beignets kosai dores dans une assiette emaillee, texture croustillante suggeree, bol de bouillie chaude a cote, quelques haricots cornille, oignon rouge et piment en decor, ambiance marche du matin au nord du Nigeria, palette moka mousse, dore, creme, rouge piment et brun chaud, composition editoriale propre, sans photorealisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
