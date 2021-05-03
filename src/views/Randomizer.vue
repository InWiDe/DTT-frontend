<template>
  <div class="randomizer">
    <div class="container">
      <div class="random-character">
        <img
          v-if="character.image"
          v-bind:src="character.image"
          alt="Character image"
          class="img-rounded"
        />
        <h1 v-if="character">{{ character.name }}</h1>
        <button @click="randomizeCharacter()" class="character_more_button">
          Generate character
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import WelcomeComponent from "@/components/HomePage/WelcomeComponent.vue"; // @ is an alias to /src
import CardsComponent from "@/components/HomePage/CardsComponent.vue";

@Options({
  components: {
    WelcomeComponent,
    CardsComponent,
  },
})
export default class Randomizer extends Vue {
  private character: unknown = [];

  //Function to generate random number
  private getRandomArbitrary(min, max): number {
    return Math.round(Math.random() * (max - min) + min);
  }

  //Call user from API based on random id number
  private randomizeCharacter(): void {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/" +
          this.getRandomArbitrary(1, 300)
      )
      .then((response) => {
        this.character = response.data;
        console.log(this.character);
        this.$forceUpdate();
      });
  }
}
</script>

<style scoped>
.randomizer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/Randomizer.png");
}

.container {
  width: 95%;
  display: flex;
  text-align: center;
  height: 100vh;
}

.random-character {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 450px;
  margin: auto;
  padding: 0 50px;
  color: #b9de78;
}

.character_more_button {
  background-color: #00b2c8;
  color: white;
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  outline: none;
}
</style>
