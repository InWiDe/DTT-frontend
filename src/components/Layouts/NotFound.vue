<template>
  <div class="notFound"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Footer extends Vue {}
</script>

<style scoped>
.notFound {
  background-image: url("../../assets/404.jpeg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
