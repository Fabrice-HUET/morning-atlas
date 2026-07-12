# Checklist de validation SEO post-déploiement

À exécuter **dès que le site est en ligne** (les outils Google ont besoin d'une URL publique — impossible en local). Objectif : confirmer que le socle SEO construit (JSON-LD, sitemap, canonicals, OG, noindex) est bien lu par Google.

## 1. Données structurées (JSON-LD)

Outils : [Rich Results Test](https://search.google.com/test/rich-results) et [Schema Markup Validator](https://validator.schema.org/).

Tester une URL de chaque type :

| Page | Type(s) JSON-LD attendus | Critère de succès |
| --- | --- | --- |
| Accueil `/` | `WebSite`, `Organization`, `WebPage` | Aucune erreur ; entités reconnues |
| Une recette `/recipes/tartines` | `Recipe` (+ Breadcrumb) | **Rich result « Recette » éligible** ; `prepTime`/`cookTime`/`totalTime` (ISO 8601), `recipeYield`, `recipeCategory`, `keywords` présents ; **0 erreur, 0 avertissement bloquant** |
| Un pays `/countries/egypt-ful-medames` | `WebPage`, `BreadcrumbList` | Breadcrumb `Accueil → Pays → …` valide, **aucune URL 404** dans le fil |
| Une catégorie `/categories/bread-breakfasts` | `WebPage`, `BreadcrumbList`, `ItemList` | Breadcrumb `Accueil → Catégories → …` (le niveau `/categories` existe) |
| `/creator` | `ProfilePage` + `Person` | `sameAs` LinkedIn correct |

Action si erreur : corriger le builder concerné dans `lib/structured-data.ts`, rebuild, re-tester.

## 2. Search Console

1. **Propriété** : ajouter et valider le domaine.
2. **Sitemap** : soumettre `https://morning-atlas.fr/sitemap.xml`. Vérifier qu'il est lu sans erreur (~611 URLs attendues : pages statiques + 53 pays + 53 recettes + 3 guides + 80 catégories + ~376 ingrédients indexables).
3. **Couverture / Indexation** :
   - Vérifier que les pages fortes (accueil, pays, recettes, catégories) sont **indexables**.
   - Vérifier que les **pages ingrédients fines** (score ≤ 1 contenu lié) sont bien **exclues** (34 pages en `noindex`, absentes du sitemap) et n'apparaissent pas en « indexées ».
   - `/creator/cv` doit être en **noindex** (non indexé).
4. **Performance** : suivre l'apparition des rich results recettes après quelques semaines.

## 3. Métadonnées sociales

Tester un partage sur [OpenGraph.xyz](https://www.opengraph.xyz/) (ou l'inspecteur LinkedIn/X) :
- Accueil, `/about`, une catégorie → **image OG de marque** (`/og-default`, 1200×630).
- Une recette / un pays → **image spécifique** (photo du petit-déjeuner).
- `/creator` → **image « Atelier »** dédiée.
- Carte Twitter en `summary_large_image` partout.

## 4. Divers

- `robots.txt` accessible et cohérent.
- `/rss.xml` valide (106 items) et `/llms.txt` accessibles.
- Titres : `<title>` de chaque page finit par « — Morning Atlas » sans double suffixe.
- Canonicals : chaque page pointe vers sa propre URL absolue.

## Critères de succès global

- 0 erreur JSON-LD sur les 5 URLs types ; recette éligible aux rich results.
- Sitemap accepté, aucune URL 404 dedans.
- Pages fines ingrédients hors index ; pages fortes indexées.
- Aperçus sociaux avec image sur toutes les familles de pages.
