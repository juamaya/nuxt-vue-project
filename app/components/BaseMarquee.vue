
<script setup lang="ts">
interface MarqueeImage {
  src: string
  alt?: string
  title?: string
  link?: string
}

interface Props {
  images: MarqueeImage[]
  speed?: number
  direction?: 'left' | 'right'
  height?: string
  imageWidth?: string
  gap?: string
  rounded?: string
  pauseOnHover?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  speed: 35,
  direction: 'left',
  height: '120px',
  imageWidth: '180px',
  gap: '24px',
  rounded: 'rounded-4',
  pauseOnHover: true,
  reverse: false
})

const duplicatedImages = computed(() => [
  ...props.images,
  ...props.images
])

const animationDuration = computed(
  () => `${Math.max(1, props.speed)}s`
)

const animationDirection = computed(() =>
  props.reverse
    ? (props.direction === 'left' ? 'reverse' : 'normal')
    : (props.direction === 'left' ? 'normal' : 'reverse')
)
</script>

<template>
  <div
    class="base-marquee"
    :class="{ 'pause-on-hover': pauseOnHover }"
    :style="{
      '--marquee-height': height,
      '--marquee-width': imageWidth,
      '--marquee-gap': gap,
      '--marquee-duration': animationDuration,
      '--marquee-direction': animationDirection
    }"
  >
    <div class="marquee-track">

      <div
        v-for="(image, index) in duplicatedImages"
        :key="`${image.src}-${index}`"
        class="marquee-item"
      >

        <NuxtLink
          v-if="image.link"
          :to="image.link"
          class="marquee-image-link"
        >
          <img
            :src="image.src"
            :alt="image.alt || image.title || 'Imagen'"
            :title="image.title"
            class="marquee-image"
            :class="rounded"
            loading="lazy"
          >
        </NuxtLink>

        <img
          v-else
          :src="image.src"
          :alt="image.alt || image.title || 'Imagen'"
          :title="image.title"
          class="marquee-image"
          :class="rounded"
          loading="lazy"
        >

      </div>

    </div>
  </div>
</template>

<style scoped>
.base-marquee {
  width: 100%;
  overflow: hidden;
  position: relative;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
}

.marquee-track {
  display: flex;
  align-items: center;
  width: max-content;
  gap: var(--marquee-gap);
  animation: marquee-scroll
    var(--marquee-duration)
    linear
    infinite;
  animation-direction: var(--marquee-direction);
  will-change: transform;
}

.marquee-item {
  flex: 0 0 auto;
  width: var(--marquee-width);
  height: var(--marquee-height);
}

.marquee-image,
.marquee-image-link {
  display: block;
  width: 100%;
  height: 100%;
}

.marquee-image {
  object-fit: cover;
  transition: transform .3s ease;
}

.marquee-image:hover {
  transform: scale(1.05);
}

.pause-on-hover:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-50% - var(--marquee-gap) / 2));
  }
}

@media (max-width: 768px) {
  .marquee-track {
    gap: 14px;
  }

  .marquee-item {
    width: min(var(--marquee-width), 38vw);
    height: min(var(--marquee-height), 90px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
