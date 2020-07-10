<template>
    <div>
        <Nav />
        <g-link v-for="edge in $page.posts.edges" :key="edge.node.id" :to="edge.node.path">
            <h2>
                {{ edge.node.title }}
            </h2>
        </g-link>
    </div>
</template>

<page-query>
query {
  posts: allBlogPost {
    edges {
      node {
        id
        title
        author
        timeToRead
        path
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
};
</script>
