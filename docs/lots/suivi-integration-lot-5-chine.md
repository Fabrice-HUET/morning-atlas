# Suivi d integration — Lot 5 Chine

## Perimetre integre

- Chine continentale — You tiao
- Chine cantonaise / Guangdong / Hong Kong / Macao — Dim sum
- Chine, Shandong / Nord de la Chine — Jianbing

## Fichiers de donnees ajoutes

- `data/recipes/asia/china/mainland/you-tiao.ts`
- `data/recipes/asia/china/cantonese/dim-sum.ts`
- `data/recipes/asia/china/shandong/jianbing.ts`

## Fichiers de donnees modifies

- `data/recipes.ts` : imports des recettes Chine et remplacement de l ancienne fiche inline `jianbing`.
- `data/countries.ts` : enrichissement de `mainland-china-you-tiao`, `southeastern-china-dim-sum`, `china-shandong-jianbing`.
- `data/categories.ts` : ajout des categories Asie / Chine / Cantonais / Chine du Nord / vapeur.
- `data/tags.ts` : ajout des tags Chine, you tiao, dim sum, yum cha et jianbing.
- `data/ingredients.ts` : ajout des ingredients chinois manquants sans dupliquer les slugs existants.

## Decisions editoriales

- `you-tiao` est traite comme petit-dejeuner chinois populaire et street food, avec recette maison classee `hard`.
- `dim-sum` est formule comme brunch cantonais / yum cha, pas comme petit-dejeuner rapide individuel.
- `jianbing` garde l ancrage Shandong tout en signalant les differences avec Tianjin `jianbing guozi`.
- Les trois fiches conservent `needsReview: true` pour garder visibles les nuances historiques, regionales et de classification.

## Points a verifier

- Harmoniser plus tard les transcriptions `you tiao`, `youtiao`, `yau char kway`.
- Confirmer si la fiche `southeastern-china-dim-sum` doit etre renommee cote route vers un slug plus precis de type `cantonese-dim-sum`.
- Verifier les sources supplementaires locales pour Shandong jianbing et Tianjin jianbing guozi.
- Controler la granularite entre ingredients `you-tiao`, recette `you-tiao` et tag `you-tiao`.

## Validations prevues

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
