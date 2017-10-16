<template>
  <div class="container">
    <p>{{ mode }}</p>
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <p>
      <nuxt-link to="/posts">Back to list</nuxt-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params, isServer }) {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    return { post: data, mode: isServer ? 'Server' : 'Client' }
  },
  head() {
    return {
      title: this.post.title
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 100px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  border: 1px #ddd solid;
  padding: 20px;
  text-align: left;
}

ul li a {
  color: gray;
}

p {
  font-size: 20px;
}

a {
  color: #41B883;
}
</style>
