# PROMPT CODEX — PHASE 1 : STRUCTURER MORNING ATLAS

Tu travailles sur **Morning Atlas**, un site **Next.js + TypeScript** déjà déployé sur **Vercel**, avec domaine branché.

Le projet doit devenir un média éditorial et visuel autour des **petits-déjeuners du monde**.

---

## Vision produit

Morning Atlas doit permettre de découvrir le monde à travers les petits-déjeuners, avec un ton :

- simple ;
- chaleureux ;
- visuel ;
- légèrement pédagogique ;
- grand public ;
- culturel sans être académique.

Le projet doit être pensé dès maintenant pour évoluer vers :

- des **fiches pays** ;
- des **recettes** ;
- des **catégories** ;
- des **tags** ;
- des **pages ingrédients** ;
- des **boissons** ;
- des **types de breakfast** ;
- des **illustrations** ;
- des **guides et comparatifs** ;
- potentiellement plus tard une **base de données**.

---

## Contrainte importante

Le point de départ éditorial est une **infographie Reddit / Coolguides** montrant de nombreux petits-déjeuners du monde.

Important :

- ne pas copier mot pour mot le contenu de l’infographie ;
- ne pas cloner sa mise en page ;
- s’en servir uniquement comme **liste de départ / inspiration structurelle** pour prévoir les contenus initiaux ;
- adopter une formulation prudente :
  - “souvent associé à” ;
  - “peut inclure” ;
  - “dans certaines régions” ;
  - “une version courante” ;
  - “une version traditionnelle” ;
- ne jamais présenter une seule variante comme vérité absolue pour tout un pays.

---

## Objectif de cette phase

Améliorer le site pour le rendre plus professionnel et surtout le préparer à sa croissance future.

Cette phase doit produire :

1. une **landing page plus crédible et plus éditoriale** ;
2. une **architecture de composants réutilisables** ;
3. une **structure de données locale propre en TypeScript** ;
4. des **pages et routes prêtes** pour les futurs contenus ;
5. un **seed content initial** couvrant au moins les pays / breakfast visibles dans l’infographie de départ ;
6. un code facile à faire évoluer plus tard vers une vraie base de données.

---

## Méthode de travail attendue

Commence par :

1. analyser brièvement l’existant ;
2. lister les fichiers à créer / modifier ;
3. proposer un plan de refactor ;
4. puis appliquer les changements.

Ne fais pas une refonte massive en une seule passe si le projet semble fragile.

Si certains choix sont ambigus, privilégie :

- simplicité ;
- évolutivité ;
- cohérence éditoriale ;
- maintenabilité.

---

## 1. Refactoriser / organiser le projet

Créer ou améliorer une structure proche de celle-ci :

```txt
src/
├── app/
│   ├── page.tsx
│   ├── countries/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── recipes/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── guides/
│   │   └── page.tsx
│   ├── categories/
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── ingredients/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeading.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── EditorialPromise.tsx
│   │   ├── FeaturedCountries.tsx
│   │   ├── FeaturedRecipes.tsx
│   │   ├── FeaturedCategories.tsx
│   │   └── FutureRoadmap.tsx
│   ├── cards/
│   │   ├── CountryCard.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── IngredientCard.tsx
│   │   └── TagBadge.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Pill.tsx
│       └── Flag.tsx
├── data/
│   ├── countries.ts
│   ├── recipes.ts
│   ├── categories.ts
│   ├── ingredients.ts
│   ├── tags.ts
│   └── guides.ts
├── lib/
│   ├── utils.ts
│   └── content-helpers.ts
└── types/
    ├── country.ts
    ├── recipe.ts
    ├── taxonomy.ts
    └── guide.ts
```

Adapte cette structure à l’existant si nécessaire. Ne casse pas inutilement ce qui fonctionne déjà.

---

## 2. Prévoir les modèles de données

Créer des types TypeScript propres.

### CountryBreakfast

Chaque fiche pays doit pouvoir contenir :

- `slug`
- `country`
- `countryCode`
- `flagEmoji`
- `region`
- `continent`
- `heroTitle`
- `shortDescription`
- `breakfastName`
- `breakfastSubtitle`
- `typicalItems`
- `commonDrinks`
- `breakfastStyles`
- `difficultyToRecreate`
- `culturalNote`
- `funFact`
- `morningContext`
- `recipeSlugs`
- `ingredientSlugs`
- `categorySlugs`
- `tagSlugs`
- `isTraditional`
- `seoTitle`
- `seoDescription`
- `needsReview`

### Valeurs possibles pour `breakfastStyles`

- `sweet`
- `savory`
- `hearty`
- `quick`
- `healthy`
- `family`
- `street-food`
- `traditional`

### Valeurs possibles pour `difficultyToRecreate`

- `easy`
- `medium`
- `hard`

---

### Recipe

Chaque recette doit pouvoir contenir :

- `slug`
- `title`
- `countrySlugs`
- `originLabel`
- `shortDescription`
- `ingredients`
- `steps`
- `prepTimeMinutes`
- `cookTimeMinutes`
- `difficulty`
- `servings`
- `type`
- `tags`
- `featured`
- `recreateAtHomeLevel`
- `notes`
- `needsReview`

---

### Category

- `slug`
- `name`
- `description`

---

### Ingredient

- `slug`
- `name`
- `description`
- `type`

Valeurs possibles pour `type` :

- `grain`
- `dairy`
- `fruit`
- `beverage`
- `protein`
- `spice`
- `bread`
- `legume`
- `condiment`
- `pastry`
- `vegetable`
- `meat`
- `fish`

---

### Tag

- `slug`
- `label`
- `description`

---

### Guide

- `slug`
- `title`
- `excerpt`
- `theme`
- `relatedCountrySlugs`
- `relatedTagSlugs`

---

## 3. Prévoir les taxonomies éditoriales

Créer une première base de taxonomies pour Morning Atlas.

### Catégories minimales

- `sweet`
- `savory`
- `hearty`
- `quick`
- `healthy`
- `traditional`
- `family-friendly`
- `budget-friendly`
- `easy-to-recreate`
- `street-breakfast`
- `tea-breakfast`
- `coffee-breakfast`
- `rice-based`
- `bread-based`
- `egg-based`

### Ingrédients minimaux

- `eggs`
- `bread`
- `rice`
- `beans`
- `yogurt`
- `cheese`
- `fish`
- `fruit`
- `tea`
- `coffee`
- `milk`
- `honey`
- `spices`
- `flatbread`
- `porridge`
- `soup`
- `sausage`
- `plantain`
- `coconut`
- `corn`
- `oats`

### Tags minimaux

- `traditional-breakfast`
- `sweet-morning`
- `savory-morning`
- `drink-included`
- `protein-rich`
- `vegetarian-friendly`
- `easy-at-home`
- `regional-variation`
- `iconic-breakfast`
- `travel-food`
- `comfort-food`
- `family-meal`

---

## 4. Seed content initial

Créer un **jeu de données initial** avec les entrées de départ suivantes.

Le but n’est pas encore d’avoir des articles définitifs, mais d’avoir une base technique et éditoriale exploitable.

Quand il y a un doute, utiliser des formulations prudentes et ajouter `needsReview: true`.

---

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

---

### Asie

- Mainland China — You Tiao
- Southeastern China — Dim Sum
- China (Shandong Province) — Jianbing
- Bangladesh — Chapati with Curry
- South India — Idli with Chutney or Sambar
- North India — Paratha with Curry
- Western India (Maharashtra) — Kande Pohe
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

---

### Océanie

- Australia — Weet-Bix
- Australia — Fry-up
- Fiji — Babakau
- New Zealand — Porridge

---

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

---

### Amérique du Nord / Centrale / Sud

- Canada — Homestyle Breakfast
- United States — Bagel with Cream Cheese
- Costa Rica — Gallo Pinto
- Mexico — Huevos Rancheros
- Jamaica — Ackee and Saltfish
- Venezuela — Cachapas
- Colombia — Changua
- Cuba — Tostada with Café con Leche

---

## 5. Landing page

Améliorer la page d’accueil avec une vraie structure éditoriale.

### Sections souhaitées

1. **Hero**
   - titre fort : `Découvrir le monde à travers les petits-déjeuners`
   - sous-texte expliquant le concept
   - CTA principal : `Explorer les pays`
   - CTA secondaire : `Voir les recettes`

2. **Présentation / promesse**
   - expliquer Morning Atlas en 3 blocs :
     - cultures ;
     - recettes ;
     - habitudes du matin.

3. **Pays à explorer**
   - grille de cartes pays
   - au moins quelques pays mis en avant

4. **Recettes simples à refaire**
   - cartes recettes

5. **Explorer par catégories**
   - sucré / salé / copieux / rapide / sain / traditionnel

6. **Pourquoi Morning Atlas ?**
   - approche visuelle
   - découverte culturelle
   - contenu accessible

7. **Bientôt sur le site**
   - fiches pays détaillées
   - guides comparatifs
   - recettes par ingrédient
   - contenus culturels

8. **Footer complet**

---

## 6. Navbar et footer

### Navbar

Créer une navbar responsive, propre et simple :

- logo / nom `Morning Atlas`
- liens :
  - Explorer
  - Pays
  - Recettes
  - Guides
  - À propos
- CTA : `Commencer le voyage`

### Footer

Créer un vrai footer contenant :

- une mini présentation de Morning Atlas ;
- navigation principale ;
- quelques catégories ;
- quelques régions / continents ;
- placeholders pour réseaux sociaux ;
- une phrase signature : `Découvrir les cultures du matin, un petit-déjeuner à la fois.` ;
- copyright dynamique.

---

## 7. Préparer les pages futures

Créer des pages ou squelettes fonctionnels pour :

- `/countries`
- `/countries/[slug]`
- `/recipes`
- `/recipes/[slug]`
- `/guides`
- `/categories/[slug]`
- `/ingredients/[slug]`
- `/about`

Même si elles restent simples, elles doivent déjà exploiter les données locales.

---

## 8. Prévoir les illustrations / visuels

Pour l’instant, ne pas essayer de reproduire l’infographie d’origine.

Prévoir plutôt :

- des emplacements pour visuels ;
- des placeholders élégants ;
- éventuellement un système de champ `image` ou `illustrationPrompt` dans les données ;
- une logique prête pour intégrer plus tard des illustrations originales Morning Atlas.

---

## 9. Design attendu

Le design doit évoquer :

- le matin ;
- la chaleur ;
- le voyage ;
- la gourmandise ;
- l’atlas / carnet de route ;
- une identité simple et mémorable.

Éviter :

- rendu trop corporate ;
- rendu trop froid ;
- surcharge ;
- design générique trop “template”.

Préférer :

- cartes arrondies ;
- sections aérées ;
- hiérarchie typographique claire ;
- tons chaleureux ;
- responsive mobile-first ;
- cohérence de composants.

---

## 10. Contraintes techniques

- rester compatible avec le setup actuel ;
- ne pas ajouter de dépendances inutiles ;
- TypeScript propre ;
- composants réutilisables ;
- fichiers raisonnablement petits ;
- éviter le code monolithique ;
- ne pas casser le déploiement Vercel ;
- à la fin, vérifier que le projet build.

---

## Résultat attendu

À la fin, je veux :

- une landing page plus professionnelle ;
- une base éditoriale locale en TypeScript ;
- un système de composants propre ;
- un footer et une navbar solides ;
- des routes prêtes pour les pages futures ;
- un seed content initial couvrant au moins le socle de l’infographie de départ ;
- une architecture prête à évoluer ensuite vers du contenu enrichi et une base de données.
