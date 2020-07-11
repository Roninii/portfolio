<template>
    <header class="page-header">
        <nav class="nav">
            <g-link class="nav--link" active-class="underline" exact to="/">Home</g-link>
            <g-link class="nav--link" active-class="underline" to="/blog/">Blog</g-link>
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
};
</script>
