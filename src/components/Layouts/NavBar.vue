<template>
  <div class="nav-container">
    <nav class="navbar">
      <h1 id="navbar-logo">Rick&Morty Collection</h1>
      <div class="menu-toggle" id="mobile-menu" v-on:click="manipulateMenu()">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="nav-menu">
        <li><a href="/" class="nav-links">Home</a></li>
        <li><a href="/categories" class="nav-links">Categories</a></li>
        <li><a href="/randomizer" class="nav-links">Randomizer</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

//Navbar component
export default class NavBar extends Vue {
  //This method is used to manipulate menu-toogle
  public manipulateMenu(): void {
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".nav-menu");

    menu?.classList.toggle("is-active");
    menuLinks?.classList.toggle("active");
  }
}
</script>

<style scoped>
.nav-container {
  width: 100%;
  background-color: #212329;
  position: fixed;
  z-index: 10000;
}

.navbar {
  display: grid;
  grid-template-columns: 0.2fr auto 1fr;
  align-items: center;
  height: 80px;
  width: auto;
  max-width: 1720px;
  margin: 0 auto;
}

#navbar-logo {
  color: #00b2c8;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-shadow: 0 0 1px #b9de78; /* horizontal-offset vertical-offset 'blur' colour */
  -moz-text-shadow: 0 0 2px #b9de78;
  -webkit-text-shadow: 0 0 2px #b9de78;
}

.nav-menu {
  display: grid;
  grid-template-columns: repeat(3, auto);
  list-style: none;
  text-align: center;
  width: 70%;
  justify-self: end;
}

.nav-links {
  color: white;
  text-decoration: none;
}

.nav-links:hover {
  color: #00b2c8;
  transition: all 0.2s ease-out;
}

.menu-toggle .bar {
  width: 25px;
  height: 3px;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  background: #ffff;
}

@media screen and (max-width: 768px) {
  .nav-container {
    position: relative;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: auto;
    background: blue;
    margin: 0;
    width: 100%;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 0;
    transition: all 0.5s ease;
  }

  #navbar-logo {
    margin-left: 20px;
  }

  .nav-menu.active {
    background: #212329;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
  }

  .nav-links {
    text-align: center;
    line-height: 60px;
    width: 100%;
    display: table;
  }

  .nav-links:hover {
    background-color: #00b2c8;
    color: #ffff;
    transition: all 0.4s ease-out;
  }

  .navbar {
    width: 100%;
  }

  #mobile-menu {
    position: absolute;
    top: 20%;
    right: 5%;
    transform: translate(5%, 20%);
  }

  .menu-toggle .bar {
    display: block;
    cursor: pointer;
  }

  .menu-toggle:hover {
    cursor: pointer;
  }

  #mobile-menu.is-active .bar:nth-child(2) {
    opacity: 0;
  }

  #mobile-menu.is-active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #mobile-menu.is-active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>
