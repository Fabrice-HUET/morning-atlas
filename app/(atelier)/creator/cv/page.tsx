import type { Metadata } from 'next'
import Link from 'next/link'

import { PrintButton } from '@/components/creator/PrintButton'
import { Container } from '@/components/layout/Container'
import {
  creatorLanguages,
  creatorProfile,
  creatorSkills,
  creatorSoftSkills,
  creatorTimeline,
  timelineKindLabels,
} from '@/data/creator'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'CV — Fabrice Huet',
    description: 'CV de Fabrice Huet, développeur Front-End. Version web imprimable.',
    path: '/creator/cv',
  }),
  robots: { index: false, follow: true },
}

export default function CvPage() {
  return (
    <main className="cv-print py-12">
      <Container className="max-w-3xl">
        <div className="cv-noprint mb-8 flex flex-wrap items-center justify-between gap-3">
          <Link href="/creator" className="text-sm font-bold text-honey transition hover:text-honey/80">
            ← Retour au profil
          </Link>
          <PrintButton />
        </div>

        <article className="cv-sheet rounded-3xl border border-mocha/25 bg-espresso p-8 md:p-10">
          {/* En-tête */}
          <header className="cv-block border-b border-mocha/25 pb-6">
            <h1 className="text-4xl font-black tracking-tight text-cream">{creatorProfile.name}</h1>
            <p className="mt-1 text-lg font-bold text-honey">{creatorProfile.role}</p>
            <p className="mt-1 text-sm text-cream/70">{creatorProfile.tagline}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-cream/75">
              {creatorProfile.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-semibold text-cream hover:text-honey">
                    {link.label === 'Email' ? link.href.replace('mailto:', '') : link.label}
                  </a>
                </li>
              ))}
              <li>{creatorProfile.phone}</li>
              <li>{creatorProfile.location}</li>
            </ul>
          </header>

          {/* Résumé */}
          <section className="cv-block mt-6">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-honey">Résumé</h2>
            <div className="mt-3 grid gap-2">
              {creatorProfile.summary.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-6 text-cream/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Objectif */}
          <section className="cv-block mt-6">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-honey">Objectif</h2>
            <p className="mt-3 text-sm leading-6 text-cream/85">{creatorProfile.objective}</p>
          </section>

          {/* Expérience & parcours */}
          <section className="mt-6">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-honey">Expérience &amp; parcours</h2>
            <div className="mt-3 grid gap-5">
              {creatorTimeline.map((item) => (
                <div key={`${item.org}-${item.role}`} className="cv-block">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-base font-black text-cream">
                      {item.role} <span className="text-honey">— {item.org}</span>
                    </h3>
                    <span className="text-xs font-semibold text-cream/55">
                      {'period' in item ? item.period : timelineKindLabels[item.kind]}
                      {'location' in item ? ` · ${item.location}` : ''}
                    </span>
                  </div>
                  {'highlights' in item ? (
                    <ul className="mt-2 grid gap-1 text-sm leading-6 text-cream/80">
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>• {highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                  {'note' in item ? <p className="mt-1 text-sm italic leading-6 text-cream/65">{item.note}</p> : null}
                </div>
              ))}
            </div>
          </section>

          {/* Compétences techniques */}
          <section className="cv-block mt-6">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-honey">Compétences techniques</h2>
            <div className="mt-3 grid gap-3">
              {creatorSkills.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-bold text-cream">{group.title}</h3>
                  <p className="mt-0.5 text-sm leading-6 text-cream/75">{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Compétences transverses */}
          <section className="cv-block mt-6">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-honey">Compétences transverses</h2>
            <ul className="mt-3 grid gap-1 text-sm leading-6 text-cream/80 sm:grid-cols-2">
              {creatorSoftSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </section>

          {/* Langues */}
          <section className="cv-block mt-6">
            <h2 className="text-sm font-black uppercase tracking-[0.16em] text-honey">Langues</h2>
            <ul className="mt-3 grid gap-1 text-sm leading-6 text-cream/80">
              {creatorLanguages.map((language) => (
                <li key={language}>• {language}</li>
              ))}
            </ul>
          </section>
        </article>
      </Container>
    </main>
  )
}
