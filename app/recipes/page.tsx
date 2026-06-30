import type { Metadata } from 'next'

import { RecipeCard } from '@/components/cards/RecipeCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { recipes } from '@/data/recipes'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Recettes — Morning Atlas',
  description: 'Recettes simples pour explorer les petits-déjeuners du monde.',
  path: '/recipes',
})

export default function RecipesPage() {
  return (
    <main className="bg-cream py-16">
      <Container>
        <SectionHeading
          level={1}
          eyebrow="Recettes"
          title="Recettes simples à refaire"
          description="Des versions de départ pour structurer le catalogue, avec notes de prudence quand les recettes devront être relues."
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
