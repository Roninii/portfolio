<template>
    <header class="page-header">
        <nav class="nav">
            <div>
                <g-link v-if="viewingBlog" class="nav--link" to="/blog">Back to all posts</g-link>
            </div>

            <div>
                <g-link class="nav--link" active-class="underline" exact to="/">Home</g-link>
                <g-link class="nav--link" active-class="underline" to="/blog/">Blog</g-link>
            </div>
        </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
    name: 'Nav',
    computed: {
        viewingBlog() {
            return this.$route.path.includes('/blog/');
        },
    },
};
</script>
