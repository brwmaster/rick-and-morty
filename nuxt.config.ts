export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  app: {
    head: {
      title: 'Rick and Morty',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png'
        }
      ]
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql'
      }
    }
  }
});
