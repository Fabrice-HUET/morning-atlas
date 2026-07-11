import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryCard } from '@/components/cards/CountryCard'
import { RecipeCard } from '@/components/cards/RecipeCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ingredients } from '@/data/ingredients'
import {
  getCountriesByIngredient,
  getIngredientBySlug,
  getRecipesByIngredient,
  isIngredientIndexable,
} from '@/lib/content-helpers'
import { buildPageMetadata } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

type IngredientPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return ingredients.map((ingredient) => ({ slug: ingredient.slug }))
}

export async function generateMetadata({ params }: IngredientPageProps): Promise<Metadata> {
  const { slug } = await params
  const ingredient = getIngredientBySlug(slug)

  if (!ingredient) {
    return {
      title: 'Ingrédient introuvable',
    }
  }

  return {
    ...buildPageMetadata({
      title: ingredient.name,
      description: ingredient.description,
      path: `/ingredients/${ingredient.slug}`,
    }),
    // Les pages ingrédients trop peu reliées restent accessibles mais sortent de l'index.
    ...(isIngredientIndexable(ingredient.slug) ? {} : { robots: { index: false, follow: true } }),
  }
}

export default async function IngredientPage({ params }: IngredientPageProps) {
  const { slug } = await params
  const ingredient = getIngredientBySlug(slug)

  if (!ingredient) {
    notFound()
  }

  const countries = getCountriesByIngredient(ingredient.slug)
  const recipes = getRecipesByIngredient(ingredient.slug)
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: ingredient.name, path: `/ingredients/${ingredient.slug}` },
    ]),
    buildWebPageJsonLd({
      name: ingredient.name,
      description: ingredient.description,
      path: `/ingredients/${ingredient.slug}`,
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
        <SectionHeading level={1} eyebrow="Ingrédient" title={ingredient.name} description={ingredient.description} />
        <p className="mt-5 inline-flex rounded-full bg-sage/25 px-3 py-1 text-sm font-bold text-espresso">
          Type : {ingredient.type}
        </p>
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
