# Roadmap Morning Atlas

## Vision

Morning Atlas est un atlas éditorial des petits-déjeuners du monde : fiches pays, recettes simples, ingrédients, catégories et guides doivent former un catalogue clair, sourcé, indexable avec prudence et maintenable.

## État actuel

- Application Next.js / TypeScript fonctionnelle, avec routes statiques pour les pays, recettes, catégories, ingrédients et guides.
- 18 lots de fiches de petits-déjeuners intégrés dans les données du projet.
- 53 images breakfast locales sont présentes, renommées selon les slugs, converties en WebP et disponibles dans `public/images/breakfasts/{slug}.webp`.
- L’affichage des images a été vérifié via la convention existante `/images/breakfasts/{slug}.webp`.
- Le socle SEO P0 est en place : `robots.txt`, `sitemap.xml`, canonicals, métadonnées enrichies, Open Graph, Twitter cards et H1 dédiés.
- Les données structurées JSON-LD sont en place pour `WebSite`, `Organization`, `WebPage`, `ItemList`, `BreadcrumbList` et `Recipe`.
- Les sources éditoriales sont visibles sur les 53 pages pays et les 53 pages recettes.
- Le maillage interne est renforcé entre pays, recettes, catégories et ingrédients.
- L’audit SEO des taxonomies est documenté dans `docs/TAXONOMY_SEO_AUDIT.md`.
- 33 ingrédients faibles sont retirés temporairement du sitemap, sans ajout de `noindex` ; les pages restent accessibles via le maillage interne.
- L’anomalie de doublon du slug ingrédient `fresh-fruit` est corrigée.
- Suivi projet, roadmap, journal de bord, tracker éditorial, rapports images, plan SEO, audit taxonomies et changelog sont structurés en Markdown.

## Phases du projet

1. Fondation applicative : routes, composants, types, taxonomies et données initiales. Fait.
2. Fondation éditoriale : intégration des lots de fiches, recettes, pays et sources. Fait, avec relecture encore nécessaire.
3. Fondation visuelle : ajout, mapping, conversion WebP et vérification des images locales des petits-déjeuners. Fait.
4. Fondation SEO technique : sitemap, robots, canonicals, métadonnées, H1, JSON-LD, sources visibles et maillage interne. Fait.
5. Maturité éditoriale : relecture des fiches `needsReview`, correction typographique des données, enrichissement des taxonomies et stabilisation des guides. En cours.
6. Pré-publication : validation Search Console, tests visuels humains, accessibilité, performance, données structurées et corrections ciblées. À faire.
7. Publication : mise en ligne, suivi des plateformes, logs de version et itérations éditoriales. À faire.

## Prochaines priorités

- Relire les fiches `needsReview: true` pour identifier les contenus réellement publiables.
- Enrichir les pages catégories et ingrédients prioritaires avec une introduction éditoriale courte.
- Valider les données structurées avec Rich Results Test et Schema Markup Validator après déploiement ou preview publique.
- Vérifier dans Search Console l’effet de l’exclusion temporaire des 33 ingrédients faibles du sitemap.
- Ajouter une image sociale par défaut cohérente pour les pages sans visuel de recette.

## Backlog court terme

- Corriger les titres, descriptions, noms d’ingrédients et textes alternatifs qui contiennent encore des mots français non accentués.
- Ajouter des blocs courts de contexte culturel sur les pages pays, recettes, catégories et ingrédients prioritaires.
- Définir une règle documentaire pour les statuts `indexable`, `needsEnrichment` et `noindexCandidate`.
- Revoir les 302 ingrédients intermédiaires avant de décider s’ils doivent rester indexables ou être enrichis.
- Mettre à jour `docs/CONTENT_TRACKER.md` avec un statut de publication plus précis si le suivi éditorial devient prioritaire.

## Backlog moyen terme

- Créer des pages individuelles pour les guides si les guides deviennent un axe SEO éditorial.
- Créer une page index `/ingredients` seulement si les ingrédients deviennent un axe de navigation public assumé.
- Renforcer la page À propos avec méthode éditoriale, limites, sources et fréquence de relecture.
- Ajouter des tests ciblés pour les helpers de contenu si la logique de taxonomies continue à se densifier.
- Définir une convention stable pour les lots éditoriaux si elle doit vivre dans les données.
- Envisager un sitemap image une fois les visuels et la stratégie SEO image stabilisés.

## Idées futures non prioritaires

- Carte interactive par région ou continent.
- Pages collections saisonnières ou thématiques.
- Exports courts pour réseaux sociaux.
- Comparatifs de petits-déjeuners par ingrédient ou style.
- Support multilingue après stabilisation du contenu français.
- Fichier `llms.txt` public uniquement après stabilisation du socle éditorial et SEO.
