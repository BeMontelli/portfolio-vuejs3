<script setup></script>

<template>
  <div id="home__career">
    <div class="narrow__container">
      <h2 data-aos="fade-up" class="font__sourceserif4">Mon parcours</h2>
      <div class="experiences">
        <ul class="experiences__list">
          <li class="experience" data-aos="fade-up">
            <span class="deco__date" aria-hidden="true">2016</span>
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
            <span class="deco__date" aria-hidden="true">2017</span>
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
            <span class="deco__date" aria-hidden="true">2019</span>
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

          <li class="experience" data-aos="fade-up">
            <span class="deco__date" aria-hidden="true">2024</span>
            <div class="img" data-aos="fade-right">
              <img src="@/assets/img/futur-exp.jpg" alt="Logo Futur Poste" />
            </div>
            <div class="txts">
              <h3>Développeur web à Lyon</h3>
              <span class="dates__role">2024 - ? • Développeur web</span>
              <div class="context">
                <span class="section__title">Contexte</span>
                <p>
                  Aujourd'hui je recherche un poste de développeur web sur <strong>Lyon</strong>.
                  Mon intention est de rejoindre une équipe travaillant sur des projets basés sur
                  des frameworks Symfony ou Laravel.
                </p>
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
    .deco__date {
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
  }
}
</style>
