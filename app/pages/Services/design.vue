<script setup lang="ts">
useSeoMeta({
  title: "Juamaya26 | Design",
  description:
    "Descubre nuestro enfoque en el diseño de experiencias digitales.",
});

const config = useRuntimeConfig();

const designImage = `${config.app.baseURL}images/design.jpg`;

const webFeatures = [
  {
    icon: "bi-palette",
    title: "Diseño UI/UX",
    description: "Interfaces atractivas, intuitivas y centradas en el usuario.",
  },
  {
    icon: "bi-phone",
    title: "Diseño Responsive",
    description: "Adaptación perfecta a móviles, tablets y ordenadores.",
  },
  {
    icon: "bi-code-slash",
    title: "Desarrollo Frontend",
    description: "Aplicaciones modernas con Vue, Nuxt y tecnologías actuales.",
  },
];

const webStats = [
  { value: "UI/UX", label: "Experiencia" },
  { value: "100%", label: "Responsive" },
  { value: "SEO", label: "Optimización" },
];

const technologies = [
  { name: "Vue.js", icon: "bi-code-slash" },
  { name: "Nuxt", icon: "bi-lightning-charge" },
  { name: "JavaScript", icon: "bi-filetype-js" },
  { name: "TypeScript", icon: "bi-filetype-tsx" },
  { name: "Bootstrap", icon: "bi-bootstrap" },
  { name: "Vite", icon: "bi-lightning" },
];
</script>

<template>
   
    <BaseWebDesign
      badge="Diseño Web & Desarrollo"
      title="Creamos páginas web modernas que impulsan tu negocio."
      subtitle="Diseño, creatividad y tecnología."
      description="Diseñamos experiencias digitales únicas para que tu marca destaque en Internet."
      secondary-description="Desarrollamos sitios web rápidos, intuitivos y adaptados a todos los dispositivos utilizando tecnologías modernas."
      :image="designImage"
      image-alt="Diseño web moderno"
      button-text="Solicitar presupuesto"
      button-link="/contact"
      image-position="left"
      :features="webFeatures"
      :stats="webStats"
      :technologies="technologies"
    />
    
</template>
