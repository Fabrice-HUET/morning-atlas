import { Container } from '@/components/layout/Container'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'

// 404 globale. Elle est rendue dans le layout racine (qui ne porte plus la navbar/footer
// depuis l'isolation de l'espace créateur), donc on réintègre ici la navigation du magazine.
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-cream py-20">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl border border-oat bg-paper p-8 text-center shadow-sm sm:p-10">
            <p className="text-5xl" aria-hidden="true">
              🍳
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-mocha">Erreur 404</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-espresso">Cette page n’est pas au menu</h1>
            <p className="mt-4 text-base leading-8 text-espresso/80">
              La page que vous cherchez a peut-être changé d’adresse ou n’existe pas encore. Reprenons l’exploration du
              bon pied.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/">Retour à l’accueil</Button>
              <Button href="/countries" variant="secondary">
                Explorer les pays
              </Button>
              <Button href="/recipes" variant="secondary">
                Voir les recettes
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
