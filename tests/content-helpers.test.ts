import { describe, expect, it } from 'vitest'

import { recipes } from '@/data/recipes'
import {
  INGREDIENT_INDEXABLE_MIN_CONTENT,
  INGREDIENT_INDEX_MIN_CONTENT,
  getCountryBySlug,
  getFeaturedRecipes,
  getGuideBySlug,
  getIngredientContentScore,
  getIngredientsForIndex,
  getRecipesForGuide,
  getTagsBySlugs,
  isIngredientIndexable,
} from '@/lib/content-helpers'

describe('lookups par slug', () => {
  it('retourne la fiche quand le slug existe', () => {
    expect(getCountryBySlug('egypt-ful-medames')?.country).toBe('Égypte')
  })

  it('retourne undefined pour un slug inconnu', () => {
    expect(getCountryBySlug('pays-inexistant')).toBeUndefined()
    expect(getGuideBySlug('guide-inexistant')).toBeUndefined()
  })
})

describe('getTagsBySlugs', () => {
  it('résout les slugs connus et ignore les inconnus', () => {
    const result = getTagsBySlugs(['sweet-morning', 'slug-inexistant'])
    expect(result).toHaveLength(1)
    expect(result[0]?.slug).toBe('sweet-morning')
  })
})

describe('seuils ingrédients', () => {
  it('isIngredientIndexable suit le seuil de contenus liés', () => {
    const eggsScore = getIngredientContentScore('eggs')
    expect(eggsScore).toBeGreaterThanOrEqual(INGREDIENT_INDEXABLE_MIN_CONTENT)
    expect(isIngredientIndexable('eggs')).toBe(true)
  })

  it("getIngredientsForIndex ne garde que les ingrédients >= seuil d'index", () => {
    const listed = getIngredientsForIndex()
    expect(listed.length).toBeGreaterThan(0)
    expect(listed.length).toBeLessThan(410)
    for (const ingredient of listed) {
      expect(getIngredientContentScore(ingredient.slug)).toBeGreaterThanOrEqual(INGREDIENT_INDEX_MIN_CONTENT)
    }
  })
})

describe('featured & guides', () => {
  it('getFeaturedRecipes ne retourne que des recettes marquées featured', () => {
    const featured = getFeaturedRecipes()
    expect(featured.length).toBeGreaterThan(0)
    expect(featured.length).toBeLessThanOrEqual(6)
    for (const recipe of featured) {
      expect(recipe.featured).toBe(true)
    }
  })

  it('getRecipesForGuide dérive des recettes sans doublon', () => {
    const result = getRecipesForGuide(['egypt-ful-medames'])
    const slugs = result.map((recipe) => recipe.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})

describe('cohérence des données', () => {
  it('chaque recipe.tags résout vers un tag connu (validé aussi par validate:content)', () => {
    for (const recipe of recipes) {
      expect(getTagsBySlugs(recipe.tags)).toHaveLength(recipe.tags.length)
    }
  })
})
