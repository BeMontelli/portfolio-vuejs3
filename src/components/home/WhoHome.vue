<script setup></script>

<template>
  <div id="home__who">
    <div class="container">
      <div class="cols">
        <div class="col__left">
          <div class="img" data-aos="fade-up">
            <img
              src="@/assets/img/profile-who.jpg"
              alt="Benjamin Montellimard - Développeur PHP/JS"
            />
          </div>
        </div>
        <div class="col__right">
          <h2 data-aos="fade-up" class="font__sourceserif4">Développeur Web PHP/JS</h2>
          <p data-aos="fade-up">
            Bonjour, je suis <strong>Benjamin Montellimard</strong>, développeur orienté web sur des
            langages du type <strong>PHP</strong> et <strong>Javascript</strong>.
          </p>
          <p data-aos="fade-up">
            Originaire du <strong>Puy-en-Velay</strong> (43), je vis et travaille à
            <strong>Clermont-Ferrand</strong> (63) depuis maintenant cinq ans.
          </p>
          <p data-aos="fade-up">
            Actuellement, je recherche un poste à <strong>Lyon</strong> (69) en tant que développeur
            spécialisé dans des frameworks PHP comme <strong>Symfony</strong> ou
            <strong>Laravel</strong>. Avec une solide expérience dans ces environnements, je cherche
            à rejoindre une nouvelle équipe pour relever de nouveaux défis et contribuer à des
            projets web performants et évolutifs.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home__who {
  position: relative;
  padding: 60px 0;
  background-color: var(--color-background-halfpure);
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
    @include responsiveTo(lg) {
      margin-bottom: 40px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .img {
      width: 350px;
      height: 350px;
      display: flex;
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
    strong {
      font-weight: bolder;
      font-style: italic;
    }
  }
}
</style>
