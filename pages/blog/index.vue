<template>
  <div class="blog">
    <header class="blog--header">
      <div class="blog--titles">
        <h1 class="blog--title">Oh, for fox sake!</h1>
        <h2 class="blog--subtitle">
          A blog about the adventures in web development and design.
        </h2>
      </div>
    </header>
    <section class="blog--posts">
      <ContentList path="/blog" v-slot="{ list }" v-bind="{ query }">
        <div class="posts--post" v-for="article in list" :key="article._path">
          <NuxtLink class="post--link" :to="article._path">
            <h2 class="post--title">{{ article.title }}</h2>
          </NuxtLink>
          <p class="post--time">Published {{ formatDate(article.date) }}</p>
        </div>
      </ContentList>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
  path: "/blog",
  sort: [{ date: 1, $numeric: true }],
};

definePageMeta({
  title: "Blog",
});

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  }).format(new Date(date));
};
</script>

<style scoped>
.blog {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;
}

.blog--title {
  text-transform: uppercase;
  font-weight: 400;
  color: var(--primary);
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
