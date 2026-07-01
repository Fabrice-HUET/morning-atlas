# Next steps — Morning Atlas

## État actuel résumé

- Application Next.js / TypeScript fonctionnelle avec pages pays, recettes, catégories, ingrédients, guides et À propos.
- 53 images breakfast WebP sont présentes dans `public/images/breakfasts/{slug}.webp` et alignées avec les slugs recettes.
- Le socle SEO P0 est en place : `robots.txt`, `sitemap.xml`, canonicals, métadonnées, Open Graph, Twitter cards et H1 dédiés.
- Les données structurées JSON-LD sont en place pour les pages principales et dynamiques.
- Les sources éditoriales sont visibles sur les fiches pays et recettes.
- Le maillage interne relie pays, recettes, catégories et ingrédients.
- L’audit des taxonomies est documenté dans `docs/TAXONOMY_SEO_AUDIT.md`.
- 33 ingrédients faibles sont exclus temporairement du sitemap, sans `noindex`.
- Le doublon de slug ingrédient `fresh-fruit` est corrigé.

## Terminé

- Mapping, renommage, conversion WebP et vérification des images breakfast.
- Création de `app/robots.ts` et `app/sitemap.ts`.
- Ajout des canonicals, métadonnées enrichies, Open Graph et Twitter cards.
- Ajout du JSON-LD `WebSite`, `Organization`, `WebPage`, `ItemList`, `BreadcrumbList` et `Recipe`.
- Affichage public des sources sur les pages pays et recettes.
- Renforcement du maillage interne entre pages éditoriales et taxonomiques.
- Audit SEO des pages catégories et ingrédients.
- Retrait temporaire du sitemap des 33 ingrédients les plus faibles.
- Correction du doublon de slug ingrédient `fresh-fruit`.

## Reste à faire

- Relire les fiches `needsReview: true` et décider lesquelles sont publiables.
- Corriger les accents et formulations restantes dans les données éditoriales.
- Enrichir les catégories et ingrédients prioritaires avec une courte introduction éditoriale.
- Valider le JSON-LD avec Rich Results Test et Schema Markup Validator.
- Ajouter une image sociale par défaut pour les pages sans visuel de recette.
- Surveiller Search Console après publication.

## Prochaine mission recommandée

Traiter la qualité éditoriale avant d’ajouter de nouvelles fonctionnalités : relire les contenus `needsReview`, corriger les formulations non accentuées, puis enrichir les pages taxonomiques prioritaires.

## Risques / TODO

- Toutes les fiches restent marquées `needsReview: true`.
- Les 302 ingrédients intermédiaires restent éditorialement fins.
- Les 33 ingrédients exclus du sitemap restent accessibles via le maillage interne, mais ne doivent pas être réintégrés sans enrichissement.
- Les pages guides individuelles n’existent pas encore.

## Commandes utiles

- `git status --short`
- `git log --oneline --decorate -n 15`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `git diff --check`
