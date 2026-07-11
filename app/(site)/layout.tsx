import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-espresso focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-cream focus:shadow-sm"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <div id="contenu" tabIndex={-1} className="focus:outline-none">
        {children}
      </div>
      <Footer />
    </>
  )
}
