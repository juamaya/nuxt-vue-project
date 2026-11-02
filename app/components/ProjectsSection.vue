<script setup lang="ts">

const config = useRuntimeConfig();
const projects = [
  {
    title: "Portfolio creativo",
    category: "Diseño web",
    description: "Portfolio visual para mostrar trabajos y proyectos.",
    image: "/projects/proyecto1.png",
    technologies: ["Nuxt", "CSS"],
    url: "#",
  },
  {
    title: "E-commerce moderno",
    category: "Tienda online",
    description: "Tienda online moderna, rápida y optimizada para ventas.",
    image: "/projects/proyecto4.png",
    technologies: ["Nuxt", "Vue", "Bootstrap"],
    url: "#",
  },
  {
    title: "Web corporativa",
    category: "Desarrollo web",
    description: "Página corporativa con diseño elegante y profesional.",
    image: "/projects/proyecto2.png",
    technologies: ["Nuxt", "TypeScript"],
    url: "#",
  },
  {
    title: "Dashboard administrativo",
    category: "Aplicación web",
    description: "Panel de administración intuitivo y responsive.",
    image: "/projects/proyecto3.png",
    technologies: ["Vue", "Bootstrap"],
    url: "#",
  },
  {
    title: "Plataforma digital",
    category: "Aplicación web",
    description: "Plataforma web personalizada con funcionalidades avanzadas.",
    image: "/projects/proyecto5.png",
    technologies: ["Nuxt", "API"],
    url: "#",
  },
  {
    title: "Landing page",
    category: "Diseño web",
    description:
      "Landing page enfocada en conversión y experiencia de usuario.",
    image: "/projects/proyecto6.png",
    technologies: ["Vue", "Bootstrap"],
    url: "#",
  },
].map(image => ({
  ...image,
  image: `${config.app.baseURL}${image.image.replace(/^\//, '')}`
}));;
</script>

<template>
  <section id="proyectos" class="projects-section py-5">
    <div class="container py-lg-5">
      <!-- Cabecera -->
      <div class="section-header text-center mb-5">
        <span class="section-tag"> NUESTRO PORTFOLIO </span>

        <h2 class="section-title mt-3">
          Proyectos que
          <span>marcan la diferencia.</span>
        </h2>

        <p class="section-description mx-auto mt-3">
          Descubre algunos de nuestros trabajos y las soluciones digitales que
          desarrollamos para nuestros clientes.
        </p>
      </div>

      <!-- Tarjetas -->
      <div class="row g-4">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="col-12 col-md-6 col-lg-4"
        >
          <article class="project-card h-100">
            <!-- Imagen -->
            <div class="project-image">
              <img :src="project.image" :alt="project.title" loading="lazy" />

              <div class="image-overlay">
                <a
                  :href="project.url"
                  class="view-project"
                  :aria-label="`Ver proyecto ${project.title}`"
                >
                  ↗
                </a>
              </div>

              <span class="project-number"> 0{{ index + 1 }} </span>
            </div>

            <!-- Contenido -->
            <div class="project-content">
              <span class="project-category">
                {{ project.category }}
              </span>

              <h3>{{ project.title }}</h3>

              <p>{{ project.description }}</p>

              <div class="technologies">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                >
                  {{ technology }}
                </span>
              </div>

              <a :href="project.url" class="project-link">
                Ver proyecto <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </div>

      <!-- Botón inferior -->
      <div class="text-center mt-5">
        <NuxtLink to="/contact" class="all-projects-btn">
          ¿Tienes un proyecto en mente? Hablemos →
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
 
  color: #f8fafc;
}

/* Cabecera */
.section-tag {
  color: #60a5fa;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-title {
  font-size: clamp(30px, 4vw, 45px);
  font-weight: 800;
  letter-spacing: -1.5px;
  line-height: 1.2;
}

.section-title span {
  color: #60a5fa;
}

.section-description {
  max-width: 580px;
  color: #94a3b8;
  font-size: 15px;
  line-height: 1.8;
}

/* Tarjeta */
.project-card {
  background: #111a2e;
  border: 1px solid #26354d;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  border-color: #3978ed;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.25);
}

/* Imagen */
.project-image {
  height: 220px;
  position: relative;
  overflow: hidden;
  background: #1e293b;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(11, 16, 32, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.view-project {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #3978ed;
  color: white;
  text-decoration: none;
  font-size: 22px;
}

.project-number {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 10px;
  background: rgba(11, 16, 32, 0.8);
  border: 1px solid #475569;
  border-radius: 6px;
  color: #93c5fd;
  font-size: 11px;
}

/* Contenido */
.project-content {
  padding: 24px;
}

.project-category {
  color: #60a5fa;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-content h3 {
  color: #f1f5f9;
  font-size: 19px;
  font-weight: 700;
  margin: 12px 0;
}

.project-content p {
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.7;
  min-height: 44px;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 20px 0;
}

.technologies span {
  background: #1e293b;
  color: #cbd5e1;
  padding: 6px 10px;
  border-radius: 5px;
  font-size: 10px;
}

.project-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #60a5fa;
  font-size: 13px;
  font-weight: 650;
  text-decoration: none;
  padding-top: 15px;
  border-top: 1px solid #26354d;
}

.project-link span {
  font-size: 20px;
  transition: 0.2s;
}

.project-link:hover span {
  transform: translateX(5px);
}

/* Botón inferior */
.all-projects-btn {
  display: inline-block;
  padding: 14px 24px;
  color: white;
  border: 1px solid #334155;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.25s;
}

.all-projects-btn:hover {
  background: #3978ed;
  border-color: #3978ed;
}

/* Responsive */
@media (max-width: 767px) {
  .project-image {
    height: 230px;
  }

  .project-content {
    padding: 20px;
  }

  .section-description {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .project-image {
    height: 190px;
  }
}
</style>
