<template>
  <div class="music-island" :aria-label="en ? 'Favorite music' : 'Música favorita'" @keydown.esc="open = false">
    <div class="island-bar">
      <span class="island-symbol" :class="{ 'is-playing': isPlaying }" aria-hidden="true">♫</span>
      <button class="island-track" type="button" :aria-expanded="open" aria-controls="music-player" @click="togglePlayer">
        <span class="island-title">{{ track.title }}</span>
        <span class="island-subtitle">{{ track.artist }} <span aria-hidden="true">·</span> {{ duration(track.duration) }}</span>
      </button>
      <button class="island-control" type="button" @click="move(-1)" :aria-label="en ? 'Previous song' : 'Canción anterior'"><svg aria-hidden="true" viewBox="0 0 20 20"><path d="m12 5-5 5 5 5" /></svg></button>
      <button class="island-control" type="button" @click="move(1)" :aria-label="en ? 'Next song' : 'Siguiente canción'"><svg aria-hidden="true" viewBox="0 0 20 20"><path d="m8 5 5 5-5 5" /></svg></button>
    </div>
    <div id="music-player" v-show="open" class="island-popover">
      <div class="island-popover-heading"><span>{{ en ? 'FAVORITE MUSIC' : 'MÚSICA FAVORITA' }}</span></div>
      <div v-if="!fallback" ref="playerHost" class="spotify-host"></div>
      <iframe v-else :title="en ? 'Spotify player' : 'Reproductor de Spotify'" :src="embedUrl(track.id)" width="100%" height="152" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <a :href="`https://open.spotify.com/track/${track.id}`" target="_blank" rel="noopener noreferrer">{{ en ? 'Open in Spotify ↗' : 'Abrir en Spotify ↗' }}</a>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, nextTick, onUnmounted } from 'vue'
const props = defineProps({ language: { type: String, default: 'es' } })
const en = computed(() => props.language === 'en')
const tracks = [
  { id: '21urBIcCt4QXKDq4jshN4e', title: 'Blow Your Speakers Out', artist: 'Big Time Rush', duration: 190 },
  { id: '4BoYjqmRxY6HSuljdLgoRU', title: 'All Over Again', artist: 'Big Time Rush', duration: 217 },
  { id: '3U5JVgI2x4rDyHGObzJfNf', title: 'Unwritten', artist: 'Natasha Bedingfield', duration: 259 },
  { id: '1wQvh5x3S37wjUjUGGtpbT', title: 'Stuck', artist: 'Big Time Rush', duration: 185 },
  { id: '692weSPBda8DtvL4Di1XyL', title: 'Worldwide', artist: 'Big Time Rush', duration: 224 }
]
const open = ref(false), current = ref(0), isPlaying = ref(false), playerHost = ref(null), fallback = ref(false)
const track = computed(() => tracks[current.value])
let controller = null, initialized = false, alive = true, timer
function duration(seconds) { return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}` }
function trackUrl(id) { return `https://open.spotify.com/track/${id}?utm_source=generator&theme=1` }
function embedUrl(id) { return `https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=1` }
function useFallback() { if (!alive || controller) return; clearTimeout(timer); isPlaying.value = false; fallback.value = true }
async function initPlayer() {
  if (initialized) return
  initialized = true
  await nextTick()
  if (!alive || !playerHost.value) return
  const mount = document.createElement('div')
  playerHost.value.appendChild(mount)
  const script = document.createElement('script')
  timer = window.setTimeout(useFallback, 12000)
  window.onSpotifyIframeApiReady = api => {
    if (!alive || fallback.value) return
    try {
      const initialId = track.value.id
      api.createController(mount, { url: trackUrl(initialId), width: '100%', height: '152' }, player => {
        if (!alive || fallback.value) { player.destroy(); return }
        controller = player
        clearTimeout(timer)
        player.addListener('playback_started', () => { isPlaying.value = true })
        player.addListener('playback_update', event => { isPlaying.value = !event.data.isPaused && !event.data.isBuffering })
        if (track.value.id !== initialId) player.loadEntity(trackUrl(track.value.id))
      })
    } catch { useFallback() }
  }
  script.src = 'https://open.spotify.com/embed/iframe-api/v1'
  script.async = true
  script.onerror = useFallback
  document.head.appendChild(script)
}
function togglePlayer() { open.value = !open.value; if (open.value) initPlayer() }
function move(step) {
  isPlaying.value = false
  current.value = (current.value + step + tracks.length) % tracks.length
  if (controller) controller.loadEntity(trackUrl(track.value.id))
}
onUnmounted(() => { alive = false; clearTimeout(timer); controller?.destroy() })
</script>
