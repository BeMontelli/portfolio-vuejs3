<script setup></script>

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
  </footer>
</template>

<style scoped>
footer#mainfooter {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  list-style: none;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  width: 100%;
}

ul li a {
  padding: 10px;
  color: var(--color-text);
  font-size: 25px;
  line-height: 30px;
  transition: all 0.5s ease;
}
ul li a:hover {
  color: var(--color-main);
  transition: all 0.5s ease;
}
</style>
