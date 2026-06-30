import Link from 'next/link'

import { BreakfastImage } from '@/components/images/BreakfastImage'
import { Flag } from '@/components/ui/Flag'
import { Pill } from '@/components/ui/Pill'
import type { CountryBreakfast } from '@/types/country'

type CountryCardProps = {
  country: CountryBreakfast
}

export function CountryCard({ country }: CountryCardProps) {
  const breakfastImageSlug = country.recipeSlugs[0] ?? country.slug

  return (
    <Link
      href={`/countries/${country.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-oat bg-paper shadow-sm transition hover:-translate-y-0.5 hover:border-toast hover:shadow-md"
    >
      <BreakfastImage
        slug={breakfastImageSlug}
        alt={`${country.breakfastName}, petit-dejeuner en ${country.country}`}
        className="aspect-[4/3] w-full"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <Flag emoji={country.flagEmoji} label={country.country} />
          <Pill tone={country.needsReview ? 'oat' : 'sage'}>{country.needsReview ? 'A verifier' : 'Publie'}</Pill>
        </div>
        <div className="mt-8">
          <p className="text-sm font-semibold text-toast">{country.continent}</p>
          <h3 className="mt-2 text-xl font-black text-espresso group-hover:text-mocha">{country.country}</h3>
          <p className="mt-1 text-sm font-semibold text-ink">{country.breakfastName}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-espresso/75">{country.shortDescription}</p>
        </div>
      </div>
    </Link>
  )
}
