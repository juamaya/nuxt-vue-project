<script setup lang="ts">
useSeoMeta({
  title: "Juamaya26 | Projects",
  description: "Conoce nuestros proyectos y logros.",
});

const cards = [
  {
    id: 1,
    image: "https://picsum.photos/640/400?random=1",
    title: "Desarrollo Web",
    description: "Creamos aplicaciones web modernas con Vue y Nuxt.",
    buttonText: "Ver servicios",
    buttonLink: "/services/web",
  },
  {
    id: 2,
    image: "https://picsum.photos/640/400?random=2",
    title: "Diseño UI/UX",
    description: "Diseñamos experiencias digitales atractivas.",
    buttonText: "Ver proyectos",
    buttonLink: "/projects",
  },
  {
    id: 3,
    image: "https://picsum.photos/640/400?random=3",
    title: "SEO",
    description: "Mejoramos la visibilidad de tu página web.",
    buttonText: "Más información",
    buttonLink: "/services/seo",
  },
  {
    id: 4,
    image: "https://picsum.photos/640/400?random=4",
    title: "Desarrollo Web",
    description: "Creamos aplicaciones web modernas con Vue y Nuxt.",
    buttonText: "Ver servicios",
    buttonLink: "/services/web",
  },
  {
    id: 5,
    image: "https://picsum.photos/640/400?random=5",
    title: "Diseño UI/UX",
    description: "Diseñamos experiencias digitales atractivas.",
    buttonText: "Ver proyectos",
    buttonLink: "/projects",
  },
  {
    id: 6,
    image: "https://picsum.photos/640/400?random=6",
    title: "SEO",
    description: "Mejoramos la visibilidad de tu página web.",
    buttonText: "Más información",
    buttonLink: "/services/seo",
  },
];
</script>

<template>
  <div class="container py-5">
    <div class="row g-4">
      <div
        v-for="card in cards"
        :key="card.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <BaseCard
          :image="card.image"
          :title="card.title"
          :description="card.description"
          :button-text="card.buttonText"
          :button-link="card.buttonLink"
          max-width="100%"
        />
      </div>
    </div>
  </div>
</template>
