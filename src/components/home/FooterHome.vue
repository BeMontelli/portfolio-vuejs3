<script>
export default {
  data() {
    return {
      madeBy: 'créé par Benjamin Montellimard tous droits réservés',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<template>
  <footer id="mainfooter">
    <ul>
      <li>
        <a
          href="https://github.com/BeMontelli"
          target="_blank"
          aria-label="Github Benjmain Montellimard"
          ><i class="bx bxl-github"></i
        ></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/montellimard-benjamin/"
          target="_blank"
          aria-label="Profil Linkedin Benjmain Montellimard"
          ><i class="bx bxl-linkedin"></i
        ></a>
      </li>
    </ul>
    <p class="copyright">© {{ currentYear }} {{ madeBy }}.</p>
  </footer>
</template>

<style scoped lang="scss">
footer#mainfooter {
  display: flex;
  flex-direction: column;
  padding: 120px 20px 20px;
  background-color: var(--color-background-alt);
  border-radius: 0 0 15px 15px;
  --mask: radial-gradient(134.16px at 50% 180px, #000 99%, #0000 101%) calc(50% - 120px) 0/240px
      100%,
    radial-gradient(134.16px at 50% -120px, #0000 99%, #000 101%) 50% 60px/240px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  list-style: none;
  display: flex;
  justify-content: center;
  width: 100%;
  li a {
    padding: 10px;
    color: var(--color-text);
    font-size: 35px;
    line-height: 35px;
    transition: all 0.5s ease;
    &:hover {
      color: var(--color-main);
      transition: all 0.5s ease;
    }
  }
}

.copyright {
  text-align: center;
  padding: 20px;
}
</style>
