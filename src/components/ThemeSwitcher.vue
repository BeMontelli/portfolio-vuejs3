<script setup>
import { ref, onMounted } from 'vue'
import { themeSelectStore } from '@/stores/themeSelect'
const themeSelect = themeSelectStore()

const isDarkMode = ref(
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
)

const toggleTheme = () => {
  if (isDarkMode.value) goLight()
  else goDark()
}

const goLight = () => {
  document.documentElement.classList.remove('dark')
  isDarkMode.value = false
  themeSelect.setTheme('light')
}
const goDark = () => {
  document.documentElement.classList.add('dark')
  isDarkMode.value = true
  themeSelect.setTheme('dark')
}

onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  if (themeSelect.getTheme !== null) {
    if (themeSelect.getTheme === 'dark') goDark()
    else goLight()
  } else {
    if (mediaQuery.matches) goDark()
    else goLight()
  }

  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) goDark()
    else goLight()
  })
})
</script>

<template>
  <button
    id="theme-toggle"
    type="button"
    aria-label="Enable dark theme"
    :aria-pressed="isDarkMode"
    @click="toggleTheme"
  >
    <i v-show="isDarkMode" class="bx bx-sun plain darktolight"></i>
    <i v-show="isDarkMode" class="bx bxs-sun hover darktolight"></i>
    <i v-show="!isDarkMode" class="bx bx-moon plain lighttodark"></i>
    <i v-show="!isDarkMode" class="bx bxs-moon hover lighttodark"></i>
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
