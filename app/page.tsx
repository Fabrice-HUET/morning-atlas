const pilotCountries = [
  'France',
  'Japon',
  'Turquie',
  'Maroc',
  'Mexique',
  'Angleterre',
  'Inde',
  'Brésil',
  'Italie',
  'Corée du Sud',
]

const contentFormats = [
  'Fiches pays',
  'Infographies',
  'Carrousels',
  'Recettes simples',
  'Anecdotes culturelles',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff7ec] text-[#2b1b12]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-[#2b1b12] text-sm font-bold text-[#fff7ec]">
              MA
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">Morning Atlas</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#9a6a43]">
                Breakfast around the world
              </p>
            </div>
          </div>

          <a
            href="mailto:hello@morning-atlas.fr"
            className="hidden rounded-full border border-[#2b1b12]/15 px-4 py-2 text-sm font-medium hover:bg-white sm:inline-flex"
          >
            hello@morning-atlas.fr
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-[#9a4f1d] shadow-sm">
              Projet éditorial en préparation
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Découvrir le monde à travers les petits-déjeuners.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#604535]">
              Morning Atlas explore les habitudes du matin autour du monde :
              plats traditionnels, boissons, ingrédients, anecdotes culturelles
              et versions faciles à refaire chez soi.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@morning-atlas.fr"
                className="rounded-full bg-[#2b1b12] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#44291a]"
              >
                Contacter le projet
              </a>

              <a
                href="#pilotes"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-bold text-[#2b1b12] shadow-sm hover:bg-[#fff0da]"
              >
                Voir les contenus pilotes
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-xl shadow-[#9a6a43]/10">
            <div className="rounded-[1.5rem] bg-[#f7dfbc] p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white p-5">
                  <p className="text-4xl">🥐</p>
                  <p className="mt-4 font-bold">France</p>
                  <p className="mt-1 text-sm text-[#72513d]">
                    Café, tartines, viennoiseries.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <p className="text-4xl">🍚</p>
                  <p className="mt-4 font-bold">Japon</p>
                  <p className="mt-1 text-sm text-[#72513d]">
                    Riz, soupe miso, poisson.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <p className="text-4xl">🫖</p>
                  <p className="mt-4 font-bold">Maroc</p>
                  <p className="mt-1 text-sm text-[#72513d]">
                    Thé, pains, miel, huile d’olive.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5">
                  <p className="text-4xl">🍳</p>
                  <p className="mt-4 font-bold">Angleterre</p>
                  <p className="mt-1 text-sm text-[#72513d]">
                    Une version copieuse et salée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="pilotes" className="grid gap-6 pb-16 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">10 contenus pilotes</h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {pilotCountries.map((country) => (
                <span
                  key={country}
                  className="rounded-full bg-[#fff0da] px-4 py-2 text-sm font-medium text-[#6d4227]"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Formats prévus</h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {contentFormats.map((format) => (
                <span
                  key={format}
                  className="rounded-full bg-[#f1f5e8] px-4 py-2 text-sm font-medium text-[#4f642f]"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}