import type { Metadata } from 'next'

import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'

export const metadata: Metadata = {
  title: 'A propos - Morning Atlas',
  description: 'La vision editoriale de Morning Atlas.',
}

export default function AboutPage() {
  return (
    <main className="bg-cream py-16">
      <Container className="max-w-4xl">
        <SectionHeading
          eyebrow="A propos"
          title="Morning Atlas, un media pour les cultures du matin"
          description="Le projet documente les petits-dejeuners du monde avec un ton accessible, visuel et prudent."
        />
        <div className="mt-10 grid gap-5">
          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Ligne editoriale</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Morning Atlas ne cherche pas a figer une cuisine nationale. Chaque fiche presente une version courante,
              traditionnelle ou regionale, avec des formulations nuancees quand les pratiques varient.
            </p>
          </section>
          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Evolution prevue</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Le socle actuel prepare les fiches pays, recettes, categories, ingredients, tags, boissons et guides
              comparatifs avant une eventuelle migration vers une vraie base de donnees.
            </p>
          </section>
        </div>
      </Container>
    </main>
  )
}
