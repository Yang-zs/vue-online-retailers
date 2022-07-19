const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  isCollapse: (state) => state.collapse.isCollapse,
  menus: (state) => state.user.userInfo.menus,
  tagsViews: (state) => state.tagsview.tagsViews
}
export default getters
