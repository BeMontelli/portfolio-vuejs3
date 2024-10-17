import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const themeSelectStore = defineStore('themeSelect', () => {
  const themeSelection = ref(null)

  if (localStorage.getItem('app_theme')) {
    themeSelection.value = localStorage.getItem('app_theme')
  }
  const getTheme = computed(() => themeSelection.value)

  const setTheme = (newTheme) => {
    themeSelection.value = newTheme
    localStorage.setItem('app_theme', themeSelection.value)
  }

  return {
    themeSelection,
    setTheme,
    getTheme
  }
})
