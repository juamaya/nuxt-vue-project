
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface CarouselSlide {
  image: string
  alt?: string
  title?: string
  description?: string
}

interface Props {
  slides: CarouselSlide[]
  autoplay?: boolean
  interval?: number
  rounded?: string
  showIndicators?: boolean
  showControls?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
  interval: 3000,
  rounded: 'rounded-5',
  showIndicators: true,
  showControls: true
})

const emit = defineEmits<{
  slideChange: [index: number]
}>()

const activeIndex = ref(0)
const isPlaying = ref(props.autoplay)

let timer: ReturnType<typeof setInterval> | undefined

const next = () => {
  if (!props.slides.length) return

  activeIndex.value =
    (activeIndex.value + 1) % props.slides.length

  emit('slideChange', activeIndex.value)
}

const prev = () => {
  if (!props.slides.length) return

  activeIndex.value =
    (activeIndex.value - 1 + props.slides.length) %
    props.slides.length

  emit('slideChange', activeIndex.value)
}

const goTo = (index: number) => {
  if (index < 0 || index >= props.slides.length) return

  activeIndex.value = index
  emit('slideChange', index)
}

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer)
    timer = undefined
  }
}

const startAutoplay = () => {
  stopAutoplay()

  if (
    !isPlaying.value ||
    !props.autoplay ||
    props.slides.length <= 1
  ) return

  timer = setInterval(next, Math.max(1000, props.interval))
}

const toggleAutoplay = () => {
  isPlaying.value = !isPlaying.value

  if (isPlaying.value) {
    startAutoplay()
  } else {
    stopAutoplay()
  }
}

watch(
  () => [props.autoplay, props.interval, props.slides.length],
  () => {
    isPlaying.value = props.autoplay
    startAutoplay()

    if (activeIndex.value >= props.slides.length) {
      activeIndex.value = 0
    }
  }
)

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <div class="base-carousel">

    <!-- SLIDES -->
    <div class="carousel-inner" aria-live="polite">

      <div
        v-for="(slide, index) in slides"
        :key="slide.image + index"
        class="carousel-item"
        :class="{
          active: activeIndex === index,
          'carousel-item-active': activeIndex === index
        }"
        :aria-hidden="activeIndex !== index"
      >
        <img
          :src="slide.image"
          class="d-block w-100 carousel-image"
          :class="rounded"
          :alt="slide.alt || `Slide ${index + 1}`"
        >

        <div
          v-if="slide.title || slide.description"
          class="carousel-caption"
        >
          <h5 v-if="slide.title">
            {{ slide.title }}
          </h5>

          <p v-if="slide.description">
            {{ slide.description }}
          </p>
        </div>
      </div>

    </div>

    <!-- FOOTER CONTROLS -->
    <div
      v-if="showIndicators || showControls"
      class="d-flex justify-content-between align-items-center mt-3"
    >

      <!-- INDICATORS -->
      <div
        v-if="showIndicators"
        class="carousel-indicators-custom"
        aria-label="Seleccionar diapositiva"
      >
        <button
          v-for="(slide, index) in slides"
          :key="index"
          type="button"
          :class="{ active: activeIndex === index }"
          :aria-label="`Slide ${index + 1}`"
          :aria-current="activeIndex === index ? 'true' : undefined"
          @click="goTo(index)"
        />
      </div>

      <!-- BUTTONS -->
      <div
        v-if="showControls"
        class="d-flex gap-2"
      >

        <!-- PLAY / PAUSE -->
        <button
          class="btn-icon btn-sm carousel-control-play-pause"
          type="button"
          :aria-label="isPlaying ? 'Pause' : 'Play'"
          @click="toggleAutoplay"
        >
          <span v-if="isPlaying" class="carousel-icon-pause">
            <i class="bi bi-pause-fill"></i>
          </span>

          <span v-else class="carousel-icon-play">
            <i class="bi bi-play-fill"></i>
          </span>
        </button>

        <!-- PREVIOUS -->
        <button
          class="btn-icon btn-sm"
          type="button"
          aria-label="Previous"
          @click="prev"
        >
          <i class="bi bi-chevron-left"></i>
        </button>

        <!-- NEXT -->
        <button
          class="btn-icon btn-sm"
          type="button"
          aria-label="Next"
          @click="next"
        >
          <i class="bi bi-chevron-right"></i>
        </button>

      </div>
    </div>

  </div>
</template>

<style scoped>
.carousel-inner {
  position: relative;
  overflow: hidden;
}

.carousel-item {
  display: none;
  position: relative;
  width: 100%;
}

.carousel-item.active {
  display: block;
  animation: fadeIn 0.5s ease;
}

.carousel-image {
  display: block;
  width: 100%;
  object-fit: cover;
  min-height: 200px;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  color: white;
  background: linear-gradient(transparent, rgba(0,0,0,.7));
}

.carousel-indicators-custom {
  display: flex;
  align-items: center;
  gap: 8px;
}

.carousel-indicators-custom button {
  width: 25px;
  height: 5px;
  border: none;
  border-radius: 10px;
  background: #ccc;
  cursor: pointer;
  transition: all .3s ease;
}

.carousel-indicators-custom button.active {
  width: 40px;
  background: var(--bs-primary, #0d6efd);
}

.btn-icon {
  width: 36px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: all .2s ease;
}

.btn-icon:hover {
  background: var(--bs-primary, #0d6efd);
  color: white;
  border-color: var(--bs-primary, #0d6efd);
}

.btn-icon i {
  font-size: 16px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.carousel-indicators-custom button {
  background: var(--border-color);
}

.carousel-indicators-custom button.active {
  background: var(--primary-color);
}

.btn-icon {
  background: var(--bg-card);
  color: var(--text-primary);
  border-color: var(--border-color);
}
</style>
