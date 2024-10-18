<script setup>
const experiences = [
  {
    bg: '2013',
    logo: new URL('@/assets/img/courses-exp.jpg', import.meta.url).href,
    role: '2013 - 2016 • Étudiant en programmation',
    actionsTitle: 'Parcours',
    actions: [
      '[2010-2012] Baccalauréat STI2D',
      "[2013-2015] DUT Métiers du Multimédia et de l'Internet",
      "[2015-2016] LP Métiers du Multimédia et de l'Internet"
    ]
  },
  {
    bg: '2016',
    logo: new URL('@/assets/img/wbq-groupe-logo.jpg', import.meta.url).href,
    company: 'Webqam',
    role: '2016 - 2017 • Développeur web',
    contextTitle: 'Contexte',
    contextDescription: '<p>Premier emploi en tant que développeur</p>',
    actionsTitle: 'Actions',
    actions: [
      'Développement sites événementiels grands comptes en marque blanche',
      'Développement Drupal/Magento'
    ],
    envTitle: 'Environnement technique',
    envDescription: 'selon projets :',
    envDetails: [
      'PHP (Composer, xampp, Docker, mysql, etc.)',
      'JS (Node, npm, ES6, grunt, etc.)',
      'Sublime Text'
    ]
  },
  {
    bg: '2017',
    logo: new URL('@/assets/img/iris-interactive-logo.jpg', import.meta.url).href,
    company: 'Iris Interactive',
    role: '2017 - 2019 • Développeur web et application mobile IOS/Android',
    contextTitle: 'Contexte',
    contextDescription:
      '<p>Développeur dans une équipe orientée application mobile et API liées</p>',
    actionsTitle: 'Actions',
    actions: [
      'Développement sites événementiels grands comptes en marque blanche',
      'Développement Drupal/Magento'
    ],
    envTitle: 'Environnement technique',
    envDescription: 'selon projets :',
    envDetails: [
      'PHP (Composer, Docker, mysql, MongoDB, etc.)',
      'JS (Node, npm, Typescript, Gulp, etc.)',
      'PHPStorm'
    ]
  },
  {
    bg: '2019',
    logo: new URL('@/assets/img/coqpit-logo.jpg', import.meta.url).href,
    company: 'Coqpit',
    role: '2019 - 2024 • Développeur web',
    contextTitle: 'Contexte',
    contextDescription:
      '<p>Développement sur des projets aux fonctionnalités spécifiques sur les projets de la société (configurateurs, E-commerce, sites évènementiel ou vitrine)</p>',
    actionsTitle: 'Actions',
    actions: [
      'Développement sites événementiels grands comptes en marque blanche',
      'Développement Drupal/Magento'
    ],
    envTitle: 'Environnement technique',
    envDescription: 'selon projets :',
    envDetails: [
      'PHP (Composer, mamp pro, Docker, mysql, etc.)',
      'JS (Node, npm, ES6, webpack, etc.)',
      'PHPStorm'
    ]
  },
  {
    bg: '2024',
    logo: new URL('@/assets/img/futur-exp.jpg', import.meta.url).href,
    company: 'Développeur web à Lyon',
    role: '2024 - ? • Développeur web',
    contextTitle: 'Contexte',
    contextDescription:
      "<p>Aujourd'hui je recherche un poste de développeur web sur Lyon.</p><p>Mon intention est de rejoindre une équipe travaillant sur des projets basés sur des frameworks Symfony ou Laravel.</p>"
  },
  {
    bg: 'Cours',
    fade: true,
    logo: new URL('@/assets/img/lessons-exp.jpg', import.meta.url).href,
    company: "Expérience d'enseignement",
    role: 'Formateur PHP, JS, HTML/CSS de 2016 à 2024',
    contextTitle: 'Contexte',
    contextDescription:
      '<p>Formations données dans le cadre de mon université puis ensuite pour des organismes de formation comme Human Booster ou Simplon</p>',
    actionsTitle: 'Actions',
    actions: [
      '[2016] Enseignement de Open Graph Protocol + bases SEO/SEA DUT MMI',
      '[2016] Enseignement Javascript/Jquery MMI',
      '[2020-2021] Enseignement PHP + mise en place environnement de travail (XAMPP/Virtualhost)',
      '[2021] Enseignement Symfony 5.3',
      '[2024] Enseignement Laravel 11 / Vue.JS 3'
    ]
  },
  {
    bg: 'Stages',
    fade: true,
    logo: new URL('@/assets/img/internship-exp.jpg', import.meta.url).href,
    company: "Stages d'études",
    role: 'Développeur web',
    contextTitle: 'Contexte',
    contextDescription:
      '<p>Expériences exécutées au cours de ma formation universitaire (DUT & Licence Professionnelle)</p>',
    actionsTitle: 'Actions',
    actions: [
      '[2015] 10 semaines: Les Perles de vénus Animation de site, Développement et Intégration Web sur le CMS Prestashop et Framework Zend.',
      "[2016] 12 semaines: Équipes Nationales de l'information au Rectorat de Clermont-Ferrand, développement et intégration d'un site web sur Symfony"
    ]
  }
]
</script>

<template>
  <div id="home__career">
    <div class="narrow__container">
      <h2 data-aos="fade-up" class="font__sourceserif4">Mon parcours</h2>
      <div class="experiences">
        <ul class="experiences__list">
          <li
            v-for="experience in experiences"
            :key="experience.year"
            class="experience"
            :class="experience.fade ? 'fade' : 'classic'"
            data-aos="fade-up"
          >
            <span class="deco__bg" aria-hidden="true">{{ experience.bg }}</span>
            <div class="img" :data-aos="experience.year % 2 === 0 ? 'fade-right' : 'fade-left'">
              <img :src="experience.logo" :alt="'Logo ' + experience.company" />
            </div>
            <div class="txts">
              <h3>{{ experience.company }}</h3>
              <span class="dates__role">{{ experience.role }}</span>
              <div class="context">
                <span class="section__title">{{ experience.contextTitle }}</span>
                <div v-html="experience.contextDescription"></div>
              </div>
              <div class="actions" v-if="experience.actions">
                <span class="section__title">{{ experience.actionsTitle }}</span>
                <ul>
                  <li v-for="action in experience.actions" :key="action">{{ action }}</li>
                </ul>
              </div>
              <div class="env" v-if="experience.envDetails">
                <span class="section__title">{{ experience.envTitle }}</span>
                <p>{{ experience.envDescription }}</p>
                <ul>
                  <li v-for="env in experience.envDetails" :key="env">{{ env }}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home__career {
  position: relative;
  padding: 60px 0;
  h2 {
    text-align: center;
    font-weight: bolder;
    font-style: italic;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 50px;
    color: var(--color-main);
    @include responsiveTo(xl) {
      font-size: 2rem;
    }
  }
  strong {
    font-weight: bolder;
    font-style: italic;
  }

  .section__title {
    display: inline;
    font-weight: bolder;
    font-style: italic;
    font-size: 1.25rem;
    margin-bottom: 5px;
    position: relative;
    z-index: 2;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -1px;
      border-radius: 3px;
      left: 0;
      background-color: var(--color-main);
      z-index: -1;
    }
  }

  .experiences {
    position: relative;
    .experiences__list {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .experience {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    @include responsiveTo(md) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      @include responsiveTo(md) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .img {
        margin-right: 0;
        margin-left: 40px;
        @include responsiveTo(md) {
          margin-left: 0;
        }
      }
      .txts {
        text-align: right;
        @include responsiveTo(md) {
          text-align: center;
        }
        li {
          padding-right: 10px;
          &:before {
            content: '•';
            right: 0;
          }
          @include responsiveTo(md) {
            padding-right: 0;
            padding-left: 10px;
            &:before {
              right: inherit;
            }
          }
        }
      }
    }
    .deco__bg {
      position: absolute;
      left: 50%;
      top: 0;
      font-weight: bolder;
      font-size: 10rem;
      line-height: 7rem;
      color: var(--color-text);
      pointer-events: none;
      z-index: 0;
      opacity: 0.2;
      transform: translateX(-50%);
      @include responsiveTo(md) {
        top: 260px;
        line-height: 5rem;
      }
    }
    .img {
      position: relative;
      z-index: 1;
      border-radius: 100%;
      width: 220px;
      height: 220px;
      overflow: hidden;
      margin-right: 40px;
      @include responsiveTo(md) {
        margin-bottom: 20px;
        margin-right: 0;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    .txts {
      position: relative;
      z-index: 1;
      width: calc(100% - 220px - 40px);
      @include responsiveTo(md) {
        width: 100%;
        text-align: center;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      p {
        @include responsiveTo(md) {
          display: block;
          text-align: left;
        }
      }
      li {
        padding-left: 10px;
        position: relative;
        &:before {
          content: '•';
          position: absolute;
          display: block;
          color: var(--color-main);
          top: 0;
          left: 0;
        }
        @include responsiveTo(md) {
          display: block;
          text-align: left;
        }
      }
    }
    h3 {
      position: relative;
      font-weight: bolder;
      font-style: italic;
      font-size: 1.5rem;
      color: var(--color-main);
      margin-bottom: 5px;
      @include responsiveTo(md) {
        text-align: center;
        margin-bottom: 10px;
      }
    }
    .dates__role {
      position: relative;
      background-color: var(--color-main);
      padding: 5px 10px;
      display: inline-block;
      font-weight: bolder;
      margin-bottom: 10px;
      border-radius: 5px;
      color: var(--vt-c-black);
    }
    .context {
      margin-top: 20px;
      position: relative;
    }
    .actions {
      margin-top: 20px;
      position: relative;
    }
    .env {
      position: relative;
      margin-top: 20px;
    }

    &.fade {
      .dates__role {
        background-color: var(--color-background-halfpure);
        color: var(--color-text);
      }
    }
  }
}
</style>
