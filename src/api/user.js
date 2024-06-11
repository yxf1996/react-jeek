import { http } from '@/utils'
export const getUserInfo = () => {
  return http.get('/user/profile')
}
export const getLoginInfo = (data) => {
  return http.post('/authorizations', data)
}
