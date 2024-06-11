import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
import { getUserInfo } from '@/api/user'
class UserInfoStore {
  constructor() {
    makeAutoObservable(this)
  }
  userInfo = {}
  async getUserInfo() {
    const res = await getUserInfo()
    this.userInfo = res.data.data
  }
  setUserInfo(newUserInfo) {
    this.userInfo = newUserInfo
  }
}
export default UserInfoStore
