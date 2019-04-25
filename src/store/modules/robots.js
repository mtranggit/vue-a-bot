// import axios from 'axios'
import ApiService from '../../services/ApiService'

export default {
  // state are always namespaced, setting namespaced to true will also
  // ensure actions, mutations and getters are also namespaced
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot)
    },
    updateParts(state, parts) {
      state.parts = parts
    },
  },
  actions: {
    getParts({commit}) {
      ApiService.getParts()
        .then(result => commit('updateParts', result.data))
        .catch(console.error)
      // axios
      //   .get('/api/parts')
      //   .then(result => commit('updateParts', result.data))
      //   .catch(console.error)
    },
    addRobotToCart({commit, state}, robot) {
      const cart = [...state.cart, robot]
      return ApiService.addRobotToCart(cart).then(() => commit('addRobotToCart', robot))
      // return axios.post('/api/cart', cart).then(() => commit('addRobotToCart', robot))
    },
  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter(item => item.head.onSale)
    },
  },
}
