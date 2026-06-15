import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CountryCard } from '@/components/cards/CountryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { ingredients } from '@/data/ingredients'
import { getCountriesByIngredient, getIngredientBySlug } from '@/lib/content-helpers'

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
      title: 'Ingredient introuvable - Morning Atlas',
    }
  }

  return {
    title: `${ingredient.name} - Morning Atlas`,
    description: ingredient.description,
  }
}

export default async function IngredientPage({ params }: IngredientPageProps) {
  const { slug } = await params
  const ingredient = getIngredientBySlug(slug)

  if (!ingredient) {
    notFound()
  }

  const countries = getCountriesByIngredient(ingredient.slug)

  return (
    <main className="bg-amber-50 py-16">
      <Container>
        <SectionHeading eyebrow="Ingredient" title={ingredient.name} description={ingredient.description} />
        <p className="mt-5 inline-flex rounded-full bg-white px-3 py-1 text-sm font-bold text-emerald-800">
          Type : {ingredient.type}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </Container>
    </main>
  )
}
