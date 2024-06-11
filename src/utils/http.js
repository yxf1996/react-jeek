import axios from 'axios'
import { getToken } from './token'

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000,
})
//添加请求拦截器
http.interceptors.request.use(
  (config) => {
    //操作这个config注入token数据
    //按照后端的格式要求进行token的拼接
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//添加响应拦截器
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { http }
