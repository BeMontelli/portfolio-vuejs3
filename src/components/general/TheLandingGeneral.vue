<script>
export default {
  data() {
    return {
      title: 'Benjamin Montellimard',
      dateCreated: '',
      dateupdated: ''
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
      <div class="g__landing__content">
        <h1>{{ title }}</h1>
        <div class="code__overlay"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#g__landing {
  .g__landing__container {
    overflow: hidden;
  }

  .g__landing__content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 45px 20px 80px 130px;
    min-height: 190px;
    background-image: url('@/assets/img/montellimard-forest.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
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

  h1 {
    position: relative;
    z-index: 2;
    color: var(--color-main);
  }
}

h1 {
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

body.scroll #g__landing .g__landing__content {
  border-radius: 15px 15px 0 0;
}
</style>
