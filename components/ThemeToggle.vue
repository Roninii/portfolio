<template>
  <button @click="toggleTheme" class="theme-toggle" title="toggle dark theme">
    <Icon name="fa6-regular:lightbulb" />
  </button>
</template>

<script setup lang="ts">
const { toggleTheme } = useTheme();
</script>

<style scoped>
.theme-toggle {
  border: none;
  line-height: 1rem;
  background: none;
  color: var(--primary);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 1rem;
}
</style>
