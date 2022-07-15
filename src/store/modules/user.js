import { getItem, setItem } from '@/utils/storage'
import LoginApi from '@/api/login'

export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: {}
  },
  mutations: {
    // 保存token
    SET_TOKEN: (state, token) => {
      state.token = token
      setItem('token', token)
    },
    // 保存用户信息
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
      setItem('userInfo', userInfo)
    }
  },
  actions: {
    async handleLogin ({ commit }, payload) {
      const { data } = await LoginApi.login(payload)
      const token = data.data.token
      if (data.msg.toLowerCase() !== 'ok') return
      commit('SET_TOKEN', token)
      // console.log(data, '登录状态')
      return token
    }
  }
}
