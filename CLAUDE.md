# Studio Site · Working Agreement (repo pointer)

This is the **marketing site** repo (`studioaurica.com`) — one of two products in the Aurica workspace.

## Read these first

- **Full working agreement:** the umbrella repo's `CLAUDE.md` at the Aurica workspace root (`../CLAUDE.md` when this repo is checked out inside the workspace).
- **Living architecture docs:** `../docs/architecture/` — start with `INDEX.md`, then load the sub-docs its routing tables point to.

> **If you cloned this repo standalone**, the architecture docs are **not in this repo** — they live in the umbrella repo (the Aurica workspace, which gitignores this folder). Get the workspace too, or you're working without the binding context. See `03-workspace-and-repos`.

## What this repo is

A React 19 + TypeScript + Vite + Tailwind v4 SPA. **No backend.** Content-driven: councils, stages, activities, and team are typed constants in `src/data/` (`20-marketing-content-model`); pages render them (`30-marketing-site-pages`). Deploys to GitHub Pages via `.github/workflows/deploy.yml` (`40-build-deploy-ci`).

Relevant sub-docs: `00`, `01`, `02`, `03`, `20`, `30`, `40`, `50`.

## Repo-specific essentials

- **Code style:** this repo **uses semicolons** (the product repo doesn't). Match the surrounding code (`00-conventions`).
- **The `ui/` primitives are duplicated, not shared** with the product repo — sync by hand if you change them.
- **The Partnership `PasswordGate` is soft, client-side security** — the hash and gated markup ship in the bundle. Never put genuinely sensitive content behind it (`50-security-secrets-and-access`).
- **Content is coupled by id and array index:** sphere art pairs to stages by index, council portraits key off `council.id`, and `/stage/:id` and `/council/:id` deep links depend on ids existing. Change the id, the image map, and the count together (`20`, `30`).
- **The Cradle's `onSelectStage` must be `useCallback`-stable** — it re-initializes the Matter.js physics when it changes; the Cradle also manipulates the DOM imperatively with manual cleanup (`30`).
- **Known gaps (don't mistake for bugs to silently "fix"):** the Contact form isn't wired to a backend (`Contact.tsx` TODO); `CouncilView` uses the shadcn palette, not the bespoke one; `/work` embeds the Larkin static site by iframe; `/spinner-lab` is an off-nav prototype. All flagged `[REVIEW NEEDED]` in `30`.

## Before you push

Follow the Architecture Documentation Workflow in the root `CLAUDE.md`: read the relevant sub-docs first, update them alongside code, bump their **Last reviewed** dates. (There is no pre-push hook installed yet — it's manual.)
