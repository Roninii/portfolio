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
                    <font-awesome
                        :icon="['fab', 'dev']"
                        title="_ronini's DEV Profile"
                    ></font-awesome>
                </a>

                <a
                    href="https://github.com/roninii/"
                    target="_blank"
                    rel="noreferrer"
                    class="contact__link"
                    title="github"
                >
                    <font-awesome :icon="['fab', 'github']" class="contact__icon"></font-awesome>
                </a>

                <a
                    href="https://linkedin.com/in/ronnievillarini"
                    target="_blank"
                    class="contact__link"
                    title="linkedin"
                    rel="noreferrer"
                >
                    <font-awesome :icon="['fab', 'linkedin']" class="contact__icon"></font-awesome>
                </a>

                <a
                    href="https://twitter.com/_ronini"
                    target="_blank"
                    class="contact__link"
                    title="twitter"
                    rel="noreferrer"
                >
                    <font-awesome :icon="['fab', 'twitter']" class="contact__icon"></font-awesome>
                </a>

                <a
                    href="mailto:ronnie@ronini.dev"
                    target="_blank"
                    class="contact__link"
                    title="email"
                    rel="noreferrer"
                >
                    <font-awesome
                        :icon="['fas', 'envelope-open-text']"
                        class="contact__icon"
                    ></font-awesome>
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
                    >&rarr; ZeroGen Apparel</a
                >
                <!-- <font-awesome :icon="['fab', 'vuejs']" class="icon"></font-awesome> -->
            </div>

            <div class="projects__project">
                <a
                    href="https://www.winning-streak.com"
                    target="_blank"
                    class="project__link"
                    rel="noreferrer"
                    title="Winning Streak"
                    >&rarr; Winning Streak</a
                >
                <div class="project__icons">
                    <!-- <font-awesome :icon="['fab', 'vuejs']" class="icon"></font-awesome> -->
                </div>
            </div>

            <div class="projects__project">
                <a
                    href="https://esportacus.netlify.com/"
                    target="_blank"
                    class="project__link"
                    title="eSportacus"
                    rel="noreferrer"
                    >&rarr; eSportacus</a
                >
                <font-awesome :icon="['fab', 'aws']" class="icon"></font-awesome>
                <font-awesome :icon="['fab', 'node-js']" class="icon"></font-awesome>
                <font-awesome :icon="['fab', 'sass']" class="icon"></font-awesome>
                <font-awesome :icon="['fab', 'react']" class="icon"></font-awesome>
            </div>

            <a
                href="https://github.com/roninii"
                target="_blank"
                class="projects__github"
                rel="noreferrer"
                title="ronnie's github"
            >
                more on github
                <font-awesome
                    :icon="['fab', 'github']"
                    class="projects__github--icon"
                ></font-awesome>
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
