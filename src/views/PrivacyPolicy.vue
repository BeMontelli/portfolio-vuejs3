<script setup>
import HeaderGeneral from '../components/general/HeaderGeneral.vue'
import LoaderSite from '../components/LoaderSite.vue'
import TheLandingGeneral from '../components/general/TheLandingGeneral.vue'
import FooterGeneral from '../components/general/FooterGeneral.vue'
import SectionTexts from '../components/general/SectionTexts.vue'
</script>

<template>
  <LoaderSite />
  <div class="app__container">
    <div class="app__content">
      <HeaderGeneral />
      <main>
        <TheLandingGeneral />
        <SectionTexts />
      </main>
      <FooterGeneral />
    </div>
  </div>
</template>

<style>
body.scroll {
  overflow-y: initial;
}
</style>

<style scoped>
body {
  overflow: hidden;
}
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
  overflow-y: initial;
}
</style>
