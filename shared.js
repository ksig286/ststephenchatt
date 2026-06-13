async function loadPartials() {
  try {
    const headerResp = await fetch('_header.html');
    const headerHTML = await headerResp.text();
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;

    const footerResp = await fetch('_footer.html');
    const footerHTML = await footerResp.text();
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

    initMenuToggle();
  } catch (err) {
    console.error('Failed to load partials:', err);
  }
}

function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  if (menu) menu.classList.toggle('active');
}

function initMenuToggle() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('nav-menu');
      if (menu) menu.classList.remove('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', loadPartials);
