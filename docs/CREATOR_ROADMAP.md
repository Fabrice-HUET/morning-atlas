# Roadmap Espace Créateur — « L'Atelier »

> Roadmap dédiée à la partie créateur du site (`/creator`) et au CV de Fabrice Huet.
> Créée le 2026-07-10. Complète `docs/ROADMAP.md` (piste parallèle) et remplace la tâche PAGE-01 de `docs/BACKLOG.md`.

## Intention

L'espace créateur n'est **pas une page du magazine** : c'est le portfolio du développeur qui a construit le magazine. Il doit donc :

1. **Vivre dans une partie distincte du site** — layout dédié, sans la navbar ni le footer du magazine, avec sa propre mini-navigation et un lien discret de retour vers l'atlas. Accessible uniquement via le lien footer « Créateur » (jamais dans la navbar), conformément à la consigne existante.
2. **Avoir un design différent, beaucoup plus frontend** — la page EST la démonstration de compétence. Un recruteur qui l'ouvre doit voir en 10 secondes que son auteur maîtrise le front moderne : typographie soignée, animations pilotées par le scroll, micro-interactions, et un Lighthouse irréprochable.
3. **Rester dans la direction artistique de Morning Atlas** — même famille de couleurs Mocha Mousse, mais traitement inversé. C'est la même marque, vue depuis les coulisses.

## Direction artistique : « L'Atelier »

**Concept.** Morning Atlas est le magazine du matin : fonds crème (`cream #fff6ea`, `paper #fffdf8`), lumière, éditorial. L'espace créateur est **l'atelier, la nuit d'avant** : là où le site se fabrique. Même palette, polarité inversée.

| Rôle | Magazine (site public) | Atelier (espace créateur) |
| --- | --- | --- |
| Fond | `cream` / `paper` | `ink #261812` / `espresso #3a241c` |
| Texte | `espresso` / `ink` | `cream` / `paper` |
| Accent principal | `toast` / `mocha` | `honey #e7a93b` (la lampe de l'atelier) |
| Accents secondaires | `honey`, `sage`, `berry` | `sage`, `toast`, `berry` (touches rares) |
| Cartes | `paper` bordé `oat` | surfaces `espresso` relevées, bordures `mocha/25` |
| Ton | chaleureux, éditorial | précis, artisanal, « behind the scenes » |

**Règles.**
- Aucune nouvelle couleur : uniquement les 10 tokens existants de `app/globals.css`. L'inversion suffit à créer la rupture.
- Aucune dépendance JS ajoutée pour le visuel. La démonstration frontend se fait avec la plateforme : CSS scroll-driven animations, `@property`, View Transitions, SVG animé. **`three` est retiré** (~700 kB de JS pour une scène décorative, c'est l'inverse du message « performance » que porte le CV).
- `prefers-reduced-motion` respecté partout : chaque animation a un état statique digne.
- Typographie dédiée via `next/font` : une display à caractère (ex. Fraunces) pour les titres de l'atelier, la fonte de labeur du site pour le corps. Si DESIGN-01 (fonte de marque du magazine) est fait avant, s'aligner sur son choix de fonte de corps.
- Le fil rouge visuel : un **motif de plan/blueprint** — traits fins `honey` sur fond `espresso`, comme les esquisses d'un carnet d'atelier. C'est original, dans l'univers « carnet de voyage » de la marque, et ça se dessine en SVG maison (aucun asset copié).

## Architecture cible

```
app/
  (site)/            ← tout le site actuel (layout : Navbar + Footer magazine)
    layout.tsx
    page.tsx, countries/, recipes/, categories/, ingredients/, guides/, about/
  (atelier)/         ← espace créateur (layout dédié, sombre)
    layout.tsx       ← mini-header Atelier + retour atlas, PAS de Navbar/Footer magazine
    creator/
      page.tsx       ← portfolio (hero, parcours, compétences, projets)
      cv/
        page.tsx     ← CV web imprimable (remplace docs/cv.html)
app/layout.tsx       ← racine minimale (html, body, fonts, JSON-LD global)
public/files/fabrice-huet-cv.pdf   ← PDF réel téléchargeable
```

Points de vigilance : ce repo tourne sur **Next 16.2.9 dont les conventions peuvent différer** — toute tâche touchant aux route groups, layouts, metadata ou fonts doit commencer par lire la doc locale `node_modules/next/dist/docs/`.

## Contenu cible de `/creator`

1. **Hero « L'Atelier »** — wordmark, phrase d'accroche, scène SVG animée maison (bureau esquissé en traits blueprint : écran, tasse, croissant, globe — clin d'œil aux primitives de l'ancienne scène three.js, redessinées à plat).
2. **Le parcours** — timeline verticale scroll-animée : Agence Référence → StudioLabs → Bucéphale → reconversion (Wild Code School, ADMR, commerce). La trajectoire atypique est un atout narratif, pas une note de bas de page.
3. **Ce que je fais** — les 4 groupes de compétences existants, reformulés en bénéfices (« Interfaces accessibles », « SEO technique », …) avec les tags en second niveau.
4. **Projets** — Morning Atlas en tête (avec 2-3 métriques réelles du repo : 652 pages statiques, JSON-LD, 53 pays), puis sites pro et outils internes.
5. **Contact + CV** — un seul email canonique, LinkedIn, bouton vers `/creator/cv` et téléchargement PDF.

## Tâches ordonnées

L'ordre est strict : chaque tâche dépend de la précédente sauf mention contraire. Prérequis global : **CODE-01** (le chantier creator actuel doit être committé sur une branche avant d'être refondu).

| ID | Tâche | Effort | Dépend de |
| --- | --- | --- | --- |
| CREATOR-01 | Isoler l'espace créateur (route groups + layout dédié) | M | CODE-01 |
| CREATOR-02 | Thème « Atelier » : tokens inversés + typographie next/font | M | CREATOR-01 |
| CREATOR-03 | Hero : scène SVG/CSS maison, retrait de three.js | M | CREATOR-02 |
| CREATOR-04 | Refonte du contenu en récit (timeline, compétences, projets) | M | CREATOR-02 |
| CREATOR-05 | CV web imprimable `/creator/cv` + PDF public | L | CREATOR-02 |
| CREATOR-06 | SEO de l'espace : JSON-LD Person, metadata, OG dédiée | S | CREATOR-04 |
| CREATOR-07 | Qualité vitrine : a11y, reduced-motion, budget perf | S | CREATOR-03 → 05 |

---
### [CREATOR-01] Isoler l'espace créateur : route groups et layout dédié
- **Priorité :** P1
- **Effort :** M
- **Dépend de :** CODE-01 (chantier creator committé)
- **Pourquoi :** Aujourd'hui `/creator` hérite de la Navbar et du Footer du magazine : impossible d'avoir un design réellement distinct. Les route groups permettent deux layouts frères sans changer aucune URL.
- **Critères d'acceptation :**
  - Toutes les pages du magazine vivent sous `app/(site)/` avec un layout qui porte Navbar + Footer ; `/creator` vit sous `app/(atelier)/creator/` avec un layout dédié (mini-header « L'Atelier » + lien retour vers l'atlas, footer minimal propre).
  - `app/layout.tsx` racine réduit au strict commun : `<html lang="fr">`, body, globals.css, metadata de base, JSON-LD global.
  - **Aucune URL ne change** (les route groups n'affectent pas les chemins) ; les 652 pages buildent toujours ; navbar et footer du magazine inchangés visuellement ; le lien « Créateur » reste uniquement dans le footer du magazine.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas ». ATTENTION : Next 16.2.9, dont les conventions peuvent différer de ce que tu connais — lis d'abord `AGENTS.md` puis la doc locale `node_modules/next/dist/docs/` sur les route groups et les layouts imbriqués avant d'écrire du code. Contexte : `app/layout.tsx` rend actuellement `<Navbar />` et `<Footer />` autour de toutes les pages, y compris `app/creator/page.tsx` qui doit devenir un espace visuellement indépendant. Mission : 1) crée deux route groups — déplace toutes les routes du magazine (`page.tsx`, `about/`, `countries/`, `recipes/`, `categories/`, `ingredients/`, `guides/`) dans `app/(site)/` avec un `app/(site)/layout.tsx` qui porte Navbar + Footer ; déplace `app/creator/` dans `app/(atelier)/creator/` avec un `app/(atelier)/layout.tsx` dédié (pour l'instant : un `<header>` minimal avec le mot « L'Atelier », le nom « Fabrice Huet » et un lien « ← Morning Atlas » vers `/`, plus un `<footer>` d'une ligne ; style sobre provisoire, le thème arrive dans une tâche suivante) ; 2) allège `app/layout.tsx` racine (html, body, globals.css, metadata, JSON-LD globaux — vérifie où `robots.ts`, `sitemap.ts` et les fichiers icônes doivent rester selon la doc locale) ; 3) vérifie qu'AUCUNE URL ne change (les groupes entre parenthèses ne créent pas de segment). Contraintes : ne modifie ni le contenu des pages, ni le design du magazine, ni les données ; le lien « Créateur » reste uniquement dans le footer du magazine, jamais dans la navbar. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build` (652 pages attendues), et liste les routes générées pour prouver que les chemins sont inchangés.
---
### [CREATOR-02] Thème « Atelier » : palette inversée et typographie dédiée
- **Priorité :** P1
- **Effort :** M
- **Dépend de :** CREATOR-01
- **Pourquoi :** La rupture visuelle demandée (« design différent, plus frontend ») se construit sur deux fondations : l'inversion de la palette Mocha Mousse (fonds `ink`/`espresso`, texte `cream`, accent `honey`) et une typographie display via `next/font`. Sans elles, les tâches suivantes n'ont pas de socle.
- **Critères d'acceptation :**
  - Le layout `(atelier)` applique le thème sombre : fond `ink`, texte `paper`/`cream`, accent `honey` — uniquement avec les 10 tokens existants de `app/globals.css`, aucune couleur nouvelle, aucun hex en dur dans les composants.
  - Une fonte display (recommandation : Fraunces) chargée via `next/font` (doc locale à vérifier), appliquée aux titres de l'atelier uniquement ; le magazine n'est pas affecté.
  - Le mini-header et le footer de l'atelier sont stylés dans ce thème ; états focus visibles (`focus-visible` avec anneau `honey`).
  - Contrastes AA vérifiés (texte `cream` sur `ink` et `espresso`, `honey` réservé aux gros titres/éléments non textuels si le ratio est insuffisant).
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16.2.9 — lis `AGENTS.md` puis la doc locale `node_modules/next/dist/docs/` sur next/font avant de coder). Contexte : l'espace créateur vit dans `app/(atelier)/` avec son propre layout (créé par une tâche précédente — vérifie l'état réel). La palette de marque est dans `app/globals.css` : `mocha #a47864, cream #fff6ea, oat #e8d8c3, toast #c9895b, espresso #3a241c, honey #e7a93b, sage #8fae8b, berry #b95c50, paper #fffdf8, ink #261812` (Tailwind 4, tokens `@theme`). Mission : créer le thème « Atelier » = la même marque, polarité inversée. 1) Style le layout `(atelier)` : fond `ink`, texte `paper`, accent `honey`, surfaces `espresso` pour les cartes, bordures `mocha/25` — n'utilise QUE ces tokens via les classes Tailwind existantes (`bg-ink`, `text-cream`…), aucun hex en dur, aucune couleur nouvelle. 2) Charge la fonte display « Fraunces » via `next/font/google` dans le layout `(atelier)` uniquement, exposée en variable CSS, appliquée aux headings de l'atelier ; le corps de texte garde la pile actuelle du site. 3) Soigne le mini-header (wordmark « L'Atelier », lien retour « ← Morning Atlas ») et le footer une-ligne dans ce thème ; ajoute des états `focus-visible` avec anneau `honey` sur tous les éléments interactifs. 4) Vérifie les contrastes WCAG AA : `cream` sur `ink` et sur `espresso` pour le texte courant ; si `honey` sur `ink` est sous 4.5:1, réserve `honey` aux titres ≥ 24px et aux éléments décoratifs. Contraintes : ne touche à AUCUN fichier du magazine (`app/(site)/`, composants existants hors creator) ; pas de nouvelle dépendance ; `prefers-reduced-motion` n'est pas concerné ici (pas d'animation dans cette tâche). Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [CREATOR-03] Hero « L'Atelier » : scène SVG/CSS maison, retrait de three.js
- **Priorité :** P1
- **Effort :** M
- **Dépend de :** CREATOR-02
- **Pourquoi :** La scène three.js actuelle coûte ~700 kB de JS pour un rendu décoratif — l'inverse du message « performance » du CV, et un concept trop proche de l'univers craftzdog. La remplacer par une scène SVG « blueprint d'atelier » animée en CSS pur : plus originale, dans la marque, 0 kB de JS.
- **Critères d'acceptation :**
  - `components/creator/CreatorScene.tsx` (WebGL) supprimé ; `three` et `@types/three` retirés de `package.json` via `pnpm remove` ; plus aucun import three dans le repo.
  - Nouveau hero : scène SVG originale dessinée à la main (traits fins `honey`/`toast` sur fond `espresso`, style esquisse de carnet : écran, tasse fumante, croissant, globe), animée en CSS (tracé progressif `stroke-dasharray`, vapeur du café en boucle lente) — aucun asset externe, aucun modèle copié.
  - `@media (prefers-reduced-motion: reduce)` : la scène s'affiche complète et statique.
  - Le hero porte le H1 « À propos du créateur » (consigne conservée), l'accroche et les CTA (CV, contact).
  - `pnpm lint && pnpm typecheck && pnpm build` passent ; la page `/creator` ne charge plus aucun JS client pour le visuel.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16.2.9 — lis `AGENTS.md` d'abord). Contexte : l'espace créateur vit dans `app/(atelier)/creator/` avec le thème « Atelier » (fond `ink`, texte `paper`, accent `honey` — tokens dans `app/globals.css`). Le hero actuel utilise `components/creator/CreatorScene.tsx`, une scène WebGL three.js décorative : c'est trop lourd et hors stratégie. Mission : 1) supprime `CreatorScene.tsx` et retire les dépendances `three` et `@types/three` avec `pnpm remove three @types/three` ; vérifie avec un grep qu'aucun import three ne subsiste. 2) Crée à la place `components/creator/AtelierScene.tsx`, un composant **serveur** (pas de `'use client'`) rendant une scène SVG inline originale que tu dessines toi-même : un plan de travail vu de trois quarts en traits fins (`stroke` `#e7a93b` honey et `#c9895b` toast, `fill` none, fond `#3a241c` espresso), style esquisse de carnet d'atelier — un écran avec quelques lignes de code suggérées, une tasse de café avec vapeur, un croissant, un petit globe. AUCUN asset externe, AUCUN modèle copié, uniquement des primitives SVG que tu composes. 3) Anime en CSS pur dans le SVG (balise `<style>` scopée ou classes globales préfixées `atelier-`) : tracé progressif des contours à l'arrivée (`stroke-dasharray`/`stroke-dashoffset`, ~2s, une seule fois) et vapeur en boucle lente ; sous `@media (prefers-reduced-motion: reduce)`, tout est statique et complet. 4) Recompose le hero de `app/(atelier)/creator/page.tsx` : H1 « À propos du créateur » (obligatoire, ne pas changer), accroche existante de `data/creator.ts`, CTA « Voir le CV » et « Me contacter », scène à droite (empilée en mobile). Contraintes : ne touche pas au magazine ; pas de nouvelle dépendance ; couleurs = tokens de la palette uniquement. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et confirme que `three` a disparu de `package.json` et `pnpm-lock.yaml`.
---
### [CREATOR-04] Refonte du contenu en récit : timeline, compétences, projets
- **Priorité :** P1
- **Effort :** M
- **Dépend de :** CREATOR-02 (peut se faire en parallèle de CREATOR-03)
- **Pourquoi :** Le contenu actuel est une liste de cartes générique. Un portfolio convainc par le récit : une trajectoire (reconversion assumée), des compétences formulées en bénéfices, des projets avec des preuves. C'est aussi l'occasion de corriger l'incohérence d'email et d'enrichir `data/creator.ts`.
- **Critères d'acceptation :**
  - Parcours en timeline verticale (rail `honey`, jalons datés) : les 3 expériences dev + la reconversion (Wild Code School, ADMR, commerce) intégrée comme jalon narratif, pas cachée.
  - Compétences reformulées en 4 blocs orientés bénéfice (interfaces accessibles, performance, SEO technique, outillage/qualité) avec les tags techniques en second niveau.
  - Projets : Morning Atlas en premier avec 2-3 métriques réelles vérifiées dans le repo (ex. 652 pages statiques, 53 pays documentés, JSON-LD complet) ; liens externes des sites pro s'ils sont publics.
  - Un seul email canonique dans `data/creator.ts` (l'incohérence gmail/icloud est signalée à l'utilisateur, pas tranchée arbitrairement).
  - Animations d'apparition au scroll en CSS scroll-driven animations si supporté (`@supports (animation-timeline: view())`), avec fallback statique — pas de bibliothèque JS.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16.2.9 — lis `AGENTS.md` d'abord). Contexte : l'espace créateur `app/(atelier)/creator/page.tsx` est en thème « Atelier » (fond `ink`, texte `paper`, accent `honey`, surfaces `espresso` ; tokens dans `app/globals.css`) ; les données sont dans `data/creator.ts`. Mission — refondre les sections de contenu en récit de portfolio : 1) **Parcours** : remplace les cartes d'expériences par une timeline verticale (rail fin `honey`, jalons ronds, périodes visibles) incluant les 3 expériences dev ET la reconversion (Wild Code School, accompagnement médico-social ADMR, expériences commerciales) comme jalons assumés du récit ; enrichis `data/creator.ts` si besoin (champ `kind: 'dev' | 'formation' | 'avant'` par exemple) sans rien inventer factuellement. 2) **Compétences** : reformule les 4 groupes en bénéfices (« Interfaces accessibles et responsives », « Performance front-end », « SEO technique », « Qualité et outillage ») avec les tags techniques existants en second niveau. 3) **Projets** : Morning Atlas en tête avec 2-3 métriques que tu VÉRIFIES dans le repo avant de les écrire (nombre de pages du build, nombre de pays dans `data/countries.ts`, socle JSON-LD) ; garde les sites professionnels cités. 4) **Contact** : `data/creator.ts` contient `fabrice.huet.01@gmail.com` — signale à l'utilisateur qu'il doit confirmer l'email canonique (ne tranche pas toi-même), et prépare la structure pour un seul email. 5) **Animations** : apparitions au scroll en CSS pur via `@supports (animation-timeline: view())` avec fallback statique sans JS ; respecte `prefers-reduced-motion`. Contraintes : français accentué irréprochable ; aucune invention (dates, chiffres, clients) ; aucune dépendance ; ne touche pas au magazine. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`.
---
### [CREATOR-05] CV web imprimable `/creator/cv` + PDF public
- **Priorité :** P1
- **Effort :** L
- **Dépend de :** CREATOR-02 (indépendant de 03/04)
- **Pourquoi :** Le CV vit aujourd'hui dans `docs/cv.html`, un fichier autonome avec Tailwind CDN et html2pdf — hors du site, non maintenu, non versionné proprement. Le bouton « Télécharger mon CV » pointe vers `/files/fabrice-huet-cv.pdf` qui n'existe pas. Cible : une page `/creator/cv` dans le design Atelier, imprimable en A4 propre via CSS print, qui devient la source unique du CV ; le PDF public est généré depuis cette page.
- **Critères d'acceptation :**
  - Page `app/(atelier)/creator/cv/page.tsx` : contenu du CV (résumé, expériences, compétences, formation, langues/passions — repris de `docs/cv.html`, corrigé et accentué) dans le thème Atelier à l'écran.
  - Feuille `@media print` dédiée : format A4, fond blanc, typographie sobre lisible, marges d'impression, sauts de page maîtrisés (`break-inside: avoid` sur les blocs d'expérience) — le PDF « Imprimer > Enregistrer en PDF » est propre sur 1-2 pages.
  - Données du CV centralisées dans `data/creator.ts` (mêmes objets que la page portfolio — une seule source de vérité), étendues si nécessaire.
  - `public/files/fabrice-huet-cv.pdf` présent (généré via impression de la page ; la procédure de régénération est documentée en commentaire ou dans ce fichier de roadmap) ; les boutons CV du portfolio pointent vers `/creator/cv` (consultation) et vers le PDF (téléchargement).
  - `docs/cv.html` supprimé après migration validée.
  - `pnpm lint && pnpm typecheck && pnpm build` passent.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16.2.9 — lis `AGENTS.md` d'abord). Contexte : l'espace créateur vit dans `app/(atelier)/creator/` (thème « Atelier » : fond `ink`, texte `paper`, accent `honey`) ; les données du profil sont dans `data/creator.ts` ; un CV HTML legacy existe dans `docs/cv.html` (Tailwind CDN + html2pdf, à remplacer). Mission : 1) lis intégralement `docs/cv.html` et migre son contenu (résumé, objectif, expériences, compétences, sommaire des compétences, autres expériences, passions & langues) vers `data/creator.ts` en étendant les structures existantes — corrige au passage l'orthographe et les accents, n'invente aucune date ni mission ; ce fichier de données devient la source unique du CV et du portfolio. 2) Crée `app/(atelier)/creator/cv/page.tsx` : à l'écran, le CV dans le thème Atelier (hiérarchie claire, une colonne lisible) ; ajoute un bouton « Imprimer / PDF » (petit composant client isolé appelant `window.print()`) et un lien retour vers `/creator`. 3) Écris une feuille `@media print` dédiée : A4, fond blanc, texte noir/gris foncé, marges ~14mm, masque header/footer/boutons de l'atelier, `break-inside: avoid` sur chaque bloc d'expérience, objectif 1 à 2 pages nettes. 4) Mets à jour les boutons CV de `app/(atelier)/creator/page.tsx` : « Consulter le CV » → `/creator/cv` ; « Télécharger (PDF) » → `/files/fabrice-huet-cv.pdf` avec le garde `existsSync` existant tant que le PDF n'est pas déposé. 5) Ne supprime `docs/cv.html` qu'après avoir confirmé que tout son contenu est migré ; signale dans ta réponse que le PDF doit être généré manuellement (page `/creator/cv` → imprimer → enregistrer dans `public/files/fabrice-huet-cv.pdf`). Contraintes : pas de dépendance PDF (pas de html2pdf/puppeteer), pas de CDN ; français accentué ; metadata de la page avec `robots: { index: false }` (le CV web n'a pas besoin d'être indexé, seul `/creator` l'est — vérifie la syntaxe dans la doc locale `node_modules/next/dist/docs/`). Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, et décris le rendu print obtenu (structure des pages).
---
### [CREATOR-06] SEO de l'espace créateur : JSON-LD Person, metadata, image sociale
- **Priorité :** P2
- **Effort :** S
- **Dépend de :** CREATOR-04
- **Pourquoi :** `/creator` est la page que des recruteurs recevront en lien direct : elle mérite un JSON-LD `Person`/`ProfilePage`, des metadata propres et une image Open Graph dédiée au thème Atelier (distincte de l'OG du magazine — cf. SEO-04).
- **Critères d'acceptation :**
  - JSON-LD `ProfilePage` + `Person` (nom, jobTitle, sameAs LinkedIn, url) émis sur `/creator`, construit dans `lib/structured-data.ts` sans rien inventer.
  - Metadata dédiées : title, description, canonical `/creator`, OG/Twitter avec une image 1200×630 « Atelier » (fond `ink`, wordmark, traits blueprint `honey`) créée en local, aucun asset externe.
  - `/creator` présent dans le sitemap ; `/creator/cv` en noindex et absent du sitemap.
  - `pnpm build` passe ; JSON-LD vérifié sur le HTML généré.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16.2.9 — lis `AGENTS.md`, puis la doc locale `node_modules/next/dist/docs/` sur les conventions metadata et opengraph-image avant de coder). Contexte : `app/(atelier)/creator/page.tsx` est le portfolio du créateur (thème sombre « Atelier », données dans `data/creator.ts`) ; les builders JSON-LD vivent dans `lib/structured-data.ts` et les metadata passent par `buildPageMetadata` de `lib/seo.ts`. Mission : 1) ajoute dans `lib/structured-data.ts` un builder `buildPersonProfileJsonLd()` émettant un `ProfilePage` dont `mainEntity` est une `Person` : `name`, `jobTitle` (« Développeur Front-End »), `url` (page /creator absolue), `sameAs` (LinkedIn depuis `data/creator.ts`) — UNIQUEMENT des champs présents dans les données, rien d'inventé (pas d'adresse, pas de date de naissance, pas d'organisation employeuse si non structurée). 2) Branche-le sur la page `/creator` à côté du JSON-LD existant. 3) Crée une image Open Graph 1200×630 dédiée au thème Atelier (convention `opengraph-image` de la doc locale, ou fichier statique) : fond `#261812`, wordmark « Fabrice Huet — L'Atelier », traits d'esquisse `#e7a93b` — dessinée par toi, aucun asset externe. 4) Vérifie le sitemap : `/creator` doit y figurer ; `/creator/cv` doit avoir `robots: { index: false }` et ne pas être dans le sitemap. Contraintes : ne modifie pas les JSON-LD du magazine ; français accentué. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, puis affiche le JSON-LD généré de `/creator` et les balises `og:` rendues.
---
### [CREATOR-07] Qualité vitrine : accessibilité, mouvement, budget perf
- **Priorité :** P2
- **Effort :** S
- **Dépend de :** CREATOR-03, CREATOR-04, CREATOR-05
- **Pourquoi :** Le CV revendique accessibilité et performance : l'espace créateur doit être exemplaire, c'est un argument d'embauche vérifiable en un clic (recruteur tech qui ouvre Lighthouse).
- **Critères d'acceptation :**
  - Zéro JS client sur `/creator` hors du strict nécessaire (le bouton print de `/creator/cv` est le seul composant client toléré).
  - Toutes les animations respectent `prefers-reduced-motion` ; navigation clavier complète (focus visibles, ordre logique, skip-link vers le contenu de l'atelier).
  - Contrastes AA vérifiés sur le thème sombre ; hiérarchie de titres valide (un seul H1 par page).
  - Baseline Lighthouse documentée dans ce fichier (perf/a11y/SEO/best practices) sur `/creator` et `/creator/cv`.
- **Prompt agent (à coller tel quel) :**
> Tu travailles dans le repo Next.js « morning-atlas » (Next 16.2.9 — lis `AGENTS.md` d'abord). Contexte : l'espace créateur (`app/(atelier)/creator/` + `/creator/cv`, thème sombre « Atelier ») est fonctionnellement terminé ; cette tâche est un passage qualité, car la page sert de vitrine des compétences accessibilité/performance de son auteur. Mission : 1) audite le JS client embarqué par `/creator` (`pnpm build` puis lis la taille des bundles de la route) : hors du bouton d'impression du CV, tout doit être composant serveur — refactore si un `'use client'` superflu subsiste. 2) Vérifie systématiquement : `prefers-reduced-motion` sur chaque animation (scène SVG, timeline, apparitions au scroll) ; navigation clavier (ordre de tabulation, `focus-visible` partout, ajoute un skip-link « Aller au contenu » dans le layout atelier) ; un seul H1 par page ; hiérarchie h2/h3 sans trou ; `aria-hidden` sur les SVG décoratifs avec `role="img"` + `<title>` seulement s'ils portent du sens. 3) Vérifie les contrastes du thème sombre (texte `#fff6ea` et `#fffdf8` sur `#261812` et `#3a241c` ; `#e7a93b` sur fond sombre pour le texte : calcule les ratios et corrige si < 4.5:1 pour le texte courant). 4) Si un serveur local est possible, lance Lighthouse (ou explique comment) sur `/creator` et `/creator/cv` et reporte les scores dans `docs/CREATOR_ROADMAP.md` section « Baseline qualité ». Contraintes : aucune dépendance ; aucune régression visuelle volontaire ; ne touche pas au magazine. Validation : `pnpm lint`, `pnpm typecheck`, `pnpm build`, plus le rapport de ce que tu as corrigé.
---

## Baseline qualité

_À remplir par CREATOR-07 (scores Lighthouse /creator et /creator/cv)._

## Décisions actées

- **Séparation par route groups**, pas par sous-domaine ni projet séparé : le portfolio reste dans le repo et bénéficie du même déploiement, mais avec un layout et un thème autonomes.
- **three.js retiré** : la démonstration frontend se fait en CSS/SVG natif (scroll-driven animations, tracé SVG), cohérent avec le discours performance du CV. Décision inverse de l'ancienne scène 3D, assumée.
- **Palette inchangée, polarité inversée** : l'atelier est la face nocturne de la marque, pas une deuxième marque.
- **`docs/cv.html` sera supprimé** une fois son contenu migré vers `data/creator.ts` + `/creator/cv` (CREATOR-05).
- **À trancher par Fabrice** : l'email canonique (gmail dans `data/creator.ts` vs icloud) — bloque CREATOR-04/05 sur ce point précis uniquement.
