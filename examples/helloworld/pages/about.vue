<template>
  <div>
    <p>Hi from {{ name }}</p>
    <p>{{ dev }} Mode</p>
    <nuxt-link to="/">Home Page</nuxt-link>
    <ul>
      <li>Static - 使用nuxt generate生成静态文件</li>
      <li>Server - 在服务端生成页面，浏览器直接使用</li>
      <li>Client - 在浏览器的JS引擎生成页面展示</li>
    </ul>
    <strong>一般是在跳转页面的时候使用client，如果在当页面刷新的话则使用server</strong>
  </div>
</template>

<script>
export default {
  asyncData({ isStatic, isServer, isDev }) {
    console.log('isDev : ' + isDev)
    return {
      name: isStatic ? 'static' : isServer ? 'server' : 'client',
      dev: isDev ? 'Develop' : 'Production'
    }
  }
}
</script>

