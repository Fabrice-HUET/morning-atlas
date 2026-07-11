# Morning Atlas

Atlas éditorial des petits-déjeuners du monde — application Next.js (App Router) en TypeScript.

## Prérequis

- **Node.js ≥ 20.9** (Next 16 l'exige ; version épinglée dans `.nvmrc` = `24`). Avec nvm : `nvm use`.
- **pnpm** (version épinglée via `packageManager` dans `package.json`).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Commande | Rôle |
| --- | --- |
| `pnpm dev` | Serveur de développement |
| `pnpm build` | Build de production (SSG) |
| `pnpm start` | Sert le build de production |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm validate:content` | Vérifie l'intégrité des données (slugs dupliqués, références cassées) ; sort en erreur si anomalie |

## Structure

- `app/` — routes (App Router). Deux route groups : `(site)` (le magazine, avec Navbar/Footer) et `(atelier)` (l'espace créateur `/creator`, thème dédié).
- `components/`, `lib/`, `data/`, `types/` — composants, helpers, données éditoriales en dur, types.
- `docs/` — suivi projet : `ROADMAP.md`, `BACKLOG.md` (tâches + prompts), `PROJECT_LOG.md`, `EDITORIAL_REVIEW.md`, `CREATOR_ROADMAP.md`, `AUDIT_2026-07.md`.

## Notes

- Cette version de Next a des conventions qui peuvent différer : voir `AGENTS.md` et la doc locale `node_modules/next/dist/docs/`.
- Déploiement : Vercel (le build s'y déclenche automatiquement).
