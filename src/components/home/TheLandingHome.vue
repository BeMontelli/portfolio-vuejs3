<script>
export default {
  data() {
    return {
      greeting: 'BONJOUR'
    }
  },
  mounted() {
    //console.log('mounted')
    window.addEventListener('wheel', this.handleUserScroll)
    window.addEventListener('touchstart', this.handleTouchStart)
    window.addEventListener('touchend', this.handleTouchEnd)

    this.updateGreeting()
    setInterval(this.updateGreeting, 60000)
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleUserScroll)
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('touchend', this.handleTouchEnd)
  },
  methods: {
    updateGreeting() {
      const currentHour = new Date().getHours()
      if (currentHour >= 18 || currentHour < 5) this.greeting = 'BONSOIR'
      else this.greeting = 'BONJOUR'
    },
    addScrollClass() {
      document.body.classList.add('scroll')
    },
    handleUserScroll(event) {
      if (event.deltaY > 0) {
        this.addScrollClass()
      }
    },
    handleTouchStart(event) {
      //console.log('handleTouchStart')
      this.touchStartY = event.touches[0].clientY
    },
    handleTouchEnd(event) {
      //console.log('handleTouchEnd', event)
      const touchEndY = event.changedTouches[0].clientY
      if (this.touchStartY > touchEndY + 50) {
        //console.log('this.touchStartY > touchEndY + 50')
        this.addScrollClass()
      }
    }
  }
}
</script>

<template>
  <div id="home__landing">
    <div class="cols">
      <span class="hello" aria-hidden="true">{{ greeting }}</span>
      <div class="col__left"></div>
      <div class="col__right">
        <div class="col__content">
          <h1>Benjamin<br />Montellimard</h1>
          <h2>Développeur Web</h2>
          <ul>
            <li>PHP</li>
            <li>JS</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Symfony</li>
            <li>VueJS</li>
            <li>Laravel</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
      <button class="scrollsite" @click="addScrollClass">
        <i class="bx bx-mouse"></i><span class="font__inconsolata">Scroll pour en savoir plus</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
#home__landing {
  height: 100vh;
}

h1 {
  font-family: 'Nunito', sans-serif;
  font-weight: bolder;
  font-size: 50px;
  line-height: 50px;
  text-transform: uppercase;
}
h2 {
  position: relative;
  font-family: 'Source Serif 4', serif;
  font-weight: bold;
  font-size: 35px;
  margin: 30px auto;
}
h2::before {
  content: '';
  display: block;
  height: 5px;
  width: 100px;
  background-color: var(--color-text);
  border-radius: 20px;
  margin-bottom: 3px;
}
h2::after {
  content: '';
  display: block;
  height: 5px;
  width: 100px;
  background-color: var(--color-text);
  border-radius: 20px;
  margin-top: 5px;
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  list-style: none;
  opacity: 0.5;
}
ul li {
  font-size: 25px;
  line-height: 30px;
  font-family: 'Inconsolata', sans-serif;
  margin-right: 10px;
}

#home__landing .hello {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: upright;
  color: var(--color-main);
  z-index: 10;
  font-weight: bold;
  font-size: 3rem;
  pointer-events: none;
  font-family: 'Nunito', sans-serif;
  font-weight: bolder;
  font-size: 80px;
  letter-spacing: -42px;
}

#home__landing .scrollsite {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  color: var(--color-main);
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all ease-in 0.5s;
}
#home__landing .scrollsite span {
  position: absolute;
  color: var(--color-text);
  font-size: 12px;
  width: 190px;
  line-height: 40px;
  text-align: left;
  margin-left: 45px;
  top: 0;
  left: 0;
}
#home__landing .scrollsite:hover {
  bottom: 30px;
  transition: all ease-in 0.5s;
}
body.scroll #home__landing .scrollsite {
  opacity: 0;
  bottom: 10px;
  transition: all ease-in 0.5s;
}

#home__landing .cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: calc(100vh - 40px);
}

#home__landing .col__left {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/montellimard-forest-code.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px 0 0 20px;
}
body.scroll #home__landing .col__left {
  border-radius: 20px 0 0 0;
}

#home__landing .col__right {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

#home__landing .col__content {
  position: relative;
  width: 350px;
  margin: auto;
}

#home__landing .col__right h1 {
  color: var(--color-main);
}
</style>
