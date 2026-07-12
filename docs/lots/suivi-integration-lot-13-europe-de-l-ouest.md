# Suivi d integration — Lot 13 — Europe de l Ouest

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Pays-Bas | Boterham met hagelslag | `netherlands-hagelslag` | `boterham-met-hagelslag` | Integre, a relire |
| Espagne | Chocolate con churros | `spain-chocolate-churros` | `chocolate-con-churros` | Integre, a relire |
| France | Tartines | `france-tartines` | `tartines` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/europe/netherlands/boterham-met-hagelslag.ts`
- `data/recipes/europe/spain/chocolate-con-churros.ts`
- `data/recipes/europe/france/tartines.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Les slugs pays existants `netherlands-hagelslag`, `spain-chocolate-churros` et `france-tartines` ont ete conserves.
- La recette francaise conserve le slug existant `tartines`, au lieu de creer `french-tartines`, pour ne pas casser l URL deja presente.
- Les recettes Pays-Bas et Espagne utilisent les slugs proposes : `boterham-met-hagelslag` et `chocolate-con-churros`.
- Les categories existantes ont ete reutilisees quand possible : `bread-breakfasts`, `fried-breakfasts`, `comfort-breakfasts`, `weekend-breakfasts`, `kid-friendly-breakfasts`.
- `needsReview: true` est conserve pour les trois fiches afin de garder visibles les nuances d usage et de diffusion.

## Points de vigilance editoriale

- Hagelslag doit etre presente comme une tartine sucree tres courante aux Pays-Bas, pas comme le seul petit-dejeuner neerlandais.
- Les recits historiques autour de Venco, Venz et De Ruijter doivent rester prudents.
- Chocolate con churros est un petit-dejeuner gourmand, de churreria, week-end ou fin de nuit ; pas une routine quotidienne espagnole universelle.
- Les porras doivent rester distinguees des churros classiques.
- Les tartines francaises corrigent le cliche du croissant quotidien : pain, beurre, confiture et boisson chaude sont plus domestiques et courants.
- Le beurre demi-sel est regionalement marque, mais pas obligatoire nationalement.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
