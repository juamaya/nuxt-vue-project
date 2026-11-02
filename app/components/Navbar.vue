 
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const dropdownOpen = ref(false)

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path
}

const closeMenu = () => {
  isOpen.value = false
  dropdownOpen.value = false
}
</script>

<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow fixed-top">
    <div class="container">

      <!-- LOGO -->
      <NuxtLink
        to="/"
        class="navbar-brand fw-bold"
        @click="closeMenu"
      >
       

       <i class="bi bi-house-door mr-5"></i>

        Ju<span class="text-primary">amaya</span>
      </NuxtLink>

      <!-- MOBILE BUTTON -->
      <button
        class="navbar-toggler"
        type="button"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen"
        aria-label="Abrir menú"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- NAVIGATION -->
      <div
        class="collapse navbar-collapse"
        :class="{ show: isOpen }"
      >
        <ul class="navbar-nav ms-auto align-items-lg-center">

          <li class="nav-item">
            <NuxtLink
              to="/"
              class="nav-link"
              :class="{ active: isActive('/') }"
              @click="closeMenu"
            >
              Inicio
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink
              to="/about"
              class="nav-link"
              :class="{ active: isActive('/about') }"
              @click="closeMenu"
            >
              Nosotros
            </NuxtLink>
          </li>
  <li class="nav-item">
            <NuxtLink
              to="/projects"
              class="nav-link"
              :class="{ active: isActive('/projects') }"
              @click="closeMenu"
            >
           Proyectos
            </NuxtLink>
          </li>
          <!-- DROPDOWN -->
          <li
            class="nav-item dropdown"
            :class="{ show: dropdownOpen }"
          >
            <button
              class="nav-link dropdown-toggle btn btn-link"
              :class="{ show: dropdownOpen }"
              @click="dropdownOpen = !dropdownOpen"
              type="button"
              aria-expanded="false"
            >
              Servicios
            </button>

            <ul
              class="dropdown-menu dropdown-menu-end"
              :class="{ show: dropdownOpen }"
            >
              <li>
                <NuxtLink
                  to="/services/web"
                  class="dropdown-item"
                  @click="closeMenu"
                >
                  Desarrollo Web
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/services/design"
                  class="dropdown-item"
                  @click="closeMenu"
                >
                  Diseño
                </NuxtLink>
              </li>

              <li>
                <NuxtLink
                  to="/services/seo"
                  class="dropdown-item"
                  @click="closeMenu"
                >
                  SEO
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <NuxtLink
              to="/contact"
              class="nav-link"
              :class="{ active: isActive('/contact') }"
              @click="closeMenu"
            >
              Contacto
            </NuxtLink>
          </li>
<li class="nav-item ms-lg-3">
  <ThemeToggle />
</li>
         
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.navbar {
  min-height: 70px;
}

.navbar-brand {
  font-size: 1.4rem;
  letter-spacing: 0.5px;
}

.nav-link {
  margin: 0 8px;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #0d6efd !important;
}

.dropdown-menu {
  margin-top: 10px;
  border: none;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.dropdown-item {
  padding: 10px 18px;
}

.dropdown-item:hover {
  background: #e9f2ff;
  color: #0d6efd;
}

@media (max-width: 991px) {
  .navbar-collapse {
    padding: 15px 0;
  }

  .nav-link {
    margin: 5px 0;
  }

  .dropdown-menu {
    box-shadow: none;
    margin-top: 0;
  }

  .navbar-nav {
    align-items: stretch !important;
  }

  .navbar-nav .btn {
    margin-top: 10px;
  }
}
</style>
