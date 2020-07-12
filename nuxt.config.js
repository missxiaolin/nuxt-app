import webpack from 'webpack'

let dotenv = { systemvars: false }

switch (process.env.NODE_ENV) {
  case 'development':
    dotenv = { ...dotenv, ...{ filename: '.env.dev' } }
    break
  case 'qa':
    dotenv = { ...dotenv, ...{ filename: '.env.qa' } }
    break
  case 'pre':
    dotenv = { ...dotenv, ...{ filename: '.env.pre' } }
    break
  case 'gr':
    dotenv = { ...dotenv, ...{ filename: '.env.gr' } }
    break
  default:
    dotenv = { ...dotenv, ...{ filename: '.env.prd' } }
}

export default {
  buildDir: 'nuxt-dist', // 更改打包目录
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  ** nuxt 兼容IE9及以上，flex 兼容IE10及以上，而国内浏览器大多采用webkit内核，或者双内核，双内核只需要简单的增加meta标签就可以了  <meta data-n-head="true" name="renderer" content="webkit">
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { name: 'renderer', content: 'webkit' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: "~assets/css/main.scss", lang: "scss" }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~assets/js/poly.js', ssr: true },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/dotenv', dotenv],
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // With options
    ['@nuxtjs/dotenv', dotenv],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    // analyze: true, 打包大小观察使用
    vendor: ['axios'],
    // filenames: { // 目录名称
    //   chunk: ({ isDev }) => isDev ? '[name].js' : '[id].[contenthash].js'
    // },
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash'
      })
    ],
    postcss: {
      plugins: {
        // 'autoprefixer': {
        //   browsers: ['Android >= 4.0', 'IOS >= 7']
        // },
        'postcss-pxtorem': {
          rootValue: 37.5,
          propList: ['*']
        }
      }
    },
    extend(config, ctx) {

    },
    // nuxt - IE9 样式失效问题
    extractCSS: { allChunks: true }
  },
  router: {
    middleware: 'vueRouter'
  }
}
