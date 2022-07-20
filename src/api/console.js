import request from '@/utils/request'
// 获取第一行内容数据
const statistics1 = () => {
  return request({
    url: '/admin/statistics1',
    method: 'GET'
  })
}
// 获取店铺及商品提示 交易提示
const statistics2 = () => {
  return request({
    url: '/admin/statistics2',
    method: 'GET'
  })
}

const statistics3 = (type) => {
  return request({
    url: `/admin/statistics3/${type}`,
    method: 'GET'
  })
}
export default {
  statistics1,
  statistics2,
  statistics3
}
