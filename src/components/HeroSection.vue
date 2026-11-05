<template>
<section class="hero-section" id="hero">
        <div class="hero-glow"></div>
        <div class="container">
            <div class="hero-inner">

                <div class="hero-badge">
                    Disponible para proyectos
                </div>

                <div class="profile-img-container">
                    <div class="profile-img-ring"></div>
                    <div class="profile-img-mask">
                        <img src="/img/golden.jpg" alt="Aaron Espinoza" class="profile-img default-img">
                        <img src="/img/foto.jpg" alt="Aaron Espinoza" class="profile-img hover-img">
                    </div>
                </div>

                <h1 class="hero-heading">
                    Hola, soy&nbsp;<span class="gradient-text">
                        <span class="svg-logo" aria-hidden="true">
                            <svg id="logo-logotype" class="svg-logo" viewBox="0 0 200 60"
                                xmlns="http://www.w3.org/2000/svg" aria-labelledby="logoTitle">
                                <title id="logoTitle">Aaron</title>
                                <text class="logo-text" x="0" y="45">Aaron</text>
                            </svg>
                        </span>
                    </span>
                </h1>

                <div class="typing-wrapper">
                    <span class="typing-prefix">//</span>
                    <span id="typing-text">{{ typed }}</span>
                    <span class="cursor-blink"></span>
                </div>

                <div class="social-icons">
                    <a href="https://www.instagram.com/ron.es4/" target="_blank" class="social-icon" title="Instagram"
                        id="social-instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aaron-espinoza-393856346/" target="_blank" class="social-icon"
                        title="LinkedIn" id="social-linkedin">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/pisure" target="_blank" class="social-icon" title="GitHub"
                        id="social-github">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://discord.com/users/pisuree" target="_blank" class="social-icon" title="Discord"
                        id="social-discord">
                        <i class="fab fa-discord"></i>
                    </a>
                </div>

            </div>
        </div>

        <div class="scroll-indicator">
            <div class="mouse"></div>
            <span>Scroll</span>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const typed = ref('')
const texts = ['Freelancer', 'Estudiante Ing. Software', 'Full Stack Developer', 'UI / UX Enthusiast']
let timer, logoTimer, fillTimer, index = 0, length = 0, deleting = false
function tick() {
  const text = texts[index]
  length += deleting ? -1 : 1
  typed.value = text.slice(0, length)
  let delay = deleting ? 55 : 110
  if (!deleting && length === text.length) { deleting = true; delay = 2000 }
  else if (deleting && length === 0) { deleting = false; index = (index + 1) % texts.length; delay = 450 }
  timer = setTimeout(tick, delay)
}
onMounted(() => {
  timer = setTimeout(tick, 900)
  const logo = document.querySelector('.logo-text')
  logoTimer = setTimeout(() => logo?.classList.add('animate'), 80)
  fillTimer = setTimeout(() => logo?.classList.add('filled'), 1400)
})
onUnmounted(() => [timer, logoTimer, fillTimer].forEach(clearTimeout))
</script>
