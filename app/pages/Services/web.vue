<script setup lang="ts">
useSeoMeta({
  title: "Juamaya26 | Web Development",
  description: "Creamos aplicaciones web modernas con Vue y Nuxt.",
});

const config = useRuntimeConfig();

const logos = [
  { src: "logos/node.jpg", alt: "Node.js" },
  { src: "logos/next.jpg", alt: "Next.js" },
  { src: "logos/ts.jpg", alt: "TypeScript" },
  { src: "logos/nuxttailwind.png", alt: "Nuxt Tailwind" },
  { src: "logos/vite.jpg", alt: "Vite" },
  { src: "logos/vue.jpg", alt: "Vue.js" },
  { src: "logos/nuxt.jpg", alt: "Nuxt.js" },
  { src: "logos/js.jpg", alt: "JavaScript" },
].map((image) => ({
  ...image,
  src: `${config.app.baseURL}${image.src}`,
}));
</script>

<template>
  <div>
    <h1>Web Development</h1>

    <section class="container-fluid py-5">
      <h2 class="text-center mb-4">Tecnologías que utilizamos</h2>

      <BaseMarquee
        :images="logos"
        :speed="30"
        direction="left"
        height="140px"
        image-width="200px"
        gap="24px"
        rounded="rounded-4"
        :pause-on-hover="true"
      />
    </section>
  </div>
</template>
