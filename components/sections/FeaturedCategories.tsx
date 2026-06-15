import { CategoryCard } from '@/components/cards/CategoryCard'
import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { categories } from '@/data/categories'

const featuredCategorySlugs = ['sweet', 'savory', 'hearty', 'quick', 'healthy', 'traditional']

export function FeaturedCategories() {
  const featuredCategories = categories.filter((category) => featuredCategorySlugs.includes(category.slug))

  return (
    <section className="bg-amber-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="Categories"
          title="Explorer par envie, texture ou rythme"
          description="La taxonomie prépare les futurs parcours : sucre, sale, copieux, rapide, sain ou traditionnel."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </Container>
    </section>
  )
}
