# Journal de bord Morning Atlas

## Format d'entree

- Date : `YYYY-MM-DD`
- Branche : nom de branche Git
- Commit : SHA court ou `TODO`
- Type de tâche : contenu, design, technique, documentation, validation
- Résumé : description courte
- Fichiers modifiés : chemins principaux
- Décisions prises : choix structurants
- Problèmes rencontrés : blocages ou limites
- Prochaine action : suite concrète

## 2026-06-19 — Fondation contenu, images et suivi projet

- Date : `2026-06-19`
- Branche : `main`
- Commit : `3d98d41`
- Type de tâche : contenu, images, documentation, suivi projet
- Résumé : intégration des 18 lots éditoriaux, génération des images breakfast, préparation de l'affichage des images locales avec fallback, puis mise en place des documents de suivi projet.
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
  - Les images breakfast locales suivent le chemin `public/images/breakfasts/{recipe.slug}.webp`.
  - Le fallback externe reste limité à `https://picsum.photos/seed/**`.
  - Le suivi éditorial est documenté en Markdown pour rester simple et versionnable.
  - Le champ `lot` reste `TODO` tant que les lots éditoriaux ne sont pas codés dans les données.
- Problèmes rencontrés :
  - Les images locales doivent encore être ajoutées au dépôt.
  - Les pages doivent être testées visuellement après ajout des fichiers `.webp`.
  - Certaines fiches restent marquées `needsReview` et nécessitent une relecture éditoriale.
- Prochaine action : ajouter les images locales, compléter les lots dans le tracker, puis valider visuellement les pages principales.
