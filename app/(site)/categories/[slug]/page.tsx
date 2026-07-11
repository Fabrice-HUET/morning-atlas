import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryCard } from '@/components/cards/CountryCard'
import { RecipeCard } from '@/components/cards/RecipeCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { categories } from '@/data/categories'
import { getCategoryBySlug, getCountriesByCategory, getRecipesByCategory } from '@/lib/content-helpers'
import { buildPageMetadata } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

type CategoryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return {
      title: 'Catégorie introuvable — Morning Atlas',
    }
  }

  return buildPageMetadata({
    title: `${category.name} — Morning Atlas`,
    description: category.description,
    path: `/categories/${category.slug}`,
  })
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const countries = getCountriesByCategory(category.slug)
  const recipes = getRecipesByCategory(category.slug)
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: category.name, path: `/categories/${category.slug}` },
    ]),
    buildWebPageJsonLd({
      name: category.name,
      description: category.description,
      path: `/categories/${category.slug}`,
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
        <SectionHeading level={1} eyebrow="Catégorie" title={category.name} description={category.description} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
        {recipes.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-black text-espresso">Recettes liées</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </main>
  )
}
