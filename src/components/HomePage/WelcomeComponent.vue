<template>
  <div class="welcomeComponent">
    <div class="welcomeComponent-title">
      <h1>Explore universe of</h1>
      <h2>Rick&Morty characters</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
//This is the WelcomeComponent, that you can see first while entering the app
export default class WelcomeComponent extends Vue {}
</script>

<style scoped>
.welcomeComponent {
  background-image: url("../../assets/Welcome.png");
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
}

.welcomeComponent-title {
  font-size: 35px;
  position: absolute;
  display: inline-block;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #b9de78;
  text-shadow: 0 0 1px #b9de78; /* horizontal-offset vertical-offset 'blur' colour */
  -moz-text-shadow: 0 0 2px #b9de78;
  -webkit-text-shadow: 0 0 2px #b9de78;
  z-index: 1;
}

@media (max-width: 1024px) {
  .welcomeComponent-title {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .welcomeComponent-title {
    font-size: 20px;
  }
}

@media (max-width: 528px) {
  .welcomeComponent-title {
    font-size: 15px;
  }
}
</style>
