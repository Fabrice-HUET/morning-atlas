# Changelog

Toutes les notes de changement notables du projet Morning Atlas sont suivies ici.

Format inspiré de Keep a Changelog.

## Unreleased

### Added

- Documents de suivi projet : roadmap, journal de bord et tracker éditorial.
- Suivi des images locales de petits-déjeuners attendues dans `public/images/breakfasts/`.
- Socle SEO P0 avec `app/robots.ts`, `app/sitemap.ts`, canonicals, Open Graph et Twitter cards.
- Données structurées JSON-LD pour `WebSite`, `Organization`, `WebPage`, `ItemList`, `BreadcrumbList` et `Recipe`.

### Changed

- Hiérarchie des titres corrigée sur les pages publiques qui utilisaient `SectionHeading` comme titre principal.
- Métadonnées des pages statiques et dynamiques enrichies par type de page.

### Fixed

- Accents et formulations SEO visibles corrigés sur les pages statiques principales.

### Todo

- Ajouter une image sociale par défaut pour les pages sans visuel de recette.
- Valider les données structurées JSON-LD avec les outils Google et Schema.org après déploiement.
- Compléter les lots éditoriaux dans `docs/CONTENT_TRACKER.md`.
- Réduire progressivement les fiches `needsReview: true`.

## 0.1.0 - Initial content foundation

### Added

- Fondation Next.js / TypeScript du projet Morning Atlas.
- Routes principales pour home, pays, recettes, catégories, ingrédients et guides.
- Données éditoriales initiales pour les fiches de petits-déjeuners.
- Types et helpers de contenu pour structurer le catalogue.
