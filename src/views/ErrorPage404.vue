<script setup>
import { ref } from 'vue'
import HeaderGeneral from '../components/general/HeaderGeneral.vue'
import LoaderSite from '../components/LoaderSite.vue'
import TheLandingGeneral from '../components/general/TheLandingGeneral.vue'
import FooterGeneral from '../components/general/FooterGeneral.vue'

import { useHead } from '@unhead/vue'

useHead({
  title: '404 - Erreur - Montellimard Benjamin',
  meta: [
    {
      name: 'description',
      content: "Page d'erreur 404, la page que vous cherchez n'existe plus."
    },
    {
      name: 'keywords',
      content:
        '404, erreur, Montellimard Benjamin, développeur web, PHP, JavaScript, développeur full-stack, portfolio, développement web, programmation, Lyon, Haute-Loire, Clermont-Ferrand, Le Puy-en-Velay, Rhêne'
    },
    { name: 'author', content: 'Montellimard Benjamin' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://montellimard.fr/' },
    { property: 'og:title', content: '404 - Erreur - Montellimard Benjamin' },
    {
      property: 'og:description',
      content: "Page d'erreur 404, la page que vous cherchez n'existe plus."
    },
    { property: 'og:image', content: 'https://montellimard.fr/montellimard-preview.png' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://montellimard.fr/' },
    { property: 'twitter:title', content: '404 - Erreur - Montellimard Benjamin' },
    {
      property: 'twitter:description',
      content: "Page d'erreur 404, la page que vous cherchez n'existe plus."
    },
    { property: 'twitter:image', content: 'https://montellimard.fr/montellimard-preview.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://montellimard.fr/' }]
})

const title = ref('Oops !')
const subtitle = ref("Erreur 404... cliquez sur le logo pour revenir à l'accueil !")
const typeclass = ref('big__landing')
</script>

<template>
  <LoaderSite />
  <div class="app__container">
    <div class="app__content">
      <HeaderGeneral />
      <main>
        <TheLandingGeneral :title="title" :subtitle="subtitle" :typeclass="typeclass" />
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
  background-color: var(--color-background-alt) !important;
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
