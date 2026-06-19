# Roadmap Morning Atlas

## Vision

Morning Atlas est un atlas éditorial des petits-déjeuners du monde : fiches pays, recettes simples, ingrédients, catégories et guides doivent former un catalogue clair, sourcé et maintenable.

## État actuel

- Application Next.js / TypeScript fonctionnelle, avec routes statiques pour les pays, recettes, catégories, ingrédients et guides.
- 18 lots de fiches de petits-déjeuners intégrés dans les données du projet.
- Le système d'affichage des images est préparé : chaque visuel doit être associé au slug de la recette correspondante.
- Images générées à ajouter dans `public/images/breakfasts/`, au format `{slug}.webp`.
- Suivi projet, roadmap, journal de bord, tracker éditorial et changelog en cours de structuration.

## Phases du projet

1. Fondation applicative : routes, composants, types, taxonomies et données initiales.
2. Fondation éditoriale : intégration des lots de fiches, recettes, pays et sources.
3. Fondation visuelle : génération, ajout et affichage des images locales des petits-déjeuners.
4. Relecture éditoriale : vérification des sources, nuances culturelles, SEO et cohérence taxonomique.
5. Pré-publication : tests visuels, responsive, performances, accessibilité et corrections ciblées.
6. Publication : mise en ligne, suivi des plateformes et notes de version.

## Prochaines priorités

- Ajouter les images `.webp` générées dans `public/images/breakfasts/`.
- Vérifier que chaque image suit exactement le slug de recette.
- Tester visuellement les pages de liste et de détail après ajout des images locales.
- Prioriser les fiches `needsReview: true` pour relecture.
- Compléter le champ `lot` dans `docs/CONTENT_TRACKER.md` si les lots éditoriaux doivent être tracés finement.

## Backlog court terme

- Compléter les images locales manquantes.
- Passer les fiches principales de `TODO visuel` à `testé` après contrôle navigateur.
- Vérifier les textes alternatifs, ratios et cadrages des images sur mobile et desktop.
- Ajouter les commits réels aux entrées futures de `docs/PROJECT_LOG.md`.
- Identifier les fiches prêtes pour publication selon image locale, SEO, sources et relecture.

## Backlog moyen terme

- Ajouter des filtres de navigation par continent, catégorie ou difficulté.
- Renforcer les pages guides avec liens contextualisés vers pays, recettes et ingrédients.
- Créer une checklist de relecture éditoriale standardisée.
- Ajouter des tests ciblés pour les helpers de contenu.
- Définir une convention stable pour les lots éditoriaux si elle doit vivre dans les données.

## Idées futures non prioritaires

- Carte interactive par région ou continent.
- Pages collections saisonnières ou thématiques.
- Exports courts pour réseaux sociaux.
- Comparatifs de petits-déjeuners par ingrédient ou style.
- Support multilingue après stabilisation du contenu français.
