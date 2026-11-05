<template>
  <a class="skip-link" href="#main">Saltar al contenido</a>
  <header class="header">
    <nav class="nav wrap" aria-label="Navegación principal">
      <a class="brand" href="#home" aria-label="PSURE, ir al inicio"><span class="brand-mark">p<span>.</span></span><span class="brand-name">PSURE<span class="brand-slash"> / </span><small>PORTFOLIO</small></span></a>
      <div class="nav-links" :class="{ open: menuOpen }" id="main-menu">
        <a href="#projects" @click="menuOpen = false">Proyectos</a><a href="#about" @click="menuOpen = false">Sobre mí</a><a href="#stack" @click="menuOpen = false">Stack</a><a class="mobile-contact" href="#contact" @click="menuOpen = false">Contacto ↗</a>
      </div>
      <div class="nav-actions"><button class="theme-button" type="button" @click="toggleTheme" :aria-label="theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'" :title="theme === 'dark' ? 'Tema claro' : 'Tema oscuro'"><svg v-if="theme === 'dark'" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path></svg><svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10Z"></path></svg></button><a class="nav-contact" href="#contact">Hablemos <span>↗</span></a><button type="button" class="menu-button" aria-controls="main-menu" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen"><span></span><span></span></button></div>
    </nav>
  </header>
  <main id="main">
    <section class="hero wrap" id="home">
      <div class="hero-copy">
        <div class="availability"><span></span> DISPONIBLE PARA PROYECTOS</div>
        <p class="hero-kicker">HOLA, SOY AARON ESPINOZA <span>/</span> @PSURE</p>
        <h1>Hago que las<br>ideas <em>funcionen.</em><span class="hero-period">_</span></h1>
        <p class="hero-description">Desarrollador full stack. Construyo experiencias digitales que se sienten bien y resuelven problemas de verdad.</p>
        <div class="hero-actions"><a class="button primary" href="#projects">Ver mis proyectos <span>↗</span></a><a class="button secondary" href="#contact">Hablemos <span>→</span></a></div>
        <div class="hero-signature"><span class="signature-line"></span><span>DISEÑO, CÓDIGO Y UN POCO DE CURIOSIDAD.</span></div>
      </div>
      <div class="profile-panel">
        <div class="panel-bar"><span><i></i><i></i><i></i></span><span>about-me / profile</span><span>✳</span></div>
        <div class="portrait"><img src="/img/foto.jpg" alt="Aaron Espinoza" width="1395" height="1395" fetchpriority="high"><div class="portrait-overlay"></div><span class="portrait-label">EL HUMANO DETRÁS<br>DEL CÓDIGO <span>↗</span></span></div>
        <div class="profile-data"><div><span class="profile-prefix">const</span> developer = <span class="profile-accent">{</span></div><div class="code-line">name: <span>"Aaron Espinoza"</span>,</div><div class="code-line">role: <span>"Full Stack Developer"</span>,</div><div class="code-line">building: <span>"cosas útiles"</span></div><div class="profile-accent">}</div></div>
      </div>
      <div class="hero-index"><span>DESARROLLADOR &amp; CREADOR DIGITAL</span><span>DESLIZA PARA EXPLORAR ↓</span></div>
    </section>
    <div class="ticker" aria-hidden="true"><div class="ticker-inner wrap"><span>DE LA IDEA</span><span>✳</span><span>AL DISEÑO</span><span>✳</span><span>AL CÓDIGO</span><span>✳</span><span>AL MUNDO</span><span>↗</span></div></div>
    <ProjectsSection @open-gallery="gallery = $event" />
    <section class="section about-section" id="about"><div class="wrap about-grid"><div><p class="eyebrow"><span>02</span> / UN POCO SOBRE MÍ</p><h2>Detrás de cada<br>línea, hay una <em>idea.</em></h2><p class="about-lead">Me gusta crear cosas que funcionen tan bien como se ven.</p></div><div class="about-content"><p>Soy Aaron, desarrollador full stack, freelancer y estudiante de Ingeniería de Software. Me interesa convertir ideas en productos digitales claros, útiles y con personalidad.</p><p>He trabajado en proyectos que van desde sitios web hasta aplicaciones con backend y bases de datos. Me apasionan el código limpio, las interfaces cuidadas y seguir aprendiendo en cada proyecto.</p><div class="about-stats"><div><strong>10<span>+</span></strong><small>PROYECTOS<br>COMPLETADOS</small></div><div><strong>3<span>+</span></strong><small>AÑOS DE<br>EXPERIENCIA</small></div><div><strong>∞</strong><small>GANAS DE<br>APRENDER</small></div></div></div></div></section>
    <section class="section stack-section" id="stack"><div class="wrap"><div class="section-top"><div><p class="eyebrow"><span>03</span> / LA CAJA DE HERRAMIENTAS</p><h2>Mi <em>stack.</em></h2></div><p class="section-intro">Las tecnologías cambian; las ganas de aprender, no. Estas son algunas de las herramientas con las que he trabajado.</p></div><div class="stack-grid"><article><span>01 / FRONTEND</span><h3>Experiencias que<br>se sienten bien.</h3><div class="stack-list"><span>JavaScript</span><span>React</span><span>Astro</span><span>HTML &amp; CSS</span><span>Tailwind</span></div></article><article><span>02 / BACKEND</span><h3>La lógica detrás<br>de cada idea.</h3><div class="stack-list"><span>Node.js</span><span>PHP</span><span>MongoDB</span><span>MySQL</span><span>C++</span></div></article><article><span>03 / HERRAMIENTAS</span><h3>Para construir<br>y colaborar.</h3><div class="stack-list"><span>GitHub</span><span>WordPress</span><span>Bootstrap</span><span>UI / UX</span></div></article></div></div></section>
    <ContactSection />
  </main>
  <footer class="footer"><div class="wrap"><div class="footer-top"><a class="brand" href="#home"><span class="brand-mark">p<span>.</span></span><span class="brand-name">PSURE<span class="brand-slash"> / </span><small>PORTFOLIO</small></span></a><p>Diseñado para crear.<br>Construido con intención.</p><div class="social-links"><a href="https://github.com/pisure" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/aaron-espinoza-393856346/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/ron.es4/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="https://discord.com/users/pisuree" target="_blank" rel="noopener noreferrer">Discord ↗</a></div></div><MusicWidget /><div class="footer-bottom"><span>© {{ year }} AARON ESPINOZA / PSURE</span><span>HECHO CON CÓDIGO &amp; CURIOSIDAD ✳</span><a href="#home">VOLVER ARRIBA ↑</a></div></div></footer>
  <ImageGallery :gallery="gallery" @close="gallery = null" />
</template>
<script setup>
import { ref, onMounted } from 'vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import ImageGallery from './components/ImageGallery.vue'
import MusicWidget from './components/MusicWidget.vue'
const theme = ref('dark'), menuOpen = ref(false), gallery = ref(null), year = new Date().getFullYear()
function applyTheme(value) { theme.value = value; document.documentElement.dataset.theme = value; try { localStorage.setItem('psure-theme', value) } catch {} }
function toggleTheme() { applyTheme(theme.value === 'dark' ? 'light' : 'dark') }
onMounted(() => { let saved; try { saved = localStorage.getItem('psure-theme') } catch {} applyTheme(saved === 'dark' || saved === 'light' ? saved : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark') })
</script>
