# Suivi d integration — Lot 14 — Royaume-Uni / Russie / Italie

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Royaume-Uni | Full English Breakfast | `united-kingdom-full-english` | `full-english-breakfast` | Integre, a relire |
| Russie | Kasha | `russia-kasha` | `russian-kasha` | Integre, a relire |
| Italie | Prima colazione | `italy-prima-colazione` | `italian-prima-colazione` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/europe/united-kingdom/full-english-breakfast.ts`
- `data/recipes/europe/russia/russian-kasha.ts`
- `data/recipes/europe/italy/italian-prima-colazione.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Les slugs pays existants `united-kingdom-full-english`, `russia-kasha` et `italy-prima-colazione` ont ete conserves.
- Les recettes suivent les slugs proposes : `full-english-breakfast`, `russian-kasha`, `italian-prima-colazione`.
- La fiche Royaume-Uni est centree sur l Angleterre, avec les variantes regionales seulement mentionnees.
- La fiche Russie traite `kasha` comme une famille de bouillies, pas comme une recette unique au sarrasin.
- La fiche Italie cadre la `prima colazione` comme un format leger, sucre, rapide et lie au cafe, sans la reduire au duo cappuccino-cornetto.
- `needsReview: true` est conserve pour les trois fiches afin de garder visibles les nuances d usage, regionales et historiques.

## Points de vigilance editoriale

- Full English ne doit pas etre presente comme petit-dejeuner quotidien de tous les Britanniques.
- Les variantes full Scottish, full Welsh, full Irish et Ulster fry meriteraient des fiches separees si elles sont developpees.
- Kasha ne doit pas etre reduit au sarrasin : le mot russe couvre plusieurs bouillies et cereales cuites.
- Les versions sucrees et salees de kasha doivent rester distinctes.
- Prima colazione ne doit pas etre reduite a cappuccino + cornetto : les regions italiennes changent les noms, les patisseries et les usages.
- Le cappuccino le matin est une norme culturelle, pas une regle absolue.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
