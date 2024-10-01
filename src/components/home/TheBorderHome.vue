<script setup></script>

<template>
  <div id="bordersite" class="home">
    <div class="top"></div>
    <div class="bot"></div>
  </div>
</template>

<style scoped>
#bordersite {
  display: block;
  position: fixed;
  overflow: hidden;
  cursor: none;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  border: 20px var(--color-main) solid;
  border-radius: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 20px var(--color-main) solid;
  border-bottom: 20px var(--color-main) solid;
  transition: 0.5s all ease-in;
}
#bordersite .top {
}
#bordersite .top:before {
  content: '';
  display: block;
  position: fixed;
  top: -20px;
  left: -20px;
  background-image: url('@/assets/img/angle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
}
#bordersite .top:after {
  content: '';
  display: block;
  position: fixed;
  top: -20px;
  right: -20px;
  background-image: url('@/assets/img/angle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  transform: rotate(90deg);
}

#bordersite .bot {
}

#bordersite .bot:before {
  content: '';
  display: block;
  position: fixed;
  bottom: -20px;
  left: -20px;
  background-image: url('@/assets/img/angle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  transform: rotate(-90deg);
}
#bordersite .bot:after {
  content: '';
  display: block;
  position: fixed;
  bottom: -20px;
  right: -20px;
  background-image: url('@/assets/img/angle.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  transform: rotate(180deg);
}

#bordersite.scroll {
  border-bottom: 0px var(--color-main) solid;
  transition: 0.5s all ease-in;
}
#bordersite.scroll .bot:before {
  bottom: -40px;
  transition: 1s all ease-in;
}
#bordersite.scroll .bot:after {
  bottom: -40px;
  transition: 1s all ease-in;
}
</style>
