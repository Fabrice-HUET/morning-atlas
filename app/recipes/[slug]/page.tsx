import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryCard } from '@/components/cards/CountryCard'
import { TagBadge } from '@/components/cards/TagBadge'
import { Container } from '@/components/layout/Container'
import { recipes } from '@/data/recipes'
import { getCountriesBySlugs, getRecipeBySlug } from '@/lib/content-helpers'

type RecipePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }))
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    return {
      title: 'Recette introuvable - Morning Atlas',
    }
  }

  return {
    title: `${recipe.title} - Morning Atlas`,
    description: recipe.shortDescription,
  }
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params
  const recipe = getRecipeBySlug(slug)

  if (!recipe) {
    notFound()
  }

  const countries = getCountriesBySlugs(recipe.countrySlugs)

  return (
    <main className="bg-amber-50 py-16">
      <Container>
        <article className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">{recipe.originLabel}</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-stone-950">{recipe.title}</h1>
            <p className="mt-5 text-lg leading-8 text-stone-700">{recipe.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {recipe.tags.map((tagSlug) => (
                <TagBadge key={tagSlug} slug={tagSlug} />
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-stone-950">Repere pratique</h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <div>
                <dt className="font-bold text-stone-950">Temps total</dt>
                <dd className="mt-1 text-stone-600">{recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes</dd>
              </div>
              <div>
                <dt className="font-bold text-stone-950">Difficulte</dt>
                <dd className="mt-1 text-stone-600">{recipe.difficulty}</dd>
              </div>
              <div>
                <dt className="font-bold text-stone-950">Portions</dt>
                <dd className="mt-1 text-stone-600">{recipe.servings}</dd>
              </div>
              <div>
                <dt className="font-bold text-stone-950">Statut editorial</dt>
                <dd className="mt-1 text-stone-600">{recipe.needsReview ? 'A verifier' : 'Relu'}</dd>
              </div>
            </dl>
          </aside>
        </article>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-black text-stone-950">Ingredients</h2>
            <ul className="mt-5 grid gap-2 text-sm text-stone-700">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-black text-stone-950">Etapes</h2>
            <ol className="mt-5 grid list-decimal gap-3 pl-5 text-sm leading-6 text-stone-700">
              {recipe.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-stone-200 bg-white p-6">
          <h2 className="text-2xl font-black text-stone-950">Note</h2>
          <p className="mt-4 text-sm leading-6 text-stone-700">{recipe.notes}</p>
        </section>

        {countries.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-black text-stone-950">Pays associes</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {countries.map((country) => (
                <CountryCard key={country.slug} country={country} />
              ))}
            </div>
          </section>
        ) : null}
      </Container>
    </main>
  )
}
