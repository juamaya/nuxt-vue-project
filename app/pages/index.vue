<script lang="ts" setup>

useSeoMeta({
  title: 'Juamaya26 | Home',
  description: 'Conoce nuestro equipo y nuestra empresa.'
})

const slides = [
  {
    image: 'https://picsum.photos/id/1018/1200/500',
    alt: 'Paisaje de montaña',
    title: 'Descubre nuevos lugares',
    description: 'Explora experiencias increíbles.'
  },
  {
    image: 'https://picsum.photos/id/1015/1200/500',
    alt: 'Montañas y naturaleza',
    title: 'Conecta con la naturaleza',
    description: 'Vive nuevas aventuras.'
  },
  {
    image: 'https://picsum.photos/id/1019/1200/500',
    alt: 'Paisaje natural',
    title: 'Disfruta cada momento',
    description: 'Creamos experiencias únicas.'
  }
]

const handleSlideChange = (index: number) => {
  console.log('Slide actual:', index)
}
const images = [
  {
    src: '/projects/proyecto1.png',
    alt: 'Montañas'
  },
  {
    src: '/projects/proyecto2.png',
    alt: 'Naturaleza'
  },
  {
    src: '/projects/proyecto3.png',
    alt: 'Paisaje'
  },
  {
    src: '/projects/proyecto4.png',
    alt: 'Lago'
  },
  {
    src: '/projects/proyecto5.png',
    alt: 'Bosque'
  },
  {
    src: '/projects/proyecto6.png',
    alt: 'Animal'
  },
  {
    src: '/projects/proyecto7.png',
    alt: 'Ciudad'
  },
  {
    src: '/projects/proyecto8.png',
    alt: 'Playa'
  },
  {
    src: '/projects/proyecto9.png',
    alt: 'Desierto'
  },
 
]

</script>
<template>
  <section class="hero">
    <div class="container text-center">
      <h1 class="display-3 fw-bold">
        Bienvenido a MyWebsite
      </h1>

      <p class="lead mt-3">
        Desarrollamos soluciones digitales modernas.
      </p>
  <main>
    <HomeHero />
  </main>
        <div class="container py-5">

    <BaseCarousel
      :slides="slides"
      :autoplay="true"
      :interval="4000"
      rounded="rounded-5"
      :show-indicators="true"
      :show-controls="true"
      @slide-change="handleSlideChange"
    />

  </div>

       
    </div>
  </section>


   <section class="container-fluid py-5">

    <h2 class="text-center mb-4">
      Galería de proyectos
    </h2>

    <BaseMarquee
      :images="images"
      :speed="30"
      direction="left"
      height="140px"
      image-width="200px"
      gap="24px"
      rounded="rounded-4"
      :pause-on-hover="true"
    />

  </section>
</template>

<style scoped>
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
 
}
</style>
