const app = require('express')()
const { Nuxt, Builder } = require('nuxt')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// 设置Nuxt配置
let config = require('./nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(config)

if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build()
}

app.use(nuxt.render)

app.listen(port, host)
console.log('Server listening on ' + host + ':' + port)
