import type { Recipe } from '@/types/recipe'

export const boterhamMetHagelslagRecipe = {
  slug: 'boterham-met-hagelslag',
  title: 'Boterham met hagelslag',
  localName: 'Boterham met hagelslag',
  countrySlugs: ['netherlands-hagelslag'],
  originLabel: 'Pays-Bas',
  shortDescription:
    'Une tartine néerlandaise simple et sucrée avec pain, beurre et hagelslag, ces vermicelles souvent chocolatés.',
  longDescription:
    'Le boterham met hagelslag est une tartine très simple : une tranche de pain, une couche de beurre ou margarine, puis des vermicelles chocolatés ou sucres. Le beurre sert autant au goût qu a faire tenir les vermicelles. Aux Pays-Bas, cette tartine est souvent associée au petit-déjeuner ou au déjeuner rapide, surtout dans les familles, sans représenter le seul petit-déjeuner néerlandais.',
  ingredients: [
    '1 ou 2 tranches de pain',
    'Beurre doux ou demi-sel selon goût',
    'Hagelslag chocolate',
    'Lait ou café optionnel',
  ],
  ingredientSlugs: [
    'white-bread',
    'whole-wheat-bread',
    'butter',
    'margarine',
    'hagelslag',
    'chocolate-sprinkles',
    'dark-chocolate',
    'milk-chocolate',
    'white-chocolate',
    'vruchtenhagel',
    'vlokken',
    'milk',
    'coffee',
  ],
  steps: [
    'Prendre une tranche de pain frais.',
    'Tartiner une fine couche de beurre.',
    'Saupoudrer généreusement de hagelslag.',
    'Couper la tartine en deux si souhaite.',
    'Manger assez vite pour éviter que les vermicelles tombent partout.',
  ],
  prepTimeMinutes: 5,
  cookTimeMinutes: 0,
  estimatedTimeMinutes: 5,
  difficulty: 'easy',
  servings: 1,
  type: 'Tartine sucrée',
  tags: ['sweet-morning', 'easy-at-home', 'family-meal', 'quick-breakfast'],
  categorySlugs: [
    'breakfasts-of-europe',
    'sweet',
    'bread-breakfasts',
    'quick',
    'family-friendly',
    'kid-friendly-breakfasts',
  ],
  featured: false,
  recreateAtHomeLevel: 'easy',
  notes:
    'Le hagelslag est très associé aux Pays-Bas, mais les petits-déjeuners néerlandais incluent aussi fromage, charcuterie, yaourt, muesli et fruits.',
  seoTitle: 'Hagelslag : la tartine sucrée du petit-déjeuner néerlandais',
  seoDescription:
    'Découvre le boterham met hagelslag, une tartine néerlandaise au beurre et vermicelles chocolatés, souvent servie au petit-déjeuner ou au déjeuner.',
  reviewNotes: [
    "Le hagelslag est aussi présent en Belgique, au Suriname, en Indonesie et dans d'anciennes zones liées à l'histoire néerlandaise.",
    'Toutes les tartines sucrées néerlandaises ne sont pas au hagelslag.',
    "Les récits d'origine autour de Venco, Venz et De Ruijter doivent rester prudents.",
    'Ne pas présenter comme le petit-déjeuner de tous les Néerlandais.',
  ],
  sources: [
    {
      title: 'Dutch Quirk 11: Eat hagelslag for breakfast',
      url: 'https://dutchreview.com/dutch-quirks/dutch-quirk-11-eat-hagelslag-for-breakfast/',
      publisher: 'DutchReview',
      note: 'Usage courant du hagelslag sur pain beurre.',
    },
    {
      title: 'A Hailstorm of Chocolate in the Morning',
      url: 'https://roadsandkingdoms.com/2015/a-hailstorm-of-chocolate-in-the-morning/',
      publisher: 'Roads & Kingdoms',
      note: 'Histoire liée à Venco, Amsterdam City Archives et diffusion après-guerre.',
    },
    {
      title: 'A brief history of Dutch sprinkles a.k.a. hagelslag',
      url: 'https://www.iamexpat.nl/lifestyle/lifestyle-news/brief-history-dutch-sprinkles-aka-hagelslag',
      publisher: 'IamExpat',
      note: 'Origine de 1919 et sens du nom hagelslag.',
    },
    {
      title: 'Dutch cuisine',
      url: 'https://en.wikipedia.org/wiki/Dutch_cuisine',
      publisher: 'Wikipedia',
      note: 'Source de synthèse pour replacer le petit-déjeuner néerlandais dans un ensemble plus large.',
    },
  ],
  illustrationPrompt:
    'Illustration flat chaleureuse style atlas culinaire et carnet de voyage, tartine néerlandaise avec pain beurre et hagelslag chocolate, quelques vermicelles tombes sur une assiette, pot de beurre, boite stylisée de sprinkles sans marque, verre de lait et tasse de café en arrière-plan, ambiance cuisine familiale aux Pays-Bas le matin, palette moka mousse, brun chocolat, crème beurre, beige pain, bleu doux, composition simple et joyeuse, sans photoréalisme, sans texte, sans logo.',
  needsReview: false,
} satisfies Recipe
