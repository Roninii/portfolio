<template>
  <span class="inline-code">
    <slot />
  </span>
</template>

<script lang="ts" setup></script>

<style scoped>
.inline-code {
  background: var(--dracula-bg);
  color: var(--dracula-fg);
  border-radius: 1.5px;
  padding: 2px 4px;
}
</style>
