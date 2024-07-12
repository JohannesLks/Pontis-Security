export default {
  components: true,
  router: {
    middleware: ['auth']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vue-email/nuxt'
  ],
}