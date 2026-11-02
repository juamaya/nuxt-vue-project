
<script setup lang="ts">
interface Props {
  image?: string
  imageAlt?: string
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  maxWidth?: string
}

withDefaults(defineProps<Props>(), {
  image: 'https://placehold.co/640x400',
  imageAlt: 'Card image',
  title: 'Card title',
  description: 'Some quick example text to build on the card title and make up the bulk of the card content.',
  buttonText: 'Go somewhere',
  buttonLink: '#',
  maxWidth: '320px'
})
</script>

<template>
  <section class="card" :style="{ maxWidth }">

    <img
      :src="image"
      class="card-img-top"
      :alt="imageAlt"
    >

    <div class="card-body">

      <h4 class="card-title">
        {{ title }}
      </h4>

      <p class="card-text">
        {{ description }}
      </p>

      <NuxtLink
        :to="buttonLink"
        class="btn-solid theme-primary p-2 rounded-3  "
      >
        {{ buttonText }}
      </NuxtLink>

    </div>

  </section>
</template>
