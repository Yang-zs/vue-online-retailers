// 导入axios
import axios from 'axios'
// 引入store
import store from '../store'
// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // console.log(config, '请求拦截器')
    // 判断是否存在token
    const token = store.getters.token
    if (store.state.user.token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // console.log(response, '响应拦截器')
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 统一了传参处理
const request = (options) => {
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data || {}
  }
  return service(options)
}
// 导出axios实例对象
export default request
