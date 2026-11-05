<template>
<section class="section contact-section" id="contact">
        <div class="contact-glow"></div>
        <div class="container">
            <div class="contact-card reveal">
                <span class="contact-icon"><i class="fas fa-envelope"></i></span>
                <h2 class="contact-heading">¿Trabajamos juntos?</h2>
                <p class="contact-text">
                    Tengo una idea, quiero colaborar o simplemente quiero saludar.
                    Compléta el formulario y te respondo a la brevedad.
                </p>

                <!-- Formulario -->
                <form class="contact-form" id="contact-form" @submit.prevent="submit" action="https://formspree.io/f/mgopppqn" method="POST">

                    <div class="form-row">
                        <div class="form-group">
                            <label for="contact-name">Nombre</label>
                            <input type="text" id="contact-name" name="nombre" placeholder="Tu nombre" required
                                autocomplete="name">
                        </div>
                        <div class="form-group">
                            <label for="contact-email">Email</label>
                            <input type="email" id="contact-email" name="email" placeholder="tu@email.com" required
                                autocomplete="email">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="contact-message">Mensaje</label>
                        <textarea id="contact-message" name="mensaje" placeholder="Cuéntame sobre tu proyecto o idea..."
                            required></textarea>
                    </div>

                    <div class="form-feedback" :class="feedbackType" id="form-feedback" role="alert">{{ feedback }}</div>

                    <button type="submit" class="contact-submit" :class="{ loading }" :disabled="loading" id="contact-submit">
                        <span class="submit-spinner"></span>
                        <span class="submit-label">
                            <i class="fas fa-paper-plane" style="margin-right:0.4rem"></i>
                            Enviar mensaje
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </section>
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
    else { const result = await response.json().catch(() => ({})); feedbackType.value = 'error'; feedback.value = result.errors?.map(error => error.message).join(', ') || 'Error al enviar. Inténtalo de nuevo.' }
  } catch { feedbackType.value = 'error'; feedback.value = 'Sin conexión. Revisa tu internet e inténtalo de nuevo.' }
  finally { loading.value = false }
}
</script>
