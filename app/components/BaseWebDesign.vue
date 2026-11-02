
<script setup lang="ts">
interface WebFeature {
  icon: string
  title: string
  description: string
}

interface WebStat {
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
  features?: WebFeature[]
  stats?: WebStat[]
  technologies?: Technology[]
  buttonText?: string
  buttonLink?: string
  imagePosition?: 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  badge: 'Diseño Web',
  title: 'Diseñamos páginas web que conectan con tus clientes.',
  subtitle: 'Diseño, creatividad y tecnología.',
  description: 'Creamos experiencias digitales modernas, atractivas y funcionales. Diseñamos páginas web que representan la identidad de tu marca y ofrecen una experiencia intuitiva a tus usuarios.',
  secondaryDescription: 'Combinamos diseño UI/UX, desarrollo frontend y tecnologías modernas para construir sitios web rápidos, accesibles y adaptados a cualquier dispositivo.',
  image: '/images/web-design.jpg',
  imageAlt: 'Diseño y desarrollo de páginas web',
  buttonText: 'Crear mi página web',
  buttonLink: '/contact',
  imagePosition: 'left',
  features: () => [
    {
      icon: 'bi-palette',
      title: 'Diseño UI/UX',
      description: 'Interfaces atractivas, intuitivas y centradas en la experiencia del usuario.'
    },
    {
      icon: 'bi-phone',
      title: 'Diseño Responsive',
      description: 'Webs adaptadas a móviles, tablets y ordenadores.'
    },
    {
      icon: 'bi-code-slash',
      title: 'Desarrollo Frontend',
      description: 'Desarrollo moderno con tecnologías rápidas, escalables y eficientes.'
    }
  ],
  stats: () => [
    { value: 'UI/UX', label: 'Experiencia' },
    { value: '100%', label: 'Responsive' },
    { value: 'SEO', label: 'Optimización' }
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
  <section class="web-design-section py-5">

    <div class="container py-lg-5">

      <div
        class="row align-items-center gy-5 gx-lg-5"
        :class="{ 'flex-lg-row-reverse': imagePosition === 'left' }"
      >

        <!-- IMAGE -->
        <div class="col-12 col-lg-6">

          <div class="web-image-wrapper">

            <div class="web-image-decoration"></div>

            <img
              :src="image"
              :alt="imageAlt"
              class="web-image"
              loading="lazy"
            >

            <!-- FLOATING CARD -->
            <div class="web-floating-card">

              <div class="web-floating-icon">
                <i class="bi bi-window-stack"></i>
              </div>

              <div class="web-floating-content">
                <strong>Web Design</strong>
                <span>Diseño digital moderno</span>
              </div>

              <i class="bi bi-check-circle-fill web-check"></i>

            </div>

          </div>

        </div>

        <!-- CONTENT -->
        <div class="col-12 col-lg-6">

          <div class="web-content">

            <span class="web-badge">
              <span class="web-dot"></span>
              {{ badge }}
            </span>

            <h2 class="web-title mt-4">
              {{ title }}
            </h2>

            <h3 class="web-subtitle">
              {{ subtitle }}
            </h3>

            <p class="web-description mt-4">
              {{ description }}
            </p>

            <p class="web-description">
              {{ secondaryDescription }}
            </p>

            <!-- FEATURES -->
            <div class="web-features mt-4">

              <div
                v-for="feature in features"
                :key="feature.title"
                class="web-feature"
              >

                <div class="web-feature-icon">
                  <i :class="`bi ${feature.icon}`"></i>
                </div>

                <div class="web-feature-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>

              </div>

            </div>

            <!-- TECHNOLOGIES -->
            <div class="web-technologies mt-4">

              <span class="web-technologies-label">
                Tecnologías
              </span>

              <div class="d-flex flex-wrap gap-2 mt-3">

                <span
                  v-for="technology in technologies"
                  :key="technology.name"
                  class="web-technology"
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
            <div class="row g-3 mt-3">

              <div
                v-for="stat in stats"
                :key="stat.label"
                class="col-4"
              >

                <div class="web-stat">
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>

              </div>

            </div>

            <!-- BUTTON -->
            <div class="mt-4 pt-2">

              <NuxtLink
                :to="buttonLink"
                class="web-button"
              >
                {{ buttonText }}
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
.web-design-section {
   background: transparent;
  color: var(--text-primary);
  overflow: hidden;
}

/* IMAGE */
.web-image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 540px;
  margin: auto;
  padding: 20px;
}

.web-image-decoration {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 0;
  left: 0;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  opacity: .35;
}

.web-image {
  position: relative;
  display: block;
  width: 85%;
  height: auto;
  max-height: 500px;
  aspect-ratio: 5 / 5.2;
  object-fit: cover;
  border-radius: 28px;
  z-index: 1;
}

/* FLOATING CARD */
.web-floating-card {
  position: absolute;
  z-index: 2;
  bottom: 40px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  max-width: 90%;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.web-floating-icon {
  width: 43px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: var(--primary-color);
  color: white;
  border-radius: 12px;
  font-size: 20px;
}

.web-floating-content strong,
.web-floating-content span {
  display: block;
}

.web-floating-content strong {
  color: var(--text-primary);
  font-size: .9rem;
}

.web-floating-content span {
  color: var(--text-secondary);
  font-size: .75rem;
  margin-top: 4px;
}

.web-check {
  color: #198754;
  font-size: 19px;
}

/* CONTENT */
.web-badge {
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

.web-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-color);
}

.web-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1.5px;
  color: var(--text-primary);
}

.web-subtitle {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--primary-color);
}

.web-description {
  color: var(--text-secondary);
  font-size: .96rem;
  line-height: 1.85;
}

/* FEATURES */
.web-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.web-feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.web-feature-icon {
  width: 43px;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--primary-color);
  font-size: 19px;
}

.web-feature-content h4 {
  font-size: .95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.web-feature-content p {
  font-size: .84rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}

/* TECHNOLOGIES */
.web-technologies-label {
  font-size: .85rem;
  font-weight: 700;
  color: var(--text-primary);
}

.web-technology {
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

.web-technology:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-3px);
}

/* STATS */
.web-stat {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 14px 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.web-stat strong {
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 800;
  color: var(--primary-color);
}

.web-stat span {
  font-size: .75rem;
  color: var(--text-secondary);
}

/* BUTTON */
.web-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

.web-button:hover {
  background: var(--primary-hover);
  color: white;
  transform: translateY(-3px);
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .web-image-wrapper {
    max-width: 600px;
  }
}

@media (max-width: 576px) {
  .web-design-section {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }

  .web-image-wrapper {
    padding: 12px;
  }

  .web-image {
    width: 90%;
    aspect-ratio: 5 / 4.5;
    border-radius: 20px;
  }

  .web-floating-card {
    bottom: 20px;
    right: 0;
    padding: 11px;
    gap: 8px;
  }

  .web-floating-icon {
    width: 36px;
    height: 36px;
    font-size: 17px;
  }

  .web-title {
    letter-spacing: -.8px;
  }

  .web-stat {
    padding: 11px 7px;
  }

  .web-stat span {
    font-size: .68rem;
  }

  .web-button {
    width: 100%;
  }
}
</style>
