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
          href="https://greynoise.io"
          target="_blank"
          rel="noreferrer noopener"
          class="project__link"
          title="ZeroGen Apparel"
          >&rarr; GreyNoise.io</a
        >
        <i
          class="fab fa-vuejs icon"
          role="presentation"
          aria-label="vue.js icon"
        ></i>
        <i
          class="fab fa-node-js icon"
          role="presentation"
          aria-label="node.js icon"
        ></i>
      </div>

      <a
        href="https://github.com/roninii"
        target="_blank"
        class="projects__github"
        rel="noreferrer noopener"
        title="ronnie's github"
      >
        more on github
        <i class="fab fa-github projects__github--icon"></i>
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
