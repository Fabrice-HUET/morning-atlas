import { describe, expect, it } from 'vitest'

import { getContentIntegrityReport } from '@/lib/content-validation'
import { breakfastStyleLabel, difficultyLabel, ingredientTypeLabel } from '@/lib/labels'
import { buildBreadcrumbJsonLd, buildRecipeJsonLd, serializeJsonLd } from '@/lib/structured-data'
import { getRecipeBySlug } from '@/lib/content-helpers'

describe('labels FR', () => {
  it('traduit les enums connus', () => {
    expect(difficultyLabel('easy')).toBe('Facile')
    expect(ingredientTypeLabel('grain')).toBe('Céréale')
    expect(breakfastStyleLabel('savory')).toBe('Salé')
  })
})

describe('intégrité du contenu', () => {
  it('aucun slug dupliqué ni référence cassée', () => {
    const report = getContentIntegrityReport()
    const duplicates = Object.values(report.duplicateSlugs).flat()
    expect(duplicates).toEqual([])
    expect(report.missingReferences).toEqual([])
  })
})

describe('JSON-LD', () => {
  it('serializeJsonLd échappe les chevrons (anti-injection)', () => {
    expect(serializeJsonLd({ x: '</script>' })).not.toContain('</script>')
  })

  it('buildRecipeJsonLd émet des durées ISO 8601 et un yield', () => {
    const recipe = getRecipeBySlug('tartines')
    expect(recipe).toBeDefined()
    const jsonLd = buildRecipeJsonLd(recipe!)
    expect(jsonLd['@type']).toBe('Recipe')
    expect(String(jsonLd.prepTime)).toMatch(/^PT\d+M$/)
    expect(String(jsonLd.totalTime)).toMatch(/^PT\d+M$/)
    expect(String(jsonLd.recipeYield)).toMatch(/portion/)
  })

  it('buildBreadcrumbJsonLd produit des positions ordonnées', () => {
    const jsonLd = buildBreadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Guides', path: '/guides' },
    ])
    const items = jsonLd.itemListElement as Array<{ position: number }>
    expect(items.map((item) => item.position)).toEqual([1, 2])
  })
})
