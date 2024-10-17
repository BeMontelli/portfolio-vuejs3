<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: false
    },
    typeclass: {
      type: String,
      required: false,
      default: ''
    }
  },
  mounted() {
    //console.log('mounted')
    window.addEventListener('wheel', this.handleUserScroll)
    window.addEventListener('touchstart', this.handleTouchStart)
    window.addEventListener('touchend', this.handleTouchEnd)
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleUserScroll)
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('touchend', this.handleTouchEnd)
  },
  methods: {
    addScrollClass() {
      document.body.classList.add('scroll')
    },
    handleUserScroll(event) {
      if (event.deltaY > 0) {
        this.addScrollClass()
      }
    },
    handleTouchStart(event) {
      this.touchStartY = event.touches[0].clientY
    },
    handleTouchEnd(event) {
      const touchEndY = event.changedTouches[0].clientY
      if (this.touchStartY > touchEndY + 50) this.addScrollClass()
    }
  }
}
</script>

<template>
  <div id="g__landing">
    <div class="g__landing__container">
      <div class="g__landing__content" :class="typeclass">
        <h1>{{ title }}</h1>
        <h2 v-if="subtitle">{{ subtitle }}</h2>
        <div class="code__overlay"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#g__landing .g__landing__content.big__landing {
  padding: 180px 20px 240px 20px;
  @include responsiveTo(lg) {
    padding: 180px 20px 150px 20px;
  }
  @include responsiveTo(sm) {
    padding: 180px 20px 110px 20px;
  }
}

#g__landing {
  .g__landing__container {
    overflow: hidden;
  }

  .g__landing__content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 180px 20px 140px 20px;
    min-height: 190px;
    background-image: url('@/assets/img/montellimard-forest.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
    text-align: center;
    color: var(--vt-c-white) !important;
    @include responsiveTo(lg) {
      padding: 180px 20px 60px 20px;
    }
    @include responsiveTo(sm) {
      padding: 180px 20px 20px 20px;
    }
    .code__overlay {
      pointer-events: none;
      z-index: 1;
      position: absolute;
      max-width: 100%;
      filter: url(#filterwave);
      left: -10px;
      top: -10px;
      width: 100%;
      height: 100%;
      background-image: url('@/assets/img/txtbg.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.3;
      transform: scale(1.1);
    }
  }
}

h1 {
  word-break: break-word;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  color: var(--color-main);
  font-family: 'Nunito', sans-serif;
  font-weight: bolder;
  font-size: 50px;
  line-height: 50px;
  text-transform: uppercase;
  @include responsiveTo(sm) {
    font-size: 35px;
    line-height: 35px;
  }
}

h2 {
  font-weight: bolder !important;
}

body.scroll #g__landing .g__landing__content {
  border-radius: 15px 15px 0 0;
}
</style>
