<template>
    <div class="container">
        <Name />

        <section class="contact">
            <h2 class="contact__heading">
                Let's
                <span class="highlight--primary">build</span> something
                <span class="highlight--primary">together</span>
            </h2>
            <div class="contact__links">
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
                    <i class="fab fa-github contact__icon"></i>
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
                    href="mailto:ronnie@ronini.dev"
                    target="_blank"
                    class="contact__link"
                    title="email"
                    rel="noreferrer"
                >
                    <i class="fas fa-envelope-open-text contact__icon"></i>
                </a>
            </div>
        </section>

        <section class="projects">
            <header>
                <h2 class="projects__heading">Recent projects:</h2>
            </header>

            <div class="projects__project">
                <a
                    href="https://www.zerogenapparel.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="project__link"
                    title="ZeroGen Apparel"
                >&rarr; ZeroGen Apparel</a>
                <i class="fab fa-vuejs icon"></i>
            </div>

            <div class="projects__project">
                <a
                    href="https://www.winning-streak.com"
                    target="_blank"
                    class="project__link"
                    rel="noreferrer"
                    title="Winning Streak"
                >&rarr; Winning Streak</a>
                <div class="project__icons">
                    <i class="fab fa-vuejs icon"></i>
                </div>
            </div>

            <div class="projects__project">
                <a
                    href="https://esportacus.netlify.com/"
                    target="_blank"
                    class="project__link"
                    title="eSportacus"
                    rel="noreferrer"
                >&rarr; eSportacus</a>
                <i class="fab fa-aws icon"></i>
                <i class="fab fa-node-js icon"></i>
                <i class="fab fa-sass icon"></i>
                <i class="fab fa-react icon"></i>
            </div>

            <a
                href="https://github.com/roninii"
                target="_blank"
                class="projects__github"
                rel="noreferrer"
                title="ronnie's github"
            >
                more on github
                <i class="fab fa-github projects__github--icon"></i>
            </a>
        </section>
    </div>
</template>

<script>
import Name from '@/components/Name';

export default {
    metaInfo: {
        title: 'Ronini.dev',
    },
    components: {
        Name,
    },
};
</script>

<style>
.home-links a {
    margin-right: 1rem;
}
</style>
