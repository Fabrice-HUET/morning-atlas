import type { Category } from '@/types/taxonomy'

export const categories = [
  {
    slug: 'sweet',
    name: 'Sucré',
    description: 'Petits-déjeuners ou préparations souvent associés à une note douce.',
    intro:
      'Les petits-déjeuners sucrés réunissent les matins tournés vers le pain et la confiture, les viennoiseries, les fruits ou les préparations lactées. Sucré et salé coexistent souvent dans une même culture.',
  },
  {
    slug: 'savory',
    name: 'Salé',
    description: 'Assiettes du matin construites autour de saveurs salées.',
    intro:
      'Les petits-déjeuners salés rassemblent les assiettes du matin construites autour d\'œufs, de légumes, de pain, de fromages ou de bouillons plutôt que de sucré. Leur place au petit-déjeuner varie fortement d\'une culture à l\'autre.',
  },
  {
    slug: 'hearty',
    name: 'Copieux',
    description: 'Petits-déjeuners nourrissants, adaptes aux longues matinées.',
    intro:
      'Les petits-déjeuners copieux misent sur un matin nourrissant et rassasiant, avec des féculents, des protéines ou plusieurs éléments dans l\'assiette. Leur fréquence dépend des habitudes et des occasions.',
  },
  {
    slug: 'quick',
    name: 'Rapide',
    description: 'Idees simples à assembler ou a servir sans longue préparation.',
    intro:
      'Des petits-déjeuners rapides à préparer ou à assembler, adaptés aux matins pressés. La rapidité tient souvent à peu d\'ingrédients ou à une préparation faite en amont.',
  },
  {
    slug: 'healthy',
    name: 'Sain',
    description: 'Options souvent associées à des produits frais ou peu transformes.',
    intro:
      'Des petits-déjeuners souvent perçus comme légers ou équilibrés — céréales complètes, fruits, laitages, légumes. La notion de « sain » reste relative et dépend des portions et du contexte.',
  },
  {
    slug: 'traditional',
    name: 'Traditionnel',
    description: 'Préparations rattachées à des habitudes locales ou familiales.',
    intro:
      'On réunit ici les petits-déjeuners perçus comme traditionnels ou emblématiques dans leur contexte. « Traditionnel » ne veut pas dire figé ni unique : les pratiques évoluent et cohabitent avec des habitudes plus contemporaines.',
  },
  {
    slug: 'brunch',
    name: 'Brunch',
    description: 'Préparations adaptees à un repas tardif entre petit-déjeuner et déjeuner.',
    intro:
      'Le brunch réunit des repas de matinée plus tardifs et sociaux, à mi-chemin entre petit-déjeuner et déjeuner. Sa forme et son horaire varient selon les cultures et les occasions.',
  },
  {
    slug: 'breakfasts-of-africa',
    name: "Petits-déjeuners d'Afrique",
    description: 'Fiches rattachées aux pays, régions et traditions culinaires africaines du matin.',
    intro:
      'Un premier tour des petits-déjeuners d\'Afrique, des bouillies de céréales aux beignets et aux plats mijotés. Le continent est immense : ces fiches ouvrent des pistes plutôt qu\'elles ne résument.',
  },
  {
    slug: 'breakfasts-of-asia',
    name: "Petits-déjeuners d'Asie",
    description: 'Fiches rattachées aux pays, régions et traditions culinaires asiatiques du matin.',
    intro:
      'Un aperçu des petits-déjeuners d\'Asie réunis ici, du riz aux nouilles en passant par les bouillons et les boissons chaudes. Le continent est vaste : ces fiches sont des points d\'entrée, pas un panorama exhaustif.',
  },
  {
    slug: 'breakfasts-of-europe',
    name: "Petits-déjeuners d'Europe",
    description: 'Fiches rattachées aux pays, régions et traditions culinaires europeennes du matin.',
    intro:
      'Les petits-déjeuners d\'Europe rassemblés ici vont du pain-beurre aux viennoiseries, en passant par les tartines et des préparations salées. Les habitudes varient beaucoup selon les pays et les régions.',
  },
  {
    slug: 'breakfasts-of-oceania',
    name: "Petits-déjeuners d'Océanie",
    description: "Fiches rattachées aux pays, îles et cultures culinaires du Pacifique et de l'Océanie.",
  },
  {
    slug: 'breakfasts-of-north-america',
    name: "Petits-déjeuners d'Amérique du Nord",
    description: 'Fiches rattachées au Canada, aux États-Unis et aux cultures culinaires nord-américaines du matin.',
  },
  {
    slug: 'breakfasts-of-central-america',
    name: "Petits-déjeuners d'Amérique centrale",
    description: "Fiches rattachées aux pays et cuisines matinales d'Amérique centrale.",
  },
  {
    slug: 'breakfasts-of-the-caribbean',
    name: 'Petits-déjeuners des Caraibes',
    description: 'Fiches rattachées aux îles, pays et cultures culinaires caribeennes du matin.',
  },
  {
    slug: 'breakfasts-of-south-america',
    name: "Petits-déjeuners d'Amérique du Sud",
    description: 'Fiches rattachées aux pays, régions et cultures culinaires sud-américaines du matin.',
  },
  {
    slug: 'east-asian-breakfasts',
    name: "Asie de l'est",
    description: "Petits-déjeuners rattachés aux cuisines d'Asie de l'est.",
  },
  {
    slug: 'southeast-asian-breakfasts',
    name: 'Asie du Sud-Est',
    description: "Petits-déjeuners rattachés aux cuisines d'Asie du Sud-Est.",
  },
  {
    slug: 'toast-breakfasts',
    name: 'Toasts',
    description: 'Petits-déjeuners construits autour de pain grillé, tartines ou sandwiches simples.',
  },
  {
    slug: 'australian-breakfasts',
    name: 'Australie',
    description: "Petits-déjeuners, brekkies et brunchs rattachés à l'Australie.",
  },
  {
    slug: 'cereal-breakfasts',
    name: 'Céréales',
    description: 'Bols de céréales, biscuits de ble et préparations rapides à base de céréales.',
  },
  {
    slug: 'kid-friendly-breakfasts',
    name: 'Enfants',
    description: "Petits-déjeuners simples, familiaux et souvent associés aux matins d'enfants.",
  },
  {
    slug: 'cafe-breakfasts',
    name: 'Café',
    description: 'Assiettes de petit-déjeuner ou brunch souvent servies dans des cafés.',
  },
  {
    slug: 'weekend-breakfasts',
    name: 'Week-end',
    description: 'Petits-déjeuners plus copieux, lents ou occasionnels du week-end.',
  },
  {
    slug: 'oat-breakfasts',
    name: 'Base avoine',
    description: "Porridges, mueslis et bols construits autour de l'avoine.",
  },
  {
    slug: 'open-sandwich-breakfasts',
    name: 'Tartines ouvertes',
    description: 'Petits-déjeuners construits autour de sandwichs ouverts ou tartines garnies.',
  },
  {
    slug: 'fruit-breakfasts',
    name: 'Fruits',
    description: 'Petits-déjeuners ou les fruits frais, secs ou rapes structurent le bol.',
  },
  {
    slug: 'cold-breakfasts',
    name: 'Froid',
    description: "Petits-déjeuners servis froids, assembles ou préparés à l'avance.",
  },
  {
    slug: 'winter-breakfasts',
    name: 'Hiver',
    description: 'Petits-déjeuners chauds ou reconfortants associés aux matins froids.',
  },
  {
    slug: 'classic-breakfasts',
    name: 'Classiques',
    description: "Petits-déjeuners simples, très reconnaissables et installes dans l'imaginaire local.",
  },
  {
    slug: 'yogurt-breakfasts',
    name: 'Base yaourt',
    description: 'Petits-déjeuners ou yaourt, laitage égoutté ou bol frais structure le repas.',
  },
  {
    slug: 'mediterranean-breakfasts',
    name: 'Méditerranéen',
    description: 'Petits-déjeuners rattachés aux produits et habitudes des cuisines mediterraneennes.',
  },
  {
    slug: 'grain-breakfasts',
    name: 'Base céréales',
    description: 'Petits-déjeuners construits autour de céréales cuites, grains ou bouillies.',
  },
  {
    slug: 'pastry-breakfasts',
    name: 'Pâtisseries',
    description: 'Petits-déjeuners ou viennoiseries, biscuits ou pâtisseries structurent le repas.',
  },
  {
    slug: 'andean-breakfasts',
    name: 'Andes',
    description: 'Petits-déjeuners rattachés aux régions andines et aux hauts plateaux.',
  },
  {
    slug: 'cheese-breakfasts',
    name: 'Base fromage',
    description: 'Petits-déjeuners ou fromage frais, salé ou tartinable structure le plat.',
  },
  {
    slug: 'diner-breakfasts',
    name: 'Dîner',
    description: 'Assiettes copieuses de style dîner, café de route ou petit restaurant familial.',
  },
  {
    slug: 'deli-breakfasts',
    name: 'Deli',
    description: 'Petits-déjeuners rattachés aux delis, comptoirs et sandwiches urbains.',
  },
  {
    slug: 'diaspora-breakfasts',
    name: 'Diaspora',
    description: 'Petits-déjeuners documentes aussi par des pratiques de diaspora et migrations culinaires.',
  },
  {
    slug: 'sweet-savory-breakfasts',
    name: 'Sucre-salé',
    description: 'Petits-déjeuners ou douceur naturelle et garnitures salées se repondent.',
  },
  {
    slug: 'chinese-breakfasts',
    name: 'Chine',
    description: 'Petits-déjeuners et repas matinaux rattachés aux cuisines chinoises.',
  },
  {
    slug: 'south-asian-breakfasts',
    name: 'Asie du Sud',
    description: "Petits-déjeuners rattachés aux cuisines d'Asie du Sud.",
  },
  {
    slug: 'indian-breakfasts',
    name: 'Inde',
    description: 'Petits-déjeuners et repas matinaux rattachés aux cuisines indiennes.',
  },
  {
    slug: 'middle-eastern-breakfasts',
    name: 'Moyen-Orient',
    description: 'Petits-déjeuners et assiettes du matin rattachés au Moyen-Orient.',
  },
  {
    slug: 'legume-breakfasts',
    name: 'Base légumineuses',
    description: 'Petits-déjeuners construits autour de fèves, pois chiches, haricots ou lentilles.',
  },
  {
    slug: 'flatbreads',
    name: 'Galettes et pains plats',
    description: 'Pains plats, crêpes, galettes et formes proches du matin.',
  },
  {
    slug: 'flatbread-breakfasts',
    name: 'Pains plats',
    description: 'Petits-déjeuners construits autour de pains plats, galettes ou ruti.',
  },
  {
    slug: 'stuffed-flatbreads',
    name: 'Pains plats farcis',
    description: 'Pains plats garnis ou farcis avant cuisson.',
  },
  {
    slug: 'bread-breakfasts',
    name: 'Pains du matin',
    description: "Petits-déjeuners ou un pain frais structure l'assiette.",
    intro:
      'Les petits-déjeuners autour du pain : tartines, pains plats, pains levés ou grillés, garnis de sucré comme de salé. Le type de pain et les garnitures dépendent des traditions locales.',
  },
  {
    slug: 'comfort-breakfasts',
    name: 'Confort',
    description: 'Préparations chaudes, rassasiantes ou familieres.',
  },
  {
    slug: 'leftover-breakfasts',
    name: 'Restes cuisines',
    description: 'Petits-déjeuners pratiques construits avec riz déjà cuit ou restes.',
  },
  {
    slug: 'soup-breakfasts',
    name: 'Soupes du matin',
    description: 'Petits-déjeuners ou soupe, bouillon ou élément liquide chaud structure le repas.',
  },
  {
    slug: 'quick-at-home',
    name: 'Rapide à la maison',
    description: 'Versions simplifiées realisables avec peu de temps ou des ingrédients faciles.',
  },
  {
    slug: 'west-african-breakfasts',
    name: "Afrique de l'ouest",
    description: "Petits-déjeuners rattachés aux pays, régions et cultures culinaires d'Afrique de l'ouest.",
  },
  {
    slug: 'protein-rich-breakfasts',
    name: 'Riche en protéines',
    description: 'Petits-déjeuners avec légumineuses, œufs, produits animaux ou autres bases proteinees.',
  },
  {
    slug: 'fried-breakfasts',
    name: 'Fritures du matin',
    description: 'Beignets, fritures et préparations dorées souvent servies chaudes.',
  },
  {
    slug: 'porridge-breakfasts',
    name: 'Bouillies',
    description: 'Bouillies, porridges et préparations semi-liquides du matin.',
  },
  {
    slug: 'fermented-breakfasts',
    name: 'Fermenté',
    description: 'Préparations ou la fermentation joue un rôle dans le goût ou la texture.',
  },
  {
    slug: 'breakfast-drinks',
    name: 'Boissons du matin',
    description: 'Boissons chaudes ou froides fortement associées au petit-déjeuner.',
  },
  {
    slug: 'steamed-breakfasts',
    name: 'Vapeur',
    description: 'Préparations du matin cuites ou rechauffees à la vapeur.',
  },
  {
    slug: 'southern-african-breakfasts',
    name: 'Afrique australe',
    description: "Petits-déjeuners rattachés aux pays et cultures culinaires d'Afrique australe.",
  },
  {
    slug: 'east-african-breakfasts',
    name: "Afrique de l'est",
    description: "Petits-déjeuners rattachés aux pays et cultures culinaires d'Afrique de l'est.",
  },
  {
    slug: 'horn-of-africa-breakfasts',
    name: "Corne de l'Afrique",
    description: "Petits-déjeuners rattachés aux cuisines de la Corne de l'Afrique.",
  },
  {
    slug: 'swahili-coast-breakfasts',
    name: 'Cote swahilie',
    description: 'Petits-déjeuners et snacks du matin lies aux habitudes de la cote swahilie.',
  },
  {
    slug: 'vegetable-based-breakfasts',
    name: 'Base légumes',
    description: 'Petits-déjeuners ou sauces, feuilles ou légumes structurent le plat.',
  },
  {
    slug: 'maize-breakfasts',
    name: 'Base mais',
    description: 'Préparations du matin construites autour du mais ou de la farine de mais.',
  },
  {
    slug: 'one-pot-breakfasts',
    name: 'Tout-en-un',
    description: 'Plats du matin cuisines dans une seule marmite avec base, sauce et accompagnements.',
  },
  {
    slug: 'family-friendly',
    name: 'Familial',
    description: "Formats faciles à partager autour d'une table.",
    intro:
      'Cette catégorie regroupe les petits-déjeuners que l\'on partage volontiers en famille : préparations accessibles, portions généreuses ou plats faciles à décliner selon les âges. Les usages varient selon les foyers — c\'est un point d\'entrée transversal, pas une règle.',
  },
  {
    slug: 'budget-friendly',
    name: 'Économique',
    description: 'Bases accessibles, populaires ou simples à adapter.',
  },
  {
    slug: 'easy-to-recreate',
    name: 'Facile à refaire',
    description: 'Préparations realistes dans une cuisine domestique.',
  },
  {
    slug: 'street-breakfast',
    name: 'Street breakfast',
    description: 'Classiques souvent croises dans la rue, les marches ou les echoppes.',
    intro:
      'Des petits-déjeuners que l\'on trouve dans la rue, aux étals ou aux comptoirs : pratiques, rapides et souvent liés au trajet du matin. L\'offre dépend fortement des villes et des saisons.',
  },
  {
    slug: 'tea-breakfast',
    name: 'Avec thé',
    description: 'Matins ou le thé tient une place centrale.',
  },
  {
    slug: 'coffee-breakfast',
    name: 'Avec café',
    description: "Petits-déjeuners ou le café accompagné souvent l'assiette.",
  },
  {
    slug: 'hotel-breakfasts',
    name: 'Hotel',
    description: 'Formats de petit-déjeuner lies aux buffets, hotels ou brunchs composes.',
  },
  {
    slug: 'rice-based',
    name: 'Base riz',
    description: 'Préparations dans lesquelles le riz structure le repas.',
    intro:
      'Des petits-déjeuners construits autour du riz — vapeur, en bouillie ou sauté, accompagné d\'éléments salés ou de soupe. Cette base est courante dans plusieurs cultures, avec de nombreuses variantes.',
  },
  {
    slug: 'bread-based',
    name: 'Base pain',
    description: 'Pains, galettes, tartines et variantes proches.',
  },
  {
    slug: 'egg-based',
    name: 'Base œufs',
    description: 'Assiettes ou les œufs sont fréquents ou structurants.',
    intro:
      'On réunit ici les petits-déjeuners construits autour de l\'œuf — brouillé, au plat, poché, en omelette ou mijoté avec des légumes. Assaisonnements et accompagnements changent d\'une région à l\'autre.',
  },
  {
    slug: 'tortilla-breakfasts',
    name: 'Base tortillas',
    description: 'Petits-déjeuners ou tortillas, maïs nixtamalise ou galettes proches structurent le plat.',
  },
  {
    slug: 'fish-breakfasts',
    name: 'Base poisson',
    description: "Petits-déjeuners ou poisson frais, salé, fume ou conserve structure l'assiette.",
  },
  {
    slug: 'national-dishes',
    name: 'Plats nationaux',
    description: 'Fiches associées à des plats officiellement ou fortement présentés comme nationaux.',
  },
  {
    slug: 'meat-breakfasts',
    name: 'Base viande',
    description: "Petits-déjeuners ou viande, charcuterie ou protéine animale structurent l'assiette.",
  },
] satisfies Category[]
