# Next steps — Morning Atlas

> Mise à jour le 2026-07-10. Source de vérité pour l'ordre : `docs/ROADMAP.md` (section « Ordre d'exécution »). Détail des tâches et prompts agent : `docs/BACKLOG.md`. Espace créateur / CV : `docs/CREATOR_ROADMAP.md`. Constat complet : `docs/AUDIT_2026-07.md`.

## État actuel résumé

- Socle technique sain : lint, typecheck, build OK (652 pages), SEO P0 en place, 53 images WebP alignées, intégrité des données parfaite.
- Blocants identifiés par l'audit : accents français manquants dans la quasi-totalité des textes (y compris le H1 de la home), 100 % des fiches en `needsReview: true`, fallback image picsum.photos, breadcrumbs JSON-LD vers des pages 404, badge interne « A verifier » visible publiquement.
- ✅ `CODE-01` fait le 2026-07-10 : fichier parasite `main` supprimé ; chantier creator + docs de pilotage committés sur **`main` (branche unique, décision explicite)**. `docs/cv.html` laissé de côté volontairement (migration prévue par CREATOR-05). Rien poussé sur le remote.

## Prochaine mission immédiate

**Sprint 0 (fin) puis Sprint 1 de `docs/ROADMAP.md`, dans l'ordre :**

1. ~~`CODE-01`~~ — fait.
2. `TOOL-02`, `CODE-03`, `IMG-02` — hygiène rapide restante du Sprint 0.
3. **`DATA-01` — restaurer les accents français partout. Rien de public tant que ce n'est pas fait. C'est le prochain gros chantier.**
4. `UI-01` + `IMG-01` + `SEO-01` — les trois autres P0, indépendants entre eux.

Chaque tâche a son prompt prêt à coller dans `docs/BACKLOG.md`.

## Piste parallèle : espace créateur & CV

Le prérequis `CODE-01` étant levé, la refonte de l'espace créateur peut avancer en parallèle des sprints éditoriaux — voir `docs/CREATOR_ROADMAP.md` : section distincte du site (route groups, layout dédié), thème « Atelier » (palette Mocha Mousse inversée, fond sombre, accent honey), scène SVG maison à la place de three.js, CV web imprimable `/creator/cv` remplaçant `docs/cv.html`, PDF réel dans `public/files/`.

**Décision attendue de Fabrice :** email canonique (gmail vs icloud) — seul point bloquant côté contenu créateur.

## Risques / TODO

- Toutes les fiches restent `needsReview: true` : la phase de test 30 jours ne conclut rien tant qu'un lot pilote n'est pas relu (EDIT-02 puis EDIT-01).
- Les 410 pages ingrédients restent indexables (l'exclusion sitemap ne suffit pas) — traité par SEO-02.
- La liste d'exclusion sitemap en dur dérivera — traité par SEO-06.
- Aucune CI : rien n'empêche un commit qui casse le build — traité par TOOL-01.
- Node système en 18 alors que Next 16 exige ≥ 20.9 — traité par TOOL-02.

## Commandes utiles

- `git status --short`
- `git log --oneline --decorate -n 15`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `git diff --check`
