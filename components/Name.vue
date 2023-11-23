<template>
  <header :class="['name-container', theme]">
    <div>
      <h1 class="name">
        <span class="neon">Ron</span>
        <span class="middle">nie Villar</span>
        <span class="neon">ini</span>
      </h1>
      <h2 class="subtitle">
        T Shaped Developer | Frontend Specialist | Vue.js Enthusiast
      </h2>
      <hr class="accent" />
    </div>
  </header>
</template>

<script setup lang="ts">
const theme = ref<"light" | "dark">("light");
const { currentTheme } = useTheme();

/**
 * Setting up a watcher here because we lose reactivity when using `.value` on initial load.
 * Unfortunately, that's also a requirement to make sure the theme is correct on first load
 */
watch(currentTheme, (newTheme) => {
  theme.value = newTheme;
});

onMounted(() => {
  const { currentTheme } = useTheme();
  theme.value = currentTheme.value;
});
</script>

<style scoped>
.name-container {
  grid-area: header;
}

/* Light mode */
.name-container.light .name {
  color: var(--black);
}

.name-container.light .subtitle {
  color: var(--grey);
}

/* Dark mode */
.name-container.dark .name {
  color: var(--white);
}
.name-container.dark .name .neon {
  animation-name: glow;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.name-container.dark .subtitle {
  color: var(--gray-light);
}

.name {
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  font-size: 4rem;
  line-height: 4.55rem;
  text-align: center;
}

.neon {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  color: var(--purple);
}

.subtitle {
  text-align: center;
}

@media screen and (min-width: 768px) {
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .middle {
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    white-space: nowrap;

    animation-name: grow;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }

  .subtitle {
    opacity: 0;

    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 3s;
  }
}

.accent {
  width: 10rem;
  margin: 0.75rem auto;
  border-color: var(--purple);
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes grow {
  from {
    max-width: 0;
  }

  to {
    max-width: 100vw;
    overflow: show;
    opacity: 1;
  }
}

@keyframes glow {
  0% {
    color: black;
    text-shadow: none;
  }

  15% {
    text-shadow: 0.25rem 0 0.5rem var(--purple-dark),
      -0.25rem 0 0.5rem var(--purple-dark);
  }

  20% {
    text-shadow: none;
  }

  25% {
    text-shadow: 0.25rem 0 0.5rem var(--purple-dark),
      -0.25rem 0 0.5rem var(--purple-dark);
  }

  30% {
    text-shadow: none;
  }

  100% {
    text-shadow: 0.25rem 0 0.5rem var(--purple-dark),
      -0.25rem 0 0.5rem var(--purple-dark), 0 0 3rem var(--purple);
  }
}
</style>
