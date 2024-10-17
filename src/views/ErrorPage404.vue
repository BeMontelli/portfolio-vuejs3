<script setup>
import HeaderGeneral from '../components/general/HeaderGeneral.vue'
import LoaderSite from '../components/LoaderSite.vue'
import TheLandingGeneral from '../components/general/TheLandingGeneral.vue'
import FooterGeneral from '../components/general/FooterGeneral.vue'
</script>

<template>
  <LoaderSite />
  <div class="app__container">
    <div class="app__content">
      <HeaderGeneral />
      <main>
        <TheLandingGeneral
          title="Oops !"
          subtitle="Error 404... click logo to go home !"
          typeclass="big__landing"
        />
        <div class="section__texts">
          <div class="container"></div>
        </div>
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

<style scoped lang="scss">
#mainfooter {
  z-index: 10;
  position: relative;
}

#g__landing {
  margin-bottom: -90px;
}

#g__landing .g__landing__content {
  padding: 160px 20px 240px 20px;
  @include responsiveTo(lg) {
    padding: 160px 20px 150px 20px;
  }
  @include responsiveTo(sm) {
    padding: 160px 20px 110px 20px;
  }
}

body {
  overflow: hidden;
}
.app__container {
  background-color: var(--color-main);
  padding: 15px;
}
.app__content {
  background-color: var(--color-background-alt);
  border-radius: 15px;
  height: calc(100svh - 30px);
  height: calc(100vh - 30px);
  overflow: hidden;
}
</style>
