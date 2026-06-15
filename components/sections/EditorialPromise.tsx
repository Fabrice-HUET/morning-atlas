import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'

const promises = [
  {
    title: 'Cultures',
    text: 'Situer chaque plat dans un contexte, avec des formulations prudentes et des variations locales.',
  },
  {
    title: 'Recettes',
    text: 'Proposer des versions simples a refaire, sans pretendre remplacer les gestes traditionnels.',
  },
  {
    title: 'Habitudes du matin',
    text: 'Comparer boissons, rythmes, ingredients et assiettes pour mieux lire les quotidiens.',
  },
]

export function EditorialPromise() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Promesse editoriale"
          title="Un atlas du matin, simple et chaleureux"
          description="Le site est pense comme une base vivante : chaque fiche pourra devenir plus detaillee, illustree et reliee a des recettes, categories, ingredients et guides."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {promises.map((promise) => (
            <article key={promise.title} className="rounded-lg border border-stone-200 bg-amber-50 p-6">
              <h3 className="text-xl font-black text-stone-950">{promise.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">{promise.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
