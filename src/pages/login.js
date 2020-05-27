import React from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { setToken } from '../utils/auth'
import './login.scss'
export default function Login(props) {
    const onFinish = values => {
        console.log('Received values of form: ', values);
        setToken(values.username)
        props.history.push('/admin')
    };

    const onFinishFailed = errorInfo => {

        console.log('提交失败:', errorInfo);
    };
    return (
        <Card title="管理系统登录" className="login-form">
            <Form
                name="normal_login"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>

                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
            </Button>
                </Form.Item>
            </Form>
        </Card>

    );
}