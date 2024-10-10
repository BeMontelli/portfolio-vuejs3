<script>
export default {
  data() {
    return {
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
    <p class="copyright">
      © {{ currentYear }} créé par Benjamin Montellimard tous droits réservés.
    </p>
  </footer>
</template>

<style scoped lang="scss">
footer#mainfooter {
  display: flex;
  flex-direction: column;
  padding: 30px 20px 20px;
  background-color: var(--color-background-halfpure);
  border-radius: 0 0 15px 15px;
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
