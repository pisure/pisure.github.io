<template>
  <div id="particles-js"></div>
  <div class="edge-glow edge-glow-left"></div>
  <div class="edge-glow edge-glow-right"></div>
  <SiteNav :theme="theme" :active-section="activeSection" :scrolled="scrolled" @toggle-theme="toggleTheme" />
  <main><HeroSection /><AboutSection /><ProjectsSection @open-gallery="gallery = $event" /><SkillsSection /><ContactSection /></main>
  <SiteFooter /><MusicWidget /><ImageGallery :gallery="gallery" @close="gallery = null" />
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import MusicWidget from './components/MusicWidget.vue'
import ImageGallery from './components/ImageGallery.vue'
const theme = ref('dark'), activeSection = ref('hero'), scrolled = ref(false), gallery = ref(null)
let observer, titleTimer, titleIntervals = [], revealTimers = []
function applyTheme(value) { theme.value = value; if (value === 'light') document.documentElement.setAttribute('data-theme', 'light'); else document.documentElement.removeAttribute('data-theme'); try { localStorage.setItem('psure-theme', value) } catch {} }
function toggleTheme() { applyTheme(theme.value === 'dark' ? 'light' : 'dark') }
function onScroll() {
  scrolled.value = window.scrollY > 60
  const position = window.scrollY + 120
  document.querySelectorAll('section[id]').forEach(section => { if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) activeSection.value = section.id })
}
function smoothAnchor(event) {
  const anchor = event.target.closest('a[href^="#"]')
  if (!anchor) return
  const target = document.getElementById(anchor.getAttribute('href').slice(1))
  if (target) { event.preventDefault(); window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 75, behavior: 'smooth' }) }
}
onMounted(() => {
  let saved; try { saved = localStorage.getItem('psure-theme') } catch {}
  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
  window.addEventListener('scroll', onScroll, { passive: true }); document.addEventListener('click', smoothAnchor); onScroll()
  const elements = document.querySelectorAll('.reveal, .project-card, .tech-item')
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { const delay = Number(entry.target.dataset.delay || 0); revealTimers.push(setTimeout(() => entry.target.classList.add('visible'), delay)); observer.unobserve(entry.target) } }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    elements.forEach((el, i) => { if (el.classList.contains('project-card') || el.classList.contains('tech-item')) el.dataset.delay = String((i % 6) * 80); observer.observe(el) })
  } else elements.forEach(el => el.classList.add('visible'))
  if (window.particlesJS) window.particlesJS('particles-js', { particles: { number: { value: 55, density: { enable: true, value_area: 900 } }, color: { value: ['#8b5cf6', '#06b6d4', '#ffffff'] }, shape: { type: 'circle' }, opacity: { value: 0.35, random: true, anim: { enable: true, speed: 0.8, opacity_min: 0.05, sync: false } }, size: { value: 2.5, random: true, anim: { enable: true, speed: 3, size_min: 0.3, sync: false } }, line_linked: { enable: true, distance: 140, color: '#8b5cf6', opacity: 0.18, width: 1 }, move: { enable: true, speed: 1.4, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: false } } }, interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true }, modes: { grab: { distance: 160, line_linked: { opacity: 0.6 } }, push: { particles_nb: 3 }, repulse: { distance: 80, duration: 0.4 } } }, retina_detect: true })
  const entries = [{ title: 'About @psure', favicon: 'img/favicon-p.svg' }, { title: 'About @Aaron', favicon: 'img/favicon-a.svg' }]; let index = 0
  titleTimer = setInterval(() => { index = (index + 1) % entries.length; const next = entries[index]; let current = document.title; let i = 0; const erase = setInterval(() => { current = current.slice(0, -1); document.title = current || '...'; if (!current) { clearInterval(erase); const icon = document.querySelector("link[rel='icon']"); if (icon) icon.href = next.favicon; const type = setInterval(() => { document.title = next.title.slice(0, ++i); if (i === next.title.length) clearInterval(type) }, 60); titleIntervals.push(type) } }, 40); titleIntervals.push(erase) }, 4000)
})
onUnmounted(() => { observer?.disconnect(); revealTimers.forEach(clearTimeout); clearInterval(titleTimer); titleIntervals.forEach(clearInterval); window.removeEventListener('scroll', onScroll); document.removeEventListener('click', smoothAnchor) })
</script>
