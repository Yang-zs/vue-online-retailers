import request from '@/utils/request'
// 登录
const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST',
    data
  })
}
// 获取用户信息
const getUserInfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
// 退出登录
const logout = () => {
  return request({
    url: '/admin/logout',
    method: 'POST'
  })
}
export default {
  login,
  logout,
  getUserInfo
}
