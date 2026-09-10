# Calileus landing page draft

This repository contains a simple landing page that automatically loads public GitHub repositories from your account and configured organizations.

## Files

- `index.html` – main page structure
- `styles.css` – page styling
- `script.js` – GitHub API fetching and rendering logic

## How it works

The page uses the GitHub REST API to fetch public repository data from:

- your GitHub user account (`calileus`)
- up to two GitHub organizations configured in `script.js`

The repositories are then rendered as cards with:

- repository name and link
- description
- language
- star count
- fork count
- last updated date

## Customize the organizations

Open `script.js` and replace the placeholder organization names:

```js
const configuration = {
  githubUser: 'calileus',
  organizations: ['YOUR_ORG_ONE', 'YOUR_ORG_TWO'],
  excludeForks: true,
  includeYourAccount: true,
};
```

with your real GitHub organization names, for example:

```js
const configuration = {
  githubUser: 'calileus',
  organizations: ['my-org-one', 'my-org-two'],
  excludeForks: true,
  includeYourAccount: true,
};
```

## Run locally

You can preview the page with a simple local web server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Notes

- This draft shows public repositories only.
- If a repository has no description, the page falls back to a default message.
- GitHub API rate limits apply for unauthenticated requests.
