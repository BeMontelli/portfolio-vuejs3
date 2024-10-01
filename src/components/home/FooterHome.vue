<script setup></script>

<template>
  <footer id="mainfooter">
    <span>FOOTER</span>
  </footer>
  <div id="endborder">
    <div class="bot"></div>
  </div>
</template>

<style scoped>
footer#mainfooter {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
#endborder {
  position: relative;
  opacity: 0.2;
  width: 100%;
  height: 20px;
  background-color: var(--color-main);
}
#endborder .bot {
  position: relative;
  display: block;
}
#endborder .bot:before {
  content: '';
  display: block;
  position: absolute;
  bottom: -20px;
  left: 0;
  background-image: url('@/assets/img/angle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  transform: rotate(-90deg);
}
#endborder .bot:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -20px;
  right: 0;
  background-image: url('@/assets/img/angle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
}
</style>
