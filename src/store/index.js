import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from './storage'
Vue.use(Vuex)
const userkey = 'toutiao-user'
export default new Vuex.Store({
  state: {
    user: getItem(userkey)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(userkey, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
