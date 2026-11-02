
<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

interface Technology {
  name: string
  icon?: string
}

interface Props {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  secondaryDescription?: string
  image?: string
  imageAlt?: string
  experience?: string
  contactText?: string
  contactLink?: string
  stats?: Stat[]
  technologies?: Technology[]
}

withDefaults(defineProps<Props>(), {
  badge: 'Sobre nosotros',
  title: 'Transformamos ideas en experiencias digitales.',
  subtitle: 'Desarrollo web con visión de futuro.',
  description: 'Somos apasionados por la tecnología y el desarrollo web. Creamos soluciones digitales modernas, funcionales y escalables que ayudan a transformar ideas en proyectos reales.',
  secondaryDescription: 'Trabajamos con tecnologías modernas como Vue, Nuxt, JavaScript y TypeScript para desarrollar experiencias rápidas, intuitivas y adaptadas a cualquier dispositivo.',
  image: '/images/juan.jpg',
  imageAlt: 'Desarrollo web y tecnología',
  experience: 'Desarrollo e innovación digital',
  contactText: 'Hablemos de tu proyecto',
  contactLink: '/contact',
  stats: () => [
    { value: '100%', label: 'Compromiso' },
    { value: '24/7', label: 'Innovación' },
    { value: '∞', label: 'Creatividad' }
  ],
  technologies: () => [
    { name: 'Vue.js', icon: 'bi-code-slash' },
    { name: 'Nuxt', icon: 'bi-lightning-charge' },
    { name: 'JavaScript', icon: 'bi-filetype-js' },
    { name: 'TypeScript', icon: 'bi-filetype-tsx' },
    { name: 'Bootstrap', icon: 'bi-bootstrap' }
  ]
})
</script>

<template>
  <section class="about-section py-5">

    <div class="container py-lg-5">

      <div class="row align-items-center gy-5 gx-lg-5">

        <!-- IMAGE -->
        <div class="col-12 col-lg-6">

          <div class="about-image-wrapper">

            <div class="about-image-decoration"></div>

            <img
              :src="image"
              :alt="imageAlt"
              class="about-image"
              loading="lazy"
            >

            <div class="about-floating-card">
              <div class="floating-icon">
                <i class="bi bi-code-slash"></i>
              </div>

              <div>
                <strong>Digital Solutions</strong>
                <span>{{ experience }}</span>
              </div>
            </div>

          </div>

        </div>

        <!-- CONTENT -->
        <div class="col-12 col-lg-6">

          <div class="about-content">

            <span class="about-badge">
              <span class="badge-dot"></span>
              {{ badge }}
            </span>

            <h2 class="about-title mt-4">
              {{ title }}
            </h2>

            <h3 class="about-subtitle">
              {{ subtitle }}
            </h3>

            <p class="about-description mt-4">
              {{ description }}
            </p>

            <p class="about-description">
              {{ secondaryDescription }}
            </p>

            <!-- TECHNOLOGIES -->
            <div class="technologies mt-4">

              <span class="technologies-label">
                Tecnologías
              </span>

              <div class="d-flex flex-wrap gap-2 mt-3">

                <span
                  v-for="technology in technologies"
                  :key="technology.name"
                  class="technology-item"
                >
                  <i
                    v-if="technology.icon"
                    :class="`bi ${technology.icon}`"
                  ></i>

                  {{ technology.name }}
                </span>

              </div>

            </div>

            <!-- STATS -->
            <div class="row g-3 mt-4">

              <div
                v-for="stat in stats"
                :key="stat.label"
                class="col-4"
              >
                <div class="about-stat">
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>
              </div>

            </div>

            <!-- CTA -->
            <div class="mt-4 pt-2">

              <NuxtLink
                :to="contactLink"
                class="about-button"
              >
                {{ contactText }}
                <i class="bi bi-arrow-up-right"></i>
              </NuxtLink>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.about-section {
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow: hidden;
}

/* IMAGE */
.about-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: auto;
  padding: 15px;
}

.about-image-decoration {
  position: absolute;
  width: 75%;
  height: 75%;
  top: 0;
  left: 0;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  opacity: .35;
}

.about-image {
  position: relative;
  display: block;
  width: 70%;
  height: 50%;
  aspect-ratio: 5 / 5.2;
  object-fit: cover;
  border-radius: 28px;
  z-index: 1;
}

/* FLOATING CARD */
.about-floating-card {
  position: absolute;
  z-index: 2;
  bottom: 35px;
  right: -5px;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 17px 20px;
  border-radius: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  max-width: 85%;
}

.floating-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: var(--primary-color);
  color: white;
  font-size: 21px;
  flex-shrink: 0;
}

.about-floating-card strong,
.about-floating-card span {
  display: block;
}

.about-floating-card strong {
  font-size: .95rem;
  color: var(--text-primary);
}

.about-floating-card span {
  margin-top: 4px;
  font-size: .75rem;
  color: var(--text-secondary);
}

/* CONTENT */
.about-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 15px;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  color: var(--primary-color);
  font-size: .85rem;
  font-weight: 600;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-color);
}

.about-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  line-height: 1.15;
  letter-spacing: -1.5px;
  font-weight: 800;
  color: var(--text-primary);
}

.about-subtitle {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--primary-color);
}

.about-description {
  color: var(--text-secondary);
  font-size: .97rem;
  line-height: 1.85;
}

/* TECHNOLOGIES */
.technologies-label {
  font-size: .85rem;
  font-weight: 700;
  color: var(--text-primary);
}

.technology-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: .8rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: .25s ease;
}

.technology-item:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-3px);
}

/* STATS */
.about-stat {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px 10px;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.about-stat strong {
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 800;
  color: var(--primary-color);
}

.about-stat span {
  font-size: .75rem;
  color: var(--text-secondary);
}

/* BUTTON */
.about-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 13px 23px;
  border-radius: 10px;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  font-size: .9rem;
  font-weight: 600;
  transition: .25s ease;
}

.about-button:hover {
  background: var(--primary-hover);
  color: white;
  transform: translateY(-3px);
}

.about-button i {
  font-size: 1.1rem;
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .about-image-wrapper {
    max-width: 600px;
  }

  .about-content {
    padding-top: 15px;
  }
}

@media (max-width: 576px) {
  .about-section {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }

  .about-image-wrapper {
    padding: 10px;
  }

  .about-image {
    border-radius: 20px;
    aspect-ratio: 5 / 4.5;
  }

  .about-floating-card {
    bottom: 20px;
    right: 0;
    padding: 12px;
    gap: 9px;
  }

  .floating-icon {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }

  .about-title {
    letter-spacing: -.8px;
  }

  .about-stat {
    padding: 12px 8px;
  }

  .about-stat span {
    font-size: .68rem;
  }

  .about-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
