import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class UserInfoStore {
  constructor() {
    makeAutoObservable(this)
  }
  userInfo = {}
  async getUserInfo() {
    const res = await http.get('/user/profile')
    this.userInfo = res.data.data
  }
  setUserInfo(newUserInfo) {
    this.userInfo = newUserInfo
  }
}
export default UserInfoStore
