import { http } from '@/utils'
import { makeAutoObservable } from 'mobx'
import { getToken, removeToken, setToken } from '@/utils/token'
import { getLoginInfo } from '@/api/user'
class LoginStore {
  //初始化token
  token = getToken() || ''
  constructor() {
    makeAutoObservable(this)
  }
  //登录
  login = async ({ mobile, code }) => {
    const res = await getLoginInfo({ code, mobile })
    this.token = res.data.data.token
    //持久化token
    setToken(this.token)
  }
  //退出登录
  loginOut = () => {
    this.token = ''
    removeToken()
  }
}
export default LoginStore
