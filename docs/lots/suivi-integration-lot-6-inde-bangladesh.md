# Suivi d integration — Lot 6 Inde / Bangladesh

## Perimetre integre

- Bangladesh — Ruti avec dal ou curry de legumes
- Inde du Sud — Idli avec chutney ou sambar
- Inde du Nord — Paratha avec curry

## Fichiers de donnees ajoutes

- `data/recipes/asia/bangladesh/ruti-with-dal-and-vegetable-curry.ts`
- `data/recipes/asia/india/south/idli-sambar.ts`
- `data/recipes/asia/india/north/paratha-with-curry.ts`

## Fichiers de donnees modifies

- `data/recipes.ts` : imports des trois recettes et remplacement de l ancienne fiche inline `idli-sambar`.
- `data/countries.ts` : enrichissement de `bangladesh-chapati-curry`, `south-india-idli-sambar`, `north-india-paratha-curry`.
- `data/categories.ts` : ajout des categories Asie du Sud, Bangladesh, Inde, Inde du Sud, Inde du Nord et pains plats.
- `data/tags.ts` : ajout des tags ruti, dal, idli, sambar, paratha et accompagnements.
- `data/ingredients.ts` : ajout des ingredients sud-asiatiques manquants sans dupliquer les slugs existants.

## Decisions editoriales

- La fiche Bangladesh conserve le slug existant `bangladesh-chapati-curry`, mais le titre editorial devient `Ruti avec dal ou curry de legumes`.
- Le slug recette `idli-sambar` est conserve pour ne pas casser l URL existante, tout en couvrant chutney, sambar et podi.
- `paratha-with-curry` est nuance avec curd, pickle, beurre, dal et sabzi, car curry seul est trop large.
- Les trois fiches conservent `needsReview: true` pour garder visibles les nuances regionales, historiques et terminologiques.

## Points a verifier

- Decider plus tard si le slug pays `bangladesh-chapati-curry` doit etre migre vers `bangladesh-ruti-dal-sobji`.
- Ajouter eventuellement des fiches separees pour dosa, upma, pongal, poha, chole bhature ou puri bhaji.
- Revoir la granularite entre ingredients `atta`, `whole-wheat-flour` et `wheat-flour`.
- Verifier les sources locales supplementaires pour les usages Bangladesh ville / campagne.

## Validations prevues

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
