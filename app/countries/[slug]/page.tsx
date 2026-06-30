import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RecipeCard } from '@/components/cards/RecipeCard'
import { TagBadge } from '@/components/cards/TagBadge'
import { SourceList } from '@/components/content/SourceList'
import { BreakfastImage } from '@/components/images/BreakfastImage'
import { Container } from '@/components/layout/Container'
import { Flag } from '@/components/ui/Flag'
import { countries } from '@/data/countries'
import {
  getCategoriesBySlugs,
  getCountryBySlug,
  getGuidesForCountry,
  getIngredientsBySlugs,
  getRecipesBySlugs,
} from '@/lib/content-helpers'
import { breakfastImageUrl, buildPageMetadata } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

type CountryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }))
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const { slug } = await params
  const country = getCountryBySlug(slug)

  if (!country) {
    return {
      title: 'Pays introuvable — Morning Atlas',
    }
  }

  const imageSlug = country.recipeSlugs[0]

  return buildPageMetadata({
    title: country.seoTitle,
    description: country.seoDescription,
    path: `/countries/${country.slug}`,
    type: 'article',
    image: imageSlug ? breakfastImageUrl(imageSlug) : undefined,
  })
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params
  const country = getCountryBySlug(slug)

  if (!country) {
    notFound()
  }

  const recipes = getRecipesBySlugs(country.recipeSlugs)
  const breakfastImageSlug = country.recipeSlugs[0] ?? country.slug
  const categories = getCategoriesBySlugs(country.categorySlugs)
  const ingredients = getIngredientsBySlugs(country.ingredientSlugs)
  const guides = getGuidesForCountry(country.slug)
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Pays', path: '/countries' },
      { name: country.country, path: `/countries/${country.slug}` },
    ]),
    buildWebPageJsonLd({
      name: country.heroTitle,
      description: country.shortDescription,
      path: `/countries/${country.slug}`,
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
        <article className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Flag emoji={country.flagEmoji} label={country.country} />
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-toast">
              {country.region} · {country.continent}
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-espresso">{country.heroTitle}</h1>
            <p className="mt-5 text-lg leading-8 text-espresso/80">{country.shortDescription}</p>
          </div>

          <aside className="overflow-hidden rounded-lg border border-oat bg-paper shadow-sm">
            <BreakfastImage
              slug={breakfastImageSlug}
              alt={`${country.breakfastName}, petit-dejeuner en ${country.country}`}
              className="aspect-[4/3] w-full"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
            <div className="p-6">
              <h2 className="text-2xl font-black text-espresso">{country.breakfastName}</h2>
              <p className="mt-3 text-sm leading-6 text-espresso/75">{country.breakfastSubtitle}</p>
              <dl className="mt-6 grid gap-4 text-sm">
                <div>
                  <dt className="font-bold text-espresso">Difficulte maison</dt>
                  <dd className="mt-1 text-espresso/75">{country.difficultyToRecreate}</dd>
                </div>
                <div>
                  <dt className="font-bold text-espresso">Boissons courantes</dt>
                  <dd className="mt-1 text-espresso/75">{country.commonDrinks.join(', ')}</dd>
                </div>
                <div>
                  <dt className="font-bold text-espresso">Statut editorial</dt>
                  <dd className="mt-1 text-espresso/75">{country.needsReview ? 'A verifier' : 'Relu'}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </article>

        <section className="mt-12 grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-oat bg-paper p-6">
            <h2 className="text-xl font-black text-espresso">Peut inclure</h2>
            <ul className="mt-4 grid gap-2 text-sm text-espresso/80">
              {country.typicalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-oat bg-paper p-6">
            <h2 className="text-xl font-black text-espresso">Note culturelle</h2>
            <p className="mt-4 text-sm leading-6 text-espresso/80">{country.culturalNote}</p>
          </div>
          <div className="rounded-lg border border-oat bg-paper p-6">
            <h2 className="text-xl font-black text-espresso">Contexte du matin</h2>
            <p className="mt-4 text-sm leading-6 text-espresso/80">{country.morningContext}</p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black text-espresso">Taxonomies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category.slug} className="rounded-full bg-paper px-3 py-1 text-sm font-semibold text-espresso">
                  {category.name}
                </span>
              ))}
              {country.tagSlugs.map((tagSlug) => (
                <TagBadge key={tagSlug} slug={tagSlug} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black text-espresso">Ingredients lies</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {ingredients.map((ingredient) => (
                <span key={ingredient.slug} className="rounded-full bg-paper px-3 py-1 text-sm font-semibold text-espresso">
                  {ingredient.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {recipes.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-black text-espresso">Recettes associees</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
              ))}
            </div>
          </section>
        ) : null}

        {guides.length > 0 ? (
          <section className="mt-12 rounded-lg border border-oat bg-paper p-6">
            <h2 className="text-2xl font-black text-espresso">Guides associes</h2>
            <div className="mt-4 grid gap-3">
              {guides.map((guide) => (
                <p key={guide.slug} className="text-sm leading-6 text-espresso/80">
                  {guide.title} · {guide.excerpt}
                </p>
              ))}
            </div>
          </section>
        ) : null}

        <SourceList sources={country.sources} />
      </Container>
    </main>
  )
}
