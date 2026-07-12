# Suivi d integration - Lot 3 Afrique de l Ouest / Afrique australe / Afrique de l Est

Date d integration : 2026-06-17

## Contenu integre

- Ghana - Ampesi
- Afrique du Sud - Putu Pap / Phuthu
- Ouganda - Katogo

## Fichiers de donnees

- Fiches pays enrichies dans `data/countries.ts`.
- Recettes du lot creees en fichiers dedies :
  - `data/recipes/west-africa/ghana/ampesi.ts`
  - `data/recipes/southern-africa/south-africa/putu-pap.ts`
  - `data/recipes/east-africa/uganda/katogo.ts`
- Point d entree conserve dans `data/recipes.ts`.

## Decisions

- Conservation de l architecture existante : les routes continuent de lire `data/countries.ts` et `data/recipes.ts`.
- Creation de fichiers recette par region et pays, comme les lots 1 et 2.
- Reutilisation des taxonomies existantes quand possible : `plantain`, `beans`, `corn`, `milk`, `sugar`, `butter`, `comfort-food`.
- Ajout de taxonomies plus precises uniquement quand elles manquaient : `vegetable-based-breakfasts`, `maize-breakfasts`, `one-pot-breakfasts`, `matooke`, `amasi`, `kontomire`, etc.
- Conservation de `needsReview: true` pour les trois fiches a cause des nuances sur le statut petit-dejeuner, les noms locaux ou les variantes regionales.

## Points a verifier

- Ampesi : ne pas le vendre comme petit-dejeuner typique ; plutot comme plat familial ghaneen nourrissant compatible avec le matin.
- Putu Pap : rappeler que la version lait/sucre est matinale, mais que le pap est aussi un accompagnement sale majeur.
- Katogo : solide comme petit-dejeuner ougandais, mais ne pas figer une version unique autour du matooke.
- Sources : verifier les URL finales avant publication editoriale.

## Validation prevue

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
