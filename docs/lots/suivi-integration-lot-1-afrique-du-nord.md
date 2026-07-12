# Suivi d integration - Lot 1 Afrique du Nord

Date d integration : 2026-06-17

## Contenu integre

- Egypte - Ful Medames
- Maroc - Msemen
- Tunisie - Lablabi

## Fichiers de donnees

- Fiches pays enrichies dans `data/countries.ts`.
- Recettes du lot creees en fichiers dedies :
  - `data/recipes/north-africa/egypt/ful-medames.ts`
  - `data/recipes/north-africa/morocco/msemen.ts`
  - `data/recipes/north-africa/tunisia/lablabi.ts`
- Point d entree conserve dans `data/recipes.ts`.

## Decisions

- Conservation de l architecture existante : les routes continuent de lire `data/countries.ts` et `data/recipes.ts`.
- Creation de fichiers recette par pays pour les nouveaux lots, sans dupliquer les recettes dans le fichier central.
- Reutilisation des ingredients existants quand possible : `eggs`, `flatbread`, `honey`, `tea`, `bread`.
- Ajout de taxonomies plus precises uniquement quand elles manquaient : `fava-beans`, `chickpeas`, `harissa`, `mint-tea`, etc.
- Conservation de `needsReview: true` pour les trois fiches, car chaque fiche contient au moins une nuance importante a verifier ou a formuler prudemment.

## Points a verifier

- Ful Medames : ne pas affirmer une origine antique directe sans source plus solide.
- Msemen : garder la nuance sur les noms regionaux et les preparations proches au Maghreb.
- Lablabi : presenter l origine historique comme incertaine, et traiter la variante de Bizerte a part si besoin.
- Sources : verifier les URL finales avant publication editoriale.

## Validation prevue

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
