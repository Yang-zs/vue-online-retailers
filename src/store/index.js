import { createStore } from 'vuex'
import user from './modules/user'
import getters from '@/store/getters'
import collapse from '@/store/modules/collapse'

export default createStore({
  getters,
  modules: {
    user,
    collapse
  }
})
