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
  supabase: {
    redirect: false,
    url: 'https://xdqwolnmgphskookqgdp.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkcXdvbG5tZ3Boc2tvb2txZ2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYyODgwNzEsImV4cCI6MjAzMTg2NDA3MX0.hSM_WdaOj3Dz6QUhc0e9QDYl_FSN1lDcDaE6fQvdEn0'
  }
}