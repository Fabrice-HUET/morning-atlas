# Documentation Morning Atlas — index

Point d'entrée unique de la doc projet. Chaque document a **un rôle précis** (source de vérité par usage) pour éviter de reporter la même info à plusieurs endroits.

## Où trouver quoi

| Document | Rôle (source de vérité pour…) |
| --- | --- |
| `README.md` (ce fichier) | Index + **instantané de l'état du projet** (ci-dessous) |
| `ROADMAP.md` | Vision, phases, ordre d'exécution en sprints |
| `BACKLOG.md` | Toutes les tâches (ID, critères, **prompts agent prêts à coller**) + table de suivi |
| `NEXT_STEPS.md` | Prochaines actions courtes |
| `PROJECT_LOG.md` | Journal chronologique (une entrée par tâche livrée) |
| `EDITORIAL_REVIEW.md` | Procédure et grille de relecture des fiches (`needsReview`) |
| `SEO_VALIDATION_CHECKLIST.md` | Checklist SEO à exécuter après mise en ligne (Rich Results, Search Console) |
| `CONTENT_TRACKER.md` | État par fiche (relecture, prêt à publier) |
| `CREATOR_ROADMAP.md` | Espace créateur « L'Atelier » (fait) + génération du PDF CV |
| `TAXONOMY_SEO_AUDIT.md` | Audit et rationalisation des taxonomies (catégories/ingrédients/tags) |
| `AUDIT_2026-07.md` | Audit initial complet (constat de départ, archivé) |
| `SEO_LLM_PLAN.md`, `IMAGE_*_REPORT.md` | Plans/rapports thématiques (archives de référence) |
| `lots/` | Notes historiques d'intégration éditoriale par lot (archive) |

## Instantané de l'état — 2026-07-12

**Le socle est complet et le contenu relu. Le site est prêt pour une preview/déploiement.**

**Terminé :**
- Tout le **P0/P1** de la roadmap : hygiène git & CI, accents, SEO (breadcrumbs, sitemap, JSON-LD Recipe, title template, OG, noindex ingrédients fins), pages index `/categories` `/ingredients` + 404, typographie de marque (Fraunces + Source Sans), tokens unifiés, accessibilité (focus trap, skip-links, reduced-motion), environnement Node contraint, validation de contenu en CI.
- **Espace créateur « L'Atelier »** (CREATOR-01 → 07) : section isolée, thème sombre, scène SVG sans JS, CV web imprimable, SEO Person.
- **Gouvernance des données** (DATA-02 → 07) : tags unifiés, taxonomies rationalisées (123→80 catégories), `featured` significatif, enums traduits en FR.
- **Relecture éditoriale complète** : **106/106 fiches** à `needsReview: false`, langue nettoyée en profondeur (correcteur FR + résolution des ambigus en contexte).
- **Sprint finition** : `/about` enrichi (méthode, sources, limites), docs consolidées, assets template supprimés, `app/docs` déplacé, contrastes audités, focus-visible global.
- **P2/P3 traités** : `SEO-08` (llms.txt + flux RSS), `PAGE-05` (guides individuels `/guides/[slug]`), `SEO-07` (checklist post-déploiement), `TOOL-03` (13 tests Vitest en CI), `EDIT-03` (intros des 15 catégories fortes), `EDIT-04`, `DESIGN-03`, `A11Y-02`, `DOCS-01`, `CODE-02`, `DATA-07`.

**Backlog quasi vidé — reste uniquement, tout optionnel :**
- `PERF-01` : baseline Lighthouse — **nécessite un navigateur** (à lancer côté humain une fois déployé, voir procédure ci-dessous).
- `FEAT-01→04` : **fonctionnalités lourdes** qui changent le produit — recherche/filtres, carte interactive, support multilingue (EN), migration vers un CMS. À décider par le propriétaire (ce ne sont pas des finitions).

**À faire côté humain (hors code) :**
- Déployer (Vercel) et valider en preview.
- Générer le PDF du CV (`/creator/cv` → Imprimer → `public/files/fabrice-huet-cv.pdf`).
- Lancer Lighthouse et valider les JSON-LD (Rich Results) une fois en ligne ; brancher Search Console.
