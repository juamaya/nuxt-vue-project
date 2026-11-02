
<script setup lang="ts">
interface SEOFeature {
  icon: string
  title: string
  description: string
}

interface SEOStat {
  value: string
  label: string
}

interface Props {
  badge?: string
  title?: string
  subtitle?: string
  description?: string
  secondaryDescription?: string
  image?: string
  imageAlt?: string
  features?: SEOFeature[]
  stats?: SEOStat[]
  buttonText?: string
  buttonLink?: string
  imagePosition?: 'left' | 'right'
}

withDefaults(defineProps<Props>(), {
  badge: 'SEO Optimization',
  title: 'Mejora tu posicionamiento y destaca en Google.',
  subtitle: 'Más visibilidad, más oportunidades.',
  description: 'Optimizamos tu sitio web para mejorar su posicionamiento en los motores de búsqueda, atraer tráfico cualificado y conseguir que tu negocio llegue a más personas.',
  secondaryDescription: 'Combinamos estrategias SEO técnicas, optimización de contenidos y análisis de rendimiento para construir una presencia digital sólida y sostenible.',
  image: '/images/seo.jpg',
  imageAlt: 'Optimización SEO y posicionamiento web',
  buttonText: 'Mejorar mi SEO',
  buttonLink: '/contact',
  imagePosition: 'right',
  features: () => [
    {
      icon: 'bi-search',
      title: 'SEO On Page',
      description: 'Optimización de títulos, metadatos, contenido y estructura web.'
    },
    {
      icon: 'bi-speedometer2',
      title: 'SEO Técnico',
      description: 'Mejoramos velocidad, indexación, rastreo y experiencia de usuario.'
    },
    {
      icon: 'bi-graph-up-arrow',
      title: 'SEO Estratégico',
      description: 'Análisis de palabras clave y estrategias para aumentar la visibilidad.'
    }
  ],
  stats: () => [
    { value: 'SEO', label: 'Optimización' },
    { value: 'UX', label: 'Experiencia web' },
    { value: 'ROI', label: 'Rendimiento' }
  ]
})
</script>

<template>
  <section class="seo-section py-5">

    <div class="container py-lg-5">

      <div
        class="row align-items-center gy-5 gx-lg-5"
        :class="{ 'flex-lg-row-reverse': imagePosition === 'left' }"
      >

        <!-- IMAGE -->
        <div class="col-12 col-lg-6">

          <div class="seo-image-wrapper">

            <div class="seo-decoration"></div>

            <img
              :src="image"
              :alt="imageAlt"
              class="seo-image"
              loading="lazy"
            >

            <!-- FLOATING SEO CARD -->
            <div class="seo-floating-card">

              <div class="seo-floating-icon">
                <i class="bi bi-graph-up-arrow"></i>
              </div>

              <div>
                <strong>SEO Performance</strong>
                <span>Optimización continua</span>
              </div>

              <i class="bi bi-check-circle-fill seo-check"></i>

            </div>

          </div>

        </div>

        <!-- CONTENT -->
        <div class="col-12 col-lg-6">

          <div class="seo-content">

            <span class="seo-badge">
              <span class="seo-dot"></span>
              {{ badge }}
            </span>

            <h2 class="seo-title mt-4">
              {{ title }}
            </h2>

            <h3 class="seo-subtitle">
              {{ subtitle }}
            </h3>

            <p class="seo-description mt-4">
              {{ description }}
            </p>

            <p class="seo-description">
              {{ secondaryDescription }}
            </p>

            <!-- FEATURES -->
            <div class="seo-features mt-4">

              <div
                v-for="feature in features"
                :key="feature.title"
                class="seo-feature"
              >

                <div class="seo-feature-icon">
                  <i :class="`bi ${feature.icon}`"></i>
                </div>

                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>

              </div>

            </div>

            <!-- STATS -->
            <div class="row g-3 mt-3">

              <div
                v-for="stat in stats"
                :key="stat.label"
                class="col-4"
              >

                <div class="seo-stat">
                  <strong>{{ stat.value }}</strong>
                  <span>{{ stat.label }}</span>
                </div>

              </div>

            </div>

            <!-- BUTTON -->
            <div class="mt-4 pt-2">

              <NuxtLink
                :to="buttonLink"
                class="seo-button"
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
.seo-section {
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow: hidden;
}

/* IMAGE */
.seo-image-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 540px;
  margin: auto;
  padding: 20px;
}

.seo-decoration {
  position: absolute;
  width: 80%;
  height: 80%;
  top: 0;
  right: 0;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  opacity: .35;
}

.seo-image {
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
.seo-floating-card {
  position: absolute;
  z-index: 2;
  bottom: 40px;
  left: 0;
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

.seo-floating-icon {
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

.seo-floating-card strong,
.seo-floating-card span {
  display: block;
}

.seo-floating-card strong {
  color: var(--text-primary);
  font-size: .9rem;
}

.seo-floating-card span {
  color: var(--text-secondary);
  font-size: .75rem;
  margin-top: 4px;
}

.seo-check {
  color: #198754;
  font-size: 19px;
}

/* CONTENT */
.seo-badge {
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

.seo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-color);
}

.seo-title {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1.5px;
  color: var(--text-primary);
}

.seo-subtitle {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--primary-color);
}

.seo-description {
  color: var(--text-secondary);
  font-size: .96rem;
  line-height: 1.85;
}

/* FEATURES */
.seo-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.seo-feature {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.seo-feature-icon {
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

.seo-feature h4 {
  font-size: .95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.seo-feature p {
  font-size: .84rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}

/* STATS */
.seo-stat {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 14px 10px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
}

.seo-stat strong {
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 800;
  color: var(--primary-color);
}

.seo-stat span {
  font-size: .75rem;
  color: var(--text-secondary);
}

/* BUTTON */
.seo-button {
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

.seo-button:hover {
  background: var(--primary-hover);
  color: white;
  transform: translateY(-3px);
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .seo-image-wrapper {
    max-width: 600px;
  }
}

@media (max-width: 576px) {
  .seo-section {
    padding-top: 35px !important;
    padding-bottom: 35px !important;
  }

  .seo-image-wrapper {
    padding: 12px;
  }

  .seo-image {
    width: 90%;
    aspect-ratio: 5 / 4.5;
    border-radius: 20px;
  }

  .seo-floating-card {
    bottom: 20px;
    left: 0;
    padding: 11px;
    gap: 8px;
  }

  .seo-floating-icon {
    width: 36px;
    height: 36px;
    font-size: 17px;
  }

  .seo-title {
    letter-spacing: -.8px;
  }

  .seo-stat {
    padding: 11px 7px;
  }

  .seo-stat span {
    font-size: .68rem;
  }

  .seo-button {
    width: 100%;
  }
}
</style>
