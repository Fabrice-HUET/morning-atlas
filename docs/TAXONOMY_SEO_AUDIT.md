# Audit SEO des taxonomies — Morning Atlas

## Résumé

Cet audit vérifie les pages `/categories/{slug}` et `/ingredients/{slug}` actuellement incluses dans `app/sitemap.ts`.

Constat principal : les pages existent, ont un H1, une metadata, un `WebPage` JSON-LD, une description et des liens internes vers pays et recettes. Elles restent toutefois éditorialement fines, car elles ne proposent pas encore d’introduction spécifique, d’explication culturelle, de source dédiée ou de bloc court de synthèse.

Recommandation : ne pas modifier l’indexation dans cette mission. Garder les catégories dans le sitemap pour l’instant, enrichir les catégories faibles, garder indexables les ingrédients solides, et prévoir une mission dédiée pour retirer temporairement du sitemap les ingrédients sans recette liée ou avec un seul pays associé.

## État actuel

- `app/categories/[slug]/page.tsx` affiche le titre, la description, les pays associés et les recettes liées.
- `app/ingredients/[slug]/page.tsx` affiche le titre, la description, le type, les pays associés et les recettes liées.
- `app/sitemap.ts` inclut toutes les catégories et tous les ingrédients.
- `lib/content-helpers.ts` fournit les associations pays/recettes par catégorie et par ingrédient.
- Aucun `noindex` spécifique n’est défini sur ces pages.
- Les pages ne contiennent pas encore de texte éditorial enrichi au-delà de la description courte de taxonomie.

## Méthode

Critères calculés pour chaque page :

- présence d’un titre : champ `name` ;
- présence d’une description : champ `description` ;
- nombre de pays associés ;
- nombre de recettes associées ;
- contenu visible actuel : description + cartes pays + cartes recettes ;
- potentiel SEO : estimé à partir du volume de contenus reliés et de la clarté du thème.

Seuils utilisés pour classer les pages :

- `garder indexable` : au moins 3 recettes liées, ou au moins 3 pays liés, ou au moins 5 contenus liés au total ;
- `enrichir puis garder` : 2 à 4 contenus liés au total ;
- `retirer temporairement du sitemap ou noindex` : 0 ou 1 contenu lié au total.

Ces seuils sont pratiques, pas définitifs. Ils servent à éviter que des pages quasi vides soient indexées avant enrichissement.

## Volumes analysés

- Catégories analysées : 123.
- Ingrédients analysés : 411.
- Pays analysés : 53.
- Recettes analysées : 53.

### Synthèse catégories

- À garder indexables : 40.
- À enrichir puis garder : 83.
- À retirer temporairement du sitemap ou passer en noindex : 0.

### Synthèse ingrédients

- À garder indexables : 76.
- À enrichir puis garder : 302.
- À retirer temporairement du sitemap ou passer en noindex : 33.

## Pages probablement solides

### Catégories solides — exemples prioritaires

| Slug | Nom | Pays | Recettes | Total |
| --- | --- | ---: | ---: | ---: |
| `family-friendly` | Familial | 35 | 34 | 69 |
| `savory` | Salé | 30 | 30 | 60 |
| `traditional` | Traditionnel | 25 | 22 | 47 |
| `quick` | Rapide | 19 | 18 | 37 |
| `hearty` | Copieux | 19 | 17 | 36 |
| `breakfasts-of-asia` | Petits-déjeuners d’Asie | 17 | 17 | 34 |
| `healthy` | Sain | 14 | 13 | 27 |
| `breakfasts-of-europe` | Petits-déjeuners d’Europe | 13 | 13 | 26 |
| `breakfasts-of-africa` | Petits-déjeuners d’Afrique | 12 | 12 | 24 |
| `sweet` | Sucré | 11 | 11 | 22 |
| `street-breakfast` | Street breakfast | 11 | 11 | 22 |
| `egg-based` | Base œufs | 10 | 9 | 19 |
| `brunch` | Brunch | 9 | 9 | 18 |
| `bread-breakfasts` | Pains du matin | 9 | 9 | 18 |
| `rice-based` | Base riz | 9 | 8 | 17 |

### Ingrédients solides — exemples prioritaires

| Slug | Nom | Pays | Recettes | Total |
| --- | --- | ---: | ---: | ---: |
| `eggs` | Œufs | 28 | 28 | 56 |
| `butter` | Beurre | 22 | 22 | 44 |
| `salt` | Sel | 18 | 20 | 38 |
| `water` | Eau | 15 | 17 | 32 |
| `milk` | Lait | 15 | 14 | 29 |
| `tomato` | Tomate | 15 | 14 | 29 |
| `sugar` | Sucre | 14 | 14 | 28 |
| `garlic` | Ail | 13 | 13 | 26 |
| `oil` | Huile | 13 | 13 | 26 |
| `honey` | Miel | 12 | 12 | 24 |
| `onion` | Oignon | 12 | 11 | 23 |
| `ginger` | Gingembre | 10 | 8 | 18 |
| `cucumber` | Concombre | 9 | 9 | 18 |
| `coffee` | Café | 9 | 8 | 17 |
| `yogurt` | Yaourt | 8 | 8 | 16 |

## Pages probablement trop fines

### Catégories

Aucune catégorie n’a 0 ou 1 contenu lié. Les catégories faibles ont généralement 1 pays et 1 recette, donc elles ne sont pas vides, mais elles devraient être enrichies avant d’être considérées comme de vraies pages SEO.

Exemples de catégories à enrichir : `american-breakfasts`, `bangladeshi-breakfasts`, `british-breakfasts`, `cereal-breakfasts`, `fish-breakfasts`, `french-breakfasts`, `japanese-breakfasts`, `kopitiam-breakfasts`, `meat-breakfasts`, `toast-breakfasts`, `yogurt-breakfasts`.

### Ingrédients à retirer temporairement du sitemap ou passer en noindex

Ces ingrédients n’ont aucune recette liée ou seulement un pays associé sans recette correspondante. Ils sont les candidats les plus clairs pour une exclusion temporaire du sitemap dans une mission séparée.

| Slug | Nom | Pays | Recettes | Total |
| --- | --- | ---: | ---: | ---: |
| `fish` | Poisson | 0 | 0 | 0 |
| `meat` | Viande | 0 | 0 | 0 |
| `pastry` | Pâtisserie | 0 | 0 | 0 |
| `porridge` | Porridge | 0 | 0 | 0 |
| `protein` | Protéine | 0 | 0 | 0 |
| `soup` | Soupe | 0 | 0 | 0 |
| `spices` | Épices | 0 | 0 | 0 |
| `vegetable` | Légumes | 0 | 0 | 0 |
| `akara` | Akara | 1 | 0 | 1 |
| `amasi` | Amasi | 1 | 0 | 1 |
| `baladi-bread` | Pain baladi | 1 | 0 | 1 |
| `byenda` | Byenda | 1 | 0 | 1 |
| `cereal-porridge` | Bouillie de céréales | 1 | 0 | 1 |
| `chakalaka` | Chakalaka | 1 | 0 | 1 |
| `cocoyam` | Cocoyam | 1 | 0 | 1 |
| `cocoyam-leaves` | Feuilles de cocoyam | 1 | 0 | 1 |
| `egusi` | Egusi | 1 | 0 | 1 |
| `fermented-fish` | Poisson fermenté | 1 | 0 | 1 |
| `g-nut-sauce` | Sauce g-nut | 1 | 0 | 1 |
| `grains-of-selim` | Grains of Selim | 1 | 0 | 1 |
| `green-bell-pepper` | Poivron vert | 1 | 0 | 1 |
| `ground-meat` | Viande hachée | 1 | 0 | 1 |
| `guinea-pepper` | Poivre de Guinée | 1 | 0 | 1 |
| `herbs` | Herbes fraîches | 1 | 0 | 1 |
| `kachumbari` | Kachumbari | 1 | 0 | 1 |
| `maas` | Maas | 1 | 0 | 1 |
| `mielie-meal` | Mielie meal | 1 | 0 | 1 |
| `mint-tea` | Thé à la menthe | 1 | 0 | 1 |
| `moi-moi` | Moi moi | 1 | 0 | 1 |
| `offal` | Abats | 1 | 0 | 1 |
| `shaobing` | Shaobing | 1 | 0 | 1 |
| `sweet-potatoes` | Patates douces | 1 | 0 | 1 |
| `xylopia-aethiopica` | Xylopia aethiopica | 1 | 0 | 1 |

## Risques SEO

- Indexer 411 pages ingrédients alors que beaucoup n’ont qu’un seul usage peut diluer la qualité globale du site.
- Les pages ingrédients faibles peuvent ressembler à des pages de navigation générées automatiquement si elles ne contiennent qu’une description courte et une liste très réduite.
- Les pages catégories faibles peuvent être utiles pour le maillage, mais trop minces pour cibler une requête SEO autonome.
- Le sitemap signale actuellement toutes les taxonomies comme indexables, sans distinction de maturité éditoriale.
- Les pages sans contenu éditorial dédié risquent de moins bien répondre aux moteurs IA, même si elles sont crawlables.

## Options possibles

### Option A — Tout garder indexable pour l’instant

- Avantage : pas de changement technique risqué, toutes les pages restent crawlables.
- Limite : les ingrédients très faibles restent signalés dans le sitemap.
- Pertinence : acceptable à court terme si le site n’est pas encore largement publié.

### Option B — Retirer temporairement les ingrédients faibles du sitemap

- Avantage : réduit le volume de pages fines signalées à Google.
- Limite : les pages restent accessibles via le maillage, sauf ajout d’un `noindex` séparé.
- Pertinence : recommandée pour les 33 ingrédients classés `retirer temporairement du sitemap ou noindex`, après validation humaine.

### Option C — Ajouter `noindex` aux ingrédients faibles

- Avantage : signal clair d’exclusion d’indexation.
- Limite : demande une stratégie de metadata dynamique par seuil, et doit être maintenue avec les données.
- Pertinence : utile si les pages faibles restent accessibles mais ne doivent pas apparaître dans l’index.

### Option D — Enrichir les pages avant toute exclusion

- Avantage : améliore le site sans réduire la couverture.
- Limite : demande du travail éditorial sur beaucoup de pages.
- Pertinence : prioritaire pour les catégories faibles et les ingrédients avec 2 à 4 contenus liés.

## Recommandation finale

1. Ne pas modifier l’indexation dans cette mission.
2. Garder toutes les catégories dans le sitemap pour l’instant, car aucune catégorie n’est vide.
3. Garder indexables les 76 ingrédients solides.
4. Enrichir les 302 ingrédients intermédiaires avant de les considérer comme des pages SEO solides.
5. Préparer une mission dédiée pour retirer temporairement du sitemap, ou passer en `noindex`, les 33 ingrédients très faibles listés ci-dessus.
6. Ajouter progressivement une introduction éditoriale courte aux taxonomies prioritaires : définition, contexte culturel, exemples, liens vers pays et recettes.

## Prochaines actions

- Créer une règle documentée de maturité SEO pour les taxonomies : `indexable`, `needsEnrichment`, `noindexCandidate`.
- Ajouter une introduction éditoriale courte aux catégories solides et aux ingrédients les plus recherchables.
- Retirer temporairement du sitemap les 33 ingrédients très faibles si la recommandation est validée.
- Créer une page index `/ingredients` seulement si les ingrédients deviennent un axe de navigation public assumé.
- Surveiller Search Console après publication pour repérer les pages taxonomiques avec impressions mais faible engagement.
