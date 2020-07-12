<template>
    <header class="page-header">
        <nav class="nav">
            <div>
                <g-link v-if="viewingBlog" class="nav--link" to="/blog">Back to all posts</g-link>
                <g-link v-else to="/">
                    <img src="../assets/logo.png" width="150" class="nav--logo" />
                </g-link>
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
    siteUrl
  }
}
</static-query>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            urlRegex: /\/blog\/.+\/$/gi,
        };
    },
    computed: {
        viewingBlog() {
            return this.urlRegex.test(this.$route.path);
        },
    },
};
</script>
