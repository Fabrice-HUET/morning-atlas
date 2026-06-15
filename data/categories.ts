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
] satisfies Category[]
