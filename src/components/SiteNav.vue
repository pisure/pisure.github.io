<template>
<nav class="navbar" :class="{ scrolled }" id="navbar">
        <div class="navbar-inner">
            <a href="#hero" class="nav-logo" id="nav-logo">
                <span class="nav-logo-text">@PSURE</span>
            </a>
            <div class="nav-separator"></div>
            <ul class="nav-links" :class="{ open: menuOpen }" id="nav-links">
                <li><a href="#hero" class="nav-link" :class="{ active: activeSection === 'hero' }" @click="menuOpen = false">Inicio</a></li>
                <li><a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }" @click="menuOpen = false">Sobre mí</a></li>
                <li><a href="#projects" class="nav-link" :class="{ active: activeSection === 'projects' }" @click="menuOpen = false">Proyectos</a></li>
                <li><a href="#skills" class="nav-link" :class="{ active: activeSection === 'skills' }" @click="menuOpen = false">Skills</a></li>
            </ul>
            <div class="nav-actions">
                <button class="theme-toggle" id="theme-toggle" @click="$emit('toggle-theme')" :title="theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'" aria-label="Cambiar tema" >
                    <i :class="theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'" id="theme-icon"></i>
                </button>
                <a href="#contact" class="nav-cta-btn">Contacto</a>
            </div>
            <button type="button" class="nav-hamburger" id="hamburger" aria-label="Menú" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
defineProps({ theme: String, activeSection: String, scrolled: Boolean })
defineEmits(['toggle-theme'])
const menuOpen = ref(false)
</script>
