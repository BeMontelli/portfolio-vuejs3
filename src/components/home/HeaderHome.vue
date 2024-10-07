<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 20) isScrolled.value = true
  else isScrolled.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header id="mainheader">
    <img
      alt="Vue logo"
      class="logo"
      :class="{ scroll: isScrolled }"
      src="@/assets/img/logo-montellimard.svg"
    />
  </header>
</template>

<style scoped lang="scss">
header#mainheader .logo {
  margin: 60px 0 0 60px;
  position: fixed;
  left: 0;
  top: 0;
  width: 155px;
  z-index: 100;
  transition: all 0.5s ease;

  @include responsiveTo(sm) {
    width: 120px;
  }

  &.scroll {
    margin: 20px 0 0 40px;
    width: 80px;
    transition: all 0.5s ease;
  }
}
</style>
