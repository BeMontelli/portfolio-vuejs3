<script setup>
import HeaderGeneral from '../components/general/HeaderGeneral.vue'
import LoaderSite from '../components/LoaderSite.vue'
import TheLandingGeneral from '../components/general/TheLandingGeneral.vue'
import FooterGeneral from '../components/general/FooterGeneral.vue'
import SectionTexts from '../components/general/SectionTexts.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Politique de confidentialité - Montellimard Benjamin',
  meta: [
    {
      name: 'description',
      content:
        'Montellimard Benjamin, développeur Web spécialisé en PHP et JavaScript. Explorez mes projets, compétences, et expériences.'
    },
    {
      name: 'keywords',
      content:
        'Montellimard Benjamin, développeur web, PHP, JavaScript, développeur full-stack, portfolio, développement web, programmation, Lyon, Haute-Loire, Clermont-Ferrand, Le Puy-en-Velay, Rhêne'
    },
    { name: 'author', content: 'Montellimard Benjamin' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://montellimard.fr/' },
    { property: 'og:title', content: 'Politique de confidentialité - Montellimard Benjamin' },
    {
      property: 'og:description',
      content:
        'Découvrez mes projets et compétences en développement web, notamment en PHP et JavaScript.'
    },
    { property: 'og:image', content: 'https://montellimard.fr/montellimard-preview.png' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://montellimard.fr/' },
    { property: 'twitter:title', content: 'Politique de confidentialité - Montellimard Benjamin' },
    {
      property: 'twitter:description',
      content: 'Explorez mon portfolio de développeur Web, spécialisé en PHP et JavaScript.'
    },
    { property: 'twitter:image', content: 'https://montellimard.fr/montellimard-preview.png' },
    { name: 'robots', content: 'index, follow' }
  ],
  link: [{ rel: 'canonical', href: 'https://montellimard.fr/' }]
})
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
  background-color: var(--color-background-alt);
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
