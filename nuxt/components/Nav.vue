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
        <NuxtLink
          class="nav--link"
          active-class="gradient-underline"
          exact
          to="/"
        >
          Home
        </NuxtLink>
        <NuxtLink
          class="nav--link"
          active-class="gradient-underline"
          to="/blog/"
        >
          Blog
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const viewingBlog = computed(() => {
  return route.name === "blog-slug";
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

.page-header {
  background: var(--background);
  position: sticky;
  top: 0;
  z-index: 100;
}

.gradient-underline {
  color: var(--active-link-text);
}
.gradient-underline::after {
  content: "";
  position: absolute;
  width: 75%;
  height: 2px;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(to right, var(--secondary), var(--primary));
}
</style>
