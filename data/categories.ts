import type { Category } from '@/types/taxonomy'

export const categories = [
  {
    slug: 'sweet',
    name: 'Sucre',
    description: 'Petits-dejeuners ou preparations souvent associes a une note douce.',
  },
  {
    slug: 'savory',
    name: 'Sale',
    description: 'Assiettes du matin construites autour de saveurs salees.',
  },
  {
    slug: 'hearty',
    name: 'Copieux',
    description: 'Petits-dejeuners nourrissants, adaptes aux longues matinees.',
  },
  {
    slug: 'quick',
    name: 'Rapide',
    description: 'Idees simples a assembler ou a servir sans longue preparation.',
  },
  {
    slug: 'healthy',
    name: 'Sain',
    description: 'Options souvent associees a des produits frais ou peu transformes.',
  },
  {
    slug: 'traditional',
    name: 'Traditionnel',
    description: 'Preparations rattachees a des habitudes locales ou familiales.',
  },
  {
    slug: 'brunch',
    name: 'Brunch',
    description: 'Preparations adaptees a un repas tardif entre petit-dejeuner et dejeuner.',
  },
  {
    slug: 'breakfasts-of-africa',
    name: 'Petits-dejeuners d Afrique',
    description: 'Fiches rattachees aux pays, regions et traditions culinaires africaines du matin.',
  },
  {
    slug: 'breakfasts-of-asia',
    name: 'Petits-dejeuners d Asie',
    description: 'Fiches rattachees aux pays, regions et traditions culinaires asiatiques du matin.',
  },
  {
    slug: 'breakfasts-of-europe',
    name: 'Petits-dejeuners d Europe',
    description: 'Fiches rattachees aux pays, regions et traditions culinaires europeennes du matin.',
  },
  {
    slug: 'breakfasts-of-oceania',
    name: 'Petits-dejeuners d Oceanie',
    description: 'Fiches rattachees aux pays, iles et cultures culinaires du Pacifique et de l Oceanie.',
  },
  {
    slug: 'breakfasts-of-north-america',
    name: 'Petits-dejeuners d Amerique du Nord',
    description: 'Fiches rattachees au Canada, aux Etats-Unis et aux cultures culinaires nord-americaines du matin.',
  },
  {
    slug: 'breakfasts-of-central-america',
    name: 'Petits-dejeuners d Amerique centrale',
    description: 'Fiches rattachees aux pays et cuisines matinales d Amerique centrale.',
  },
  {
    slug: 'breakfasts-of-the-caribbean',
    name: 'Petits-dejeuners des Caraibes',
    description: 'Fiches rattachees aux iles, pays et cultures culinaires caribeennes du matin.',
  },
  {
    slug: 'breakfasts-of-south-america',
    name: 'Petits-dejeuners d Amerique du Sud',
    description: 'Fiches rattachees aux pays, regions et cultures culinaires sud-americaines du matin.',
  },
  {
    slug: 'east-asian-breakfasts',
    name: 'Asie de l Est',
    description: 'Petits-dejeuners rattaches aux cuisines d Asie de l Est.',
  },
  {
    slug: 'southeast-asian-breakfasts',
    name: 'Asie du Sud-Est',
    description: 'Petits-dejeuners rattaches aux cuisines d Asie du Sud-Est.',
  },
  {
    slug: 'japanese-breakfasts',
    name: 'Japon',
    description: 'Petits-dejeuners et repas matinaux rattaches au Japon.',
  },
  {
    slug: 'korean-breakfasts',
    name: 'Coree',
    description: 'Petits-dejeuners et structures de repas rattaches a la Coree.',
  },
  {
    slug: 'turkish-breakfasts',
    name: 'Turquie',
    description: 'Petits-dejeuners, kahvalti et plats du matin rattaches a la Turquie.',
  },
  {
    slug: 'myanmar-breakfasts',
    name: 'Myanmar',
    description: 'Petits-dejeuners et repas du matin rattaches au Myanmar.',
  },
  {
    slug: 'indonesian-breakfasts',
    name: 'Indonesie',
    description: 'Petits-dejeuners, warung et plats du matin rattaches a l Indonesie.',
  },
  {
    slug: 'filipino-breakfasts',
    name: 'Philippines',
    description: 'Petits-dejeuners et assiettes du matin rattaches aux Philippines.',
  },
  {
    slug: 'singaporean-breakfasts',
    name: 'Singapour',
    description: 'Petits-dejeuners, kopitiams et repas matinaux rattaches a Singapour.',
  },
  {
    slug: 'malaysian-breakfasts',
    name: 'Malaisie',
    description: 'Petits-dejeuners et culture matinale rattaches a la Malaisie.',
  },
  {
    slug: 'kopitiam-breakfasts',
    name: 'Kopitiam',
    description: 'Petits-dejeuners associes aux coffee shops traditionnels d Asie du Sud-Est.',
  },
  {
    slug: 'toast-breakfasts',
    name: 'Toasts',
    description: 'Petits-dejeuners construits autour de pain grille, tartines ou sandwiches simples.',
  },
  {
    slug: 'australian-breakfasts',
    name: 'Australie',
    description: 'Petits-dejeuners, brekkies et brunchs rattaches a l Australie.',
  },
  {
    slug: 'fijian-breakfasts',
    name: 'Fidji',
    description: 'Petits-dejeuners, pains frits et habitudes matinales rattaches aux Fidji.',
  },
  {
    slug: 'cereal-breakfasts',
    name: 'Cereales',
    description: 'Bols de cereales, biscuits de ble et preparations rapides a base de cereales.',
  },
  {
    slug: 'kid-friendly-breakfasts',
    name: 'Enfants',
    description: 'Petits-dejeuners simples, familiaux et souvent associes aux matins d enfants.',
  },
  {
    slug: 'cafe-breakfasts',
    name: 'Cafe',
    description: 'Assiettes de petit-dejeuner ou brunch souvent servies dans des cafes.',
  },
  {
    slug: 'weekend-breakfasts',
    name: 'Week-end',
    description: 'Petits-dejeuners plus copieux, lents ou occasionnels du week-end.',
  },
  {
    slug: 'new-zealand-breakfasts',
    name: 'Nouvelle-Zelande',
    description: 'Petits-dejeuners et bols du matin rattaches a la Nouvelle-Zelande.',
  },
  {
    slug: 'polish-breakfasts',
    name: 'Pologne',
    description: 'Petits-dejeuners, tartines et assiettes familiales rattaches a la Pologne.',
  },
  {
    slug: 'swiss-breakfasts',
    name: 'Suisse',
    description: 'Petits-dejeuners, mueslis et habitudes matinales rattaches a la Suisse.',
  },
  {
    slug: 'oat-breakfasts',
    name: 'Base avoine',
    description: 'Porridges, mueslis et bols construits autour de l avoine.',
  },
  {
    slug: 'open-sandwich-breakfasts',
    name: 'Tartines ouvertes',
    description: 'Petits-dejeuners construits autour de sandwichs ouverts ou tartines garnies.',
  },
  {
    slug: 'fruit-breakfasts',
    name: 'Fruits',
    description: 'Petits-dejeuners ou les fruits frais, secs ou rapes structurent le bol.',
  },
  {
    slug: 'cold-breakfasts',
    name: 'Froid',
    description: 'Petits-dejeuners servis froids, assembles ou prepares a l avance.',
  },
  {
    slug: 'winter-breakfasts',
    name: 'Hiver',
    description: 'Petits-dejeuners chauds ou reconfortants associes aux matins froids.',
  },
  {
    slug: 'dutch-breakfasts',
    name: 'Pays-Bas',
    description: 'Petits-dejeuners, tartines et habitudes matinales rattaches aux Pays-Bas.',
  },
  {
    slug: 'spanish-breakfasts',
    name: 'Espagne',
    description: 'Petits-dejeuners, churrerias et douceurs matinales rattaches a l Espagne.',
  },
  {
    slug: 'french-breakfasts',
    name: 'France',
    description: 'Petits-dejeuners, tartines et habitudes domestiques rattaches a la France.',
  },
  {
    slug: 'classic-breakfasts',
    name: 'Classiques',
    description: 'Petits-dejeuners simples, tres reconnaissables et installes dans l imaginaire local.',
  },
  {
    slug: 'british-breakfasts',
    name: 'Royaume-Uni',
    description: 'Petits-dejeuners et assiettes matinales rattaches au Royaume-Uni.',
  },
  {
    slug: 'english-breakfasts',
    name: 'Angleterre',
    description: 'Petits-dejeuners et fry-ups rattaches a l Angleterre.',
  },
  {
    slug: 'russian-breakfasts',
    name: 'Russie',
    description: 'Petits-dejeuners, bouillies et bols chauds rattaches a la Russie.',
  },
  {
    slug: 'italian-breakfasts',
    name: 'Italie',
    description: 'Petits-dejeuners, cafe et patisseries du matin rattaches a l Italie.',
  },
  {
    slug: 'german-breakfasts',
    name: 'Allemagne',
    description: 'Petits-dejeuners, pains, Brötchen et tables du matin rattaches a l Allemagne.',
  },
  {
    slug: 'greek-breakfasts',
    name: 'Grece',
    description: 'Petits-dejeuners, bols, produits laitiers et habitudes matinales rattaches a la Grece.',
  },
  {
    slug: 'portuguese-breakfasts',
    name: 'Portugal',
    description: 'Petits-dejeuners, cafes, pastelarias et pains du matin rattaches au Portugal.',
  },
  {
    slug: 'yogurt-breakfasts',
    name: 'Base yaourt',
    description: 'Petits-dejeuners ou yaourt, laitage egoutte ou bol frais structure le repas.',
  },
  {
    slug: 'mediterranean-breakfasts',
    name: 'Mediterraneen',
    description: 'Petits-dejeuners rattaches aux produits et habitudes des cuisines mediterraneennes.',
  },
  {
    slug: 'grain-breakfasts',
    name: 'Base cereales',
    description: 'Petits-dejeuners construits autour de cereales cuites, grains ou bouillies.',
  },
  {
    slug: 'pastry-breakfasts',
    name: 'Patisseries',
    description: 'Petits-dejeuners ou viennoiseries, biscuits ou patisseries structurent le repas.',
  },
  {
    slug: 'bulgarian-breakfasts',
    name: 'Bulgarie',
    description: 'Petits-dejeuners, banitsa et habitudes matinales rattaches a la Bulgarie.',
  },
  {
    slug: 'canadian-breakfasts',
    name: 'Canada',
    description: 'Petits-dejeuners, diners et assiettes familiales rattaches au Canada.',
  },
  {
    slug: 'american-breakfasts',
    name: 'Etats-Unis',
    description: 'Petits-dejeuners et classiques matinaux rattaches aux Etats-Unis.',
  },
  {
    slug: 'new-york-breakfasts',
    name: 'New York',
    description: 'Petits-dejeuners, delis et bagel shops rattaches a New York.',
  },
  {
    slug: 'costa-rican-breakfasts',
    name: 'Costa Rica',
    description: 'Petits-dejeuners, sodas et assiettes matinales rattaches au Costa Rica.',
  },
  {
    slug: 'mexican-breakfasts',
    name: 'Mexique',
    description: 'Petits-dejeuners, almuerzos et classiques matinaux rattaches au Mexique.',
  },
  {
    slug: 'jamaican-breakfasts',
    name: 'Jamaique',
    description: 'Petits-dejeuners, plats nationaux et assiettes matinales rattaches a la Jamaique.',
  },
  {
    slug: 'venezuelan-breakfasts',
    name: 'Venezuela',
    description: 'Petits-dejeuners, cachapas, arepas et matins populaires rattaches au Venezuela.',
  },
  {
    slug: 'colombian-breakfasts',
    name: 'Colombie',
    description: 'Petits-dejeuners, soupes et assiettes matinales rattaches a la Colombie.',
  },
  {
    slug: 'cuban-breakfasts',
    name: 'Cuba',
    description: 'Petits-dejeuners, cafes et tostadas rattaches a Cuba et aux cultures cubaines.',
  },
  {
    slug: 'andean-breakfasts',
    name: 'Andes',
    description: 'Petits-dejeuners rattaches aux regions andines et aux hauts plateaux.',
  },
  {
    slug: 'cheese-breakfasts',
    name: 'Base fromage',
    description: 'Petits-dejeuners ou fromage frais, sale ou tartinable structure le plat.',
  },
  {
    slug: 'diner-breakfasts',
    name: 'Diner',
    description: 'Assiettes copieuses de style diner, cafe de route ou petit restaurant familial.',
  },
  {
    slug: 'deli-breakfasts',
    name: 'Deli',
    description: 'Petits-dejeuners rattaches aux delis, comptoirs et sandwiches urbains.',
  },
  {
    slug: 'diaspora-breakfasts',
    name: 'Diaspora',
    description: 'Petits-dejeuners documentes aussi par des pratiques de diaspora et migrations culinaires.',
  },
  {
    slug: 'sweet-savory-breakfasts',
    name: 'Sucre-sale',
    description: 'Petits-dejeuners ou douceur naturelle et garnitures salees se repondent.',
  },
  {
    slug: 'chinese-breakfasts',
    name: 'Chine',
    description: 'Petits-dejeuners et repas matinaux rattaches aux cuisines chinoises.',
  },
  {
    slug: 'northern-chinese-breakfasts',
    name: 'Chine du Nord',
    description: 'Petits-dejeuners lies aux villes, provinces et traditions culinaires du nord de la Chine.',
  },
  {
    slug: 'cantonese-breakfasts',
    name: 'Cantonais',
    description: 'Petits-dejeuners, brunchs et moments yum cha lies aux cuisines cantonaises.',
  },
  {
    slug: 'south-asian-breakfasts',
    name: 'Asie du Sud',
    description: 'Petits-dejeuners rattaches aux cuisines d Asie du Sud.',
  },
  {
    slug: 'bangladeshi-breakfasts',
    name: 'Bangladesh',
    description: 'Petits-dejeuners et repas matinaux rattaches au Bangladesh.',
  },
  {
    slug: 'indian-breakfasts',
    name: 'Inde',
    description: 'Petits-dejeuners et repas matinaux rattaches aux cuisines indiennes.',
  },
  {
    slug: 'south-indian-breakfasts',
    name: 'Inde du Sud',
    description: 'Petits-dejeuners lies aux cuisines du sud de l Inde.',
  },
  {
    slug: 'north-indian-breakfasts',
    name: 'Inde du Nord',
    description: 'Petits-dejeuners lies aux cuisines du nord de l Inde.',
  },
  {
    slug: 'western-indian-breakfasts',
    name: 'Inde de l Ouest',
    description: 'Petits-dejeuners lies aux cuisines de l ouest de l Inde.',
  },
  {
    slug: 'maharashtrian-breakfasts',
    name: 'Maharashtra',
    description: 'Petits-dejeuners rattaches au Maharashtra.',
  },
  {
    slug: 'iranian-breakfasts',
    name: 'Iran',
    description: 'Petits-dejeuners et pains du matin rattaches a l Iran.',
  },
  {
    slug: 'middle-eastern-breakfasts',
    name: 'Moyen-Orient',
    description: 'Petits-dejeuners et assiettes du matin rattaches au Moyen-Orient.',
  },
  {
    slug: 'israeli-breakfasts',
    name: 'Israel',
    description: 'Petits-dejeuners, brunchs et buffets rattaches aux usages israeliens.',
  },
  {
    slug: 'legume-breakfasts',
    name: 'Base legumineuses',
    description: 'Petits-dejeuners construits autour de feves, pois chiches, haricots ou lentilles.',
  },
  {
    slug: 'flatbreads',
    name: 'Galettes et pains plats',
    description: 'Pains plats, crepes, galettes et formes proches du matin.',
  },
  {
    slug: 'flatbread-breakfasts',
    name: 'Pains plats',
    description: 'Petits-dejeuners construits autour de pains plats, galettes ou ruti.',
  },
  {
    slug: 'stuffed-flatbreads',
    name: 'Pains plats farcis',
    description: 'Pains plats garnis ou farcis avant cuisson.',
  },
  {
    slug: 'bread-breakfasts',
    name: 'Pains du matin',
    description: 'Petits-dejeuners ou un pain frais structure l assiette.',
  },
  {
    slug: 'comfort-breakfasts',
    name: 'Confort',
    description: 'Preparations chaudes, rassasiantes ou familieres.',
  },
  {
    slug: 'leftover-breakfasts',
    name: 'Restes cuisines',
    description: 'Petits-dejeuners pratiques construits avec riz deja cuit ou restes.',
  },
  {
    slug: 'soup-breakfasts',
    name: 'Soupes du matin',
    description: 'Petits-dejeuners ou soupe, bouillon ou element liquide chaud structure le repas.',
  },
  {
    slug: 'quick-at-home',
    name: 'Rapide a la maison',
    description: 'Versions simplifiees realisables avec peu de temps ou des ingredients faciles.',
  },
  {
    slug: 'west-african-breakfasts',
    name: 'Afrique de l Ouest',
    description: 'Petits-dejeuners rattaches aux pays, regions et cultures culinaires d Afrique de l Ouest.',
  },
  {
    slug: 'protein-rich-breakfasts',
    name: 'Riche en proteines',
    description: 'Petits-dejeuners avec legumineuses, oeufs, produits animaux ou autres bases proteinees.',
  },
  {
    slug: 'fried-breakfasts',
    name: 'Fritures du matin',
    description: 'Beignets, fritures et preparations dorees souvent servies chaudes.',
  },
  {
    slug: 'porridge-breakfasts',
    name: 'Bouillies',
    description: 'Bouillies, porridges et preparations semi-liquides du matin.',
  },
  {
    slug: 'fermented-breakfasts',
    name: 'Fermente',
    description: 'Preparations ou la fermentation joue un role dans le gout ou la texture.',
  },
  {
    slug: 'breakfast-drinks',
    name: 'Boissons du matin',
    description: 'Boissons chaudes ou froides fortement associees au petit-dejeuner.',
  },
  {
    slug: 'steamed-breakfasts',
    name: 'Vapeur',
    description: 'Preparations du matin cuites ou rechauffees a la vapeur.',
  },
  {
    slug: 'southern-african-breakfasts',
    name: 'Afrique australe',
    description: 'Petits-dejeuners rattaches aux pays et cultures culinaires d Afrique australe.',
  },
  {
    slug: 'east-african-breakfasts',
    name: 'Afrique de l Est',
    description: 'Petits-dejeuners rattaches aux pays et cultures culinaires d Afrique de l Est.',
  },
  {
    slug: 'horn-of-africa-breakfasts',
    name: 'Corne de l Afrique',
    description: 'Petits-dejeuners rattaches aux cuisines de la Corne de l Afrique.',
  },
  {
    slug: 'swahili-coast-breakfasts',
    name: 'Cote swahilie',
    description: 'Petits-dejeuners et snacks du matin lies aux habitudes de la cote swahilie.',
  },
  {
    slug: 'tanzanian-breakfasts',
    name: 'Tanzanie',
    description: 'Petits-dejeuners et repas matinaux rattaches a la Tanzanie.',
  },
  {
    slug: 'vegetable-based-breakfasts',
    name: 'Base legumes',
    description: 'Petits-dejeuners ou sauces, feuilles ou legumes structurent le plat.',
  },
  {
    slug: 'maize-breakfasts',
    name: 'Base mais',
    description: 'Preparations du matin construites autour du mais ou de la farine de mais.',
  },
  {
    slug: 'one-pot-breakfasts',
    name: 'Tout-en-un',
    description: 'Plats du matin cuisines dans une seule marmite avec base, sauce et accompagnements.',
  },
  {
    slug: 'family-friendly',
    name: 'Familial',
    description: "Formats faciles a partager autour d'une table.",
  },
  {
    slug: 'budget-friendly',
    name: 'Economique',
    description: 'Bases accessibles, populaires ou simples a adapter.',
  },
  {
    slug: 'easy-to-recreate',
    name: 'Facile a refaire',
    description: 'Preparations realistes dans une cuisine domestique.',
  },
  {
    slug: 'street-breakfast',
    name: 'Street breakfast',
    description: 'Classiques souvent croises dans la rue, les marches ou les echoppes.',
  },
  {
    slug: 'tea-breakfast',
    name: 'Avec the',
    description: 'Matins ou le the tient une place centrale.',
  },
  {
    slug: 'coffee-breakfast',
    name: 'Avec cafe',
    description: "Petits-dejeuners ou le cafe accompagne souvent l'assiette.",
  },
  {
    slug: 'hotel-breakfasts',
    name: 'Hotel',
    description: 'Formats de petit-dejeuner lies aux buffets, hotels ou brunchs composes.',
  },
  {
    slug: 'rice-based',
    name: 'Base riz',
    description: 'Preparations dans lesquelles le riz structure le repas.',
  },
  {
    slug: 'bread-based',
    name: 'Base pain',
    description: 'Pains, galettes, tartines et variantes proches.',
  },
  {
    slug: 'egg-based',
    name: 'Base oeufs',
    description: 'Assiettes ou les oeufs sont frequents ou structurants.',
  },
  {
    slug: 'tortilla-breakfasts',
    name: 'Base tortillas',
    description: 'Petits-dejeuners ou tortillas, maïs nixtamalise ou galettes proches structurent le plat.',
  },
  {
    slug: 'fish-breakfasts',
    name: 'Base poisson',
    description: 'Petits-dejeuners ou poisson frais, sale, fume ou conserve structure l assiette.',
  },
  {
    slug: 'national-dishes',
    name: 'Plats nationaux',
    description: 'Fiches associees a des plats officiellement ou fortement presentes comme nationaux.',
  },
  {
    slug: 'meat-breakfasts',
    name: 'Base viande',
    description: 'Petits-dejeuners ou viande, charcuterie ou proteine animale structurent l assiette.',
  },
] satisfies Category[]
