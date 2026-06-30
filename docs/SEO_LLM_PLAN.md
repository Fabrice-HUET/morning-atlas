# Plan SEO et visibilité IA — Morning Atlas

## Résumé exécutif

Morning Atlas dispose déjà d’un socle éditorial solide : routes App Router statiques, slugs propres, contenus textuels en dur, fiches pays et recettes reliées, champs SEO présents dans les données et page À propos existante.

Le site n’est toutefois pas encore prêt pour une publication SEO ambitieuse. Les priorités sont techniques et éditoriales : ajouter `robots.txt` et `sitemap.xml`, compléter les métadonnées par type de page, rendre les sources visibles, corriger les pages sans H1, ajouter les images locales, renforcer le maillage interne et introduire des données structurées cohérentes avec le contenu visible.

Pour Google AI Overviews, AI Mode et les moteurs IA, il n’existe pas de raccourci spécifique fiable. Le socle à renforcer reste le même : pages crawlables, indexables, utiles, sourcées, structurées, avec des réponses claires et des liens internes explicites.

## État actuel

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
- Aucun `app/sitemap.ts`, `app/sitemap.xml`, `app/robots.ts` ou `app/robots.txt` détecté.
- Aucune canonical explicite via `alternates.canonical` détectée.
- Open Graph existe globalement, mais pas encore de variantes dynamiques par fiche.
- Aucune Twitter card détectée.
- Aucune donnée structurée JSON-LD détectée.

### Structure des pages

- La page d’accueil possède un H1 via `components/sections/HeroSection.tsx`.
- Les pages pays et recettes dynamiques possèdent un H1.
- Plusieurs pages utilisent `SectionHeading`, qui rend actuellement un H2 : `/countries`, `/recipes`, `/guides`, `/about`, `/categories/{slug}` et `/ingredients/{slug}` n’ont donc pas de H1 dédié.
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
- Aucun fichier `.webp` local n’est actuellement présent dans `public/images/breakfasts/`.
- Le fallback externe utilise `https://picsum.photos/seed/{slug}/1200/900`.
- Les images utilisent `next/image`, un ratio visuel `4/3` et des attributs `alt`.
- Les textes alternatifs sont présents, mais certains libellés méritent une correction typographique avant publication.
- Le fallback `picsum.photos` est utile techniquement, mais faible éditorialement : il peut afficher une image générique sans cohérence culturelle avec la fiche.

## Risques SEO principaux

- Absence de `sitemap.xml` : découverte moins maîtrisée des nombreuses routes statiques.
- Absence de `robots.txt` : pas de signal explicite de crawl ni de lien vers le sitemap.
- Absence de canonical explicite : risque limité aujourd’hui, mais à corriger avant ouverture publique.
- Pages statiques et taxonomiques sans H1 : structure sémantique perfectible.
- Open Graph uniquement global : les partages de fiches pays ou recettes ne sont pas optimisés.
- Absence de Twitter cards.
- Absence totale de données structurées, alors que le site se prête bien à `Recipe`, `BreadcrumbList`, `ItemList`, `WebSite`, `Organization` et `WebPage`.
- Images locales absentes : les fiches affichent un fallback générique, ce qui limite la cohérence SEO images.
- Sources non visibles : le contenu est moins crédible pour Google, les lecteurs et les moteurs IA.
- Toutes les fiches sont encore marquées `needsReview: true`, donc le site ne devrait pas traiter ces contenus comme pleinement publiés.
- Pages catégories et ingrédients potentiellement trop fines si elles restent de simples listes sans texte introductif enrichi.
- Guides non individualisés : potentiel éditorial et maillage interne sous-exploité.

## Opportunités SEO principales

- Créer un sitemap généré depuis les données locales : pays, recettes, catégories, ingrédients, guides, pages statiques.
- Ajouter un `robots.txt` simple avec `Allow: /` et le lien vers le sitemap.
- Ajouter des canonicals explicites via la Metadata API de Next.js.
- Produire des métadonnées dynamiques complètes par fiche : title, description, canonical, Open Graph, Twitter card et image.
- Afficher les sources en bas des fiches pays et recettes.
- Ajouter des données structurées alignées avec le contenu visible.
- Transformer les libellés de catégories, ingrédients et guides associés en liens internes.
- Ajouter des images locales cohérentes, nommées `{slug}.webp`.
- Créer des pages individuelles de guides pour cibler les requêtes comparatives.
- Renforcer la page À propos avec méthode éditoriale, limites, sources, statut de relecture et responsabilité éditoriale.
- Ajouter des encadrés courts de type “À retenir” pour rendre les pages plus citables par les moteurs IA.

## Checklist technique

- [ ] Ajouter `app/robots.ts` ou `app/robots.txt`.
- [ ] Ajouter `app/sitemap.ts` avec toutes les URLs indexables.
- [ ] Définir les canonicals via `alternates.canonical`.
- [ ] Ajouter une stratégie Open Graph par type de page.
- [ ] Ajouter les Twitter cards.
- [ ] Vérifier que toutes les pages publiques indexables ont un H1 unique.
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

- [ ] Créer `public/images/breakfasts/`.
- [ ] Ajouter les images locales au format `{slug}.webp`.
- [ ] Vérifier que chaque slug de recette correspond à une image.
- [ ] Éviter les images génériques ou culturellement incohérentes.
- [ ] Corriger les `alt` pour utiliser une typographie française propre.
- [ ] Vérifier le ratio `4/3` sur mobile, tablette et desktop.
- [ ] Éviter de publier durablement avec `picsum.photos` comme fallback visible.
- [ ] Ajouter les images principales dans les métadonnées Open Graph.
- [ ] Ajouter les images dans les données structurées `Recipe` et `WebPage` quand elles existent.
- [ ] Envisager un sitemap image après stabilisation des visuels.

## Checklist données structurées

- [ ] Ajouter `WebSite` sur la page d’accueil.
- [ ] Ajouter `Organization` ou `Publisher` pour l’entité Morning Atlas.
- [ ] Ajouter `BreadcrumbList` sur les pages pays, recettes, catégories, ingrédients et guides.
- [ ] Ajouter `Recipe` sur les pages recettes, uniquement avec les informations visibles sur la page.
- [ ] Ajouter `ItemList` sur les pages listes : pays, recettes, catégories liées, ingrédients liés.
- [ ] Ajouter `WebPage` sur les pages pays, catégories, ingrédients, guides et À propos.
- [ ] Ajouter `Article` uniquement si les guides deviennent de vraies pages éditoriales avec contenu substantiel.
- [ ] Ne pas ajouter de propriétés JSON-LD qui ne correspondent pas au contenu visible.
- [ ] Valider avec le Rich Results Test et le Schema Markup Validator.
- [ ] Surveiller les rapports Search Console après déploiement.

## Plan d’action court terme

1. Ajouter `robots.txt` et `sitemap.xml` via les conventions Next.js.
2. Ajouter les canonicals pour toutes les routes indexables.
3. Corriger la structure H1 des pages statiques et taxonomiques.
4. Ajouter les images locales `.webp` et réduire la dépendance au fallback externe.
5. Rendre les sources visibles sur les fiches pays et recettes.
6. Ajouter les liens internes manquants vers catégories, ingrédients et guides.
7. Corriger les titles, descriptions et textes alternatifs non accentués.
8. Définir quelles fiches peuvent passer de `needsReview: true` à un statut publiable.

## Plan d’action moyen terme

1. Ajouter les données structurées par type de page.
2. Créer des pages individuelles pour les guides éditoriaux.
3. Enrichir les pages catégories et ingrédients avec une introduction utile, des exemples et des liens.
4. Ajouter des blocs “À retenir” courts, factuels et citables.
5. Renforcer la page À propos : méthode, sources, limites, fréquence de relecture.
6. Mettre en place un suivi Search Console après mise en ligne.
7. Ajouter une stratégie Open Graph visuelle pour les fiches principales.
8. Envisager un sitemap image une fois les visuels stabilisés.

## Priorités P0 / P1 / P2

### P0 — Pré-publication

- Ajouter `robots.txt`.
- Ajouter `sitemap.xml`.
- Ajouter les canonicals.
- Corriger les pages sans H1.
- Ajouter les images locales ou empêcher la publication de fiches dont l’image reste incohérente.
- Rendre les sources visibles pour les contenus publiés.
- Identifier les fiches réellement prêtes malgré `needsReview`.

### P1 — Croissance SEO

- Ajouter Open Graph et Twitter cards par page.
- Ajouter `Recipe`, `BreadcrumbList`, `ItemList`, `WebSite`, `Organization` et `WebPage`.
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
- Traiter les pages recettes comme des pages pratiques avec `Recipe`, temps, portions, ingrédients, étapes et notes visibles.
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
- Ajouter du JSON-LD qui ne correspond pas au contenu visible.
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
6. Ajouter les données structurées `Recipe`, `BreadcrumbList`, `ItemList`, `WebSite`, `Organization` et `WebPage`.
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
