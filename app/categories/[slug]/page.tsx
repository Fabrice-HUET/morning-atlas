import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryCard } from '@/components/cards/CountryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { categories } from '@/data/categories'
import { getCategoryBySlug, getCountriesByCategory } from '@/lib/content-helpers'

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
      title: 'Categorie introuvable - Morning Atlas',
    }
  }

  return {
    title: `${category.name} - Morning Atlas`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const countries = getCountriesByCategory(category.slug)

  return (
    <main className="bg-cream py-16">
      <Container>
        <SectionHeading eyebrow="Categorie" title={category.name} description={category.description} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </Container>
    </main>
  )
}
