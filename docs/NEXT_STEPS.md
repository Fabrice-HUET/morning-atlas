# Next steps — Morning Atlas

> Mise à jour le 2026-07-11. Source de vérité pour l'ordre : `docs/ROADMAP.md`. Détail des tâches et prompts agent : `docs/BACKLOG.md`. Espace créateur / CV : `docs/CREATOR_ROADMAP.md`. Constat complet : `docs/AUDIT_2026-07.md`. Procédure de relecture éditoriale : `docs/EDITORIAL_REVIEW.md`. Journal détaillé : `docs/PROJECT_LOG.md`.

## État actuel

**Sprint 1 (tous les P0 « techniques ») terminé et poussé :**
- ✅ `CODE-01` — dépôt assaini, branche unique `main`.
- ✅ `DATA-01` — accents français restaurés (données + UI ; résidus ambigus traités au fil des lots de relecture).
- ✅ `UI-01` — statut interne `needsReview` retiré de l'affichage public.
- ✅ `IMG-01` — fallback picsum remplacé par un placeholder local.
- ✅ `SEO-01` — breadcrumbs JSON-LD 404 corrigés.

**Sprint 2 (cœur éditorial) démarré :**
- ✅ `EDIT-02` — procédure de relecture écrite (`docs/EDITORIAL_REVIEW.md`).
- ✅ `EDIT-01` — **lot pilote 1** relu : 10 pays + 10 recettes passés à `needsReview: false` (20/106).

**Espace créateur « L'Atelier » (CREATOR-01 → 07) : terminé.**
- Section isolée (route groups), thème sombre inversé + Fraunces, scène SVG sans JS (three.js retiré), récit en timeline, CV web imprimable `/creator/cv`, SEO Person + OG dédiée, a11y/perf soignées. Détail : `docs/CREATOR_ROADMAP.md`.

## Prochaine mission immédiate

**Sprint 3 — Consolidation SEO (`SEO-02` → `SEO-06`), dans l'ordre :**

1. `SEO-02` — noindex des pages ingrédients fines (seuil calculé depuis les données).
2. `SEO-06` — sitemap : `lastModified` + exclusions pilotées par les données (partage la logique de SEO-02).
3. `SEO-05` — title template global.
4. `SEO-03` — enrichir le JSON-LD Recipe (temps ISO 8601, portions, keywords).
5. `SEO-04` — image Open Graph par défaut de marque.

Chaque tâche a son prompt et ses critères dans `docs/BACKLOG.md`.

## Ensuite

- Reste du Sprint 0 (hygiène) : `TOOL-02` (engines + .nvmrc), `CODE-03` (.idea/ hors versioning), `IMG-02` (assets template).
- Pages : `PAGE-02` (index /categories), `PAGE-03` (/ingredients), `PAGE-04` (404).
- Sprint 4 (design/a11y/CI) et Sprint 5 (gouvernance des données) — voir `docs/ROADMAP.md`.
- **Lots de relecture suivants** (`EDIT-01` répété) : 10 fiches à la fois, avec la grille de `docs/EDITORIAL_REVIEW.md`.

## Actions restées côté Fabrice

- **Générer le PDF du CV** : `pnpm dev` → `/creator/cv` → Imprimer → enregistrer dans `public/files/fabrice-huet-cv.pdf` (procédure dans `docs/CREATOR_ROADMAP.md`).
- **Lighthouse** : lancer les scores réels de `/creator` et `/creator/cv` pour figer la baseline (Chrome indispo dans l'environnement agent).

## Risques / TODO

- 43 pays + 43 recettes restent `needsReview: true` — à relire par lots.
- Aucune CI : rien n'empêche un commit qui casse le build — traité par `TOOL-01`.
- Node système en 18 alors que Next 16 exige ≥ 20.9 — traité par `TOOL-02`.

## Commandes utiles

- `git status --short`
- `git log --oneline --decorate -n 15`
- `pnpm lint` · `pnpm typecheck` · `pnpm build`
