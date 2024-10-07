<script setup></script>

<template>
  <header id="mainheader">
    <img alt="Vue logo" class="logo" src="@/assets/img/logo-montellimard.svg" />
  </header>
</template>

<style scoped lang="scss">
header#mainheader .logo {
  margin: 60px;
  position: fixed;
  left: 0;
  top: 0;
  width: 155px;
  z-index: 100;
  @include responsiveTo(sm) {
    width: 120px;
  }
}
</style>
