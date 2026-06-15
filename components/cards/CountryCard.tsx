import Link from 'next/link'

import { Flag } from '@/components/ui/Flag'
import { Pill } from '@/components/ui/Pill'
import type { CountryBreakfast } from '@/types/country'

type CountryCardProps = {
  country: CountryBreakfast
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/countries/${country.slug}`}
      className="group grid min-h-72 rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <Flag emoji={country.flagEmoji} label={country.country} />
        <Pill tone={country.needsReview ? 'stone' : 'green'}>{country.needsReview ? 'A verifier' : 'Publie'}</Pill>
      </div>
      <div className="mt-8">
        <p className="text-sm font-semibold text-amber-700">{country.continent}</p>
        <h3 className="mt-2 text-xl font-black text-stone-950 group-hover:text-amber-800">{country.country}</h3>
        <p className="mt-1 text-sm font-semibold text-stone-700">{country.breakfastName}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-stone-600">{country.shortDescription}</p>
      </div>
    </Link>
  )
}
