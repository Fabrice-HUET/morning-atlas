import type { Metadata } from 'next'

import { EditorialPromise } from '@/components/sections/EditorialPromise'
import { FeaturedCategories } from '@/components/sections/FeaturedCategories'
import { FeaturedCountries } from '@/components/sections/FeaturedCountries'
import { FeaturedRecipes } from '@/components/sections/FeaturedRecipes'
import { FutureRoadmap } from '@/components/sections/FutureRoadmap'
import { HeroSection } from '@/components/sections/HeroSection'
import { DEFAULT_DESCRIPTION, buildPageMetadata } from '@/lib/seo'
import { buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = buildPageMetadata({
  title: 'Morning Atlas — Petits-déjeuners du monde',
  description: DEFAULT_DESCRIPTION,
  path: '/',
})

export default function Home() {
  const jsonLd = buildWebPageJsonLd({
    name: 'Morning Atlas — Petits-déjeuners du monde',
    description: DEFAULT_DESCRIPTION,
    path: '/',
  })

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />
      <HeroSection />
      <EditorialPromise />
      <FeaturedCountries />
      <FeaturedRecipes />
      <FeaturedCategories />
      <FutureRoadmap />
    </main>
  )
}
