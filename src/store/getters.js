const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  isCollapse: (state) => state.collapse.isCollapse,
  menus: (state) => state.user.userInfo.menus
}
export default getters
