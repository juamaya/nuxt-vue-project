// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "bootstrap-icons/font/bootstrap-icons.css",
    "@/assets/css/theme.css",
  ],

  app: {
    head: {
      title: "Juamaya26",
      titleTemplate: "%s",
      meta: [
        {
          name: "description",
          content: "Creamos experiencias digitales modernas con Nuxt y Vue.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
      htmlAttrs: {
        lang: "es",
      },
    },
  },
});
