'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Container } from '@/components/layout/Container'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/countries', label: 'Pays' },
  { href: '/recipes', label: 'Recettes' },
  { href: '/guides', label: 'Guides' },
  { href: '/about', label: 'À propos' },
]

const mobileMenuId = 'mobile-navigation-panel'

function BrandIcon({ size = 44 }: { size?: number }) {
  return (
    <span className="flex shrink-0 items-center justify-center rounded-xl bg-paper shadow-sm ring-1 ring-oat">
      <Image
        src="/icon.png"
        alt="Morning Atlas"
        width={size}
        height={size}
        className="rounded-xl"
        priority
      />
    </span>
  )
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return
    }

    const originalOverflow = document.body.style.overflow
    const burger = burgerRef.current

    document.body.style.overflow = 'hidden'

    // Déplace le focus dans le panneau à l'ouverture.
    closeButtonRef.current?.focus()

    function getFocusable() {
      const container = overlayRef.current
      if (!container) {
        return [] as HTMLElement[]
      }

      return Array.from(
        container.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => element.getClientRects().length > 0)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      // Piège le focus : Tab / Shift+Tab bouclent entre le premier et le dernier élément focusable.
      const focusable = getFocusable()
      if (focusable.length === 0) {
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', onKeyDown)
      // Restitue le focus au bouton d'ouverture à la fermeture.
      burger?.focus()
    }
  }, [isMobileMenuOpen])

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-30 border-b border-oat/80 bg-cream/95 backdrop-blur">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Morning Atlas — accueil">
          <BrandIcon />
          <span>
            <span className="block text-base font-black leading-5 text-espresso">Morning Atlas</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-mocha sm:block">
              Breakfast world guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-espresso/75 hover:text-espresso">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href="/countries" className="hidden md:inline-flex">
          Commencer le voyage
        </Button>

        <button
          ref={burgerRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-mocha/30 bg-paper text-espresso shadow-sm transition hover:border-toast hover:bg-cream md:hidden"
          aria-label={isMobileMenuOpen ? 'Fermer le menu mobile' : 'Ouvrir le menu mobile'}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">{isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 rounded-full bg-espresso transition ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span className={`h-0.5 rounded-full bg-espresso transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-0.5 rounded-full bg-espresso transition ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-espresso/35 transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Fermer le menu mobile"
          tabIndex={isMobileMenuOpen ? 0 : -1}
          onClick={closeMobileMenu}
        />

        <aside
          id={mobileMenuId}
          className={`absolute right-0 top-0 flex h-dvh w-[min(22rem,calc(100vw-2rem))] flex-col border-l border-oat bg-cream p-6 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Menu mobile"
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Morning Atlas — accueil"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={closeMobileMenu}
            >
              <BrandIcon size={40} />
              <span className="text-sm font-black text-espresso">Morning Atlas</span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-mocha/30 bg-paper text-2xl leading-none text-espresso transition hover:border-toast hover:bg-cream"
              aria-label="Fermer le menu mobile"
              tabIndex={isMobileMenuOpen ? 0 : -1}
              onClick={closeMobileMenu}
            >
              ×
            </button>
          </div>

          <nav className="mt-10 grid gap-3" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-oat bg-paper px-4 py-3 text-base font-bold text-espresso shadow-sm transition hover:border-toast hover:bg-cream"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-lg border border-oat bg-paper p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mocha">Morning Atlas</p>
            <p className="mt-2 text-sm leading-6 text-espresso/75">
              Un atlas éditorial pour explorer les petits-déjeuners du monde.
            </p>
          </div>
        </aside>
      </div>
    </header>
  )
}
