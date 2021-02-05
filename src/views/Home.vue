<template>
  <section class="tracks">
    <div class="container">
      <h1 class="tracks__title">Top Tracks</h1>
      <TheTrack
        v-for="track in tracks" 
        :key="track.id"
        :track="track"
      />
    </div>
  </section>
</template>

<script>
import TheTrack from '@/components/TheTrack'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Home',
  components: {
    TheTrack
  },
  computed: mapGetters(['tracks']),
  async mounted () {
    this.fetchTracks();
  },
  methods: mapActions(['fetchTracks'])
}
</script>

<style lang="scss">
.tracks {
  // .tracks__title
  &__title { 
    margin: 0 0 40px;
    font-size: 26px;
    color: #FFFEFC;
  }
}
.container {
  max-width: 70vw;
  margin: 30px auto;
  @media (max-width: 850px) {
    max-width: 60vw;
  }
  @media (max-width: 650px) {
    max-width: 80vw;
  }
}
.track {
  display: flex;
  margin: 20px 0;
		// .track__img-column

		&__img-column {
      flex: 0 0 80px;
		}

		// .track__content-column

		&__content-column {
      flex: 1 1 auto;
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      text-transform: lowercase;
		}

		// .track__name

		&__name {
      text-transform: capitalize;
      font-size: 18px;
		}

		// .track__artist

		&__artist {
      margin: 10px 0;
      font-size: 20px;
      font-weight: 700;
      text-transform: capitalize;
      color: #c4bed3;
      &:hover{
        color: #9284b8;
      }
		}

		// .track__link

		&__link {
      color: #929292;
      &:hover{
        color: #e0e0e0;
      }
		}
}

</style>
