# Repository Guidelines

## Project Structure & Module Organization
App code lives in `src/` with entry points (`main.jsx`, `App.jsx`), reusable UI under `src/components/`, shared state/helpers in `src/utils/`, and Tailwind-aware styles in `src/styles/` plus `src/index.css`. Markdown-driven content sits in `content/`; every file with YAML frontmatter is indexed by `scripts/gen-index.js`. Static assets and favicons belong in `public/`, while long-form docs or mind-map exports go in `docs/` and marketing/supporting material in `references/`. Built artifacts are emitted to `dist/` only via `npm run build`.

## Build, Test, and Development Commands
- `npm run dev`: Vite dev server with HMR; rerun `npm run gen-index` first whenever `content/` changes.
- `npm run gen-index`: Generates the MiniSearch JSON consumed by the store; commit the updated output.
- `npm run build`: Production bundle with hashed assets and Tailwind processing.
- `npm run preview`: Serves `dist/` to validate deployment bits locally.
- `npm run lint`: ESLint (React + Hooks rules from `eslint.config.js`) to gate CI.

## Coding Style & Naming Conventions
Use modern React 19 function components with hooks and suspense-based code splitting (see `App.jsx`). Components and files use PascalCase, stores and helpers camelCase, and content slugs kebab-case (e.g., `the-ai-vision.md`). Keep imports shallow, prefer composition over prop drilling, and store Tailwind utility chains directly in JSX unless extracted tokens live in `src/styles/tokens.css`. Maintain 2-space indentation, dangling commas in multi-line objects, and descriptive props even for FontAwesome icons. Run `npm run lint` plus format-on-save in your editor; do not suppress accessibility rules without justification.

## Testing Guidelines
Automated tests are not wired up yet; when adding logic-heavy utilities, introduce Vitest + Testing Library under `src/__tests__/Component.test.jsx` and colocate fixtures in `tests/fixtures/`. Until then, PRs must document manual verification: start from `npm run gen-index && npm run dev`, exercise navigation/search/export, and confirm dark-mode and keyboard shortcuts behave on at least one desktop + mobile viewport.

## Commit & Pull Request Guidelines
Follow the existing log style—short, imperative subjects like `add lightning agent` or `improve branch format`; reference issue IDs when relevant. Each PR should include a concise summary, screenshots or GIFs when UI shifts touch `public/images`, the exact commands run, and a reminder when the search index was regenerated. Request reviews from both frontend and content owners whenever changes span `src/` and `content/`, and link deployment previews (Vercel or GitHub Pages) before merging.
