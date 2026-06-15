import { EditorialPromise } from '@/components/sections/EditorialPromise'
import { FeaturedCategories } from '@/components/sections/FeaturedCategories'
import { FeaturedCountries } from '@/components/sections/FeaturedCountries'
import { FeaturedRecipes } from '@/components/sections/FeaturedRecipes'
import { FutureRoadmap } from '@/components/sections/FutureRoadmap'
import { HeroSection } from '@/components/sections/HeroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EditorialPromise />
      <FeaturedCountries />
      <FeaturedRecipes />
      <FeaturedCategories />
      <FutureRoadmap />
    </main>
  )
}
