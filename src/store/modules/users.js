// import axios from 'axios'
import ApiService from '../../services/ApiService'

export default {
  state: {
    user: null,
  },
  mutations: {
    updateCurrentUser(state, user) {
      state.user = user
    },
  },
  getters: {
    cartSaleItems() {
      console.log('user cartSaleItems called!')
    },
  },
  actions: {
    signIn({commit, state}) {
      ApiService.signIn(state.user)
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error)
      // axios
      //   .post('/api/sign-in')
      //   .then(result => commit('updateCurrentUser', result.data))
      //   .catch(console.error)
    },
    addRobotToCart() {
      console.log('user addRobotToCart called')
    },
  },
}
