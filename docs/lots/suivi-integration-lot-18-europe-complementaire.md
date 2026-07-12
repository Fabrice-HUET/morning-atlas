# Suivi d integration — Lot 18 — Europe complementaire

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Allemagne | German Frühstück with Brötchen | `germany-brotchen-fruhstuck` | `german-brotchen-breakfast` | Integre, a relire |
| Grece | Greek yogurt with honey | `greece-yogurt-honey` | `greek-yogurt-with-honey` | Integre, a relire |
| Portugal | Pão com manteiga & galão | `portugal-pao-com-manteiga-galao` | `portuguese-pao-com-manteiga-galao` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/europe/germany/german-brotchen-breakfast.ts`
- `data/recipes/europe/greece/greek-yogurt-with-honey.ts`
- `data/recipes/europe/portugal/portuguese-pao-com-manteiga-galao.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- De nouveaux slugs pays ont ete crees car aucune fiche Allemagne, Grece ou Portugal n existait : `germany-brotchen-fruhstuck`, `greece-yogurt-honey`, `portugal-pao-com-manteiga-galao`.
- Les recettes ont ete rangees dans `data/recipes/europe/{country}` pour rester coherentes avec les lots Europe precedents.
- La fiche Allemagne est traitee comme une table de petit-dejeuner, pas comme une recette unique.
- La fiche Grece est formulee comme bol grec moderne / snack / dessert leger, pas comme petit-dejeuner quotidien obligatoire.
- La fiche Portugal privilegie le quotidien de cafe/pastelaria : pain beurre et galão, sans reduire le pays au pastel de nata.
- `needsReview: true` est conserve pour les trois fiches afin de garder visibles les nuances d usage, de region et de sourcing.

## Points de vigilance editoriale

- Les noms regionaux allemands des petits pains changent beaucoup : Brötchen, Semmel, Schrippe, Weck, Rundstück.
- Le Weißwurstfrühstück bavarois meriterait une fiche separee.
- Le Greek Breakfast certifie est surtout hotelier/touristique et ne doit pas etre presente comme quotidien domestique universel.
- Distinguer yaourt grec egoutte et produits industriels `Greek style` hors Grece.
- Ne pas reduire le petit-dejeuner portugais au pastel de nata.
- Galão, meia de leite, bica, garoto et abatanado doivent rester distincts si un guide cafe portugais est cree.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
