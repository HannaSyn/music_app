<template>
  <div class="track">
    <div class="track__img-column">
      <img
      :src="track.image[1]['#text']" 
      :alt="track.name">
    </div>
    <div class="track__content-column">
      <h2 class="track__name">{{track.name}}</h2>
      <router-link class="track__artist" 
      :to="getArtistLink(track.artist.name)"
      >{{track.artist.name}}</router-link>
      <a 
      :href="track.url" target="_blank" class="track__link"
      >Artist's page on last.fm</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheTrack',
  props: {
    track: {
      type: Object,
      required: true
    }
  },
  methods: {
    getArtistLink (artistName) {
      return `/artist?name=${artistName}`;
    },
  }
}
</script>

<style>

</style>