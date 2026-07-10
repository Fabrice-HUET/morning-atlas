import type { Guide } from '@/types/guide'

export const guides = [
  {
    slug: 'petits-dejeuners-sales-du-monde',
    title: 'Petits-déjeuners sales du monde',
    excerpt: 'Un premier tour des assiettes du matin ou œufs, riz, haricots ou bouillons remplacent les viennoiseries.',
    theme: 'Saveurs salées',
    relatedCountrySlugs: ['turkey-menemen', 'mexico-huevos-rancheros', 'japan-rice-miso-soup'],
    relatedTagSlugs: ['savory-morning', 'protein-rich', 'travel-food'],
  },
  {
    slug: 'matins-autour-du-the',
    title: 'Matins autour du thé',
    excerpt: 'Des petits-déjeuners ou le thé structure le rythme, du chai aux infusions sucrées ou épicées.',
    theme: 'Boissons',
    relatedCountrySlugs: ['morocco-msemen', 'eastern-africa-chai-mandazi', 'senegal-cafe-touba'],
    relatedTagSlugs: ['drink-included', 'traditional-breakfast', 'regional-variation'],
  },
  {
    slug: 'bases-faciles-a-refaire',
    title: 'Bases faciles à refaire',
    excerpt: 'Des idees simples pour commencer à voyager depuis sa cuisine, sans chercher une version définitive.',
    theme: 'Cuisine maison',
    relatedCountrySlugs: ['france-tartines', 'australia-weet-bix', 'singapore-kaya-toast'],
    relatedTagSlugs: ['easy-at-home', 'family-meal', 'comfort-food'],
  },
] satisfies Guide[]
