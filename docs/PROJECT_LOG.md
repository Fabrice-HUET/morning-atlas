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
