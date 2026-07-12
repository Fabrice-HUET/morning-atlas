# Prompt — Recherche pays par pays pour Morning Atlas

Tu travailles sur **Morning Atlas**, un site éditorial autour des petits-déjeuners du monde.

L’objectif est de produire une recherche approfondie, fiable et exploitable pour **une seule entrée pays / petit-déjeuner à la fois**.

Le contenu servira ensuite à enrichir les fichiers du projet Next.js :

- `data/countries.ts`
- `data/recipes.ts`
- `data/ingredients.ts`
- `data/categories.ts`
- `data/tags.ts`
- futures pages éditoriales du site

---

## Entrée à traiter

Traite uniquement l’entrée suivante :

```txt
Pays ou région : [À REMPLIR]
Petit-déjeuner / plat : [À REMPLIR]
Contexte éventuel : [À REMPLIR SI BESOIN]
```

Exemples :

```txt
Pays ou région : Egypt
Petit-déjeuner / plat : Ful Medames
Contexte éventuel : petit-déjeuner traditionnel souvent associé à l’Égypte
```

```txt
Pays ou région : South India
Petit-déjeuner / plat : Idli with Chutney or Sambar
Contexte éventuel : entrée régionale, ne pas généraliser à toute l’Inde
```

---

## Règles éditoriales importantes

- Ne pas copier une infographie existante.
- Ne pas reprendre mot pour mot des textes trouvés en ligne.
- Ne pas présenter une variante régionale comme une vérité nationale.
- Ne pas dire “les habitants mangent tous ça”.
- Utiliser des formulations prudentes :
  - “souvent associé à”
  - “peut inclure”
  - “dans certaines régions”
  - “une version courante”
  - “une version traditionnelle”
  - “est parfois accompagné de”
- Signaler clairement les incertitudes.
- Éviter les clichés culturels.
- Ton : simple, chaleureux, visuel, grand public, légèrement pédagogique.
- Langue : français.

---

## Exigence de recherche

Fais une vraie recherche avant de rédiger.

Priorise les sources fiables :

- articles culturels sérieux ;
- sites culinaires reconnus ;
- sources institutionnelles ou touristiques fiables ;
- livres ou références culinaires si disponibles ;
- médias reconnus ;
- sources locales quand elles sont accessibles.

Évite de te baser uniquement sur :

- blogs SEO génériques ;
- contenus Pinterest ;
- contenus IA ;
- simples listes “top breakfast around the world” sans contexte.

Quand plusieurs sources divergent, explique brièvement la nuance.

---

## Résultat attendu

Produis une fiche complète avec la structure suivante.

---

# Fiche Morning Atlas

## 1. Identification

- Pays ou région :
- Continent :
- Nom du petit-déjeuner :
- Nom local / variantes d’écriture :
- Type d’entrée : pays / région / plat / boisson / combinaison
- Statut de vérification : fiable / à nuancer / incertain

---

## 2. Résumé court pour carte

Rédige un texte de 250 à 350 caractères maximum.

Objectif : affichage dans une carte pays ou recette.

Le texte doit être simple, chaleureux et prudent.

---

## 3. Description éditoriale longue

Rédige un texte de 2 à 4 paragraphes.

Objectif : page détail du site.

À inclure :

- ce que c’est ;
- pourquoi c’est associé au pays ou à la région ;
- comment il est souvent consommé ;
- ce qui le rend intéressant culturellement ;
- les nuances nécessaires.

---

## 4. Ingrédients principaux

Liste les ingrédients principaux sous forme de tableau :

| Ingrédient | Rôle | Obligatoire ou optionnel | Notes |
|---|---|---|---|

---

## 5. Boisson associée

Indique :

- boisson courante si pertinente ;
- absence de boisson spécifique si aucune source fiable ne permet de l’associer ;
- variantes possibles.

---

## 6. Contexte culturel

Explique :

- s’il s’agit d’un petit-déjeuner quotidien, traditionnel, festif, familial, urbain, de rue, régional, etc. ;
- s’il est surtout associé à certaines zones, communautés ou habitudes ;
- comment éviter de trop généraliser.

---

## 7. Variantes régionales ou familiales

Présente les variantes connues sans surcharger.

Format :

- Variante 1 :
- Variante 2 :
- Variante 3 :

Si peu de variantes sont fiables, indique-le.

---

## 8. Recette simplifiée faisable à la maison

Propose une version accessible à refaire chez soi.

Important :

- ne pas prétendre que c’est la version authentique absolue ;
- dire “version simplifiée inspirée de…” si nécessaire ;
- adapter sans trahir l’esprit du plat.

Structure :

- Portions :
- Temps de préparation :
- Temps de cuisson :
- Difficulté : easy / medium / hard
- Ingrédients :
- Étapes :

---

## 9. Niveau de difficulté et accessibilité

Indique :

- difficulté : easy / medium / hard ;
- facilité à trouver les ingrédients en France : easy / medium / hard ;
- substitutions possibles ;
- matériel nécessaire.

---

## 10. Catégories Morning Atlas

Choisis parmi ces catégories, ou propose-en une nouvelle si nécessaire :

- sweet
- savory
- hearty
- quick
- healthy
- traditional
- family-friendly
- budget-friendly
- easy-to-recreate
- street-breakfast
- tea-breakfast
- coffee-breakfast
- rice-based
- bread-based
- egg-based
- bean-based
- dairy-based
- porridge-based
- spicy
- fermented

Retour attendu :

```ts
categorySlugs: []
```

---

## 11. Tags Morning Atlas

Choisis ou propose des tags pertinents.

Exemples :

- traditional-breakfast
- sweet-morning
- savory-morning
- drink-included
- protein-rich
- vegetarian-friendly
- easy-at-home
- regional-variation
- iconic-breakfast
- travel-food
- comfort-food
- street-food
- family-meal
- fermented-food
- breakfast-bowl

Retour attendu :

```ts
tagSlugs: []
```

---

## 12. Ingrédients à créer dans la taxonomie

Liste les ingrédients utiles pour `data/ingredients.ts`.

Format attendu :

```ts
ingredientSlugs: []
```

Puis détaille les nouveaux ingrédients si nécessaire :

```ts
{
  slug: '',
  name: '',
  description: '',
  type: ''
}
```

Types disponibles :

- grain
- dairy
- fruit
- beverage
- protein
- spice
- bread
- legume
- condiment
- pastry
- vegetable
- meat
- fish
- egg
- fermented
- other

---

## 13. Données prêtes pour TypeScript

Propose un objet compatible avec le modèle `CountryBreakfast`.

Utilise une structure propre, sans commentaire inutile dans l’objet.

```ts
{
  slug: '',
  country: '',
  countryCode: '',
  flagEmoji: '',
  region: '',
  continent: '',
  heroTitle: '',
  shortDescription: '',
  breakfastName: '',
  breakfastSubtitle: '',
  typicalItems: [],
  commonDrinks: [],
  breakfastStyles: [],
  difficultyToRecreate: '',
  culturalNote: '',
  funFact: '',
  morningContext: '',
  recipeSlugs: [],
  ingredientSlugs: [],
  categorySlugs: [],
  tagSlugs: [],
  isTraditional: true,
  needsReview: true,
  seoTitle: '',
  seoDescription: ''
}
```

---

## 14. Données recette prêtes pour TypeScript

Si l’entrée correspond à une recette exploitable, propose aussi un objet compatible avec `Recipe`.

```ts
{
  slug: '',
  title: '',
  countrySlugs: [],
  originLabel: '',
  shortDescription: '',
  ingredients: [],
  steps: [],
  prepTimeMinutes: 0,
  cookTimeMinutes: 0,
  difficulty: '',
  servings: 0,
  type: [],
  tags: [],
  featured: false,
  recreateAtHomeLevel: '',
  notes: ''
}
```

Si l’entrée est plutôt une boisson ou une combinaison difficile à convertir en recette, explique comment la modéliser.

---

## 15. SEO

Propose :

- SEO title : 50 à 60 caractères si possible ;
- SEO description : 140 à 160 caractères si possible ;
- H1 recommandé ;
- méta courte pour partage social.

---

## 16. Contenus courts réutilisables

Rédige :

### Accroche Instagram / Pinterest

Texte court, visuel, engageant.

### Question finale

Une question simple pour encourager commentaire ou partage.

### Variante très courte pour carte

120 caractères maximum.

---

## 17. Prompt d’illustration Morning Atlas

Créer un prompt d’illustration original dans cette direction :

- atlas culinaire ;
- carnet de voyage ;
- illustration flat chaleureuse ;
- affiche éducative ;
- vue du dessus ou composition simple ;
- couleurs douces et matinales ;
- pas de photoréalisme ;
- pas de texte incrusté dans l’image ;
- pas de reproduction d’une infographie existante ;
- cohérence future pour une collection.

Format attendu :

```txt
Prompt illustration : ...
Negative prompt : ...
```

---

## 18. Points à vérifier

Liste tout ce qui doit rester en `needsReview` :

- origine exacte ;
- association au petit-déjeuner ;
- variantes ;
- ingrédients ;
- orthographe locale ;
- généralisation pays/région ;
- sources insuffisantes.

---

## 19. Sources

Cite les sources utilisées.

Pour chaque source :

- titre ;
- organisme / site ;
- lien ;
- ce que la source confirme.

Ne pas inventer de source.

---

## 20. Conclusion éditoriale

Termine par une recommandation claire :

- publier tel quel ;
- publier avec nuance ;
- garder en brouillon ;
- remplacer par une autre entrée plus représentative ;
- scinder en fiche régionale plutôt que pays.

Explique brièvement pourquoi.

---

## Liste complète des entrées à traiter progressivement

### Afrique

- Egypt — Ful Medames
- Morocco — Msemen
- Nigeria (Hausa) — Kosai
- Nigeria (Yoruba) — Ogi
- Senegal — Café Touba
- Somalia — Canjeero
- Tunisia — Lablabi
- Uganda — Katogo
- Ghana — Ampesi
- South Africa — Putu Pap
- Eastern Africa — Chai and Mandazi
- Tanzania — Chipsi Mayai

### Asie

- Mainland China — You Tiao
- Southeastern China — Dim Sum
- China (Shandong Province) — Jianbing
- Bangladesh — Chapati with Curry
- South India — Idli with Chutney or Sambar
- North India — Paratha with Curry
- Western India / Maharashtra — Kande Pohe
- Iran — Barbari
- Israel — Israeli Breakfast
- Japan — Steamed Rice and Miso Soup
- Korea — Rice and Banchan
- Myanmar — Htamin Jaw
- Philippines — Tapsilog
- Singapore — Kaya Toast
- Malaysia — Nasi Lemak
- Turkey — Menemen
- Indonesia — Bubur Ayam

### Océanie

- Australia — Weet-Bix
- Australia — Fry-up
- Fiji — Babakau
- New Zealand — Porridge

### Europe

- Poland — Kanapki
- Switzerland — Muesli
- Netherlands — Hagelslag on Bread
- Spain — Chocolate Churros
- United Kingdom — Full English Breakfast
- Russia — Kasha
- France — Tartines
- Italy — Prima Colazione
- Bulgaria — Banitsa

### Amériques / Caraïbes

- Canada — Homestyle Breakfast
- United States — Bagel with Cream Cheese
- Costa Rica — Gallo Pinto
- Mexico — Huevos Rancheros
- Jamaica — Ackee and Saltfish
- Venezuela — Cachapas
- Colombia — Changua
- Cuba — Tostada with Café con Leche
