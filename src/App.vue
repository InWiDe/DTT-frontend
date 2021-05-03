<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Footer from "./components/Layouts/Footer.vue";
import NavBar from "./components/Layouts/NavBar.vue";

@Options({
  components: {
    NavBar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Schoolbell", cursive;
}
</style>
