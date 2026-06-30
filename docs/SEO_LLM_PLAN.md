# Plan SEO et visibilité IA — Morning Atlas

## Résumé exécutif

Morning Atlas dispose déjà d’un socle éditorial solide : routes App Router statiques, slugs propres, contenus textuels en dur, fiches pays et recettes reliées, champs SEO présents dans les données et page À propos existante.

Le site a désormais un socle SEO technique P0 : `robots.txt`, `sitemap.xml`, canonicals, métadonnées par type de page, Open Graph, Twitter cards, images locales, H1 dédiés sur les pages publiques ciblées et premières données structurées JSON-LD cohérentes avec le contenu visible. Les priorités restantes sont surtout éditoriales et sémantiques : rendre les sources visibles, renforcer le maillage interne et relire les fiches `needsReview`.

Pour Google AI Overviews, AI Mode et les moteurs IA, il n’existe pas de raccourci spécifique fiable. Le socle à renforcer reste le même : pages crawlables, indexables, utiles, sourcées, structurées, avec des réponses claires et des liens internes explicites.

## État actuel

### Mise à jour 2026-06-30 — socle SEO P0

- `app/robots.ts` et `app/sitemap.ts` sont en place pour le domaine `https://morning-atlas.fr`.
- Le sitemap est généré depuis les données locales et couvre l’accueil, les pages statiques publiques, les pays, les recettes, les catégories et les ingrédients.
- Les pages indexables disposent de canonicals explicites via `alternates.canonical`.
- Les métadonnées incluent désormais Open Graph et Twitter cards, avec image sociale locale pour les pages recettes et les pages pays quand une recette associée existe.
- Les pages `/countries`, `/recipes`, `/guides`, `/about`, `/categories/{slug}` et `/ingredients/{slug}` disposent d’un H1 dédié via `SectionHeading`.
- Les données structurées JSON-LD de base sont ajoutées : `WebSite`, `Organization`, `WebPage`, `ItemList`, `BreadcrumbList` et `Recipe`.
- Le JSON-LD reste volontairement minimal : pas de logo, auteur, note, nutrition, calories ou temps de recette tant que ces informations ne sont pas stabilisées pour le balisage.

### SEO technique Next.js

- `metadataBase` existe dans `app/layout.tsx` avec `https://morning-atlas.fr`.
- Une metadata globale existe dans `app/layout.tsx` : titre, description et Open Graph de base.
- `generateMetadata` existe pour les pages dynamiques suivantes :
  - `app/countries/[slug]/page.tsx`
  - `app/recipes/[slug]/page.tsx`
  - `app/categories/[slug]/page.tsx`
  - `app/ingredients/[slug]/page.tsx`
- Les pages statiques principales ont une metadata locale : `/countries`, `/recipes`, `/guides`, `/about`.
- Les URLs sont propres et stables : `/countries/{slug}`, `/recipes/{slug}`, `/categories/{slug}`, `/ingredients/{slug}`.
- `generateStaticParams` existe pour les quatre familles dynamiques.
- `app/favicon.ico` existe.
- `app/sitemap.ts` et `app/robots.ts` existent.
- Les canonicals explicites sont définis via `alternates.canonical`.
- Open Graph existe globalement et par type de page principale.
- Les Twitter cards sont définies globalement et par page.
- Des données structurées JSON-LD existent via `lib/structured-data.ts`.

### Structure des pages

- La page d’accueil possède un H1 via `components/sections/HeroSection.tsx`.
- Les pages pays et recettes dynamiques possèdent un H1.
- `SectionHeading` peut maintenant rendre un H1 ou un H2 selon le contexte ; les pages `/countries`, `/recipes`, `/guides`, `/about`, `/categories/{slug}` et `/ingredients/{slug}` ont un H1 dédié.
- Le contenu principal est textuel et lisible sans dépendre uniquement des images.
- Le maillage existe, mais reste incomplet :
  - navigation globale vers accueil, pays, recettes, guides, à propos ;
  - cartes pays vers pages pays ;
  - cartes recettes vers pages recettes ;
  - pages pays vers recettes associées ;
  - pages recettes vers pays associés ;
  - pages catégories et ingrédients vers pays associés.
- Les catégories et ingrédients affichés sur les fiches pays sont des libellés, pas des liens.
- Les guides liés sur les fiches pays sont affichés comme textes, pas comme liens.
- Il n’existe pas encore de pages individuelles de guides.
- Les pages ingrédients peuvent être difficiles à découvrir sans page index `/ingredients`.

### Données et contenu

- Le projet contient 53 fichiers de recettes modulaires dans `data/recipes/`.
- Les données contiennent 107 occurrences de `seoTitle` et 107 occurrences de `seoDescription`.
- Les données contiennent 107 occurrences de `needsReview: true` et aucune occurrence de `needsReview: false`.
- Les données contiennent 106 blocs `sources`.
- Les sources existent dans les données, mais ne sont pas encore rendues visiblement dans les pages publiques.
- Les champs `longDescription`, `reviewNotes` et `sources` existent dans les types ou les données, mais ne sont pas tous exploités dans l’interface.

### SEO images

- Le composant `BreakfastImage` cherche les images locales dans `/images/breakfasts/{slug}.webp`.
- Les 53 images breakfast WebP locales sont présentes dans `public/images/breakfasts/`.
- Le fallback externe utilise `https://picsum.photos/seed/{slug}/1200/900`.
- Les images utilisent `next/image`, un ratio visuel `4/3` et des attributs `alt`.
- Les textes alternatifs sont présents, mais certains libellés méritent une correction typographique avant publication.
- Le fallback `picsum.photos` est utile techniquement, mais faible éditorialement : il peut afficher une image générique sans cohérence culturelle avec la fiche.

## Risques SEO principaux

- Les pages guides individuelles n’existent pas encore : le potentiel de requêtes informationnelles longues reste sous-exploité.
- Les pages catégories et ingrédients restent assez fines si elles ne sont pas enrichies avec plus de contexte éditorial.
- Les sources ne sont pas encore visibles sur les pages publiques, ce qui limite la confiance éditoriale.
- Toutes les fiches sont encore marquées `needsReview: true`, donc le site ne devrait pas traiter ces contenus comme pleinement publiés.
- Il manque encore une image sociale par défaut dédiée pour les pages sans visuel de recette.
- Les données structurées sont volontairement minimales : les enrichissements avancés devront rester alignés avec le contenu visible.

## Opportunités SEO principales

- Maintenir le sitemap généré depuis les données locales : pays, recettes, catégories, ingrédients et pages statiques.
- Garder les canonicals et métadonnées dynamiques alignés avec les routes réellement indexables.
- Ajouter une image sociale par défaut dédiée pour les pages sans visuel de recette.
- Afficher les sources en bas des fiches pays et recettes.
- Étendre les données structurées uniquement quand le contenu visible le justifie.
- Transformer les libellés de catégories, ingrédients et guides associés en liens internes.
- Ajouter des images locales cohérentes, nommées `{slug}.webp`.
- Créer des pages individuelles de guides pour cibler les requêtes comparatives.
- Renforcer la page À propos avec méthode éditoriale, limites, sources, statut de relecture et responsabilité éditoriale.
- Ajouter des encadrés courts de type “À retenir” pour rendre les pages plus citables par les moteurs IA.

## Checklist technique

- [x] Ajouter `app/robots.ts` ou `app/robots.txt`.
- [x] Ajouter `app/sitemap.ts` avec toutes les URLs indexables.
- [x] Définir les canonicals via `alternates.canonical`.
- [x] Ajouter une stratégie Open Graph par type de page.
- [x] Ajouter les Twitter cards.
- [x] Vérifier que toutes les pages publiques indexables ont un H1 unique.
- [ ] Vérifier que les pages non publiques ou documents internes ne sont pas exposés involontairement.
- [ ] Vérifier les statuts HTTP des pages introuvables via `notFound()`.
- [ ] Vérifier le rendu HTML serveur des contenus principaux.
- [ ] Vérifier les performances image après ajout des `.webp`.
- [ ] Vérifier le domaine final avant publication : `metadataBase` doit correspondre au domaine réellement utilisé.

## Checklist éditoriale

- [ ] Corriger les titres et descriptions non accentués dans les données avant publication.
- [ ] Valider chaque fiche `needsReview: true` avant de la considérer publiable.
- [ ] Afficher les sources visibles sur les fiches pays et recettes.
- [ ] Ajouter une phrase de contexte culturel claire en haut de chaque fiche.
- [ ] Éviter les généralisations nationales trop fortes.
- [ ] Ajouter des formulations prudentes quand les pratiques varient selon régions, familles ou contextes.
- [ ] Utiliser les champs `longDescription` lorsqu’ils apportent une vraie valeur.
- [ ] Prévoir un bloc court “À retenir” sur les pages pays et recettes.
- [ ] Ajouter une mention claire de méthode éditoriale sur la page À propos.
- [ ] Garder des titles et descriptions uniques, utiles et non sur-optimisés.

## Checklist images

- [x] Créer `public/images/breakfasts/`.
- [x] Ajouter les images locales au format `{slug}.webp`.
- [x] Vérifier que chaque slug de recette correspond à une image.
- [ ] Éviter les images génériques ou culturellement incohérentes.
- [ ] Corriger les `alt` pour utiliser une typographie française propre.
- [ ] Vérifier le ratio `4/3` sur mobile, tablette et desktop.
- [ ] Éviter de publier durablement avec `picsum.photos` comme fallback visible.
- [x] Ajouter les images principales dans les métadonnées Open Graph.
- [x] Ajouter les images dans les données structurées `Recipe` quand elles existent.
- [ ] Ajouter des images aux `WebPage` seulement si une stratégie fiable est décidée pour chaque type de page.
- [ ] Envisager un sitemap image après stabilisation des visuels.

## Checklist données structurées

- [x] Ajouter `WebSite` globalement.
- [x] Ajouter `Organization` pour l’entité Morning Atlas, sans logo inventé.
- [x] Ajouter `BreadcrumbList` sur les pages pays, recettes, catégories et ingrédients.
- [x] Ajouter `Recipe` sur les pages recettes, uniquement avec les informations visibles sur la page.
- [x] Ajouter `ItemList` sur les pages listes : pays et recettes.
- [x] Ajouter `WebPage` sur l’accueil, À propos, pays, recettes, guides, pages pays, catégories et ingrédients.
- [ ] Ajouter `Article` uniquement si les guides deviennent de vraies pages éditoriales avec contenu substantiel.
- [x] Ne pas ajouter de propriétés JSON-LD qui ne correspondent pas au contenu visible.
- [ ] Valider avec le Rich Results Test et le Schema Markup Validator.
- [ ] Surveiller les rapports Search Console après déploiement.

## Plan d’action court terme

1. Rendre les sources visibles sur les fiches pays et recettes.
2. Ajouter les liens internes manquants vers catégories, ingrédients et guides.
3. Corriger les titles, descriptions et textes alternatifs non accentués dans les données.
4. Définir quelles fiches peuvent passer de `needsReview: true` à un statut publiable.
5. Ajouter une image sociale par défaut cohérente pour les pages sans visuel de recette.

## Plan d’action moyen terme

1. Créer des pages individuelles pour les guides éditoriaux.
2. Enrichir les pages catégories et ingrédients avec une introduction utile, des exemples et des liens.
3. Ajouter des blocs “À retenir” courts, factuels et citables.
4. Renforcer la page À propos : méthode, sources, limites, fréquence de relecture.
5. Mettre en place un suivi Search Console après mise en ligne.
6. Ajouter une stratégie Open Graph visuelle pour les fiches principales.
7. Envisager un sitemap image une fois les visuels stabilisés.

## Priorités P0 / P1 / P2

### P0 — Pré-publication

- Ajouter `robots.txt`. Fait le 2026-06-30.
- Ajouter `sitemap.xml`. Fait le 2026-06-30.
- Ajouter les canonicals. Fait le 2026-06-30.
- Corriger les pages sans H1. Fait le 2026-06-30.
- Ajouter les images locales ou empêcher la publication de fiches dont l’image reste incohérente. Fait le 2026-06-30.
- Rendre les sources visibles pour les contenus publiés.
- Identifier les fiches réellement prêtes malgré `needsReview`.

### P1 — Croissance SEO

- Ajouter Open Graph et Twitter cards par page.
- Étendre `Recipe`, `BreadcrumbList`, `ItemList`, `WebSite`, `Organization` et `WebPage` seulement si de nouveaux contenus visibles le justifient.
- Transformer les taxonomies affichées en liens internes.
- Créer une page index `/ingredients` si les pages ingrédients doivent être indexées.
- Créer des pages guide individuelles.
- Enrichir catégories et ingrédients avec du contenu textuel utile.

### P2 — Visibilité IA avancée

- Ajouter des résumés courts, factuels et sourcés.
- Ajouter une page méthode éditoriale plus complète.
- Suivre les requêtes Search Console et les impressions sur les pages pays/recettes.
- Tester la citation des pages dans ChatGPT, Gemini, Claude et Perplexity après indexation.
- Envisager `llms.txt` après stabilisation du socle SEO.
- Documenter une convention de mise à jour des sources et des relectures.

## Recommandations spécifiques pour Morning Atlas

- Traiter les pages pays comme des pages éditoriales principales, pas seulement comme des fiches de navigation.
- Traiter les pages recettes comme des pages pratiques avec `Recipe`, ingrédients et étapes visibles ; ajouter temps, portions ou notes au JSON-LD seulement après validation explicite de leur usage.
- Ne pas publier les pages recettes avec des sources cachées si elles abordent des pratiques culturelles spécifiques.
- Ajouter des liens pays → ingrédients → pays pour construire un graphe éditorial lisible.
- Ajouter des liens pays → catégories → pays pour soutenir les requêtes de type “petits-déjeuners salés”, “petits-déjeuners au riz”, “petits-déjeuners rapides”.
- Créer des guides comparatifs ciblant les requêtes informationnelles longues : “quels pays mangent salé au petit-déjeuner”, “petits-déjeuners autour du thé”, “petits-déjeuners faciles à refaire”.
- Utiliser les guides pour répondre aux requêtes que les fiches individuelles ne couvrent pas naturellement.
- Garder une tonalité prudente : “peut inclure”, “souvent”, “selon les régions”, “dans de nombreuses versions”.
- Assumer que Morning Atlas est un atlas éditorial, pas une autorité culinaire institutionnelle : la crédibilité viendra des sources, de la transparence et de la cohérence.

## Visibilité LLM / moteurs IA

- Les moteurs IA favorisent les pages faciles à récupérer, comprendre et citer.
- Le contenu principal doit rester disponible en HTML texte, pas seulement dans les images.
- Chaque page importante devrait contenir :
  - un H1 descriptif ;
  - une réponse courte au sujet principal ;
  - des paragraphes factuels et sourcés ;
  - des listes lisibles ;
  - des liens internes explicites ;
  - des sources visibles ;
  - une date ou un statut de relecture si le contenu évolue.
- Les moteurs IA peuvent reformuler fortement le contenu : éviter les phrases ambiguës ou les affirmations absolues.
- Les sources doivent être proches du contenu qu’elles soutiennent.
- Les pages doivent aider un agent IA à comprendre l’entité Morning Atlas : objectif, périmètre, ton, méthode, limites.
- Les données structurées aident à lever l’ambiguïté, mais ne remplacent pas le contenu visible.

## Position sur llms.txt

`llms.txt` peut être envisagé plus tard comme fichier de présentation lisible pour certains agents IA. Il pourrait résumer Morning Atlas, lister les pages clés, expliquer la méthode éditoriale et pointer vers les guides majeurs.

Ce n’est pas une priorité SEO Google. Google indique qu’il n’est pas nécessaire de créer de nouveaux fichiers lisibles par machine, fichiers IA ou balisages spéciaux pour apparaître dans AI Overviews ou AI Mode. Le socle principal reste donc : crawlabilité, indexation, contenu utile, données structurées, sources visibles et maillage interne clair.

Position recommandée :

- ne pas créer `llms.txt` avant `robots.txt`, `sitemap.xml`, canonicals, sources visibles et données structurées ;
- ne pas y mettre de contenu non publié, interne ou différent du site public ;
- l’utiliser plus tard comme sommaire éditorial public, pas comme levier de ranking ;
- le maintenir manuellement ou via génération seulement quand la structure du site sera stable.

## Choses à éviter

- Écrire pour “plaire aux IA” au détriment des lecteurs.
- Ajouter ou enrichir du JSON-LD qui ne correspond pas au contenu visible.
- Sur-optimiser les titles avec des répétitions artificielles.
- Publier des fiches `needsReview: true` comme si elles étaient validées.
- Utiliser durablement des images fallback génériques pour des contenus culturels précis.
- Masquer les sources dans les données sans les afficher aux lecteurs.
- Créer des pages catégories ou ingrédients vides de contexte.
- Bloquer par erreur Googlebot ou les ressources nécessaires au rendu.
- Multiplier les fichiers spéciaux avant de stabiliser sitemap, robots, canonicals et contenu.

## Prochaines missions Codex recommandées

1. Créer `app/robots.ts` et `app/sitemap.ts` à partir des données locales.
2. Ajouter les canonicals, Open Graph et Twitter cards par type de page.
3. Corriger la hiérarchie H1 sur les pages statiques et taxonomiques.
4. Rendre les sources visibles sur les fiches pays et recettes.
5. Transformer catégories, ingrédients et guides associés en liens internes.
6. Valider les données structurées dans Rich Results Test et Schema Markup Validator.
7. Ajouter les images locales `{slug}.webp` et vérifier les `alt`.
8. Créer des pages individuelles pour les guides.
9. Créer une page index `/ingredients` si les ingrédients doivent devenir un axe SEO.
10. Mettre à jour `docs/CONTENT_TRACKER.md` avec un statut SEO et publication.

## Références utilisées

- Google Search Central — AI features and your website : https://developers.google.com/search/docs/appearance/ai-features
- Google Search Central — Helpful, reliable, people-first content : https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search Central — Structured data intro : https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search Central — Recipe structured data : https://developers.google.com/search/docs/appearance/structured-data/recipe
- Google Search Central — Breadcrumb structured data : https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- Google Search Central — Organization structured data : https://developers.google.com/search/docs/appearance/structured-data/organization
- Google Search Central — Image SEO best practices : https://developers.google.com/search/docs/appearance/google-images
- Next.js local docs — Metadata, `generateMetadata`, `sitemap` and `robots` conventions in `node_modules/next/dist/docs/`
- llms.txt proposal : https://llmstxt.org/
