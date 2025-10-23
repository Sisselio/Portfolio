// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/reset.css"],
  modules: ["@nuxt/image", "@nuxt/icon"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_responsive.scss";',
        },
      },
    },
  },
  ssr: true,
  app: {
    baseURL: "/portfolio/",
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
