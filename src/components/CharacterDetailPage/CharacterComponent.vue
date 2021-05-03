<template>
  <div class="characterComponenet">
    <div v-if="character" class="container">
      <div class="img">
        <img
          v-bind:src="character.image"
          alt="Character image"
          class="img-rounded"
        />
      </div>
      <div class="details">
        <h1>Name: {{ character.name }}</h1>
        <h1>Gender: {{ character.gender }}</h1>
        <h1>Specie: {{ character.species }}</h1>
        <h1>Current location: {{ character.location.name }}</h1>
        <h1>Origin: {{ character.origin.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  components: {},
})
export default class CharacterComponent extends Vue {
  @Prop({ default: [] })
  private character!: string[];
}
</script>

<style scoped>
.characterComponenet {
  width: 100%;
  height: 100vh;

  background-color: #b9de78;
}
.container {
  padding-top: 150px;
}

.container .img {
  text-align: center;
}

.container .img img {
  width: 20%;
  height: auto;
}

.container .details h1 {
  text-align: center;
  padding-top: 5px;
}

@media screen and (max-width: 1024px) {
  .container .details h1 {
    font-size: 24px;
  }
  .container {
    padding-top: 200px;
  }
  .container .img img {
    width: 40%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {
  .container .details h1 {
    font-size: 24px;
  }
  .container {
    padding-top: 150px;
  }
  .container .img img {
    width: 40%;
    height: auto;
  }
}

@media screen and (max-width: 568px) {
  .container .details h1 {
    font-size: 16px;
  }
  .container {
    padding-top: 150px;
  }
  .container .img img {
    width: 40%;
    height: auto;
  }
}
</style>
