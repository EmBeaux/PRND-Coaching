export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  devtools: true,
  head: {
    title: 'PRND-Coaching',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  env: {
    baseUrl: process.env.API_URL || 'http://localhost:3001'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'framevuerk/dist/framevuerk.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/framevuerk',
    '@/plugins/VueMq',
    '@/plugins/vue-mdi',
    { src: '@/plugins/vue-calendly', ssr: false },
    { src: '@plugins/vue-burger-menu', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          type: ''
        },
        user: {
          property: 'user',
        },
        endpoints: {
          login: {
            url: "/users/login",
            method: "post",
            propertyName: 'token'
          },
          logout: { url: "/users/logout", method: "post" },
          user: { url: "/users/currentUser", method: "get", property: "user" },
        },
        tokenType: ''
      },
    },
  },
  axios: {
    baseURL: 'http://localhost:3001/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['mdi-vue']
  }
}
