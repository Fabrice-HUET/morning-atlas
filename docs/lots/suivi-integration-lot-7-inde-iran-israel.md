# Suivi d integration — Lot 7 Inde / Iran / Israel

## Perimetre integre

- Inde, Maharashtra — Kande pohe
- Iran — Petit-dejeuner au barbari
- Israel — Israeli breakfast

## Fichiers de donnees ajoutes

- `data/recipes/asia/india/west/kande-pohe.ts`
- `data/recipes/asia/iran/barbari-breakfast.ts`
- `data/recipes/asia/israel/israeli-breakfast.ts`

## Fichiers de donnees modifies

- `data/recipes.ts` : imports et exposition des trois recettes.
- `data/countries.ts` : enrichissement de `maharashtra-kande-pohe`, `iran-barbari`, `israel-israeli-breakfast`.
- `data/categories.ts` : ajout des categories Inde de l Ouest, Maharashtra, Iran, Moyen-Orient, Israel, pains et hotels.
- `data/tags.ts` : ajout des tags poha, barbari et Israeli breakfast.
- `data/ingredients.ts` : ajout des ingredients manquants sans dupliquer les slugs existants.

## Decisions editoriales

- `kande-pohe` est traite comme fiche regionale Maharashtra, avec prudence sur les nombreuses variantes indiennes du poha.
- `barbari-breakfast` structure la fiche autour du petit-dejeuner au pain barbari, pas du pain seul.
- `israeli-breakfast` est traite comme format / buffet / assiette composee, pas comme recette unique.
- Les trois fiches conservent `needsReview: true` pour les nuances regionales, historiques et culturelles.

## Points a verifier

- Confirmer si `maharashtra-kande-pohe` doit rester une route regionale ou etre rattache plus explicitement a l Inde de l Ouest.
- Harmoniser les transcriptions de `Nan-e Barbari`, `Naan-e Barbari` et `Noon Barbari`.
- Garder une formulation prudente sur l histoire kibboutz et le developpement hotelier de l Israeli breakfast.
- Verifier plus tard la granularite entre ingredients `fresh-herbs`, `herbs`, `feta`, `fresh-cheese` et `cheese`.

## Validations prevues

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
