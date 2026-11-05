<template>
  <Teleport to="body"><div v-if="gallery" class="gallery-overlay" role="presentation" @click.self="$emit('close')"><div ref="dialog" class="gallery-dialog" role="dialog" aria-modal="true" aria-labelledby="gallery-title" tabindex="-1"><div class="gallery-top"><div><span class="gallery-label">GALERÍA DE PROYECTO</span><h2 id="gallery-title">{{ gallery.title }}</h2></div><button type="button" class="gallery-close" @click="$emit('close')" aria-label="Cerrar galería">×</button></div><div class="gallery-image"><img :src="gallery.images[current]" :alt="`${gallery.title}, imagen ${current + 1} de ${gallery.images.length}`"><button v-if="gallery.images.length > 1" class="gallery-nav prev" type="button" @click="move(-1)" aria-label="Imagen anterior">←</button><button v-if="gallery.images.length > 1" class="gallery-nav next" type="button" @click="move(1)" aria-label="Imagen siguiente">→</button></div><div class="gallery-footer"><p>{{ gallery.description }}</p><div><span>{{ String(current + 1).padStart(2, '0') }} / {{ String(gallery.images.length).padStart(2, '0') }}</span><span class="gallery-hint">ESC PARA CERRAR</span></div></div><div v-if="gallery.images.length > 1" class="gallery-thumbs"><button v-for="(image, index) in gallery.images" :key="image" type="button" :class="{ active: index === current }" :aria-label="`Ir a imagen ${index + 1}`" :aria-current="index === current ? 'true' : undefined" @click="current = index">{{ index + 1 }}</button></div></div></div></Teleport>
</template>
<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
const props = defineProps({ gallery: Object })
const emit = defineEmits(['close'])
const current = ref(0), dialog = ref(null)
let previousOverflow = '', previousFocus = null
watch(() => props.gallery, async (gallery, old) => {
  if (gallery) { if (!old) { previousOverflow = document.body.style.overflow; previousFocus = document.activeElement } current.value = gallery.start || 0; document.body.style.overflow = 'hidden'; await nextTick(); dialog.value?.focus() }
  else if (old) { document.body.style.overflow = previousOverflow; previousFocus?.focus() }
})
function move(step) { if (props.gallery) current.value = (current.value + step + props.gallery.images.length) % props.gallery.images.length }
function keys(event) { if (!props.gallery) return; if (event.key === 'Escape') emit('close'); else if (event.key === 'ArrowLeft') move(-1); else if (event.key === 'ArrowRight') move(1); else if (event.key === 'Tab' && dialog.value) { const nodes = [...dialog.value.querySelectorAll('button:not([disabled])')]; if (!nodes.length) return; if (event.shiftKey && (document.activeElement === nodes[0] || document.activeElement === dialog.value)) { event.preventDefault(); nodes[nodes.length - 1].focus() } else if (!event.shiftKey && document.activeElement === nodes[nodes.length - 1]) { event.preventDefault(); nodes[0].focus() } } }
onMounted(() => document.addEventListener('keydown', keys))
onUnmounted(() => { document.removeEventListener('keydown', keys); if (props.gallery) document.body.style.overflow = previousOverflow })
</script>
