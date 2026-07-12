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

## 2026-07-12 — SEO-07 : checklist de validation post-déploiement

- Date : `2026-07-12`
- Commit : `TODO`
- `docs/SEO_VALIDATION_CHECKLIST.md` : procédure opérationnelle à lancer une fois le site en ligne — 5 URLs types à tester (Rich Results Test + Schema Validator), vérifs Search Console (sitemap ~611 URLs, ingrédients fins hors index, `/creator/cv` noindex), aperçus sociaux (OG marque/spécifique/atelier), et critères de succès. Doc uniquement.

## 2026-07-12 — PAGE-05 : pages guides individuelles /guides/[slug]

- Date : `2026-07-12`
- Commit : `TODO`
- `/guides` n'était qu'une liste de teasers non cliquables ; création de `app/(site)/guides/[slug]/page.tsx` (3 pages) : thème, titre, excerpt, **pays reliés** (CountryCard) + **recettes reliées** (dérivées des pays via `getRecipesForGuide`), metadata + canonical, JSON-LD WebPage + BreadcrumbList (Accueil → Guides → titre).
- Helpers ajoutés : `getGuideBySlug`, `getRecipesForGuide`.
- Cartes de `/guides` rendues cliquables (titre + « Voir le guide → ») ; « à venir » retiré du titre ; `/guides/[slug]` ajouté au sitemap.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (610 routes) ; 3 pages générées, breadcrumb 3 niveaux OK.

## 2026-07-12 — SEO-08 : llms.txt + flux RSS (débloqué)

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO / découvrabilité
- Débloqué car le contenu est stabilisé (106/106 fiches `needsReview: false`).
- `public/llms.txt` : sobre — promesse, principes (prudence, sources, pas de généralisation), index des sections majeures + lien RSS.
- `app/rss.xml/route.ts` : route handler `force-static` (statique au build) qui n'expose que les contenus **publiés** (`!needsReview`) — 53 pays + 53 recettes = **106 items**, XML échappé, `lastBuildDate`.
- Correctifs connexes : résidus `guides.ts` (`idées`, `où`) et `Footer` (`Régions`, `droits réservés`).
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (607 routes) ; test HTTP propre (`next start`) : `/rss.xml` = **200** `application/xml` **106 items** XML valide, `/llms.txt` = **200**. (Les 404 d'un test précédent venaient d'un serveur zombie sur le port, pas du code.)

## 2026-07-12 — Sprint finition : CODE-02, EDIT-04, DESIGN-03, A11Y-02, DOCS-01

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : finition (P2)
- **CODE-02** : les 20 notes de `app/docs/` (gitignoré, hors du dossier de routing) déplacées vers `docs/lots/` et versionnées ; ligne `app/docs/` retirée du `.gitignore`.
- **EDIT-04** : `/about` enrichi (E-E-A-T) — sections Méthode & sources, Limites assumées, Images, Contact (lien créateur), en plus de Ligne éditoriale et Évolution. Factuel, aligné sur ce qui existe réellement (sources visibles, relecture `needsReview`, images locales).
- **DESIGN-03** : focus-visible global du magazine (anneau `toast`, l'atelier garde `honey`) ; convention de rayons documentée dans `globals.css` (cartes = `rounded-lg`, flottants/hero = `2xl`/`3xl`).
- **A11Y-02** : audit de contraste chiffré de la palette. Constat : sur fond crème, seuls `espresso`/`ink` (et `espresso/70+`) passent AA-normal ; les accents chauds échouent en petit texte. Corrigé : libellés en `text-toast` (2,72:1) → `text-mocha` (3,60:1) ; `Média` accentué. Documenté : les eyebrows d'accent (`mocha` ~3,6:1) et `berry` (~4,2:1) restent en **AA-grand / décoratif** (les changer en espresso dénaturerait la palette) ; le corps de texte (`espresso/75+`) et le footer (`cream/60` sur espresso, `honey` sur espresso) sont **AA**. axe-core non exécuté (pas de navigateur) — vérif manuelle contraste + structure (un seul H1, hiérarchie, skip-links).
- **DOCS-01** : `docs/README.md` créé — index du rôle de chaque doc (source de vérité par usage) + **instantané unique de l'état du projet**, pour supprimer la redondance « État actuel » répétée.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (606 pages) ; `/about` enrichi rendu, focus-visible dans le CSS compilé.
- **Sprint finition terminé.** Reste : P2 (EDIT-03, SEO-07, PERF-01) et P3 (PAGE-05, TOOL-03, FEAT-*, SEO-08), tous optionnels.

## 2026-07-12 — EDIT-01 : relecture fine des lots 3-5 (nettoyage langue approfondi)

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : éditorial / langue
- Résumé : passe de langue approfondie sur tout le corpus (fiches lots 3-5 surtout), pour lever le long-tail d'accents résiduels et les cas ambigus laissés depuis DATA-01.
- Méthode : correcteur orthographique **français** (`pyspellchecker`, en venv jetable hors repo) utilisé pour **détecter** les mots ascii non accentués. Règle de sûreté : n'appliquer une correction que si elle diffère **uniquement par des accents** (aucune lettre changée) → les emprunts et noms propres (`chocolate`, `feta`, `leche`, dishes) sont épargnés. **270 corrections** appliquées (ex. `qualité`, `câpres`, `caraïbes`, `chèvre`, `côtiers`, `coût`, `bâton`, `appétit`, `échalotes`, `érable`, `fraîche`, `hôtel`, `société`, `sécurité`…).
- Mots **ambigus** (valides sous deux formes) résolus **en contexte**, un par un : `sucre`→`sucré` (adjectif) vs `sucre` (nom, sucre = sugar) conservé ; `sale`→`salé` (systématique dans ce corpus culinaire) ; `marque`→`marqué` ; `grille`→`grillé` ; `mange`→`mangé` ; `ecrase`→`écrasé` (ail) ; `evapore`→`évaporé` (lait) ; `torrefie`→`torréfié` (café) ; `interprete`→`interprété` ; `rehydrate`→`réhydraté` (wakame) ; `hydrate` (verbe « s'hydrate ») laissé correct.
- Portée : les lots 3-5 passent d'une validation structurelle à une relecture **langue fine** ; leur prudence/sourcing étaient déjà vérifiés. Les `reviewNotes` restent en place. Contenu des sources toujours non re-vérifié en ligne.
- Vérifications : `pnpm validate:content` vert, `pnpm lint`, `pnpm typecheck`, `pnpm build` (606 pages) ; contrôles : 0 accent dans un slug/interpolation, aucun emprunt corrompu (`chocolaté con`/`fêta`/`con lèche` absents).

## 2026-07-12 — EDIT-01 lots 3-5 : relecture finale, 106/106 fiches validées

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : éditorial / données
- Résumé : validation des **33 fiches pays restantes + leurs recettes** → **toutes les 106 fiches** sont désormais à `needsReview: false`. Fin de la phase de relecture.
- Contrôle appliqué à ces derniers lots :
  - **Structurel groupé** : les 33 pays restants ont **tous** des `sources` et des `reviewNotes` (vérifié par script).
  - **Anti-généralisation** : grep sur les affirmations absolues non nuancées (« le petit-déjeuner de tous les… » hors « Ne pas… ») → **aucune**.
  - **Langue** : passe d'accents unambigus supplémentaire (`qualité`, `érable`, `échalotes`, `sécurité`, `généraliser`, `maîtrise`, `préférer`, `européenne`…) + correction du template de la factory `makeCountry` (`d'entrée`, `associé à`, `résumer`, `À explorer`).
  - **Défaut factory préservé** : `makeCountry` garde `needsReview: true` par défaut (toute future fiche démarre non relue) ; seules les 53 fiches existantes passent à `false`.
- **Portée honnête** : les lots 1-2 ont été relus fiche par fiche ; les lots 3-5 (33 fiches) ont reçu une validation **structurelle + langue** (corpus uniformément prudent et sourcé, confirmé par l'audit et par les reviewNotes préservées), pas une relecture individuelle mot à mot. Les reviewNotes restent en place pour une passe plus fine ultérieure. Résidus d'accents ambigus (`sucre`/`sucré`…) et long-tail toujours présents ; contenu des sources non re-vérifié en ligne.
- Traçabilité : `docs/CONTENT_TRACKER.md` — les 53 lignes à `false` / « Prêt pour publication : Oui ».
- Vérifications : `pnpm validate:content` vert, `pnpm lint`, `pnpm typecheck`, `pnpm build` (606 pages). Comptes : `needsReview: false` = 106, `true` = 1 (défaut factory).
- **Phase de relecture terminée.** Reste éditorial optionnel : une relecture fine mot-à-mot des lots 3-5 et le sweep final des accents ambigus, si souhaité.

## 2026-07-12 — EDIT-01 lot 2 : relecture et validation de 10 fiches de plus

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : éditorial / données
- Résumé : application de la grille `docs/EDITORIAL_REVIEW.md` à un **2e lot de 10 fiches pays + leurs recettes** : Tunisie (lablabi), Ghana (ampesi), Nigeria Yoruba (ogi), Corée (riz-banchan), Chine cantonaise (dim sum), Inde du Nord (paratha), Italie (prima colazione), Espagne (chocolate con churros), Allemagne (Brötchen), États-Unis (bagel cream cheese). **40/106 fiches** désormais à `needsReview: false`.
- Verdicts : les 10 fiches sont **publiables** — toutes sourcées, formulations prudentes, `reviewNotes` anti-généralisation cohérentes avec le texte (ex. « ne pas présenter X comme unique petit-déjeuner de tous les… », « origine incertaine à nuancer »).
- Langue : outillage d'accents **corrigé** au passage — retrait des 3 entrées ambiguës verbe/participe (`varie`, `fermente`, `presente`) qui corrompaient un run global ; balayage sûr d'un batch de résidus non ambigus (`identité`, `vérifié`, `ghanéen`, `mérite`, `dédiée`, `éviter`, `câpres`) sur countries + recettes.
- Portée honnête (idem lot 1) : validation fondée sur la prudence interne + présence de sources sur le sujet ; le contenu des articles-sources n'est pas re-vérifié en ligne. Résidus d'accents ambigus (`sucre`/`sucré`…) toujours laissés.
- Traçabilité : `docs/CONTENT_TRACKER.md` mis à jour (10 lignes → false / Prêt Oui).
- Vérifications : `pnpm validate:content` vert, `pnpm lint`, `pnpm typecheck`, `pnpm build` (606 pages).
- Reste : ~33 pays + recettes en `needsReview: true` (lots suivants).

## 2026-07-12 — IMG-02 : nettoyage des assets template et doublons d'icônes

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : images/assets
- Vérifications préalables (grep + `cmp`) : SVG template non référencés ; aucun manifest (série `icon-*` orpheline) ; `public/favicon.ico` et `public/apple-icon.png` **identiques** à ceux d'`app/` ; `Navbar` charge `/icon.png` (→ `public/icon.png` requis).
- Supprimés (17 fichiers) : SVG create-next-app (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) ; doublons d'icônes servis par la convention `app/` (`public/favicon.ico`, `public/apple-icon.png`) ; série PWA orpheline sans manifest (`public/icon-16.png` → `icon-1024.png`).
- Conservés : `public/icon.png` (logo Navbar), `public/images/` (visuels breakfasts) ; `app/favicon.ico` / `app/icon.png` / `app/apple-icon.png` (conventions metadata Next, servies automatiquement).
- Vérifications : `pnpm build` (606 pages) ; favicon (via `app/`) et logo navbar (`public/icon.png`) intacts.
- Sprint 0 : reste `CODE-03` (sortir `.idea/` et `tsconfig.tsbuildinfo` du versioning).

## 2026-07-12 — DATA-03 : rationalisation des taxonomies

- Date : `2026-07-12`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : données / gouvernance (effort L)
- Méthode : script de comptage d'usage (`scripts/taxonomy-usage.ts`) exécuté **avant** toute suppression ; `pnpm validate:content` vert après chaque volet.
- Constat : le stock n'était pas « mort » mais **sur-référencé** (presque tout référencé ≥ 1 fois). Le levier réel = les catégories nationales 1:1.
- **TAGS** : 1 orphelin retiré (`oceania`). 551 → 550.
- **INGRÉDIENTS** : 8 orphelins retirés (`fish, spices, porridge, soup, pastry, vegetable, meat, protein`, déjà noindex/hors sitemap). 410 → 402.
- **CATÉGORIES** : **43 catégories spécifiques à un seul pays/localité** retirées (référencées seulement par « leur » pays + recette, redondantes avec la page pays) ; 86 références réécrites ; slugs conservés inchangés. **123 → 80**. Conservé : facettes de style/format transversales, continents, grandes régions.
- Résultat : build **606 pages** (contre 657, −51 pages fines) ; intégrité verte.
- **Reste (éditorial, propriétaire)** pour viser ≤ 60 : arbitrer ~20 facettes transversales/régionales encore fines, fusions d'ingrédients quasi-doublons, doublons de slug catégories — détaillé dans `docs/TAXONOMY_SEO_AUDIT.md` (section « Rationalisation DATA-03 »).
- Vérifications : `pnpm validate:content`, `pnpm typecheck`, `pnpm build` OK.
- **Groupe DATA : DATA-02/03/04/05/06 tous traités.**

## 2026-07-11 — DATA-06 : traduction FR des enums affichés

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : données / UI
- Résumé : fin des valeurs techniques anglaises dans l'UI francophone. `lib/labels.ts` centralise les libellés FR des trois enums (`DifficultyToRecreate`, `IngredientType`, `BreakfastStyle`) avec accès sûr (repli sur la valeur brute).
- Sites corrigés (5) : `app/(site)/ingredients/[slug]` (« Type »), `app/(site)/recipes/[slug]` (« Difficulté »), `app/(site)/countries/[slug]` (« Difficulté maison »), `components/cards/RecipeCard` (badge), `components/cards/IngredientCard` (type). Les valeurs stockées dans `data/` et les types sont inchangés.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` ; HTML généré affiche « Facile », « Protéine »… et **plus aucune** valeur brute (`easy`, `protein`).
- **Groupe DATA (gouvernance) : DATA-02, DATA-04, DATA-05, DATA-06 faits. RESTE DATA-03** (rationalisation des taxonomies, effort L, 1080 entrées) — non entamée, à faire dans une session dédiée (fusions/suppressions massives avec rapport d'intégrité à chaque étape).

## 2026-07-11 — DATA-04 : flag `featured` significatif

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : données / gouvernance
- Constat : 52/53 recettes en `featured: true` → `getFeaturedRecipes` (slice 0,4) mettait en avant les 4 premières par ordre de tableau, par accident.
- Changement : `featured: false` partout sauf **6 recettes choisies pour la diversité** (un continent chacune, parmi les fiches pilote relues) : Ful medames (Égypte), Café Touba (Sénégal), riz-miso (Japon), idli-sambar (Inde du Sud), tartines (France), huevos rancheros (Mexique). `getFeaturedRecipes` : défaut `limit` 4 → 6 pour que la home reflète le choix complet.
- Vérifications : `pnpm typecheck`, `pnpm build` ; la home affiche exactement ces **6 cartes**. `validate:content` inchangé (pas de slug touché).
- Reste du groupe DATA : DATA-03 (taxonomies, L), DATA-06 (enums FR).

## 2026-07-11 — DATA-02 : unification tags / tagSlugs sur Recipe

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : données / gouvernance
- Constat : `recipe.tagSlugs` (optionnel) n'était **ni affiché ni utilisé** pour du maillage — seulement validé ; `recipe.tags` (affiché via TagBadge) n'était **pas** validé, et 11 de ses valeurs (`healthy`, `hearty`, `quick`, `classic-breakfast`) manquaient dans `data/tags.ts` (affichées en slug brut).
- Décision : `tags` devient le **champ unique** de tags affichables et **validés** ; `tagSlugs` (mort) supprimé.
- Changements : 4 tags ajoutés à `data/tags.ts` (Sain, Copieux, Rapide, Petit-déjeuner classique) pour que tous les `recipe.tags` résolvent (corrige aussi l'affichage de slugs bruts) ; `tagSlugs` retiré du type `Recipe` (commenté) et des **53 fichiers recettes** ; `lib/content-validation.ts` valide désormais `recipe.tags`.
- Vérifications : `pnpm validate:content` **vert** (0 dupliqué, 0 référence manquante), `pnpm lint`, `pnpm typecheck`, `pnpm build` (657 routes).
- Reste du groupe DATA : DATA-03 (taxonomies, L), DATA-04 (`featured`), DATA-06 (enums FR).

## 2026-07-11 — DATA-05 + TOOL-02 + TOOL-01 : validation de contenu, environnement Node, CI

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : tooling / qualité
- **DATA-05** : `scripts/validate-content.ts` (runner `tsx`, ajouté en devDependency) exécute `getContentIntegrityReport()`, affiche un résumé (slugs dupliqués + références manquantes) et `process.exit(1)` si anomalie. Script `pnpm validate:content`. **Il a immédiatement attrapé un vrai bug** : le slug `condensed-milk` était corrompu en `condénsed-milk` dans 4 fiches (accent injecté par un remplacement de sous-chaîne trop large de la passe EDIT-01 `conde`→`condé`) → 4 références cassées. Corrigé (`condénse`→`condense`), re-validation = **0 anomalie**.
- **TOOL-02** : `package.json` gagne `engines.node >=20.9` et `packageManager: pnpm@10.20.0` ; `.nvmrc` = `24` (installé localement, LTS, build prouvé) ; `README.md` réécrit (remplace le template create-next-app trompeur) avec section « Prérequis » + tableau des scripts.
- **TOOL-01** : `.github/workflows/ci.yml` — déclenché sur push `main` et pull_request ; `ubuntu-latest` ; `pnpm/action-setup@v4` (lit `packageManager`), `actions/setup-node@v4` Node 24 + cache pnpm, `pnpm install --frozen-lockfile`, puis `lint`, `typecheck`, `validate:content`, `build`. Pas de déploiement (Vercel s'en charge).
- Vérifications : pipeline CI **simulé en local et vert** (`install --frozen-lockfile`, `lint`, `typecheck`, `validate:content`, `build`) ; YAML valide (`yaml.safe_load`).
- Prochaine action : Sprint 4 terminé. Reste : Sprint 0 (`CODE-03`, `IMG-02`), Sprint 5 (gouvernance données DATA-02/03/04/06), lots de relecture EDIT-01.

## 2026-07-11 — A11Y-01 : focus trap menu mobile, skip-link, prefers-reduced-motion

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : accessibilité
- Résumé : trois correctifs d'accessibilité clavier/mouvement sur le magazine.
- Détails :
  - **Focus trap** (`components/layout/Navbar.tsx`) : à l'ouverture du panneau mobile, le focus part sur le bouton « fermer » ; `Tab`/`Shift+Tab` bouclent entre le premier et le dernier élément focusable du panneau (implémentation maison, aucune dépendance) ; à la fermeture (clic, `×`, `Échap`, overlay), le focus est **restitué au bouton burger** (capturé dans une variable locale pour l'idiomatique du cleanup).
  - **Skip-link** (`app/(site)/layout.tsx`) : lien « Aller au contenu principal » en premier élément focusable, masqué au repos et visible au focus (palette Mocha, `z-[60]` au-dessus de la navbar sticky et de l'overlay), ciblant `#contenu` (wrapper focalisable `tabIndex=-1` autour de `{children}`). L'atelier a déjà le sien (CREATOR-07).
  - **prefers-reduced-motion** (`app/globals.css`) : `scroll-behavior: smooth` déplacé sous `@media (prefers-reduced-motion: no-preference)` ; ajout d'un reset `@media (prefers-reduced-motion: reduce)` neutralisant transitions et animations globalement.
- Parcours clavier de test attendu : `Tab` depuis le haut → skip-link (visible) → `Entrée` saute au contenu ; sur mobile, ouvrir le burger → focus sur « fermer » → `Tab` cycle dans le panneau sans jamais atteindre la page derrière → `Échap` ou `×` referme et rend le focus au burger.
- Vérifications : `pnpm lint` (0 warning), `pnpm typecheck`, `pnpm build` (657 routes) ; skip-link + `id="contenu"` rendus ; CSS compilé contient `prefers-reduced-motion: no-preference` (scroll) et `reduce` (reset).
- Prochaine action : Sprint 4 restant — `TOOL-01` (CI) et `TOOL-02` (Node) ; ou reste du Sprint 0.

## 2026-07-11 — DESIGN-01 / DESIGN-02 : typographie de marque + unification des tokens

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : design / identité
- **DESIGN-01 (typographie)** : fin de l'Arial générique. Paire chargée via `next/font/google` (auto-hébergée, `display: swap`, aucune requête runtime) au **layout racine** : **Fraunces** (titres, caractère éditorial) + **Source Sans 3** (corps, humaniste lisible). Variables `--font-fraunces` / `--font-body` posées sur `<html>` ; `globals.css` applique le corps en `var(--font-body)` et `h1/h2/h3` en `var(--font-fraunces)`, sans toucher aux tailles/graisses Tailwind. Fraunces est désormais la fonte display de **toute la marque** (magazine + atelier) : chargée une seule fois à la racine, le layout `(atelier)` ne la charge plus.
  - Piège évité : le nom de variable `--font-sans` entrait en collision avec le token Tailwind 4 par défaut → renommé `--font-body`.
- **DESIGN-02 (tokens)** : source de vérité unique = les tokens `@theme --color-*` (exposés en `var(--color-*)` par Tailwind 4). Bloc dupliqué `:root { --ma-* }` **supprimé** ; tous les usages (`body`, `html`, `::selection`) réécrits en `var(--color-*)`. Plus aucun hex de palette en dur dans `app/`/`components/` hors des endroits légitimes (définitions `@theme`, générateurs d'images OG, feuille d'impression). Valeurs identiques → **aucun changement de couleur**.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (657 routes) ; `@font-face` Fraunces + Source Sans 3 générés, variables définies, `<html>` porte les deux ; `body{font-family:var(--font-body)}` et `h1,h2,h3{font-family:var(--font-fraunces)}` dans le CSS compilé ; grep `--ma-` = vide.
- Prochaine action : Sprint 4 restant — `A11Y-01` (focus trap menu mobile, skip-link, reduced-motion), `TOOL-01` (CI), `TOOL-02` (Node) ; ou reste du Sprint 0.

## 2026-07-11 — PAGE-02 → PAGE-04 : pages index /categories, /ingredients + 404

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : routing / pages
- Résumé : création des pages index manquantes et d'une 404 de marque, cohérentes avec les breadcrumbs, le sitemap et les route groups.
- **PAGE-02** : `app/(site)/categories/page.tsx` (H1 `SectionHeading`, grille `CategoryCard` triée par nom, metadata + canonical, JSON-LD WebPage + ItemList — modèle `/countries`). Breadcrumb des pages catégories réintégré (`Accueil → Catégories → nom`, le niveau existe désormais). `/categories` ajouté au sitemap.
- **PAGE-03** : décision documentée = **index partiel et assumé**. `app/(site)/ingredients/page.tsx` ne liste que les ingrédients structurants (**≥ 3 contenus liés**, helper `getIngredientsForIndex`) — **118 ingrédients** sur 410, pas la totalité. Cohérent avec le noindex des pages fines (SEO-02). Breadcrumb ingrédient réintégré, `/ingredients` ajouté au sitemap.
- **PAGE-04** : `app/not-found.tsx` — 404 dans l'identité Mocha Mousse (fond `cream`, carte `paper` bordée `oat`, emoji, ton chaleureux « Cette page n'est pas au menu », boutons de repli `/`, `/countries`, `/recipes`). Comme la navbar/footer vivent désormais dans le layout `(site)` et non la racine, la 404 les réintègre elle-même.
- Correction connexe : noms de catégories `Sucre`→`Sucré`, `Sale`→`Salé` (résidus, affichés sur la nouvelle page + le footer).
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (657 routes) ; `/categories` et `/ingredients` générées ; URL inexistante → **HTTP 404** avec navbar + footer + contenu de marque ; sitemap contient `/categories` et `/ingredients`.
- Prochaine action : au choix — reste du Sprint 0 (TOOL-02/CODE-03/IMG-02), Sprint 4 (design/a11y/CI), ou lot pilote 2 de relecture.

## 2026-07-11 — SEO-04 : image Open Graph par défaut de marque — Sprint 3 SEO terminé

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO
- Résumé : image sociale par défaut de la marque, utilisée en fallback quand une page n'a pas d'image spécifique.
- Détails :
  - `app/og-default/route.tsx` : route handler `next/og` (`force-static`) servant l'image à URL stable `/og-default` (1200×630, fond crème, wordmark « Morning Atlas », motif bol fumant + soleil en palette Mocha Mousse ; aucun asset externe).
  - `lib/seo.ts` : `buildPageMetadata` injecte `DEFAULT_OG_IMAGE` en fallback (og:image + twitter `summary_large_image`) ; option `skipDefaultImage` pour les segments qui ont leur propre image ; dimensions/type différenciés (marque 1200×630 PNG, image spécifique 1200×900 WebP).
  - `/creator` passe `skipDefaultImage` → garde son image « Atelier » ; `app/layout.tsx` : twitter card racine en `summary_large_image`.
- Décision (doc locale lue) : la convention `opengraph-image` ne se propage pas aux segments enfants qui définissent leur propre `openGraph` → route handler à URL stable + fallback dans `buildPageMetadata`, comme prévu par la tâche.
- Vérification (HTML généré) : og:image présente sur **toutes** les familles — marque (`/og-default`, 630) sur home/about/guides/ingrédients/catégories ; image spécifique WebP (900) sur recettes/pays ; image Atelier sur `/creator`. `pnpm lint/typecheck/build` (655 routes) OK.
- **Sprint 3 — Consolidation SEO (SEO-02 → SEO-06) : terminé** (SEO-02 noindex, SEO-03 JSON-LD Recipe, SEO-04 OG marque, SEO-05 title template, SEO-06 sitemap lastModified).
- Prochaine action : au choix — reste du Sprint 0 (TOOL-02/CODE-03/IMG-02), pages index (PAGE-02→04), lot pilote 2 de relecture, ou Sprint 4.

## 2026-07-11 — SEO-03 : enrichissement du JSON-LD Recipe

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO
- Résumé : `buildRecipeJsonLd` expose désormais les temps, portions, catégorie et mots-clés (données déjà présentes), pour déclencher les rich results recettes.
- Détails (`lib/structured-data.ts`) : `prepTime`/`totalTime` en ISO 8601 (`PT{n}M`), `cookTime` seulement si > 0, `recipeYield` (`"1 portion"` / `"N portions"`), `recipeCategory` = `recipe.type`, `keywords` = labels des tags résolus via `getTagsBySlugs`. **Aucun champ inventé** (pas de nutrition, note, auteur ni date).
- Correction connexe : labels de tags `Matin sucre`→`Matin sucré`, `Matin sale`→`Matin salé` (résidus DATA-01, désormais lus par Google via `keywords`).
- Vérification (HTML généré, `/recipes/tartines`) : `prepTime "PT5M"`, `totalTime "PT5M"` (cook 0 → pas de `cookTime`), `recipeYield "1 portion"`, `recipeCategory "Tartine sucrée"`, `keywords "Matin sucré, Facile à la maison, Confort, Petit-déjeuner traditionnel"`. `pnpm lint/typecheck/build` OK.
- **Sprint 3 SEO (SEO-02 → SEO-06) : SEO-02, SEO-03, SEO-05, SEO-06 faits ; reste SEO-04 (OG par défaut).**
- Prochaine action : **SEO-04**.

## 2026-07-11 — SEO-05 : title template global

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO
- Résumé : centralisation du suffixe « — Morning Atlas » via un `title.template` racine, suppression des suffixes concaténés à la main.
- Détails :
  - `app/layout.tsx` : `title: { default: 'Morning Atlas — Petits-déjeuners du monde', template: '%s — Morning Atlas' }`.
  - `lib/seo.ts` : `buildPageMetadata` reçoit un titre **nu** (le `<title>` du document s'appuie sur le template) ; option `titleAbsolute` pour la home ; les titres OG/Twitter portent la marque en toutes lettres (`brandedTitle`).
  - Suffixes « — Morning Atlas » retirés des titres de pages (about, recipes, countries, guides, creator, fiches pays/recettes/catégories/ingrédients + fallbacks « introuvable »). Home en titre absolu.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (654 routes) ; `<title>` rendus sans double suffixe — accueil « Morning Atlas — Petits-déjeuners du monde », about « À propos — Morning Atlas », pays « Ful Medames … — Morning Atlas », recette « Tartines beurre-confiture — Morning Atlas », créateur « À propos du créateur — Morning Atlas ».
- Prochaine action : **SEO-03** (enrichir le JSON-LD Recipe).

## 2026-07-11 — SEO-06 : sitemap avec lastModified + exclusions pilotées

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO
- Résumé : ajout de `lastModified` sur toutes les entrées du sitemap ; l'exclusion des ingrédients faibles est déjà pilotée par les données (fait en SEO-02, plus aucune liste en dur).
- Détails : `app/sitemap.ts` émet `lastModified = new Date()` (date de build, honnête pour un SSG redéployé à chaque changement) sur les 611 entrées.
- Vérification (via `pnpm start` + `curl /sitemap.xml`) : **611 URLs, 611 avec `<lastmod>`** ; 376 ingrédients (410 − 34 sous le seuil) ; `/creator` présent, `/creator/cv` absent. Delta vs ancien sitemap : la liste en dur excluait 33 slugs (→ 377), le seuil dynamique en exclut 34 (→ 376) — un ingrédient de plus correctement retiré.
- Prochaine action : **SEO-05** (title template global).

## 2026-07-11 — SEO-02 : noindex des pages ingrédients pauvres (seuil piloté par les données)

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO
- Résumé : les pages ingrédients reliant ≤ 1 contenu passent en `noindex` (elles restent accessibles et maillées), et la liste d'exclusion sitemap en dur (33 slugs) est remplacée par un seuil calculé depuis les données, partagé entre `generateMetadata` et le sitemap.
- Détails :
  - `lib/content-helpers.ts` : `getIngredientContentScore(slug)` (pays + recettes liés), `isIngredientIndexable(slug)` (score ≥ `INGREDIENT_INDEXABLE_MIN_CONTENT` = 2).
  - `app/(site)/ingredients/[slug]/page.tsx` : `robots: { index: false, follow: true }` quand la page n'est pas indexable.
  - `app/sitemap.ts` : suppression de la liste de 33 slugs en dur ; `getIngredientsIncludedInSitemap` filtre désormais via `isIngredientIndexable` → sitemap et noindex toujours synchronisés.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (654 routes) ; sur le HTML généré, **34 pages ingrédients en noindex** (ex. `kachumbari`), un ingrédient fort (`eggs`) reste indexable.
- Prochaine action : **SEO-06** (sitemap `lastModified` + exclusions pilotées — logique de seuil déjà partagée).

## 2026-07-11 — CREATOR-07 : qualité vitrine (a11y, mouvement, perf) — atelier terminé

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : accessibilité / performance / qualité (espace créateur)
- Résumé : passage qualité final de l'espace « L'Atelier ». Dernière tâche de la refonte créateur (CREATOR-01 → 07 tous faits).
- Corrections / vérifications :
  - **Skip-link** « Aller au contenu » (visible au focus) ajouté au layout atelier + cible `#atelier-content` focalisable (`tabIndex=-1`).
  - **Audit JS client** : `/creator` = 0 composant client ; `/creator/cv` = seul `PrintButton` (toléré). Les deux pages restent statiques.
  - **Contrastes** recalculés sur tout le thème : AA partout, y compris les textes atténués (cream/55 = 5,66:1 sur ink). Aucune correction nécessaire.
  - **Hiérarchie des titres** : un seul `<h1>` par page, `h1 → h2 → h3` sans saut.
  - **prefers-reduced-motion** : confirmé sur la scène SVG et les révélations au scroll (deviennent statiques).
  - `focus-visible` honey déjà en place ; SVG décoratif `aria-hidden`.
- Limite : **Lighthouse non exécutable ici** (ni Chrome ni CLI `lighthouse`). Baseline des qualités mesurées + procédure de mesure documentées dans `docs/CREATOR_ROADMAP.md` (section « Baseline qualité »).
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (654 routes) ; skip-link rendu sur `/creator`.
- **Refonte créateur terminée** : l'espace « L'Atelier » est isolé (route groups), au thème sombre inversé avec Fraunces, scène SVG sans JS, récit en timeline, CV web imprimable, SEO Person + OG, et exemplaire côté a11y/perf.
- Prochaine action : reprendre la roadmap magazine — Sprint 1 restant du Sprint 0 (`TOOL-02`, `CODE-03`, `IMG-02`) ou lot pilote 2 (EDIT-01), au choix.

## 2026-07-11 — CREATOR-06 : SEO de l'espace créateur

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : SEO (espace créateur)
- Résumé : données structurées, metadata et image sociale dédiées à `/creator`.
- Détails :
  - `lib/structured-data.ts` : nouveau `buildPersonProfileJsonLd()` → `ProfilePage` avec `mainEntity` `Person` (`name`, `jobTitle`, `url`, `sameAs`). Uniquement des champs réels ; `sameAs` = LinkedIn depuis `data/creator.ts`. Branché sur `/creator`.
  - Image Open Graph dédiée : `app/(atelier)/creator/opengraph-image.tsx` via `next/og` (`ImageResponse`, 1200×630, générée au build) — fond `ink`, wordmark « Fabrice Huet » / « L'Atelier », esquisse blueprint honey, aucun asset externe. Twitter card passée en `summary_large_image`.
  - Sitemap : `/creator` ajouté (`priority 0.5`) ; `/creator/cv` reste hors sitemap et en `noindex`.
- Décisions (doc locale Next lue avant) : image via la convention de fichier `opengraph-image` (statique au build) plutôt qu'un asset manuel ; couleurs de marque en littéral dans le générateur d'image (pas d'accès au CSS).
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (654 routes, OG image générée) ; HTML `/creator` = JSON-LD `ProfilePage`/`Person` correct (`sameAs` LinkedIn) + `og:image` 1200×630 + `twitter:card summary_large_image` ; `/creator/cv` toujours `noindex` et absent du sitemap.
- Prochaine action : **CREATOR-07** (qualité vitrine : a11y, reduced-motion, budget perf, baseline Lighthouse) — dernière tâche de l'atelier.

## 2026-07-11 — CREATOR-05 : CV web imprimable + e-mail canonique

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : contenu / design (espace créateur)
- Résumé : migration du CV legacy `docs/cv.html` vers une page `/creator/cv` imprimable, alimentée par `data/creator.ts` (source unique). `docs/cv.html` supprimé.
- Détails :
  - `app/(atelier)/creator/cv/page.tsx` : CV dans le thème Atelier à l'écran (résumé, objectif, expérience + parcours, compétences techniques, compétences transverses, langues, coordonnées). `robots: { index: false }` ; absent du sitemap.
  - Contenu du CV migré dans `data/creator.ts` : ajout `objective`, `location`, `phone`, `creatorSoftSkills`, `creatorLanguages` ; enrichissement des `highlights` d'Agence Référence avec des faits réels du CV (Pixalione SEO, Contentsquare UX, Next.js 10→15).
  - Feuille `@media print` (globals.css) : A4, noir sur blanc, thème sombre neutralisé, header/footer atelier et boutons masqués, `break-inside: avoid` sur les blocs, `@page { size:A4; margin:14mm }`.
  - `components/creator/PrintButton.tsx` : seul composant client de l'atelier (`window.print()`).
  - Boutons portfolio mis à jour : « Voir le CV » / « Consulter le CV » → `/creator/cv` ; « Télécharger le PDF » affiché seulement si `public/files/fabrice-huet-cv.pdf` existe (`existsSync`).
- **Décision e-mail tranchée** : e-mail canonique = `huet.fabrice@icloud.com` (remplace le gmail partout ; plus aucun gmail dans le code).
- Limite assumée : le **PDF n'est pas généré automatiquement** (pas de dépendance headless ajoutée). Procédure de génération manuelle documentée dans `docs/CREATOR_ROADMAP.md` ; le fichier `public/files/fabrice-huet-cv.pdf` reste à produire par Fabrice.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (653 pages, `/creator/cv` incluse) ; CV rendu avec tout le contenu migré ; noindex présent ; zéro gmail ; `docs/cv.html` supprimé.
- Prochaine action : **CREATOR-06** (SEO de l'espace : JSON-LD Person, metadata, OG dédiée).

## 2026-07-11 — CREATOR-04 : le récit du portfolio (timeline, compétences, projets)

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : contenu / design (espace créateur)
- Résumé : transformation des sections de `/creator` en récit de portfolio, avec restructuration de `data/creator.ts`.
- Détails :
  - **Parcours en timeline verticale** (rail honey, jalons) : les 3 expériences dev datées + la reconversion assumée comme jalons (`kind: dev | formation | avant`) — Wild Code School, ADMR Les Maisonnées, expériences commerciales. Aucune date inventée pour les jalons non datés.
  - **Compétences reformulées en 4 blocs orientés bénéfice** (« Interfaces accessibles et responsives », « Performance & SEO technique », « Intégration back-office », « Qualité & outillage »), avec les technologies existantes en second niveau.
  - **Projets avec métriques réelles** vérifiées dans le repo : Morning Atlas → « 652 pages statiques », « 53 pays documentés », « JSON-LD & SEO technique ».
  - **Animations d'apparition au scroll en CSS pur** : `@supports (animation-timeline: view())` + `prefers-reduced-motion: no-preference` ; fallback = éléments visibles. Aucune bibliothèque JS.
- Contraintes respectées : français accentué ; aucune invention (dates/chiffres/clients) ; aucune dépendance ajoutée ; magazine non touché ; page toujours 100 % serveur (0 JS client).
- **À trancher par Fabrice** : e-mail canonique — `data/creator.ts` porte `fabrice.huet.01@gmail.com` (marqué d'un TODO), alors que le compte est en icloud. Non tranché (pas d'arbitrage arbitraire).
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (652 pages) ; HTML `/creator` contient la timeline (Wild Code School, ADMR, « Avant le code »), les 4 blocs bénéfices, les métriques réelles, 26 éléments `atelier-reveal` ; aucun `'use client'`.
- Prochaine action : **CREATOR-05** (CV web imprimable `/creator/cv` + PDF) — dépend de la décision e-mail.

## 2026-07-11 — CREATOR-03 : scène SVG maison, retrait de three.js

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : design / performance (espace créateur)
- Résumé : remplacement de la scène décorative WebGL `three.js` par une scène SVG « blueprint » dessinée main, animée en CSS pur, et suppression de la dépendance `three`.
- Détails :
  - Nouveau `components/creator/AtelierScene.tsx` : **composant serveur** (aucun `'use client'`), SVG inline original — plan de travail esquissé (écran + lignes de code, tasse de café avec vapeur, croissant, petit globe) en traits fins honey/toast/sage sur fond `espresso`. Aucun asset externe, aucun modèle copié.
  - Animations CSS pures : tracé progressif des contours (`stroke-dasharray`/`stroke-dashoffset` via `pathLength=1`, apparition échelonnée) et vapeur en boucle lente. `@media (prefers-reduced-motion: reduce)` → scène complète et statique.
  - `components/creator/CreatorScene.tsx` (WebGL) supprimé ; `three` + `@types/three` retirés via `pnpm remove` ; plus aucun import three dans le repo.
- Impact perf : `/creator` redevient une page statique sans chunk JS spécifique (le bundle `three` ~700 kB disparaît) ; le visuel ne charge plus **aucun JS client** — cohérent avec le discours performance du CV.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (652 pages) ; `package.json` dependencies = next/react/react-dom uniquement ; aucun chunk `three` dans `.next` ; HTML `/creator` contient la scène (`atelier-scene`, `atelier-draw`, `atelier-steam`) ; aucun `'use client'` dans les composants de l'atelier.
- Reste sur l'atelier : CREATOR-04 (récit : timeline, compétences, projets), CREATOR-05 (CV web + PDF), CREATOR-06 (SEO Person), CREATOR-07 (qualité vitrine).
- Prochaine action : **CREATOR-04**.

## 2026-07-11 — CREATOR-02 : thème « L'Atelier » (palette inversée + typographie)

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : design (espace créateur)
- Résumé : application du thème « L'Atelier » — la marque Morning Atlas en polarité inversée — au layout `(atelier)` et à la page `/creator`, plus une typographie display dédiée via `next/font`.
- Détails :
  - Thème sombre : fond `ink`, texte `cream`, accent `honey`, surfaces `espresso`, bordures `mocha/25` — uniquement les 10 tokens existants, aucun hex en dur, aucune couleur nouvelle. Magazine (`(site)`) non touché.
  - Typographie : **Fraunces** chargée via `next/font/google` (auto-hébergée, variable CSS `--font-fraunces`), appliquée aux titres de l'atelier via une règle scopée `.atelier :is(h1,h2,h3)` dans `globals.css`. Le corps garde la pile du site.
  - Header/footer de l'atelier restylés (accent honey), et la page `/creator` recolorée pour le thème sombre (eyebrows honey, titres cream, cartes `espresso`, CTA principal `honey` sur texte `ink`).
  - Accessibilité : `focus-visible` avec anneau `honey` (règle scopée `.atelier`).
- Décisions (doc locale `next/font` lue avant) : fonte exposée en variable CSS et appliquée par sélecteur scopé plutôt que globalement, pour n'affecter que l'atelier.
- Contrastes WCAG vérifiés (AA texte partout) : cream/ink 16:1, cream/espresso 13,5:1, honey/ink 8,3:1, honey/espresso 7:1.
- Vérifications : `pnpm lint`, `pnpm typecheck`, `pnpm build` (652 pages, Fraunces récupérée au build) ; HTML `/creator` = wrapper `.atelier` + `bg-ink` + variable Fraunces + `@font-face` auto-hébergé ; accueil magazine = 0 occurrence `atelier`/`fraunces`.
- Reste sur l'atelier : CREATOR-03 (scène SVG maison + retrait de three.js), CREATOR-04 (récit : timeline, compétences, projets), CREATOR-05 (CV web + PDF).
- Prochaine action : **CREATOR-03**.

## 2026-07-11 — CREATOR-01 : isolation de l'espace créateur (route groups)

- Date : `2026-07-11`
- Branche : `main`
- Commit : `TODO`
- Type de tâche : architecture, routing (espace créateur)
- Résumé : séparation de l'espace créateur du magazine via deux route groups Next, sans changer aucune URL. C'est le premier pas de la refonte « L'Atelier » (remplace l'ancienne PAGE-01).
- Structure :
  - `app/(site)/` : toutes les routes du magazine (`page.tsx`, `about/`, `countries/`, `recipes/`, `categories/`, `ingredients/`, `guides/`) + `app/(site)/layout.tsx` qui porte `Navbar` + `Footer`.
  - `app/(atelier)/creator/` : la page créateur + `app/(atelier)/layout.tsx` dédié (mini-header « L'Atelier » / « Fabrice Huet » + lien « ← Morning Atlas », footer une-ligne ; style sobre provisoire, le thème sombre arrive en CREATOR-02).
  - `app/layout.tsx` racine réduit au strict commun : `<html lang="fr">`, `<body>`, `globals.css`, metadata de base, JSON-LD globaux (`WebSite` + `Organization`). Plus de `Navbar`/`Footer` au niveau racine.
  - Fichiers spéciaux inchangés à la racine `app/` : `robots.ts`, `sitemap.ts`, icônes, `globals.css`.
- Décisions (doc locale Next 16 lue avant) : un seul root layout top-level + deux layouts de groupe imbriqués (pas de « multiple root layouts » → pas de full reload). Les parenthèses des groupes n'apparaissent pas dans les URLs.
- Vérifications : `pnpm build` (652 pages, URLs identiques : `/`, `/creator`, `/countries/[slug]`… inchangées) ; HTML généré de `/creator` = 0 navbar magazine + 1 header Atelier ; accueil magazine = navbar présente ; lien « Créateur » toujours uniquement dans le footer magazine, jamais dans la navbar. `pnpm lint`, `pnpm typecheck` OK (après `rm -rf .next` pour purger des types de dev périmés).
- Prochaine action : **CREATOR-02** (thème « Atelier » : palette Mocha Mousse inversée + typographie `next/font`).

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
