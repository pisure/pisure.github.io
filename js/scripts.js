/* ═══════════════════════════════════════════
   SCRIPTS — PSURE PORTFOLIO v2.0
═══════════════════════════════════════════ */

'use strict';

/* ─── PARTICLES.JS ─── */
document.addEventListener('DOMContentLoaded', function () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 55, density: { enable: true, value_area: 900 } },
            color: { value: ["#8b5cf6", "#06b6d4", "#ffffff"] },
            shape: { type: "circle" },
            opacity: {
                value: 0.35, random: true,
                anim: { enable: true, speed: 0.8, opacity_min: 0.05, sync: false }
            },
            size: {
                value: 2.5, random: true,
                anim: { enable: true, speed: 3, size_min: 0.3, sync: false }
            },
            line_linked: {
                enable: true, distance: 140,
                color: "#8b5cf6", opacity: 0.18, width: 1
            },
            move: {
                enable: true, speed: 1.4, direction: "none",
                random: true, straight: false, out_mode: "out",
                bounce: false, attract: { enable: false }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 160, line_linked: { opacity: 0.6 } },
                push: { particles_nb: 3 },
                repulse: { distance: 80, duration: 0.4 }
            }
        },
        retina_detect: true
    });
});

/* ─── NAVBAR — scroll shrink + hamburger ─── */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ─── TYPING EFFECT ─── */
const typingTextEl = document.getElementById('typing-text');
const texts = [
    'Freelancer',
    'Estudiante Ing. Software',
    'Full Stack Developer',
    'UI / UX Enthusiast'
];

let tIdx = 0, cIdx = 0, deleting = false, speed = 110;

function typeEffect() {
    const current = texts[tIdx];
    if (deleting) {
        typingTextEl.textContent = current.substring(0, --cIdx);
        speed = 55;
    } else {
        typingTextEl.textContent = current.substring(0, ++cIdx);
        speed = 110;
    }

    if (!deleting && cIdx === current.length) {
        deleting = true; speed = 2000;
    } else if (deleting && cIdx === 0) {
        deleting = false;
        tIdx = (tIdx + 1) % texts.length;
        speed = 450;
    }
    setTimeout(typeEffect, speed);
}

setTimeout(typeEffect, 900);

/* ─── SCROLL REVEAL (Intersection Observer) ─── */
function initReveal() {
    const revealEls = document.querySelectorAll('.reveal, .project-card, .tech-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = el.dataset.delay || 0;
                setTimeout(() => {
                    el.classList.add('visible');
                }, delay);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach((el, i) => {
        if (el.classList.contains('project-card') || el.classList.contains('tech-item')) {
            el.dataset.delay = (i % 6) * 80;
        }
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', initReveal);

/* ─── PROJECT ZOOM BTN → triggers modal ─── */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-zoom-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-card');
            const img = card?.querySelector('img.project-img');
            if (img) img.click();
        });
    });
});

/* ─── SVG LOGO ANIMATION ─── */
document.addEventListener('DOMContentLoaded', function () {
    const logoText = document.querySelector('.logo-text');
    if (!logoText) return;
    setTimeout(() => logoText.classList.add('animate'), 80);
    setTimeout(() => logoText.classList.add('filled'), 1400);
});

/* ─── IMAGE MODAL (carousel) ─── */
function initImageModal() {
    const modal = document.getElementById('img-modal');
    const modalImg = document.querySelector('.img-modal-img');
    const closeBtn = document.querySelector('.img-modal-close');
    const prevBtn = document.querySelector('.img-modal-prev');
    const nextBtn = document.querySelector('.img-modal-next');
    const titleEl = document.querySelector('.img-modal-title');
    const descEl = document.querySelector('.img-modal-desc');
    const thumbsCont = document.querySelector('.img-modal-thumbs');
    const backdrop = document.querySelector('.img-modal-backdrop');
    const counterCur = document.getElementById('modal-current');
    const counterTot = document.getElementById('modal-total');
    const projectName = document.querySelector('.img-modal-project-name');
    if (!modal || !modalImg) return;

    let gallery = [], current = 0, currentMeta = {};

    function openGallery(images, meta, startIdx) {
        gallery = images.slice();
        currentMeta = meta || {};
        current = typeof startIdx === 'number' ? startIdx : 0;

        // Update project name badge
        if (projectName) projectName.textContent = currentMeta.title || 'Proyecto';
        if (counterTot) counterTot.textContent = gallery.length;

        renderThumbs();
        showSlide(current);

        // Reset animation
        const shell = modal.querySelector('.img-modal-shell');
        if (shell) { shell.style.animation = 'none'; shell.offsetWidth; shell.style.animation = ''; }

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        modalImg.src = '';
        document.body.style.overflow = '';
        if (thumbsCont) thumbsCont.innerHTML = '';
    }

    function showSlide(idx) {
        if (!gallery.length) return;
        current = ((idx % gallery.length) + gallery.length) % gallery.length;
        modalImg.style.opacity = '0';
        const preload = new Image();
        preload.onload = () => {
            modalImg.src = gallery[current];
            setTimeout(() => { modalImg.style.opacity = '1'; }, 30);
            updateActiveThumb();
            if (counterCur) counterCur.textContent = current + 1;
        };
        preload.src = gallery[current];
    }

    function renderThumbs() {
        if (!thumbsCont) return;
        thumbsCont.innerHTML = '';
        gallery.forEach((src, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.setAttribute('aria-label', `Imagen ${idx + 1}`);
            const im = document.createElement('img');
            im.src = src; im.alt = `thumb-${idx}`;
            btn.appendChild(im);
            btn.addEventListener('click', () => showSlide(idx));
            thumbsCont.appendChild(btn);
        });
        updateActiveThumb();
    }

    function updateActiveThumb() {
        if (!thumbsCont) return;
        Array.from(thumbsCont.children).forEach((btn, idx) => {
            btn.classList.toggle('active', idx === current);
        });
    }

    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);
    prevBtn?.addEventListener('click', () => showSlide(current - 1));
    nextBtn?.addEventListener('click', () => showSlide(current + 1));

    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('open')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') showSlide(current - 1);
        if (e.key === 'ArrowRight') showSlide(current + 1);
    });

    document.querySelectorAll('img.project-img[data-enlarge="true"]').forEach(imgEl => {
        imgEl.style.cursor = 'zoom-in';
        imgEl.addEventListener('click', () => {
            const attr = imgEl.getAttribute('data-images');
            const images = attr ? attr.split(',').map(s => s.trim()).filter(Boolean) : [imgEl.src];
            const title = imgEl.getAttribute('data-title') || '';
            const desc = imgEl.getAttribute('data-desc') || '';
            let startIdx = images.indexOf(imgEl.getAttribute('src'));
            if (startIdx === -1) startIdx = 0;
            openGallery(images, { title, desc }, startIdx);
        });
    });
}

document.addEventListener('DOMContentLoaded', initImageModal);

/* ─── SMOOTH ANCHOR SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const yOffset = -75;
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY + yOffset,
                behavior: 'smooth'
            });
        }
    });
});

/* ─── MUSIC WIDGET MOBILE TOGGLE ─── */
(function () {
    const toggleBtn = document.getElementById('music-toggle-btn');
    const musicBody = document.getElementById('music-body');
    const chevron = document.getElementById('music-chevron');
    if (!toggleBtn || !musicBody) return;

    // Sólo activa en móvil
    function isMobile() { return window.innerWidth <= 768; }

    function applyMobileState() {
        if (isMobile()) {
            // empieza cerrado
            musicBody.classList.remove('open');
            chevron.style.transform = 'rotate(180deg)';
        } else {
            // escritorio: siempre abierto
            musicBody.classList.add('open');
            chevron.style.transform = '';
        }
    }

    toggleBtn.addEventListener('click', () => {
        if (!isMobile()) return;
        const isOpen = musicBody.classList.toggle('open');
        chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });

    window.addEventListener('resize', applyMobileState);
    applyMobileState();
})();

/* ─── ACTIVE NAV LINK on scroll ─── */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
            navAs.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${section.id}`) a.classList.add('active');
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });

/* ─── TITLE CYCLING ─── */
(function () {
    const titles = ['About @psure', 'About @Aaron'];
    let idx = 0;

    function cycleTitle() {
        idx = (idx + 1) % titles.length;

        const next = titles[idx];
        const len = next.length;
        let i = 0;

        // Borra el título actual carácter a carácter
        const current = document.title;
        let temp = current;
        const eraseInterval = setInterval(() => {
            temp = temp.slice(0, -1);
            document.title = temp || '...';
            if (temp.length === 0) {
                clearInterval(eraseInterval);
                // Escribe el nuevo título carácter a carácter
                const typeInterval = setInterval(() => {
                    document.title = next.slice(0, ++i);
                    if (i === len) clearInterval(typeInterval);
                }, 60);
            }
        }, 40);
    }

    // Primer ciclo: espera 4s, luego alterna cada 4s
    setInterval(cycleTitle, 4000);
})();
