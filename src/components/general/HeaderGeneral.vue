<script setup>
import ThemeSwitcher from '../ThemeSwitcher.vue'
import LogoHeader from '../LogoHeader.vue'
</script>

<template>
  <header id="mainheader">
    <router-link :to="{ name: 'home' }"><LogoHeader /></router-link>

    <ThemeSwitcher />
  </header>
</template>

<style scoped lang="scss">
header#mainheader .logo {
  position: fixed;
  left: -50px;
  top: 0;
  opacity: 0;
  z-index: 100;
  margin: 40px 0 0 40px;
  width: 80px;
  transition: all 0.5s ease-in;
  &.scroll {
    margin: 20px 0 0 40px;
  }
}

.load__done header#mainheader .logo {
  left: 0;
  opacity: 1;
  transition: all 0.5s ease-in;
}
</style>
