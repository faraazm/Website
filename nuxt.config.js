import Prismic from 'prismic-javascript';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Faraaz Motiwala | Full Stack Developer and Designer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My name is Faraaz Motiwala and I am a Full Stack Developer and Designer based in New York. I am a freelancer, artist, and designer and I truly enjoy what I do. I am extremely passionate and detail-oriented towards creating the most beautiful interfaces and designs.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: ["@/assets/scss/main.scss"],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Simple usage
    '@nuxtjs/moment',

    // With options
    ['@nuxtjs/moment', { /* module options */ }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/prismic',
    '@/modules/static',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  prismic: {
    endpoint: 'https://faraazmotiwala.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    routes: async function () {
      try {
        const api = await Prismic.api("https://faraazmotiwala.cdn.prismic.io/api/v2");
        const posts = await api.query(Prismic.Predicates.at('document.type', 'blog-post'));
        const routes = await posts.results.map(payload => {
          return {
            route: `/blog/${payload.uid}`,
            payload
          }
        });

        return Promise.all([routes]).then(values => {
          return [...values[0]];
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
}
