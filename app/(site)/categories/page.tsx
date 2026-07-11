import type { Metadata } from 'next'

import { CategoryCard } from '@/components/cards/CategoryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { categories } from '@/data/categories'
import { buildPageMetadata } from '@/lib/seo'
import { buildItemListJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

const description = 'Explorer les petits-déjeuners du monde par envie, texture ou moment.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Catégories',
  description,
  path: '/categories',
})

export default function CategoriesPage() {
  const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name, 'fr'))
  const jsonLd = [
    buildWebPageJsonLd({
      name: 'Catégories — Morning Atlas',
      description,
      path: '/categories',
    }),
    buildItemListJsonLd({
      name: 'Catégories de Morning Atlas',
      path: '/categories',
      items: sortedCategories.map((category) => ({
        name: category.name,
        path: `/categories/${category.slug}`,
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
          eyebrow="Catégories"
          title="Explorer par envie, texture ou rythme"
          description="Les catégories regroupent les fiches par profil : sucré, salé, copieux, rapide, sain ou traditionnel. Un point d'entrée transversal aux pays et aux recettes."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </main>
  )
}
