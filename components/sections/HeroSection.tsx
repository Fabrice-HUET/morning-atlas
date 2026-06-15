import { Button } from '@/components/ui/Button'

const heroTiles = [
  { emoji: '🥣', label: 'Porridge' },
  { emoji: '🍳', label: 'Oeufs' },
  { emoji: '🍚', label: 'Riz' },
  { emoji: '🥖', label: 'Pain' },
  { emoji: '☕', label: 'Cafe' },
  { emoji: '🫖', label: 'The' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-amber-50">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-800">Media culinaire et culturel</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            Decouvrir le monde a travers les petits-dejeuners
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Morning Atlas explore les habitudes du matin autour du monde avec des fiches pays, des recettes simples,
            des ingredients et des reperes culturels accessibles.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/countries">Explorer les pays</Button>
            <Button href="/recipes" variant="secondary">
              Voir les recettes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {heroTiles.map((tile) => (
            <div key={tile.label} className="aspect-square rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
              <span className="text-5xl" role="img" aria-label={tile.label}>
                {tile.emoji}
              </span>
              <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-stone-500">{tile.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
