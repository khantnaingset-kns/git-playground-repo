# AGENTS.md

Static marketing/prototype site for FlameOps (a fictional infra training academy). Astro 7 + Tailwind CSS 4, no backend, no framework components.

## Commands

- `bun run dev` — dev server at localhost:4321
- `bun run build` — build to `dist/` (this is the only verification step; there is no test, lint, or typecheck script)
- `@astrojs/check` and `typescript` are NOT installed, so `bunx astro check` will prompt to install them. Don't add them unless asked.
- Requires Bun >= 1.3.0.

## Architecture

- Pages in `src/pages/` (`index`, `courses`, `course`, `lesson`, `login`) all wrap content in `src/layouts/Layout.astro`.
- Catalog data is hardcoded in `src/data/courses.ts`; course/lesson content is in `src/data/course.ts`. All lesson links intentionally point to `/lesson` — this is a static prototype, not a real LMS.

## Theming (non-obvious)

- Tailwind v4 CSS-first config: there is no `tailwind.config.*`. All theme setup lives in `src/styles/global.css` (`@theme`, `@custom-variant`, CSS variables). Tailwind is loaded via the `@tailwindcss/vite` plugin in `astro.config.mjs`.
- Dark mode is driven by `data-theme="dark"` on `<html>` (custom `dark` variant), NOT `prefers-color-scheme`. Theme is persisted in localStorage under `flameops-theme` and applied by an inline script in `Layout.astro` before first paint.
- Colors are exposed as utilities via `@theme inline` mapping to live CSS vars (`bg`, `surface`, `text`, `muted`, `border`, `accent`, `code-*`, `level-*`, `on-dark*`, `nav-text`). Use those (e.g. `bg-surface`, `text-muted`) instead of raw Tailwind palette colors so both themes work.
- The theme toggle in `Layout.astro` binds to whatever button has `id="theme-toggle"` (rendered by `ThemeToggle.astro`). A page gets the toggle only if that button exists.

## Conventions

- Indent with tabs (matches all existing `.astro`/`.ts`/`.css` files).
- Fonts (Geist, Space Grotesk, JetBrains Mono) are loaded from Google Fonts in `Layout.astro`; `--font-sans`/`--font-display` are set in `global.css`.
