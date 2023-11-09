<template>
  <div class="container">
    <!-- TODO: Refactor Name component to be compatible -->
    <Name />

    <section class="contact">
      <h2 class="contact__heading">
        Let's
        <span class="highlight--primary">build</span> something
        <span class="highlight--primary">together</span>
      </h2>

      <ContactLinks />
    </section>

    <section class="projects">
      <header>
        <h2 class="projects__heading">Recent work:</h2>
      </header>

      <div class="projects__project">
        <a
          href="https://viz.greynoise.io"
          target="_blank"
          rel="noreferrer noopener"
          class="project__link"
          title="GreyNoise Intelligence Visualizer"
          >&rarr; GreyNoise Visualizer</a
        >
        <Icon name="simple-icons:vuedotjs" title="Vue.js" role="presentation" />
        <Icon
          name="simple-icons:nodedotjs"
          title="Node.js"
          role="presentation"
        />
      </div>

      <a
        href="https://github.com/roninii"
        target="_blank"
        class="projects__github"
        rel="noreferrer noopener"
        title="ronnie's github"
      >
        more on github
        <Icon
          name="simple-icons:github"
          title="Ronini's profile on GitHub"
          class="projects__github--icon"
        />
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Ronini.dev",
});
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
