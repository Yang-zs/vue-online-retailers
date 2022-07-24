import request from '@/utils/request'
// 获取规格列表
const getSkusList = (page = 1) => {
  return request({
    url: `/admin/skus/${page}`,
    method: 'GET'
  })
}
// 添加规格列表
const addSkusList = (data) => {
  return request({
    url: '/admin/skus',
    method: 'POST',
    data
  })
}

export default {
  getSkusList,
  addSkusList
}
