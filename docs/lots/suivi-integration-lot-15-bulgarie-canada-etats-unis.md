# Suivi d integration — Lot 15 — Bulgarie / Canada / Etats-Unis

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Bulgarie | Banitsa | `bulgaria-banitsa` | `bulgarian-banitsa` | Integre, a relire |
| Canada | Homestyle breakfast | `canada-homestyle-breakfast` | `canadian-homestyle-breakfast` | Integre, a relire |
| Etats-Unis / New York | New York bagel with cream cheese | `united-states-bagel-cream-cheese` | `bagel-with-cream-cheese` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/europe/bulgaria/bulgarian-banitsa.ts`
- `data/recipes/north-america/canada/canadian-homestyle-breakfast.ts`
- `data/recipes/north-america/united-states/bagel-with-cream-cheese.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Les slugs pays existants `bulgaria-banitsa`, `canada-homestyle-breakfast` et `united-states-bagel-cream-cheese` ont ete conserves.
- Les recettes ont ete rangees par continent puis pays afin de rester coherentes avec les lots precedents.
- La banitsa est traitee comme une patisserie salee bulgare de petit-dejeuner, snack ou moment familial, pas comme un usage quotidien uniforme.
- Le homestyle breakfast canadien est cadre comme une formule de diner / brunch, regionale et variable, pas comme un plat national codifie.
- Le bagel cream cheese est volontairement centre sur New York et les delis, afin d eviter une generalisation a tous les Etats-Unis.
- `needsReview: true` est conserve pour les trois fiches, car les usages et variantes demandent une relecture editoriale.

## Points de vigilance editoriale

- Banitsa peut designer plusieurs variantes et orthographes ; verifier les usages regionaux avant enrichissement.
- Sirene et feta ne sont pas strictement equivalentes, meme si la feta sert de substitution pratique.
- Boza, ayran et yaourt ne doivent pas etre presentes comme accompagnement obligatoire.
- Le Canada n a pas un petit-dejeuner national unique ; garder le cadrage diner / homestyle.
- Le peameal bacon est surtout lie a l Ontario, pas a tout le Canada.
- Distinguer le bagel new-yorkais du bagel montrealais si une future fiche Canada l aborde.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
