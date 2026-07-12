import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryCard } from '@/components/cards/CountryCard'
import { RecipeCard } from '@/components/cards/RecipeCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { guides } from '@/data/guides'
import { getCountriesBySlugs, getGuideBySlug, getRecipesForGuide } from '@/lib/content-helpers'
import { buildPageMetadata } from '@/lib/seo'
import { buildBreadcrumbJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

type GuidePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    return { title: 'Guide introuvable' }
  }

  return buildPageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
    type: 'article',
  })
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)

  if (!guide) {
    notFound()
  }

  const countries = getCountriesBySlugs(guide.relatedCountrySlugs)
  const recipes = getRecipesForGuide(guide.relatedCountrySlugs)
  const jsonLd = [
    buildBreadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Guides', path: '/guides' },
      { name: guide.title, path: `/guides/${guide.slug}` },
    ]),
    buildWebPageJsonLd({
      name: `${guide.title} — Morning Atlas`,
      description: guide.excerpt,
      path: `/guides/${guide.slug}`,
    }),
  ]

  return (
    <main className="bg-cream py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <Container>
        <SectionHeading level={1} eyebrow={guide.theme} title={guide.title} description={guide.excerpt} />

        {countries.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-black text-espresso">Pays à explorer</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country) => (
                <CountryCard key={country.slug} country={country} />
              ))}
            </div>
          </section>
        ) : null}

        {recipes.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-black text-espresso">Recettes reliées</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
