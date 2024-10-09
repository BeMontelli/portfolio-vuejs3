<script setup>
import HeaderHome from '../components/home/HeaderHome.vue'
import LoaderSite from '../components/LoaderSite.vue'
import FooterHome from '../components/home/FooterHome.vue'
import TheLandingHome from '../components/home/TheLandingHome.vue'
import WhoHome from '../components/home/WhoHome.vue'
import CareerHome from '../components/home/CareerHome.vue'
</script>

<script>
export default {
  mounted() {
    // Ajouter une classe au body lors du chargement
    //document.body.classList.add('scroll')
  }
}
</script>

<template>
  <LoaderSite />
  <div class="app__container">
    <div class="app__content">
      <HeaderHome />
      <main>
        <TheLandingHome />
        <WhoHome />
        <CareerHome />
      </main>
      <FooterHome />
    </div>
  </div>
</template>

<style>
body {
  overflow: hidden;
}
body.scroll {
  overflow: initial;
}
</style>

<style scoped>
.app__container {
  background-color: var(--color-main);
  padding: 15px;
}
.app__content {
  background-color: var(--color-background);
  border-radius: 15px;
  height: calc(100svh - 30px);
  height: calc(100vh - 30px);
  overflow: hidden;
}
body.scroll .app__content {
  height: auto;
  overflow: initial;
}
</style>
