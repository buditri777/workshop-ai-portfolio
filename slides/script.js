// ===== Slide Deck Navigation =====
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const currentEl = document.getElementById('currentSlide');
const totalEl = document.getElementById('totalSlides');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
totalEl.textContent = totalSlides;

function updateSlide(idx) {
    if (idx < 0) idx = 0;
    if (idx >= totalSlides) idx = totalSlides - 1;
    currentIndex = idx;

    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    currentEl.textContent = idx + 1;
    progressBar.style.width = `${((idx + 1) / totalSlides) * 100}%`;

    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === totalSlides - 1;

    // Update URL hash
    history.replaceState(null, '', `#${idx + 1}`);
}

// Buttons
prevBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => updateSlide(currentIndex + 1));

// Keyboard
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        updateSlide(currentIndex + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        updateSlide(currentIndex - 1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        updateSlide(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        updateSlide(totalSlides - 1);
    } else if (e.key === 'f' || e.key === 'F') {
        // Toggle fullscreen
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    }
});

// Touch swipe
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
        updateSlide(currentIndex + (dx < 0 ? 1 : -1));
    }
});

// Initial: load from hash
const hashIdx = parseInt(location.hash.replace('#', ''), 10);
if (!isNaN(hashIdx) && hashIdx >= 1 && hashIdx <= totalSlides) {
    updateSlide(hashIdx - 1);
} else {
    updateSlide(0);
}

// Fullscreen button
const fsBtn = document.getElementById('fsBtn');
if (fsBtn) {
    fsBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen?.();
        } else {
            document.exitFullscreen?.();
        }
    });
    document.addEventListener('fullscreenchange', () => {
        fsBtn.textContent = document.fullscreenElement ? '⛶' : '⛶';
        fsBtn.classList.toggle('active-fs', !!document.fullscreenElement);
    });
}

// Easter egg
console.log('%c🚀 Workshop Slides — FIKOM UDB', 'font-size: 18px; font-weight: bold; color: #7c5cff;');
console.log('%cTekan ← → untuk navigasi · F untuk fullscreen', 'font-size: 13px; color: #2563eb;');
