<template>
    <div>
        <div class="blog">
            <header class="blog--header">
                <g-image
                    class="blog--header__banner"
                    v-if="$page.blogPost.image"
                    :src="$page.blogPost.image"
                    :alt="$page.blogPost.imageAlt"
                ></g-image>
                <h1 class="blog--header__title" v-html="$page.blogPost.title" />
            </header>
            <article v-html="$page.blogPost.content" />
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
    name: 'Post',
    metaInfo() {
        return {
            title: this.$page.blogPost.title,
        };
    },
    mounted() {
        const links = document.querySelectorAll('.icon.icon-link');
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
    content: '';
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

article >>> .icon-link {
    padding-right: 0.5rem;
    color: var(--grey);

    transition: color 300ms linear;
}

article >>> .icon-link:hover {
    color: var(--primary);
}

article >>> img {
    display: block;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
}

article >>> h2 {
    font-weight: 700;
    text-transform: uppercase;
}

article >>> h2,
article >>> h3 {
    margin-top: 2rem;
}
article >>> p {
    margin-top: 1rem;
}
article >>> a {
    position: relative;
    color: var(--primary);
}
article >>> p > a:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, var(--secondary), var(--primary));
}

article >>> ul {
    list-style-type: none;
    margin-left: 2rem;
}

article >>> li {
    position: relative;
    margin-top: 0.5rem;
}

article >>> li:not(:first-child) {
}

article >>> ul > li::before {
    content: '›';
    position: absolute;
    top: 0;
    left: -20px;
    color: var(--primary);
    font-weight: 700;

    width: 5rem;
}

article >>> blockquote {
    background: var(--primary-light);
    color: var(--dark-grey);
    padding: 1rem 1rem;
    margin: 1.5rem 0;
    position: relative;
    border-radius: 3px;
}

article >>> blockquote::before {
    position: absolute;
    content: '';
    width: 5px;
    height: 100%;
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, var(--secondary), var(--primary));
    border-radius: 3px;
}

article >>> blockquote > * {
    margin: 0;
}

article >>> pre {
    border-radius: 3px;
    width: 100%;
}
</style>
