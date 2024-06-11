import React from 'react'
import { Button, Checkbox, Form, Input, Card } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
export default function Login() {
  const onFinish = (values) => {
    console.log('Success:', values)
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img src={logo} alt="" className="login-logo" />
        <Form
          validateTrigger="onBlur"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="手机号"
            name="mobole"
            rules={[
              {
                required: true,
                message: 'Please input your mobile!',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式不正确',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="验证码"
            name="code"
            rules={[
              {
                required: true,
                message: 'Please input your code!',
              },
              {
                pattern: /^\d{6}$/,
                message: '验证码格式不正确',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 6,
              span: 18,
            }}
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 14,
            }}
          >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
