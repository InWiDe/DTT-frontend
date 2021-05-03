<template>
  <div class="characterDetails">
    <CharacterComponent
      v-if="character"
      :character="character"
      :key="componentKey"
    />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Options, Vue } from "vue-class-component";
import CharacterComponent from "@/components/CharacterDetailPage/CharacterComponent.vue";

@Options({
  components: {
    CharacterComponent,
  },
})
//This is character details view, which can be found at http://localhost:8080/character/:id
export default class CharacterDetails extends Vue {
  private character: unknown;
  private componentKey = 0;
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    axios
      .get("https://rickandmortyapi.com/api/character/" + this.$route.params.id)
      .then((response) => {
        this.character = response.data;
        this.$forceUpdate();
      });
  }
}
</script>
