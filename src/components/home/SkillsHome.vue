<script setup>
const skills = [
  {
    title: 'PHP'
  },
  {
    title: 'JavaScript'
  },
  {
    title: 'HTML'
  },
  {
    title: 'CSS'
  },
  {
    title: 'SCSS'
  },
  {
    title: 'SQL'
  },
  {
    title: 'Docker'
  },
  {
    title: 'Symfony'
  },
  {
    title: 'Laravel'
  },
  {
    title: 'VueJs'
  },
  {
    title: 'Git'
  }
]
</script>

<template>
  <div id="home__skills">
    <div class="narrow__container">
      <h2 data-aos="fade-up" class="font__sourceserif4">Mes compétences</h2>
      <div class="skills">
        <ul class="skills__list">
          <li v-for="skill in skills" :key="skill.year" class="skill" data-aos="fade-up">
            <div class="skill_in">
              <strong>{{ skill.title }}</strong>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <svg
      id="bg__txt__wave"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 754.11 110"
    >
      <path
        d="M55.34,136.73A327.4,327.4,0,0,1,184.91,60c24.39-7.59,50.19-12.32,75.48-8.76,49.65,7,88.87,43.9,132.54,68.54,15,8.49,31.34,15.73,48.59,16.43,21.34.86,41.66-8.29,61.05-17.25L580,83.16C613.64,67.59,649,51.67,686.08,53.54c46.46,2.33,86.49,31.9,123.36,60.25"
        transform="translate(-55.34 -35)"
        id="number-two"
        style="fill: none"
      />
      <text width="100%">
        <textPath
          alignment-baseline="center"
          xlink:href="#number-two"
          id="text-path"
          text-anchor="start"
          startOffset="0"
        >
          &nbsp;• Compétences • Compétences • Compétences • Compétences • Compétences • Compétences
          <animate
            attributeName="startOffset"
            from="0%"
            to="100%"
            begin="0s"
            dur="20s"
            repeatCount="indefinite"
          />
        </textPath>
        <textPath
          alignment-baseline="center"
          xlink:href="#number-two"
          id="text-path-bis"
          text-anchor="end"
          startOffset="0"
        >
          • Compétences • Compétences • Compétences • Compétences • Compétences • Compétences
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
</template>

<style scoped lang="scss">
#bg__txt__wave {
  pointer-events: none;
  position: absolute;
  top: calc(50% + 60px);
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 0;
  opacity: 0.5;
  width: 100%;
  @include responsiveTo(xxl) {
    width: 1450px;
  }
}
#text-path {
  text-transform: uppercase;
  font-weight: bolder;
  font-family: var(--font-nunito);
  fill: var(--color-text);
  font-size: 15.25px;
}
#text-path-bis {
  text-transform: uppercase;
  font-weight: bolder;
  font-family: var(--font-nunito);
  fill: var(--color-text);
  font-size: 15.25px;
}
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
    position: relative;
    text-align: center;
    font-weight: bolder;
    font-style: italic;
    font-size: 3rem;
    line-height: 3rem;
    margin-bottom: 50px;
    z-index: 1;
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
    z-index: 1;
    .skills__list {
      position: relative;
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  .skill {
    position: relative;
    width: auto;
    padding: 0px 15px;
    margin: 3px;
    background-color: var(--color-background-halfpure);
    border-radius: 10px;
    cursor: pointer;
    color: var(--color-text);
    transition: all 0.5s ease-in;
    &:hover {
      background-color: var(--color-main);
      color: var(--vt-c-black) !important;
      transition: all 0.5s ease-in;
    }
    .skill__in {
      position: relative;
    }
    strong {
      position: relative;
      font-weight: bolder;
      font-style: italic;
      font-size: 1.5rem;
    }
  }

  .skills:has(.skill:hover) .skill:not(:hover) {
    opacity: 0.5;
    transition: all 0.5s ease-in;
  }
}
</style>
