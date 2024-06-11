import LoginStore from './modules/loginStore'
import UserInfoStore from './modules/userInfoStore'
import React from 'react'

class RootStore {
  //组合模块store
  constructor() {
    this.loginStore = new LoginStore()
    this.userInfoStore = new UserInfoStore()
  }
}
//导入useStore方法供组件使用数据
const rootStore = React.createContext(new RootStore())
const useStore = () => React.useContext(rootStore)
export { useStore }
