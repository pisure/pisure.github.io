<template>
  <details class="music-widget" @toggle="isOpen = $event.target.open">
    <summary><span>♫ &nbsp; PSURE TRACKS <small>{{ en ? ' / MY FAVORITE MUSIC' : ' / MI MÚSICA FAVORITA' }}</small></span><span>{{ isOpen ? (en ? 'CLOSE −' : 'CERRAR −') : (en ? 'LISTEN +' : 'ESCUCHAR +') }}</span></summary>
    <div v-if="isOpen" class="music-content">
      <div class="music-controls"><button type="button" @click="move(-1)" :aria-label="en ? 'Previous song' : 'Canción anterior'">←</button><span>{{ String(current + 1).padStart(2, '0') }} / {{ String(tracks.length).padStart(2, '0') }}</span><button type="button" @click="move(1)" :aria-label="en ? 'Next song' : 'Siguiente canción'">→</button><a :href="`https://open.spotify.com/track/${tracks[current]}`" target="_blank" rel="noopener noreferrer">{{ en ? 'Open in Spotify ↗' : 'Abrir en Spotify ↗' }}</a></div>
      <iframe :title="en ? 'Spotify player' : 'Reproductor de Spotify'" :src="`https://open.spotify.com/embed/track/${tracks[current]}?utm_source=generator&theme=0`" width="100%" height="80" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  </details>
</template>
<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ language: { type: String, default: 'es' } })
const en = computed(() => props.language === 'en')
const isOpen = ref(false), current = ref(0)
const tracks = ['21urBIcCt4QXKDq4jshN4e','4BoYjqmRxY6HSuljdLgoRU','3U5JVgI2x4rDyHGObzJfNf','1wQvh5x3S37wjUjUGGtpbT','692weSPBda8DtvL4Di1XyL']
function move(step) { current.value = (current.value + step + tracks.length) % tracks.length }
</script>
