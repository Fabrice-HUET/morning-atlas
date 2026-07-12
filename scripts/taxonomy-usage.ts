import { categories } from '@/data/categories'
import { countries } from '@/data/countries'
import { ingredients } from '@/data/ingredients'
import { recipes } from '@/data/recipes'
import { tags } from '@/data/tags'

function count(refLists: (readonly string[] | undefined)[]): Map<string, number> {
  const counts = new Map<string, number>()
  for (const list of refLists) {
    for (const slug of list ?? []) {
      counts.set(slug, (counts.get(slug) ?? 0) + 1)
    }
  }
  return counts
}

// Tags : référencés par recipe.tags (affichés) + country.tagSlugs (affichés).
const tagUsage = count([...recipes.map((r) => r.tags), ...countries.map((c) => c.tagSlugs)])
// Ingrédients : country.ingredientSlugs + recipe.ingredientSlugs.
const ingredientUsage = count([...countries.map((c) => c.ingredientSlugs), ...recipes.map((r) => r.ingredientSlugs)])
// Catégories : country.categorySlugs + recipe.categorySlugs.
const categoryUsage = count([...countries.map((c) => c.categorySlugs), ...recipes.map((r) => r.categorySlugs)])

function summarize(name: string, entries: { slug: string }[], usage: Map<string, number>) {
  const unused = entries.filter((e) => (usage.get(e.slug) ?? 0) === 0)
  console.log(`\n${name} : ${entries.length} au total | ${unused.length} jamais référencés`)
  console.log('  non référencés :', unused.map((e) => e.slug).join(', ') || '(aucun)')
}

summarize('TAGS', tags, tagUsage)
summarize('INGRÉDIENTS', ingredients, ingredientUsage)
summarize('CATÉGORIES', categories, categoryUsage)

// Ingrédients faiblement référencés (1 seul usage) — candidats à fusion/suppression.
const weakIngredients = ingredients.filter((i) => (ingredientUsage.get(i.slug) ?? 0) === 1)
console.log(`\nINGRÉDIENTS avec 1 seule référence : ${weakIngredients.length}`)
