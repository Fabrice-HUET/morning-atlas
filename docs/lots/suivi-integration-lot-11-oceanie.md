# Suivi d integration — Lot 11 — Oceanie

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Australie | Weet-Bix | `australia-weet-bix` | `weet-bix-bowl` | Integre, a relire |
| Australie | Australian Big Brekkie | `australia-fry-up` | `australian-big-brekkie` | Integre, a relire |
| Fidji | Babakau | `fiji-babakau` | `babakau` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/oceania/australia/weet-bix-bowl.ts`
- `data/recipes/oceania/australia/australian-big-brekkie.ts`
- `data/recipes/oceania/fiji/babakau.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Le slug existant `weet-bix-bowl` a ete conserve au lieu de creer `weet-bix-breakfast`, pour ne pas casser une URL deja presente.
- Le slug pays `australia-fry-up` a ete conserve, mais le titre editorial devient `Australian Big Brekkie`, plus naturel pour le ton Morning Atlas.
- La fiche `fiji-babakau` a ete enrichie et reliee a une recette dediee `babakau`.
- Les nouvelles recettes suivent le modele recent : un fichier par recette, range par continent puis pays.
- `needsReview: true` est conserve pour les trois fiches : Weet-Bix est une marque, Big Brekkie est fortement herite du monde britannique, et l origine du babakau reste incertaine.

## Points de vigilance editoriale

- Weet-Bix doit etre traite comme une icone moderne du quotidien, pas comme une recette traditionnelle ancienne.
- Ne pas presenter Weet-Bix comme le petit-dejeuner australien unique.
- Big Brekkie doit etre formule comme une assiette de cafe, brunch, week-end ou roadhouse, pas comme un repas quotidien universel.
- Le big brekkie est influence par le full English breakfast ; eviter l idee d invention purement australienne.
- L origine historique du babakau reste incertaine ; rester prudent sur les influences indiennes, chinoises ou europeennes.
- Le babakau est associe au petit-dejeuner, mais aussi au snack et a l afternoon tea.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
