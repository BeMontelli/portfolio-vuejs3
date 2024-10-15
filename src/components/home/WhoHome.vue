<script setup>
const profileData = {
  imgSrc: new URL('@/assets/img/profile-who.jpg', import.meta.url).href,
  imgAlt: 'Benjamin Montellimard - Développeur PHP/JS',
  title: 'Développeur Web PHP/JS',
  paragraphs: [
    'Bonjour, je suis <strong>Benjamin Montellimard</strong>, développeur orienté web sur des langages du type <strong>PHP</strong> et <strong>Javascript</strong>.',
    'Originaire du <strong>Puy-en-Velay</strong> (43), je vis et travaille à <strong>Clermont-Ferrand</strong> (63) depuis maintenant cinq ans.',
    'Actuellement, je recherche un poste à <strong>Lyon</strong> (69) en tant que développeur spécialisé dans des frameworks PHP comme <strong>Symfony</strong> ou <strong>Laravel</strong>. Avec une solide expérience dans ces environnements, je cherche à rejoindre une nouvelle équipe pour relever de nouveaux défis et contribuer à des projets web performants et évolutifs.'
  ]
}
</script>

<template>
  <div id="home__who">
    <div class="container">
      <div class="cols">
        <div class="col__left">
          <div class="img__bg"></div>
          <div class="img" data-aos="fade-up">
            <img :src="profileData.imgSrc" :alt="profileData.imgAlt" />
          </div>
        </div>
        <div class="col__right">
          <h2 data-aos="fade-up" class="font__sourceserif4">{{ profileData.title }}</h2>
          <p
            v-for="(paragraph, index) in profileData.paragraphs"
            :key="index"
            data-aos="fade-up"
            v-html="paragraph"
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#home__who {
  .col__right strong {
    font-weight: bolder;
    font-style: italic;
  }
}
</style>

<style scoped lang="scss">
#home__who {
  position: relative;
  padding: 140px 0 120px;
  margin-bottom: -120px;
  background-color: var(--color-background-alt);
  --mask: radial-gradient(134.16px at 50% 180px, #000 99%, #0000 101%) calc(50% - 120px) 0/240px 51%
      repeat-x,
    radial-gradient(134.16px at 50% -120px, #0000 99%, #000 101%) 50% 60px/240px calc(51% - 60px)
      repeat-x,
    radial-gradient(134.16px at 50% calc(100% - 180px), #000 99%, #0000 101%) calc(50% - 120px) 100%/240px
      51% repeat-x,
    radial-gradient(134.16px at 50% calc(100% + 120px), #0000 99%, #000 101%) 50% calc(100% - 60px) /
      240px calc(51% - 60px) repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  top: -20px;
  z-index: 2;
  transition: all 0.5s ease-in;
  .cols {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @include responsiveTo(lg) {
      flex-direction: column;
      align-items: center;
    }
  }
  .col__left {
    width: 450px;
    position: relative;
    @include responsiveTo(lg) {
      margin-bottom: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .img__bg {
      width: 350px;
      height: 350px;
      display: flex;
      z-index: 0;
      justify-content: center;
      align-items: center;
      background-image: url('@/assets/img/txtbg-main.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 100%;
      @include responsiveTo(xl) {
        width: 250px;
        height: 250px;
      }
    }
    .img {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 350px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      @include responsiveTo(xl) {
        width: 250px;
        height: 250px;
      }
      @include responsiveTo(lg) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    img {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      @include responsiveTo(xl) {
        width: 200px;
        height: 200px;
      }
    }
  }
  .col__right {
    line-height: 1.75rem;
    margin-left: 5vw;
    font-size: 1.3rem;
    @include responsiveTo(lg) {
      width: 100%;
      margin-left: 0;
    }
    @include responsiveTo(xl) {
      font-size: 1rem;
      font-size: 1.1rem;
    }
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
    p {
      margin-bottom: 20px;
    }
  }
}

body.scroll {
  #home__who {
    top: -80px;
    transition: all 0.5s ease-in;
  }
}
</style>
