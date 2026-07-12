# Suivi d integration — Lot 9 Asie du Sud-Est

## Perimetre integre

- Myanmar — Htamin gyaw / htamin jaw
- Indonesie — Bubur ayam
- Philippines — Tapsilog

## Fichiers de donnees ajoutes

- `data/recipes/asia/myanmar/htamin-gyaw.ts`
- `data/recipes/asia/indonesia/bubur-ayam.ts`
- `data/recipes/asia/philippines/tapsilog.ts`

## Fichiers de donnees modifies

- `data/recipes.ts` : imports et exposition des trois recettes.
- `data/countries.ts` : enrichissement de `myanmar-htamin-jaw`, `indonesia-bubur-ayam`, `philippines-tapsilog`.
- `data/categories.ts` : ajout des categories Asie du Sud-Est, Myanmar, Indonesie, Philippines, restes cuisines et base viande.
- `data/tags.ts` : ajout des tags htamin gyaw, bubur ayam, tapsilog et familles associees.
- `data/ingredients.ts` : ajout des ingredients manquants sans dupliquer les slugs existants.

## Decisions editoriales

- `htamin-gyaw` devient le slug recette, tout en conservant le slug pays existant `myanmar-htamin-jaw`.
- `htamin gyaw` garde `needsReview: true`, car le statut breakfast demande une source locale supplementaire.
- `bubur-ayam` est traite comme petit-dejeuner indonesien solide, mais non limite au matin.
- `tapsilog` est presente comme classique philippin moderne et populaire, pas comme tradition ancienne figee.

## Points a verifier

- Renforcer la fiche Myanmar avec une source locale plus directe sur l usage au petit-dejeuner.
- Harmoniser les transcriptions `htamin gyaw`, `htamin kyaw` et `htamin jaw`.
- Revoir plus tard la granularite entre `rice-based` et une future categorie `rice-breakfasts`.
- Decider si les recettes singapouriennes, malaisiennes ou vietnamiennes seront integrees dans un prochain lot Asie du Sud-Est.

## Validations prevues

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
