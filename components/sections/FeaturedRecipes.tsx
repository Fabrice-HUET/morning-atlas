import { RecipeCard } from '@/components/cards/RecipeCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/Button'
import { getFeaturedRecipes } from '@/lib/content-helpers'

export function FeaturedRecipes() {
  const featuredRecipes = getFeaturedRecipes()

  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Recettes simples"
            title="Des bases accessibles pour commencer"
            description="Les recettes de depart sont volontairement courtes : elles structurent le futur catalogue avant enrichissement editorial."
          />
          <Button href="/recipes" variant="secondary">
            Voir les recettes
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </Container>
    </section>
  )
}
