export default {
  components: true,
  router: {
    middleware: ['auth']
  },
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vue-email/nuxt'
  ],
}