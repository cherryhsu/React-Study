import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import logo from './logo.jpg'
import { adminRoutes } from '../../routes'
import { withRouter } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons';
import { clearToken } from '../../utils/auth'
import './frame.scss'

const { Header, Content, Sider } = Layout;
//只筛选isShow为true的路由
const routes = adminRoutes.filter(route => route.isShow)

function Index(props) {
    const menu = (<Menu onClick={(p) => {
        if (p.key == 'lgOut') {
            clearToken()
            props.history.push('/login')
        }
    }}>
        <Menu.Item key="noti">通知中心</Menu.Item>
        <Menu.Item key="setting">设置</Menu.Item>
        <Menu.Item key="lgOut">退出</Menu.Item>
    </Menu>)
    return (

        <Layout>
            <Header className="header">
                <div className="logo" >
                    <img style={{ width: 100 }} src={logo} alt="logo" />
                </div>
                <Dropdown overlay={menu}>

                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Avatar style={{ background: "#00a2ae" }}>C</Avatar> 超级管理员 <DownOutlined />
                    </a>
                </Dropdown>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >

                        {routes.map(route => {
                            return (<Menu.Item key={route.path} onClick={p => props.history.push(p.key)}>{<route.icon />}{route.title}</Menu.Item>)
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default withRouter(Index)
