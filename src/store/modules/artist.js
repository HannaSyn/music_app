const state = {
  artist: {}
};

const getters = {
  artist (state) {
    return state.artist; 
  },
};

const mutations = {
  setArtist (state, artist) {
    state.artist = artist;
  },
};

const actions = {
  async fetchArtist (context, name) {
    const key = process.env.VUE_APP_CODEAPI_KEY;
    const response = await fetch (`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${key}&format=json`);
    const artist = await response.json();
    context.commit('setArtist', artist);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
}
