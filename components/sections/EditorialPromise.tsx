import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'

const promises = [
  {
    title: 'Cultures',
    text: 'Situer chaque plat dans un contexte, avec des formulations prudentes et des variations locales.',
  },
  {
    title: 'Recettes',
    text: 'Proposer des versions simples à refaire, sans prétendre remplacer les gestes traditionnels.',
  },
  {
    title: 'Habitudes du matin',
    text: 'Comparer boissons, rythmes, ingrédients et assiettes pour mieux lire les quotidiens.',
  },
]

export function EditorialPromise() {
  return (
    <section className="bg-paper py-20">
      <Container>
        <SectionHeading
          eyebrow="Promesse éditoriale"
          title="Un atlas du matin, simple et chaleureux"
          description="Le site est pensé comme une base vivante : chaque fiche pourra devenir plus détaillée, illustrée et reliée à des recettes, catégories, ingrédients et guides."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promises.map((promise) => (
            <article key={promise.title} className="rounded-lg border border-oat bg-cream p-6">
              <h3 className="text-xl font-black text-espresso">{promise.title}</h3>
              <p className="mt-3 text-sm leading-6 text-espresso/80">{promise.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
