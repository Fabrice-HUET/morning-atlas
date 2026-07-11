import Link from 'next/link'

import { Container } from '@/components/layout/Container'

// Layout provisoire de l'espace créateur « L'Atelier ».
// Le thème dédié (palette Mocha Mousse inversée, fond sombre) arrive en CREATOR-02.
export default function AtelierLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <header className="border-b border-oat">
        <Container className="flex items-center justify-between gap-4 py-5">
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-espresso">L&apos;Atelier</span>
            <span className="text-xs font-semibold text-mocha">Fabrice Huet</span>
          </div>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center rounded-full border border-mocha/35 bg-paper px-4 py-2 text-sm font-bold text-espresso transition hover:border-toast hover:bg-oat/60"
          >
            ← Morning Atlas
          </Link>
        </Container>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-oat">
        <Container className="py-6">
          <p className="text-xs text-espresso/70">
            L&apos;Atelier — les coulisses de Morning Atlas.{' '}
            <Link href="/" className="font-semibold text-mocha hover:text-toast">
              Retour à l&apos;atlas
            </Link>
          </p>
        </Container>
      </footer>
    </div>
  )
}
