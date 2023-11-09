// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  css: ["~/assets/style.css"],
  modules: ["nuxt-icon", "@nuxt/image"],
});
