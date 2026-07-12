# Next steps — Morning Atlas

> Mise à jour le 2026-07-12. Instantané d'état de référence : `docs/README.md`. Détail des tâches et prompts agent : `docs/BACKLOG.md`. Espace créateur / CV : `docs/CREATOR_ROADMAP.md`. Journal détaillé : `docs/PROJECT_LOG.md`.

## État actuel

**Le socle est complet, le contenu relu, le site prêt pour une preview/déploiement.**

- ✅ **Tout le P0/P1** : hygiène git & CI, accents FR, SEO (breadcrumbs, sitemap piloté par les données, JSON-LD Recipe, title template, OG par défaut, noindex ingrédients fins), pages index `/categories` `/ingredients` + 404, typographie de marque, tokens unifiés, a11y (focus trap, skip-links, reduced-motion), Node contraint, `validate:content` en CI.
- ✅ **Espace créateur « L'Atelier »** (CREATOR-01 → 07) : section isolée, thème sombre, scène SVG sans JS, CV web imprimable, SEO Person. **PDF du CV généré** (`public/files/fabrice-huet-cv.pdf`, 2 pages A4) — le bouton « Télécharger le PDF » de `/creator` s'affiche.
- ✅ **Gouvernance des données** (DATA-02 → 07) : tags unifiés, taxonomies rationalisées (123→80 catégories), `featured` significatif, enums traduits en FR.
- ✅ **Relecture éditoriale complète** : 106/106 fiches à `needsReview: false`.
- ✅ **P2/P3** : llms.txt + RSS, guides individuels, checklist post-déploiement, 13 tests Vitest en CI, intros de catégories, /about enrichi, contrastes audités.

## Prochaine mission immédiate

**Le backlog des finitions est vidé.** Il ne reste que des chantiers optionnels (voir ci-dessous) — aucun n'est bloquant pour un premier déploiement.

## Reste à faire — tout optionnel

- `PERF-01` — baseline Lighthouse : **nécessite un navigateur**, à lancer une fois le site déployé (Chrome indispo dans l'environnement agent).
- `FEAT-01 → 04` — **fonctionnalités lourdes** qui changent le produit (recherche/filtres, carte interactive, multilingue EN, migration CMS). Ce sont des **décisions produit**, pas des finitions : à trancher par le propriétaire avant d'ouvrir une tâche. Prompts et critères dans `docs/BACKLOG.md`.

## Actions côté humain (hors code)

- Déployer sur Vercel et valider en preview.
- Lancer Lighthouse et valider les JSON-LD (Rich Results) une fois en ligne ; brancher Search Console (voir `docs/SEO_VALIDATION_CHECKLIST.md`).

## Commandes utiles

- `git status --short`
- `git log --oneline --decorate -n 15`
- `pnpm lint` · `pnpm typecheck` · `pnpm test` · `pnpm build`
- `pnpm validate:content` — intégrité des données (slugs dupliqués, références cassées) ; exécuté aussi en CI (`.github/workflows/ci.yml`)
