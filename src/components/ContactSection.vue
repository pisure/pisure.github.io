<template>
  <section class="section contact-section" id="contact"><div class="wrap contact-grid"><div class="contact-copy"><p class="eyebrow"><span>04</span> / SIGUIENTE PASO</p><h2>¿Tienes una idea?<br><em>Hagámosla realidad.</em></h2><p>Si tienes un proyecto en mente, quieres colaborar o simplemente saludar, este es un buen lugar para empezar.</p><div class="contact-note"><span>→</span><div>CUÉNTAME QUÉ ESTÁS CONSTRUYENDO<br><strong>Yo pongo el café y el código.</strong></div></div></div><form class="contact-form" @submit.prevent="submit" action="https://formspree.io/f/mgopppqn" method="POST"><div class="form-heading"><span>MENSAJE NUEVO</span><span>✳</span></div><div class="form-row"><label>Tu nombre<input name="nombre" type="text" autocomplete="name" placeholder="¿Cómo te llamas?" required></label><label>Tu correo<input name="email" type="email" autocomplete="email" placeholder="hola@ejemplo.com" required></label></div><label>Tu mensaje<textarea name="mensaje" rows="4" placeholder="Cuéntame un poco sobre tu idea..." required></textarea></label><p class="form-feedback" :class="feedbackType" role="status" aria-live="polite">{{ feedback }}</p><button class="button primary submit-button" type="submit" :disabled="loading">{{ loading ? 'Enviando…' : 'Enviar mensaje' }} <span>↗</span></button></form></div></section>
</template>
<script setup>
import { ref } from 'vue'
const loading = ref(false), feedback = ref(''), feedbackType = ref('')
async function submit(event) {
  const form = event.target
  loading.value = true; feedback.value = ''; feedbackType.value = ''
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
    if (response.ok) { feedbackType.value = 'success'; feedback.value = '¡Mensaje enviado! Te responderé pronto.'; form.reset() }
    else { const result = await response.json().catch(() => ({})); feedbackType.value = 'error'; feedback.value = result.errors?.map(error => error.message).join(', ') || 'No se pudo enviar. Inténtalo de nuevo.' }
  } catch { feedbackType.value = 'error'; feedback.value = 'Sin conexión. Revisa tu internet e inténtalo de nuevo.' }
  finally { loading.value = false }
}
</script>
