import type { Metadata } from 'next'

import { CountryCard } from '@/components/cards/CountryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { countries } from '@/data/countries'

export const metadata: Metadata = {
  title: 'Pays - Morning Atlas',
  description: 'Explorer les petits-dejeuners du monde par pays et regions.',
}

export default function CountriesPage() {
  const continents = Array.from(new Set(countries.map((country) => country.continent)))

  return (
    <main className="bg-amber-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Pays"
          title="Explorer les petits-dejeuners du monde"
          description="Une base de depart pour construire des fiches pays plus completes, reliees aux recettes, ingredients, categories et guides."
        />
        <div className="mt-10 grid gap-10">
          {continents.map((continent) => {
            const continentCountries = countries.filter((country) => country.continent === continent)

            return (
              <section key={continent}>
                <h2 className="text-2xl font-black text-stone-950">{continent}</h2>
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
