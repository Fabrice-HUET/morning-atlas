import type { Recipe } from '@/types/recipe'

export const cafeToubaRecipe = {
  slug: 'cafe-touba',
  title: 'Cafe Touba',
  localName: 'Cafe Touba',
  countrySlugs: ['senegal-cafe-touba'],
  originLabel: 'Senegal',
  shortDescription:
    'Un cafe senegalais epice, souvent prepare avec du robusta et du djar, servi sucre et vendu dans la rue.',
  longDescription:
    'Le Cafe Touba est une boisson chaude senegalaise a base de cafe torrefie avec du djar, une epice poivree issue du Xylopia aethiopica. La boisson est generalement filtree, souvent servie tres sucree, et vendue dans la rue, les marches ou de petits restaurants appeles tanganas.',
  ingredients: [
    '20 g de cafe moulu',
    '1 a 2 gousses de djar ou grains of Selim concassees',
    '300 ml d eau',
    'Sucre selon gout',
    'Option : 1 clou de girofle',
  ],
  ingredientSlugs: ['coffee', 'robusta-coffee', 'djar', 'water', 'sugar', 'cloves'],
  steps: [
    'Concasser legerement le djar.',
    'Melanger le cafe moulu avec le djar.',
    'Ajouter eventuellement un clou de girofle.',
    'Preparer comme un cafe filtre, avec filtre papier ou filtre tissu.',
    'Verser l eau chaude doucement.',
    'Sucrer selon le gout.',
    'Servir chaud.',
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 10,
  estimatedTimeMinutes: 15,
  difficulty: 'easy',
  servings: 2,
  type: 'Boisson cafe epicee',
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
    'La difficulte principale est de trouver le djar ou poivre de Guinee. Les ratios cafe, epice et sucre changent beaucoup.',
  seoTitle: 'Cafe Touba : le cafe epice emblematique du Senegal',
  seoDescription:
    'Decouvre le Cafe Touba, une boisson senegalaise a base de cafe et de djar, souvent associee au petit-dejeuner et a la culture de rue.',
  reviewNotes: [
    'Formuler l origine religieuse avec prudence.',
    'Ne pas presenter le Cafe Touba comme uniquement religieux.',
    'Eviter les affirmations medicales sur le djar ou les tanins.',
  ],
  sources: [
    {
      title: 'Study on Cafe Touba and kinkeliba preparation and consumption in Dakar',
      url: 'https://ajfand.net/Volume17/No4/Moussa15710.pdf',
      publisher: 'African Journal of Food, Agriculture, Nutrition and Development',
      note: 'Ingredients, filtration, petit-dejeuner, rue, tanganas et sucre.',
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
      note: 'Vente de rue, tanganas, preparation avec cafe, djar et geste de service.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, tasse de Cafe Touba senegalais fumant, petit filtre tissu, grains de cafe, gousses de djar / grains of Selim, clous de girofle, sucre dans une petite coupelle, ambiance stand de rue matinal a Dakar, palette moka mousse, brun cafe, beige sable, ocre, touches rouges et dorees, rendu artisanal et editorial, sans photorealisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
