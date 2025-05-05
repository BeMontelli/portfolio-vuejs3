<script setup>
const mainSkills = [
  {
    title: 'PHP'
  },
  {
    title: 'JavaScript'
  },
  {
    title: 'Symfony'
  },
  {
    title: 'Laravel'
  },
  {
    title: 'VueJs'
  }
]
const skills = [
  {
    title: 'Docker'
  },
  {
    title: 'API Plateform'
  },
  {
    title: 'AWS'
  },
  {
    title: 'TypeScript'
  },
  {
    title: 'Angular.js'
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
    title: 'Tailwind CSS'
  },
  {
    title: 'Bootstrap CSS'
  },
  {
    title: 'SQL'
  },
  {
    title: 'Postman'
  },
  {
    title: 'Git'
  },
  {
    title: 'GitLab'
  },
  {
    title: 'Wordpress'
  },
  {
    title: 'Prestashop'
  },
  {
    title: 'Drupal'
  },
  {
    title: 'Magento'
  },
  {
    title: 'Photoshop'
  },
  {
    title: 'Illustrator'
  },
  {
    title: 'InDesign'
  },
  {
    title: 'Google analytics'
  },
  {
    title: 'Google Tag Manager'
  },
  {
    title: 'Redmine'
  },
  {
    title: 'BrowserStack'
  }
]
const skillsstring =
  '• Compétences • Compétences • Compétences • Compétences • Compétences • Compétences'
</script>

<template>
  <div id="home__skills">
    <div class="narrow__container">
      <h2 data-aos="fade-up" class="font__sourceserif4">Mes compétences</h2>
      <div class="skills">
        <ul class="skills__list">
          <li v-for="skill in mainSkills" :key="skill.year" class="skill" data-aos="fade-up">
            <div class="skill_in">
              <strong>{{ skill.title }}</strong>
            </div>
          </li>
        </ul>
      </div>
      <h3 data-aos="fade-up" class="font__sourceserif4">Compétences supplémentaires</h3>
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
      version="1.1"
      id="bg__txt__wave"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 754.1 110"
      style="enable-background: new 0 0 754.1 110"
      xml:space="preserve"
    >
      <path
        style="fill: none"
        id="number-two"
        d="M4.7,19.6c93.2,0,93.2,80,186.5,80c93.2,0,93.2-80,186.5-80c93.2,0,93.2,80,186.5,80s93.2-80,186.5-80"
      />
      <text width="100%">
        <textPath
          alignment-baseline="center"
          xlink:href="#number-two"
          id="text-path"
          text-anchor="start"
          startOffset="0"
          aria-hidden="true"
        >
          &nbsp;{{ skillsstring }}
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
          aria-hidden="true"
        >
          {{ skillsstring }}
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
  width: calc(100% + 40px);
  @include responsiveTo(xxl) {
    width: 1450px;
  }
}
#text-path {
  text-transform: uppercase;
  font-weight: bolder;
  font-family: var(--font-nunito);
  fill: var(--color-text);
  font-size: 16.35px;
}
#text-path-bis {
  text-transform: uppercase;
  font-weight: bolder;
  font-family: var(--font-nunito);
  fill: var(--color-text);
  font-size: 16.35px;
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
    margin-bottom: 40px;
    z-index: 1;
    color: var(--color-main);
    @include responsiveTo(xl) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
  h3 {
    position: relative;
    text-align: center;
    font-weight: bolder;
    font-style: italic;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 70px auto 40px;
    z-index: 1;
    color: var(--color-main);
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
