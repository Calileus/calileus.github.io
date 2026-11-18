# Calileus Portfolio

Static portfolio site built with Astro. It includes experience, selected work, engineering approach, and education pages. The projects page highlights upstream contributions and also loads a small set of public repositories from GitHub at runtime, with curated projects as a fallback.

## Local Development

Requirements: Node.js 24 (same major version used by the deployment workflow).

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run check
npm run lint
npm run build
```

GitHub Actions deploys the generated `dist/` directory to GitHub Pages when changes are pushed to `main`.
