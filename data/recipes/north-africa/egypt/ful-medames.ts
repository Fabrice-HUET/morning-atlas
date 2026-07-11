import type { Recipe } from '@/types/recipe'

export const fulMedamesRecipe = {
  slug: 'ful-medames',
  title: 'Ful medames rapide',
  localName: 'Ful medames, ful mudammas, foul medames',
  countrySlugs: ['egypt-ful-medames'],
  originLabel: 'Égypte',
  shortDescription:
    "Une version maison aux fèves, cumin, citron et huile d'olive, inspirée du petit-déjeuner populaire égyptien.",
  longDescription:
    'Cette version rapide utilise des fèves cuites pour retrouver une base simple de ful medames. Les assaisonnements et accompagnements restent variables selon les familles, les quartiers et les vendeurs.',
  ingredients: [
    '1 grande boite de fèves cuites',
    "1 gousse d'ail",
    '1 cuillère à café de cumin',
    '1 citron',
    "2 cuillères à soupe d'huile d'olive",
    'Sel et poivre',
    'Persil',
    'Pain plat',
    'Option : tomate, œuf dur, pickles',
  ],
  ingredientSlugs: ['fava-beans', 'garlic', 'cumin', 'lemon', 'olive-oil', 'parsley', 'flatbread', 'eggs', 'pickles'],
  steps: [
    'Égoutter partiellement les fèves en gardant un peu de jus.',
    'Faire chauffer les fèves dans une petite casserole.',
    "Ajouter l'ail ecrase, le cumin, le sel et le poivre.",
    'Écraser légèrement une partie des fèves pour obtenir une texture plus crémeuse.',
    "Ajouter un filet d'huile d'olive et du jus de citron.",
    'Servir avec persil, pain plat et éventuellement un œuf dur.',
  ],
  prepTimeMinutes: 10,
  cookTimeMinutes: 15,
  estimatedTimeMinutes: 25,
  difficulty: 'easy',
  servings: 2,
  type: 'Plat de légumineuses',
  tags: ['traditional-breakfast', 'protein-rich', 'comfort-food', 'easy-at-home'],
  categorySlugs: ['breakfasts-of-africa', 'savory', 'hearty', 'traditional', 'legume-breakfasts', 'easy-to-recreate'],
  featured: true,
  recreateAtHomeLevel: 'easy',
  notes:
    'Version simplifiée avec fèves en conserve. Les versions aux fèves seches demandent trempage et cuisson longue.',
  seoTitle: 'Ful Medames : le petit-déjeuner égyptien aux fèves',
  seoDescription:
    "Découvre le ful medames, un plat égyptien souvent associé au petit-déjeuner : fèves fondantes, cumin, citron, huile d'olive et pain plat.",
  reviewNotes: [
    "Rester prudent sur les liens directs entre la recette actuelle et l'Égypte ancienne.",
    'Les accompagnements changent beaucoup selon les familles, quartiers et vendeurs.',
  ],
  sources: [
    {
      title: 'Experience Egypt - Gastronomia',
      url: 'https://www.experienceegypt.eg/it/attraction-details/315/gastronomia-',
      publisher: 'Experience Egypt',
      note: 'Contexte du petit-déjeuner égyptien avec ful medames, taameya, fromages et pain baladi.',
    },
    {
      title: 'How to make the perfect ful medames',
      url: 'https://www.theguardian.com/food/2023/nov/22/how-to-make-the-perfect-ful-medames-recipe-felicity-cloake',
      publisher: 'The Guardian',
      note: 'Variantes, assaisonnements, accompagnements et nuances régionales.',
    },
    {
      title: 'Must Eat Foods When Visiting Cairo',
      url: 'https://egyptianstreets.com/2016/02/25/must-eat-foods-when-visiting-cairo/',
      publisher: 'Egyptian Streets',
      note: 'Usage courant au petit-déjeuner et présence en street food.',
    },
  ],
  illustrationPrompt:
    "Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol de ful medames égyptien avec fèves brunes légèrement écrasées, filet d'huile d'olive, citron, persil, cumin, pain baladi à cote, petite cuillère, motifs inspirés du matin au Caire, palette chaude moka, beige, ocre et vert doux, composition propre pour fiche éditoriale, sans photoréalisme, sans texte, sans logo, rendu doux et artisanal.",
  needsReview: false,
} satisfies Recipe
