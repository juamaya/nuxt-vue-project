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
    src: 'https://picsum.photos/id/1015/500/300',
    alt: 'Montañas'
  },
  {
    src: 'https://picsum.photos/id/1016/500/300',
    alt: 'Naturaleza'
  },
  {
    src: 'https://picsum.photos/id/1018/500/300',
    alt: 'Paisaje'
  },
  {
    src: 'https://picsum.photos/id/1019/500/300',
    alt: 'Lago'
  },
  {
    src: 'https://picsum.photos/id/1020/500/300',
    alt: 'Bosque'
  },
  {
    src: 'https://picsum.photos/id/1024/500/300',
    alt: 'Animal'
  }
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
      Galería de imágenes
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
