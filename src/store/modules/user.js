import { getItem, setItem } from '@/utils/storage'
import LoginApi from '@/api/login'
import { resetRouter } from '@/utils/resetRouter'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || '',
    userInfo: {}
    // menus: getItem('menus') || []
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
    },
    //  保存Menu
    SET_MENU: (state, menus) => {
      state.menus = menus
      setItem('menus', menus)
    }
  },
  actions: {
    // 登录
    async handleLogin({ commit }, payload) {
      const { data } = await LoginApi.login(payload)
      const token = data.data.token
      if (data.msg.toLowerCase() !== 'ok') return
      commit('SET_TOKEN', token)
      // console.log(data, '登录状态')
      return token
    },
    //  退出登录
    async handleLogout({ commit }) {
      const { status } = await LoginApi.logout()

      if (status === 200) {
        resetRouter()
        commit('SET_TOKEN', '')
        commit('SET_USER_INFO', {})
      }
      // commit('SET_TOKEN', '')
      return status
    },
    //  获取用户信息
    async getUserInfo({ commit }) {
      const { data } = await LoginApi.getUserInfo()
      // console.log(data, '获取用户信息')
      commit('SET_USER_INFO', data.data)
      // commit('SET_MENU', data.data.menus)
    }
  }
}
