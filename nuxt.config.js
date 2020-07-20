import webpack from 'webpack'

let dotenv = { systemvars: false }

switch (process.env.NODE_ENV) {
  case 'development':
    dotenv = { ...dotenv, ...{ filename: '.env.dev' } }
    break
  default:
    dotenv = { ...dotenv, ...{ filename: '.env.prd' } }
}

export default {
  // buildDir: 'nuxt-dist', // 更改打包目录
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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
       /*以下是设置双核浏览器默认状态下使用极速模式打开*/
      { name: 'renderer', content: 'webkit'},
      { name: 'force-rendering', content: 'webkit'},
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge,chrome=1'},
      { name: 'baidu-site-verification', content: 'mREHhDF8nW'},

      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'shortcut icon', type: 'image/x-icon', href: '' },
      // { rel: 'bookmark', type: 'image/x-icon', href: 'https://favicon.ico' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https:///frontrs/touch-icon-iphone-68.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https:///frontrs/touch-icon-ipad-76.png' },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https:///frontrs/touch-icon-ipad-120.png', sizes: "120x120"  },
      // { rel: 'apple-touch-icon', type: 'image/x-icon', href: 'https:///frontrs/touch-icon-ipad-152.png', sizes: "152x152"  }
    ],
    script: [
      { src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' },
      { src: '/js/prefixfree.min.js', type: 'text/javascript', charset: 'utf-8' }
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
    // 监控相关
    [
      '@qonfucius/nuxt-prometheus-module',
      {
        port: 9091,
        host: '0.0.0.0',
        metrics: {
          collectDefault: true, // 有关nodejs本身的默认指标。传递对象以将选项发送到
          requestDuration: true, // 带有路线的请求时长图块
        },
      },
    ],
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
