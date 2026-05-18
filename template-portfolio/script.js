// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Counter animation
const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const stepTime = 16;
    const increment = target / (duration / stepTime);
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            el.textContent = target.toLocaleString('id-ID');
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current).toLocaleString('id-ID');
        }
    }, stepTime);
};

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if (entry.target.classList.contains('stat-num') && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
            }
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.skill, .project, .contact-card, .section-head, .about-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
document.querySelectorAll('.stat-num').forEach(c => observer.observe(c));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 70;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
