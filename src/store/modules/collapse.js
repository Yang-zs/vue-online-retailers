export default {
  namespaced: true,
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse
    }
  }
}
