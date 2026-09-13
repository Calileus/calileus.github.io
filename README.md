# Calileus Portfolio Website

This repository contains the source for the public website at https://calileus.github.io.

The site is built as a multi-page Astro portfolio and includes:

- Professional profile and architecture philosophy
- Experience and measurable impact
- Selected projects and organizations
- Dynamic GitHub repository feed powered by the GitHub API
- Bilingual navigation (English + Spanish)
- Persistent light/dark theme switcher

## Tech stack

- Astro 5
- Tailwind CSS 3
- TypeScript
- GitHub Pages (GitHub Actions)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
	layouts/Layout.astro
	pages/
		index.astro
		about.astro
		experience.astro
		projects.astro
		contact.astro
		es/
			index.astro
			about.astro
			experience.astro
			projects.astro
			contact.astro
	styles/global.css
public/
	projects.js
	profile.jpg
	favicon.svg
	apple-touch-icon.svg
	og-image.svg
```

## Language routes

- English: `/`, `/about`, `/experience`, `/projects`, `/contact`
- Spanish: `/es/`, `/es/about`, `/es/experience`, `/es/projects`, `/es/contact`
