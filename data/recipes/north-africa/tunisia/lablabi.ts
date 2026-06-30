import type { Recipe } from '@/types/recipe'

export const lablabiRecipe = {
  slug: 'lablabi',
  title: 'Lablabi tunisien',
  localName: 'Lablabi, lablebi',
  countrySlugs: ['tunisia-lablabi'],
  originLabel: 'Tunisie',
  shortDescription:
    'Une soupe tunisienne populaire aux pois chiches, pain, cumin, ail, harissa, citron et huile d olive.',
  longDescription:
    'Le lablabi est une soupe ou un ragout tunisien a base de pois chiches, souvent servi chaud dans des bols personnalises. Il peut inclure oeuf, thon, capres, citron, harissa, pickles ou herbes selon les versions.',
  ingredients: [
    '1 grande boite de pois chiches',
    '2 tranches de pain rassis ou pain de campagne',
    '1 gousse d ail',
    '1 cuillere a cafe de cumin',
    '1 cuillere a cafe de harissa',
    '1/2 citron',
    '2 cuilleres a soupe d huile d olive',
    'Sel et poivre',
    'Option : 1 oeuf mollet par personne',
    'Option : thon, capres, persil',
  ],
  ingredientSlugs: ['chickpeas', 'stale-bread', 'garlic', 'cumin', 'harissa', 'lemon', 'olive-oil', 'eggs', 'tuna', 'capers', 'parsley'],
  steps: [
    'Faire chauffer les pois chiches avec leur jus et un peu d eau.',
    'Ajouter l ail ecrase, le cumin, le sel et le poivre.',
    'Laisser mijoter 10 a 15 minutes.',
    'Dechirer le pain en morceaux dans un bol.',
    'Verser les pois chiches et le bouillon chaud sur le pain.',
    'Ajouter harissa, citron et huile d olive.',
    'Completer avec oeuf mollet, thon, capres ou herbes si souhaite.',
    'Melanger dans le bol avant de manger.',
  ],
  prepTimeMinutes: 10,
  cookTimeMinutes: 20,
  estimatedTimeMinutes: 30,
  difficulty: 'easy',
  servings: 2,
  type: 'Soupe de pois chiches',
  tags: ['traditional-breakfast', 'savory-morning', 'comfort-food', 'protein-rich'],
  tagSlugs: ['traditional-breakfast', 'savory-morning', 'comfort-food', 'protein-rich', 'tunisia', 'lablabi', 'harissa', 'spicy'],
  categorySlugs: ['breakfasts-of-africa', 'savory', 'hearty', 'street-breakfast', 'legume-breakfasts', 'comfort-breakfasts', 'quick-at-home'],
  featured: true,
  recreateAtHomeLevel: 'easy',
  notes:
    'Version rapide avec pois chiches en conserve. Avec pois chiches secs, prevoir trempage et cuisson longue.',
  seoTitle: 'Lablabi tunisien : la soupe de pois chiches du matin',
  seoDescription:
    'Decouvre le lablabi, une soupe tunisienne populaire a base de pois chiches, pain, cumin, harissa et citron, souvent servie chaude au petit-dejeuner.',
  reviewNotes: [
    'L origine historique exacte est incertaine et doit rester presentee avec prudence.',
    'La version de Bizerte merite une recherche dediee avant une fiche separee.',
  ],
  sources: [
    {
      title: 'Lablabi (Tunisian Chickpea Stew)',
      url: 'https://www.themediterraneandish.com/lablabi-tunisian-chickpea-stew/',
      publisher: 'The Mediterranean Dish',
      note: 'Description du lablabi comme soupe ou ragout tunisien aux pois chiches.',
    },
    {
      title: 'Lablabi - Tunisian chickpea soup/stew',
      url: 'https://www.carolinescooking.com/lablabi-tunisian-chickpea-soup-stew/',
      publisher: "Caroline's Cooking",
      note: 'Prudence sur les origines, stands populaires, cafes et ingredients de base.',
    },
    {
      title: 'Lablabi (Tunisian Chickpea Soup)',
      url: 'https://www.seriouseats.com/mollie-katzens-lablabi-tunisian-chickpea-soup',
      publisher: 'Serious Eats',
      note: 'Version simple centree sur pois chiches, bouillon, ail, cumin et citron.',
    },
    {
      title: 'Harissa',
      url: 'https://www.britannica.com/topic/harissa',
      publisher: 'Encyclopedia Britannica',
      note: 'Contexte de la harissa comme condiment tunisien important.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, bol de lablabi tunisien fumant avec pois chiches, morceaux de pain, oeuf mollet, touche de harissa rouge, citron, huile d olive, capres et herbes, petite cuillere, ambiance matin d hiver mediterraneen, palette moka, creme, ocre, rouge harissa, vert olive, composition editoriale simple, sans photorealisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
