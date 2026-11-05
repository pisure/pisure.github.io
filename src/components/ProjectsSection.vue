<template>
  <section id="projects" class="section projects-section">
    <div class="wrap">
      <div class="section-top">
        <div><p class="eyebrow"><span>01</span> / PROYECTOS SELECCIONADOS</p><h2>Ideas que toman <em>forma.</em></h2></div>
        <p class="section-intro">Una selección de trabajos donde el código se convierte en herramientas, experiencias y soluciones reales.</p>
      </div>
      <div class="projects-grid">
        <article v-for="(project, index) in visibleProjects" :key="project.title" class="project-card" :class="{ featured: index === 0 }">
          <button class="project-image" type="button" :aria-label="`Ver galería de ${project.title}`" @click="$emit('open-gallery', { ...project, start: 0 })">
            <img :src="project.thumbnail" :alt="`Vista previa de ${project.title}`" :loading="index < 2 ? 'eager' : 'lazy'" decoding="async" width="1000" height="510">
            <span class="project-image-label">VER GALERÍA <span aria-hidden="true">↗</span></span>
          </button>
          <div class="project-body">
            <div class="project-meta"><span>{{ project.category }}</span><span>{{ project.year }}</span></div>
            <h3>{{ project.title }}</h3><p>{{ project.description }}</p>
            <div class="project-bottom"><div class="tags"><span v-for="tag in project.tech" :key="tag">{{ tag }}</span></div><button type="button" class="project-arrow" :aria-label="`Ver imágenes de ${project.title}`" @click="$emit('open-gallery', { ...project, start: 0 })">↗</button></div>
          </div>
        </article>
      </div>
      <div class="more-projects" v-if="!showAll"><button class="text-button" type="button" @click="showAll = true">Explorar todos los proyectos <span>↗</span></button><span>+ {{ projects.length - 6 }} proyectos</span></div>
      <div class="more-projects" v-else><button class="text-button" type="button" @click="showAll = false">Ver menos <span>↑</span></button><span>{{ projects.length }} proyectos</span></div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'
defineEmits(['open-gallery'])
const showAll = ref(false)
const image = name => `/img/${name}`
const thumb = name => `/img/thumbs/${name}.webp`
const projects = [
  { title:'Espectrómetro Web', category:'DATOS / BLUETOOTH', year:'2025', description:'Una aplicación para visualizar gráficamente los datos de un espectrómetro de luz mediante Bluetooth.', tech:['React','Node.js','MySQL'], thumbnail:thumb('espectrometronew'), images:['espectrometronew.png','espectrometro1.jpeg','espectrometro2.png','espectrometro3.jpeg'].map(image) },
  { title:'Inventario inteligente', category:'APLICACIÓN / IA', year:'2026', description:'Un sistema de inventario para una empresa de ropa infantil, con asistencia de IA para facilitar su control.', tech:['Astro','JavaScript','MongoDB'], thumbnail:thumb('rosamy1'), images:['rosamy1.png','rosamy2.png','rosamy3.png','rosamy4.png','rosamy5.png','rosamy6.png','rosamy7.png','rosamy8.png'].map(image) },
  { title:'Jarvis', category:'ASISTENTE / PRODUCTIVIDAD', year:'2026', description:'Un asistente para organizar actividades, gestionar ingresos y gastos, y recordar eventos.', tech:['React','Node.js','MongoDB'], thumbnail:thumb('jarvis3'), images:['jarvis3.png','jarvis1.png','jarvis2.png','jarvis4.png','jarvis5.png','jarvis6.png','jarvis7.png'].map(image) },
  { title:'Catálogo asistido con IA', category:'CATÁLOGO / IA', year:'2026', description:'Un catálogo para una empresa de ropa infantil, con asistencia de IA para apoyar su gestión.', tech:['Astro','JavaScript','MongoDB'], thumbnail:thumb('catalogo1'), images:['catalogo1.png','catalogo3.png','catalogo2.png'].map(image) },
  { title:'Stremio (fork)', category:'ENTRETENIMIENTO / WEB', year:'2026', description:'Una aplicación web en desarrollo para visualizar series y películas desde distintos dispositivos.', tech:['Tailwind','JavaScript','MongoDB'], thumbnail:thumb('Stremio1'), images:['Stremio1.png','Stremio2.png','Stremio3.png'].map(image) },
  { title:'QRGen', category:'HERRAMIENTA / OPEN SOURCE', year:'2025', description:'Una plataforma open source para generar códigos QR para enlaces, contactos y más.', tech:['PHP','CSS3','MySQL'], thumbnail:thumb('qrgen'), images:['qrgen.png'].map(image) },
  { title:'Portfolio interactivo', category:'PORTAFOLIO / WEB', year:'2024', description:'Un sitio web interactivo con animaciones y una experiencia de usuario cuidada.', tech:['HTML5','CSS3','JavaScript'], thumbnail:thumb('portafolio2'), images:['portafolio2.jpeg','portafolio1.jpeg'].map(image) },
  { title:'ViasUPC', category:'COMUNIDAD / WEB', year:'2025', description:'Una plataforma de artículos sobre obras viales para estudiantes de la Universidad Peruana de Ciencias Aplicadas.', tech:['PHP','JavaScript','MongoDB','MySQL'], thumbnail:thumb('ViasUPC'), images:['ViasUPC.png'].map(image) },
  { title:'BLISS', category:'PLATAFORMA / RESERVAS', year:'2023', description:'Una plataforma para descubrir y puntuar salones de belleza, adquirir productos y hacer reservas.', tech:['HTML5','CSS3','JavaScript','MongoDB'], thumbnail:thumb('bliss'), images:['bliss.png','bliss1.png','bliss2.png','bliss3.png'].map(image) },
]
const visibleProjects = computed(() => showAll.value ? projects : projects.slice(0, 6))
</script>
