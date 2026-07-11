# Journal de bord Morning Atlas

## Format d'entrée

- Date : `YYYY-MM-DD`
- Branche : nom de branche Git
- Commit : SHA court ou `TODO`
- Type de tâche : contenu, design, technique, documentation, validation
- Résumé : description courte
- Fichiers modifiés : chemins principaux
- Décisions prises : choix structurants
- Problèmes rencontrés : blocages ou limites
- Prochaine action : suite concrète

## 2026-07-11 — EDIT-01 : relecture et validation du lot pilote

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : éditorial, données
- Résumé : application de la grille `docs/EDITORIAL_REVIEW.md` à un lot pilote de **10 fiches pays + leurs 10 recettes** (Égypte, Maroc, Sénégal, Japon, Singapour, Turquie, Royaume-Uni, France, Mexique, Inde du Sud). Les 20 fiches passent à `needsReview: false` — première sortie du 100 % `needsReview` (20/106).
- Verdicts : les 10 fiches sont jugées **publiables** : formulations prudentes (« souvent associé », « ne doit pas résumer »), non-généralisation respectée, `reviewNotes` couvertes par le texte, `sources` présentes et sur le sujet, langue nettoyée.
- Nettoyage langue déclenché par la relecture (dimension C de la grille) :
  - Résidus d'accents surfacés et corrigés (participes `-é/-ée/-ées`, adverbes `forcément`/`précisément`, `commerçant`, `récipient`…) via extension du script d'accents, plus une règle générale d'élision `l'`/`d'` (l'organisation, d'enfance).
  - **Corrections de sur-accentuations verbe→participe** introduites par les entrées ambiguës de DATA-01 (`varie`→`varié`, `fermente`→`fermenté`, `presente`→`présenté`, `grille`→`grillé`, `mange`→`mangé`) : corrigées globalement là où le contexte est sûr (ex. « poisson grillé », « peut être mangé », « ne fermente pas », « varie fortement »).
- **Portée honnête de la validation** : la validation repose sur la prudence interne des formulations + la présence de sources sur le sujet ; le **contenu** des articles-sources n'a pas été re-vérifié en ligne (pas d'accès). Aucune affirmation forte non prudente n'a été laissée ; aucune invention.
- Traçabilité : `docs/CONTENT_TRACKER.md` mis à jour (10 lignes : `needsReview` → false, « Prêt pour publication » → Oui).
- Reste : 43 pays + 43 recettes en `needsReview: true` pour les prochains lots ; des résidus d'accents ambigus (`sucre`/`sucré`, `sale`/`salé`) et d'éventuelles sur-accentuations verbe→participe subsistent hors lot pilote, à traiter lot par lot.
- Validation : `pnpm lint` ✅, `pnpm typecheck` ✅, `pnpm build` ✅ (652 pages). Scan final du lot pilote : aucun mot français non accentué résiduel.
- Prochaine action : lot pilote 2 (10 fiches suivantes) selon la même grille, ou passage au Sprint 3 (consolidation SEO).

## 2026-07-11 — EDIT-02 : procédure de relecture éditoriale

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : éditorial, documentation
- Résumé : rédaction de `docs/EDITORIAL_REVIEW.md`, la procédure et la grille objective pour faire passer une fiche de `needsReview: true` à `false`. Préalable à EDIT-01.
- Contenu : 5 principes non négociables ; définition de « publiable » ; modèle à 3 verdicts (publiable / à retoucher / maintenue en review) ; grille de relecture en 6 dimensions (sourcing, nuance, langue, structure, SEO, cohérence) ancrée sur les champs réels des types `CountryBreakfast` et `Recipe` ; procédure pas à pas ; règle des cas douteux ; anti-patterns bloquants ; traçabilité (tracker + log) ; rythme en petits lots (phase test 30 jours) ; exemple travaillé sur Ful medames (Égypte).
- Décisions prises :
  - Règle d'or : dans le doute, rester à `true` + ajouter une `reviewNotes` explicite.
  - En relecture, seul `needsReview` (+ corrections de texte et `reviewNotes`) change ; jamais de slug, clé, structure ou lien.
  - La grille intègre explicitement les résidus ambigus laissés par DATA-01 (`sucre`/`sucré`, `sale`/`salé`…) comme points de contrôle langue.
  - EDIT-02 requalifiée P0 (préalable direct du cœur de la phase de test).
- Fichiers : `docs/EDITORIAL_REVIEW.md` (nouveau), lien ajouté dans `docs/NEXT_STEPS.md`, suivi dans `docs/BACKLOG.md`.
- Validation : document uniquement, aucune donnée ni code touché (pas de build nécessaire).
- Prochaine action : **EDIT-01** — appliquer cette grille à un lot pilote de 8-12 fiches pays + leurs recettes.

## 2026-07-11 — SEO-01 : breadcrumbs JSON-LD ne pointant plus vers des 404

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO
- Résumé : suppression du niveau intermédiaire des `BreadcrumbList` JSON-LD des pages catégories et ingrédients, qui référençait `/categories` et `/ingredients` — deux pages index inexistantes (404). Les breadcrumbs passent de `Accueil → Catégories → nom` à `Accueil → nom`.
- Fichiers modifiés :
  - `app/categories/[slug]/page.tsx` (retrait de `{ name: 'Catégories', path: '/categories' }`)
  - `app/ingredients/[slug]/page.tsx` (retrait de `{ name: 'Ingrédients', path: '/ingredients' }`)
- Décisions prises :
  - Option retenue : retirer le niveau intermédiaire (pas de création de pages index dans cette tâche — c'est PAGE-02/PAGE-03).
  - Les pages pays et recette ne sont pas touchées : leurs breadcrumbs pointent vers `/countries` et `/recipes`, qui existent réellement.
  - Le builder `buildBreadcrumbJsonLd` (`lib/structured-data.ts`) est inchangé.
- Validation : `pnpm lint` ✅, `pnpm typecheck` ✅, `pnpm build` ✅ (652 pages). Vérification sur le HTML généré (`.next/server/app/`) : la page catégorie émet `Accueil → Pains du matin`, la page ingrédient `Accueil → Farine` ; grep global = plus aucun `item` de breadcrumb vers les index `/categories` ou `/ingredients`.
- Prochaine action : Sprint 1 (P0) terminé. Passer au Sprint 2 (EDIT-02 puis EDIT-01) ou au Sprint 3 (consolidation SEO) selon la priorité de Fabrice.

## 2026-07-11 — IMG-01 : remplacement du fallback picsum par un placeholder local

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : images/assets, technique
- Résumé : suppression du fallback `https://picsum.photos/seed/{slug}` (photo aléatoire, contraire à la précision culturelle + dépendance externe) au profit d'un placeholder 100 % local dans la palette Mocha Mousse.
- Fichiers modifiés :
  - `components/images/BreakfastImage.tsx` : en cas d'erreur de chargement, rend un composant `BreakfastImagePlaceholder` (SVG inline flat — bol, vapeur, soleil, sans plat précis ni texte), dégradé `oat → cream`, couleurs via les tokens CSS `var(--color-*)` (aucun hex en dur), `role="img"` + `aria-label={alt}`.
  - `next.config.ts` : bloc `images.remotePatterns` (picsum) supprimé ; config vide.
- Décisions prises :
  - Fallback en SVG/CSS pur, aucune dépendance ni asset externe, aucun `next/image` distant.
  - Les 53 images locales `public/images/breakfasts/{slug}.webp` continuent de s'afficher normalement ; le placeholder ne se déclenche qu'en cas d'erreur de chargement.
  - Props publiques de `BreakfastImage` inchangées (4 usages : cartes pays/recette, pages pays/recette).
- Validation : `pnpm lint` ✅, `pnpm typecheck` ✅, `pnpm build` ✅ (652 pages). Contrôles : plus aucune référence `picsum`/`remotePatterns` ; tokens palette présents ; SVG bien formé.
- Prochaine action : `SEO-01` (breadcrumbs JSON-LD 404) pour clore le Sprint 1.

## 2026-07-11 — UI-01 : retrait du statut interne `needsReview` de l'affichage public

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : design, UI
- Résumé : suppression des trois affichages publics du flag interne `needsReview` — badge « A verifier »/« Publie » sur `CountryCard`, et lignes « Statut éditorial » (« A verifier »/« Relu ») dans les blocs `<dl>` des pages pays et recette.
- Fichiers modifiés :
  - `components/cards/CountryCard.tsx` (retrait du `Pill` + import `Pill` inutilisé ; `Flag` seul, espacement rééquilibré `mt-8` → `mt-6`)
  - `app/countries/[slug]/page.tsx` (retrait du bloc « Statut éditorial »)
  - `app/recipes/[slug]/page.tsx` (retrait du bloc « Statut éditorial »)
- Décisions prises :
  - Le champ `needsReview` reste dans les données et les types (`types/country.ts`, `types/recipe.ts`) pour le suivi interne ; seul son rendu public disparaît.
  - Le bandeau global `HomeConstructionNotice` (non touché) suffit à assumer la phase de test auprès des visiteurs.
  - Le composant `components/ui/Pill.tsx` n'est plus utilisé nulle part mais conservé (hors périmètre ; nettoyage éventuel plus tard).
- Validation : `pnpm lint` ✅, `pnpm typecheck` ✅, `pnpm build` ✅ (652 pages). Grep : plus aucun rendu public de `needsReview`.
- Prochaine action : Sprint 1 restant — `IMG-01` (fallback picsum) puis `SEO-01` (breadcrumbs 404).

## 2026-07-10 — DATA-01 : restauration des accents français

- Date : `2026-07-10`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : données, contenu
- Résumé : restauration des accents français manquants dans toutes les données éditoriales et les textes d'interface, via une passe automatisée conservatrice (script jetable, structure-aware) suivie de corrections manuelles ciblées sur les libellés JSX.
- Portée : 69 fichiers (`data/countries.ts`, `data/ingredients.ts`, `data/categories.ts`, `data/tags.ts`, `data/guides.ts`, les 53 fichiers `data/recipes/**`, et les composants/pages UI : `HeroSection`, `Footer`, `EditorialPromise`, `Featured*`, `app/**/[slug]/page.tsx`, cartes). ~3000 chaînes corrigées.
- Méthode / garde-fous :
  - Le script ne touche qu'aux valeurs de texte françaises : il saute les slugs, `countryCode`, URLs, chemins de module, interpolations `${...}` et les `title`/`publisher` (anglais) des blocs `sources` — mais corrige les `note` (français) de ces blocs.
  - Dictionnaire de mots sûrs uniquement ; élisions restaurées (`l'un`, `d'olive`, `jusqu'à`) avec re-délimitation des chaînes (`'Jus d'orange'` → `"Jus d'orange"`) pour ne pas casser les littéraux.
  - Préposition `à` restaurée avec double garde (mot précédent = pronom/contraction, mot suivant = signal verbal) pour ne pas transformer le verbe « a » (`qu'on a`, `il a`, `a été`).
- Résidus assumés (laissés à la relecture EDIT-01, car ambigus sans jugement de contexte) : `sucre`/`sucré`, `sale`/`salé`, `marque`/`marqué`, quelques `utilisé`/`pensé` (participe vs verbe), et les titres de sources français non accentués (préservés tels quels pour ne pas altérer des citations).
- Contraintes respectées : slugs, URLs, clés, imports, JSON-LD et routes inchangés ; aucune reformulation de sens ; aucune invention.
- Validation : `pnpm lint` ✅, `pnpm typecheck` ✅, `pnpm build` ✅ (652 pages) avec Node v24.11.0. Audits : 0 accent dans un slug/interpolation, titres de sources anglais préservés.
- Prochaine action : Sprint 1 restant — `UI-01`, `IMG-01`, `SEO-01` (indépendants).

## 2026-07-10 — CODE-01 : assainissement du dépôt git

- Date : `2026-07-10`
- Branche : `main` (branche unique)
- Commit : `dcd8ade` (suppression parasite), `5aef963` (docs pilotage), `fa35fb0` (suivi CODE-01), `6fb411f` (chantier creator)
- Type de tâche : technique, hygiène git
- Résumé : exécution de la tâche CODE-01. Suppression du fichier vide parasite `main` (il était tracké, committé par accident), consolidation du travail non committé, et suppression du doublon `audit_fable.md` (contenu identique préservé dans `docs/AUDIT_2026-07.md`).
- Décision de branche : le chantier creator a d'abord été isolé sur `feat/creator-page`, puis — sur demande explicite — **rapatrié sur `main` (cherry-pick `6fb411f`) et la branche `feat/creator-page` supprimée. Une seule branche est conservée : `main`.** CODE-01 autorisait explicitement ce choix (« soit branche dédiée, soit un commit cohérent sur main »).
- Contenu committé sur `main` :
  - Suppression du fichier parasite `main` + docs de pilotage (ROADMAP, BACKLOG, CREATOR_ROADMAP, AUDIT, NEXT_STEPS, PROJECT_LOG).
  - Chantier code créateur (`app/creator/`, `components/creator/CreatorScene.tsx`, `data/creator.ts`, lien footer, dépendances `three` + `@types/three`).
- Décisions prises :
  - `docs/cv.html` **non committé volontairement** : CV personnel non destiné au repo public en l'état ; il sera migré vers `/creator/cv` par CREATOR-05 puis supprimé. Laissé en working tree, à archiver hors repo par Fabrice si besoin.
  - `audit_fable.md` (racine) supprimé car strictement identique à `docs/AUDIT_2026-07.md`.
  - Rien n'a été poussé sur le remote (`origin/main` est en retard ; push à faire par Fabrice quand il le décide).
- Validation : `git status` propre sur `main` (hors `docs/cv.html` assumé) ; `pnpm lint`, `pnpm typecheck`, `pnpm build` (652 pages, `/creator` incluse) OK sur `main` avec Node v24.11.0.
- Prochaine action : Sprint 1 — `DATA-01` (restaurer les accents français). En parallèle, la piste créateur peut démarrer par `CREATOR-01`.

## 2026-07-10 — Restructuration du pilotage : backlog opérationnel et roadmap créateur

- Date : `2026-07-10`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : documentation, pilotage
- Résumé : intégration de l'audit du 2026-07-02 dans `docs/`, transformation de la roadmap en plan d'exécution ordonné (sprints 0 → 5 + piste parallèle créateur), création du backlog opérationnel avec prompts agent prêts à coller, et création de la roadmap dédiée à l'espace créateur / CV.
- Fichiers modifiés :
  - `docs/AUDIT_2026-07.md` (nouveau — copie de l'audit `audit_fable.md`)
  - `docs/BACKLOG.md` (nouveau — 44 tâches avec prompts, document vivant)
  - `docs/CREATOR_ROADMAP.md` (nouveau — espace créateur « L'Atelier », CREATOR-01 → 07)
  - `docs/ROADMAP.md` (réécrit — ordre d'exécution en sprints)
  - `docs/NEXT_STEPS.md` (réécrit — pointe vers le nouvel ordre)
- Décisions prises :
  - L'espace créateur devient une section distincte du site via route groups (`(site)` / `(atelier)`), avec un thème propre « L'Atelier » : palette Mocha Mousse inversée (fond `ink`/`espresso`, accent `honey`), typographie display dédiée.
  - three.js sera retiré : la démonstration frontend se fait en CSS/SVG natif (scroll-driven animations, tracé SVG), cohérent avec le discours performance du CV. La tâche PAGE-01 est remplacée par CREATOR-01 → 07.
  - Le CV migre de `docs/cv.html` vers une page `/creator/cv` imprimable (CSS print A4) + PDF dans `public/files/`.
- Problèmes rencontrés : incohérence d'email dans `data/creator.ts` (gmail vs icloud) — décision utilisateur attendue.
- Prochaine action : Sprint 0 (`CODE-01` en premier : fichier `main` parasite + commit du chantier creator sur une branche), puis Sprint 1 (`DATA-01` accents).

## 2026-07-01 — Correction du doublon ingrédient `fresh-fruit`

- Date : `2026-07-01`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : données, validation, documentation
- Résumé : suppression de l’entrée ingrédient redondante `fresh-fruit` en conservant l’entrée canonique `Fruits frais`.
- Fichiers modifiés :
  - `data/ingredients.ts`
  - `data/tags.ts`
  - `data/countries.ts`
  - `data/recipes/europe/portugal/portuguese-pao-com-manteiga-galao.ts`
  - `docs/PROJECT_LOG.md`
  - `docs/NEXT_STEPS.md`
  - `docs/TAXONOMY_SEO_AUDIT.md`
  - `docs/ROADMAP.md`
  - `docs/SEO_LLM_PLAN.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Le slug canonique reste `fresh-fruit`.
  - L’entrée conservée est `Fruits frais`, plus adaptée aux références existantes qui parlent de fruits servis en accompagnement.
  - Les références internes vers `fresh-fruit` ne changent pas.
  - Les références de tags invalides détectées pendant la validation sont corrigées : `cafe` devient `coffee`, `pastry` est ajouté comme tag canonique et le doublon `cold-cuts` est supprimé.
  - Aucun `noindex`, aucune route et aucun lien interne ne sont modifiés.
- Problèmes rencontrés :
  - Le doublon était une redondance sémantique, pas deux ingrédients distincts.
  - La validation a révélé des anomalies de tags indépendantes du doublon `fresh-fruit`.
- Prochaine action : poursuivre la relecture éditoriale des fiches `needsReview: true`.

## 2026-07-01 — Exclusion temporaire des ingrédients faibles du sitemap

- Date : `2026-07-01`
- Branche : `main`
- Commit : `4e6dc5b`
- Type de tâche : SEO, technique, documentation
- Résumé : retrait temporaire du sitemap des 33 pages ingrédients classées trop faibles par l’audit SEO des taxonomies, sans ajout de `noindex`.
- Fichiers modifiés :
  - `app/sitemap.ts`
  - `docs/TAXONOMY_SEO_AUDIT.md`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Les 123 catégories restent dans le sitemap.
  - Les pages ingrédients restent accessibles et les liens internes existants sont conservés.
  - Aucun `noindex` n’est ajouté dans cette mission.
  - Les 33 ingrédients très faibles sont exclus via une constante dédiée dans `app/sitemap.ts`.
  - Les slugs ingrédients sont dédupliqués dans le sitemap pour éviter une URL répétée.
- Problèmes rencontrés :
  - Les pages exclues restent utiles pour le maillage interne, mais ne sont pas encore assez solides pour être signalées dans le sitemap.
  - Le slug `fresh-fruit` apparaît deux fois dans les données ingrédients ; les données ne sont pas modifiées dans cette mission.
- Prochaine action : enrichir les taxonomies prioritaires, puis réintégrer les ingrédients exclus quand ils ont suffisamment de contenus liés.

## 2026-07-01 — Audit SEO des taxonomies

- Date : `2026-07-01`
- Branche : `main`
- Commit : `889e47e`
- Type de tâche : SEO, audit, documentation
- Résumé : audit des pages catégories et ingrédients pour identifier les taxonomies solides, les pages à enrichir et les candidates à exclusion temporaire du sitemap ou `noindex`.
- Fichiers modifiés :
  - `docs/TAXONOMY_SEO_AUDIT.md`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Aucune modification d’indexation n’est appliquée dans cette mission.
  - Les 123 catégories restent dans le sitemap pour l’instant, car aucune catégorie n’est vide.
  - 76 ingrédients sont classés solides, 302 à enrichir et 33 trop faibles pour une indexation autonome.
  - La recommandation est de préparer une mission dédiée avant toute exclusion du sitemap ou ajout de `noindex`.
- Problèmes rencontrés :
  - Les pages taxonomiques restent éditorialement fines malgré le maillage pays/recettes.
  - Plusieurs ingrédients génériques ou isolés n’ont aucune recette liée.
- Prochaine action : valider la recommandation, puis enrichir les taxonomies prioritaires ou retirer temporairement les 33 ingrédients très faibles du sitemap.

## 2026-06-30 — Maillage interne pays, recettes, catégories et ingrédients

- Date : `2026-06-30`
- Branche : `main`
- Commit : `499db57`
- Type de tâche : SEO, navigation, technique, documentation
- Résumé : renforcement du maillage interne entre pages pays, recettes, catégories et ingrédients, sans créer de route supplémentaire.
- Fichiers modifiés :
  - `lib/content-helpers.ts`
  - `app/countries/[slug]/page.tsx`
  - `app/recipes/[slug]/page.tsx`
  - `app/categories/[slug]/page.tsx`
  - `app/ingredients/[slug]/page.tsx`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Les catégories et ingrédients des pages pays deviennent des liens vers leurs pages existantes.
  - Les pages recettes ajoutent des liens vers catégories et ingrédients quand les slugs correspondants existent.
  - Les pages catégories et ingrédients affichent les recettes liées via les données `categorySlugs` et `ingredientSlugs`.
  - Les guides restent sans lien individuel car aucune route `/guides/{slug}` n’existe.
- Problèmes rencontrés :
  - Les tags restent non liés car aucune route publique de tag n’existe.
  - Les guides ne contiennent que des pays et tags liés ; aucun lien vers recette, catégorie ou ingrédient n’est certain dans leurs données actuelles.
- Prochaine action : créer des pages individuelles de guides ou enrichir les données guides si cet axe devient prioritaire.

## 2026-06-30 — Sources visibles sur les fiches pays et recettes

- Date : `2026-06-30`
- Branche : `main`
- Commit : `1249dc3`
- Type de tâche : SEO, éditorial, technique, documentation
- Résumé : affichage public des sources éditoriales en bas des 53 pages pays et des 53 pages recettes.
- Fichiers modifiés :
  - `components/content/SourceList.tsx`
  - `app/countries/[slug]/page.tsx`
  - `app/recipes/[slug]/page.tsx`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/CONTENT_TRACKER.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Le composant `SourceList` affiche uniquement les titres, les liens disponibles et les éditeurs disponibles.
  - Les blocs vides ne sont pas rendus si aucune source exploitable n’existe.
  - Les `reviewNotes` restent internes et ne sont pas affichées publiquement.
  - Les notes internes du champ `sources.note` ne sont pas affichées dans cette première version.
- Problèmes rencontrés :
  - Aucune date d’accès n’existe dans le type `ContentSource`, donc aucune date n’est affichée.
  - Toutes les fiches restent marquées `needsReview: true`, même si leurs sources sont désormais visibles.
- Prochaine action : relire les sources affichées, puis décider quelles fiches peuvent sortir du statut `needsReview`.

## 2026-06-30 — Données structurées JSON-LD

- Date : `2026-06-30`
- Branche : `main`
- Commit : `9ed50a7`
- Type de tâche : SEO, technique, documentation
- Résumé : ajout de données structurées JSON-LD minimales et alignées avec le contenu visible des pages publiques.
- Fichiers modifiés :
  - `lib/structured-data.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/countries/page.tsx`
  - `app/recipes/page.tsx`
  - `app/guides/page.tsx`
  - `app/about/page.tsx`
  - `app/countries/[slug]/page.tsx`
  - `app/recipes/[slug]/page.tsx`
  - `app/categories/[slug]/page.tsx`
  - `app/ingredients/[slug]/page.tsx`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Le JSON-LD est centralisé dans `lib/structured-data.ts`.
  - `WebSite` et `Organization` restent globaux et n’inventent pas de logo.
  - `Recipe` utilise uniquement le nom, la description, l’image, l’origine visible, les ingrédients, les étapes, l’URL et `mainEntityOfPage`.
  - Les pages dynamiques disposent de breadcrumbs simples : accueil, section, page courante.
- Problèmes rencontrés :
  - Les pages individuelles de guides n’existent pas encore, donc aucun `BreadcrumbList` de guide individuel n’est ajouté.
  - Les champs avancés de recette comme calories, nutrition, avis, auteur ou logo sont volontairement exclus.
- Prochaine action : valider le balisage avec Rich Results Test et Schema Markup Validator après déploiement ou preview publique.

## 2026-06-30 — Socle SEO technique P0

- Date : `2026-06-30`
- Branche : `main`
- Commit : `4db596d`
- Type de tâche : SEO, technique, documentation
- Résumé : ajout du socle SEO P0 avec `robots.txt`, `sitemap.xml`, canonicals, Open Graph, Twitter cards et H1 dédiés sur les pages publiques ciblées.
- Fichiers modifiés :
  - `app/robots.ts`
  - `app/sitemap.ts`
  - `app/layout.tsx`
  - `app/page.tsx`
  - `app/countries/`
  - `app/recipes/`
  - `app/categories/[slug]/page.tsx`
  - `app/ingredients/[slug]/page.tsx`
  - `app/guides/page.tsx`
  - `app/about/page.tsx`
  - `components/layout/SectionHeading.tsx`
  - `lib/seo.ts`
  - `docs/SEO_LLM_PLAN.md`
  - `docs/PROJECT_LOG.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Le domaine canonique reste `https://morning-atlas.fr`.
  - Les pages recettes utilisent leur image locale `/images/breakfasts/{slug}.webp` dans les métadonnées sociales.
  - Les pages pays utilisent l’image de la première recette associée quand elle existe.
  - `SectionHeading` accepte un niveau de titre explicite pour corriger les H1 sans refactor global.
  - Les données structurées JSON-LD restent prévues pour une mission séparée.
- Problèmes rencontrés :
  - Aucune image sociale par défaut dédiée n’existe encore pour les pages sans visuel de recette.
  - Les pages individuelles de guides n’existent pas encore ; seules les pages publiques réellement routées sont incluses au sitemap.
- Prochaine action : ajouter les données structurées JSON-LD et rendre les sources visibles sur les fiches pays et recettes.

## 2026-06-30 — Conversion WebP et contrôle d’affichage des images breakfast

- Date : `2026-06-30`
- Branche : `main`
- Commit : `44d5a4f` / `c1ecf54`
- Type de tâche : images, validation, documentation
- Résumé : conversion des 53 images breakfast en WebP, suppression des PNG sources après validation, puis contrôle local des pages liste, détail et composants utilisant `BreakfastImage`.
- Fichiers modifiés :
  - `public/images/breakfasts/`
  - `docs/CONTENT_TRACKER.md`
  - `docs/IMAGE_MAPPING_REPORT.md`
  - `docs/IMAGE_OPTIMIZATION_REPORT.md`
  - `docs/PROJECT_LOG.md`
- Décisions prises :
  - La convention finale reste `/images/breakfasts/{slug}.webp`.
  - Les PNG sources sont supprimés après vérification que les 53 WebP correspondent exactement aux 53 slugs.
  - Le composant `BreakfastImage` n'est pas modifié car il utilise déjà la bonne convention.
- Problèmes rencontrés :
  - Le premier `pnpm build` lancé dans le sandbox a échoué sur une contrainte Turbopack de binding local ; le build relancé hors sandbox a réussi.
  - Aucun problème d’image cassée, de slug manquant, de doublon ou de fichier hors convention n’a été détecté.
- Prochaine action : effectuer un dernier contrôle navigateur manuel si une validation visuelle humaine mobile/desktop est nécessaire.

## 2026-06-19 — Fondation contenu, images et suivi projet

- Date : `2026-06-19`
- Branche : `main`
- Commit : `3d98d41`
- Type de tâche : contenu, images, documentation, suivi projet
- Résumé : intégration des 18 lots éditoriaux, génération des images de petits-déjeuners, préparation de l'affichage des images locales avec fallback, puis mise en place des documents de suivi projet.
- Fichiers modifiés :
  - `data/`
  - `types/`
  - `lib/`
  - `app/`
  - `components/`
  - `next.config.ts`
  - `docs/ROADMAP.md`
  - `docs/PROJECT_LOG.md`
  - `docs/CONTENT_TRACKER.md`
  - `CHANGELOG.md`
- Décisions prises :
  - Les images locales de petits-déjeuners suivent le chemin `public/images/breakfasts/{recipe.slug}.webp`.
  - Le fallback externe reste limité à `https://picsum.photos/seed/**`.
  - Le suivi éditorial est documenté en Markdown pour rester simple et versionnable.
  - Le champ `lot` reste `TODO` tant que les lots éditoriaux ne sont pas codés dans les données.
- Problèmes rencontrés :
  - Les images locales doivent encore être ajoutées au dépôt.
  - Les pages doivent être testées visuellement après ajout des fichiers `.webp`.
  - Certaines fiches restent marquées `needsReview` et nécessitent une relecture éditoriale.
- Prochaine action : ajouter les images locales, compléter les lots dans le tracker, puis valider visuellement les pages principales.
