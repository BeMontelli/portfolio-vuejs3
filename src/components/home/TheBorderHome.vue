<script setup></script>

<template>
  <div id="bordersite" class="home"></div>
</template>

<style scoped>
#bordersite {
  display: block;
  position: fixed;
  cursor: none;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
  border: 20px var(--color-main) solid;
  border-radius: 20px;
  top: 0;
  left: 0;
}
</style>
