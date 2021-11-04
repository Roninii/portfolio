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
          title="toggle dark theme"
          <i class="far fa-lightbulb"></i>
        </button>
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
import useTheme from '~/composables/useTheme'

export default {
    name: 'Nav',
    data() {
      return{}
    },
    computed: {
      viewingBlog() { 
        return /\/blog\/.+\/$/gi.test(this.$route.path)
        }
    },
    setup() {
      const { toggleTheme } = useTheme()

      return {
        toggleTheme
      }
    }
};
</script>

<style scoped>
span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
}

.theme-toggle {
  border: none;
  line-height: 1rem;
  background: none;
  color: var(--primary);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 1rem;
}
</style>