
# 🚀 Juamaya26 | Web Development

<p align="center">
  <img src="public/images/madre.jpg" alt="Juamaya26 Logo" width="180">
</p>

  <h3 align="center">  nuxt-vue-project</h3>
<h3 align="center">
  Desarrollo web moderno con Vue 3, Nuxt 4 y Bootstrap 5
</h3>


<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-4.6.3-00DC82?logo=nuxt.js&logoColor=white" alt="Nuxt">
  <img src="https://img.shields.io/badge/Vue-3.5.44-42B883?logo=vue.js&logoColor=white" alt="Vue">
  <img src="https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap">
  <img src="https://img.shields.io/badge/TypeScript-Language-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
</p>

---

## 📖 Descripción

Juamaya26 es un proyecto de desarrollo web moderno construido con Nuxt 4, Vue 3, TypeScript y Bootstrap 5.

El proyecto está diseñado para ofrecer una experiencia digital elegante, responsive y optimizada, utilizando componentes reutilizables y una arquitectura organizada.

### ✨ Características

- Diseño moderno, minimalista y elegante.
- Diseño responsive para móviles, tablets y escritorio.
- Componentes reutilizables con Vue 3.
- Arquitectura basada en Nuxt 4.
- TypeScript para mejorar la calidad del código.
- Bootstrap 5 para estilos y diseño responsive.
- Modo Dark / Light.
- Componentes personalizables mediante Props.
- Carrusel de imágenes.
- Marquee de tecnologías.
- Secciones About, SEO y Web Design.
- Optimización SEO mediante useSeoMeta.
- Generación estática para GitHub Pages.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Nuxt 4 | Framework basado en Vue |
| Vue 3 | Framework JavaScript |
| TypeScript | Tipado estático |
| Bootstrap 5 | Framework CSS responsive |
| Bootstrap Icons | Biblioteca de iconos |
| Vue Router | Enrutamiento de páginas |
| Vite | Herramienta de desarrollo |

### Tecnologías principales

#### Nuxt 4

Framework utilizado para construir la aplicación, gestionar rutas, componentes y generar páginas estáticas.

https://nuxt.com/

#### Vue 3

Framework progresivo para construir interfaces mediante componentes reutilizables.

https://vuejs.org/

#### Bootstrap 5

Framework CSS utilizado para crear interfaces responsive y modernas.

https://getbootstrap.com/

#### TypeScript

Lenguaje que proporciona tipado estático y mejora la mantenibilidad del proyecto.

https://www.typescriptlang.org/

---

## 📋 Requisitos previos

Antes de comenzar necesitas instalar:

- Node.js (versión LTS compatible con Nuxt 4).
- npm.
- Git.
- Visual Studio Code (recomendado).

Comprueba las versiones instaladas:

```bash
node -v
npm -v
git --version
```

---

## 🚀 Crear el proyecto desde cero

### 1. Crear un proyecto Nuxt

```bash
npx nuxi@latest init nuxt-vue-project
```

### 2. Entrar en el directorio

```bash
cd nuxt-vue-project
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Instalar Bootstrap y Bootstrap Icons

```bash
npm install bootstrap bootstrap-icons
```

### 5. Ejecutar el proyecto

```bash
npm run dev
```

Abre el navegador:

http://localhost:3000

---

## 📁 Estructura del proyecto

La organización recomendada es:

```text
nuxt-vue-project/
│
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css
│   │
│   ├── components/
│   │   ├── Navbar.vue
│   │   ├── BaseAbout.vue
│   │   ├── BaseSEO.vue
│   │   ├── BaseWebDesign.vue
│   │   ├── BaseCard.vue
│   │   ├── BaseCarousel.vue
│   │   ├── BaseAvatar.vue
│   │   ├── BaseMarquee.vue
│   │   └── BaseFooter.vue
│   │
│   ├── layouts/
│   │   └── default.vue
│   │
│   ├── pages/
│   │   ├── index.vue
│   │   ├── seo.vue
│   │   └── contact.vue
│   │
│   └── app.vue
│
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── about.jpg
│   │   ├── seo.jpg
│   │   └── web-design.jpg
│   │
│   └── logos/
│       ├── node.jpg
│       ├── nuxt.jpg
│       ├── js.png
│       └── vite.jpg
│
├── nuxt.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Configurar Bootstrap

En `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  devtools: {
    enabled: true
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Juamaya26 | Web Development',
      meta: [
        {
          name: 'description',
          content: 'Desarrollo web moderno con Vue y Nuxt.'
        }
      ]
    }
  }
})
```

Si utilizas Bootstrap JavaScript, puedes incorporarlo mediante un plugin cliente.

Crea `app/plugins/bootstrap.client.ts`:

```ts
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

---

## 🌙 Configurar Dark / Light Mode

Puedes definir las variables globales en:

`app/assets/css/main.css`

```css
:root {
  --primary-color: #0d6efd;
  --primary-hover: #0b5ed7;

  --bg-primary: #ffffff;
  --bg-secondary: #f5f7fa;
  --bg-card: #ffffff;

  --text-primary: #212529;
  --text-secondary: #6c757d;

  --border-color: #e5e7eb;

  --shadow: 0 10px 30px rgba(0, 0, 0, .08);
}

[data-theme="dark"] {
  --primary-color: #5b9cff;
  --primary-hover: #347fe5;

  --bg-primary: #111827;
  --bg-secondary: #1f2937;
  --bg-card: #1f2937;

  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;

  --border-color: #374151;

  --shadow: 0 10px 30px rgba(0, 0, 0, .25);
}

body {
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background .3s ease, color .3s ease;
}
```

---

## 🧩 Componentes reutilizables

Los componentes se encuentran en `app/components/`.

Nuxt permite importarlos automáticamente.

Ejemplo:

```vue
<template>
  <div>
    <BaseAbout />

    <BaseWebDesign />

    <BaseSEO />

    <BaseFooter />
  </div>
</template>
```

También puedes personalizarlos mediante Props:

```vue
<BaseWebDesign
  title="Creamos experiencias digitales"
  subtitle="Diseño, creatividad y tecnología."
  image="/images/web-design.jpg"
  button-text="Solicitar presupuesto"
  button-link="/contact"
/>
```

---

## 🔍 Configuración SEO

Nuxt proporciona `useSeoMeta()` para definir los metadatos de cada página.

Ejemplo:

```vue
<script setup lang="ts">
useSeoMeta({
  title: 'Juamaya26 | Web Development',

  description:
    'Creamos aplicaciones web modernas con Vue y Nuxt.',

  ogTitle: 'Juamaya26 | Web Development',

  ogDescription:
    'Desarrollo web moderno y soluciones digitales.',

  ogType: 'website'
})
</script>
```

---

# 🌐 Publicar en GitHub Pages

GitHub Pages permite alojar gratuitamente sitios web estáticos.

Para publicar Nuxt 4 utilizaremos la generación estática.

## 1. Configurar Nuxt para GitHub Pages

Abre `nuxt.config.ts`.

Si tu repositorio se llama `nuxt-vue-project`, configura:

```ts
export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',

  devtools: {
    enabled: true
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.css'
  ],

  app: {
    baseURL: process.env.NODE_ENV === 'production'
      ? '/nuxt-vue-project/'
      : '/'
  }
})
```

**Importante:** cambia `/nuxt-vue-project/` por el nombre exacto de tu repositorio.

Si publicas en un repositorio especial llamado `usuario.github.io`, utiliza `/` como `baseURL`.

## 2. Generar la web estática

Ejecuta:

```bash
npm run generate
```

Nuxt generará los archivos estáticos en:

```text
.output/public/
```

Esta carpeta contiene los archivos que se publicarán en GitHub Pages.

## 3. Crear el repositorio en GitHub

1. Accede a https://github.com/
2. Pulsa en New repository.
3. Introduce el nombre `nuxt-vue-project`.
4. Selecciona Public.
5. Crea el repositorio.

## 4. Subir el proyecto a GitHub

Desde la terminal:

```bash
git init

git add .

git commit -m "Initial commit"

git branch -M main

git remote add origin https://github.com/TU-USUARIO/nuxt-vue-project.git

git push -u origin main
```

Sustituye `TU-USUARIO` por tu usuario de GitHub.

## 5. Crear GitHub Actions

Crea el archivo:

```text
.github/workflows/deploy.yml
```

Añade el siguiente contenido:

```yaml

name: Deploy Nuxt to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: pnpm

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Generate static website
        run: pnpm run generate
        env:
          NODE_ENV: production

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: .output/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

## 6. Activar GitHub Pages

En tu repositorio:

1. Accede a Settings.
2. Selecciona Pages.
3. En Build and deployment, selecciona GitHub Actions.
4. Guarda la configuración.

GitHub Actions se encargará de generar y publicar tu proyecto automáticamente cada vez que hagas un push a `main`.

## 7. URL de tu página

Cuando finalice correctamente el despliegue, tu web estará disponible en:

```text
https://TU-USUARIO.github.io/nuxt-vue-project/
```

---

## 📦 Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm install` | Instalar dependencias |
| `npm run dev` | Ejecutar servidor local |
| `npm run build` | Compilar aplicación |
| `npm run generate` | Generar sitio estático |
| `npm run preview` | Previsualizar compilación |
| `npm run postinstall` | Preparar Nuxt |

---

## ⚠️ Consideraciones para GitHub Pages

- GitHub Pages no ejecuta un servidor Node.js. Utiliza la generación estática.
- Las rutas deben funcionar con el `baseURL` del repositorio.
- Comprueba que las imágenes de `public/` utilicen rutas compatibles con el subdirectorio de publicación.
- Las rutas dinámicas deben generarse mediante `nitro.prerender.routes` si necesitan estar disponibles como páginas estáticas.
- Las API que requieren un servidor Node.js no funcionarán directamente en GitHub Pages.
- Para las rutas internas, utiliza `NuxtLink` y comprueba la navegación después de publicar.
- Configura un fallback si necesitas resolver rutas SPA que no hayan sido prerenderizadas.

---

## 👨‍💻 Autor

**Juamaya26**

Web Development | Frontend Developer

Tecnologías:
Vue.js · Nuxt · TypeScript · JavaScript · Bootstrap

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

Puedes utilizarlo, modificarlo y adaptarlo según tus necesidades.
