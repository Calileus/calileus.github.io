const configuration = {
  githubUser: 'calileus',
  organizations: ['CalileusLab', 'ObsidianHonorCoders'],
  excludeForks: true,
  includeYourAccount: true
};

const API_BASE = 'https://api.github.com';

function isConfiguredOrg(orgName) {
  return Boolean(orgName && orgName.trim() && !orgName.startsWith('YOUR_ORG_'));
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatUpdatedAt(value) {
  if (!value) {
    return 'Recently';
  }

  const date = new Date(value);
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github+json'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function loadRepositories() {
  const sources = [];

  if (configuration.includeYourAccount) {
    sources.push({
      label: configuration.githubUser,
      request: fetchJson(`${API_BASE}/users/${configuration.githubUser}/repos?sort=updated&per_page=100`)
    });
  }

  for (const org of configuration.organizations) {
    if (!isConfiguredOrg(org)) {
      continue;
    }

    sources.push({
      label: org,
      request: fetchJson(`${API_BASE}/orgs/${org}/repos?sort=updated&per_page=100`)
    });
  }

  const results = await Promise.allSettled(
    sources.map(async (source) => ({
      source: source.label,
      repos: await source.request
    }))
  );

  const repoMap = new Map();
  const errors = [];

  results.forEach((result) => {
    if (result.status === 'rejected') {
      errors.push(result.reason.message);
      return;
    }

    const repos = Array.isArray(result.value.repos) ? result.value.repos : [];

    repos.forEach((repo) => {
      if (!repo || repo.private) {
        return;
      }

      if (configuration.excludeForks && repo.fork) {
        return;
      }

      if (!repoMap.has(repo.id)) {
        repoMap.set(repo.id, repo);
      }
    });
  });

  const repos = [...repoMap.values()].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  renderStats(repos);
  renderRepos(repos);

  if (errors.length > 0) {
    console.warn('One or more GitHub sources could not be loaded:', errors);
  }
}

function renderStats(repos) {
  const statsContainer = document.getElementById('stats');
  if (!statsContainer) {
    return;
  }

  const languages = new Set(repos.map((repo) => repo.language).filter(Boolean));
  const newest = repos[0]?.updated_at ?? null;

  statsContainer.innerHTML = `
    <div class="impact-item"><strong>${repos.length}</strong><span>Repositories</span></div>
    <div class="impact-item"><strong>${languages.size}</strong><span>Languages</span></div>
    <div class="impact-item"><strong>${newest ? formatUpdatedAt(newest) : 'N/A'}</strong><span>Last update</span></div>
  `;
}

function renderRepos(repos) {
  const grid = document.getElementById('repo-grid');
  const meta = document.getElementById('repo-meta');
  if (!grid || !meta) {
    return;
  }

  meta.textContent = `${repos.length} repositories across configured GitHub sources`;

  if (!repos.length) {
    grid.innerHTML = '<div class="empty-state">No public repositories were returned for the configured GitHub sources.</div>';
    return;
  }

  grid.innerHTML = repos
    .map(
      (repo) => `
        <article class="repo-card">
          <div class="flex items-start justify-between gap-3">
            <a class="repo-card-title" href="${repo.html_url}" target="_blank" rel="noreferrer">${escapeHtml(repo.name)}</a>
            <span class="repo-badge">${repo.fork ? 'Fork' : 'Public'}</span>
          </div>
          <p class="repo-description">${escapeHtml(repo.description || 'No description provided.')}</p>
          <div class="repo-metadata">
            <span>${escapeHtml(repo.language || 'N/A')}</span>
            <span>⭐ ${repo.stargazers_count ?? 0}</span>
            <span>🍴 ${repo.forks_count ?? 0}</span>
            <span>Updated ${formatUpdatedAt(repo.updated_at)}</span>
          </div>
        </article>
      `
    )
    .join('');
}

window.addEventListener('DOMContentLoaded', () => {
  loadRepositories().catch((error) => {
    const grid = document.getElementById('repo-grid');
    const meta = document.getElementById('repo-meta');

    if (meta) {
      meta.textContent = 'Unable to load repositories';
    }

    if (grid) {
      grid.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
    }
  });
});