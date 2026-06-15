import Link from 'next/link'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/#explorer', label: 'Explorer' },
  { href: '/countries', label: 'Pays' },
  { href: '/recipes', label: 'Recettes' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'A propos' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-amber-50/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Morning Atlas">
          <span className="flex size-11 items-center justify-center rounded-lg bg-stone-950 text-sm font-black text-white">
            MA
          </span>
          <span>
            <span className="block text-base font-black leading-5 text-stone-950">Morning Atlas</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-amber-800 sm:block">
              Breakfast world guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-stone-700 hover:text-stone-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/countries" className="hidden sm:inline-flex">
          Commencer le voyage
        </Button>
      </Container>
    </header>
  )
}
