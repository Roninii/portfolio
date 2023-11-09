<template>
  <header class="page-header">
    <nav class="nav">
      <div>
        <NuxtLink v-if="viewingBlog" class="nav--link" to="/blog">
          <span>&lsaquo;</span> Back
        </NuxtLink>
        <NuxtLink v-else to="/" aria-label="Home">
          <img
            src="/Logo.svg"
            width="50"
            class="nav--logo"
            alt="Ronini.dev logo"
          />
        </NuxtLink>
      </div>

      <div>
        <ClientOnly>
          <ThemeToggle />
        </ClientOnly>
        <NuxtLink class="nav--link" active-class="underline" exact to="/">
          Home
        </NuxtLink>
        <NuxtLink class="nav--link" active-class="underline" to="/blog/">
          Blog
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const viewingBlog = computed(() => {
  return /\/blog\/.+\/$/gi.test(route.path);
});
</script>

<style scoped>
span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
}

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
