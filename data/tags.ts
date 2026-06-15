import type { Tag } from '@/types/taxonomy'

export const tags = [
  { slug: 'traditional-breakfast', label: 'Petit-dejeuner traditionnel', description: 'Associe a une habitude locale documentee.' },
  { slug: 'sweet-morning', label: 'Matin sucre', description: 'Profil doux, sucre ou patissier.' },
  { slug: 'savory-morning', label: 'Matin sale', description: 'Profil sale, epice ou umami.' },
  { slug: 'drink-included', label: 'Boisson incluse', description: 'La boisson fait partie de l experience.' },
  { slug: 'protein-rich', label: 'Riche en proteines', description: 'Oeufs, haricots, poisson, viande ou laitage.' },
  { slug: 'vegetarian-friendly', label: 'Vegetarien possible', description: 'Peut souvent etre adapte sans viande ni poisson.' },
  { slug: 'easy-at-home', label: 'Facile a la maison', description: 'Ingredients et gestes accessibles.' },
  { slug: 'regional-variation', label: 'Variation regionale', description: 'Fortement variable selon les regions ou familles.' },
  { slug: 'iconic-breakfast', label: 'Iconique', description: 'Tres reconnaissable dans l imaginaire culinaire.' },
  { slug: 'travel-food', label: 'Saveur de voyage', description: 'Bon point d entree pour decouvrir une culture.' },
  { slug: 'comfort-food', label: 'Confort', description: 'Simple, chaud ou rassurant.' },
  { slug: 'family-meal', label: 'Repas familial', description: 'Adaptable a une table partagee.' },
] satisfies Tag[]
