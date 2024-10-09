<script setup></script>

<template>
  <div id="home__career">
    <div class="container">
      <h2 data-aos="fade-up" class="font__sourceserif4">Mon parcours</h2>
      <div class="experiences">
        <div class="container">
          <ul class="experiences__list">
            <li class="experience" data-aos="fade-up">
              <div class="img" data-aos="fade-right">
                <img src="@/assets/img/wbq-groupe-logo.jpg" alt="Logo Webqam" />
              </div>
              <div class="txts">
                <h3>Webqam</h3>
                <span class="dates__role">2016 - 2017 • Développeur web</span>
                <div class="context">
                  <span class="section__title">Contexte</span>
                  <p>Premier emploi en tant que développeur</p>
                </div>
                <div class="actions">
                  <span class="section__title">Actions</span>
                  <ul>
                    <li>Développement sites événementiels grands comptes en marque blanche</li>
                    <li>Développement Drupal/Magento</li>
                  </ul>
                </div>
                <div class="env">
                  <span class="section__title">Environnement technique</span>
                  <p>selon projets :</p>
                  <ul>
                    <li>PHP (Composer,xampp, Docker,mysql,etc)</li>
                    <li>JS(Noide,npm,ES6,grunt,etc)</li>
                    <li>Sublime Text</li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="experience" data-aos="fade-up">
              <div class="img" data-aos="fade-left">
                <img src="@/assets/img/iris-interactive-logo.jpg" alt="Logo Iris Interactive" />
              </div>
              <div class="txts">
                <h3>Iris Interactive</h3>
                <span class="dates__role"
                  >2017 - 2019 • Développeur web et application mobile IOS/Android</span
                >
                <div class="context">
                  <span class="section__title">Contexte</span>
                  <p>Développeur dans une équipe orientée application mobile et API liées</p>
                </div>
                <div class="actions">
                  <span class="section__title">Actions</span>
                  <ul>
                    <li>Développement sites événementiels grands comptes en marque blanche</li>
                    <li>Développement Drupal/Magento</li>
                  </ul>
                </div>
                <div class="env">
                  <span class="section__title">Environnement technique</span>
                  <p>selon projets :</p>
                  <ul>
                    <li>PHP (Composer,Docker,mysql,mangoDB,etc)</li>
                    <li>JS(Node,npm,Typescript,Gulp,etc)</li>
                    <li>PHPStorm</li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="experience" data-aos="fade-up">
              <div class="img" data-aos="fade-right">
                <img src="@/assets/img/coqpit-logo.jpg" alt="Logo Coqpit" />
              </div>
              <div class="txts">
                <h3>Coqpit</h3>
                <span class="dates__role">2019 - 2024 • Développeur web</span>
                <div class="context">
                  <span class="section__title">Contexte</span>
                  <p>
                    Développement sur des projets aux fonctionnalités spécifiques sur les projets de
                    la société (configurateurs, E-commerce, sites évènementiel ou vitrine)
                  </p>
                </div>
                <div class="actions">
                  <span class="section__title">Actions</span>
                  <ul>
                    <li>Développement sites événementiels grands comptes en marque blanche</li>
                    <li>Développement Drupal/Magento</li>
                  </ul>
                </div>
                <div class="env">
                  <span class="section__title">Environnement technique</span>
                  <p>selon projets :</p>
                  <ul>
                    <li>PHP (Composer,mamp pro, Docker,mysql,etc)</li>
                    <li>JS(Node,npm,ES6,webpack,etc)</li>
                    <li>PHPStorm</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home__career {
  position: relative;
  padding: 60px 0;
  h2 {
    font-weight: bolder;
    font-style: italic;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 40px;
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
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      .img {
        margin-right: 0;
        margin-left: 40px;
      }
      .txts {
        text-align: right;
        li {
          padding-right: 10px;
          &:before {
            content: '•';
            right: 0;
            left: inherit;
          }
        }
      }
    }
    .img {
      position: relative;
      border-radius: 100%;
      width: 250px;
      height: 250px;
      overflow: hidden;
      margin-right: 40px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .txts {
      position: relative;
      width: calc(100% - 250px - 40px);
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
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
      }
    }
    h3 {
      position: relative;
      font-weight: bolder;
      font-style: italic;
      font-size: 1.5rem;
      color: var(--color-main);
      margin-bottom: 5px;
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
  }
}
</style>
