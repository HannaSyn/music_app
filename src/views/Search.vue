<template>
  <section class="search">
    <form class="search-form" action="#">
        <input 
        v-model="input"
        class="search-form__input" type="text">
        <button 
        @click.prevent
        class="search-form__button">Search</button>
    </form>
    <div class="search__results"
      v-if="result.length"
    >
      <TheTrack
        v-for="track in result" 
        :key="track.id"
        :track="track"
      />
    </div>
    <div class="search__no-results"
      v-else
    >
      <p>No results</p>
    </div>
  </section>
</template>

<script>
import TheTrack from '@/components/TheTrack'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Search',
  data () {
    return {
      input: '',
    }
  },
  components: {
    TheTrack
  },
  methods: {
    ...mapActions(['fetchTracks']),

    getArtistLink (artistName) {
      return `/artist?name=${artistName}`;
    }
  },
  computed: {
    ...mapGetters(['tracks']),
    result() {
      const inputValue = this.input;
      if (!inputValue) {
        return [];
      }
      return this.tracks.filter( el => `${el.name}${el.artist.name}`.toLowerCase().includes(inputValue.toLowerCase()));
    }
  },
  async mounted () {
    if (!this.tracks.length){
      this.fetchTracks();
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  // .search__no-results
  &__no-results{
    text-align: center;
    color: #7c7c7b;
  }

  // .search__results
  &__results{
    max-width: 60vw;
    margin: 0 auto;
    @media(max-width: 650px){
      max-width: 80vw;
    }
  }
}
.search-form {
  display: flex;
  justify-content: center;
  margin: 100px 0 50px;
		// .search-form__input

		&__input {
      min-width: 50vw;
      padding: 10px 20px;
      font-size: 20px;
      background-color: #3a353f;
      border: 0.5px solid #443e49;
      border-radius: 2px 0 0 2px;
      color: #FFFEFC;
      @media (max-width: 850px) {
        min-width: 20vw;
        max-width: 50vw;
      }
		}

		// .search-form__button

		&__button {
      padding: 10px 20px;
      font-size: 20px;
      background-color: #48424e;
      border: 0.5px solid #443e49;
      border-radius: 0 2px 2px 0;
      transition: 0.3s ease;
      color: #FFFEFC;
      &:hover{
        background-color: #27242b;
      }
		}
}
</style>
