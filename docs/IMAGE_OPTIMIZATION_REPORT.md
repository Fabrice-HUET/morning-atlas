# Rapport d’optimisation des images breakfast

## Résumé

- Images PNG sources analysées : 53.
- Images WebP générées : 53.
- Slugs de recettes couverts : 53 / 53.
- PNG restants dans `public/images/breakfasts/` : 0.
- WebP manquants : 0.
- WebP hors slug : 0.
- Doublons détectés : 0.
- Outil utilisé : `cwebp`.
- Paramètres utilisés : `-q 82 -metadata none`.

La conversion respecte la convention attendue par le composant `BreakfastImage` : `/images/breakfasts/{slug}.webp`.

## Poids avant / après

| Mesure | Avant PNG | Après WebP |
| --- | ---: | ---: |
| Poids total | 136 580 681 octets / 130,25 Mio | 11 360 670 octets / 10,83 Mio |
| Poids moyen | 2 576 994 octets / 2,46 Mio | 214 352 octets / 209,3 Kio |
| Gain estimé | — | 125 220 011 octets / 119,42 Mio, soit 91,68 % |

## Fichiers les plus lourds après conversion

| Fichier | Poids |
| --- | ---: |
| `full-english-breakfast.webp` | 328,7 Ko |
| `german-brotchen-breakfast.webp` | 307,7 Ko |
| `tapsilog.webp` | 303,3 Ko |
| `bubur-ayam.webp` | 293,4 Ko |
| `htamin-gyaw.webp` | 272,1 Ko |
| `italian-prima-colazione.webp` | 268,3 Ko |
| `canadian-homestyle-breakfast.webp` | 267,6 Ko |
| `bagel-with-cream-cheese.webp` | 259,1 Ko |
| `australian-big-brekkie.webp` | 249,2 Ko |
| `colombian-changua.webp` | 246,8 Ko |

## Fichiers dépassant 400 Ko

Aucun fichier WebP ne dépasse 400 Ko après conversion.

## Anomalies

Aucune anomalie détectée :

- aucun slug sans WebP ;
- aucun WebP en trop ;
- aucun doublon de slug ;
- aucun PNG restant dans `public/images/breakfasts/`.

## Contrôle d’affichage local

- Serveur local vérifié sur `http://127.0.0.1:3001`.
- Pages statiques vérifiées : `/`, `/countries`, `/recipes`, `/guides`, `/about`.
- Pages détail pays vérifiées : 53 / 53.
- Pages détail recettes vérifiées : 53 / 53.
- Images WebP servies directement : 53 / 53.
- Les pages pays et recettes contiennent bien des références aux fichiers `/images/breakfasts/{slug}.webp`.
- Les balises image contrôlées contiennent des attributs `alt` non vides.
- Le cadrage `object-cover` en ratio `4/3` a été contrôlé via une planche locale de prévisualisation.
- Le fallback reste disponible via `BreakfastImage` et `picsum.photos` si une image locale venait à manquer.
- `pnpm lint`, `pnpm typecheck` et `pnpm build` passent après conversion.

## Prochaines actions recommandées

1. Effectuer un dernier contrôle navigateur manuel si une validation humaine du rendu mobile/desktop est souhaitée.
2. Surveiller les cadrages lors de futures modifications de ratio ou de layout.
3. Garder la convention `/images/breakfasts/{slug}.webp` pour les prochains visuels.
