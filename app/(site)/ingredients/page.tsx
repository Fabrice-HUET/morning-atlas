import type { Metadata } from 'next'

import { IngredientCard } from '@/components/cards/IngredientCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { getIngredientsForIndex } from '@/lib/content-helpers'
import { buildPageMetadata } from '@/lib/seo'
import { buildItemListJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

const description = 'Les ingrédients les plus présents dans les petits-déjeuners du monde, reliés aux pays et recettes.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Ingrédients',
  description,
  path: '/ingredients',
})

export default function IngredientsPage() {
  // Volontairement partiel : uniquement les ingrédients structurants (≥ 3 contenus liés),
  // pas les 410 pages. Cohérent avec le noindex des pages fines (SEO-02).
  const ingredients = getIngredientsForIndex()
  const jsonLd = [
    buildWebPageJsonLd({
      name: 'Ingrédients — Morning Atlas',
      description,
      path: '/ingredients',
    }),
    buildItemListJsonLd({
      name: 'Ingrédients clés de Morning Atlas',
      path: '/ingredients',
      items: ingredients.map((ingredient) => ({
        name: ingredient.name,
        path: `/ingredients/${ingredient.slug}`,
      })),
    }),
  ]

  return (
    <main className="bg-cream py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />
      <Container>
        <SectionHeading
          level={1}
          eyebrow="Ingrédients"
          title="Les ingrédients qui reviennent le plus"
          description="Une sélection des ingrédients les plus structurants du matin, reliés à plusieurs pays et recettes. Les ingrédients plus rares restent accessibles depuis les fiches."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ingredients.map((ingredient) => (
            <IngredientCard key={ingredient.slug} ingredient={ingredient} />
          ))}
        </div>
      </Container>
    </main>
  )
}
