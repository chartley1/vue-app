<script>
  export default {
    name: 'App',

    // Local State
    data:() => ({ 
      message: 'Hello, world!'
    })
  }
</script>

<template>
  <section>
    <h1>{{ message }}</h1>
  </section>
</template>

<style>
  @import './assets/css/app.css';
</style>
