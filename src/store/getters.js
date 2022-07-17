const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  isCollapse: (state) => state.collapse.isCollapse
}
export default getters
