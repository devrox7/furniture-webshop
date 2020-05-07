import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    userStatus (state, user) {
      if(user) {
        state.currentUser = user
      }
      else {
        state.currentUser = null
      }
    }
  },
  actions: {
    setUser(context, user) {  
      //  setUser({ commit }, user) {
          context.commit('userStatus', user)
          // commit('userStatus', user)
        }
  },
  modules: {
  },
  getters:{
    currentUser: state => state.currentUser
  }
})
