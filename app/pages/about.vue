<script setup lang="ts">
useSeoMeta({
  title: "Juamaya26 | About ",
  description: "Conoce nuestro equipo y nuestra empresa.",
});

const technologies = [
  { name: "Vue.js", icon: "bi-code-slash" },
  { name: "Nuxt", icon: "bi-lightning-charge" },
  { name: "JavaScript", icon: "bi-filetype-js" },
  { name: "TypeScript", icon: "bi-filetype-tsx" },
  { name: "Bootstrap", icon: "bi-bootstrap" },
  { name: "Vite", icon: "bi-lightning" },
];

const stats = [
  { value: "100%", label: "Compromiso" },
  { value: "24/7", label: "Innovación" },
  { value: "∞", label: "Creatividad" },
];
</script>
<template>
  <div>
    <h1>Nosotros</h1>

    <div
      class="d-flex flex-column flex-md-row align-items-center gap-3 gap-md-5"
    >
      <BaseAvatar
        src="images/madre.jpg"
        size="responsive"
        responsive-size="clamp(35px, 12vw, 150px)"
        status="away"
      />
      <BaseAvatar
        src="images/padres.jpg"
        size="responsive"
        responsive-size="clamp(35px, 12vw, 150px)"
        status="online"
      />
    </div>
    <div>
      <BaseAbout
        badge="Sobre Juamaya26"
        title="Creamos experiencias digitales que marcan la diferencia."
        subtitle="Diseño, tecnología e innovación."
        description="En Juamaya26 nos apasiona el desarrollo web. Transformamos ideas en aplicaciones modernas, intuitivas y funcionales."
        secondary-description="Utilizamos tecnologías actuales como Vue, Nuxt y TypeScript para construir soluciones digitales rápidas, escalables y adaptables."
        image="images/madre.jpg"
        image-alt="Desarrollo web Juamaya26"
        experience="Desarrollo web moderno"
        contact-text="Hablemos de tu proyecto"
        contact-link="/contact"
        :technologies="technologies"
        :stats="stats"
      />
    </div>
  </div>
</template>

<style scoped></style>
