<template>
<div class="music-controller" id="music-widget">
        <div class="music-inner">
            <button class="music-toggle" id="music-toggle-btn" @click="toggleMusic" :aria-expanded="musicOpen" aria-label="Mostrar/ocultar música">
                <i class="fas fa-music"></i>
                <span>Psure tracks</span>
                <i class="fas fa-chevron-up" id="music-chevron" :style="{ transform: musicOpen ? '' : 'rotate(180deg)' }"></i>
            </button>
            <div class="music-body" :class="{ open: musicOpen }" id="music-body">
                <div class="music-title"><i class="fas fa-music"></i> psure tracks</div>
                <!-- Controles de navegación -->
                <div class="music-nav">
                    <button class="music-nav-btn" id="music-prev" @click="changeTrack(-1)" aria-label="Canción anterior" title="Anterior">
                        <i class="fas fa-backward-step"></i>
                    </button>
                    <div class="music-track-info">
                        <span class="music-track-num" id="music-track-num">{{ current + 1 }} / {{ tracks.length }}</span>
                    </div>
                    <button class="music-nav-btn" id="music-next" @click="changeTrack(1)" aria-label="Siguiente canción" title="Siguiente">
                        <i class="fas fa-forward-step"></i>
                    </button>
                </div>
                <div class="spotify-embed">
                    <iframe id="spotify-iframe" data-testid="embed-iframe" style="border-radius:10px"
                        :src="`https://open.spotify.com/embed/track/${tracks[current]}?utm_source=generator&theme=0`"
                        width="100%" height="80" frameBorder="0" allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const tracks = ['21urBIcCt4QXKDq4jshN4e', '4BoYjqmRxY6HSuljdLgoRU', '3U5JVgI2x4rDyHGObzJfNf', '1wQvh5x3S37wjUjUGGtpbT', '692weSPBda8DtvL4Di1XyL']
const current = ref(0), musicOpen = ref(false)
function changeTrack(step) { current.value = (current.value + step + tracks.length) % tracks.length }
function syncSize() { musicOpen.value = window.innerWidth > 768 }
function toggleMusic() { if (window.innerWidth <= 768) musicOpen.value = !musicOpen.value }
onMounted(() => { syncSize(); window.addEventListener('resize', syncSize) })
onUnmounted(() => window.removeEventListener('resize', syncSize))
</script>
