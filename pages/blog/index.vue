<template>
  <div class="blog">
    <header class="blog--header">
      <NuxtImg src="/Logo.svg" width="150" alt="Purple fox logo" />
      <div class="blog--titles">
        <h1 class="blog--title">Oh, for fox sake!</h1>
        <h2 class="blog--subtitle">
          A blog about the adventures in web development and design.
        </h2>
      </div>
    </header>
    <!-- TODO: Add Blog Posts -->
    <!-- <section class="blog--posts">
            <div class="posts--post" v-for="edge in $page.posts.edges" :key="edge.node.id">
                <g-link class="post--link" :to="edge.node.path">
                    <h2 class="post--title">{{ edge.node.title }}</h2>
                </g-link>
                <p class="post--time">
                    {{ edge.node.timeToRead }} minute read | Published
                    {{ formatDate(edge.node.date) }}
                </p>
            </div>
        </section> -->
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Blog",
});
</script>

<style scoped>
.blog {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.blog--header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.blog--titles {
  width: 75%;
}

.blog--title {
  text-transform: uppercase;
  font-weight: 400;
}

.blog--subtitle {
  color: var(--text);
  font-size: 1rem;
}

.blog--posts {
  padding: 2rem 0;
}

.posts--post {
  margin-top: 2rem;
}

.post--title {
  font-weight: 500;
  color: var(--text);
}

.post--time {
  font-size: 0.75rem;
  color: #63738a;
}
</style>
