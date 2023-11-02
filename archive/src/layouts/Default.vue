<template>
    <div class="layout">
        <Nav @theme-change='handleThemeChange'/>
        <main id="main">
            <slot />
        </main>
    </div>
</template>

<script>
export default {
    name: 'Default',
    components: {
        Nav: () => import('./Nav.vue'),
    },
    data() {
        return {
            theme: ''
        }
    },
    methods: {
        handleThemeChange(e) {
            this.theme = e
        }
    }
};
</script>
