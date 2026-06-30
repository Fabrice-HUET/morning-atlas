import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { buildPageMetadata } from '@/lib/seo'
import { buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = buildPageMetadata({
  title: 'À propos — Morning Atlas',
  description: 'La vision éditoriale de Morning Atlas.',
  path: '/about',
})

export default function AboutPage() {
  const jsonLd = buildWebPageJsonLd({
    name: 'À propos — Morning Atlas',
    description: 'La vision éditoriale de Morning Atlas.',
    path: '/about',
  })

  return (
    <main className="bg-cream py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(jsonLd),
        }}
      />
      <Container className="max-w-4xl">
        <SectionHeading
          level={1}
          eyebrow="À propos"
          title="Morning Atlas, un média pour les cultures du matin"
          description="Le projet documente les petits-déjeuners du monde avec un ton accessible, visuel et prudent."
        />
        <div className="mt-10 grid gap-5">
          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Ligne éditoriale</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Morning Atlas ne cherche pas à figer une cuisine nationale. Chaque fiche présente une version courante,
              traditionnelle ou régionale, avec des formulations nuancées quand les pratiques varient.
            </p>
          </section>
          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Évolution prévue</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Le socle actuel prépare les fiches pays, recettes, catégories, ingrédients, tags, boissons et guides
              comparatifs avant une éventuelle migration vers une vraie base de données.
            </p>
          </section>
        </div>
      </Container>
    </main>
  )
}
