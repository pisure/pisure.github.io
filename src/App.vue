<template>
  <a class="skip-link" href="#main">{{ en ? 'Skip to content' : 'Saltar al contenido' }}</a>
  <header class="header"><nav class="nav wrap" :aria-label="en ? 'Main navigation' : 'Navegación principal'">
    <a class="brand" href="#home" :aria-label="en ? 'Psure, go home' : 'Psure, ir al inicio'"><span class="brand-mark">p<span>.</span></span><span class="brand-name">PSURE</span></a>
    <MusicWidget :language="language" />
    <div class="nav-links" :class="{ open: menuOpen }" id="main-menu"><a href="https://github.com/pisure" target="_blank" rel="noopener noreferrer" @click="menuOpen = false">GitHub ↗</a><a href="https://www.instagram.com/ron.es4/" target="_blank" rel="noopener noreferrer" @click="menuOpen = false">Instagram ↗</a></div>
    <div class="nav-actions">
      <button class="language-button" type="button" @click="toggleLanguage" :aria-label="en ? 'Switch language to Spanish' : 'Cambiar idioma a inglés'" :title="en ? 'Cambiar a español' : 'Switch to English'"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21"/></svg><span>{{ en ? 'EN' : 'ES' }}</span></button>
      <button type="button" class="menu-button" aria-controls="main-menu" :aria-expanded="menuOpen" :aria-label="en ? (menuOpen ? 'Close menu' : 'Open menu') : (menuOpen ? 'Cerrar menú' : 'Abrir menú')" @click="menuOpen = !menuOpen"><span></span><span></span></button>
    </div>
  </nav></header>
  <main id="main"><section class="board-wrap wrap" id="home" aria-labelledby="board-title">
    <div class="board-meta"><span>{{ en ? 'PSURE / A PERSONAL SPACE' : 'PSURE / UN ESPACIO PERSONAL' }}</span></div>
    <div class="board">
      <div class="board-column board-left">
        <div v-for="slot in [0, 1]" :key="slot" class="board-project-slot"><Transition name="project-fade" mode="out-in"><button v-if="visibleProjects[slot]" :key="visibleProjects[slot].id" class="board-project" type="button" @click="openBoardProject(visibleProjects[slot])" :aria-label="`${en ? 'View images of' : 'Ver imágenes de'} ${visibleProjects[slot].title}`" @mouseenter="interacting = true" @mouseleave="interacting = false" @focus="interacting = true" @blur="interacting = false"><span class="board-card-label">{{ en ? 'PROJECT' : 'PROYECTO' }}</span><img :src="visibleProjects[slot].thumbnail" alt="" width="1000" height="510" decoding="async"><span class="board-card-title">{{ visibleProjects[slot].title }} <span aria-hidden="true">↗</span></span><span class="board-card-detail">{{ visibleProjects[slot].category }}</span></button></Transition></div>
      </div>
      <div class="board-center"><div class="board-intro"><span>{{ en ? 'Hi, I’m Aaron.' : 'Hola, soy Aaron.' }}</span><h1 id="board-title">{{ en ? 'My corner' : 'Mi rincón' }}<br>{{ en ? 'of the internet.' : 'en internet.' }}</h1><p>{{ en ? 'Projects, ideas, and a little about me.' : 'Proyectos, ideas y un poco de mí.' }}</p></div><div class="board-portrait"><img class="portrait-monochrome" src="/img/aaron-sticker.webp" alt="Aaron Espinoza" width="434" height="525" fetchpriority="high"><img class="portrait-color" src="/img/aaron-sticker.webp" alt="" aria-hidden="true" width="434" height="525"><span>@psure</span></div><button class="board-contact" type="button" @click="copyEmail">{{ copyStatus === 'success' ? (en ? 'Email copied!' : '¡Correo copiado!') : (en ? 'Copy my email' : 'Copia mi email') }} <span aria-hidden="true">{{ copyStatus === 'success' ? '✓' : '↗' }}</span></button><span class="board-contact-note" role="status" aria-live="polite">{{ copyStatus === 'error' ? (en ? 'Could not copy: ' : 'No se pudo copiar: ') + email : (en ? 'There’s always room for a conversation.' : 'Siempre hay espacio para conversar.') }}</span></div>
      <div class="board-column board-right"><div class="board-note"><span>{{ en ? 'A little note' : 'Una pequeña nota' }}</span><p>{{ en ? 'I like turning curiosity into things you can use.' : 'Me gusta convertir curiosidad en cosas que puedas usar.' }}</p><span>— Aaron</span></div><div class="board-project-slot"><Transition name="project-fade" mode="out-in"><button v-if="visibleProjects[2]" :key="visibleProjects[2].id" class="board-project" type="button" @click="openBoardProject(visibleProjects[2])" :aria-label="`${en ? 'View images of' : 'Ver imágenes de'} ${visibleProjects[2].title}`" @mouseenter="interacting = true" @mouseleave="interacting = false" @focus="interacting = true" @blur="interacting = false"><span class="board-card-label">{{ en ? 'PROJECT' : 'PROYECTO' }}</span><img :src="visibleProjects[2].thumbnail" alt="" width="1000" height="510" decoding="async"><span class="board-card-title">{{ visibleProjects[2].title }} <span aria-hidden="true">↗</span></span><span class="board-card-detail">{{ visibleProjects[2].category }}</span></button></Transition></div></div>
    </div>
  </section></main>
  <ImageGallery :gallery="translatedGallery" :language="language" @close="closeGallery" />
</template>
<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import ImageGallery from './components/ImageGallery.vue'
import MusicWidget from './components/MusicWidget.vue'
import projects from './projects.js'
const translations = {
  'Espectrómetro Web': { title: 'Web Spectrometer', category: 'DATA / BLUETOOTH', description: 'An application for graphically visualizing data from a light spectrometer via Bluetooth.' },
  'Jarvis': { category: 'ASSISTANT / PRODUCTIVITY', description: 'An assistant for organizing activities, managing income and expenses, and remembering events.' },
  'Stremio (fork)': { category: 'ENTERTAINMENT / WEB', description: 'A web application in development for watching series and films across devices.' },
  'Portfolio interactivo': { title: 'Interactive portfolio', category: 'PORTFOLIO / WEB', description: 'An interactive website with animations and a carefully designed user experience.' },
  'BLISS': { category: 'PLATFORM / BOOKINGS', description: 'A platform for discovering and rating beauty salons, buying products, and making reservations.' }
}
let savedLanguage = 'es'
try { if (localStorage.getItem('psure-language') === 'en') savedLanguage = 'en' } catch {}
const language = ref(savedLanguage), en = computed(() => language.value === 'en')
watch(language, value => { document.documentElement.lang = value; try { localStorage.setItem('psure-language', value) } catch {} }, { immediate: true })
function toggleLanguage() { language.value = en.value ? 'es' : 'en' }
function localize(project) { return { ...project, id: project.title, ...(en.value ? translations[project.title] : {}) } }
const boardProjects = projects
const groupCount = boardProjects.length
const menuOpen = ref(false), gallery = ref(null), group = ref(0), interacting = ref(false)
const visibleProjects = computed(() => Array.from({ length: Math.min(3, boardProjects.length) }, (_, i) => localize(boardProjects[(group.value * 3 + i) % boardProjects.length])))
const translatedGallery = computed(() => gallery.value ? { ...localize(gallery.value), start: 0 } : null)
const email = 'aaronandreespinozaflores@gmail.com'
const copyStatus = ref('')
let copyTimer
async function copyEmail() {
  let copied = false
  try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(email); copied = true } } catch {}
  if (!copied) {
    const input = document.createElement('textarea')
    input.value = email; input.setAttribute('readonly', ''); input.style.cssText = 'position:fixed;left:-9999px;top:0'
    const previousFocus = document.activeElement
    document.body.appendChild(input); input.select()
    try { copied = document.execCommand('copy') } catch {}
    input.remove(); previousFocus?.focus()
  }
  copyStatus.value = copied ? 'success' : 'error'
  clearTimeout(copyTimer); copyTimer = window.setTimeout(() => { copyStatus.value = '' }, 4000)
}
let timer
function scheduleRotation() { clearTimeout(timer); timer = window.setTimeout(() => { if (!gallery.value && !interacting.value && document.visibilityState === 'visible') group.value = (group.value + 1) % groupCount; scheduleRotation() }, 20000) }
function openBoardProject(project) { gallery.value = boardProjects.find(item => item.title === project.id) }
function closeGallery() { gallery.value = null; scheduleRotation() }
onMounted(scheduleRotation)
onUnmounted(() => { clearTimeout(timer); clearTimeout(copyTimer) })
</script>
