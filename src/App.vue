<script>
  export default {
    name: 'App',

    // Local State
    data:() => ({ 
      message: 'vue-app'
    })
  }
</script>

<template>
  <section id="vue-app">
    <header>
      <nav>
        <router-link to="/summary">Summary</router-link> |
        <router-link to="/income">Income</router-link> |
        <router-link to="/expenses">Expenses</router-link>
      </nav>
    </header>
    <router-view/>
  </section>
</template>

<style>
  @import './assets/css/app.css';

  body {
    text-align: center;
  }
</style>
