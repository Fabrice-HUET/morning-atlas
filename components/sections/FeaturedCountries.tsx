import { CountryCard } from '@/components/cards/CountryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/Button'
import { getFeaturedCountries } from '@/lib/content-helpers'

export function FeaturedCountries() {
  const featuredCountries = getFeaturedCountries()

  return (
    <section id="explorer" className="bg-cream py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Pays à explorer"
            title="Premières fiches pour voyager par le petit-déjeuner"
            description="Chaque carte sert de base éditoriale, avec des liens futurs vers recettes, ingrédients et guides."
          />
          <Button href="/countries" variant="secondary">
            Tous les pays
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCountries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </Container>
    </section>
  )
}
