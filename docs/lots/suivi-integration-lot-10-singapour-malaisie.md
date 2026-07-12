# Suivi d integration — Lot 10 — Singapour / Malaisie

## Fiches integrees

| Pays | Breakfast | Slug pays | Slug recette | Statut |
| --- | --- | --- | --- | --- |
| Singapour | Kaya toast | `singapore-kaya-toast` | `kaya-toast` | Integre, a relire |
| Malaisie | Nasi lemak | `malaysia-nasi-lemak` | `nasi-lemak` | Integre, a relire |

## Fichiers de donnees

- `data/recipes/asia/singapore/kaya-toast.ts`
- `data/recipes/asia/malaysia/nasi-lemak.ts`
- `data/recipes.ts`
- `data/countries.ts`
- `data/categories.ts`
- `data/tags.ts`
- `data/ingredients.ts`

## Decisions prises

- La recette `kaya-toast` a ete sortie de l entree inline existante dans `data/recipes.ts` pour respecter le modele recent : un fichier par recette.
- La fiche `singapore-kaya-toast` a ete enrichie sans changer son slug existant.
- La fiche `malaysia-nasi-lemak` a ete enrichie et reliee a la nouvelle recette `nasi-lemak`.
- Les categories existantes ont ete reutilisees quand possible : `coffee-breakfast`, `bread-based`, `rice-based`, `street-breakfast`.
- Les categories ajoutees sont limitees aux besoins du lot : `singaporean-breakfasts`, `malaysian-breakfasts`, `kopitiam-breakfasts`, `toast-breakfasts`.
- `needsReview: true` est conserve pour les deux fiches : les sources sont solides, mais les nuances d origine, de diffusion regionale et d usage hors petit-dejeuner doivent rester visibles.

## Points de vigilance editoriale

- Kaya toast ne doit pas etre presente comme exclusivement singapourien : la diffusion regionale est importante, notamment en Malaisie.
- L origine du kaya toast doit rester nuancee : influences malaises, hainanaises, britanniques et culture kopitiam.
- Nasi lemak est tres associe au petit-dejeuner malaisien, mais il est aussi consomme a d autres moments.
- L inscription UNESCO concerne la culture du petit-dejeuner en Malaisie, pas uniquement le nasi lemak.
- Eviter de reduire le petit-dejeuner malaisien au seul nasi lemak : roti canai et teh tarik restent des reperes importants.

## Validation demandee

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
