import type { Recipe } from '@/types/recipe'

export const msemenRecipe = {
  slug: 'msemen',
  title: 'Msemen marocain',
  localName: 'Msemen, msemmen, rghaif, rghayef, mlawi, melaoui',
  countrySlugs: ['morocco-msemen'],
  originLabel: 'Maroc',
  shortDescription:
    'Une crêpe feuilletée marocaine, dorée à la poêle, souvent servie avec miel, beurre ou thé à la menthe.',
  longDescription:
    "Le msemen repose sur une pâte à base de farine et de semoule fine, étalée très finement puis pliée en couches. Il peut être servi au petit-déjeuner, à l'heure du thé ou comme snack familial, en version sucrée ou salée.",
  ingredients: [
    '250 g de farine',
    '100 g de semoule fine',
    '1/2 cuillère à café de sel',
    "180 à 220 ml d'eau tiède",
    'Huile neutre',
    '30 g de beurre fondu',
    'Miel pour servir',
  ],
  ingredientSlugs: ['flour', 'semolina', 'oil', 'butter', 'honey'],
  steps: [
    'Mélanger farine, semoule fine et sel.',
    "Ajouter l'eau progressivement jusqu'à obtenir une pâte souple.",
    'Pétrir 8 à 10 minutes.',
    'Diviser en petites boules huilées et laisser reposer 15 à 20 minutes.',
    'Étaler chaque boule très finement avec les mains huilées.',
    "Badigeonner d'un peu de beurre fondu et saupoudrer légèrement de semoule.",
    'Plier en carre puis aplatir doucement.',
    'Cuire à la poêle chaude quelques minutes de chaque cote.',
    'Servir tiède avec miel, beurre ou fromage frais.',
  ],
  prepTimeMinutes: 50,
  cookTimeMinutes: 20,
  estimatedTimeMinutes: 70,
  difficulty: 'medium',
  servings: 6,
  type: 'Galette feuilletée',
  tags: ['traditional-breakfast', 'vegetarian-friendly', 'comfort-food', 'sweet-morning'],
  tagSlugs: ['traditional-breakfast', 'sweet-morning', 'comfort-food', 'morocco', 'msemen', 'rghaif', 'mint-tea'],
  categorySlugs: ['breakfasts-of-africa', 'sweet', 'savory', 'traditional', 'family-friendly', 'flatbreads'],
  featured: true,
  recreateAtHomeLevel: 'medium',
  notes:
    'Les noms et formes proches varient selon les régions. La levure apparait dans certaines recettes mais pas systematiquement.',
  seoTitle: 'Msemen marocain : la crêpe feuilletée du petit-déjeuner',
  seoDescription:
    'Découvre le msemen, une crêpe feuilletée marocaine souvent servie au petit-déjeuner ou avec le thé, en version miel, beurre ou farcie salée.',
  reviewNotes: [
    'Les noms msemen, rghaif, mlawi ou meloui peuvent varier selon les régions et familles.',
    'Ne pas présenter le msemen comme uniquement marocain dans son principe, car des préparations proches existent au Maghreb.',
  ],
  sources: [
    {
      title: 'Moroccan Cuisine: Recipe for Msemen',
      url: 'https://www.moroccoworldnews.com/2012/06/151488/moroccan-cuisine-recipe-for-msemen/',
      publisher: 'Morocco World News',
      note: 'Noms proches, usages au petit-déjeuner ou snack, accompagnements.',
    },
    {
      title: 'Msemen Recipe - Square Moroccan Pancakes or Rghaif',
      url: 'https://tasteofmaroc.com/msemen-recipe/',
      publisher: 'Taste of Maroc',
      note: 'Technique de pâte fine, surface huilée, beurre, semoule et pliage.',
    },
    {
      title: 'Travel info - Moroccan Food & Drink',
      url: 'https://www.visitmorocco.com/en/travel-info/food-drinks',
      publisher: 'Visit Morocco',
      note: 'Contexte culturel du thé à la menthe marocain.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style carnet de voyage culinaire, pile de msemen marocains carres, dorés et légèrement feuilletes, petit bol de miel, verre de thé à la menthe fumant, assiette artisanale, motifs discrets inspirés du Maghreb, ambiance matin doux, palette moka, sable, miel, vert menthe, composition éditoriale propre, sans photoréalisme, sans texte, sans logo.',
  needsReview: false,
} satisfies Recipe
