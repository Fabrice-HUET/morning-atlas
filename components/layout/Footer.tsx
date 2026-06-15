import Link from 'next/link'

import { categories } from '@/data/categories'
import { countries } from '@/data/countries'
import { Container } from '@/components/layout/Container'

const mainLinks = [
  { href: '/countries', label: 'Pays' },
  { href: '/recipes', label: 'Recettes' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'A propos' },
]

export function Footer() {
  const year = new Date().getFullYear()
  const continents = Array.from(new Set(countries.map((country) => country.continent)))

  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xl font-black">Morning Atlas</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-stone-300">
            Un media editorial et visuel pour decouvrir les cultures du matin, un petit-dejeuner a la fois.
          </p>
          <p className="mt-6 text-sm font-semibold text-amber-200">
            Decouvrir les cultures du matin, un petit-dejeuner a la fois.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-stone-400">Navigation</h2>
          <div className="mt-4 grid gap-3">
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-stone-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-stone-400">Categories</h2>
          <div className="mt-4 grid gap-3">
            {categories.slice(0, 5).map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="text-sm text-stone-300 hover:text-white">
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-stone-400">Regions</h2>
          <div className="mt-4 grid gap-3">
            {continents.map((continent) => (
              <span key={continent} className="text-sm text-stone-300">
                {continent}
              </span>
            ))}
          </div>
          <div className="mt-6 flex gap-3 text-sm text-stone-400">
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </Container>
      <Container className="border-t border-white/10 py-5 text-sm text-stone-400">
        © {year} Morning Atlas. Tous droits reserves.
      </Container>
    </footer>
  )
}
