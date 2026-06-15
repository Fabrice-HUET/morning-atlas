import type { Metadata } from 'next'

import { RecipeCard } from '@/components/cards/RecipeCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { recipes } from '@/data/recipes'

export const metadata: Metadata = {
  title: 'Recettes - Morning Atlas',
  description: 'Recettes simples pour explorer les petits-dejeuners du monde.',
}

export default function RecipesPage() {
  return (
    <main className="bg-amber-50 py-16">
      <Container>
        <SectionHeading
          eyebrow="Recettes"
          title="Recettes simples a refaire"
          description="Des versions de depart pour structurer le catalogue, avec notes de prudence quand les recettes devront etre relues."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </Container>
    </main>
  )
}
