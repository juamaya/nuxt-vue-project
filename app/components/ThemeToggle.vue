
<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    @click="toggleTheme"
    :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
    :aria-pressed="isDark"
  >
    <i
      :class="isDark
        ? 'bi bi-sun-fill'
        : 'bi bi-moon-stars-fill'"
    ></i>

    <span>
      {{ isDark ? 'Light' : 'Dark' }}
    </span>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 14px;
  border: 1px solid var(--border-color);
  border-radius: 50px;
  background: var(--bg-card);
  color: var(--text-primary);
  cursor: pointer;
  transition: all .25s ease;
}

.theme-toggle:hover {
  background: var(--bg-secondary);
  transform: translateY(-2px);
}

.theme-toggle i {
  font-size: 17px;
}
</style>
