<script setup></script>

<template>
  <div id="home__landing">
    <div class="cols">
      <span class="hello" aria-hidden="true">BONJOUR</span>
      <div class="col__left"></div>
      <div class="col__right">
        <h1>Benjamin<br />Montellimard</h1>
        <h2>Développeur Web</h2>
        <ul>
          <li>PHP</li>
          <li>JS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Symfony</li>
          <li>VueJS</li>
          <li>Laravel</li>
          <li>Docker</li>
        </ul>
      </div>
      <button class="scrollsite"><i class="bx bx-mouse"></i></button>
    </div>
  </div>
</template>

<style scoped>
#home__landing {
  height: 100vh;
}

#home__landing .hello {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: var(--color-main);
  z-index: 10;
  font-weight: bold;
  font-size: 3rem;
  pointer-events: none;
}

#home__landing .scrollsite {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  color: var(--color-main);
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all ease-in 0.5s;
}
#home__landing .scrollsite:hover {
  bottom: 30px;
  transition: all ease-in 0.5s;
}

#home__landing .cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100%;
}

#home__landing .col__left {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/forest-fog-trees-mountains-crowns-tops.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px 0 0 20px;
}

#home__landing .col__right {
  position: relative;
  width: 50%;
  height: 100%;
}

#home__landing .col__right h1 {
  color: var(--color-main);
}
</style>
