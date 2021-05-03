<template>
  <div class="cardListComponent">
    <div class="wrapper">
      <div class="header">10 Characters from API</div>
      <div class="sort_bar">
        <select name="sortBy" id="select" v-model="sortBy">
          <h2>Sort by</h2>
          <option value="alphabetically-asc">Alphabetically Ascending</option>
          <option value="alphabetically-dec">Alphabetically Descending</option>
        </select>
        <div class="search_group">
          <input
            class="search_input"
            type="text"
            v-model="searchValue"
            placeholder="Search Character"
          />
        </div>
      </div>

      <div class="cards_wrap">
        <div
          v-for="character of filteredCharacters"
          :key="character.name"
          class="card_item"
        >
          <div class="card_inner">
            <img v-bind:src="character.image" alt="Character image" />
            <div class="character_name">{{ character.name }}</div>
            <div class="character_species">
              {{ character.species }}
            </div>
            <div class="character_more">
              <button
                class="character_more_button"
                @click="redirectToDetailed(character.id)"
              >
                Click for details
              </button>
            </div>
          </div>
        </div>
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
export default class CardsComponent extends Vue {
  @Prop({ default: [] })
  private characters!: string[];
  private tempCharacters: any[] = this.characters;
  private sortBy: any = "alphabetically-asc";
  private searchValue: any = null;

  //Method for redirecting to the detailed Character page
  private redirectToDetailed(characterId): void {
    this.$router.push({
      name: "CharacterDetails",
      params: { id: characterId },
    });
  }

  //Search character by name
  get filteredCharacters(): any {
    if (this.searchValue) {
      return this.tempCharacters.filter((item) => {
        return this.searchValue
          .toLowerCase()
          .split(" ")
          .every((v: any) => item.name.toLowerCase().includes(v));
      });
    }

    //Sort by aplhabetical
    this.tempCharacters = this.tempCharacters.sort((a, b) => {
      // Sort by alphabetical ascending order
      if (this.sortBy == "alphabetically-asc") {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
      }
      // Sort by alphabetical descending order
      else if (this.sortBy == "alphabetically-dec") {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
      }
      return 0;
    });
    return this.tempCharacters;
  }
}
</script>

<style scoped>
.sort_bar {
  padding: 60px 70px 10px;
}

.sort_bar select {
  background-color: #00b2c8;
  color: white;
  padding: 12px;
  width: 250px;
  border: none;
  font-size: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  outline: none;
}

.search_group {
  padding: 40px 0px 0px;
}
.search_input {
  color: #333;
  font-size: 1.2rem;
  margin: 0 auto;
  padding: 10px;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
  border: none;
  width: 90%;
  display: block;
  border-bottom: 0.3rem solid transparent;
  transition: all 0.3s;
}

.cardListComponent {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../../assets/CardsComponentBackground.png");
}

.wrapper .header {
  width: 100%;
  height: 50px;
  background: #00b2c8;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 900;
}

.cards_wrap {
  padding: 20px;

  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cards_wrap .card_item {
  padding: 20px 30px;
  width: 25%;
  display: flex;
  justify-content: center;
}

.cards_wrap .card_inner {
  background: #fff;
  border-radius: 10px;
  padding: 40px 10px 10px;
  min-width: 225px;
  min-height: 315px;
  max-height: 370px;
  width: 10%;
}

.cards_wrap .card_item img {
  width: 200px;
  height: 200px;
  margin-bottom: 5px;
}

.cards_wrap .card_item .character_name {
  color: #00b2c8;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cards_wrap .card_item .character_status {
  color: #b6c0c2;
  font-size: 12px;
  font-weight: 100;
  margin: 5px 0 10px;
}

.cards_wrap .card_item .character_species {
  font-size: 14px;
  line-height: 24px;
  color: #7b8ca0;
}

.character_more_button {
  cursor: pointer;
  outline: none;
  border: 1px black;
  background-color: var(--light);
  width: 200px;
  height: 70px;
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: black;
}

@media screen and (max-width: 1024px) {
  .cards_wrap .card_item {
    width: 33%;
  }
}

@media screen and (max-width: 768px) {
  .cards_wrap .card_item {
    width: 50%;
  }
  .wrapper .header {
    font-size: 16px;
    height: 60px;
  }
}

@media screen and (max-width: 568px) {
  .cards_wrap .card_item {
    width: 100%;
    padding-left: 40px;
  }
  .wrapper .header {
    font-size: 14px;
  }
}
</style>
