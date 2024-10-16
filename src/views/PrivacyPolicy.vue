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
        <TheLandingGeneral title="Politique de confidentialité" />
        <SectionTexts />
      </main>
      <FooterGeneral />
    </div>
  </div>

  <svg style="width: 0; height: 0; position: absolute; pointer-events: none">
    <filter id="filterwave">
      <feTurbulence baseFrequency="0" numOctaves="1">
        <animate
          attributeName="baseFrequency"
          dur="20s"
          keyTimes="0;0.5;1"
          values="0.05;0.025;0.05"
          repeatCount="indefinite"
        />
      </feTurbulence>
      <feDisplacementMap scale="10" in="SourceGraphic" />
    </filter>
  </svg>
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
