import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', userInfo)
    },

    clearUserInfo(state) {
      state.userInfo = {}
      localStorage.deleted('userInfo')
    }
  }
})