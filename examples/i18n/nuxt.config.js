module.exports = {
  loading: {
    color: 'cyan'
  },
  build: {
    vendor: ['vue-i18n']
  },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js'],
  generate: {
    routes: ['/', 'about', '/fr', '/fr/about']
  },
  head: {
    link: [
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }
    ]
  }
}
