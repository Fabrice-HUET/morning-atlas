import Link from 'next/link'
import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { guides } from '@/data/guides'
import { getCountriesBySlugs } from '@/lib/content-helpers'
import { buildPageMetadata } from '@/lib/seo'
import { buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = buildPageMetadata({
  title: 'Guides — Morning Atlas',
  description: 'Guides et comparatifs autour des petits-déjeuners du monde.',
  path: '/guides',
})

export default function GuidesPage() {
  const jsonLd = buildWebPageJsonLd({
    name: 'Guides — Morning Atlas',
    description: 'Guides et comparatifs autour des petits-déjeuners du monde.',
    path: '/guides',
  })

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
          eyebrow="Guides"
          title="Guides et comparatifs à venir"
          description="Des parcours éditoriaux pour comparer les styles de petits-déjeuners, les boissons, les ingrédients et les habitudes."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {guides.map((guide) => {
            const countries = getCountriesBySlugs(guide.relatedCountrySlugs)

            return (
              <article key={guide.slug} className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-toast">{guide.theme}</p>
                <h2 className="mt-4 text-2xl font-black text-espresso">{guide.title}</h2>
                <p className="mt-4 text-sm leading-6 text-espresso/75">{guide.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {countries.map((country) => (
                    <Link
                      key={country.slug}
                      href={`/countries/${country.slug}`}
                      className="rounded-full bg-cream px-3 py-1 text-sm font-semibold text-espresso"
                    >
                      {country.country}
                    </Link>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </main>
  )
}
