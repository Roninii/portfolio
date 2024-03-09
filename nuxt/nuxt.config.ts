// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  css: ["~/assets/style.css"],
  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon.ico",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },
  modules: ["nuxt-icon", "@nuxt/image", "@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    highlight: {
      theme: "dracula",
    },
  },
  ssr: true,
  nitro: {
    static: true,
  },
});
