<script>
export default {
  data() {
    return {
      name: 'Benjamin Montellimard',
      profession: 'Développeur Web',
      skills: ['PHP', 'JS', 'HTML', 'CSS', 'Symfony', 'VueJS', 'Laravel', 'Docker'],
      buttonLabel: 'Scroll pour en savoir plus',
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
      <div class="col__left"><div class="code__overlay"></div></div>
      <div class="col__right">
        <div class="col__filter"></div>
        <div class="col__content">
          <h1>{{ name }}</h1>
          <h2>{{ profession }}</h2>
          <ul>
            <li v-for="skill in skills" :key="skill">{{ skill }}</li>
          </ul>
        </div>
      </div>
      <button class="scrollsite" @click="addScrollClass">
        <i class="bx bx-mouse"></i><span class="font__inconsolata">{{ buttonLabel }}</span>
      </button>
    </div>
  </div>

  <svg style="width: 0; height: 0">
    <filter id="filterwave">
      <feTurbulence baseFrequency="0" numOctaves="10">
        <animate attributeName="baseFrequency" dur="20s" values="0.01;0" repeatCount="indefinite" />
      </feTurbulence>
      <feDisplacementMap scale="10" in="SourceGraphic" />
    </filter>
  </svg>
</template>

<style scoped lang="scss">
#home__landing {
  height: calc(100svh - 30px);
  height: calc(100vh - 30px);
  .hello {
    top: 100%;
    opacity: 0;
    position: absolute;
    left: 50%;
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
    transition: all 0.5s ease-in;
    @include responsiveTo(lg) {
      left: 290px;
    }
    @include responsiveTo(md) {
      display: none;
    }
  }

  .scrollsite {
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    color: var(--color-main);
    z-index: 10;
    font-size: 2rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: bottom ease-in 0.5s;
    @include responsiveTo(lg) {
      left: 290px;
    }
    @include responsiveTo(md) {
      left: calc(50% - 85px);
    }
    span {
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
    &:hover {
      bottom: 30px;
      transition: bottom ease-in 0.5s;
    }
  }

  .cols {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: calc(100vh - 0px);
    overflow: hidden;
    @include responsiveTo(lg) {
      grid-template-columns: 275px 1fr;
    }
    @include responsiveTo(md) {
      display: flex;
      flex-direction: column;
    }
  }

  .col__left {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/img/montellimard-forest.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px 0 0 15px;
    overflow: hidden;
    @include responsiveTo(md) {
      width: 100%;
      height: 330px;
    }
    @include responsiveTo(sm) {
      height: 260px;
    }
    .code__overlay {
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
      opacity: 0.5;
      transform: scale(1.1);
    }
  }

  .col__right {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: url('@/assets/img/montellimard-me-light.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom right;
    @include responsiveTo(md) {
      width: 100%;
      height: calc(100% - 330px);
    }
    @include responsiveTo(sm) {
      height: calc(100% - 260px);
    }
    .col__filter {
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: var(--color-background);
      top: 0;
      left: 0;
      opacity: 0.5;
      border-radius: 0 15px 0 0;
    }
  }

  .col__content {
    position: relative;
    z-index: 2;
    width: 400px;
    padding: 20px;
    margin: auto;
    left: 150px;
    opacity: 0;
    transition: all 0.5s ease-in;
    @include responsiveTo(sm) {
      width: auto;
      top: -50px;
    }
  }

  .col__right h1 {
    color: var(--color-main);
  }
}

.load__done #home__landing {
  .hello {
    top: 50%;
    opacity: 1;
    transition: all 0.5s ease-in;
  }
  .col__content {
    left: 0;
    opacity: 1;
    transition: all 0.5s ease-in;
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
h2 {
  position: relative;
  font-family: 'Source Serif 4', serif;
  font-weight: bold;
  font-size: 35px;
  margin: 30px auto;
  @include responsiveTo(sm) {
    font-size: 30px;
  }
}
h2::before {
  content: '';
  display: block;
  height: 5px;
  width: 100px;
  background-color: var(--color-text);
  border-radius: 15px;
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
  opacity: 1;
}
ul li {
  font-size: 25px;
  line-height: 30px;
  font-family: 'Inconsolata', sans-serif;
  margin-right: 10px;
}

body.scroll #home__landing .scrollsite {
  opacity: 0;
  bottom: 10px;
  transition: all ease-in 0.5s;
}

body.scroll #home__landing .col__left {
  border-radius: 15px 0 0 0;
  @include responsiveTo(md) {
    border-radius: 15px 15px 0 0;
  }
}

#home__landing .col__right {
  background-image: url('@/assets/img/montellimard-me-light.png');
}

html.dark {
  ul {
    opacity: 0.5;
  }
  #home__landing .col__right {
    background-image: url('@/assets/img/montellimard-me.png');
  }
}
@media (prefers-color-scheme: dark) {
  ul {
    opacity: 1;
  }
  :root:not(.dark) {
    background-image: url('@/assets/img/montellimard-me-light.png');
  }
}
</style>
