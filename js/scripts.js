// Configuración de Particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#8e44ad"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#8e44ad",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});

// Efecto de texto de escritura/borrado
const typingTextElement = document.getElementById('typing-text');
const texts = ['Freelancer', 'Estudiante Ing Software', 'FullStack Dev in progress'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Iniciar efecto de escritura al cargar la página
setTimeout(typeEffect, 1000);

// Rapid font cycler for the greeting name: swaps font-family quickly with a tiny pop
function initFontCycler(){
    const el = document.getElementById('name-rotator');
    if(!el) return;
    // lots of font-family stacks (fallbacks included)
    const fonts = [
        'Permanent Marker, cursive',
        'Rock Salt, cursive',
        'Bangers, cursive',
        'Monoton, cursive',
        'Black Ops One, sans-serif',
        'Shadows Into Light, cursive',
        'Caveat, cursive',
        'Chewy, cursive',
        'Special Elite, monospace',
        'Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        'Montserrat, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        '"Roboto Slab", Georgia, serif',
        '"Playfair Display", Georgia, serif',
        '"Courier Prime", Courier, monospace',
        'Lato, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Raleway, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Oswald, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Merriweather, Georgia, serif',
        '"PT Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        '"Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Nunito, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        '"Indie Flower", cursive',
        'Anton, sans-serif',
        '"Abril Fatface", serif',
        '"Fira Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Ubuntu, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        '"Josefin Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Quicksand, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Play, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
        'Oxygen, system-ui, -apple-system, "Segoe UI", Roboto, Arial'
    ];

    let idx = 0;
    // apply initial style
    el.style.fontFamily = fonts[0];
    el.style.color = '#8e44ad';

    function swapFont(){
        idx = (idx + 1) % fonts.length;
        // tiny pop animation for emphasis
        el.classList.add('name-pop');
        setTimeout(()=> el.classList.remove('name-pop'), 100);
        // switch font quickly
        el.style.fontFamily = fonts[idx];
    }

    // change font every 350ms for a slightly slower (more readable) effect
    setInterval(swapFont, 350);
}

document.addEventListener('DOMContentLoaded', initFontCycler);

// Controlador de música
const audio = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const volumeControl = document.getElementById('volume-control');
let isPlaying = false;

if (playBtn) playBtn.addEventListener('click', togglePlay);
if (volumeControl) volumeControl.addEventListener('input', adjustVolume);

function togglePlay() {
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        if (playBtn) playBtn.innerHTML = '▶';
    } else {
        audio.play();
        if (playBtn) playBtn.innerHTML = '❚❚';
    }
    isPlaying = !isPlaying;
}

function adjustVolume() {
    if (!audio || !volumeControl) return;
    audio.volume = volumeControl.value;
}

// Efecto hover para las tarjetas de proyecto
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.boxShadow = '';
    });
});

// Animacion al hacer scroll
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.project-card, .section-title');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Estilo para las tarjetas de proyecto al cargar
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.2}s`;
    });
    
    document.querySelectorAll('.section-title').forEach((title) => {
        title.style.opacity = '0';
        title.style.transform = 'translateY(20px)';
        title.style.transition = 'all 0.5s ease';
    });
    
    setTimeout(fadeInOnScroll, 100);
});

const tracks = [
    { title: "psure tracks", src: "audio/ME HACE DAÑO VERTE.mp3" },
  { title: "This Love", src: "audio/www.jerseyboyssa.co.za - Maroon 5 - This Love (320 KBps).m4a" },
  { title: "High", src: "audio/Maria Becerra - High (Video Oficial).mp3" }
];

let currentTrackIndex = 0;

const audioSource = document.getElementById('audio-source');
const trackTitle = document.getElementById('track-title');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function loadTrack(index) {
  currentTrackIndex = (index + tracks.length) % tracks.length;
    if (audioSource) audioSource.src = tracks[currentTrackIndex].src;
    if (audio) audio.load();
    if (trackTitle) trackTitle.textContent = tracks[currentTrackIndex].title;
    if (isPlaying && audio) {
        audio.play();
    }
}

if (prevBtn) prevBtn.addEventListener('click', () => loadTrack(currentTrackIndex - 1));
if (nextBtn) nextBtn.addEventListener('click', () => loadTrack(currentTrackIndex + 1));

loadTrack(currentTrackIndex);

// Simple image enlarge modal with blur background
function initImageModal(){
    const modal = document.getElementById('img-modal');
    const modalImg = document.querySelector('.img-modal-img');
    const closeBtn = document.querySelector('.img-modal-close');
    const prevBtn = document.querySelector('.img-modal-prev');
    const nextBtn = document.querySelector('.img-modal-next');
    const titleEl = document.querySelector('.img-modal-title');
    const descEl = document.querySelector('.img-modal-desc');
    const thumbsContainer = document.querySelector('.img-modal-thumbs');
    if(!modal || !modalImg) return;

    let gallery = [];
    let current = 0;
    let currentMeta = { title: '', desc: '' };

    function openGallery(images, meta, startIndex){
        gallery = images.slice();
        currentMeta = meta || { title: '', desc: '' };
        current = (typeof startIndex === 'number') ? startIndex : 0;
        renderThumbs();
        showSlide(current);
        if(titleEl) titleEl.textContent = currentMeta.title || '';
        if(descEl) descEl.textContent = currentMeta.desc || '';
        modal.classList.add('open');
        modal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(){
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden','true');
        modalImg.src = '';
        document.body.style.overflow = '';
        thumbsContainer.innerHTML = '';
        if(titleEl) titleEl.textContent = '';
        if(descEl) descEl.textContent = '';
    }

    function showSlide(index){
        if(!gallery || gallery.length === 0) return;
        current = (index + gallery.length) % gallery.length;
        // Fade effect
        modalImg.style.opacity = 0;
        const nextSrc = gallery[current];
        // Preload image to avoid flicker
        const img = new Image();
        img.onload = () => {
            modalImg.src = nextSrc;
            setTimeout(()=>{ modalImg.style.opacity = 1; }, 30);
            updateActiveThumb();
        };
        img.src = nextSrc;
    }

    function renderThumbs(){
        if(!thumbsContainer) return;
        thumbsContainer.innerHTML = '';
        gallery.forEach((src, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            const im = document.createElement('img');
            im.src = src;
            im.alt = `thumb-${idx}`;
            btn.appendChild(im);
            btn.addEventListener('click', ()=> showSlide(idx));
            thumbsContainer.appendChild(btn);
        });
        updateActiveThumb();
    }

    function updateActiveThumb(){
        if(!thumbsContainer) return;
        Array.from(thumbsContainer.children).forEach((btn, idx)=>{
            if(idx === current) btn.classList.add('active'); else btn.classList.remove('active');
        });
        if(titleEl) titleEl.textContent = currentMeta.title || '';
        if(descEl) descEl.textContent = currentMeta.desc || '';
    }

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(prevBtn) prevBtn.addEventListener('click', ()=> showSlide(current - 1));
    if(nextBtn) nextBtn.addEventListener('click', ()=> showSlide(current + 1));

    modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape') return closeModal();
        if(e.key === 'ArrowLeft') return showSlide(current - 1);
        if(e.key === 'ArrowRight') return showSlide(current + 1);
    });

    // Attach to images
    document.querySelectorAll('img.project-img[data-enlarge="true"]').forEach(imgEl=>{
        imgEl.style.cursor = 'zoom-in';
        imgEl.addEventListener('click', ()=>{
            const imagesAttr = imgEl.getAttribute('data-images');
            const images = imagesAttr ? imagesAttr.split(',').map(s=>s.trim()).filter(Boolean) : [imgEl.src];
            const title = imgEl.getAttribute('data-title') || '';
            const desc = imgEl.getAttribute('data-desc') || '';
            // If the clicked src exists in list, start at that index
            let startIndex = images.indexOf(imgEl.src);
            if(startIndex === -1) startIndex = 0;
            openGallery(images, { title, desc }, startIndex);
        });
    });
}

// Ensure modal init runs after DOM is fully parsed so modal element exists
document.addEventListener('DOMContentLoaded', initImageModal);

