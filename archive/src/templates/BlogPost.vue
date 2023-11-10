<template>
  <div>
    <div class="blog">
      <header class="blog--header">
        <img
          class="blog--header__banner"
          v-if="$page.blogPost.image"
          :src="$page.blogPost.image"
          :alt="$page.blogPost.imageAlt"
          width="480"
          height="1000"
        />
        <h1 class="blog--header__title" v-html="$page.blogPost.title" />
      </header>
      <article v-html="$page.blogPost.content" />

      <footer class="blog--footer">
        <a
          href="https://dev.to/_ronini"
          target="_blank"
          rel="noreferrer"
          class="contact__link"
          title="dev.to"
        >
          <i class="fab fa-dev" title="_ronini's DEV Profile"></i>
        </a>
        <a
          href="https://github.com/roninii/"
          target="_blank"
          rel="noreferrer"
          class="contact__link"
          title="github"
        >
          <i
            class="fab fa-github contact__icon"
            title="ronini's github profile"
          ></i>
        </a>
        <a
          href="https://twitter.com/_ronini"
          target="_blank"
          class="contact__link"
          title="twitter"
          rel="noreferrer"
        >
          <i class="fab fa-twitter contact__icon"></i>
        </a>
        <a
          href="https://linkedin.com/in/ronnievillarini"
          target="_blank"
          class="contact__link"
          title="linkedin"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin-in contact__icon"></i>
        </a>
      </footer>
    </div>
  </div>
</template>

<page-query>
query ($id: ID!) {
    blogPost(id: $id) {
        title
        content
        image
        imageAlt
  }
}
</page-query>

<script>
export default {
  name: "Post",
  metaInfo() {
    return {
      title: this.$page.blogPost.title,
    };
  },
  mounted() {
    const links = document.querySelectorAll(".icon.icon-link");
    links.forEach((link) => {
      link.innerHTML = `<i class="fab fa-slack-hash"></i>`;
    });
  },
};
</script>

<style scoped>
.blog {
  display: grid;
  min-height: 100vh;
}

.blog--header {
  display: grid;
  place-items: center;
  padding: 1rem;
  margin-top: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;
  text-align: center;
}

.blog--header__banner {
  object-fit: cover;
  -o-object-fit: cover;
  width: 100%;
  max-height: 30rem;
  border-radius: 3px;
}

.blog--header__title {
  font-weight: 400;
  margin-top: 3rem;
}

.blog--header__title::after {
  content: "";
  display: block;
  width: 75%;
  height: 2px;
  margin: 0.5rem auto;
  background: linear-gradient(to right, var(--secondary), var(--primary));
  border-radius: 3px;
}

.blog--footer {
  align-self: end;
  margin-top: 1rem;
  padding: 2rem 4rem 1rem 4rem;
  font-size: 12px;
  display: flex;
  align-items: flex-end;
}

article {
  max-width: 1024px;
  margin: 0 auto 1rem auto;
  padding: 0 2rem;
  line-height: 1.5rem;
  display: grid;
}

article :deep(.icon-link) {
  padding-right: 0.5rem;
  color: var(--grey);

  transition: color 300ms linear;
}

article :deep(.icon-link:hover) {
  color: var(--primary);
}

article :deep(img) {
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

article :deep(h2) {
  font-weight: 700;
  text-transform: uppercase;
}

article :deep(h2),
article :deep(h3) {
  margin-top: 2rem;
}
article :deep(p) {
  margin-top: 1rem;
}
article :deep(a) {
  position: relative;
  color: var(--primary);
}
article :deep(p) > a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--secondary), var(--primary));
}

article :deep(ul),
ol {
  list-style-type: none;
  margin-left: 2rem;
}

/* article :deep(ol) {
    margin-left: 2rem;
}

article :deep(ol) > li::marker {
    color: var(--primary);
} */

article :deep(li) {
  position: relative;
  margin-top: 0.5rem;
}

article :deep(ul) > li::before {
  content: "›";
  position: absolute;
  top: 0;
  left: -20px;
  color: var(--primary);
  font-weight: 700;
}

article :deep(blockquote) {
  background: var(--quote-bg);
  color: var(--text);
  padding: 1rem 1rem;
  margin: 1.5rem 0;
  position: relative;
  border-radius: 3px;
}

article :deep(blockquote::before) {
  position: absolute;
  content: "";
  width: 5px;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(to bottom, var(--secondary), var(--primary));
  border-radius: 3px;
}

article :deep(blockquote) > * {
  margin: 0;
}

article :deep(pre) {
  border-radius: 3px;
  width: 100%;
}

.blog--footer {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.blog--footer::before {
  content: "";
  position: absolute;
  top: 1.2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 8rem;
  height: 0.1rem;
  border-radius: 0.2rem;
  background: linear-gradient(to right, var(--secondary), var(--primary));
}

.blog--footer a {
  margin: 0 0.5rem;
}
</style>
