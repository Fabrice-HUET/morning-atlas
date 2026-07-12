# Suivi d integration — Lot 8 Japon / Coree / Turquie

## Perimetre integre

- Japon — Riz vapeur et soupe miso
- Coree — Riz et banchan
- Turquie — Menemen

## Fichiers de donnees ajoutes

- `data/recipes/asia/japan/japanese-steamed-rice-and-miso-soup.ts`
- `data/recipes/asia/korea/korean-rice-and-banchan.ts`
- `data/recipes/asia/turkey/menemen.ts`

## Fichiers de donnees modifies

- `data/recipes.ts` : imports des trois recettes et remplacement de l ancienne fiche inline `menemen`.
- `data/countries.ts` : enrichissement de `japan-rice-miso-soup`, `korea-rice-banchan`, `turkey-menemen`.
- `data/categories.ts` : ajout des categories Japon, Coree, Turquie, Asie de l Est, Europe et soupes du matin.
- `data/tags.ts` : ajout des tags washoku, banchan, kimchi, kahvalti, menemen et associes.
- `data/ingredients.ts` : ajout des ingredients japonais, coreens et turcs manquants.

## Decisions editoriales

- Japon : fiche presentee comme version traditionnelle washoku, pas comme petit-dejeuner quotidien universel.
- Coree : fiche traitee comme structure de repas riz + soupe + banchan, pas comme recette unique.
- Turquie : menemen garde le slug existant `menemen`, avec note sur le debat oignon et la distinction avec shakshuka.
- Les trois fiches conservent `needsReview: true` pour les nuances contemporaines, regionales et terminologiques.

## Points a verifier

- Verifier plus tard si `turkey-menemen` doit etre classe simultanement Asie / Europe dans l interface.
- Harmoniser les termes coreens `guk`, `jjigae`, `bansang` et les niveaux de granularite des banchan.
- Ajouter eventuellement des fiches separees pour tamagoyaki, natto, gyeran-mari, simit ou kahvalti complet.
- Controler l usage de `rice-based` versus une future categorie `rice-breakfasts`.

## Validations prevues

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
