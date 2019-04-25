import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: `/api`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  // Robot service
  getParts() {
    return apiClient.get('/parts')
  },
  addRobotToCart(cart) {
    return apiClient.post('/cart', cart)
  },

  // User service
  signIn(payload) {
    apiClient.post('/sign-in', payload)
  },
}
