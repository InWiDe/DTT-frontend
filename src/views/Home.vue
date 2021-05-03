<template>
  <div class="home">
    <WelcomeComponent />
    <CardsComponent :characters="characters" :key="componentKey" />
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
//This is home view that can be found at http://localhost:8080/
export default class Home extends Vue {
  private characters: unknown;
  private componentKey = 0;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/[1,2,3,4,5,14,7,8,101,10]"
      )
      .then((response) => {
        this.characters = response.data;
        this.componentKey++;
      });
  }
}
</script>
