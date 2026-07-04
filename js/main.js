/* ============================================================
   Meng Lab — main.js (multi-page version)
   ============================================================ */

const navbar  = document.getElementById('navbar');
const backTop = document.getElementById('back-to-top');

// ---------- Navbar scroll effect (home page: transparent → solid) ----------
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
        if (backTop) backTop.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        if (backTop) backTop.classList.remove('visible');
    }
});

// ---------- Mobile menu toggle ----------
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // Animate hamburger
        navToggle.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('open'));
    });
}

// ---------- Back to top ----------
if (backTop) {
    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---------- Fade-in on scroll ----------
const fadeEls = document.querySelectorAll(
    '.research-card, .home-research-card, .home-news-item, ' +
    '.pub-item, .pub-year-block, .join-card, .news-item, ' +
    '.research-detail-card, .team-pi-block, .about-grid, ' +
    '.edu-item, .stats-strip, .future-box, .future-goal'
);

if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    fadeEls.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ---------- Hamburger icon animation ----------
const style = document.createElement('style');
style.textContent = `
    .nav-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .nav-toggle.open span:nth-child(2) { opacity: 0; }
    .nav-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    .nav-toggle span { transition: transform 0.3s ease, opacity 0.3s ease; }
`;
document.head.appendChild(style);
