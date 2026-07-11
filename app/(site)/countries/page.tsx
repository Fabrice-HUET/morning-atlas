import type { Metadata } from 'next'

import { CountryCard } from '@/components/cards/CountryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { countries } from '@/data/countries'
import { buildPageMetadata } from '@/lib/seo'
import { buildItemListJsonLd, buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = buildPageMetadata({
  title: 'Pays',
  description: 'Explorer les petits-déjeuners du monde par pays et régions.',
  path: '/countries',
})

export default function CountriesPage() {
  const continents = Array.from(new Set(countries.map((country) => country.continent)))
  const jsonLd = [
    buildWebPageJsonLd({
      name: 'Pays — Morning Atlas',
      description: 'Explorer les petits-déjeuners du monde par pays et régions.',
      path: '/countries',
    }),
    buildItemListJsonLd({
      name: 'Pays explorés par Morning Atlas',
      path: '/countries',
      items: countries.map((country) => ({
        name: country.country,
        path: `/countries/${country.slug}`,
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
          eyebrow="Pays"
          title="Explorer les petits-déjeuners du monde"
          description="Une base de départ pour construire des fiches pays plus complètes, reliées aux recettes, ingrédients, catégories et guides."
        />
        <div className="mt-10 grid gap-10">
          {continents.map((continent) => {
            const continentCountries = countries.filter((country) => country.continent === continent)

            return (
              <section key={continent}>
                <h2 className="text-2xl font-black text-espresso">{continent}</h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {continentCountries.map((country) => (
                    <CountryCard key={country.slug} country={country} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </Container>
    </main>
  )
}
