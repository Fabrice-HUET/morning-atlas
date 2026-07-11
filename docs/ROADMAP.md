# Roadmap Morning Atlas

> Mise à jour le 2026-07-10, sur la base de l'audit complet du 2026-07-02 (`docs/AUDIT_2026-07.md`).
> Le détail de chaque tâche (critères d'acceptation + prompt agent prêt à coller) vit dans `docs/BACKLOG.md`.
> L'espace créateur / CV a sa roadmap dédiée : `docs/CREATOR_ROADMAP.md`.

## Vision

Morning Atlas est un atlas éditorial des petits-déjeuners du monde : fiches pays, recettes simples, ingrédients, catégories et guides doivent former un catalogue clair, sourcé, indexable avec prudence et maintenable.

## État actuel (audité)

**Le socle technique est solide** : lint, typecheck et build passent (652 pages), App Router propre, TypeScript strict, socle SEO P0 réel (sitemap, robots, canonicals, OG, JSON-LD), 53 images WebP alignées sur les slugs, intégrité référentielle parfaite (0 doublon, 0 référence cassée).

**Le blocant est éditorial, pas technique** : 100 % des fiches en `needsReview: true` et la quasi-totalité des textes sans accents français — y compris le H1 de la home. Trois risques structurels : inflation taxonomique (410 ingrédients, 547 tags, 123 catégories pour 53 contenus), fallback image `picsum.photos` contraire à la promesse de précision culturelle, breadcrumbs JSON-LD pointant vers des pages 404.

Voir `docs/AUDIT_2026-07.md` pour le constat détaillé par axe.

## Phases du projet

1. Fondation applicative — **fait**.
2. Fondation éditoriale (18 lots intégrés) — **fait**, relecture nécessaire.
3. Fondation visuelle (53 images WebP) — **fait**.
4. Fondation SEO technique — **fait**, corrections identifiées par l'audit.
5. **Maturité éditoriale — en cours. C'est la phase actuelle**, structurée par l'ordre d'exécution ci-dessous.
6. Pré-publication : Search Console, tests visuels, accessibilité, performance — à faire.
7. Publication et itérations — à faire.

## Avancement (2026-07-11)

- **Sprint 1** (tous les P0 techniques) : ✅ terminé — CODE-01, DATA-01, UI-01, IMG-01, SEO-01.
- **Sprint 2** (cœur éditorial) : 🔶 EDIT-02 ✅ ; EDIT-01 lot pilote 1 ✅ (20/106 fiches à `false`) ; lots suivants à faire.
- **Sprint 3** (consolidation SEO) : 🔶 en cours.
- **Piste créateur** (CREATOR-01 → 07) : ✅ terminée.
- Reste : fin du Sprint 0 (TOOL-02, CODE-03, IMG-02), Sprints 4-5, lots de relecture suivants.

## Ordre d'exécution

Chaque ID renvoie à sa fiche complète dans `docs/BACKLOG.md` (critères + prompt agent). Ne pas commencer un sprint tant que les tâches bloquantes du précédent ne sont pas livrées.

### Sprint 0 — Hygiène (≈ ½ journée)

| Ordre | ID | Tâche |
| --- | --- | --- |
| 1 | CODE-01 | Assainir le dépôt : fichier `main` parasite, committer le chantier creator sur une branche |
| 2 | TOOL-02 | Contraindre Node (`engines` + `.nvmrc`) |
| 3 | CODE-03 | Sortir `.idea/` et `tsconfig.tsbuildinfo` du versioning |
| 4 | IMG-02 | Nettoyer les assets template create-next-app |

### Sprint 1 — Bloquants de publication (P0)

| Ordre | ID | Tâche |
| --- | --- | --- |
| 5 | DATA-01 | **Restaurer les accents français partout** (LE chantier bloquant) |
| 6 | UI-01 | Retirer le badge public « A verifier » / « Publie » |
| 7 | IMG-01 | Remplacer le fallback picsum.photos par un placeholder local de marque |
| 8 | SEO-01 | Corriger les breadcrumbs JSON-LD qui pointent vers /categories et /ingredients (404) |

### Sprint 2 — Cœur éditorial (P0, l'objet de la phase de test)

| Ordre | ID | Tâche |
| --- | --- | --- |
| 9 | EDIT-02 | Documenter le processus de relecture (critères de sortie de `needsReview`) |
| 10 | EDIT-01 | Relire et valider un lot pilote de 8-12 fiches pays + recettes |

### Sprint 3 — Consolidation SEO (P1)

| Ordre | ID | Tâche |
| --- | --- | --- |
| 11 | SEO-02 | Noindex des pages ingrédients fines, seuil calculé depuis les données |
| 12 | SEO-06 | Sitemap : `lastModified` + exclusions pilotées par les données (partage la logique de SEO-02) |
| 13 | SEO-05 | Title template global |
| 14 | SEO-03 | Enrichir le JSON-LD Recipe (temps ISO 8601, portions, keywords) |
| 15 | SEO-04 | Image Open Graph par défaut de marque |
| 16 | PAGE-02 | Page index `/categories` |
| 17 | PAGE-03 | Trancher le cas de l'index `/ingredients` |
| 18 | PAGE-04 | Page 404 personnalisée |

### Sprint 4 — Design, accessibilité, outillage (P1)

| Ordre | ID | Tâche |
| --- | --- | --- |
| 19 | DESIGN-01 | Typographie de marque via next/font |
| 20 | DESIGN-02 | Unifier les tokens de couleur (@theme vs --ma-*) |
| 21 | A11Y-01 | Focus trap menu mobile, skip-link, prefers-reduced-motion |
| 22 | TOOL-01 | CI GitHub Actions : lint + typecheck + build + validation contenu |
| 23 | DATA-05 | Exposer la validation d'intégrité en script pnpm (préalable utile à TOOL-01) |

### Sprint 5 — Gouvernance des données (P1)

| Ordre | ID | Tâche |
| --- | --- | --- |
| 24 | DATA-06 | Traduire les enums affichés bruts (easy, grain, savory…) |
| 25 | DATA-02 | Unifier la double sémantique tags / tagSlugs |
| 26 | DATA-03 | Rationaliser les taxonomies (123 catégories, 410 ingrédients, 547 tags) |
| 27 | DATA-04 | Rendre le flag `featured` significatif |
| 28 | DATA-07 | Nettoyer les entrées orphelines |
| 29 | CODE-02 | Déplacer `app/docs/` vers `docs/` |

### Piste parallèle — Espace créateur & CV

Indépendante des sprints 1-5 (seul prérequis : CODE-01). Détail complet, direction artistique et prompts dans **`docs/CREATOR_ROADMAP.md`** :

CREATOR-01 (route groups + layout dédié) → CREATOR-02 (thème « Atelier ») → CREATOR-03 (scène SVG, retrait de three.js) + CREATOR-04 (récit : timeline, compétences, projets) → CREATOR-05 (CV web imprimable + PDF) → CREATOR-06 (SEO Person) → CREATOR-07 (qualité vitrine).

### Après la phase de test (P2 / P3)

- P2 : EDIT-03/04 (introductions taxonomies, page À propos enrichie), SEO-07 (validation post-déploiement), PERF-01 (baseline Lighthouse), A11Y-02 (contrastes), DESIGN-03 (rayons/focus), DOCS-01 (consolidation des docs).
- P3 (sur-ingénierie assumée en phase test) : PAGE-05 (guides individuels), TOOL-03 (tests unitaires), FEAT-01 → 04 (recherche, carte interactive, multilingue, CMS), SEO-08 (llms.txt + RSS).

## Règles de fonctionnement

- Une tâche = un prompt de `docs/BACKLOG.md` collé dans une session agent, sur une branche dédiée, validé par `pnpm lint && pnpm typecheck && pnpm build`.
- Après chaque tâche : entrée dans `docs/PROJECT_LOG.md`, case cochée dans `docs/BACKLOG.md`, commit.
- Aucune invention culturelle, jamais ; en cas de doute éditorial, `needsReview` reste à `true`.
- Ne pas surconstruire pendant la phase de test 30 jours : tout le P3 attend.
