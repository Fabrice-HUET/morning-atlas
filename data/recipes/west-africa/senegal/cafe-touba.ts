import type { Recipe } from '@/types/recipe'

export const cafeToubaRecipe = {
  slug: 'cafe-touba',
  title: 'Café Touba',
  localName: 'Café Touba',
  countrySlugs: ['senegal-cafe-touba'],
  originLabel: 'Sénégal',
  shortDescription:
    'Un café sénégalais épice, souvent prépare avec du robusta et du djar, servi sucre et vendu dans la rue.',
  longDescription:
    'Le Café Touba est une boisson chaude sénégalaise à base de café torrefie avec du djar, une épice poivrée issue du Xylopia aethiopica. La boisson est généralement filtree, souvent servie très sucrée, et vendue dans la rue, les marches ou de petits restaurants appeles tanganas.',
  ingredients: [
    '20 g de café moulu',
    '1 à 2 gousses de djar ou grains of Selim concassees',
    "300 ml d'eau",
    'Sucre selon goût',
    'Option : 1 clou de girofle',
  ],
  ingredientSlugs: ['coffee', 'robusta-coffee', 'djar', 'water', 'sugar', 'cloves'],
  steps: [
    'Concasser légèrement le djar.',
    'Mélanger le café moulu avec le djar.',
    'Ajouter eventuellement un clou de girofle.',
    'Préparer comme un café filtre, avec filtre papier ou filtre tissu.',
    "Verser l'eau chaude doucement.",
    'Sucrer selon le goût.',
    'Servir chaud.',
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 10,
  estimatedTimeMinutes: 15,
  difficulty: 'easy',
  servings: 2,
  type: 'Boisson café épicée',
  tags: ['drink-included', 'traditional-breakfast', 'street-food'],
  tagSlugs: ['senegal', 'cafe-touba', 'coffee', 'robusta', 'djar', 'grains-of-selim', 'guinea-pepper', 'xylopia-aethiopica', 'spiced-coffee', 'mouride', 'touba'],
  categorySlugs: [
    'breakfasts-of-africa',
    'west-african-breakfasts',
    'breakfast-drinks',
    'coffee-breakfast',
    'street-breakfast',
    'traditional',
    'quick-at-home',
  ],
  featured: true,
  recreateAtHomeLevel: 'easy',
  notes:
    'La difficulte principale est de trouver le djar ou poivre de Guinee. Les ratios café, épice et sucre changent beaucoup.',
  seoTitle: 'Café Touba : le café épice emblématique du Sénégal',
  seoDescription:
    'Découvre le Café Touba, une boisson sénégalaise à base de café et de djar, souvent associée au petit-déjeuner et à la culture de rue.',
  reviewNotes: [
    'Formuler l origine religieuse avec prudence.',
    'Ne pas présenter le Café Touba comme uniquement religieux.',
    'Eviter les affirmations medicales sur le djar ou les tanins.',
  ],
  sources: [
    {
      title: 'Study on Cafe Touba and kinkeliba preparation and consumption in Dakar',
      url: 'https://ajfand.net/Volume17/No4/Moussa15710.pdf',
      publisher: 'African Journal of Food, Agriculture, Nutrition and Development',
      note: 'Ingrédients, filtration, petit-déjeuner, rue, tanganas et sucre.',
    },
    {
      title: 'What is Touba coffee & how do you prepare it?',
      url: 'https://perfectdailygrind.com/?p=99111',
      publisher: 'Perfect Daily Grind',
      note: 'Contexte historique, djar, variantes avec clou de girofle ou cardamome, consommation contemporaine.',
    },
    {
      title: 'Cafe Touba',
      url: 'https://www.atlasobscura.com/foods/cafe-touba-spiced-coffee',
      publisher: 'Gastro Obscura',
      note: 'Vente de rue, tanganas, préparation avec café, djar et geste de service.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, tasse de Café Touba sénégalais fumant, petit filtre tissu, grains de café, gousses de djar / grains of Selim, clous de girofle, sucre dans une petite coupelle, ambiance stand de rue matinal à Dakar, palette moka mousse, brun café, beige sable, ocre, touches rouges et dorées, rendu artisanal et éditorial, sans photoréalisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
