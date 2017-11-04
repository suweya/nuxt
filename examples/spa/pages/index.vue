<template>
  <div>
    <h1>Welcome!</h1>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/about">About page</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  }
};
</script>