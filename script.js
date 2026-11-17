// Each navigation group tracks its own section of the document.
const navigationGroups = [...document.querySelectorAll('[data-spy]')].map(group =>
  [...group.querySelectorAll('a[href^="#"]')].map(link => ({
    link,
    section: document.getElementById(link.hash.slice(1))
  })).filter(item => item.section)
);

function updateNavigation() {
  const threshold = window.innerHeight * 0.35;
  for (const items of navigationGroups) {
    const current = items.filter(item => item.section.getBoundingClientRect().top < threshold).at(-1);
    for (const item of items) {
      const active = item === current;
      item.link.classList.toggle('active', active);
      if (active) item.link.setAttribute('aria-current', 'location');
      else item.link.removeAttribute('aria-current');
    }
  }
}
window.addEventListener('scroll', updateNavigation, { passive: true });
window.addEventListener('resize', updateNavigation);
window.addEventListener('load', updateNavigation);
updateNavigation();

// Hover follows the reference design; touch and keyboard can toggle the same card.
for (const card of document.querySelectorAll('.flip-container')) {
  card.addEventListener('click', event => {
    if (matchMedia('(hover: none)').matches || event.detail === 0) {
      const flipped = card.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(flipped));
    }
  });
}

const mapButton = document.querySelector('.map-toggle');
if (mapButton) {
  mapButton.addEventListener('click', () => {
    const panel = document.getElementById('mapContainer');
    panel.hidden = !panel.hidden;
    mapButton.setAttribute('aria-expanded', String(!panel.hidden));
    mapButton.textContent = panel.hidden ? 'Show visitors map' : 'Hide visitors map';
  });
}
