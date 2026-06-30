import type { Recipe } from '@/types/recipe'

export const msemenRecipe = {
  slug: 'msemen',
  title: 'Msemen marocain',
  localName: 'Msemen, msemmen, rghaif, rghayef, mlawi, melaoui',
  countrySlugs: ['morocco-msemen'],
  originLabel: 'Maroc',
  shortDescription:
    'Une crepe feuilletee marocaine, doree a la poele, souvent servie avec miel, beurre ou the a la menthe.',
  longDescription:
    'Le msemen repose sur une pate a base de farine et de semoule fine, etalee tres finement puis pliee en couches. Il peut etre servi au petit-dejeuner, a l heure du the ou comme snack familial, en version sucree ou salee.',
  ingredients: [
    '250 g de farine',
    '100 g de semoule fine',
    '1/2 cuillere a cafe de sel',
    '180 a 220 ml d eau tiede',
    'Huile neutre',
    '30 g de beurre fondu',
    'Miel pour servir',
  ],
  ingredientSlugs: ['flour', 'semolina', 'oil', 'butter', 'honey'],
  steps: [
    'Melanger farine, semoule fine et sel.',
    'Ajouter l eau progressivement jusqu a obtenir une pate souple.',
    'Petrir 8 a 10 minutes.',
    'Diviser en petites boules huilees et laisser reposer 15 a 20 minutes.',
    'Etaler chaque boule tres finement avec les mains huilees.',
    'Badigeonner d un peu de beurre fondu et saupoudrer legerement de semoule.',
    'Plier en carre puis aplatir doucement.',
    'Cuire a la poele chaude quelques minutes de chaque cote.',
    'Servir tiede avec miel, beurre ou fromage frais.',
  ],
  prepTimeMinutes: 50,
  cookTimeMinutes: 20,
  estimatedTimeMinutes: 70,
  difficulty: 'medium',
  servings: 6,
  type: 'Galette feuilletee',
  tags: ['traditional-breakfast', 'vegetarian-friendly', 'comfort-food', 'sweet-morning'],
  tagSlugs: ['traditional-breakfast', 'sweet-morning', 'comfort-food', 'morocco', 'msemen', 'rghaif', 'mint-tea'],
  categorySlugs: ['breakfasts-of-africa', 'sweet', 'savory', 'traditional', 'family-friendly', 'flatbreads'],
  featured: true,
  recreateAtHomeLevel: 'medium',
  notes:
    'Les noms et formes proches varient selon les regions. La levure apparait dans certaines recettes mais pas systematiquement.',
  seoTitle: 'Msemen marocain : la crepe feuilletee du petit-dejeuner',
  seoDescription:
    'Decouvre le msemen, une crepe feuilletee marocaine souvent servie au petit-dejeuner ou avec le the, en version miel, beurre ou farcie salee.',
  reviewNotes: [
    'Les noms msemen, rghaif, mlawi ou meloui peuvent varier selon les regions et familles.',
    'Ne pas presenter le msemen comme uniquement marocain dans son principe, car des preparations proches existent au Maghreb.',
  ],
  sources: [
    {
      title: 'Moroccan Cuisine: Recipe for Msemen',
      url: 'https://www.moroccoworldnews.com/2012/06/151488/moroccan-cuisine-recipe-for-msemen/',
      publisher: 'Morocco World News',
      note: 'Noms proches, usages au petit-dejeuner ou snack, accompagnements.',
    },
    {
      title: 'Msemen Recipe - Square Moroccan Pancakes or Rghaif',
      url: 'https://tasteofmaroc.com/msemen-recipe/',
      publisher: 'Taste of Maroc',
      note: 'Technique de pate fine, surface huilee, beurre, semoule et pliage.',
    },
    {
      title: 'Travel info - Moroccan Food & Drink',
      url: 'https://www.visitmorocco.com/en/travel-info/food-drinks',
      publisher: 'Visit Morocco',
      note: 'Contexte culturel du the a la menthe marocain.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style carnet de voyage culinaire, pile de msemen marocains carres, dores et legerement feuilletes, petit bol de miel, verre de the a la menthe fumant, assiette artisanale, motifs discrets inspires du Maghreb, ambiance matin doux, palette moka, sable, miel, vert menthe, composition editoriale propre, sans photorealisme, sans texte, sans logo.',
  needsReview: true,
} satisfies Recipe
