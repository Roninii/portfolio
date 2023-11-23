<template>
  <article>
    <div class="blog">
      <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
        <header class="blog--header">
          <NuxtImg
            class="blog--header__banner"
            v-if="data.image"
            :src="data.image"
            :alt="data.imageAlt"
            width="480"
            height="1000"
            fit="contain"
          />
          <h1 class="blog--header__title" v-html="data.title" />
        </header>
      </ContentQuery>

      <article class="blog-post">
        <ContentDoc />
      </article>

      <footer class="blog--footer">
        <div class="blog--footer__contact-links">
          <ContactLinks />
        </div>
      </footer>
    </div>
  </article>
</template>

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
  font-size: 2rem;
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
  margin-bottom: 2rem;
  padding: 2rem 4rem 1rem 4rem;
  font-size: 12px;
  display: flex;
  align-items: flex-end;
}

.blog-post {
  max-width: 1024px;
  margin: 0 auto 1rem auto;
  padding: 0 2rem;
  line-height: 1.5rem;
  display: grid;
}

.blog-post :deep(.icon-link) {
  padding-right: 0.5rem;
  color: var(--grey);

  transition: color 300ms linear;
}

.blog-post :deep(.icon-link:hover) {
  color: var(--primary);
}

.blog-post :deep(img) {
  display: block;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.blog-post :deep(h2) {
  font-weight: 700;
  text-transform: uppercase;
}

.blog-post :deep(h2),
.blog-post :deep(h3) {
  margin-top: 2rem;
}
.blog-post :deep(p) {
  margin-top: 1rem;
}
.blog-post :deep(a) {
  position: relative;
  color: var(--primary);
}
.blog-post :deep(p) > a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, var(--secondary), var(--primary));
}

.blog-post :deep(ul),
ol {
  list-style-type: none;
  margin-left: 2rem;
}

.blog-post :deep(li) {
  position: relative;
  margin-top: 0.5rem;
}

.blog-post :deep(ul) > li::before {
  content: "›";
  position: absolute;
  top: 0;
  left: -20px;
  color: var(--primary);
  font-weight: 700;
}

.blog-post :deep(blockquote) {
  background: var(--quote-bg);
  color: var(--text);
  padding: 1rem 1rem;
  margin: 1.5rem 0;
  position: relative;
  border-radius: 3px;
}

.blog-post :deep(blockquote::before) {
  position: absolute;
  content: "";
  width: 5px;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(to bottom, var(--secondary), var(--primary));
  border-radius: 3px;
}

.blog-post :deep(blockquote) > * {
  margin: 0;
}

.blog-post :deep(pre) {
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

.blog--footer__contact-links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 400px;
}
</style>
