<template>
  <div class="container">
    <Name />

    <section class="contact">
      <h2 class="contact__heading">
        Let's
        <span class="highlight--primary">build</span> something
        <span class="highlight--primary">together</span>
      </h2>

      <div class="contact__links">
        <ContactLinks />
      </div>
    </section>

    <section class="projects">
      <a
        href="https://github.com/roninii"
        target="_blank"
        class="projects__github"
        rel="noreferrer noopener"
        title="ronnie's github"
      >
        Check out my projects on GitHub
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
