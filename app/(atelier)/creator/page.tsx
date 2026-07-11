import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { Metadata } from 'next'
import Link from 'next/link'

import { AtelierScene } from '@/components/creator/AtelierScene'
import { Container } from '@/components/layout/Container'
import {
  compactExperiences,
  creatorExperiences,
  creatorProfile,
  creatorProjects,
  creatorSkills,
} from '@/data/creator'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'À propos du créateur — Morning Atlas',
  description:
    'Profil de Fabrice Huet, développeur Front-End orienté UX, accessibilité, performance et qualité du code.',
  path: '/creator',
})

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-honey">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-cream">{title}</h2>
    </div>
  )
}

function TagList({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-mocha/30 bg-espresso px-3 py-1 text-xs font-bold text-cream/90"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default function CreatorPage() {
  const cvFilePath = join(process.cwd(), 'public', creatorProfile.cvPath.replace(/^\//, ''))
  const isCvAvailable = existsSync(cvFilePath)

  return (
    <main className="py-16">
      <Container>
        <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-honey">Créateur de Morning Atlas</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-cream">À propos du créateur</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/80">{creatorProfile.intro}</p>
            <TagList items={creatorProfile.focusAreas} />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={creatorProfile.cvPath}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-honey px-5 py-2.5 text-sm font-bold text-ink shadow-sm transition hover:bg-honey/90"
              >
                Télécharger mon CV
              </a>
              <Link
                href="/"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-honey/40 px-5 py-2.5 text-sm font-bold text-cream transition hover:border-honey hover:bg-honey/10"
              >
                Retour à Morning Atlas
              </Link>
            </div>
            {!isCvAvailable ? (
              <p className="mt-3 text-sm leading-6 text-cream/55">CV bientôt disponible à cet emplacement.</p>
            ) : null}
          </div>
          <AtelierScene />
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle eyebrow="Profil" title={creatorProfile.tagline} />
          <div className="grid gap-4">
            {creatorProfile.summary.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-cream/80">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle eyebrow="Compétences" title="Un socle front-end, produit et qualité." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {creatorSkills.map((skillGroup) => (
              <article key={skillGroup.title} className="rounded-2xl border border-mocha/25 bg-espresso p-5">
                <h3 className="text-lg font-black text-cream">{skillGroup.title}</h3>
                <TagList items={skillGroup.items} />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle eyebrow="Expériences" title="Expériences principales." />
          <div className="mt-8 grid gap-5">
            {creatorExperiences.map((experience) => (
              <article key={experience.company} className="rounded-2xl border border-mocha/25 bg-espresso p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-cream">{experience.role}</h3>
                    <p className="mt-1 text-sm font-bold text-honey">{experience.company}</p>
                  </div>
                  <p className="rounded-full bg-honey/15 px-3 py-1 text-xs font-bold text-honey">
                    {experience.period} · {experience.location}
                  </p>
                </div>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-cream/75">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-mocha/25 bg-espresso/60 p-5">
            <h3 className="text-lg font-black text-cream">Autres expériences utiles</h3>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-cream/75">
              {compactExperiences.map((experience) => (
                <li key={experience}>• {experience}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle eyebrow="Projets" title="Sites, produits et interfaces." />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {creatorProjects.map((project) => (
              <article key={project.name} className="rounded-2xl border border-mocha/25 bg-espresso p-6">
                <h3 className="text-lg font-black text-cream">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 rounded-3xl border border-mocha/25 bg-espresso p-6 md:grid-cols-2">
          <div>
            <SectionTitle eyebrow="CV" title="Une version PDF prévue pour les recruteurs." />
            <p className="mt-4 text-sm leading-6 text-cream/70">
              Le bouton pointe vers l’emplacement public prévu pour le CV. La page reste utilisable même si le fichier
              PDF n’est pas encore ajouté au dépôt.
            </p>
            <a
              href={creatorProfile.cvPath}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-honey px-5 py-2.5 text-sm font-bold text-ink shadow-sm transition hover:bg-honey/90"
            >
              Télécharger mon CV
            </a>
          </div>
          <div>
            <SectionTitle eyebrow="Liens" title="Contact professionnel." />
            <div className="mt-5 flex flex-wrap gap-3">
              {creatorProfile.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-honey/40 px-4 py-2 text-sm font-bold text-cream transition hover:border-honey hover:bg-honey/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
