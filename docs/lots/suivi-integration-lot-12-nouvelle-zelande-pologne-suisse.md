# Suivi d integration — Lot 12 — Nouvelle-Zelande / Pologne / Suisse

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Nouvelle-Zelande | Porridge | `new-zealand-porridge` | `new-zealand-porridge` | Integre, a relire |
| Pologne | Kanapki | `poland-kanapki` | `polish-kanapki` | Integre, a relire |
| Suisse | Birchermuesli | `switzerland-muesli` | `swiss-bircher-muesli` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/oceania/new-zealand/new-zealand-porridge.ts`
- `data/recipes/europe/poland/polish-kanapki.ts`
- `data/recipes/europe/switzerland/swiss-bircher-muesli.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Les slugs pays existants `new-zealand-porridge`, `poland-kanapki` et `switzerland-muesli` ont ete conserves.
- La recette neo-zelandaise reprend le slug `new-zealand-porridge`, coherent avec la fiche pays et absent des recettes existantes.
- La fiche suisse est titree `Birchermuesli` plutot que `Muesli` seul, pour garder l angle suisse et eviter un terme devenu trop general.
- Les nouvelles recettes suivent la structure modulaire actuelle : un fichier par recette, range par continent puis pays.
- `needsReview: true` est conserve pour les trois fiches, afin de garder visibles les nuances d origine, d usage et de diffusion.

## Points de vigilance editoriale

- Le porridge n est pas propre a la Nouvelle-Zelande : l angle juste est classique kiwi du quotidien, avec heritage ecossais et histoire locale de l avoine.
- Les kanapki ne sont pas seulement un petit-dejeuner : elles apparaissent aussi au souper et au second petit-dejeuner.
- Les garnitures de kanapki changent fortement selon familles, saisons et contenu du frigo.
- Le muesli commercial sec n est pas identique au Birchermuesli frais.
- Les overnight oats modernes peuvent etre cites comme descendants ou adaptations, pas comme equivalent exact.
- Pour la Suisse, privilegier `Birchermuesli suisse` plutot que `muesli` seul.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
