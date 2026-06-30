# Journal de bord Morning Atlas

## Format d'entrée

- Date : `YYYY-MM-DD`
- Branche : nom de branche Git
- Commit : SHA court ou `TODO`
- Type de tâche : contenu, design, technique, documentation, validation
- Résumé : description courte
- Fichiers modifiés : chemins principaux
- Décisions prises : choix structurants
- Problèmes rencontrés : blocages ou limites
- Prochaine action : suite concrète

## 2026-06-30 — Données structurées JSON-LD

- Date : `2026-06-30`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO, technique, documentation
- Résumé : ajout de données structurées JSON-LD minimales et alignées avec le contenu visible des pages publiques.
- Fichiers modifiés :
  - `lib/structured-data.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/countries/page.tsx`
  - `app/recipes/page.tsx`
  - `app/guides/page.tsx`
  - `app/about/page.tsx`
  - `app/countries/[slug]/page.tsx`
  - `app/recipes/[slug]/page.tsx`
  - `app/categories/[slug]/page.tsx`
  - `app/ingredients/[slug]/page.tsx`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Le JSON-LD est centralisé dans `lib/structured-data.ts`.
  - `WebSite` et `Organization` restent globaux et n’inventent pas de logo.
  - `Recipe` utilise uniquement le nom, la description, l’image, l’origine visible, les ingrédients, les étapes, l’URL et `mainEntityOfPage`.
  - Les pages dynamiques disposent de breadcrumbs simples : accueil, section, page courante.
- Problèmes rencontrés :
  - Les pages individuelles de guides n’existent pas encore, donc aucun `BreadcrumbList` de guide individuel n’est ajouté.
  - Les champs avancés de recette comme calories, nutrition, avis, auteur ou logo sont volontairement exclus.
- Prochaine action : valider le balisage avec Rich Results Test et Schema Markup Validator après déploiement ou preview publique.

## 2026-06-30 — Socle SEO technique P0

- Date : `2026-06-30`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO, technique, documentation
- Résumé : ajout du socle SEO P0 avec `robots.txt`, `sitemap.xml`, canonicals, Open Graph, Twitter cards et H1 dédiés sur les pages publiques ciblées.
- Fichiers modifiés :
  - `app/robots.ts`
  - `app/sitemap.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/countries/`
  - `app/recipes/`
  - `app/categories/[slug]/page.tsx`
  - `app/ingredients/[slug]/page.tsx`
  - `app/guides/page.tsx`
  - `app/about/page.tsx`
  - `components/layout/SectionHeading.tsx`
  - `lib/seo.ts`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Le domaine canonique reste `https://morning-atlas.fr`.
  - Les pages recettes utilisent leur image locale `/images/breakfasts/{slug}.webp` dans les métadonnées sociales.
  - Les pages pays utilisent l’image de la première recette associée quand elle existe.
  - `SectionHeading` accepte un niveau de titre explicite pour corriger les H1 sans refactor global.
  - Les données structurées JSON-LD restent prévues pour une mission séparée.
- Problèmes rencontrés :
  - Aucune image sociale par défaut dédiée n’existe encore pour les pages sans visuel de recette.
  - Les pages individuelles de guides n’existent pas encore ; seules les pages publiques réellement routées sont incluses au sitemap.
- Prochaine action : ajouter les données structurées JSON-LD et rendre les sources visibles sur les fiches pays et recettes.

## 2026-06-30 — Conversion WebP et contrôle d’affichage des images breakfast

- Date : `2026-06-30`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : images, validation, documentation
- Résumé : conversion des 53 images breakfast en WebP, suppression des PNG sources après validation, puis contrôle local des pages liste, détail et composants utilisant `BreakfastImage`.
- Fichiers modifiés :
  - `public/images/breakfasts/`
  - `docs/CONTENT_TRACKER.md`
  - `docs/IMAGE_MAPPING_REPORT.md`
  - `docs/IMAGE_OPTIMIZATION_REPORT.md`
  - `docs/PROJECT_LOG.md`
- Décisions prises :
  - La convention finale reste `/images/breakfasts/{slug}.webp`.
  - Les PNG sources sont supprimés après vérification que les 53 WebP correspondent exactement aux 53 slugs.
  - Le composant `BreakfastImage` n'est pas modifié car il utilise déjà la bonne convention.
- Problèmes rencontrés :
  - Le premier `pnpm build` lancé dans le sandbox a échoué sur une contrainte Turbopack de binding local ; le build relancé hors sandbox a réussi.
  - Aucun problème d’image cassée, de slug manquant, de doublon ou de fichier hors convention n’a été détecté.
- Prochaine action : effectuer un dernier contrôle navigateur manuel si une validation visuelle humaine mobile/desktop est nécessaire.

## 2026-06-19 — Fondation contenu, images et suivi projet

- Date : `2026-06-19`
- Branche : `main`
- Commit : `3d98d41`
- Type de tâche : contenu, images, documentation, suivi projet
- Résumé : intégration des 18 lots éditoriaux, génération des images de petits-déjeuners, préparation de l'affichage des images locales avec fallback, puis mise en place des documents de suivi projet.
- Fichiers modifiés :
  - `data/`
  - `types/`
  - `lib/`
  - `app/`
  - `components/`
  - `next.config.ts`
  - `docs/ROADMAP.md`
  - `docs/PROJECT_LOG.md`
  - `docs/CONTENT_TRACKER.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Les images locales de petits-déjeuners suivent le chemin `public/images/breakfasts/{recipe.slug}.webp`.
  - Le fallback externe reste limité à `https://picsum.photos/seed/**`.
  - Le suivi éditorial est documenté en Markdown pour rester simple et versionnable.
  - Le champ `lot` reste `TODO` tant que les lots éditoriaux ne sont pas codés dans les données.
- Problèmes rencontrés :
  - Les images locales doivent encore être ajoutées au dépôt.
  - Les pages doivent être testées visuellement après ajout des fichiers `.webp`.
  - Certaines fiches restent marquées `needsReview` et nécessitent une relecture éditoriale.
- Prochaine action : ajouter les images locales, compléter les lots dans le tracker, puis valider visuellement les pages principales.
