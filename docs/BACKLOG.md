# Backlog Morning Atlas — tâches avec prompts agent

> **Document vivant.** Issu du backlog de l'audit du 2026-07-02 (`docs/AUDIT_2026-07.md`, livrable 2) ; cette copie fait foi et sera maintenue à jour ici. Les tâches de l'espace créateur (CREATOR-01 → CREATOR-07) vivent dans `docs/CREATOR_ROADMAP.md`.
>
> **Mode d'emploi :** chaque tâche a un ID stable, une priorité, un effort (S/M/L), des dépendances, des critères d'acceptation et un **mini-prompt prêt à coller** dans une session agent (Opus ou équivalent). Coller le prompt tel quel ; l'agent lit `AGENTS.md` et vérifie l'état réel avant d'agir. Après chaque tâche livrée : cocher ici, mettre à jour `docs/PROJECT_LOG.md`, et committer.
>
> **Ordre d'exécution :** voir `docs/ROADMAP.md`, section « Ordre d'exécution ».

## Suivi

| ID | Tâche | Priorité | Statut |
| --- | --- | --- | --- |
| CODE-01 | Assainir le dépôt git | P0 | ✅ 2026-07-10 (tout sur `main`) |
| DATA-01 | Restaurer les accents français | P0 | ✅ 2026-07-10 (passe automatisée sûre ; résidus ambigus laissés à EDIT-01) |
| UI-01 | Retirer le badge « A verifier » public | P0 | ✅ 2026-07-11 |
| IMG-01 | Remplacer le fallback picsum | P0 | ✅ 2026-07-11 |
| SEO-01 | Corriger les breadcrumbs JSON-LD 404 | P0 | ✅ 2026-07-11 |
| EDIT-01 | Relire les fiches par lots | P0 | ✅ 2026-07-12 — **106/106 fiches** à `needsReview: false` (lots 1-2 relus en détail ; lots 3-5 validés au niveau structurel + langue) |
| EDIT-02 | Documenter le processus de relecture → `docs/EDITORIAL_REVIEW.md` | P0 | ✅ 2026-07-11 |
| PAGE-01 → CREATOR-01…07 | Espace créateur « L'Atelier » (`docs/CREATOR_ROADMAP.md`) | P1 | ✅ 2026-07-11 (les 7 tâches) |
| SEO-02 → SEO-06 | Consolidation SEO | P1 | ✅ 2026-07-11 (les 5) |
| PAGE-02 → PAGE-04 | Pages index + 404 | P1 | ✅ 2026-07-11 |
| DESIGN-01 / DESIGN-02 | Typographie + tokens | P1 | ✅ 2026-07-11 |
| A11Y-01 | Focus trap, skip-link, reduced-motion | P1 | ✅ 2026-07-11 |
| TOOL-01 / TOOL-02 | CI + environnement Node | P1 | ✅ 2026-07-11 |
| DATA-05 | Validation d'intégrité en script pnpm | P1 | ✅ 2026-07-11 (a attrapé une corruption de slug) |
| DATA-02 | Unifier tags / tagSlugs sur Recipe | P1 | ✅ 2026-07-11 |
| DATA-03 | Rationaliser les taxonomies (L) | P1 | ✅ 2026-07-12 réduction principale (123→80 cat, 410→402 ing, orphelins) ; cible ≤60 = décision éditoriale documentée dans `TAXONOMY_SEO_AUDIT.md` |
| DATA-04 | Rendre `featured` significatif | P1 | ✅ 2026-07-11 |
| DATA-06 | Traduire les enums affichés | P1 | ✅ 2026-07-11 |
| IMG-02 | Nettoyage assets template | P1 | ✅ 2026-07-12 |
| DATA-07 | Nettoyer les entrées orphelines | P2 | ✅ 2026-07-11 (fait pendant DATA-03) |
| CODE-02 | Déplacer app/docs → docs/lots | P2 | ✅ 2026-07-12 |
| EDIT-04 | Enrichir /about (méthode éditoriale) | P2 | ✅ 2026-07-12 |
| DESIGN-03 | Rayons + focus-visible | P2 | ✅ 2026-07-12 |
| A11Y-02 | Audit contrastes | P2 | ✅ 2026-07-12 (toast→mocha ; accents décoratifs = AA-grand, documentés) |
| DOCS-01 | Consolider les docs → `docs/README.md` | P2 | ✅ 2026-07-12 |
| SEO-08 | llms.txt + flux RSS | P3 | ✅ 2026-07-12 (débloqué : contenu stabilisé) |
| PAGE-05 | Pages guides individuelles /guides/[slug] | P3 | ✅ 2026-07-12 |
| SEO-07 | Checklist validation post-déploiement → `docs/SEO_VALIDATION_CHECKLIST.md` | P2 | ✅ 2026-07-12 |
| TOOL-03 | Tests unitaires des helpers (Vitest, en CI) | P3 | ✅ 2026-07-12 |
| Reste P2 / P3 | EDIT-03, PERF-01, FEAT-01→04 | — | ☐ |

---
### [DATA-01] Restaurer les accents français dans toutes les données et textes UI
- **Catégorie :** Données/Contenu
- **Priorité :** P0 (bloquant)
- **Effort estimé :** L
- **Dépend de :** aucune
- **Pourquoi :** La quasi-totalité des textes (données pays/recettes, H1 de la home, footer, libellés des pages) est écrite sans accents, ce qui rend le site non publiable pour une marque éditoriale française et dégrade le SEO.
- **Critères d'acceptation :**
  - Plus aucun mot français non accentué dans `data/countries.ts`, `data/recipes/**`, `data/ingredients.ts`, `data/categories.ts`, `data/tags.ts`, `data/guides.ts`.
  - Les textes UI en dur corrigés : `HeroSection`, `Footer`, `FutureRoadmap`, `EditorialPromise`, pages `countries/[slug]` et `recipes/[slug]` (« Difficulté maison », « Recettes associées », « Étapes »…).
  - Les slugs et URLs ne changent PAS (les slugs restent en ASCII).
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (site éditorial français sur les petits-déjeuners du monde, App Router, TypeScript, pnpm, données en dur dans `data/`). Lis d'abord `AGENTS.md` puis inspecte l'état réel de `data/countries.ts`, des fichiers `data/recipes/**/*.ts`, de `data/ingredients.ts`, `data/categories.ts`, `data/tags.ts`, `data/guides.ts`, ainsi que `components/sections/HeroSection.tsx`, `components/sections/FutureRoadmap.tsx`, `components/sections/EditorialPromise.tsx`, `components/layout/Footer.tsx`, `app/countries/[slug]/page.tsx` et `app/recipes/[slug]/page.tsx`. Mission : corriger l'orthographe française en restaurant TOUS les accents manquants (é, è, ê, à, ç, ï, œ…) dans les valeurs textuelles (titres, descriptions, notes, seoTitle, seoDescription, alt, libellés UI). Contraintes strictes : ne JAMAIS modifier les champs `slug`, `countryCode`, les URLs, les clés d'objets, les imports ni la structure des données ; ne pas reformuler le sens des phrases (correction typographique uniquement) ; ne rien inventer culturellement ; ne pas toucher navbar/footer structure, routes ni JSON-LD. Procède fichier par fichier, méthodiquement. Validation attendue : `pnpm lint`, `pnpm typecheck` et `pnpm build` doivent passer sans erreur.
---
### [EDIT-01] Relire et valider un premier lot de fiches pilotes (sortir du 100 % needsReview)
- **Catégorie :** Éditorial
- **Priorité :** P0 (bloquant)
- **Effort estimé :** L
- **Dépend de :** DATA-01
- **Pourquoi :** 53/53 pays et 53/53 recettes sont en `needsReview: true` ; la phase de validation de 30 jours n'a de sens que si un lot pilote est relu, assumé et publiable.
- **Critères d'acceptation :**
  - Un lot de 8 à 12 fiches pays + leurs recettes est relu contre les `reviewNotes` et `sources` existantes.
  - Les fiches validées passent à `needsReview: false` ; celles qui restent douteuses gardent `true` avec une `reviewNotes` expliquant pourquoi.
  - Aucune généralisation culturelle introduite ; les formulations prudentes existantes sont conservées.
  - `docs/CONTENT_TRACKER.md` mis à jour pour le lot relu.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (atlas éditorial français des petits-déjeuners du monde ; règle absolue : précision culturelle, aucune invention, formulations nuancées). Lis d'abord `AGENTS.md`, `docs/NEXT_STEPS.md` et `docs/CONTENT_TRACKER.md`, puis inspecte `data/countries.ts` et `data/recipes/**`. Mission : relecture éditoriale d'un lot pilote de 10 fiches pays (choisis les plus complètes : longDescription, variants, sources remplies — ex. Égypte, Maroc, France, Japon, Turquie, Singapour, Mexique, Royaume-Uni, Inde du Sud, Sénégal) et de leurs recettes associées. Pour chaque fiche : vérifie la cohérence interne (pas de contradiction entre champs), vérifie que chaque affirmation culturelle est couverte par les `sources` listées ou est formulée prudemment (« souvent », « selon les familles »), applique les `reviewNotes` existantes, corrige les formulations trop affirmatives, puis passe `needsReview` à `false` uniquement si la fiche est réellement publiable. N'invente AUCUN fait ; en cas de doute, laisse `needsReview: true` et ajoute une note. Ne modifie ni slugs, ni routes, ni SEO structurel. Mets à jour `docs/CONTENT_TRACKER.md` pour le lot. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [SEO-01] Corriger les breadcrumbs JSON-LD qui pointent vers /categories et /ingredients (404)
- **Catégorie :** SEO
- **Priorité :** P0 (bloquant)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Les pages `/categories/[slug]` et `/ingredients/[slug]` émettent un `BreadcrumbList` JSON-LD référençant des pages index qui n'existent pas — données structurées mensongères soumises à Google.
- **Critères d'acceptation :**
  - Plus aucun JSON-LD ne référence une URL qui renvoie 404.
  - Solution retenue : retirer le niveau intermédiaire du breadcrumb (Accueil → Catégorie) OU créer les pages index (voir PAGE-02/PAGE-03) — au choix, mais cohérent.
  - `pnpm build` passe ; vérification manuelle du JSON-LD rendu sur une page catégorie et une page ingrédient.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (App Router, TypeScript, pnpm). Lis d'abord `AGENTS.md`. Constat vérifié : `app/categories/[slug]/page.tsx` et `app/ingredients/[slug]/page.tsx` construisent un `buildBreadcrumbJsonLd` (défini dans `lib/structured-data.ts`) contenant les entrées `{ name: 'Catégories', path: '/categories' }` et `{ name: 'Ingrédients', path: '/ingredients' }`, alors qu'aucune page index `/categories` ni `/ingredients` n'existe (404). Inspecte ces trois fichiers pour confirmer, puis corrige : retire le niveau intermédiaire inexistant des deux breadcrumbs (garde Accueil → nom de la taxonomie) sans toucher aux autres JSON-LD, aux routes, à la navbar, au footer ni au sitemap. Ne crée pas de nouvelles pages dans cette tâche. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, puis affiche le JSON-LD généré d'une page catégorie pour vérification.
---
### [IMG-01] Remplacer le fallback picsum.photos par un placeholder local de marque
- **Catégorie :** Images/Assets
- **Priorité :** P0 (bloquant)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** `BreakfastImage` bascule sur `https://picsum.photos/seed/{slug}` en cas d'erreur : une photo aléatoire sans rapport serait présentée comme le petit-déjeuner d'un pays — violation directe de la précision culturelle et de l'identité visuelle, plus une dépendance externe inutile.
- **Critères d'acceptation :**
  - Plus aucune référence à `picsum.photos` dans le code ni dans `next.config.ts` (`remotePatterns` supprimé).
  - Fallback = visuel local neutre dans la palette Mocha Mousse (motif flat/carnet de voyage, sans texte, sans prétention culturelle) dans `public/images/`, ou bloc CSS stylisé.
  - Les 53 images existantes continuent de s'afficher ; `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (identité visuelle : flat, atlas culinaire, palette Mocha Mousse — tokens Tailwind `mocha #a47864, cream #fff6ea, oat #e8d8c3, toast #c9895b, espresso #3a241c, honey #e7a93b, sage #8fae8b, paper #fffdf8` dans `app/globals.css`). Lis d'abord `AGENTS.md`. Inspecte `components/images/BreakfastImage.tsx` et `next.config.ts` : en cas d'erreur de chargement, le composant bascule sur `https://picsum.photos/seed/{slug}` (photo aléatoire) — c'est interdit par la ligne éditoriale (précision culturelle, pas de visuel générique). Mission : remplacer ce fallback par une solution 100 % locale — soit un SVG/WebP placeholder neutre créé par toi (motif abstrait flat dans la palette : bol, vapeur, soleil… SANS représenter un plat précis, sans texte, aucun asset copié d'ailleurs), placé dans `public/images/`, soit un bloc décoratif CSS pur. Supprime ensuite le `remotePatterns` picsum de `next.config.ts`. Ne casse pas l'affichage des 53 images existantes `public/images/breakfasts/{slug}.webp`, ne modifie ni les props du composant utilisées ailleurs, ni les routes. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [UI-01] Retirer le badge public « A verifier » / « Publie » des cartes et fiches
- **Catégorie :** Design/Identité
- **Priorité :** P0 (bloquant)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Le statut interne `needsReview` est affiché aux visiteurs sur les `CountryCard` et dans le bloc « Statut editorial » des pages pays et recettes — vocabulaire d'outil interne qui signale de la non-qualité au grand public et aux moteurs.
- **Critères d'acceptation :**
  - Plus aucun « A verifier »/« Publie »/« Statut editorial » visible sur le site public.
  - Le champ `needsReview` reste dans les données (usage interne).
  - Le bandeau global « Site en construction » (composant dédié) suffit à assumer la phase de test.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis d'abord `AGENTS.md`. Constat : le flag interne `needsReview` est exposé publiquement à trois endroits — le `Pill` « A verifier »/« Publie » dans `components/cards/CountryCard.tsx`, et la ligne « Statut editorial » dans les `<dl>` de `app/countries/[slug]/page.tsx` et `app/recipes/[slug]/page.tsx`. Inspecte ces trois fichiers pour confirmer, puis supprime ces affichages publics (le champ `needsReview` reste dans les données et les types, il sert au suivi interne). Ne touche pas au bandeau `HomeConstructionNotice` qui assume déjà la phase de construction. Veille à ce que la mise en page des cartes et des blocs `<dl>` reste équilibrée après suppression (ajuste les espacements si besoin, en restant dans le style existant Tailwind/palette Mocha Mousse). Ne modifie ni routes, ni SEO, ni navbar/footer. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [CODE-01] Assainir le dépôt git : fichier parasite, travail non committé, branche
- **Catégorie :** Code/Archi
- **Priorité :** P0 (bloquant)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Un fichier vide `main` traîne à la racine, et un chantier entier (page `/creator`, `data/creator.ts`, `CreatorScene`, dépendance `three`, lien footer) vit non committé sur `main` — risque de perte et impossibilité de déployer proprement.
- **Critères d'acceptation :**
  - Fichier `main` supprimé.
  - Le travail creator est soit committé sur une branche dédiée (ex. `feat/creator-page`), soit committé sur main en un commit cohérent — décision explicite.
  - `git status` propre après opération ; build OK.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo git « morning-atlas » (branche `main`). Lis d'abord `AGENTS.md`, puis exécute `git status --short` et `git diff --stat` pour constater l'état réel. Constats attendus : un fichier vide parasite `main` à la racine (artefact accidentel, vérifie qu'il est bien vide avec `wc -c main` avant suppression) ; des modifications non committées (`components/layout/Footer.tsx`, `package.json`, `pnpm-lock.yaml`) et des fichiers non suivis (`app/creator/`, `components/creator/`, `data/creator.ts`, `docs/cv.html`) correspondant au chantier « page créateur ». Mission : 1) supprimer le fichier `main` ; 2) créer une branche `feat/creator-page` et y committer l'ensemble du chantier creator avec un message clair en français (ne committe `docs/cv.html` que s'il a vocation à être public — sinon signale-le et laisse-le de côté) ; 3) vérifier que `main` redevient propre. Ne pousse rien sur le remote sans le dire explicitement dans ta réponse. Validation : `git status` propre sur main, `pnpm lint && pnpm typecheck && pnpm build` passent sur la branche.
---
### [PAGE-01] Finaliser la page /creator (« À propos du créateur ») — ⚠️ REMPLACÉE

> **Cette tâche est remplacée par la refonte complète de l'espace créateur : voir `docs/CREATOR_ROADMAP.md` (CREATOR-01 → CREATOR-07).** La décision a évolué : au lieu de simplement finaliser la page actuelle, l'espace créateur devient une section distincte du site avec sa propre direction artistique et son CV web. Le prompt ci-dessous est conservé pour archive mais ne doit plus être exécuté tel quel.

- **Catégorie :** Routing/Pages
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** CODE-01
- **Pourquoi :** La page existe et respecte déjà les consignes clés (titre visible « À propos du créateur », lien footer uniquement, absente de la navbar, palette Mocha, aucun asset craftzdog copié), mais elle embarque three.js (~lourde dépendance pour une scène décorative), pointe vers un CV PDF inexistant et contient un email incohérent.
- **Critères d'acceptation :**
  - Décision tranchée sur la scène 3D : soit la conserver (en la justifiant), soit la remplacer par l'illustration fallback statique déjà prévue dans le composant — recommandation : retirer `three` en phase de test (moins de JS, plus original vis-à-vis de craftzdog).
  - Le bouton CV pointe vers un fichier réellement présent dans `public/files/`, ou est masqué tant que le fichier manque (le code gère déjà `existsSync` — vérifier que le rendu est cohérent).
  - Coordonnées cohérentes (un seul email canonique).
  - Titre H1 « À propos du créateur » conservé ; lien uniquement dans le footer, jamais dans la navbar.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (site éditorial français, palette Mocha Mousse, phase de test : ne pas surconstruire). Lis d'abord `AGENTS.md`, puis inspecte l'état réel de `app/creator/page.tsx`, `components/creator/CreatorScene.tsx`, `data/creator.ts`, `components/layout/Footer.tsx`, `components/layout/Navbar.tsx` et `package.json`. Contexte : la page « À propos du créateur » doit rester accessible uniquement via le footer (jamais dans la navbar), garder son H1 « À propos du créateur », rester dans la palette Mocha Mousse, et ne reprendre AUCUN asset ni modèle 3D de craftzdog. Mission : 1) remplacer la scène three.js par l'illustration statique de repli déjà codée dans `CreatorScene` (généralise ce rendu, supprime le code WebGL) puis retirer `three` et `@types/three` de `package.json` avec `pnpm remove` ; 2) vérifier le bouton CV : `data/creator.ts` pointe vers `/files/fabrice-huet-cv.pdf` — si le fichier n'existe pas dans `public/files/`, masque le bouton (la détection `existsSync` existe déjà, assure la cohérence des deux boutons de la page) ; 3) harmonise l'email de contact dans `data/creator.ts` (vérifie s'il y a une incohérence gmail/icloud et signale-la plutôt que de choisir arbitrairement). Ne touche pas aux autres routes, au SEO global ni au build. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et confirmation que la navbar ne contient toujours pas de lien créateur.
---
### [SEO-02] Traiter l'inflation des 410 pages ingrédients (noindex ou consolidation)
- **Catégorie :** SEO
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** aucune (DATA-03 en complément)
- **Pourquoi :** 410 pages ingrédients sont générées et indexables ; l'exclusion du sitemap (33 slugs) n'empêche pas l'indexation de pages fines — c'est le principal risque « inflation de pages pauvres » identifié par le propre audit du projet.
- **Critères d'acceptation :**
  - Les pages ingrédients sous un seuil de contenu (ex. < 2 contenus liés) reçoivent `robots: { index: false }` via `generateMetadata`.
  - Le seuil est calculé depuis les données (pas de liste en dur).
  - Les pages restent accessibles et maillées (pas de suppression de routes).
  - Le sitemap n'inclut que les pages indexables (même logique partagée).
  - `pnpm build` passe ; vérification du meta robots sur un ingrédient faible et un ingrédient fort.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (App Router, SSG, données en dur). Lis d'abord `AGENTS.md` et `docs/TAXONOMY_SEO_AUDIT.md` (seuils déjà définis par l'audit interne), puis inspecte `app/ingredients/[slug]/page.tsx`, `app/sitemap.ts` (liste d'exclusion en dur de 33 slugs) et `lib/content-helpers.ts` (`getCountriesByIngredient`, `getRecipesByIngredient`). Mission : 1) crée dans `lib/` un helper `getIngredientContentScore(slug)` (ou équivalent) qui compte pays + recettes liés depuis les données ; 2) dans `generateMetadata` de la page ingrédient, ajoute `robots: { index: false, follow: true }` quand le total lié est ≤ 1 (aligne-toi sur le seuil « retirer temporairement » de l'audit) ; 3) remplace la liste en dur du sitemap par ce même helper pour que sitemap et noindex restent synchronisés. Contraintes : ne supprime aucune route ni aucun lien interne, ne touche pas aux pages catégories, n'ajoute pas de dépendance. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, puis vérifie dans le HTML généré (`.next` ou `next start`) qu'un ingrédient faible a bien le meta robots noindex et qu'un ingrédient fort ne l'a pas.
---
### [SEO-03] Enrichir le JSON-LD Recipe (temps, portions, catégorie)
- **Catégorie :** SEO
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Les données `prepTimeMinutes`, `cookTimeMinutes`, `servings` existent déjà mais ne sont pas exposées dans le JSON-LD `Recipe`, alors que ce sont elles qui déclenchent les rich results recettes.
- **Critères d'acceptation :**
  - `buildRecipeJsonLd` émet `prepTime`/`cookTime`/`totalTime` au format ISO 8601 (`PT15M`), `recipeYield`, et `keywords` depuis les tags résolus.
  - Aucun champ inventé (pas de nutrition, pas de rating, pas d'auteur fictif).
  - `pnpm build` passe ; JSON-LD d'une recette validé manuellement (structure conforme schema.org/Recipe).
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis d'abord `AGENTS.md`, puis inspecte `lib/structured-data.ts` (fonction `buildRecipeJsonLd`), `types/recipe.ts` et un fichier de données ex. `data/recipes/europe/france/tartines.ts`. Constat : le JSON-LD Recipe n'expose ni les temps ni les portions alors que `prepTimeMinutes`, `cookTimeMinutes` et `servings` existent dans chaque recette. Mission : enrichis `buildRecipeJsonLd` avec `prepTime`, `cookTime` et `totalTime` au format de durée ISO 8601 (ex. 15 minutes → `PT15M` ; totalTime = prep + cook), `recipeYield` (ex. `"2 portions"`), et `keywords` (chaîne construite depuis les labels de tags résolus via `getTagsBySlugs` de `lib/content-helpers.ts` si pertinent). Règle absolue : n'ajoute AUCUNE donnée non présente dans les fichiers (pas de calories, pas de note, pas d'auteur, pas de date inventée) — le projet refuse l'invention. Ne modifie pas les autres builders JSON-LD ni les pages. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et affiche le JSON-LD généré pour une recette afin de vérifier le format des durées.
---
### [SEO-04] Créer une image Open Graph par défaut de marque
- **Catégorie :** SEO
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** aucune
- **Pourquoi :** La home, /about, /guides, /creator et toutes les pages catégories/ingrédients partent sans image sociale (`twitter: summary` sans visuel) — tout partage de lien est visuellement vide.
- **Critères d'acceptation :**
  - Une image OG 1200×630 originale, flat, palette Mocha Mousse (logo/wordmark + motif, sans photo, aucun asset copié), en `public/` ou générée via `opengraph-image`.
  - `buildPageMetadata` l'utilise comme fallback quand aucune image spécifique n'est fournie.
  - Les pages recettes/pays gardent leur image spécifique.
  - `pnpm build` passe ; balises `og:image` vérifiées sur la home et une page catégorie.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16 App Router — lis la doc locale `node_modules/next/dist/docs/` sur les conventions de metadata/opengraph-image avant de coder, les conventions peuvent différer de ce que tu connais). Lis `AGENTS.md`, puis inspecte `lib/seo.ts` (`buildPageMetadata` : le paramètre `image` est optionnel et sans fallback) et `app/layout.tsx`. Mission : 1) crée une image Open Graph par défaut 1200×630 pour la marque — SVG converti ou composant `opengraph-image.tsx` selon ce que la doc locale recommande — design original flat « atlas culinaire » : fond crème `#fff6ea`, wordmark « Morning Atlas », motif simple (bol fumant, soleil) dans la palette (`#a47864, #c9895b, #3a241c, #e7a93b`), AUCUN asset externe ni photo ; 2) fais de cette image le fallback dans `buildPageMetadata` quand `image` est absent (og:image + twitter card `summary_large_image`). Ne casse pas les images spécifiques des pages recettes et pays. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et vérifie les balises `og:image` rendues pour `/` et pour une page catégorie.
---
### [SEO-05] Mettre en place un title template global
- **Catégorie :** SEO
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Le suffixe « — Morning Atlas » est concaténé à la main page par page, sans garantie de cohérence ni de longueur.
- **Critères d'acceptation :**
  - `title: { default, template: '%s — Morning Atlas' }` dans `app/layout.tsx`.
  - Les pages fournissent des titres nus (sans suffixe manuel) ; pas de double suffixe rendu.
  - `pnpm build` passe ; titres vérifiés sur home, une page pays, une recette, une catégorie.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16 — consulte `node_modules/next/dist/docs/` sur l'API Metadata avant modification). Lis `AGENTS.md`. Inspecte `app/layout.tsx`, `lib/seo.ts` (`buildPageMetadata`) et toutes les pages qui passent un `title` (grep « — Morning Atlas » dans `app/`). Mission : configure `title: { default: 'Morning Atlas — Petits-déjeuners du monde', template: '%s — Morning Atlas' }` dans le layout racine, puis retire les suffixes « — Morning Atlas » concaténés manuellement dans les `generateMetadata`/`metadata` des pages (pays, recettes, catégories, ingrédients, about, guides, creator, countries, recipes) pour éviter tout doublon. Attention : `buildPageMetadata` alimente aussi `openGraph.title` et `twitter.title` — décide de manière cohérente (les titres OG peuvent garder le nom du site ou non, mais pas de double suffixe dans `<title>`). Ne change aucune description ni canonical. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et vérifie le `<title>` rendu de la home, d'une page pays et d'une recette.
---
### [SEO-06] Sitemap : lastModified et exclusions pilotées par les données
- **Catégorie :** SEO
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** SEO-02 (si fait, la logique de seuil est partagée)
- **Pourquoi :** La liste des 33 slugs exclus est codée en dur dans `app/sitemap.ts` (dérive garantie quand les données bougent) et aucun `lastModified` n'est émis.
- **Critères d'acceptation :**
  - Plus de liste de slugs en dur : exclusion calculée depuis les données (seuil de contenus liés) ou champ dédié dans `Ingredient`.
  - `lastModified` présent sur les entrées (date de build acceptable en attendant un vrai champ de date).
  - Le nombre d'URLs émises est cohérent avec l'ancien sitemap (écart expliqué).
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md` et `docs/TAXONOMY_SEO_AUDIT.md`. Inspecte `app/sitemap.ts` : il contient une liste en dur `INGREDIENT_SLUGS_EXCLUDED_FROM_SITEMAP` de 33 slugs issue de l'audit taxonomies, et n'émet aucun `lastModified`. Mission : 1) remplace la liste en dur par une exclusion calculée dynamiquement — un ingrédient est exclu si (pays liés + recettes liées) ≤ 1, en t'appuyant sur `lib/content-helpers.ts` (réutilise le helper de scoring s'il existe déjà, sinon crée-le dans `lib/`) ; 2) ajoute `lastModified: new Date()` sur toutes les entrées (date de build, honnête pour un site SSG redéployé à chaque changement) ; 3) loggue en commentaire ou dans ta réponse le delta d'URLs avant/après pour vérification. Contraintes : ne supprime aucune route, ne touche pas aux pages, garde la déduplication défensive des slugs. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et compare le nombre d'entrées du sitemap généré avec l'existant (l'écart doit correspondre aux ingrédients sous le seuil).
---
### [DATA-02] Unifier la double sémantique tags / tagSlugs sur Recipe
- **Catégorie :** Données/Contenu
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** aucune
- **Pourquoi :** `Recipe` porte deux champs de tags (`tags` requis, affiché via TagBadge ; `tagSlugs` optionnel, jamais affiché), aux contenus différents et à la sémantique non documentée — source d'erreurs pour toute future intégration de contenu.
- **Critères d'acceptation :**
  - Un seul champ de tags affichable documenté dans `types/recipe.ts` (ou deux champs aux rôles explicitement commentés dans le type).
  - Aucune régression d'affichage sur les pages recettes ; validation d'intégrité toujours verte.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`. Inspecte `types/recipe.ts` (champs `tags: string[]` ET `tagSlugs?: string[]`), `app/recipes/[slug]/page.tsx` (affiche `recipe.tags` via `TagBadge`), `components/cards/TagBadge.tsx` (résout un slug via `getTagBySlug`, fallback texte), `lib/content-validation.ts` (valide `tagSlugs` contre `data/tags.ts`) et plusieurs fichiers `data/recipes/**` pour constater que les deux champs contiennent des slugs différents (ex. `tartines.ts` : `tags: ['sweet-morning', …]` vs `tagSlugs: ['france', 'tartine', …]`). Mission : unifier — recommandation : garder UN champ `tagSlugs` validé contre `data/tags.ts`, fusionner les valeurs des deux champs existants en dédupliquant, mettre à jour l'affichage (page recette) et la validation, puis supprimer le champ redondant du type et des 53 fichiers de recettes. Contraintes : chaque slug conservé doit exister dans `data/tags.ts` (vérifie avec `getContentIntegrityReport()` de `lib/content-validation.ts` via un script tsx) ; aucun changement de routes ni de SEO ; ne supprime aucun tag des données. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et exécution du rapport d'intégrité sans référence manquante.
---
### [DATA-03] Rationaliser les taxonomies (123 catégories, 410 ingrédients, 547 tags)
- **Catégorie :** Données/Contenu
- **Priorité :** P1 (important)
- **Effort estimé :** L
- **Dépend de :** DATA-02
- **Pourquoi :** Le stock taxonomique (1080 entrées) est disproportionné pour 53 pays/53 recettes : 547 tags n'ont aucune page, 302 ingrédients sont « fins » selon l'audit interne — c'est un coût de maintenance et un risque SEO permanent.
- **Critères d'acceptation :**
  - Cible chiffrée et documentée (ex. ≤ 60 catégories, ≤ 150 ingrédients avec page, tags réduits aux tags réellement affichés).
  - Fusions/suppressions faites avec mise à jour de toutes les références (rapport d'intégrité vert).
  - Aucune URL indexée forte supprimée sans décision (les slugs conservés ne changent pas).
  - `pnpm build` passe ; le nombre de pages générées diminue en conséquence.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (phase de test : la consigne est de ne PAS surconstruire ; l'inventaire actuel — 123 catégories, 410 ingrédients, 547 tags pour 53 pays et 53 recettes — est disproportionné). Lis `AGENTS.md`, `docs/TAXONOMY_SEO_AUDIT.md` (classements existants « garder / enrichir / retirer ») et `docs/ROADMAP.md`. Inspecte `data/categories.ts`, `data/ingredients.ts`, `data/tags.ts`, et les usages dans `data/countries.ts`, `data/recipes/**`, `lib/content-helpers.ts`, `lib/content-validation.ts`, `app/sitemap.ts`. Mission en 3 volets, en te basant sur les comptages réels (écris un script tsx de comptage d'usage avant toute suppression) : 1) TAGS : supprime les tags jamais affichés nulle part (ni `recipe.tags`, ni `country.tagSlugs` rendus) — garde uniquement ceux réellement utilisés ; 2) INGRÉDIENTS : fusionne les quasi-doublons sémantiques (ex. variantes de pains/beurres) en conservant le slug le plus utilisé et en réécrivant les références ; ne supprime jamais un ingrédient référencé sans rediriger sa référence ; 3) CATÉGORIES : propose une liste cible ≤ 60 en fusionnant les catégories redondantes, applique après avoir listé les fusions dans ta réponse. Contraintes absolues : rapport `getContentIntegrityReport()` vide après chaque volet ; slugs conservés inchangés ; pas d'invention de contenu ; documente les décisions dans `docs/TAXONOMY_SEO_AUDIT.md`. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build` (le nombre de pages doit baisser), rapport d'intégrité vert.
---
### [DATA-04] Rendre le flag `featured` significatif
- **Catégorie :** Données/Contenu
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** 52 recettes sur 53 sont `featured: true` : la sélection de la home est en réalité un `slice(0, 4)` arbitraire sur l'ordre du tableau.
- **Critères d'acceptation :**
  - 4 à 8 recettes réellement mises en avant (choix éditorial assumé : diversité de continents et de styles), le reste à `false`.
  - `getFeaturedRecipes` retourne cette sélection ; la home reflète le choix.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`. Constat vérifié : 52 des 53 recettes ont `featured: true`, donc `getFeaturedRecipes` dans `lib/content-helpers.ts` (filter + slice(0,4)) met en avant les 4 premières du tableau `data/recipes.ts` par accident d'ordre. Inspecte ces fichiers et `components/sections/FeaturedRecipes.tsx`. Mission : passe `featured: false` partout sauf sur 6 recettes choisies pour maximiser la diversité géographique et de style (ex. un plat d'Afrique du Nord, un d'Afrique subsaharienne, un d'Asie de l'Est, un d'Asie du Sud, un d'Europe, un des Amériques — choisis parmi les fiches les plus complètes : longDescription et sources remplies). Liste ton choix et sa justification dans ta réponse. Ne change ni les slugs, ni l'ordre du tableau, ni le composant d'affichage, ni le SEO. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et vérifie que la home affiche bien les recettes choisies.
---
### [DATA-05] Exposer la validation d'intégrité en script pnpm
- **Catégorie :** Tooling
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** `lib/content-validation.ts` (doublons + références cassées) existe mais n'est exécuté par personne — le doublon `fresh-fruit` n'a été découvert que tardivement, un script l'aurait attrapé immédiatement.
- **Critères d'acceptation :**
  - `pnpm validate:content` exécute le rapport et sort en code d'erreur ≠ 0 si doublons ou références manquantes.
  - Documenté dans le README ou `docs/NEXT_STEPS.md`.
  - Le script passe sur l'état actuel (données saines vérifiées).
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (TypeScript, pnpm). Lis `AGENTS.md`. Inspecte `lib/content-validation.ts` : `getContentIntegrityReport()` détecte les slugs dupliqués et les références manquantes entre `data/countries.ts`, `data/recipes/**`, `data/categories.ts`, `data/ingredients.ts` et `data/tags.ts`, mais rien ne l'exécute. Mission : 1) crée `scripts/validate-content.ts` qui appelle ce rapport, affiche un résumé lisible (compteurs + détail des anomalies) et fait `process.exit(1)` si le rapport n'est pas vide ; 2) ajoute le script `"validate:content"` dans `package.json` — choisis le runner le plus léger déjà disponible (`tsx` en devDependency est acceptable, justifie ton choix) ; 3) mentionne la commande dans `docs/NEXT_STEPS.md` section « Commandes utiles ». Contraintes : aucune modification des données ni des libs existantes ; dépendances ajoutées limitées au strict nécessaire. Validation : `pnpm validate:content` passe (les données actuelles sont saines), `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [DATA-06] Traduire les enums affichés bruts (easy, grain, savory…)
- **Catégorie :** Données/Contenu
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** aucune
- **Pourquoi :** Les pages affichent des valeurs techniques anglaises au milieu du texte français : « Difficulte : easy », « Type : grain », badges `savory` — incohérent pour un média grand public francophone.
- **Critères d'acceptation :**
  - Dictionnaires de labels FR centralisés dans `lib/` pour `DifficultyToRecreate`, `IngredientType`, `BreakfastStyle`.
  - Toutes les pages/cartes affichent les labels FR ; les valeurs techniques restent inchangées dans les données.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (site 100 % francophone). Lis `AGENTS.md`. Constat : les enums de `types/taxonomy.ts` (`DifficultyToRecreate` : easy/medium/hard ; `IngredientType` : grain/dairy/… ; `BreakfastStyle` : sweet/savory/…) sont affichés bruts dans l'UI — vérifie dans `app/countries/[slug]/page.tsx` (« Difficulte maison »), `app/recipes/[slug]/page.tsx` (« Difficulte »), `components/cards/RecipeCard.tsx` (badge difficulté), `app/ingredients/[slug]/page.tsx` (« Type : {ingredient.type} ») et `components/cards/IngredientCard.tsx`. Mission : crée `lib/labels.ts` exportant des `Record<Enum, string>` de traductions françaises précises (easy → « Facile », grain → « Céréale », savory → « Salé », street-food → « Street food », etc. — couvre TOUTES les valeurs des trois enums, en français accentué correct), avec une fonction d'accès sûre par enum, puis remplace chaque affichage brut par le label traduit. Ne modifie NI les valeurs stockées dans `data/`, NI les types, NI les slugs, NI le SEO. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et vérifie qu'aucune valeur brute (`easy`, `grain`…) n'apparaît plus dans le HTML des pages concernées.
---
### [PAGE-02] Créer la page index /categories
- **Catégorie :** Routing/Pages
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** SEO-01 (cohérence breadcrumb), idéalement DATA-03
- **Pourquoi :** 123 pages catégories existent sans page mère : le breadcrumb la référençait (404) et la section « Categories » du footer n'a pas de page chapeau.
- **Critères d'acceptation :**
  - `app/categories/page.tsx` : H1 via `SectionHeading`, grille de `CategoryCard`, metadata + canonical, JSON-LD WebPage/ItemList — mêmes patterns que `/countries`.
  - Breadcrumbs des pages catégories réintègrent le niveau `/categories`.
  - Ajoutée au sitemap.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16 App Router — consulte `node_modules/next/dist/docs/` si un doute sur les conventions). Lis `AGENTS.md`. Il n'existe pas de page index `/categories` alors que 123 pages `/categories/[slug]` existent. Inspecte d'abord `app/countries/page.tsx` (modèle à suivre : metadata via `buildPageMetadata` de `lib/seo.ts`, JSON-LD `buildWebPageJsonLd` + `buildItemListJsonLd` de `lib/structured-data.ts`, `SectionHeading level={1}`, `Container`), `components/cards/CategoryCard.tsx` (existe déjà) et `data/categories.ts`. Mission : crée `app/categories/page.tsx` sur ce modèle exact — titre « Catégories », description sobre orientée exploration, grille responsive de `CategoryCard` (regroupe par grandes familles si un critère évident existe dans les données, sinon liste plate triée par nom). Ajoute ensuite l'entrée `/categories` dans les routes statiques de `app/sitemap.ts` et, si les breadcrumbs des pages `/categories/[slug]` ont été simplifiés, réintègre le niveau « Catégories → /categories ». Respecte la palette Mocha Mousse et les composants existants ; ne modifie ni navbar ni footer dans cette tâche. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [PAGE-03] Trancher le cas de l'index /ingredients
- **Catégorie :** Routing/Pages
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** SEO-02, DATA-03
- **Pourquoi :** 410 pages ingrédients existent sans page mère ; la roadmap interne dit « créer /ingredients seulement si les ingrédients deviennent un axe public assumé » — il faut une décision cohérente avec le breadcrumb et le maillage.
- **Critères d'acceptation :**
  - Décision documentée : soit index créé (limité aux ingrédients forts), soit pas d'index et aucun lien/breadcrumb ne le référence.
  - État cohérent entre breadcrumb JSON-LD, sitemap et navigation.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`, `docs/ROADMAP.md` (position interne : « créer une page index /ingredients seulement si les ingrédients deviennent un axe de navigation public assumé ») et `docs/TAXONOMY_SEO_AUDIT.md` (76 ingrédients « solides »). Inspecte `app/ingredients/[slug]/page.tsx`, `app/sitemap.ts` et `components/cards/IngredientCard.tsx` (existant et inutilisé à ce jour — vérifie). Mission : implémente l'option conservatrice adaptée à la phase de test — crée `app/ingredients/page.tsx` listant UNIQUEMENT les ingrédients dépassant le seuil de contenus liés (≥ 3 contenus, réutilise le helper de scoring de `lib/` s'il existe, sinon calcule depuis `getCountriesByIngredient`/`getRecipesByIngredient` de `lib/content-helpers.ts`), sur le modèle de `app/countries/page.tsx` (metadata, canonical, JSON-LD WebPage + ItemList, `SectionHeading level={1}`, grille d'`IngredientCard`). Ajoute `/ingredients` au sitemap et rends les breadcrumbs des pages ingrédients cohérents avec cette page. Ne liste pas les 410 ingrédients. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et vérifie le nombre d'ingrédients listés dans ta réponse.
---
### [PAGE-04] Page 404 personnalisée
- **Catégorie :** Routing/Pages
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** La 404 par défaut de Next est hors identité visuelle alors que le site a des centaines d'URLs taxonomiques susceptibles d'évoluer.
- **Critères d'acceptation :**
  - `app/not-found.tsx` dans la palette Mocha Mousse, ton chaleureux, liens de repli vers `/`, `/countries`, `/recipes`.
  - Navbar/footer conservés (rendu dans le layout).
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16 App Router — vérifie la convention `not-found` dans `node_modules/next/dist/docs/` avant de coder). Lis `AGENTS.md`. Le site n'a pas de page 404 personnalisée. Inspecte `app/layout.tsx` (navbar/footer y sont rendus, la not-found héritera du layout), `components/layout/Container.tsx`, `components/layout/SectionHeading.tsx` et `components/ui/Button.tsx`. Mission : crée `app/not-found.tsx` — page sobre dans l'identité Mocha Mousse (fond `bg-cream`, carte `bg-paper` bordée `oat`), ton chaleureux et éditorial en français accentué correct (ex. « Cette page n'est pas au menu »), un emoji petit-déjeuner discret, et deux ou trois `Button` de repli vers `/`, `/countries` et `/recipes`. N'utilise que les composants et tokens existants, aucun asset externe, aucune dépendance. Ne touche à rien d'autre. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, puis vérifie le rendu d'une URL inexistante avec `pnpm dev` ou `next start`.
---
### [DESIGN-01] Typographie de marque via next/font
- **Catégorie :** Design/Identité
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** aucune
- **Pourquoi :** Le site rend tout en Arial/Helvetica (aucune fonte chargée) — l'écart le plus visible entre l'ambition « média éditorial visuel » et le rendu réel.
- **Critères d'acceptation :**
  - Une paire typographique open source chaleureuse chargée via `next/font` (self-hosted, zéro requête externe au runtime) : une fonte de titres à caractère + une fonte de texte lisible.
  - Appliquée via variables CSS aux headings et au corps, sans casser les tailles/graisses existantes.
  - Pas de layout shift visible (font-display géré par next/font).
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16 — lis la doc locale `node_modules/next/dist/docs/` sur `next/font` avant de coder, l'API peut différer de ta connaissance). Lis `AGENTS.md`. Constat : `app/globals.css` définit `font-family: Arial, Helvetica, sans-serif` et aucune fonte n'est chargée — pour un média éditorial « carnet de voyage », c'est insuffisant. Inspecte `app/layout.tsx` et `app/globals.css`. Mission : 1) choisis une paire Google Fonts open source cohérente avec l'identité chaleureuse/éditoriale (ex. Fraunces ou Lora pour les titres, Source Sans 3 ou Inter pour le texte — justifie ton choix, évite toute fonte associée à un autre site connu de développeur) ; 2) charge-la via `next/font/google` dans `app/layout.tsx` avec `variable` + subsets latin ; 3) branche les variables dans `globals.css` (corps = fonte texte ; `h1/h2/h3` et classes `font-black` de titres = fonte titres) sans modifier les tailles ni les graisses Tailwind existantes. Contraintes : self-hosting automatique next/font uniquement (aucune balise link externe), pas de flash de layout, ne touche à aucun composant. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et décris le rendu attendu.
---
### [DESIGN-02] Unifier les tokens de couleur (supprimer la duplication @theme / --ma-*)
- **Catégorie :** Design/Identité
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** La palette Mocha Mousse existe en double (`@theme --color-*` Tailwind et `:root --ma-*`) plus des hex recopiés en dur (gradients arbitraires, CreatorScene) — toute évolution de palette divergera.
- **Critères d'acceptation :**
  - Une seule source de vérité : les tokens `@theme` ; les `--ma-*` supprimés ou dérivés des tokens.
  - Les hex en dur dans les classes arbitraires remplacés par des références aux tokens quand c'est possible.
  - Aucun changement visuel (mêmes valeurs).
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Tailwind CSS 4 avec `@theme` — vérifie la syntaxe Tailwind 4 dans la doc du package si besoin, elle diffère de Tailwind 3). Lis `AGENTS.md`. Inspecte `app/globals.css` : la palette Mocha Mousse y est définie deux fois (`@theme --color-mocha…` ET `:root --ma-mocha…` avec les mêmes valeurs), et le `body` utilise les `--ma-*` ; cherche aussi les hex en dur ailleurs (`grep -rn '#fff6ea\|#e8d8c3\|#a47864' app components`). Mission : fais des tokens `@theme --color-*` l'unique source de vérité — remplace les usages de `--ma-*` par `var(--color-*)` (les variables `@theme` sont exposées en CSS custom properties par Tailwind 4, vérifie-le), supprime le bloc `--ma-*`, et remplace les hex en dur des classes arbitraires par les tokens quand c'est faisable proprement. Contrainte absolue : AUCUN changement visuel — mêmes couleurs partout (compare visuellement home, une fiche pays, le footer). Ne touche pas aux données ni aux routes. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [A11Y-01] Focus trap du menu mobile, skip-link et prefers-reduced-motion
- **Catégorie :** Perf/A11y
- **Priorité :** P1 (important)
- **Effort estimé :** M
- **Dépend de :** aucune
- **Pourquoi :** Le panneau mobile ne piège pas le focus (navigation clavier possible derrière l'overlay), il n'y a pas de skip-link, et `scroll-behavior: smooth` s'applique même aux utilisateurs demandant moins d'animations.
- **Critères d'acceptation :**
  - Focus piégé dans le panneau ouvert ; focus rendu au bouton burger à la fermeture.
  - Skip-link « Aller au contenu » visible au focus, ciblant le `main`.
  - `scroll-behavior: smooth` et transitions encapsulés dans `@media (prefers-reduced-motion: no-preference)`.
  - `pnpm lint && pnpm typecheck && pnpm build` passent ; test clavier manuel décrit.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`. Inspecte `components/layout/Navbar.tsx` (menu mobile en panneau latéral : état `isMobileMenuOpen`, gestion Échap et `tabIndex` conditionnels déjà présentes, mais AUCUN focus trap ni restitution de focus), `app/layout.tsx` et `app/globals.css` (`scroll-behavior: smooth` global). Mission accessibilité en trois points : 1) dans la Navbar, piège le focus dans le panneau ouvert (boucle Tab/Shift+Tab entre premier et dernier élément focusable — implémentation maison légère, pas de dépendance) et restitue le focus au bouton burger à la fermeture ; 2) ajoute un skip-link « Aller au contenu principal » en premier élément du body dans `app/layout.tsx` (visuellement masqué, visible au focus, style palette Mocha), ciblant un `id="contenu"` — ajoute cet id de façon fiable sans modifier chaque page si possible (wrapper dans le layout) ; 3) dans `globals.css`, conditionne `scroll-behavior: smooth` à `@media (prefers-reduced-motion: no-preference)`. Ne change ni le design visible au repos, ni les routes, ni le SEO. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et décris le parcours clavier de test (Tab depuis l'ouverture du menu).
---
### [TOOL-01] CI GitHub Actions : lint + typecheck + build + validation contenu
- **Catégorie :** Tooling
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** DATA-05 (pour l'étape validate:content, sinon sans elle)
- **Pourquoi :** Aucune CI : un commit cassant le build n'est détecté qu'au déploiement Vercel.
- **Critères d'acceptation :**
  - `.github/workflows/ci.yml` : déclenché sur push/PR, pnpm + cache, Node ≥ 20, étapes lint, typecheck, build (+ validate:content si dispo).
  - Workflow vert sur l'état actuel.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo « morning-atlas » (Next.js 16, pnpm, TypeScript ; ATTENTION : Next 16 exige Node ≥ 20.9, utilise Node 22 dans la CI). Lis `AGENTS.md` et `package.json` (scripts existants : `lint`, `typecheck`, `build` ; vérifie si `validate:content` existe). Le repo n'a aucun dossier `.github/`. Mission : crée `.github/workflows/ci.yml` — déclencheurs `push` sur `main` et `pull_request` ; jobs sur `ubuntu-latest` ; étapes : checkout, `pnpm/action-setup` (respecte la version de pnpm du projet, vérifie s'il y a un champ `packageManager` — s'il n'y en a pas, ajoute-en un cohérent dans `package.json`), `actions/setup-node` Node 22 avec cache pnpm, `pnpm install --frozen-lockfile`, puis `pnpm lint`, `pnpm typecheck`, `pnpm build`, et `pnpm validate:content` si le script existe. Pas de déploiement dans ce workflow (Vercel s'en charge). Pas de secrets requis. Validation : YAML valide (lint local si possible), et vérifie que les commandes passent localement avant de committer.
---
### [TOOL-02] Contraindre l'environnement Node (engines + .nvmrc)
- **Catégorie :** Tooling
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Next 16 exige Node ≥ 20.9 mais rien ne le déclare : le Node 18 système fait échouer toute commande avec une erreur non triviale (constaté pendant cet audit).
- **Critères d'acceptation :**
  - `engines.node` dans `package.json` et `.nvmrc` cohérents (ex. 22).
  - Champ `packageManager` renseigné pour pnpm.
  - Mention dans le README.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo « morning-atlas » (Next.js 16.2.9 : requiert Node ≥ 20.9 ; le projet utilise pnpm). Lis `AGENTS.md` et `package.json`. Mission : 1) ajoute `"engines": { "node": ">=20.9" }` dans `package.json` ; 2) crée un fichier `.nvmrc` contenant une version LTS précise compatible (ex. `24` si tu constates via `ls ~/.nvm/versions/node` qu'elle est installée localement, sinon `22`) ; 3) ajoute le champ `"packageManager"` avec la version de pnpm effectivement utilisée (déduis-la de `pnpm --version` ou du lockfile) ; 4) ajoute une courte section « Prérequis » au `README.md` (Node ≥ 20.9, pnpm). Ne modifie aucune dépendance ni aucun script. Validation : `pnpm install` (aucun changement de lockfile attendu), `pnpm lint`, `pnpm typecheck`, `pnpm build` avec la version de Node ciblée.
---
### [IMG-02] Nettoyer les assets template et dédupliquer les icônes
- **Catégorie :** Images/Assets
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` (template create-next-app) traînent dans `public/`, et les icônes existent en double entre `app/` et `public/`.
- **Critères d'acceptation :**
  - Assets template supprimés après vérification qu'aucun code ne les référence.
  - Icônes : `app/` reste la source (favicon.ico, icon.png, apple-icon.png) ; les doublons de `public/` supprimés sauf ceux référencés (vérifier `icon-*.png` : manifest ? navbar utilise `/icon.png` de public — arbitrer).
  - `pnpm build` passe ; favicon et logo navbar intacts.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16 — les fichiers `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png` sont des conventions de metadata servies automatiquement ; vérifie ce point dans `node_modules/next/dist/docs/`). Lis `AGENTS.md`. Mission de nettoyage d'assets en deux volets. 1) Assets du template create-next-app dans `public/` : `next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg` — vérifie par grep qu'aucun composant ne les référence, puis supprime-les. 2) Icônes dupliquées : `public/` contient `favicon.ico`, `icon.png`, `apple-icon.png` en doublon d'`app/`, plus une série `icon-16.png` → `icon-1024.png` ; ATTENTION, `components/layout/Navbar.tsx` charge `/icon.png` (donc `public/icon.png` est utilisé) — grep chaque fichier avant toute suppression et ne supprime que les doublons strictement non référencés et servis par ailleurs via `app/` (compare les contenus binaires avec `cmp` avant de trancher). Liste dans ta réponse ce qui est supprimé/conservé et pourquoi. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, favicon visible et logo navbar intact en dev.
---
### [EDIT-02] Documenter le processus de relecture éditoriale (critères needsReview)
- **Catégorie :** Éditorial
- **Priorité :** P1 (important)
- **Effort estimé :** S
- **Dépend de :** aucune (EDIT-01 l'applique)
- **Pourquoi :** `needsReview` n'a pas de critères de sortie écrits : sans définition de « publiable », la relecture des 106 fiches sera subjective et incohérente.
- **Critères d'acceptation :**
  - `docs/EDITORIAL_REVIEW.md` : checklist de validation (sources couvrant chaque affirmation, formulations prudentes, accents, variantes mentionnées, pas de généralisation), procédure de passage à `false`, règle pour les cas douteux.
  - Référencé depuis `docs/NEXT_STEPS.md`.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo « morning-atlas » (média éditorial français sur les petits-déjeuners du monde ; règles : précision culturelle absolue, pas d'invention, pas de généralisation, formulations nuancées, sources visibles). Lis `AGENTS.md`, `docs/NEXT_STEPS.md`, `docs/ROADMAP.md` et `docs/CONTENT_TRACKER.md`, puis inspecte la structure réelle d'une fiche dans `data/countries.ts` (champs `needsReview`, `reviewNotes`, `sources`, `variants`, `culturalNote`) et d'une recette dans `data/recipes/europe/france/tartines.ts`. Mission : rédige `docs/EDITORIAL_REVIEW.md` en français — 1) critères objectifs pour passer une fiche à `needsReview: false` (checklist : chaque affirmation culturelle sourcée ou formulée prudemment ; orthographe et accents corrects ; variantes régionales mentionnées quand elles existent ; aucun superlatif invérifiable ; seoTitle/seoDescription relus) ; 2) procédure pas à pas (relire les `reviewNotes`, vérifier les `sources` listées, décision, mise à jour du tracker) ; 3) règle des cas douteux (rester à `true` + note explicative) ; 4) rythme suggéré compatible avec la phase de test 30 jours (petits lots). Ajoute un lien vers ce document dans `docs/NEXT_STEPS.md`. N'invente aucune règle contraire aux docs existants ; ne modifie aucune donnée.
---
### [DATA-07] Nettoyer les entrées orphelines (8 ingrédients, 1 tag)
- **Catégorie :** Données/Contenu
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** DATA-03 (peut y être absorbée)
- **Pourquoi :** 8 ingrédients et 1 tag ne sont référencés par aucun pays ni recette : pages/entrées mortes.
- **Critères d'acceptation :**
  - Orphelins identifiés par script (pas à la main), puis supprimés ou rattachés en connaissance de cause.
  - Rapport d'intégrité vert ; `pnpm build` passe (moins de pages générées).
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`. Mission : identifie puis traite les entrées taxonomiques orphelines. 1) Écris un petit script tsx jetable qui croise `data/ingredients.ts` et `data/tags.ts` avec toutes les références (`ingredientSlugs` et `tagSlugs` de `data/countries.ts`, `ingredientSlugs`/`tagSlugs`/`tags` des fichiers `data/recipes/**`, `relatedTagSlugs` de `data/guides.ts`) et liste les slugs jamais référencés (attendu d'après le dernier audit : environ 8 ingrédients et 1 tag — base-toi sur TON comptage réel). 2) Supprime ces entrées des fichiers de données, SAUF si l'une d'elles te semble avoir une valeur évidente à venir — dans ce cas signale-la au lieu de la supprimer. 3) Vérifie avec `getContentIntegrityReport()` de `lib/content-validation.ts` qu'aucune référence n'est cassée. Ne touche à rien d'autre (pas de renommage, pas de fusion — c'est l'objet d'une autre tâche). Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, rapport d'intégrité vide, liste des slugs supprimés dans ta réponse.
---
### [CODE-02] Déplacer app/docs/ vers docs/
- **Catégorie :** Code/Archi
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** 18 fichiers Markdown de suivi éditorial vivent dans `app/docs/` (dossier réservé au routing) alors que le suivi projet est dans `docs/` — incohérent et trompeur.
- **Critères d'acceptation :**
  - Fichiers déplacés vers `docs/` (ex. `docs/lots/`) avec `git mv` (historique préservé).
  - Aucune référence cassée (grep sur les chemins).
  - `pnpm build` passe (aucune route affectée).
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (App Router : le dossier `app/` est réservé au routing). Lis `AGENTS.md`. Constat : `app/docs/` contient ~18 fichiers Markdown de suivi éditorial (prompts et suivis d'intégration de lots, ex. `suivi-integration-lot-1-afrique-du-nord.md`) qui ne génèrent aucune route mais n'ont rien à faire dans `app/`. Mission : déplace-les avec `git mv` vers `docs/lots/` (crée le dossier), puis vérifie par grep (`grep -rn "app/docs" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=.next`) qu'aucun document ni code ne référence l'ancien chemin — corrige les références trouvées dans les docs de suivi le cas échéant. Ne modifie pas le contenu des fichiers déplacés. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build` (identiques à avant), `git status` cohérent avec des renames propres.
---
### [CODE-03] Sortir .idea/ et tsconfig.tsbuildinfo du versioning
- **Catégorie :** Code/Archi
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Config IDE personnelle (`.idea/`, dont `workspace.xml`) et artefact de build incrémental (`tsconfig.tsbuildinfo`) versionnés : bruit de diff garanti.
- **Critères d'acceptation :**
  - `.idea/` et `*.tsbuildinfo` ajoutés au `.gitignore` et retirés de l'index (`git rm --cached`), fichiers conservés localement.
  - `git status` propre ensuite.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo git « morning-atlas ». Lis `AGENTS.md`. Constat : le dossier `.idea/` (configuration JetBrains, y compris `workspace.xml` qui change à chaque session) et le fichier `tsconfig.tsbuildinfo` (cache de build incrémental TypeScript) sont suivis par git. Mission : 1) ajoute `.idea/` et `*.tsbuildinfo` au `.gitignore` (vérifie d'abord son contenu actuel pour t'insérer proprement dans ses sections commentées) ; 2) retire-les de l'index avec `git rm -r --cached .idea tsconfig.tsbuildinfo` SANS supprimer les fichiers locaux ; 3) committe avec un message clair en français. Ne touche à rien d'autre ; ne pousse pas sur le remote. Validation : `git status` propre, les fichiers existent toujours sur le disque, `pnpm build` inchangé.
---
### [EDIT-03] Introductions éditoriales sur les catégories prioritaires
- **Catégorie :** Éditorial
- **Priorité :** P2 (confort)
- **Effort estimé :** M
- **Dépend de :** DATA-01, DATA-03
- **Pourquoi :** Les pages catégories fortes (Familial : 69 contenus liés, Salé : 60…) n'ont qu'une description d'une phrase — un court texte éditorial les rendrait réellement utiles et solidifierait leur indexation.
- **Critères d'acceptation :**
  - Champ `intro?: string` (2-4 phrases) ajouté au type `Category` et rempli pour les ~15 catégories les plus liées, affiché sur la page.
  - Textes prudents, factuels, sans généralisation culturelle ; français accentué.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (média éditorial français ; règle : prudence culturelle, aucune invention, pas de généralisation — écris « souvent », « dans de nombreux foyers », jamais « tous les X mangent Y »). Lis `AGENTS.md` et la section « Catégories solides » de `docs/TAXONOMY_SEO_AUDIT.md`. Inspecte `types/taxonomy.ts` (type `Category`), `data/categories.ts` et `app/categories/[slug]/page.tsx`. Mission : 1) ajoute un champ optionnel `intro?: string` au type `Category` ; 2) rédige une introduction de 2 à 4 phrases pour les ~15 catégories les plus liées (identifie-les en comptant les références `categorySlugs` dans `data/countries.ts` et `data/recipes/**` via un script tsx — ne te fie pas qu'au doc) : texte descriptif s'appuyant UNIQUEMENT sur les contenus effectivement présents dans le site (tu peux citer des exemples de pays/plats déjà en base), ton chaleureux et précis, français accentué ; 3) affiche `intro` sous le `SectionHeading` de la page catégorie quand il existe. Ne touche pas au SEO structurel ni aux slugs. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, relecture des textes dans ta réponse.
---
### [EDIT-04] Enrichir la page À propos (méthode éditoriale publique)
- **Catégorie :** Éditorial
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** EDIT-02
- **Pourquoi :** Le site revendique la précision et les sources, mais `/about` (2 blocs) n'explique ni la méthode, ni les limites, ni le fonctionnement de la relecture — c'est un argument de confiance (E-E-A-T) laissé de côté.
- **Critères d'acceptation :**
  - Sections ajoutées : méthode (sources, relecture, `needsReview`), limites assumées (site en construction, pas d'exhaustivité), origine des images, contact.
  - Ton conforme à la marque, français accentué.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`, `docs/ROADMAP.md` (section « Renforcer la page À propos ») et, s'il existe, `docs/EDITORIAL_REVIEW.md`. Inspecte `app/about/page.tsx` (deux sections seulement : ligne éditoriale, évolution prévue) et le style des cartes existantes. Mission : enrichis la page avec 3 à 4 nouvelles sections dans le même style visuel (cartes `bg-paper` bordées `oat`) — « Notre méthode » (fiches construites sur des sources publiques listées en bas de chaque page ; relecture progressive ; formulations prudentes quand les pratiques varient), « Nos limites » (site en construction, un plat ne résume jamais un pays, les habitudes varient selon familles/régions), « Les images » (décris honnêtement leur origine réelle — inspecte `public/images/breakfasts/` et les docs `docs/IMAGE_*.md` pour ne rien affirmer de faux), et éventuellement « Nous écrire » si un email public existe déjà quelque part dans le code (ne crée pas d'adresse). Interdictions : aucune promesse invérifiable, aucun texte copié d'ailleurs, français accentué. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [SEO-07] Procédure de validation post-déploiement (Rich Results, Search Console)
- **Catégorie :** SEO
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** SEO-03
- **Pourquoi :** Le JSON-LD n'a jamais été validé par les outils Google (impossible en local) ; il faut une checklist opérationnelle pour le faire dès la prochaine mise en ligne.
- **Critères d'acceptation :**
  - `docs/SEO_VALIDATION_CHECKLIST.md` : URLs à tester (1 recette, 1 pays, 1 catégorie, home), outils (Rich Results Test, Schema Markup Validator), vérifications Search Console (couverture, sitemap, indexation des ingrédients), critères de succès et actions correctives.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo « morning-atlas » (site déployé sur Vercel, domaine morning-atlas.fr). Lis `AGENTS.md` et `docs/SEO_LLM_PLAN.md` (le plan mentionne déjà la validation Rich Results comme reste à faire). Inspecte `lib/structured-data.ts` pour lister les types JSON-LD réellement émis (WebSite, Organization, WebPage, BreadcrumbList, ItemList, Recipe) et `app/sitemap.ts`. Mission : rédige `docs/SEO_VALIDATION_CHECKLIST.md` en français — une procédure actionnable post-déploiement : 1) tableau des pages types à tester avec leur URL de prod (home, /countries/egypt-ful-medames, /recipes/ful-medames, une catégorie forte, un ingrédient fort) et le type JSON-LD attendu pour chacune ; 2) étapes Rich Results Test et Schema Markup Validator avec critères de succès explicites ; 3) vérifications Search Console (soumission sitemap, rapport de couverture, surveillance de l'indexation des pages ingrédients exclues du sitemap) ; 4) actions correctives par type d'erreur probable. Ne modifie aucun code. Base chaque affirmation sur ce que le code émet réellement.
---
### [PERF-01] Établir une baseline Lighthouse / Core Web Vitals
- **Catégorie :** Perf/A11y
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Les CWV sont probablement bons (SSG + WebP + next/image) mais rien n'est mesuré — une baseline chiffrée permet de détecter les régressions (ex. ajout de three.js).
- **Critères d'acceptation :**
  - Rapport Lighthouse (ou équivalent) exécuté sur build de prod local pour home, une fiche pays, une recette.
  - Résultats consignés dans `docs/PERF_BASELINE.md` avec les 3-4 axes d'amélioration éventuels.
  - Aucun changement de code dans cette tâche (mesure seulement).
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas ». Lis `AGENTS.md`. Mission de MESURE uniquement (aucune modification de code applicatif). 1) Construis et lance le site en mode production (`pnpm build` puis `pnpm start`, Node ≥ 20 requis). 2) Audite avec Lighthouse en CLI (`npx lighthouse` si disponible, sinon utilise `npx @lhci/cli collect` ou justifie l'outil choisi) les pages `/`, `/countries/egypt-ful-medames` et `/recipes/ful-medames`, en mobile et desktop. 3) Consigne dans `docs/PERF_BASELINE.md` : date, scores (Performance, A11y, Best Practices, SEO), métriques clés (LCP, CLS, TBT, taille JS transférée), et les 3-4 recommandations les plus rentables issues du rapport, hiérarchisées. Si Lighthouse ne peut pas s'exécuter dans l'environnement, dis-le clairement et produis à la place une analyse statique du bundle (`pnpm build` affiche les tailles par route) — n'invente aucun chiffre. Validation : le document existe et chaque chiffre provient d'une mesure réelle.
---
### [A11Y-02] Audit contrastes et vérification axe-core
- **Catégorie :** Perf/A11y
- **Priorité :** P2 (confort)
- **Effort estimé :** M
- **Dépend de :** DESIGN-02 (tokens unifiés d'abord)
- **Pourquoi :** Plusieurs combinaisons (texte `/60`-`/75` sur fonds crème, honey sur cream) n'ont jamais été vérifiées WCAG AA.
- **Critères d'acceptation :**
  - Contrastes des combinaisons palette utilisées mesurés (ratio ≥ 4.5:1 texte normal, 3:1 grand texte) ; corrections appliquées sur les cas non conformes sans dénaturer la palette.
  - Passage axe-core (ou équivalent) sur 3 pages types, anomalies corrigées ou documentées.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (palette Mocha Mousse dans `app/globals.css` : cream #fff6ea, paper #fffdf8, oat #e8d8c3, espresso #3a241c, mocha #a47864, toast #c9895b, honey #e7a93b, sage #8fae8b). Lis `AGENTS.md`. Mission : 1) calcule les ratios de contraste WCAG des combinaisons réellement utilisées (grep les usages : `text-espresso/75` et `/60` sur `bg-cream`/`bg-paper`, `text-mocha` et `text-toast` sur cream, `text-cream/60` et `/75` sur `bg-espresso` dans le footer, `text-honey` sur espresso) — calcule mathématiquement (formule de luminance relative WCAG, en intégrant la transparence composée sur le fond) ; 2) pour chaque combinaison < 4.5:1 en texte courant, corrige au minimum (augmenter l'opacité ou foncer d'un cran) en gardant l'esprit de la palette — liste chaque changement ; 3) si un outil type axe-core est exécutable sur le build local, lance-le sur `/`, une fiche pays et une recette et traite les findings ; sinon dis-le et limite-toi à l'analyse statique. Ne change pas les couleurs de marque elles-mêmes. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, tableau avant/après des ratios dans ta réponse.
---
### [DESIGN-03] Harmoniser les rayons et les états focus visibles
- **Catégorie :** Design/Identité
- **Priorité :** P2 (confort)
- **Effort estimé :** S
- **Dépend de :** aucune
- **Pourquoi :** Mélange `rounded-lg` (cartes du site) / `rounded-2xl`-`3xl` (page creator, bandeau construction), et les états `:focus-visible` ne sont pas stylés (outline navigateur par défaut sur fond crème).
- **Critères d'acceptation :**
  - Convention de radius documentée (ex. cartes = lg, éléments flottants = 2xl) et appliquée.
  - `focus-visible` visible et cohérent (anneau `toast`/`honey`) sur liens, boutons, cartes cliquables.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Tailwind 4, palette Mocha Mousse). Lis `AGENTS.md`. Mission en deux volets. 1) Radius : inventorie les usages (`grep -rn "rounded-" components app | grep -v node_modules`) — les cartes du site utilisent `rounded-lg`, la page creator et `HomeConstructionNotice` utilisent `rounded-2xl/3xl` ; définis une convention simple (cartes et blocs de contenu = `rounded-lg`, surfaces flottantes type toast/menu mobile = `rounded-2xl`, pills/boutons = `rounded-full`) et applique-la aux incohérences constatées, sans refonte visuelle. 2) Focus : ajoute dans `app/globals.css` un style `:focus-visible` global cohérent avec la palette (ex. `outline: 2px solid var(--color-toast); outline-offset: 2px`) et vérifie qu'il est visible sur les fonds cream, paper et espresso (footer) — ajuste par contexte si nécessaire. Ne touche ni aux données, ni aux routes, ni au SEO. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, description des éléments testés au clavier.
---
### [DOCS-01] Consolider les documents de suivi
- **Catégorie :** Docs
- **Priorité :** P2 (confort)
- **Effort estimé :** M
- **Dépend de :** CODE-02
- **Pourquoi :** 8 docs dans `docs/` + 18 dans `app/docs/` + CHANGELOG se recoupent fortement (l'état actuel est répété dans NEXT_STEPS, ROADMAP, SEO_LLM_PLAN et PROJECT_LOG) : chaque changement doit être reporté à 4-5 endroits.
- **Critères d'acceptation :**
  - Un document « source de vérité » par usage : ROADMAP (vision/phases), NEXT_STEPS (actions courtes), PROJECT_LOG (journal), les autres archivés ou fusionnés.
  - Redondances « État actuel » remplacées par un renvoi croisé.
  - Rien de supprimé sans être archivé (`docs/archive/`).
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo « morning-atlas ». Lis `AGENTS.md` puis TOUS les documents de suivi : `docs/ROADMAP.md`, `docs/NEXT_STEPS.md`, `docs/PROJECT_LOG.md`, `docs/CONTENT_TRACKER.md`, `docs/SEO_LLM_PLAN.md`, `docs/TAXONOMY_SEO_AUDIT.md`, `docs/IMAGE_MAPPING_REPORT.md`, `docs/IMAGE_OPTIMIZATION_REPORT.md`, `CHANGELOG.md` (et `docs/lots/` s'il existe). Constat : les sections « État actuel » sont dupliquées dans 4 documents et divergeront. Mission : 1) définis en tête de `docs/README.md` (à créer) le rôle unique de chaque document (ROADMAP = vision et phases ; NEXT_STEPS = prochaines actions uniquement ; PROJECT_LOG = journal daté ; CHANGELOG = changements livrés ; les rapports/audits = documents datés figés) ; 2) supprime les sections « État actuel » redondantes de NEXT_STEPS et SEO_LLM_PLAN au profit d'un renvoi vers ROADMAP ; 3) déplace les rapports ponctuels terminés (IMAGE_*) vers `docs/archive/` avec `git mv`. Ne réécris pas l'historique du PROJECT_LOG ni du CHANGELOG ; ne perds aucune information (tout ce qui est retiré doit exister ailleurs). Validation : chaque info n'existe plus qu'à un seul endroit canonique, liens internes valides.
---
### [PAGE-05] Pages guides individuelles /guides/[slug]
- **Catégorie :** Routing/Pages
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** tant que l'axe guides n'est pas validé
- **Effort estimé :** L
- **Dépend de :** EDIT-01, DATA-01
- **Pourquoi :** Les 3 guides sont des teasers non cliquables ; la roadmap interne conditionne à juste titre leur création au fait que les guides deviennent un axe éditorial réel — écrire d'abord UN guide pilote complet.
- **Critères d'acceptation :**
  - Type `Guide` enrichi (sections de contenu, sources), 1 guide pilote entièrement rédigé et sourcé.
  - Route `/guides/[slug]` avec `generateStaticParams`, metadata, JSON-LD Article/WebPage, maillage vers les pays liés.
  - Les 2 guides non rédigés restent des teasers non cliquables.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (média éditorial français ; prudence culturelle absolue, sources obligatoires, rien d'inventé). Lis `AGENTS.md`, `types/guide.ts`, `data/guides.ts` (3 guides teaser : petits-déjeuners salés du monde, matins autour du thé, bases faciles à refaire) et `app/guides/page.tsx`. Inspecte aussi `app/countries/[slug]/page.tsx` comme référence de page dynamique (generateStaticParams, generateMetadata, JSON-LD, composants). Mission : 1) enrichis le type `Guide` avec `sections: { heading: string; body: string }[]`, `sources?: ContentSource[]` (réutilise `types/editorial.ts`) et un flag `published: boolean` ; 2) rédige entièrement UN guide pilote — « Petits-déjeuners salés du monde » — en t'appuyant EXCLUSIVEMENT sur les fiches pays et recettes déjà présentes dans `data/` (compare les plats salés réellement en base : ful medames, menemen, tapsilog, full english… avec liens internes), formulations prudentes, français accentué, 600-900 mots ; 3) crée `app/guides/[slug]/page.tsx` (statique, metadata canonique, breadcrumb JSON-LD Accueil → Guides → titre, maillage `CountryCard` vers les pays cités) ne générant que les guides `published: true` ; 4) sur `/guides`, rends cliquable uniquement le guide publié. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et ajoute le guide au sitemap.
---
### [TOOL-03] Tests unitaires des helpers de contenu
- **Catégorie :** Tooling
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** ; la validation d'intégrité en CI (DATA-05 + TOOL-01) couvre le vrai risque
- **Effort estimé :** M
- **Dépend de :** DATA-05, TOOL-01
- **Pourquoi :** `lib/content-helpers.ts` et `lib/content-validation.ts` sont purs et facilement testables, mais le ROI n'existe que si la logique se densifie (filtres, scoring).
- **Critères d'acceptation :**
  - Vitest (ou équivalent léger) installé en dev ; tests sur les helpers de résolution de slugs et le rapport d'intégrité (fixtures minimales).
  - `pnpm test` dans la CI.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (TypeScript strict, pnpm, aucun framework de test installé). Lis `AGENTS.md`, `lib/content-helpers.ts` et `lib/content-validation.ts`. Mission : 1) installe Vitest en devDependency (le plus léger possible, pas de config superflue, pas de jsdom — ce sont des fonctions pures) ; 2) écris des tests pour : `getCountryBySlug`/`getRecipesBySlugs` (slug existant, inexistant, tableau partiel), `getRecipesByIngredient`/`getCountriesByCategory` (filtrage), et `getContentIntegrityReport` — pour ce dernier, teste la logique avec des fixtures locales minimalistes si le module le permet, sinon teste sur les données réelles en vérifiant l'invariant « rapport vide » ; 3) ajoute le script `"test": "vitest run"` et intègre-le au workflow CI `.github/workflows/ci.yml` s'il existe. Contraintes : ne modifie pas le code de prod pour le rendre testable sauf extraction triviale et sûre ; pas de snapshot fragile. Validation : `pnpm test` vert, `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [FEAT-01] Recherche / filtres sur les pages index
- **Catégorie :** Routing/Pages
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** : 53 pays se parcourent très bien sans recherche
- **Effort estimé :** M
- **Dépend de :** DATA-06
- **Pourquoi :** Un filtre par continent/style améliorerait l'exploration, mais n'apporte rien à la validation de la promesse éditoriale avec le volume actuel.
- **Critères d'acceptation :**
  - Filtre client léger (continent, style) sur `/countries` et `/recipes`, sans dépendance lourde, accessible au clavier, sans casser le SSG.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (App Router SSG, pas de backend, données en dur ; phase de test : rester minimal). Lis `AGENTS.md`. Inspecte `app/countries/page.tsx` (groupé par continents) et `app/recipes/page.tsx` (grille plate), plus `types/country.ts` (`continent`, `breakfastStyles`) et `types/recipe.ts` (`difficulty`, `tags`). Mission : ajoute un filtrage client minimal — un composant client léger (`'use client'`) de pills de filtre (continents sur /countries ; difficulté sur /recipes) qui filtre la liste rendue, tout le reste restant Server Components autant que possible (pattern : le composant client reçoit les données sérialisées en props). Contraintes : AUCUNE dépendance ajoutée, état dans l'URL via `useSearchParams` seulement si ça ne dégrade pas le SSG (sinon état local simple), accessible (boutons avec `aria-pressed`, focus visible), palette Mocha Mousse, labels français accentués. Ne touche pas aux pages détail ni au SEO des pages index (le H1 et la metadata restent identiques). Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [FEAT-02] Carte interactive des pays
- **Catégorie :** Design/Identité
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** explicitement listée « idée future » dans la roadmap
- **Effort estimé :** L
- **Dépend de :** EDIT-01 (contenus validés d'abord)
- **Pourquoi :** Très cohérent avec l'identité « atlas », mais coûteux (assets carto originaux, interactivité, poids JS) et sans impact sur la validation 30 jours.
- **Critères d'acceptation :**
  - Décision d'approche documentée (SVG monde stylisé original vs liste par continent améliorée) AVANT toute implémentation.
  - Si implémentée : SVG original (aucun asset copié, attention aux licences des fonds de carte), palette Mocha, accessible (navigation clavier + fallback liste), lazy, aucune dépendance carto lourde.
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (identité « atlas culinaire / carnet de voyage », palette Mocha Mousse ; phase de test : ne pas surconstruire — cette tâche n'a de sens que si elle a été explicitement priorisée). Lis `AGENTS.md` et `docs/ROADMAP.md`. Inspecte `app/countries/page.tsx` et `data/countries.ts` (53 pays avec `countryCode` ISO et `continent`). Mission en deux temps. Temps 1 (obligatoire) : propose 2 approches chiffrées — (a) carte SVG monde stylisée flat originale (source du fond de carte à licence permissive type Natural Earth/domaine public, redessinée dans la palette, JAMAIS copiée d'un site existant) avec pays cliquables ; (b) simple amélioration visuelle du regroupement par continent existant — et recommande. Temps 2 (seulement après validation explicite de l'option a dans la conversation) : implémente en SVG inline + composant client minimal, pays avec fiche = cliquables (lien `/countries/{slug}`) et contrastés, les autres neutres, navigation clavier (tabindex + labels), fallback liste par continents conservé sous la carte, AUCUNE lib carto. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, poids du SVG raisonnable (< 150 kB).
---
### [FEAT-03] Support multilingue (EN)
- **Catégorie :** Routing/Pages
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** : roadmap interne dit « après stabilisation du contenu français »
- **Effort estimé :** L
- **Dépend de :** DATA-01, EDIT-01 (le français doit être stable d'abord)
- **Pourquoi :** Doubler la surface de contenu avant d'avoir validé la version française doublerait aussi la dette éditoriale.
- **Critères d'acceptation :**
  - Ne pas implémenter avant la fin de la phase de test ; le jour venu : étude i18n App Router (routing par segment, hreflang, données traduites) documentée avant tout code.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js 16 « morning-atlas » (contenu 100 % français dans `data/`, App Router SSG, ~650 pages). ÉTUDE UNIQUEMENT, aucun code. Lis `AGENTS.md`, la doc locale `node_modules/next/dist/docs/` sur l'internationalisation (les conventions Next 16 peuvent différer de tes connaissances), puis inspecte la structure de `data/`, `lib/seo.ts` et `app/`. Mission : rédige `docs/I18N_STUDY.md` en français couvrant : 1) architecture de routing recommandée (`/en/...` par segment vs domaine) avec ses implications sur `generateStaticParams`, canonicals et hreflang ; 2) stratégie de données (dupliquer les fichiers `data/` par locale vs champs multilingues par entrée — chiffre l'impact sur les 53 pays + 53 recettes + taxonomies) ; 3) ce qui ne doit PAS être traduit automatiquement (noms de plats locaux, prudence culturelle des formulations) ; 4) estimation d'effort par phase et prérequis (contenu FR stabilisé). Conclus par une recommandation claire. N'invente pas d'API Next : chaque mécanisme cité doit exister dans la doc locale.
---
### [FEAT-04] Migration des données vers une base ou un CMS
- **Catégorie :** Code/Archi
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** : les fichiers TS typés + validation suffisent largement à 53+53 contenus
- **Effort estimé :** L
- **Dépend de :** fin de la phase de validation
- **Pourquoi :** La page About évoque « une éventuelle migration vers une vraie base de données », mais le contenu en dur, typé et versionné est aujourd'hui un avantage (revue par diff, zéro infra) — à ne considérer qu'en cas de croissance forte du volume ou d'un second contributeur non-dev.
- **Critères d'acceptation :**
  - Étude comparative documentée (rester en TS / Contentlayer-MDX / CMS headless / SQLite) avec seuils de bascule chiffrés — aucun code avant décision.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js « morning-atlas » (contenu en fichiers TypeScript typés dans `data/` : 53 pays, 53 recettes, taxonomies ; un seul mainteneur développeur ; SSG intégral). ÉTUDE UNIQUEMENT, aucun code. Lis `AGENTS.md`, inspecte `data/`, `types/`, `lib/content-validation.ts` et `docs/ROADMAP.md`. Mission : rédige `docs/DATA_STRATEGY.md` en français comparant honnêtement 4 options pour l'avenir du contenu — (1) statu quo fichiers TS typés + validation, (2) Markdown/MDX avec typage (type Contentlayer ou équivalent maintenu en 2026 — vérifie l'état réel de l'écosystème avant de citer un outil), (3) CMS headless, (4) base embarquée type SQLite. Pour chacune : coût de migration, impact sur le typage strict et la validation d'intégrité existante, workflow de relecture éditoriale (`needsReview`), build SSG, et risques. Définis des seuils de bascule objectifs (nb de fiches, nb de contributeurs, fréquence de publication) et conclus par une recommandation datée. Chaque outil cité doit exister réellement — ne recommande rien que tu ne puisses vérifier.
---
### [SEO-08] llms.txt et flux RSS
- **Catégorie :** SEO
- **Priorité :** P3 (nice-to-have) — **[sur-ingénierie en phase test]** : la roadmap le conditionne à la stabilisation du socle
- **Effort estimé :** S
- **Dépend de :** EDIT-01, DATA-01
- **Pourquoi :** Utile pour la visibilité IA/abonnés à terme, sans effet sur la validation en cours ; publier un llms.txt qui pointe vers des fiches non relues serait contre-productif.
- **Critères d'acceptation :**
  - Après stabilisation : `public/llms.txt` sobre (promesse + index des sections majeures) et route RSS des contenus publiés (`needsReview: false` uniquement).
  - `pnpm build` passe.
- **Mini-prompt Claude (Opus) :**
> Tu travailles dans le repo Next.js 16 « morning-atlas » (App Router, SSG, domaine morning-atlas.fr). Prérequis à vérifier AVANT de coder : un lot significatif de fiches doit être à `needsReview: false` — vérifie dans `data/countries.ts` et `data/recipes/**` ; si tout est encore à `true`, arrête-toi et dis-le. Lis `AGENTS.md` et `docs/SEO_LLM_PLAN.md`. Mission : 1) crée `public/llms.txt` sobre et honnête (une ligne de promesse du site, puis liens absolus vers `/`, `/countries`, `/recipes`, `/guides`, `/about` avec une description d'une ligne chacun — pas de sur-promesse, français correct) ; 2) crée une route RSS (`app/rss.xml/route.ts` ou la convention que recommande la doc locale `node_modules/next/dist/docs/` — vérifie) exposant uniquement les fiches pays et recettes à `needsReview: false`, avec titre, lien canonique et `shortDescription` ; 3) référence le flux dans le `<head>` via metadata `alternates`. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, XML du flux bien formé (vérifie avec un parseur).
---

