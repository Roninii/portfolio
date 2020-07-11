<template>
    <div>
        <Nav />
        <section class="posts">
            <div class="posts--post" v-for="edge in $page.posts.edges" :key="edge.node.id">
                <g-link class="post--link" :to="edge.node.path">
                    <h2 class="post--title">{{ edge.node.title }}</h2>
                </g-link>
                <p
                    class="post--time"
                >{{ edge.node.timeToRead }} minute read | Published {{ formatDate(edge.node.date) }}</p>
            </div>
        </section>
    </div>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        timeToRead
        path
        date
      }
    }
  }
}
</page-query>

<script>
export default {
    metaInfo: {
        title: 'Blog',
    },
    components: {
        Nav: () => import('~/layouts/Nav'),
    },
    data() {
        return {
            dateFormatOptions: { month: 'long', year: 'numeric', day: 'numeric' },
        };
    },
    methods: {
        formatDate(date) {
            return new Intl.DateTimeFormat('en-us', this.dateFormatOptions).format(new Date(date));
        },
    },
};
</script>

<style scoped>
.posts {
    max-width: 768px;
    margin: 0 auto;
}

.posts--post {
    margin-top: 2rem;
}

.post--title {
    font-weight: 500;
    color: var(--dark-grey);
}

.post--time {
    font-size: 0.75rem;
    color: #718096;
}
</style>