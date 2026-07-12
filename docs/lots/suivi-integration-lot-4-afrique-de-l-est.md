# Suivi d integration — Lot 4 Afrique de l Est

## Perimetre integre

- Somalie — Canjeero
- Afrique de l Est — Chai et mandazi
- Tanzanie — Chipsi mayai

## Fichiers de donnees ajoutes

- `data/recipes/east-africa/somalia/canjeero.ts`
- `data/recipes/east-africa/regional/chai-and-mandazi.ts`
- `data/recipes/east-africa/tanzania/chipsi-mayai.ts`

## Fichiers de donnees modifies

- `data/recipes.ts` : imports et exposition des trois recettes.
- `data/countries.ts` : enrichissement des fiches `somalia-canjeero`, `eastern-africa-chai-mandazi`, `tanzania-chipsi-mayai`.
- `data/categories.ts` : ajout des categories regionales strictement necessaires.
- `data/tags.ts` : ajout des tags propres au lot 4.
- `data/ingredients.ts` : ajout des ingredients manquants sans dupliquer les slugs existants.

## Decisions editoriales

- `eastern-africa-chai-mandazi` reste une fiche regionale, pas une fiche nationale.
- `canjeero` est documente comme crepe / galette fermentee somalienne, sans le reduire a une variante d injera.
- `chipsi-mayai` est classe comme street food et repas rapide, avec usage matinal possible mais non exclusif.
- Les trois fiches conservent `needsReview: true` en raison des variations locales, des transcriptions et de certaines indications historiques prudentes.

## Points a verifier

- Harmoniser plus tard les transcriptions `canjeero`, `canjeelo`, `laxoox`, `lahooh`, `lahoh` si une convention editoriale est choisie.
- Verifier les usages regionaux de `mahamri` / `mamri` et la part du lait de coco selon les sources locales.
- Confirmer l origine recente du chipsi mayai a Dar es Salaam uniquement si une source historique plus solide est ajoutee.
- Controler les URLs et notes de sources lors de la revue editoriale finale.

## Validations prevues

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
