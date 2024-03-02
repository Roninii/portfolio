<template>
    <div class="blog">
        <header class="blog--header mt-8">
            <div class="blog--titles">
                <h1 class="blog--title text-3xl">Oh, for fox sake!</h1>
                <h2 class="blog--subtitle text-lg">
                    A blog about the adventures in web development and design.
                </h2>
            </div>
        </header>
        <section class="blog--posts">
            <ContentList path="/blog" v-slot="{ list }" v-bind="{ query }">
                <div
                    class="posts--post"
                    v-for="article in list"
                    :key="article._path"
                >
                    <NuxtLink class="post--link" :to="article._path">
                        <span
                            v-if="showNewBadge(article.date)"
                            class="post--new-badge"
                        >
                            New
                        </span>
                        <h2 class="post--title">{{ article.title }}</h2>
                    </NuxtLink>
                    <p class="post--time">
                        Published {{ formatDate(article.date) }}
                    </p>
                </div>
            </ContentList>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from "@nuxt/content/dist/runtime/types";
const query: QueryBuilderParams = {
    path: "/blog",
    sort: [{ date: -1, $numeric: true }],
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

const showNewBadge = (date: string) => {
    const today = new Date();
    const articleDate = new Date(date);
    const weekInMilliseconds = 1000 * 60 * 60 * 24 * 7;

    return today.getTime() - articleDate.getTime() < weekInMilliseconds;
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
/* .post--link {
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
} */
.post--new-badge {
    color: var(--primary);
}
.post--title {
    margin-top: -0.5rem;
    font-weight: 500;
    color: var(--text);
}

.post--time {
    font-size: 0.75rem;
    color: #63738a;
}
</style>
