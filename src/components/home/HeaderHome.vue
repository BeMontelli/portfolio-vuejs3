<script setup>
import ThemeSwitcher from '../ThemeSwitcher.vue'
import LogoHeader from '../LogoHeader.vue'
</script>

<template>
  <header id="mainheader">
    <LogoHeader />

    <ThemeSwitcher />
  </header>
</template>

<style scoped lang="scss">
header#mainheader .logo {
  margin: 60px 0 0 60px;
  position: fixed;
  left: -50px;
  top: 0;
  opacity: 0;
  width: 155px;
  z-index: 100;
  transition: all 0.5s ease-in;

  @include responsiveTo(sm) {
    width: 120px;
  }

  &.scroll {
    margin: 20px 0 0 40px;
    width: 80px;
    transition: all 0.5s ease-in;
  }
}

.load__done header#mainheader .logo {
  left: 0;
  opacity: 1;
  transition: all 0.5s ease-in;
}
</style>
