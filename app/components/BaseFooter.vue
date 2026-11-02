
<script setup lang="ts">
interface FooterLink {
  label: string
  to: string
}

interface SocialLink {
  name: string
  icon: string
  url: string
}

interface Props {
  brand?: string
  description?: string
  email?: string
  navigation?: FooterLink[]
  services?: FooterLink[]
  socials?: SocialLink[]
  copyright?: string
}

const props = withDefaults(defineProps<Props>(), {
  brand: 'Juamaya26',
  description: 'Creamos experiencias digitales modernas y soluciones innovadoras para impulsar tu negocio.',
  email: 'info@mywebsite.com',
  navigation: () => [
    { label: 'Inicio', to: '/' },
    { label: 'Nosotros', to: '/about' },
    { label: 'Proyectos', to: '/projects' },
    { label: 'Contacto', to: '/contact' }
  ],
  services: () => [
    { label: 'Desarrollo Web', to: '/services/web' },
    { label: 'Diseño UI/UX', to: '/services/design' },
    { label: 'SEO', to: '/services/seo' },
    
  ],
  socials: () => [
    { name: 'Facebook', icon: 'bi-facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'bi-instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'bi-linkedin', url: 'https://linkedin.com' },
    { name: 'GitHub', icon: 'bi-github', url: 'https://github.com' }
  ],
  copyright: ''
})

const currentYear = new Date().getFullYear()

const copyrightText = computed(() =>
  props.copyright || `© ${currentYear} ${props.brand}. Todos los derechos reservados.`
)

 
 
</script>

<template>
  <footer class="base-footer">

    <div class="container">

      <!-- MAIN FOOTER -->
      <div class="row gy-5 footer-main">

        <!-- BRAND -->
        <div class="col-12 col-lg-4">

          <NuxtLink to="/" class="footer-brand">
            <i class="bi bi-code-slash"></i>
            {{ brand }}
          </NuxtLink>

          <p class="footer-description mt-3">
            {{ description }}
          </p>

          <!-- SOCIAL NETWORKS -->
          <div class="d-flex flex-wrap gap-3 mt-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              class="social-link"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="`bi ${social.icon}`"></i>
            </a>
          </div>

        </div>

        <!-- NAVIGATION -->
        <div class="col-6 col-lg-2">

          <h6 class="footer-title">
            Navegación
          </h6>

          <ul class="footer-links">
            <li v-for="link in navigation" :key="link.to">
              <NuxtLink :to="link.to">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>

        </div>

        <!-- SERVICES -->
        <div class="col-6 col-lg-2">

          <h6 class="footer-title">
            Servicios
          </h6>

          <ul class="footer-links">
            <li v-for="service in services" :key="service.to">
              <NuxtLink :to="service.to">
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>

        </div>

       
      </div>

      <!-- FOOTER BOTTOM -->
      <div class="footer-bottom">

        <div class="row align-items-center gy-3">

          <div class="col-12 col-md-6 text-center text-md-start">
            <small>{{ copyrightText }}</small>
          </div>
 

          </div>

        </div>

      </div>

    

  </footer>
</template>

<style scoped>
.base-footer {
  background: var(--bg-secondary);
  color: var(--text-primary);
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.footer-main {
  padding-top: 70px;
  padding-bottom: 55px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.footer-brand i {
  color: var(--primary-color);
  font-size: 1.8rem;
}

.footer-description {
  max-width: 360px;
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 0.95rem;
}

.footer-title {
  font-weight: 700;
  margin-bottom: 22px;
  font-size: 1rem;
  color: var(--text-primary);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 13px;
}

.footer-links a,
.footer-legal a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color .2s ease;
  font-size: .9rem;
}

.footer-links a:hover,
.footer-legal a:hover {
  color: var(--primary-color);
}

.social-link {
  width: 40px;
  height: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  color: var(--text-primary);
  text-decoration: none;
  transition: all .25s ease;
}

.social-link:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: white;
  transform: translateY(-4px);
}

.social-link i {
  font-size: 17px;
}

.newsletter-form .form-control {
  min-height: 45px;
  background: var(--bg-card);
  color: var(--text-primary);
  border-color: var(--border-color);
}

.newsletter-form .form-control::placeholder {
  color: var(--text-secondary);
}

.newsletter-form .btn {
  padding-left: 18px;
  padding-right: 18px;
}

.newsletter-message {
  display: block;
  margin-top: 10px;
  color: var(--text-secondary);
}

.footer-bottom {
  border-top: 1px solid var(--border-color);
  padding: 25px 0;
  color: var(--text-secondary);
}

.footer-legal {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 25px;
}

@media (max-width: 767px) {
  .footer-main {
    padding-top: 45px;
    padding-bottom: 35px;
  }

  .footer-description {
    max-width: 100%;
  }

  .footer-bottom {
    padding: 20px 0;
  }

  .footer-legal {
    justify-content: center;
    gap: 18px;
  }
}

@media (max-width: 380px) {
  .footer-legal {
    gap: 12px;
  }

  .footer-brand {
    font-size: 1.3rem;
  }
}
</style>
