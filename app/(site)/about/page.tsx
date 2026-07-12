import type { Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'
import { buildPageMetadata } from '@/lib/seo'
import { buildWebPageJsonLd, serializeJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = buildPageMetadata({
  title: 'À propos',
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
              traditionnelle ou régionale, avec des formulations nuancées quand les pratiques varient. Nous évitons les
              généralisations : un plat est décrit comme une pratique située, jamais comme le petit-déjeuner unique de
              tout un pays.
            </p>
          </section>

          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Méthode et sources</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Chaque fiche pays et recette s’appuie sur des sources éditoriales identifiées, affichées publiquement en
              bas de page. Les affirmations culturelles sont soit couvertes par ces sources, soit formulées avec
              prudence (« souvent », « selon les familles », « dans certaines régions »).
            </p>
            <p className="mt-3 leading-7 text-espresso/80">
              Les fiches passent par une relecture selon une grille de critères objectifs (exactitude et sourcing,
              non-généralisation, cohérence interne, langue). Tant qu’une fiche n’a pas franchi cette relecture, elle
              reste marquée pour vérification en interne.
            </p>
          </section>

          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Limites assumées</h2>
            <ul className="mt-4 grid gap-2 leading-7 text-espresso/80">
              <li>• Le site est en phase de construction : le contenu évolue et s’affine.</li>
              <li>• Aucune prétention à l’exhaustivité : les fiches sont des points d’entrée, pas des références absolues.</li>
              <li>• En cas de doute non résolu par une source, l’information est nuancée ou écartée plutôt qu’affirmée.</li>
            </ul>
          </section>

          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Images</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Les visuels sont des illustrations locales au style « carnet de voyage », dans la palette de la marque.
              Nous n’utilisons pas de photo générique ni d’image sans rapport culturel : une illustration de repli
              neutre s’affiche si un visuel manque.
            </p>
          </section>

          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Évolution prévue</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Le socle actuel prépare les fiches pays, recettes, catégories, ingrédients, tags, boissons et guides
              comparatifs avant une éventuelle migration vers une vraie base de données.
            </p>
          </section>

          <section className="rounded-lg border border-oat bg-paper p-6 shadow-sm">
            <h2 className="text-2xl font-black text-espresso">Contact</h2>
            <p className="mt-4 leading-7 text-espresso/80">
              Une remarque, une source à corriger ou une nuance à apporter ? Le projet est porté par un créateur unique
              — voir la page{' '}
              <Link href="/creator" className="font-semibold text-espresso underline decoration-toast/40 underline-offset-4 hover:text-mocha">
                À propos du créateur
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  )
}
