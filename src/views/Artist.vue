<template>
<div>
  <section class="artist"
    v-for="artist in artist" 
    :key="artist.id">
    <h2 class="artist__name">{{artist.name}}</h2>
    <div class="container">
      <div class="artist__column">
        <img
          :src="artist.image[3]['#text']"
          :alt="artist.name">
      </div>
      <div class="artist__column">
        <div class="artist__tags"
        >
          <a 
            v-for="tag in artist.tags.tag" 
            :key="tag.id"
            class="tag" :href="tag.url" target="_blank"
            >{{tag.name}}</a>
        </div>
        <p class="artist__description">{{artist.bio.content}}</p>
        <a class="artist__more" 
        :href="artist.bio.links.link.href" 
        target="_blank"
        >Read more on last.fm</a>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Artist',
  methods: {
    ...mapActions(['fetchArtist']),
    getName () {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('name');
    }
  },
  computed: mapGetters(['artist']),
  async mounted () {
    this.fetchArtist(this.getName());
  }
}
</script>

<style lang="scss" scoped>
.artist {

		// .artist__column

		&__column {
      flex: 1 1 50%;
      margin-right: 30px;
      @media(max-width: 1024px) {
        flex: 0 0 50%;
      }
      @media(max-width: 850px){
        margin: 20px 0;
      }
		}

		// .artist__name

		&__name {
      text-transform: capitalize;
      font-size: 30px;
      margin: 50px 40px 0;
      @media(max-width: 650px){
        margin: 30px 40px 0;
      }
		}

		// .artist__tags

		&__tags {
      display: flex;
      margin: 0 0 20px;
      flex-wrap: wrap;
      max-width: 75%;
      @media(max-width: 850px){
        max-width: 100%;
      }
		}

		// .artist__description

		&__description {
      display: -webkit-box;
          -webkit-line-clamp: 18;
          -webkit-box-orient: vertical;
          overflow: hidden;
      margin: 0 0 10px;
      max-width: 75%;
      @media (max-width: 1024px) {
        -webkit-line-clamp: 10;
      }
      @media(max-width: 850px) {
        max-width: 100%;
      }
    }
    // .artist__more
    &__more{
      color: #d4c2ea;
      &:hover{
        color: #ae83e2;
      }
    }
}
.container {
  max-width: 70vw;
  margin: 30px auto;
  display: flex;
  overflow: hidden;
  @media(max-width: 850px){
    flex-direction: column;
    max-width: 50vw;
  }
  @media(max-width: 650px){
    max-width: 80vw;
    margin: 10px auto;
  }
}
.tag {
  margin: 0 5px 10px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d4c2ea;
  border-radius: 3px;
  color: #d4c2ea;
  &:hover{
    border: 1px solid #ae83e2;
    color: #ae83e2;
  }
}

</style>
