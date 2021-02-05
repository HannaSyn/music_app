import Vue from 'vue'
import Vuex from 'vuex'
import track from '@/store/modules/track'
import artist from '@/store/modules/artist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    track,
    artist
  }
})
