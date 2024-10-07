<script setup></script>

<template>
  <div id="home__who">
    <div class="container">
      <div class="cols">
        <div class="col__left">
          <div class="img">
            <img
              src="@/assets/img/profile-who.jpg"
              alt="Benjamin Montellimard - Développeur PHP/JS"
            />
          </div>
        </div>
        <div class="col__right">
          <h2 class="font__sourceserif4">Développeur Web PHP/JS</h2>
          <p>
            Bonjour, je suis Benjamin Montellimard, développeur orienté web sur des langages du type
            PHP et Javascript.
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
  }
  .col__left {
    width: 450px;
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
    }
    img {
      width: 300px;
      height: 300px;
      border-radius: 100%;
    }
  }
  .col__right {
    line-height: 2rem;
    margin-left: 5vw;
    font-size: 1.5rem;
    h2 {
      font-weight: bolder;
      font-style: italic;
      font-size: 3rem;
      line-height: 3rem;
      margin-bottom: 40px;
      color: var(--color-main);
    }
  }
}
</style>
