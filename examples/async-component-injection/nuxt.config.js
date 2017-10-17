module.exports = {
  head: {
    title: 'Nuxt Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, inital-scale=1, maximum-scale=1, user-scalable=no' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'stylesheet', href: 'http://fonts.font.im/css?family=Montserrat|Roboto:400,400italic,600|Roboto+Mono', type: 'text/css' }
    ]
  },
  css: [
    '@/assets/css/common.css'
  ],
  // https://zh.nuxtjs.org/api/configuration-generate#generate-属性配置
  generate: {
    routes: [
      '/deep-dive-into-ocean',
      '/welcome-to-my-blog'
    ]
  }
}
