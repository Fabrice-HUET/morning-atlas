# Suivi d integration — Lot 17 — Venezuela / Colombie / Cuba

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Venezuela | Cachapas | `venezuela-cachapas` | `venezuelan-cachapas` | Integre, a relire |
| Colombie | Changua | `colombia-changua` | `colombian-changua` | Integre, a relire |
| Cuba / diaspora cubaine | Tostada avec cafe con leche | `cuba-tostada-cafe-con-leche` | `cuban-tostada-cafe-con-leche` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/south-america/venezuela/venezuelan-cachapas.ts`
- `data/recipes/south-america/colombia/colombian-changua.ts`
- `data/recipes/caribbean/cuba/cuban-tostada-cafe-con-leche.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Les slugs pays existants `venezuela-cachapas`, `colombia-changua` et `cuba-tostada-cafe-con-leche` ont ete conserves.
- Les recettes Venezuela et Colombie ont ete rangees dans `data/recipes/south-america`, nouveau dossier coherent pour les lots americains suivants.
- La fiche cachapas est cadree comme petit-dejeuner / brunch / street food, pas comme petit-dejeuner strict.
- La fiche changua est centree sur Bogota, Cundinamarca, Boyaca et l altiplano cundiboyacense, pas sur toute la Colombie.
- La fiche tostada + cafe con leche mentionne explicitement Cuba et la diaspora cubaine, car beaucoup de sources documentent Miami.
- Les categories existantes ont ete reutilisees quand possible : `maize-breakfasts`, `cheese-breakfasts`, `soup-breakfasts`, `bread-breakfasts`, `coffee-breakfast`.
- `needsReview: true` est conserve pour les trois fiches afin de garder visibles les nuances d usage et de sourcing.

## Points de vigilance editoriale

- Ne pas confondre cachapa, arepa et tortilla.
- Queso de mano et queso guayanes sont difficiles a remplacer exactement hors Venezuela.
- Changua doit etre traitee avec respect : le plat divise, mais reste fortement culturel et familial.
- Ne pas presenter la changua comme un petit-dejeuner colombien national uniforme.
- Tostada + cafe con leche doit etre formule comme cubain et cubano-americain, avec prudence sur les sources Miami.
- Cafe con leche existe dans plusieurs mondes hispaniques : garder l angle cubain par le cafe fort, le pain cubain et la tostada.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
