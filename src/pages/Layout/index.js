import { Layout, Menu, Popconfirm, message } from 'antd'
import { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStore } from '@/stores'

const { Header, Sider } = Layout
const items = [
  {
    label: '首页',
    icon: <HomeOutlined />,
    key: '/home',
  },
  {
    label: '内容管理',
    icon: <DiffOutlined />,
    key: '/article',
  },
  {
    label: '发布文章',
    icon: <EditOutlined />,
    key: '/publish',
  },
]
const GeekLayout = () => {
  const { userInfoStore, loginStore } = useStore()
  const navigate = useNavigate()
  const [selectedKey, setSelectedKey] = useState('/home')
  const handlemenuClick = ({ key }) => {
    setSelectedKey(key)
  }
  const handleConfirm = () => {
    loginStore.loginOut()
    navigate('/login')
  }
  useEffect(() => {
    try {
      userInfoStore.getUserInfo()
    } catch {
      message.error('获取用户信息失败')
    }
  }, [userInfoStore])
  console.log(userInfoStore.userInfo, 'xf')
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfoStore.userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm
              title="是否确认退出？"
              okText="退出"
              cancelText="取消"
              onConfirm={handleConfirm}
            >
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedKey}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={handlemenuClick}
          />
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)
