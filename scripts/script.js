// Mobile nav toggle
function setupMobileNav() {
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  function setExpanded(expanded) {
    toggle.setAttribute('aria-expanded', String(expanded));
    menu.setAttribute('aria-expanded', String(expanded));
  }

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!expanded);
  });

  // close on click
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setExpanded(false)));
}

// Footer year
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  setYear();
  setupMobileNav();
});
