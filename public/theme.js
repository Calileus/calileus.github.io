const root = document.documentElement;
const toggleButton = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('theme-toggle-icon');

function getCurrentTheme() {
  const fromAttr = root.getAttribute('data-theme');
  if (fromAttr === 'light' || fromAttr === 'dark') {
    return fromAttr;
  }

  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (toggleButton) {
    toggleButton.setAttribute('aria-pressed', String(theme === 'dark'));
    toggleButton.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  if (toggleIcon) {
    toggleIcon.textContent = theme === 'dark' ? '☀' : '☾';
  }
}

if (toggleButton) {
  applyTheme(getCurrentTheme());
  toggleButton.addEventListener('click', () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}
