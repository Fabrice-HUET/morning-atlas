import Link from 'next/link'

import { Container } from '@/components/layout/Container'

// Thème « L'Atelier » : la marque Morning Atlas en polarité inversée (fond sombre, accent honey).
// La fonte Fraunces est chargée au layout racine (variable --font-fraunces, héritée ici).
export default function AtelierLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="atelier flex min-h-screen flex-col bg-ink text-cream">
      <a
        href="#atelier-content"
        className="cv-noprint sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-honey focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-ink"
      >
        Aller au contenu
      </a>
      <header className="border-b border-mocha/25">
        <Container className="flex items-center justify-between gap-4 py-5">
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-cream">L&apos;Atelier</span>
            <span className="text-xs font-semibold text-honey">Fabrice Huet</span>
          </div>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full border border-honey/40 px-4 py-2 text-sm font-bold text-cream transition hover:border-honey hover:bg-honey/10"
          >
            ← Morning Atlas
          </Link>
        </Container>
      </header>

      <div id="atelier-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </div>

      <footer className="border-t border-mocha/25">
        <Container className="py-6">
          <p className="text-xs text-cream/60">
            L&apos;Atelier — les coulisses de Morning Atlas.{' '}
            <Link href="/" className="font-semibold text-honey transition hover:text-honey/80">
              Retour à l&apos;atlas
            </Link>
          </p>
        </Container>
      </footer>
    </div>
  )
}
