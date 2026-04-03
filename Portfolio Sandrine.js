const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));

function closeMobile() {
  mobileNav.classList.remove('open');
}

const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

const fills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width + '%';
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
fills.forEach(f => skillObserver.observe(f));

async function handleSubmit(e) {
  e.preventDefault();
  const status = document.getElementById('form-success');
  if (!status) return;
  status.style.display = 'block';
  status.style.color = 'var(--accent)';

  status.textContent = 'Envoi en cours...';

  // Simule un délai utilisateur pour le statut
  await new Promise(resolve => setTimeout(resolve, 600));

  // En choix volontaire : pas d'envoi automatique en backend pour le moment.
  // On affiche un message clair à l'utilisateur.
  status.textContent = 'Échec d\'envoi, veuillez envoyer un mail au lagbomedji04@gmail.com';
  status.style.color = '#e55';
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent2)'
      : '';
  });
});

function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  const themeIcons = document.querySelectorAll('.theme-toggle');
  themeIcons.forEach(btn => btn.textContent = isLight ? '🌙' : '☀️');
}

const themeToggle = document.getElementById('themeToggle');
const themeToggleMobile = document.getElementById('themeToggleMobile');
if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);