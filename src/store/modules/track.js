const state = {
  tracks: [],
};

const getters = {
  tracks (state) {
    return state.tracks; 
  },
};

const mutations = {
  setTracks (state, tracks) {
    state.tracks = tracks;
  },
};

const actions = {
  async fetchTracks (context) {

    const key = process.env.VUE_APP_CODEAPI_KEY;
    const response = await fetch (`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`);
    const tracks = await response.json();
    context.commit('setTracks', tracks.tracks.track);
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
}
