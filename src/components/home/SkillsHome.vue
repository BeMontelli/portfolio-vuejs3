<script setup>
const skills = [
  {
    bg: '2013',
    logo: new URL('@/assets/img/courses-exp.jpg', import.meta.url).href,
    role: '2013 - 2016 • Étudiant en programmation',
    actionsTitle: 'Parcours',
    actions: [
      '[2010-2012] Baccalauréat STI2D',
      "[2013-2015] DUT Métiers du Multimédia et de l'Internet",
      "[2015-2016] LP Métiers du Multimédia et de l'Internet"
    ]
  }
]
</script>

<template>
  <div id="home__skills">
    <div class="narrow__container">
      <h2 data-aos="fade-up" class="font__sourceserif4">Mes compétences</h2>
      <div class="skills">
        <ul class="skills__list">
          <li
            v-for="skill in skills"
            :key="skill.year"
            class="skill"
            :class="skill.fade ? 'fade' : 'classic'"
            data-aos="fade-up"
          >
            <span class="deco__bg" aria-hidden="true">{{ skill.bg }}</span>
            <div class="img" :data-aos="skill.year % 2 === 0 ? 'fade-right' : 'fade-left'">
              <img :src="skill.logo" :alt="'Logo ' + skill.company" />
            </div>
            <div class="txts">
              <h3>{{ skill.company }}</h3>
              <span class="dates__role">{{ skill.role }}</span>
              <div class="context">
                <span class="section__title">{{ skill.contextTitle }}</span>
                <div v-html="skill.contextDescription"></div>
              </div>
              <div class="actions" v-if="skill.actions">
                <span class="section__title">{{ skill.actionsTitle }}</span>
                <ul>
                  <li v-for="action in skill.actions" :key="action">{{ action }}</li>
                </ul>
              </div>
              <div class="env" v-if="skill.envDetails">
                <span class="section__title">{{ skill.envTitle }}</span>
                <p>{{ skill.envDescription }}</p>
                <ul>
                  <li v-for="env in skill.envDetails" :key="env">{{ env }}</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 669.06 121.54"
      >
        <path
          d="M719.28,77.58C674.41,100,627.82,122.93,577.7,125.05c-42.67,1.8-84.49-11.71-124-28s-78-35.52-119.35-46.22S247.48,38.7,209.1,57.43C180,71.64,157.45,96.07,133.66,118.05S82.4,160.8,50.22,164.56"
          transform="translate(-50.22 -43.02)"
          id="number-two"
          style="fill: none"
        />
        <text width="100%" fill="black">
          <textPath
            alignment-baseline="center"
            xlink:href="#number-two"
            id="text-path"
            text-anchor="start"
            startOffset="0"
          >
            Compétences •
            <animate
              attributeName="startOffset"
              from="0%"
              to="100%"
              begin="0s"
              dur="20s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home__skills {
  position: relative;
  padding: 160px 0 60px;

  background-color: var(--color-background-alt);
  border-radius: 0 0 15px 15px;
  --mask: radial-gradient(134.16px at 50% 180px, #000 99%, #0000 101%) calc(50% - 120px) 0/240px
      100%,
    radial-gradient(134.16px at 50% -120px, #0000 99%, #000 101%) 50% 60px/240px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  h2 {
    text-align: center;
    font-weight: bolder;
    font-style: italic;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 50px;
    color: var(--color-main);
    @include responsiveTo(xl) {
      font-size: 2rem;
    }
  }
  strong {
    font-weight: bolder;
    font-style: italic;
  }

  .section__title {
    display: inline;
    font-weight: bolder;
    font-style: italic;
    font-size: 1.25rem;
    margin-bottom: 5px;
    position: relative;
    z-index: 2;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -1px;
      border-radius: 3px;
      left: 0;
      background-color: var(--color-main);
      z-index: -1;
    }
  }

  .skills {
    position: relative;
    .skills__list {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }

  .skill {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    @include responsiveTo(md) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      @include responsiveTo(md) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .img {
        margin-right: 0;
        margin-left: 40px;
        @include responsiveTo(md) {
          margin-left: 0;
        }
      }
      .txts {
        text-align: right;
        @include responsiveTo(md) {
          text-align: center;
        }
        li {
          padding-right: 10px;
          &:before {
            content: '•';
            right: 0;
          }
          @include responsiveTo(md) {
            padding-right: 0;
            padding-left: 10px;
            &:before {
              right: inherit;
            }
          }
        }
      }
    }
    .deco__bg {
      position: absolute;
      left: 50%;
      top: 0;
      font-weight: bolder;
      font-size: 10rem;
      line-height: 7rem;
      color: var(--color-text);
      pointer-events: none;
      z-index: 0;
      opacity: 0.2;
      transform: translateX(-50%);
      @include responsiveTo(md) {
        top: 260px;
        line-height: 5rem;
      }
    }
    .img {
      position: relative;
      z-index: 1;
      border-radius: 100%;
      width: 220px;
      height: 220px;
      overflow: hidden;
      margin-right: 40px;
      @include responsiveTo(md) {
        margin-bottom: 20px;
        margin-right: 0;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    .txts {
      position: relative;
      z-index: 1;
      width: calc(100% - 220px - 40px);
      @include responsiveTo(md) {
        width: 100%;
        text-align: center;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      p {
        @include responsiveTo(md) {
          display: block;
          text-align: left;
        }
      }
      li {
        padding-left: 10px;
        position: relative;
        &:before {
          content: '•';
          position: absolute;
          display: block;
          color: var(--color-main);
          top: 0;
          left: 0;
        }
        @include responsiveTo(md) {
          display: block;
          text-align: left;
        }
      }
    }
    h3 {
      position: relative;
      font-weight: bolder;
      font-style: italic;
      font-size: 1.5rem;
      color: var(--color-main);
      margin-bottom: 5px;
      @include responsiveTo(md) {
        text-align: center;
        margin-bottom: 10px;
      }
    }
    .dates__role {
      position: relative;
      background-color: var(--color-main);
      padding: 5px 10px;
      display: inline-block;
      font-weight: bolder;
      margin-bottom: 10px;
      border-radius: 5px;
      color: var(--vt-c-black);
    }
    .context {
      margin-top: 20px;
      position: relative;
    }
    .actions {
      margin-top: 20px;
      position: relative;
    }
    .env {
      position: relative;
      margin-top: 20px;
    }

    &.fade {
      .dates__role {
        background-color: var(--color-background-halfpure);
        color: var(--color-text);
      }
    }
  }
}
</style>
