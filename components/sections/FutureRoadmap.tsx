import { Container } from '@/components/layout/Container'
import { SectionHeading } from '@/components/layout/SectionHeading'

const reasons = ['Approche visuelle', 'Decouverte culturelle', 'Contenu accessible']
const roadmap = ['Fiches pays detaillees', 'Guides comparatifs', 'Recettes par ingredient', 'Contenus culturels']

export function FutureRoadmap() {
  return (
    <section className="bg-white py-20">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Pourquoi" title="Pourquoi Morning Atlas ?" />
          <div className="mt-8 grid gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                <p className="text-lg font-black text-stone-950">{reason}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Bientot" title="Les prochaines briques editoriales" />
          <div className="mt-8 grid gap-4">
            {roadmap.map((item) => (
              <div key={item} className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <p className="text-lg font-black text-stone-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
