<script setup>
import HeaderGeneral from '../components/general/HeaderGeneral.vue'
import LoaderSite from '../components/LoaderSite.vue'
import FooterGeneral from '../components/general/FooterGeneral.vue'
import SectionTexts from '../components/general/SectionTexts.vue'
</script>

<template>
  <LoaderSite />
  <div class="app__container">
    <div class="app__content">
      <HeaderGeneral />
      <main><SectionTexts /></main>
      <FooterGeneral />
    </div>
  </div>
</template>

<style></style>

<style scoped>
.app__container {
  background-color: var(--color-main);
  padding: 15px;
}
.app__content {
  background-color: var(--color-background);
  border-radius: 15px;
}
body .app__content {
  height: auto;
  overflow: initial;
}
</style>
