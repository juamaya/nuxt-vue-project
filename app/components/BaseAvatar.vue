
<script setup lang="ts">
interface Props {
  src: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive'
  status?: 'online' | 'offline' | 'away' | 'busy' | null
  rounded?: boolean
  responsiveSize?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Avatar',
  size: 'md',
  status: null,
  rounded: true,
  responsiveSize: 'clamp(32px, 8vw, 64px)'
})

const statusLabels = {
  online: 'Online',
  offline: 'Offline',
  away: 'Away',
  busy: 'Busy'
}

const sizes = {
  xs: '24px',
  sm: '32px',
  md: '48px',
  lg: '64px',
  xl: '96px',
  responsive: props.responsiveSize
}

const avatarSize = computed(() => sizes[props.size])
</script>

<template>
  <span
    class="avatar"
    :class="{
      'avatar-rounded': rounded,
      'avatar-square': !rounded,
      'avatar-responsive': size === 'responsive'
    }"
    :style="{
      '--avatar-size': avatarSize
    }"
  >
    <img
      class="avatar-img"
      :src="src"
      :alt="alt"
      loading="lazy"
    >

    <span
      v-if="status"
      class="avatar-status"
      :class="`status-${status}`"
      role="img"
      :aria-label="statusLabels[status]"
    />
  </span>
</template>

<style scoped>
.avatar {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  width: var(--avatar-size);
  height: var(--avatar-size);
  max-width: 100%;
  aspect-ratio: 1 / 1;
  vertical-align: middle;
}

.avatar-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar-square .avatar-img {
  border-radius: 8px;
}

.avatar-status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25%;
  height: 25%;
  min-width: 8px;
  min-height: 8px;
  border: 2px solid var(--bg-primary, #fff);
  border-radius: 50%;
}

.status-online {
  background: #198754;
}

.status-offline {
  background: #6c757d;
}

.status-away {
  background: #ffc107;
}

.status-busy {
  background: #dc3545;
}

@media (max-width: 576px) {
  .avatar-responsive {
    --avatar-size: clamp(32px, 10vw, 48px);
  }
}

@media (min-width: 577px) and (max-width: 991px) {
  .avatar-responsive {
    --avatar-size: clamp(40px, 7vw, 56px);
  }
}
</style>
