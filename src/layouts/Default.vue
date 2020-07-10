<template>
    <div class="layout">
        <Nav />
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
};
</script>
