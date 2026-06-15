import { CountryCard } from '@/components/cards/CountryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { Button } from '@/components/ui/Button'
import { getFeaturedCountries } from '@/lib/content-helpers'

export function FeaturedCountries() {
  const featuredCountries = getFeaturedCountries()

  return (
    <section id="explorer" className="bg-amber-50 py-20">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Pays a explorer"
            title="Premieres fiches pour voyager par le petit-dejeuner"
            description="Chaque carte sert de base editoriale, avec des liens futurs vers recettes, ingredients et guides."
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
