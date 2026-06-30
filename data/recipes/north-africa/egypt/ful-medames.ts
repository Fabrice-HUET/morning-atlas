import type { Recipe } from '@/types/recipe'

export const fulMedamesRecipe = {
  slug: 'ful-medames',
  title: 'Ful medames rapide',
  localName: 'Ful medames, ful mudammas, foul medames',
  countrySlugs: ['egypt-ful-medames'],
  originLabel: 'Egypte',
  shortDescription:
    'Une version maison aux feves, cumin, citron et huile d olive, inspiree du petit-dejeuner populaire egyptien.',
  longDescription:
    'Cette version rapide utilise des feves cuites pour retrouver une base simple de ful medames. Les assaisonnements et accompagnements restent variables selon les familles, les quartiers et les vendeurs.',
  ingredients: [
    '1 grande boite de feves cuites',
    '1 gousse d ail',
    '1 cuillere a cafe de cumin',
    '1 citron',
    '2 cuilleres a soupe d huile d olive',
    'Sel et poivre',
    'Persil',
    'Pain plat',
    'Option : tomate, oeuf dur, pickles',
  ],
  ingredientSlugs: ['fava-beans', 'garlic', 'cumin', 'lemon', 'olive-oil', 'parsley', 'flatbread', 'eggs', 'pickles'],
  steps: [
    'Egoutter partiellement les feves en gardant un peu de jus.',
    'Faire chauffer les feves dans une petite casserole.',
    'Ajouter l ail ecrase, le cumin, le sel et le poivre.',
    'Ecraser legerement une partie des feves pour obtenir une texture plus cremeuse.',
    'Ajouter un filet d huile d olive et du jus de citron.',
    'Servir avec persil, pain plat et eventuellement un oeuf dur.',
  ],
  prepTimeMinutes: 10,
  cookTimeMinutes: 15,
  estimatedTimeMinutes: 25,
  difficulty: 'easy',
  servings: 2,
  type: 'Plat de legumineuses',
  tags: ['traditional-breakfast', 'protein-rich', 'comfort-food', 'easy-at-home'],
  tagSlugs: ['traditional-breakfast', 'protein-rich', 'comfort-food', 'easy-at-home', 'egypt', 'ful-medames'],
  categorySlugs: ['breakfasts-of-africa', 'savory', 'hearty', 'traditional', 'legume-breakfasts', 'easy-to-recreate'],
  featured: true,
  recreateAtHomeLevel: 'easy',
  notes:
    'Version simplifiee avec feves en conserve. Les versions aux feves seches demandent trempage et cuisson longue.',
  seoTitle: 'Ful Medames : le petit-dejeuner egyptien aux feves',
  seoDescription:
    'Decouvre le ful medames, un plat egyptien souvent associe au petit-dejeuner : feves fondantes, cumin, citron, huile d olive et pain plat.',
  reviewNotes: [
    'Rester prudent sur les liens directs entre la recette actuelle et l Egypte ancienne.',
    'Les accompagnements changent beaucoup selon les familles, quartiers et vendeurs.',
  ],
  sources: [
    {
      title: 'Experience Egypt - Gastronomia',
      url: 'https://www.experienceegypt.eg/it/attraction-details/315/gastronomia-',
      publisher: 'Experience Egypt',
      note: 'Contexte du petit-dejeuner egyptien avec ful medames, taameya, fromages et pain baladi.',
    },
    {
      title: 'How to make the perfect ful medames',
      url: 'https://www.theguardian.com/food/2023/nov/22/how-to-make-the-perfect-ful-medames-recipe-felicity-cloake',
      publisher: 'The Guardian',
      note: 'Variantes, assaisonnements, accompagnements et nuances regionales.',
    },
    {
      title: 'Must Eat Foods When Visiting Cairo',
      url: 'https://egyptianstreets.com/2016/02/25/must-eat-foods-when-visiting-cairo/',
      publisher: 'Egyptian Streets',
      note: 'Usage courant au petit-dejeuner et presence en street food.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol de ful medames egyptien avec feves brunes legerement ecrasees, filet d huile d olive, citron, persil, cumin, pain baladi a cote, petite cuillere, motifs inspires du matin au Caire, palette chaude moka, beige, ocre et vert doux, composition propre pour fiche editoriale, sans photorealisme, sans texte, sans logo, rendu doux et artisanal.',
  needsReview: true,
} satisfies Recipe
