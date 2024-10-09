<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const loadingElement = document.getElementById('loadingsite')
  if (loadingElement) {
    setTimeout(() => {
      loadingElement.classList.add('onload')
      setTimeout(() => {
        loadingElement.classList.add('done')
        setTimeout(() => {
          loadingElement.classList.remove('onload')
        }, 500)
      }, 500)
    }, 500)
  }
})
</script>

<template>
  <div id="loadingsite">
    <svg
      class="logo"
      :class="{ scroll: isScrolled }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 326.13 500"
    >
      <title>logo Montellimard</title>
      <path
        style="fill: #e8af2c"
        d="M326.13,163.06A163.07,163.07,0,0,0,0,163.06c0,.66,0,1.32.05,2H0v132.3c0,9.32,7,17.5,16.34,18.06A17.42,17.42,0,0,0,34.83,298V278.15s-.33-5.15,3.1-6.29c1.21-.41,3-.76,6.22,2.71a164,164,0,0,0,14.07,13.32,25.56,25.56,0,0,1,6.35,7.86c1.49,3,1.5,11.6,1.5,11.6V389a17.42,17.42,0,0,0,34.83,0V324.82s-.16-5.51,2.11-7.07,3.91-1.54,7-.48a159.91,159.91,0,0,0,19.48,5.37c5.3,1.12,10.05,3,13.74,7.12,2.83,3.16,2.43,12.39,2.43,12.39V482.59a17.42,17.42,0,0,0,34.83,0V335.76s.58-6.29,2.36-8.26c2.18-2.42,4.1-3.12,7.28-3.65a162.49,162.49,0,0,0,16.48-3.62c4-1.11,5.88-2,9.27.39,2.3,1.62,2.6,7.08,2.6,7.08l-.05,27.22a17.41,17.41,0,1,0,34.82,0l.09-45.7s1-7.35,2.26-9.64a16.57,16.57,0,0,1,5.28-6.06,164.29,164.29,0,0,0,18.86-16.58s4-4.69,8.1-2.72c3.82,1.82,3.44,6.49,3.44,6.49v96.4a17.42,17.42,0,0,0,34.83,0V165h0C326.1,164.38,326.13,163.72,326.13,163.06ZM163.06,291.3A128.21,128.21,0,0,1,61.79,84.44c5.05-6.5,9.17-11.13,12.9-9.79,4.13,1.47,4,13,4,13v1.93a17.42,17.42,0,0,0,34.83,0V63.15s.21-11.51,2.76-15.34c3.32-5,8.49-7.31,14.37-8.84a128.66,128.66,0,0,1,79.14,4.66c7.36,2.88,14.87,9.84,18.66,16.66,3,5.42,2.35,18.68,2.35,18.68v78.12a17.42,17.42,0,0,0,34.83,0V114.17s.38-11,4.11-12c1.56-.4,5.77-1.43,9.55,6.64A128.29,128.29,0,0,1,163.06,291.3Z"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
#loadingsite {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--color-background);
  z-index: 100000;
  transition: 0.5s all ease-in;
  &.onload {
    height: 0;
    transition: 0.5s all ease-in;
    .logo {
      top: 30%;
      opacity: 0;
    }
  }
  &.done {
    opacity: 0;
    transition: 0.5s all ease-in;
    pointer-events: none;
  }
}

#loadingsite .logo {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 155px;
  transition: all 0.5s ease;
  @include responsiveTo(sm) {
    width: 120px;
  }
}
</style>
