<template>
  <header class="page-header">
    <nav class="nav">
      <div>
        <g-link v-if="viewingBlog" class="nav--link" to="/blog">
          <span>&lsaquo;</span> Back
        </g-link>
        <g-link v-else to="/" aria-label="Home">
          <img
            src="../assets/Logo.svg"
            width="50"
            class="nav--logo"
            alt="Ronini.dev logo"
          />
        </g-link>
      </div>

      <div>
        <g-link class="nav--link" active-class="underline" exact to="/"
          >Home</g-link
        >
        <g-link class="nav--link" active-class="underline" to="/blog/"
          >Blog</g-link
        >
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

<style scoped>
span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
}
</style>