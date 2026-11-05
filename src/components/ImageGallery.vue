<template>
<div v-if="gallery" id="img-modal" class="img-modal open" aria-hidden="false" role="dialog" aria-modal="true">

        <!-- Fondo oscuro — clic aquí para cerrar -->
        <div class="img-modal-backdrop" @click="$emit('close')"></div>

        <div class="img-modal-shell">
            <div class="img-modal-topbar">
                <div class="img-modal-project-badge">
                    <i class="fas fa-images"></i>
                    <span class="img-modal-project-name">{{ gallery.title || 'Proyecto' }}</span>
                </div>
                <div class="img-modal-counter">
                    <span id="modal-current">{{ current + 1 }}</span> / <span id="modal-total">{{ gallery.images.length }}</span>
                </div>
                <button class="img-modal-close" @click="$emit('close')" aria-label="Cerrar">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <!-- ── Área principal donde se muestra la imagen ── -->
            <div class="img-modal-main">

                <!-- Flecha anterior -->
                <button class="img-modal-prev" @click="move(-1)" aria-label="Anterior">
                    <i class="fas fa-chevron-left"></i>
                </button>

                <!-- Contenedor de la imagen -->
                <div class="img-modal-stage">
                    <img class="img-modal-img" :src="gallery.images[current]" :alt="gallery.title || 'Imagen ampliada'">

                    <!-- Gradiente abajo para que el texto se lea bien -->
                    <div class="img-modal-stage-grad"></div>
                </div>

                <!-- Flecha siguiente -->
                <button class="img-modal-next" @click="move(1)" aria-label="Siguiente">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>

            <!-- ── Barra inferior con miniaturas ── -->
            <div class="img-modal-bottom">

                <!-- Miniaturas de las imágenes -->
                <div class="img-modal-thumbs" role="navigation" aria-label="Miniaturas"><button v-for="(image, index) in gallery.images" :key="image + index" type="button" :class="{ active: current === index }" :aria-label="`Imagen ${index + 1}`" @click="current = index"><img :src="image" :alt="`Miniatura ${index + 1}`"></button></div>

                <!-- Título y descripción del proyecto -->
                <div class="img-modal-info">
                    <h3 class="img-modal-title">{{ gallery.title }}</h3>
                    <p class="img-modal-desc">{{ gallery.description }}</p>
                </div>

                <!-- Atajos de teclado para navegar -->
                <div class="img-modal-hint">
                    <kbd>←</kbd><kbd>→</kbd> navegar &nbsp;·&nbsp; <kbd>Esc</kbd> cerrar
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
const props = defineProps({ gallery: Object })
const emit = defineEmits(['close'])
const current = ref(0)
let previousOverflow = ''
watch(() => props.gallery, (gallery, old) => {
  if (gallery) { if (!old) previousOverflow = document.body.style.overflow; current.value = gallery.start; document.body.style.overflow = 'hidden' }
  else if (old) document.body.style.overflow = previousOverflow
})
function move(step) { if (props.gallery) current.value = (current.value + step + props.gallery.images.length) % props.gallery.images.length }
function keys(event) { if (!props.gallery) return; if (event.key === 'Escape') emit('close'); if (event.key === 'ArrowLeft') move(-1); if (event.key === 'ArrowRight') move(1) }
onMounted(() => document.addEventListener('keydown', keys))
onUnmounted(() => { document.removeEventListener('keydown', keys); document.body.style.overflow = previousOverflow })
</script>
