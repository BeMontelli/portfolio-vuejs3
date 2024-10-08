<script setup></script>

<template>
  <button id="theme-toggle" type="button" aria-label="Enable dark theme" aria-pressed="false">
    <i class="bx bx-sun plain darktolight"></i>
    <i class="bx bxs-sun hover darktolight"></i>
    <i class="bx bx-moon plain lighttodark" style="display: none"></i>
    <i class="bx bxs-moon hover lighttodark" style="display: none"></i>
  </button>
</template>

<style scoped lang="scss">
#theme-toggle {
  margin: 40px 40px 0 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  font-size: 40px;
  line-height: 50px;
  z-index: 100;
  transition: all 0.5s ease;
  border: none;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.5s ease-in;
  .hover {
    opacity: 0;
    transition: all 0.5s ease-in;
  }
  &:hover {
    .plain {
      opacity: 0;
      transition: all 0.5s ease-in;
    }
    .hover {
      opacity: 1;
      transition: all 0.5s ease-in;
    }
  }
  &.scroll {
    margin: 20px 0 0 40px;
    transition: all 0.5s ease;
  }
  i {
    position: absolute;
    top: 5px;
    left: 5px;
  }
}
</style>
