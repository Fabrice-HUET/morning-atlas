# Suivi d integration - Lot 2 Afrique de l Ouest

Date d integration : 2026-06-17

## Contenu integre

- Nigeria, contexte haoussa - Kosai
- Nigeria, contexte yoruba - Ogi
- Senegal - Cafe Touba

## Fichiers de donnees

- Fiches pays enrichies dans `data/countries.ts`.
- Recettes du lot creees en fichiers dedies :
  - `data/recipes/west-africa/nigeria/kosai.ts`
  - `data/recipes/west-africa/nigeria/ogi.ts`
  - `data/recipes/west-africa/senegal/cafe-touba.ts`
- Point d entree conserve dans `data/recipes.ts`.

## Decisions

- Conservation de l architecture existante : les routes continuent de lire `data/countries.ts` et `data/recipes.ts`.
- Creation de fichiers recette par pays et region pour rester coherent avec le lot 1.
- Reutilisation des taxonomies existantes quand possible : `bread`, `corn`, `milk`, `honey`, `coffee`, `comfort-food`, `protein-rich`.
- Ajout de taxonomies plus precises uniquement quand elles manquaient : `west-african-breakfasts`, `black-eyed-peas`, `djar`, `fermented`, `porridge-breakfasts`, etc.
- Conservation de `needsReview: true` pour les trois fiches a cause des nuances importantes sur les noms, origines ou contextes religieux.

## Points a verifier

- Kosai : garder la nuance entre kosai, akara et koose ; completer avec une source haoussa directe si un article long est produit.
- Ogi : ne pas reduire la fiche au seul contexte yoruba ; les noms et usages varient selon regions et familles.
- Cafe Touba : formuler prudemment l origine religieuse et eviter toute promesse de sante liee au djar.
- Sources : verifier les URL finales avant publication editoriale.

## Validation prevue

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
