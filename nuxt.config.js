// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/scss/main.scss'
  ],

  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },

  app: {
    baseURL: 'test-gallery',
  },

  nitro: {
    preset: 'static',
  },
})
