import Link from 'next/link'
import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { guides } from '@/data/guides'
import { getCountriesBySlugs } from '@/lib/content-helpers'

export const metadata: Metadata = {
  title: 'Guides - Morning Atlas',
  description: 'Guides et comparatifs autour des petits-dejeuners du monde.',
}

export default function GuidesPage() {
  return (
    <main className="bg-cream py-16">
      <Container>
        <SectionHeading
          eyebrow="Guides"
          title="Guides et comparatifs a venir"
          description="Des parcours editoriaux pour comparer les styles de petits-dejeuners, les boissons, les ingredients et les habitudes."
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
