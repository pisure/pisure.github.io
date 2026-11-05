<template>
  <details class="music-widget" @toggle="isOpen = $event.target.open"><summary><span>♫ &nbsp; PSURE TRACKS</span><span>ESCUCHAR MI PLAYLIST +</span></summary><div v-if="isOpen" class="music-content"><div class="music-controls"><button type="button" @click="move(-1)" aria-label="Canción anterior">←</button><span>{{ current + 1 }} / {{ tracks.length }}</span><button type="button" @click="move(1)" aria-label="Siguiente canción">→</button></div><iframe title="Reproductor de Spotify" :src="`https://open.spotify.com/embed/track/${tracks[current]}?utm_source=generator&theme=0`" width="100%" height="80" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe></div></details>
</template>
<script setup>
import { ref } from 'vue'
const isOpen = ref(false), current = ref(0)
const tracks = ['21urBIcCt4QXKDq4jshN4e','4BoYjqmRxY6HSuljdLgoRU','3U5JVgI2x4rDyHGObzJfNf','1wQvh5x3S37wjUjUGGtpbT','692weSPBda8DtvL4Di1XyL']
function move(step) { current.value = (current.value + step + tracks.length) % tracks.length }
</script>
