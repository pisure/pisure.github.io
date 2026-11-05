<template>
<section class="section" id="projects" @click="openProject">
        <div class="container">
            <div class="section-header reveal">
                <div class="section-tag">Proyectos</div>
                <h2 class="section-title">Lo que he construido</h2>
                <p class="section-subtitle">Una selección de los proyectos más relevantes en los que he trabajado.</p>
                <div class="divider"></div>
            </div>

            <div class="projects-grid">

                <!-- Proyecto 1 — Espectrometro -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/espectrometronew.png" alt="Espectrometro Web" class="project-img"
                            data-enlarge="true"
                            data-images="/img/espectrometronew.png,/img/espectrometro1.jpeg,/img/espectrometro2.png,/img/espectrometro3.jpeg"
                            data-title="Espectrometro Web | VIS"
                            data-desc="Aplicación web para mostrar gráficamente los datos de un espectrómetro de luz mediante Bluetooth.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-active" title="Online"></span>
                            <h3 class="project-title">Espectrometro Web — 2025</h3>
                        </div>
                        <p class="project-desc">Aplicación web para mostrar gráficamente los datos de un espectrómetro
                            de luz según los datos ingresados mediante Bluetooth.</p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 2 — Stremio -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/Stremio1.png" alt="Stremio" class="project-img" data-enlarge="true"
                            data-images="/img/Stremio1.png,/img/Stremio2.png,/img/Stremio3.png" data-title="Stremio"
                            data-desc="Aplicación web para la visualización de series y películas desde
                            cualquier dispositivo.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-inactive" title="En mantenimiento"></span>
                            <h3 class="project-title">Stremio (FORK) - 2026</h3>
                        </div>
                        <p class="project-desc">Aplicación web para la visualización de series y películas desde
                            cualquier dispositivo — En desarrollo.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Tailwind</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 3 — Jarvis -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/jarvis3.png" alt="Jarvis" class="project-img" data-enlarge="true"
                            data-images="/img/jarvis1.png,/img/jarvis2.png,/img/jarvis3.png,/img/jarvis4.png,/img/jarvis5.png,/img/jarvis6.png,/img/jarvis7.png"
                            data-title="Jarvis"
                            data-desc="Asistente virtual hecho para organizar tus actividades diarias y recordar tus citas o eventos.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-active" title="Online"></span>
                            <h3 class="project-title">Jarvis - 2026</h3>
                        </div>
                        <p class="project-desc">Asistente virtual hecho para organizar tus actividades diarias,
                            gestionar tus ingresos o gastos y
                            recordar tus eventos - En desarrollo.</p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">Tailwind</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 4 — Inventario IA -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/rosamy1.png" alt="InvIA" class="project-img" data-enlarge="true"
                            data-images="/img/rosamy1.png,/img/rosamy2.png,/img/rosamy3.png,/img/rosamy4.png,/img/rosamy5.png,/img/rosamy6.png,/img/rosamy7.png,/img/rosamy8.png"
                            data-title="InvIA"
                            data-desc="Inventario hecho para empresa de venta de ropa para niños, con asistencia con IA para mejor control de inventario.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-active" title="Online"></span>
                            <h3 class="project-title">Inventario Inteligente - 2026</h3>
                        </div>
                        <p class="project-desc">Inventario hecho para empresa de venta de ropa para niños, con
                            asistencia con IA para mejor control de inventario.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Astro</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 5 — Catálogo con IA -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/catalogo1.png" alt="CatalogoIA" class="project-img" data-enlarge="true"
                            data-images="/img/catalogo3.png,/img/catalogo1.png,/img/catalogo2.png" data-title="CatalogoIA"
                            data-desc="Catálogo hecho para empresa de venta de ropa para niños, con asistencia con IA para mejor control.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-active" title="Online"></span>
                            <h3 class="project-title">Catálogo asistido con IA - 2026</h3>
                        </div>
                        <p class="project-desc">Catálogo hecho para empresa de venta de ropa para niños, con asistencia
                            con IA para mejor control de inventario.</p>
                        <div class="project-tech">
                            <span class="tech-tag">Astro</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 6 — Portfolio Interactivo -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/portafolio2.jpeg" alt="Portfolio Interactivo" class="project-img"
                            data-enlarge="true" data-images="/img/portafolio2.jpeg,/img/portafolio1.jpeg"
                            data-title="Portfolio Interactivo"
                            data-desc="Sitio web interactivo con animaciones y buena UX.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-active" title="Online"></span>
                            <h3 class="project-title">Portfolio Interactivo — 2024</h3>
                        </div>
                        <p class="project-desc">Sitio web interactivo con animaciones avanzadas y experiencia de usuario
                            mejorada.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 7 — QRGen -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/qrgen.png" alt="QRGen" class="project-img" data-enlarge="true"
                            data-images="/img/qrgen.png" data-title="QRGen"
                            data-desc="Website para generar QRs — Open source.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-active" title="Online"></span>
                            <h3 class="project-title">QRGen — 2025</h3>
                        </div>
                        <p class="project-desc">Plataforma open source para generar códigos QR con múltiples métodos:
                            escaneos, links, contactos y más.</p>
                        <div class="project-tech">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 8 — ViasUPC -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/ViasUPC.png" alt="ViasUPC" class="project-img" data-enlarge="true"
                            data-images="/img/ViasUPC.png" data-title="ViasUPC"
                            data-desc="Website desarrollada para la comunidad de ViasUPC — En desarrollo — BETA">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-inactive" title="En mantenimiento"></span>
                            <h3 class="project-title">ViasUPC — 2025</h3>
                        </div>
                        <p class="project-desc">Platform de publicaciones de artículos sobre obras viales desarrollada
                            para estudiantes de la Universidad Peruana de Ciencias Aplicadas.</p>
                        <div class="project-tech">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                    </div>
                </div>

                <!-- Proyecto 9 — BLISS -->
                <div class="project-card">
                    <div class="project-img-wrap">
                        <img src="/img/bliss.png" alt="BLISS" class="project-img" data-enlarge="true"
                            data-images="/img/bliss.png,/img/bliss1.png,/img/bliss2.png,/img/bliss3.png" data-title="BLISS"
                            data-desc="Plataforma para puntuación y reservas en salones de belleza.">
                        <div class="project-img-overlay"></div>
                        <button class="project-zoom-btn" aria-label="Ampliar imagen"><i
                                class="fas fa-expand"></i></button>
                    </div>
                    <div class="project-info">
                        <div class="project-title-row">
                            <span class="status-dot status-archived" title="Offline"></span>
                            <h3 class="project-title">BLISS — 2023</h3>
                        </div>
                        <p class="project-desc">Plataforma multifuncional para puntuar salones de belleza, adquirir
                            productos y realizar reservas online.</p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML5</span>
                            <span class="tech-tag">CSS3</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MongoDB</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const emit = defineEmits(['open-gallery'])
function openProject(event) {
  const trigger = event.target.closest('.project-zoom-btn, img.project-img[data-enlarge="true"]')
  if (!trigger) return
  const image = trigger.closest('.project-card')?.querySelector('img.project-img')
  if (!image) return
  const images = (image.dataset.images || image.getAttribute('src')).split(',').map(s => s.trim()).filter(Boolean)
  emit('open-gallery', { images, title: image.dataset.title || '', description: image.dataset.desc || '', start: Math.max(0, images.indexOf(image.getAttribute('src'))) })
}
</script>
