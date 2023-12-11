<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import MainNavBar from './components/MainNavBar.vue'

  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div class="wholeScreenContainer mx-auto">

  <header>

      <MainNavBar></MainNavBar>

      <!-- might be useful later
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
      -->
    </header>

    <RouterView />

  </div>

</template>

<style scoped>

.wholeScreenContainer {
  max-width: 100vh;
}
</style>