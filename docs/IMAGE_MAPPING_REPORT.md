# Rapport de mapping des images breakfast

## Résumé

- Slugs de recettes analysés : 53.
- Images présentes dans `public/images/breakfasts/` après renommage : 53.
- Images associées automatiquement : 53.
- Images non associées : 0.
- Conflits ou doublons détectés : 0.
- Slugs sans image locale : 0.

Les images ont été renommées en conservant leur extension actuelle `.png`. Aucune conversion en `.webp` n’a été faite.

Point technique important : le composant `BreakfastImage` cherche actuellement les fichiers au chemin `/images/breakfasts/{slug}.webp`. Les fichiers `.png` renommés ne seront donc pas affichés comme images locales tant que la conversion `.webp` ou l’adaptation du composant n’aura pas été faite.

## Images associées automatiquement

| Fichier initial | Fichier cible | Slug associé | Statut |
| --- | --- | --- | --- |
| `Afrique_de_l_Est—Chai_et_mandazi.png` | `public/images/breakfasts/chai-and-mandazi.png` | `chai-and-mandazi` | Renommé |
| `Afrique_du_Sud-Putu_Pap_Phuthu.png` | `public/images/breakfasts/putu-pap.png` | `putu-pap` | Renommé |
| `Bangladesh—Ruti_avec_dal_ou_curry_de_legumes.png` | `public/images/breakfasts/ruti-with-dal-and-vegetable-curry.png` | `ruti-with-dal-and-vegetable-curry` | Renommé |
| `Chine_Shandong_Nord_de_la_Chine-Jianbing.png` | `public/images/breakfasts/jianbing.png` | `jianbing` | Renommé |
| `Chine_cantonaise_Guangdong_Hong-Kong_Macao—Dim_sum.png` | `public/images/breakfasts/dim-sum.png` | `dim-sum` | Renommé |
| `Chine_continentale—You_tiao.png` | `public/images/breakfasts/you-tiao.png` | `you-tiao` | Renommé |
| `Coree—Riz_et_banchan.png` | `public/images/breakfasts/korean-rice-and-banchan.png` | `korean-rice-and-banchan` | Renommé |
| `Egypte-Ful_Medames.png` | `public/images/breakfasts/ful-medames.png` | `ful-medames` | Renommé |
| `Ghana-Ampesi.png` | `public/images/breakfasts/ampesi.png` | `ampesi` | Renommé |
| `Inde_Maharashtra—Kande_pohe.png` | `public/images/breakfasts/kande-pohe.png` | `kande-pohe` | Renommé |
| `Inde_du_Nord—Paratha_avec_curry.png` | `public/images/breakfasts/paratha-with-curry.png` | `paratha-with-curry` | Renommé |
| `Inde_du_Sud—Idli_avec_chutney_ou_sambar.png` | `public/images/breakfasts/idli-sambar.png` | `idli-sambar` | Renommé |
| `Indonesie—Bubur_ayam.png` | `public/images/breakfasts/bubur-ayam.png` | `bubur-ayam` | Renommé |
| `Iran—Petit_dejeuner_au_barbari.png` | `public/images/breakfasts/barbari-breakfast.png` | `barbari-breakfast` | Renommé |
| `Israel—Israeli_breakfast.png` | `public/images/breakfasts/israeli-breakfast.png` | `israeli-breakfast` | Renommé |
| `Japon—Riz_vapeur_et_soupe_miso.png` | `public/images/breakfasts/japanese-steamed-rice-and-miso-soup.png` | `japanese-steamed-rice-and-miso-soup` | Renommé |
| `Maroc-Msemen.png` | `public/images/breakfasts/msemen.png` | `msemen` | Renommé |
| `Myanmar—Htamin_gyaw-htamin_jaw.png` | `public/images/breakfasts/htamin-gyaw.png` | `htamin-gyaw` | Renommé |
| `Nigeria-Kosai.png` | `public/images/breakfasts/kosai.png` | `kosai` | Renommé |
| `Nigeria-Ogi.png` | `public/images/breakfasts/ogi.png` | `ogi` | Renommé |
| `Ouganda-Katogo.png` | `public/images/breakfasts/katogo.png` | `katogo` | Renommé |
| `Philippines—Tapsilog.png` | `public/images/breakfasts/tapsilog.png` | `tapsilog` | Renommé |
| `Senegal-Cafe_Touba.png` | `public/images/breakfasts/cafe-touba.png` | `cafe-touba` | Renommé |
| `Somalie—Canjeero.png` | `public/images/breakfasts/canjeero.png` | `canjeero` | Renommé |
| `Tanzanie—Chipsi_mayai.png` | `public/images/breakfasts/chipsi-mayai.png` | `chipsi-mayai` | Renommé |
| `Tunisie-Lablabi.png` | `public/images/breakfasts/lablabi.png` | `lablabi` | Renommé |
| `Turquie—Menemen.png` | `public/images/breakfasts/menemen.png` | `menemen` | Renommé |
| `australian-big-brekkie.png` | `public/images/breakfasts/australian-big-brekkie.png` | `australian-big-brekkie` | Déjà conforme |
| `boterham-met-hagelslag.png` | `public/images/breakfasts/boterham-met-hagelslag.png` | `boterham-met-hagelslag` | Déjà conforme |
| `bulgaria-banitsa.png` | `public/images/breakfasts/bulgarian-banitsa.png` | `bulgarian-banitsa` | Renommé |
| `canada-homestyle-breakfast.png` | `public/images/breakfasts/canadian-homestyle-breakfast.png` | `canadian-homestyle-breakfast` | Renommé |
| `chocolate-con-churros.png` | `public/images/breakfasts/chocolate-con-churros.png` | `chocolate-con-churros` | Déjà conforme |
| `colombia-changua.png` | `public/images/breakfasts/colombian-changua.png` | `colombian-changua` | Renommé |
| `costa-rica-gallo-pinto.png` | `public/images/breakfasts/costa-rican-gallo-pinto.png` | `costa-rican-gallo-pinto` | Renommé |
| `cuba-tostada-cafe-con-leche.png` | `public/images/breakfasts/cuban-tostada-cafe-con-leche.png` | `cuban-tostada-cafe-con-leche` | Renommé |
| `fiji-babakau.png` | `public/images/breakfasts/babakau.png` | `babakau` | Renommé |
| `france-tartines.png` | `public/images/breakfasts/tartines.png` | `tartines` | Renommé |
| `full-english_breakfast.png` | `public/images/breakfasts/full-english-breakfast.png` | `full-english-breakfast` | Renommé |
| `germany-brotchen-fruhstuck.png` | `public/images/breakfasts/german-brotchen-breakfast.png` | `german-brotchen-breakfast` | Renommé |
| `greek-yogurt-with-honey.png` | `public/images/breakfasts/greek-yogurt-with-honey.png` | `greek-yogurt-with-honey` | Déjà conforme |
| `italian-prima-colazione.png` | `public/images/breakfasts/italian-prima-colazione.png` | `italian-prima-colazione` | Déjà conforme |
| `jamaica-ackee-saltfish.png` | `public/images/breakfasts/jamaican-ackee-and-saltfish.png` | `jamaican-ackee-and-saltfish` | Renommé |
| `malaysia-nasi-lemak.png` | `public/images/breakfasts/nasi-lemak.png` | `nasi-lemak` | Renommé |
| `mexico-huevos-rancheros.png` | `public/images/breakfasts/huevos-rancheros.png` | `huevos-rancheros` | Renommé |
| `new-zealand-porridge.png` | `public/images/breakfasts/new-zealand-porridge.png` | `new-zealand-porridge` | Déjà conforme |
| `polish-kanapki.png` | `public/images/breakfasts/polish-kanapki.png` | `polish-kanapki` | Déjà conforme |
| `portuguese-pao-com-manteiga-galao.png` | `public/images/breakfasts/portuguese-pao-com-manteiga-galao.png` | `portuguese-pao-com-manteiga-galao` | Déjà conforme |
| `russian-kasha.png` | `public/images/breakfasts/russian-kasha.png` | `russian-kasha` | Déjà conforme |
| `singapore-kaya_toast.png` | `public/images/breakfasts/kaya-toast.png` | `kaya-toast` | Renommé |
| `swiss-bircher-muesli.png` | `public/images/breakfasts/swiss-bircher-muesli.png` | `swiss-bircher-muesli` | Déjà conforme |
| `united-states-bagel-cream-cheese.png` | `public/images/breakfasts/bagel-with-cream-cheese.png` | `bagel-with-cream-cheese` | Renommé |
| `venezuelan-cachapas.png` | `public/images/breakfasts/venezuelan-cachapas.png` | `venezuelan-cachapas` | Déjà conforme |
| `weet-bix-bowl.png` | `public/images/breakfasts/weet-bix-bowl.png` | `weet-bix-bowl` | Déjà conforme |

## Images non associées

Aucune image non associée. Tous les fichiers présents dans `public/images/breakfasts/` correspondent désormais à un slug existant.

## Conflits ou doublons

Aucun conflit de cible et aucun doublon de slug détecté.

## Images manquantes pour des slugs

Aucun slug sans image locale. Les 53 slugs de recettes disposent maintenant d’un fichier image dans `public/images/breakfasts/`.

## Prochaines actions recommandées

1. Convertir les 53 fichiers `.png` en `.webp` dans une mission séparée.
2. Vérifier que le fichier `swiss-bircher-muesli.png` est bien inclus dans la conversion.
3. Vérifier que chaque fichier final existe en `public/images/breakfasts/{slug}.webp`.
4. Tester visuellement les pages pays, recettes et cartes après conversion.
5. Mettre `Image affichée` à `Oui via BreakfastImage` dans `docs/CONTENT_TRACKER.md` après conversion et test navigateur.
