# Suivi d integration — Lot 16 — Amerique centrale / Caraibes

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Costa Rica | Gallo pinto | `costa-rica-gallo-pinto` | `costa-rican-gallo-pinto` | Integre, a relire |
| Mexique | Huevos rancheros | `mexico-huevos-rancheros` | `huevos-rancheros` | Integre, a relire |
| Jamaique | Ackee and saltfish | `jamaica-ackee-saltfish` | `jamaican-ackee-and-saltfish` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/central-america/costa-rica/costa-rican-gallo-pinto.ts`
- `data/recipes/north-america/mexico/mexican-huevos-rancheros.ts`
- `data/recipes/caribbean/jamaica/jamaican-ackee-and-saltfish.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- Les slugs pays existants `costa-rica-gallo-pinto`, `mexico-huevos-rancheros` et `jamaica-ackee-saltfish` ont ete conserves.
- La recette mexicaine minimale `huevos-rancheros` a ete remplacee par une recette detaillee tout en conservant le slug public existant.
- Les categories generiques existantes ont ete reutilisees quand possible : `rice-based`, `legume-breakfasts`, `egg-based`, `family-friendly`, `budget-friendly`.
- Des categories regionales et specifiques ont ete ajoutees pour Amerique centrale, Caraibes, Costa Rica, Mexique, Jamaique, tortillas, poisson et plats nationaux.
- `dumplings` a ete rendu plus generique dans la taxonomie ingredients pour couvrir aussi les dumplings jamaicains sans creer de doublon.
- `needsReview: true` est conserve pour les trois fiches, avec vigilance particuliere sur le gallo pinto nicaraguayen, les variantes tex-mex et la securite de l ackee.

## Points de vigilance editoriale

- Gallo pinto doit rester centre sur le Costa Rica, mais sans effacer l importance du Nicaragua.
- Sauce Lizano est identitaire pour la version tica, pas obligatoire dans toutes les familles.
- Huevos rancheros ne doit pas etre presente comme le seul petit-dejeuner mexicain.
- Bien distinguer versions mexicaines et adaptations tex-mex.
- Ackee and saltfish doit inclure une note de securite : preferer l ackee en conserve fiable hors Jamaique.
- Ne jamais recommander l ackee frais non mur ou non maitrise.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
