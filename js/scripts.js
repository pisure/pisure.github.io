/* ═══════════════════════════════════════════
   SCRIPTS — PORTFOLIO DE PSURE v2.0
═══════════════════════════════════════════ */

'use strict';

/* ─── PARTÍCULAS DEL FONDO ─── */
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

/* ─── NAVBAR ─── */
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

/* ─── EFECTO DE ESCRITURA (TYPING) ─── */
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

/* ─── ANIMACIÓN DE APARICIÓN AL HACER SCROLL ─── */
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

/* ─── BOTÓN DE ZOOM EN PROYECTO ─── */
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

/* ─── ANIMACIÓN DEL LOGO SVG ─── */
document.addEventListener('DOMContentLoaded', function () {
    const logoText = document.querySelector('.logo-text');
    if (!logoText) return;
    setTimeout(() => logoText.classList.add('animate'), 80);
    setTimeout(() => logoText.classList.add('filled'), 1400);
});

/* ─── MODAL DE IMÁGENES (carrusel de proyectos) ─── */
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

        // Actualizo el nombre del proyecto en el badge
        if (projectName) projectName.textContent = currentMeta.title || 'Proyecto';
        if (counterTot) counterTot.textContent = gallery.length;

        renderThumbs();
        showSlide(current);

        // Reinicio la animación de entrada
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

/* ─── SCROLL SUAVE AL HACER CLIC EN ENLACES DE ANCLAJE ─── */
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

/* ─── WIDGET DE MÚSICA — colapsa en móvil + navegación entre tracks ─── */
(function () {
    const toggleBtn = document.getElementById('music-toggle-btn');
    const musicBody = document.getElementById('music-body');
    const chevron = document.getElementById('music-chevron');
    const iframe = document.getElementById('spotify-iframe');
    const trackNum = document.getElementById('music-track-num');
    const prevBtn = document.getElementById('music-prev');
    const nextBtn = document.getElementById('music-next');
    if (!toggleBtn || !musicBody) return;

    // ── Lista de tracks de Spotify ──
    // Para agregar más: copia el ID de la URL de Spotify
    // Ej: https://open.spotify.com/track/[ESTE_ES_EL_ID]
    const tracks = [
        '21urBIcCt4QXKDq4jshN4e',  // canción 1
        '4BoYjqmRxY6HSuljdLgoRU',  // canción 2
        '3U5JVgI2x4rDyHGObzJfNf',  // canción 3
        '1wQvh5x3S37wjUjUGGtpbT',  // canción 4
        '692weSPBda8DtvL4Di1XyL',  // canción 5
    ];

    let currentIdx = 0;

    // Cambia el embed al track del índice dado
    function loadTrack(idx) {
        currentIdx = ((idx % tracks.length) + tracks.length) % tracks.length;
        const src = `https://open.spotify.com/embed/track/${tracks[currentIdx]}?utm_source=generator&theme=0`;
        if (iframe) iframe.src = src;
        if (trackNum) trackNum.textContent = `${currentIdx + 1} / ${tracks.length}`;

        // Pequeña animación al cambiar
        if (iframe) {
            iframe.style.opacity = '0';
            setTimeout(() => { iframe.style.opacity = '1'; }, 200);
        }
    }

    prevBtn?.addEventListener('click', () => loadTrack(currentIdx - 1));
    nextBtn?.addEventListener('click', () => loadTrack(currentIdx + 1));

    // Inicializo el contador
    if (trackNum) trackNum.textContent = `1 / ${tracks.length}`;

    // ── Toggle móvil ──
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

/* ─── LINK ACTIVO EN EL NAVBAR SEGÚN SECCIÓN VISIBLE ─── */
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

/* ─── TÍTULO DE PESTAÑA CON ANIMACIÓN DE ESCRITURA ─── */
(function () {
    const entries = [
        { title: 'About @psure', favicon: 'img/favicon-p.svg' },
        { title: 'About @Aaron', favicon: 'img/favicon-a.svg' },
    ];
    let idx = 0;

    // Referencia al link del favicon
    const faviconEl = document.querySelector("link[rel='icon']");

    function setFavicon(href) {
        if (faviconEl) faviconEl.href = href;
    }

    function cycleTitle() {
        idx = (idx + 1) % entries.length;
        const { title: next, favicon } = entries[idx];
        const len = next.length;
        let i = 0;

        // Borra el título actual carácter por carácter
        const current = document.title;
        let temp = current;
        const eraseInterval = setInterval(() => {
            temp = temp.slice(0, -1);
            document.title = temp || '...';
            if (temp.length === 0) {
                clearInterval(eraseInterval);
                // Cambia el favicon al mismo tiempo que empieza a escribir
                setFavicon(favicon);
                // Escribe el nuevo título carácter por carácter
                const typeInterval = setInterval(() => {
                    document.title = next.slice(0, ++i);
                    if (i === len) clearInterval(typeInterval);
                }, 60);
            }
        }, 40);
    }

    // Primer ciclo: espera 4s y luego alterna cada 4s
    setInterval(cycleTitle, 4000);
})();

/* ─── TOGGLE DE TEMA CLARO / OSCURO ─── */
(function () {
    const btn  = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (!btn || !icon) return;

    // Aplica el tema guardado o el del sistema
    const saved = localStorage.getItem('psure-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);

    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            icon.className = 'fas fa-moon';
            btn.title = 'Cambiar a modo oscuro';
        } else {
            document.documentElement.removeAttribute('data-theme');
            icon.className = 'fas fa-sun';
            btn.title = 'Cambiar a modo claro';
        }
        localStorage.setItem('psure-theme', theme);
    }
})();

/* ─── FORMULARIO DE CONTACTO (Formspree) ─── */
(function () {
    const form     = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit');
    const feedback = document.getElementById('form-feedback');
    if (!form || !submitBtn || !feedback) return;

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Estado de carga
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        feedback.className = 'form-feedback';
        feedback.textContent = '';

        try {
            const data = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                feedback.className = 'form-feedback success';
                feedback.innerHTML = '<i class="fas fa-check-circle"></i> ¡Mensaje enviado! Te responderé pronto.';
                form.reset();
            } else {
                const json = await response.json().catch(() => ({}));
                const msg = json.errors?.map(err => err.message).join(', ') || 'Error al enviar. Inténtalo de nuevo.';
                feedback.className = 'form-feedback error';
                feedback.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${msg}`;
            }
        } catch (_) {
            feedback.className = 'form-feedback error';
            feedback.innerHTML = '<i class="fas fa-wifi"></i> Sin conexión. Revisa tu internet e inténtalo de nuevo.';
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
})();

