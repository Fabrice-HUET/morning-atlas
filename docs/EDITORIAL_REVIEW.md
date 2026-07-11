# Procédure de relecture éditoriale — Morning Atlas

> Version 1.0 — 2026-07-11. Définit les critères objectifs et la procédure pour faire passer une fiche de `needsReview: true` à `needsReview: false`.
> S'applique aux fiches pays (`data/countries.ts`) et aux recettes (`data/recipes/**`). C'est le préalable de la tâche **EDIT-01** (relecture d'un lot pilote). Voir aussi `docs/ROADMAP.md`, `docs/CONTENT_TRACKER.md` et `docs/AUDIT_2026-07.md`.

## 1. Objectif

Aujourd'hui **100 % des fiches sont en `needsReview: true`**. Ce flag ne veut rien dire tant qu'il n'existe pas de définition écrite de « publiable ». Ce document fournit cette définition : une grille reproductible pour que deux personnes (ou deux sessions d'agent) relisant la même fiche arrivent à la même décision.

Le flag `needsReview` reste un signal **interne** : depuis UI-01, il n'est plus affiché aux visiteurs. Il ne sert qu'au pilotage de la relecture.

## 2. Principes non négociables

Ces règles priment sur tout le reste. Une fiche qui en viole une **ne peut pas** passer à `false`, quelle que soit sa qualité par ailleurs.

1. **Précision culturelle.** Aucune affirmation culturelle qui ne soit pas soit couverte par une source listée, soit formulée avec prudence explicite (« souvent », « selon les familles », « dans certaines régions »).
2. **Pas d'invention.** Aucun fait, date, chiffre, origine ou statistique ajouté qui ne figure pas dans les sources. En cas de doute, on retire ou on nuance — on n'invente pas.
3. **Pas de généralisation.** Un plat n'est jamais « le petit-déjeuner de tout un pays ». On décrit une pratique située, variable, pas une norme nationale.
4. **Formulations nuancées.** Pas de superlatif invérifiable (« le meilleur », « le seul vrai », « toujours », « tout le monde »).
5. **Sources visibles et pertinentes.** Le champ `sources` est renseigné et chaque source est réellement en rapport avec le contenu de la fiche.

## 3. Définition de « publiable » (`needsReview: false`)

Une fiche est **publiable** quand, et seulement quand :

- elle respecte les 5 principes de la section 2 ;
- elle coche **toute** la grille de la section 5 ;
- ses `reviewNotes` existantes ont été traitées (appliquées, ou conservées et transformées en formulation prudente dans le texte) ;
- aucun anti-pattern de la section 8 n'est présent.

« Publiable » ne veut pas dire « parfaite » ni « exhaustive » : une fiche courte mais juste, prudente et sourcée est publiable. Une fiche riche mais qui généralise ou affirme sans source ne l'est pas.

## 4. Les trois verdicts

Chaque fiche relue reçoit exactement un verdict :

| Verdict | `needsReview` | Action |
| --- | --- | --- |
| **Publiable** | `false` | La fiche coche toute la grille. On passe le flag à `false`. |
| **À retoucher** | reste `true` | Défauts corrigeables tout de suite (accents, formulation trop affirmative, source à préciser). On corrige, puis on re-relit dans la même passe ; si tout passe → `false`. |
| **Maintenue en review** | reste `true` | Doute de fond non résolvable sans recherche (origine contestée, statut « petit-déjeuner » incertain, source manquante). On **ajoute une `reviewNotes`** expliquant précisément ce qui bloque, et on laisse `true`. |

La règle d'or : **dans le doute, on reste à `true`.** Une fiche faussement validée coûte plus cher qu'une fiche prudemment maintenue en review.

## 5. Grille de relecture

Passer chaque fiche au crible des six dimensions. Une case non cochée = pas de passage à `false`.

### A. Exactitude & sourcing
- [ ] Chaque affirmation culturelle du `longDescription`, `culturalNote`, `culturalContext`, `funFact`, `morningContext` et `variants` est soit couverte par une source de `sources`, soit formulée prudemment.
- [ ] Le champ `sources` contient au moins une source pertinente ; les `title`/`publisher` correspondent à des références réelles et le `note` (français) décrit bien ce que la source appuie.
- [ ] Le `funFact` n'est pas une légende présentée comme un fait (ex. origine antique « souvent évoquée » → la garder nuancée, pas l'affirmer).

### B. Nuance & non-généralisation
- [ ] Aucune phrase ne fait du plat la norme nationale unique (« le petit-déjeuner des Égyptiens » → « souvent associé au petit-déjeuner en Égypte »).
- [ ] Aucun superlatif invérifiable ni absolu (« toujours », « le seul », « tout le monde », « le meilleur »).
- [ ] Les variantes régionales/familiales existantes sont mentionnées dans `variants` ou dans le texte quand elles sont pertinentes.
- [ ] Le statut « petit-déjeuner » lui-même est nuancé si la source l'indique (plat aussi consommé au déjeuner/dîner → le dire, cf. `morningContext`, `usualUsage`).

### C. Langue & typographie
- [ ] Accents français corrects partout (héritage de DATA-01 : vérifier en priorité les mots ambigus laissés en résidu — `sucre`/`sucré`, `sale`/`salé`, `marque`/`marqué`, `pense`/`pensé`, `utilise`/`utilisé`, et les titres de sources français).
- [ ] Élisions et apostrophes correctes (`l'un`, `d'olive`, `jusqu'à`).
- [ ] Pas de terme technique anglais brut affiché comme du contenu (les enums `difficulty: 'easy'`, `type`, styles restent un sujet séparé — DATA-06 —, mais signaler tout anglais résiduel dans le texte rédigé).
- [ ] Ponctuation et casse propres (pas de double espace, majuscules cohérentes).

### D. Complétude & structure
- [ ] Les champs obligatoires sont remplis et cohérents avec le sujet : pays → `breakfastName`, `shortDescription`, `typicalItems`, `commonDrinks`, `culturalNote` ; recette → `title`, `ingredients`, `steps`, `prepTimeMinutes`, `cookTimeMinutes`, `servings`.
- [ ] `localName` (translittérations/variantes de nom) est présent et cohérent quand le plat a plusieurs graphies.
- [ ] Les étapes d'une recette sont réalisables et ordonnées ; les temps et portions sont plausibles.
- [ ] Pas de champ « rempli par défaut » resté générique (attention aux textes templatés de la factory `makeCountry` : `heroTitle`, `breakfastSubtitle`, `funFact`, `morningContext` par défaut doivent avoir été individualisés si la fiche prétend être relue).

### E. SEO
- [ ] `seoTitle` relu : francais accentué, ~50–60 caractères, décrit la fiche sans sur-promesse.
- [ ] `seoDescription` relue : francais accentué, ~120–160 caractères, fidèle au contenu.
- [ ] Le `slug` n'est pas modifié (les URLs restent stables — ne jamais toucher un slug en relecture).

### F. Cohérence interne & reviewNotes
- [ ] Aucune contradiction entre champs (ex. `commonDrinks` mentionne le thé mais `associatedDrink` l'exclut).
- [ ] **Toutes les `reviewNotes` existantes sont traitées** : soit la nuance qu'elles demandent est intégrée au texte, soit la note est conservée/réécrite si le doute persiste.
- [ ] Les liens taxonomiques (`ingredientSlugs`, `categorySlugs`, `tagSlugs`, `recipeSlugs`/`countrySlugs`) pointent vers des entrées existantes et pertinentes (l'intégrité référentielle est déjà vérifiée par script, mais signaler toute association absurde).

## 6. Procédure pas à pas (une fiche)

1. **Lire les `reviewNotes`** de la fiche en premier : elles disent ce que l'auteur savait devoir surveiller.
2. **Lire les `sources`** (notamment les `note`) pour savoir ce qui est réellement appuyé.
3. **Parcourir la grille** (section 5) champ par champ, dimension par dimension.
4. **Corriger** ce qui est corrigeable immédiatement (accents, formulation, précision d'une source) — sans jamais toucher `slug`, `countryCode`, URLs, clés ni structure.
5. **Décider** le verdict (section 4).
6. Si **publiable** → passer `needsReview` à `false`.
   Si **maintenue** → laisser `true` et ajouter/mettre à jour une `reviewNotes` qui explique le blocage en une phrase précise.
7. **Tracer** : mettre à jour `docs/CONTENT_TRACKER.md` (colonnes `needsReview` et `Prêt pour publication`) pour la fiche.
8. **Vérifier** en fin de lot : `pnpm lint && pnpm typecheck && pnpm build` doivent passer.
9. **Consigner** le lot relu dans `docs/PROJECT_LOG.md`.

## 7. Règle des cas douteux

Quand une affirmation ne peut être ni sourcée ni prudemment reformulée sans recherche supplémentaire :

- **Ne pas** valider la fiche.
- **Ne pas** supprimer l'information par défaut : la reformuler au conditionnel/prudentiel si c'est possible (« selon certaines sources… »), sinon la retirer.
- **Ajouter une `reviewNotes`** du type : `"À vérifier : <affirmation précise> — source manquante."`
- Laisser `needsReview: true`.

## 8. Anti-patterns bloquants (checklist rouge)

La présence d'un seul de ces éléments **interdit** le passage à `false` :

- Un plat présenté comme LE petit-déjeuner national unique.
- Un superlatif ou un absolu invérifiable.
- Une affirmation historique/chiffrée sans source ni nuance.
- Un texte de factory resté générique (non individualisé) présenté comme relu.
- Une source hors-sujet ou un `sources` vide.
- Un mot français non accentué dans le texte rédigé (hors résidus techniques déjà tracés).
- Une contradiction interne entre deux champs.

## 9. Traçabilité

Chaque décision doit être rejouable :

- `data/**` : le seul champ qui change de valeur est `needsReview` (+ éventuelles corrections de texte et ajout de `reviewNotes`). **Jamais** de slug, clé, structure ou lien modifié.
- `docs/CONTENT_TRACKER.md` : colonnes `needsReview` et `Prêt pour publication` mises à jour par fiche relue.
- `docs/PROJECT_LOG.md` : une entrée par lot relu (fiches concernées, verdicts, points en suspens).

## 10. Rythme & organisation (phase de test 30 jours)

- Travailler par **petits lots de 8 à 12 fiches** cohérents (par région, ou pays + sa/ses recette(s) ensemble), jamais les 106 d'un coup.
- Commencer par les fiches les plus complètes (celles avec `longDescription`, `variants` et `sources` bien remplis) — ce sont les plus susceptibles d'être publiables et elles servent d'étalon.
- Relire une fiche pays **avec sa/ses recette(s)** associée(s) dans la même passe (cohérence pays ↔ recette).
- Objectif de la phase de test : sortir un premier lot pilote assumé, pas viser 100 % tout de suite. Le reste des tâches P3 attend la fin de la phase.

## 11. Exemple travaillé — Ful medames (Égypte)

Application de la grille sur une fiche réelle de `data/countries.ts`.

- **`reviewNotes` existantes** : « L'origine antique est souvent évoquée mais doit rester nuancée » ; « Les accompagnements changent selon les familles, quartiers et vendeurs » ; « Ne pas présenter le ful comme le petit-déjeuner de tous les Égyptiens ».
- **A. Sourcing** : les affirmations (fèves longuement cuites, assaisonnements variables, service avec pain baladi) sont prudentes et cohérentes avec des sources éditoriales identifiées → OK, à condition que `sources` liste bien ces références.
- **B. Nuance** : le texte dit « souvent associé au petit-déjeuner égyptien, sans résumer toutes les habitudes » → conforme à la reviewNote 3. Vérifier qu'aucune phrase ne bascule en généralisation. La formule populaire (« petit-déjeuner du riche… ») est présentée **comme une formule**, pas comme un fait → acceptable.
- **C. Langue** : après DATA-01, vérifier les résidus (« assaisonnées », « goûts », « fèves »… OK ; contrôler un éventuel « sale »/« salé »).
- **D. Structure** : `typicalItems`, `commonDrinks`, `variants` (5 variantes listées), `simplifiedRecipe` remplis → complet.
- **E. SEO** : `seoTitle` « Ful Medames : le petit-déjeuner égyptien aux fèves » → accentué, longueur correcte, pas de sur-promesse → OK.
- **F. reviewNotes** : les 3 notes sont couvertes par le texte prudent → on peut les conserver comme trace ou les retirer si entièrement intégrées.
- **Verdict** : si `sources` est complet et le contrôle langue OK → **publiable** (`needsReview: false`). Sinon → **à retoucher**, on corrige puis on revalide.

---

*Ce document définit la méthode ; son application est la tâche EDIT-01. Toute évolution des critères se fait ici, en versionnant l'en-tête.*
